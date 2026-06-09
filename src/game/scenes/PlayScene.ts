import Phaser from "phaser";
import { GAME_CONFIG } from "../config/gameConfig";
import {
  PLAYER_CONFIG,
  PLAYER_MOTION_EVENTS,
  type PlayerDashTrailCueConfig,
  type PlayerFeedbackCueConfig,
  type PlayerPowerAuraCueConfig,
  type PlayerSquashStretchCueConfig,
} from "../config/player";
import { WORLD_CONFIG } from "../config/world";
import type { Boss } from "../entities/Boss";
import { Player } from "../entities/Player";
import type { Collectible } from "../entities/Collectible";
import type { MovingPlatform } from "../entities/MovingPlatform";
import type { Powerup } from "../entities/Powerup";
import { ALL_LEVELS, getLevelByIndex, getNextLevel } from "../levels";
import type { CheckpointDefinition, LevelDefinition } from "../levels/schema";
import { AudioSystem } from "../systems/AudioSystem";
import { oneWayPlatformProcess } from "../systems/CollisionSystem";
import { CombatSystem } from "../systems/CombatSystem";
import { InputSystem } from "../systems/InputSystem";
import { LevelSystem, type BuiltTerrain } from "../systems/LevelSystem";
import { MotionSystem, type FeedbackEvent } from "../systems/MotionSystem";
import { PlayerController } from "../systems/PlayerController";
import { SaveSystem } from "../systems/SaveSystem";
import {
  addCollectibleScore,
  addCompletionBonus,
  addEnemyScore,
  createScoreState,
  type ScoreState,
} from "../systems/ScoringSystem";
import { SpawnSystem, type SpawnedWorld } from "../systems/SpawnSystem";
import {
  hasSeenFirstPlayOnboarding,
  markFirstPlayOnboardingSeen,
  TouchControlsSystem,
} from "../systems/TouchControlsSystem";

export class PlayScene extends Phaser.Scene {
  private level!: LevelDefinition;
  private player!: Player;
  private controller!: PlayerController;
  private combat!: CombatSystem;
  private inputSystem!: InputSystem;
  private terrain!: BuiltTerrain;
  private spawned!: SpawnedWorld;
  private audioSystem!: AudioSystem;
  private motionSystem!: MotionSystem;
  private touchControls?: TouchControlsSystem;
  private saveSystem = new SaveSystem();
  private scoreState: ScoreState = createScoreState();
  private startedAt = 0;
  private completed = false;
  private soundCue = "";

  constructor() {
    super("PlayScene");
  }

  init(data: { levelIndex?: number }): void {
    this.level = getLevelByIndex(data.levelIndex ?? GAME_CONFIG.startingLevel);
    this.registry.set("currentLevelIndex", this.level.index);
    this.scoreState = createScoreState();
    this.completed = false;
  }

