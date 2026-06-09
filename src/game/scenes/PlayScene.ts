import Phaser from "phaser";
import { GAME_CONFIG } from "../config/gameConfig";
import { PLAYER_CONFIG } from "../config/player";
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

export class PlayScene extends Phaser.Scene {
  private level!: LevelDefinition;
  private player!: Player;
  private controller!: PlayerController;
  private combat!: CombatSystem;
  private inputSystem!: InputSystem;
  private terrain!: BuiltTerrain;
  private spawned!: SpawnedWorld;
  private audioSystem!: AudioSystem;
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

    this.configurePhysics();
    this.configureCamera();
    this.configureEffects(settings.reduceShake);

    this.scene.launch("HudScene");
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.scene.stop("HudScene");
      this.registry.remove("hud");
    });
  }

  update(time: number, delta: number): void {
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
      this.createBurst(x, y, flavor === "dash" ? "particle-leaf" : "particle-dust", 7);
    });
    this.events.on("fx:spark", (x: number, y: number) => {
      this.createBurst(x, y, "particle-spark", 11);
      if (!reduceShake) {
        this.cameras.main.shake(90, 0.0028);
      }
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
    this.events.on("audio:collect", () => cue("collect"));
    this.events.on("audio:hurt", () => cue("hurt"));
    this.events.on("audio:checkpoint", () => cue("checkpoint"));
    this.events.on("audio:goal", () => cue("goal"));
  }

  private createBurst(x: number, y: number, texture: string, count: number): void {
    for (let i = 0; i < count; i += 1) {
      const particle = this.add.image(x, y, texture).setDepth(50);
      const angle = Phaser.Math.FloatBetween(-Math.PI, 0);
      const distance = Phaser.Math.Between(18, 42);
      this.tweens.add({
        targets: particle,
        x: x + Math.cos(angle) * distance,
        y: y + Math.sin(angle) * distance,
        alpha: 0,
        scale: 0.2,
        duration: Phaser.Math.Between(240, 520),
        onComplete: () => particle.destroy(),
      });
    }
  }

  private collect(collectible: Collectible): void {
    if (!collectible.active) {
      return;
    }
    this.scoreState = addCollectibleScore(this.scoreState, collectible.kind);
    collectible.collect();
    this.events.emit("audio:collect");
    this.events.emit("fx:spark", collectible.x, collectible.y);
  }

  private collectPowerup(powerup: Powerup): void {
    if (!powerup.active) {
      return;
    }
    this.player.applyPower(powerup.kind, powerup.durationMs, this.time.now);
    powerup.disableBody(true, true);
    this.events.emit("audio:powerup");
    this.events.emit("fx:spark", powerup.x, powerup.y);
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
    this.events.emit("audio:checkpoint");
  }

  private damageOrRespawn(applyDamage = true): void {
    if (applyDamage && !this.player.damage(this.time.now)) {
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
    this.player.hasControl = false;
    this.player.setAnimationState("victory");
    this.player.setVelocity(0, 0);
    this.saveSystem.recordCompletion(this.level.id, this.level.index, elapsedMs, this.scoreState.score);
    const nextLevel = getNextLevel(this.level);
    this.time.delayedCall(1100, () => {
      this.scene.stop("HudScene");
      if (!nextLevel || this.level.index >= ALL_LEVELS.length - 1) {
        this.scene.start("GameCompleteScene", { score: this.scoreState.score });
      } else {
        this.scene.start("PlayScene", { levelIndex: nextLevel.index });
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