  create(): void {
    this.startedAt = this.time.now;
    this.inputSystem = new InputSystem(this);
    this.audioSystem = new AudioSystem(this);
    const settings = this.saveSystem.loadSettings();
    this.motionSystem = new MotionSystem(this, { settings });
    this.audioSystem.setVolume(settings.volume);
    this.input.once("pointerdown", () => {
      this.audioSystem.unlock();
      this.audioSystem.startMusic();
    });
    this.input.keyboard?.once("keydown", () => {
      this.audioSystem.unlock();
      this.audioSystem.startMusic();
    });

    const levelSystem = new LevelSystem(this);
    levelSystem.createBackground(this.level);
    this.terrain = levelSystem.buildTerrain(this.level);
    this.spawned = new SpawnSystem(this).spawn(this.level);

    this.player = new Player(this, this.level.playerSpawn.x, this.level.playerSpawn.y);
    this.player.lives = GAME_CONFIG.defaultLives;
    if (settings.assistMode) {
      this.player.lives = 99;
      this.player.health = PLAYER_CONFIG.maxHealth + 2;
    }
    this.controller = new PlayerController(this, this.player);
    this.combat = new CombatSystem(this, this.player, this.controller);
    this.touchControls = new TouchControlsSystem(this, this.inputSystem, {
      preference: settings.touchControls,
    });

    this.configurePhysics();
    this.configureCamera();
    this.configureEffects(settings.reduceShake || settings.motionLevel !== "full" || !settings.screenShake);
    this.motionSystem.sceneFade("in", 220);

    this.scene.launch("HudScene");
    this.createFirstPlayOnboarding(this.touchControls.isVisible());
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.touchControls?.destroy();
      this.touchControls = undefined;
      this.scene.stop("HudScene");
      this.registry.remove("hud");
    });
  }

  update(time: number, delta: number): void {
    this.touchControls?.syncInput();
    const snapshot = this.inputSystem.read();
    if (snapshot.pausePressed && !this.completed) {
      this.scene.pause();
      this.scene.launch("PauseScene");
      return;
    }
    this.controller.update(snapshot, time, delta);
    this.spawned.enemies.children.each((child) => {
      const enemy = child as { updateEnemy?: (time: number) => void };
      enemy.updateEnemy?.(time);
      return true;
    });
    this.spawned.movingPlatforms.children.each((child) => {
      (child as MovingPlatform).updatePlatform(time);
      return true;
    });
    this.spawned.boss?.updateBoss(time);
    this.applyWindZones();
    this.checkFallOut();
    this.updateHud();
  }

  private configurePhysics(): void {
    this.physics.world.setBounds(
      0,
      0,
      this.level.columns * WORLD_CONFIG.tileSize,
      this.level.rows * WORLD_CONFIG.tileSize,
    );
    this.physics.add.collider(this.player, this.terrain.solids);
    this.physics.add.collider(
      this.player,
      this.terrain.platforms,
      undefined,
      oneWayPlatformProcess as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback,
    );
    this.physics.add.collider(this.player, this.spawned.movingPlatforms);
    this.physics.add.collider(this.spawned.enemies, this.terrain.solids);
    this.physics.add.collider(
      this.spawned.enemies,
      this.terrain.platforms,
      undefined,
      oneWayPlatformProcess as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback,
    );
    this.physics.add.collider(this.spawned.boss ?? [], this.terrain.solids);
    this.physics.add.overlap(this.player, this.terrain.hazards, () => this.damageOrRespawn());
    this.physics.add.overlap(this.player, this.terrain.springs, () => {
      this.player.setVelocityY(PLAYER_CONFIG.springJumpVelocity);
      this.events.emit("audio:jump");
      this.events.emit("fx:spark", this.player.x, this.player.y);
    });
    this.physics.add.overlap(this.player, this.spawned.collectibles, (_player, collectible) => {
      this.collect(collectible as Collectible);
    });
    this.physics.add.overlap(this.player, this.spawned.powerups, (_player, powerup) => {
      this.collectPowerup(powerup as Powerup);
    });
    this.physics.add.overlap(this.player, this.spawned.checkpoints, (_player, checkpoint) => {
      this.activateCheckpoint(checkpoint as Phaser.Physics.Arcade.Sprite);
    });
    this.physics.add.overlap(this.player, this.spawned.enemies, (_player, enemy) => {
      const result = this.combat.handleEnemyOverlap(enemy as Phaser.GameObjects.GameObject);
      if (result === "defeated") {
        this.scoreState = addEnemyScore(this.scoreState);
      } else if (result === "hurt") {
        this.damageOrRespawn(false);
      }
    });
    if (this.spawned.boss) {
      this.physics.add.overlap(this.player, this.spawned.boss, (_player, bossObject) => {
        const result = this.combat.handleBossOverlap(bossObject as Boss);
        if (result === "defeated") {
          this.scoreState = addEnemyScore(this.scoreState, true);
          this.spawned.goal.locked = false;
          this.spawned.goal.clearTint();
        } else if (result === "hurt") {
          this.damageOrRespawn(false);
        }
      });
    }
    this.physics.add.overlap(this.player, this.spawned.goal, () => this.completeLevel());
  }

  private configureCamera(): void {
    const width = this.level.columns * WORLD_CONFIG.tileSize;
    const height = this.level.rows * WORLD_CONFIG.tileSize;
    this.cameras.main.setBounds(0, 0, width, height);
    this.cameras.main.startFollow(
      this.player,
      true,
      WORLD_CONFIG.cameraLerpX,
      WORLD_CONFIG.cameraLerpY,
      -96,
      42,
    );
    this.cameras.main.setDeadzone(170, 90);
  }

  private configureEffects(reduceShake: boolean): void {
    this.events.on("fx:dust", (x: number, y: number, flavor: string) => {
      this.motionSystem.burst(x, y, flavor === "dash" ? "particle-leaf" : "particle-dust", {
        count: flavor === "dash" ? 10 : 7,
      });
    });
    this.events.on("fx:spark", (x: number, y: number) => {
      this.motionSystem.burst(x, y, "particle-spark", { count: 11 });
      if (!reduceShake) {
        this.motionSystem.cameraImpulse(0.0028, 90);
      }
    });
    this.events.on("feedback", (event: FeedbackEvent) => this.motionSystem.handleFeedback(event));
    this.events.on(
      PLAYER_MOTION_EVENTS.squashStretch,
      (cue: PlayerSquashStretchCueConfig & { target?: Phaser.GameObjects.GameObject }) => {
        if (cue.target) {
          this.motionSystem.squash(cue.target, {
            scaleX: cue.scaleX,
            scaleY: cue.scaleY,
            duration: cue.durationMs,
          });
        }
      },
    );
    this.events.on(
      PLAYER_MOTION_EVENTS.dashTrail,
      (cue: PlayerDashTrailCueConfig & { target?: Phaser.GameObjects.Sprite }) => {
        if (cue.target) {
          this.motionSystem.trail(cue.target, cue.target.texture.key, {
            alpha: cue.alpha,
            count: 5,
            duration: cue.durationMs,
            spacingMs: cue.intervalMs,
            tint: cue.tint,
          });
        }
      },
    );
    this.events.on(
      PLAYER_MOTION_EVENTS.powerAura,
      (cue: PlayerPowerAuraCueConfig & { target?: Phaser.GameObjects.GameObject; x: number; y: number }) => {
        if (cue.action !== "end") {
          this.motionSystem.handleFeedback({
            kind: "powerup",
            powerupKind: cue.kind,
            target: cue.target,
            x: cue.x,
            y: cue.y,
          });
        }
      },
    );
    this.events.on(
      PLAYER_MOTION_EVENTS.feedback,
      (cue: PlayerFeedbackCueConfig & { target?: Phaser.GameObjects.GameObject; x: number; y: number }) => {
        this.motionSystem.handleFeedback({ kind: cue.cue, target: cue.target, x: cue.x, y: cue.y });
      },
    );
    this.events.on("enemy:damaged", (enemy: Phaser.GameObjects.GameObject) => {
      const sprite = enemy as Phaser.GameObjects.GameObject & {
        x: number;
        y: number;
        getData?: (key: string) => unknown;
      };
      this.motionSystem.handleFeedback({
        kind: "enemyHit",
        enemyKind: String(sprite.getData?.("enemyKind") ?? ""),
        target: enemy,
        x: sprite.x,
        y: sprite.y,
      });
    });
    this.events.on("enemy:defeated", (enemy: Phaser.GameObjects.GameObject) => {
      const sprite = enemy as Phaser.GameObjects.GameObject & {
        x: number;
        y: number;
        getData?: (key: string) => unknown;
      };
      this.motionSystem.handleFeedback({
        kind: "enemyDefeat",
        enemyKind: String(sprite.getData?.("enemyKind") ?? ""),
        target: enemy,
        x: sprite.x,
        y: sprite.y,
      });
    });
    this.events.on("enemy:tell", (_cue: unknown, enemy: Phaser.GameObjects.GameObject) => {
      this.motionSystem.pulse(enemy, { scale: 1.1, duration: 100 });
    });
    this.events.on("boss:attack", (event: { attack: string; phase: number; x: number; y: number }) => {
      this.motionSystem.handleFeedback({
        kind: "bossAttack",
        attack: event.attack,
        phase: event.phase,
        x: event.x,
        y: event.y,
      });
    });
    this.events.on("boss:phase", (phase: number, previousPhase: number, boss: Boss) => {
      this.motionSystem.handleFeedback({
        kind: "bossPhase",
        phase,
        previousPhase,
        target: boss,
        x: boss.x,
        y: boss.y,
      });
    });
    this.events.on("boss:defeated", (boss: Boss) => {
      this.motionSystem.handleFeedback({
        kind: "enemyDefeat",
        enemyKind: "boss",
        target: boss,
        x: boss.x,
        y: boss.y,
      });
    });
    const cue = (label: string) => {
      this.soundCue = label;
      this.time.delayedCall(850, () => {
        if (this.soundCue === label) {
          this.soundCue = "";
        }
      });
    };
    this.events.on("audio:jump", () => cue("jump"));
    this.events.on("audio:land", () => cue("land"));
    this.events.on("audio:dash", () => cue("dash"));
    this.events.on("audio:collect", () => cue("collect"));
    this.events.on("audio:hurt", () => cue("hurt"));
    this.events.on("audio:checkpoint", () => cue("checkpoint"));
    this.events.on("audio:powerup", () => cue("powerup"));
    this.events.on("audio:goal", () => cue("goal"));
  }

  private createFirstPlayOnboarding(touchControlsVisible: boolean): void {
    if (hasSeenFirstPlayOnboarding()) {
      return;
    }

    const overlay = this.add.container(480, 270).setScrollFactor(0).setDepth(2600);
    const panel = this.add.rectangle(0, 0, 560, 214, 0x020617, 0.9).setStrokeStyle(2, 0x2dd4bf, 0.62);
    const title = this.add
      .text(0, -70, "First Run", {
        fontFamily: "system-ui",
        fontSize: "30px",
        fontStyle: "700",
        color: "#f8fafc",
      })
      .setOrigin(0.5);
    const body = this.add
      .text(
        0,
        -14,
        touchControlsVisible
          ? "Use the left and right pads, then tap Jump or Dash."
          : "Move with A/D or arrows. Jump with Space. Dash with Shift or X.",
        {
          fontFamily: "system-ui",
          fontSize: "18px",
          color: "#bae6fd",
          align: "center",
          wordWrap: { width: 500 },
        },
      )
      .setOrigin(0.5);
    const hint = this.add
      .text(0, 58, "Tap or press any key to start", {
        fontFamily: "system-ui",
        fontSize: "16px",
        color: "#fde68a",
      })
      .setOrigin(0.5);
    let dismissed = false;
    const dismiss = () => {
      if (dismissed) {
        return;
      }
      dismissed = true;
      markFirstPlayOnboardingSeen();
      overlay.destroy();
    };

    overlay.add([panel, title, body, hint]);
    this.input.once("pointerdown", dismiss);
    this.input.keyboard?.once("keydown", dismiss);
  }

  private collect(collectible: Collectible): void {
    if (!collectible.active) {
      return;
    }
    this.scoreState = addCollectibleScore(this.scoreState, collectible.kind);
    const pickup = collectible.collect();
    this.motionSystem.handleFeedback({
      kind: "pickup",
      collectibleKind: collectible.kind,
      score: collectible.score,
      target: collectible,
      x: pickup?.x ?? collectible.x,
      y: pickup?.y ?? collectible.y,
    });
    this.events.emit("audio:collect");
  }

  private collectPowerup(powerup: Powerup): void {
    if (!powerup.active) {
      return;
    }
    this.player.applyPower(powerup.kind, powerup.durationMs, this.time.now);
    this.motionSystem.handleFeedback({
      kind: "powerup",
      powerupKind: powerup.kind,
      target: this.player,
      x: powerup.x,
      y: powerup.y,
    });
    powerup.disableBody(true, true);
    this.events.emit("audio:powerup");
  }

  private activateCheckpoint(checkpoint: Phaser.Physics.Arcade.Sprite): void {
    const definition = checkpoint.getData("checkpoint") as CheckpointDefinition | undefined;
    if (!definition || checkpoint.getData("active")) {
      return;
    }
    checkpoint.setData("active", true);
    checkpoint.setTint(0xfde68a);
    this.player.checkpoint.set(definition.x, definition.y);
    this.scoreState.score += WORLD_CONFIG.checkpointScore;
    this.motionSystem.handleFeedback({ kind: "checkpoint", target: checkpoint, x: checkpoint.x, y: checkpoint.y });
    this.events.emit("audio:checkpoint");
  }

  private damageOrRespawn(applyDamage = true): void {
    if (applyDamage && !this.player.damage(this.time.now)) {
      this.motionSystem.handleFeedback({ kind: "hurt", target: this.player, x: this.player.x, y: this.player.y });
      this.events.emit("audio:hurt");
      return;
    }
    if (this.player.health > 0 && !applyDamage) {
      return;
    }
    this.scoreState.deaths += 1;
    this.player.lives -= 1;
    if (this.player.lives < 0) {
      this.scene.start("MenuScene");
      return;
    }
    this.player.respawn();
    this.motionSystem.handleFeedback({ kind: "respawn", target: this.player, x: this.player.x, y: this.player.y });
  }

  private checkFallOut(): void {
    if (this.player.y <= this.level.rows * WORLD_CONFIG.tileSize + 180) {
      return;
    }
    this.player.health = 0;
    this.damageOrRespawn(false);
  }

  private applyWindZones(): void {
    for (const zone of this.level.windZones) {
      const inside =
        this.player.x >= zone.x &&
        this.player.x <= zone.x + zone.width &&
        this.player.y >= zone.y &&
        this.player.y <= zone.y + zone.height;
      if (inside) {
        this.player.setVelocity(
          this.player.arcadeBody.velocity.x + zone.forceX,
          this.player.arcadeBody.velocity.y + zone.forceY,
        );
      }
    }
  }

  private completeLevel(): void {
    if (this.completed || this.spawned.goal.locked) {
      return;
    }
    this.completed = true;
    const elapsedMs = this.time.now - this.startedAt;
    const secondsRemaining = Math.max(0, this.level.timeLimit - elapsedMs / 1000);
    this.scoreState = addCompletionBonus(this.scoreState, secondsRemaining);
    this.events.emit("audio:goal");
    this.motionSystem.handleFeedback({ kind: "goal", target: this.spawned.goal, x: this.spawned.goal.x, y: this.spawned.goal.y });
    this.player.hasControl = false;
    this.player.setAnimationState("victory");
    this.motionSystem.handleFeedback({ kind: "victory", target: this.player, x: this.player.x, y: this.player.y });
    this.player.setVelocity(0, 0);
    this.saveSystem.recordCompletion(this.level.id, this.level.index, elapsedMs, this.scoreState.score);
    const nextLevel = getNextLevel(this.level);
    this.time.delayedCall(1100, () => {
      this.scene.stop("HudScene");
      if (!nextLevel || this.level.index >= ALL_LEVELS.length - 1) {
        this.motionSystem.sceneFade("out", 180, () =>
          this.scene.start("GameCompleteScene", { score: this.scoreState.score }),
        );
      } else {
        this.motionSystem.sceneFade("out", 180, () => this.scene.start("PlayScene", { levelIndex: nextLevel.index }));
      }
    });
  }

  private updateHud(): void {
    const elapsedSeconds = Math.floor((this.time.now - this.startedAt) / 1000);
    const settings = this.saveSystem.loadSettings();
    this.registry.set("hud", {
      levelTitle: this.level.title,
      score: this.scoreState.score,
      lives: this.player.lives,
      health: this.player.health,
      glimmers: this.scoreState.glimmers,
      hiddenSeeds: this.scoreState.hiddenSeeds,
      timeRemaining: Math.max(0, this.level.timeLimit - elapsedSeconds),
      soundCue: settings.showSoundCues ? this.soundCue : "",
    });
  }
}
