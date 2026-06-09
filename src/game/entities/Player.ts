import Phaser from "phaser";
import {
  PLAYER_CONFIG,
  PLAYER_MOTION_EVENTS,
  createPlayerFeedbackCue,
  createPlayerMotionCueEvent,
  createPlayerPowerAuraCue,
  createPlayerSquashStretchCue,
  type PlayerAnimationState,
  type PlayerFacing,
  type PlayerFeedbackCue,
  type PlayerMotionCueName,
  type PlayerPowerAuraAction,
  type PlayerPowerAuraReason,
  type PlayerPowerKind,
  type PlayerSquashStretchCue,
} from "../config/player";
import { animationKeyForState } from "../systems/AnimationSystem";

export interface PlayerPowerState {
  shield: boolean;
  springBootsUntil: number;
  starburstUntil: number;
  gliderUntil: number;
}

export class Player extends Phaser.Physics.Arcade.Sprite {
  health: number = PLAYER_CONFIG.maxHealth;
  lives: number = 5;
  animationState: PlayerAnimationState = "idle";
  facing: PlayerFacing = "right";
  checkpoint = new Phaser.Math.Vector2(0, 0);
  invulnerableUntil = 0;
  hurtAnimationUntil = 0;
  victoryStartedAt = Number.NEGATIVE_INFINITY;
  hasControl = true;
  powers: PlayerPowerState = {
    shield: false,
    springBootsUntil: 0,
    starburstUntil: 0,
    gliderUntil: 0,
  };

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "hero-idle-0");
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setOrigin(0.5, 1);
    this.setDepth(20);
    this.setCollideWorldBounds(false);
    this.setSize(PLAYER_CONFIG.width, PLAYER_CONFIG.height);
    this.setOffset(4, 2);
    this.checkpoint.set(x, y);
    const body = this.arcadeBody;
    body.setMaxVelocity(PLAYER_CONFIG.maxDashSpeed, 980);
    body.setDragX(PLAYER_CONFIG.groundDrag);
  }

  get arcadeBody(): Phaser.Physics.Arcade.Body {
    return this.body as Phaser.Physics.Arcade.Body;
  }

  get isInvulnerable(): boolean {
    return this.scene.time.now < this.invulnerableUntil || this.hasStarburst(this.scene.time.now);
  }

  hasSpringBoots(time: number): boolean {
    return this.powers.springBootsUntil > time;
  }

  hasStarburst(time: number): boolean {
    return this.powers.starburstUntil > time;
  }

  hasGlider(time: number): boolean {
    return this.powers.gliderUntil > time;
  }

  setAnimationState(state: PlayerAnimationState): void {
    if (this.animationState === state) {
      return;
    }
    this.animationState = state;
    const animationKey = animationKeyForState(state);
    if (this.anims.exists(animationKey)) {
      this.play(animationKey, true);
    }
    if (state === "victory") {
      this.victoryStartedAt = this.scene.time.now;
      this.emitSquashStretch("victory");
      this.emitFeedback("victory");
      this.emitMotionCue("victory", this.victoryStartedAt, { intensity: 1.25 });
    }
  }

  setFacing(facing: PlayerFacing): void {
    this.facing = facing;
    this.setFlipX(facing === "left");
  }

  damage(time: number): boolean {
    if (this.isInvulnerable) {
      return false;
    }
    if (this.powers.shield) {
      this.powers.shield = false;
      this.invulnerableUntil = time + PLAYER_CONFIG.hurtInvulnerabilityMs * 0.6;
      this.setTint(0x83f7ff);
      this.scene.time.delayedCall(260, () => this.clearTint());
      this.emitSquashStretch("hurt", time);
      this.emitPowerAura("shield", 0, time, "end", "absorbed-hit");
      this.emitFeedback("hurt", time, true);
      this.emitMotionCue("hurt", time, { reason: "absorbed-hit", shielded: true });
      return false;
    }
    this.health -= 1;
    this.invulnerableUntil = time + PLAYER_CONFIG.hurtInvulnerabilityMs;
    this.hurtAnimationUntil = time + PLAYER_CONFIG.hurtStateMs;
    this.setAnimationState("hurt");
    this.setTint(0xff6b7a);
    this.scene.time.delayedCall(320, () => this.clearTint());
    this.emitSquashStretch("hurt", time);
    this.emitFeedback("hurt", time);
    this.emitMotionCue("hurt", time, { durationMs: PLAYER_CONFIG.hurtStateMs, intensity: 1.18 });
    return this.health <= 0;
  }

  respawn(): void {
    this.health = PLAYER_CONFIG.maxHealth;
    this.setPosition(this.checkpoint.x, this.checkpoint.y);
    this.setVelocity(0, 0);
    this.clearTint();
    this.setAlpha(1);
    this.hasControl = true;
    this.hurtAnimationUntil = 0;
    this.victoryStartedAt = Number.NEGATIVE_INFINITY;
    this.invulnerableUntil = this.scene.time.now + PLAYER_CONFIG.hurtInvulnerabilityMs;
    this.setAnimationState("idle");
    this.emitSquashStretch("respawn");
    this.emitFeedback("respawn");
    this.emitMotionCue("respawn", this.scene.time.now, { intensity: 0.86 });
  }

  startVictory(time = this.scene.time.now): void {
    this.hasControl = false;
    this.victoryStartedAt = time;
    this.setAnimationState("victory");
  }

  applyPower(kind: PlayerPowerKind, durationMs: number, time: number): void {
    const wasActive = this.hasPower(kind, time);
    switch (kind) {
      case "shield":
        this.powers.shield = true;
        this.setTint(0x83f7ff);
        this.scene.time.delayedCall(220, () => this.clearTint());
        break;
      case "springBoots":
        this.powers.springBootsUntil = time + durationMs;
        break;
      case "starburst":
        this.powers.starburstUntil = time + durationMs;
        break;
      case "gliderLeaf":
        this.powers.gliderUntil = time + durationMs;
        break;
    }
    this.emitPowerAura(kind, durationMs, time, wasActive ? "refresh" : "start");
    this.emitMotionCue("power", time, {
      action: wasActive ? "refresh" : "start",
      durationMs,
      powerupKind: kind,
    });
    this.schedulePowerAuraEnd(kind, durationMs, time);
  }

  private hasPower(kind: PlayerPowerKind, time: number): boolean {
    switch (kind) {
      case "shield":
        return this.powers.shield;
      case "springBoots":
        return this.hasSpringBoots(time);
      case "starburst":
        return this.hasStarburst(time);
      case "gliderLeaf":
        return this.hasGlider(time);
    }
  }

  private powerExpiresAt(kind: PlayerPowerKind): number | null {
    switch (kind) {
      case "shield":
        return null;
      case "springBoots":
        return this.powers.springBootsUntil;
      case "starburst":
        return this.powers.starburstUntil;
      case "gliderLeaf":
        return this.powers.gliderUntil;
    }
  }

  private schedulePowerAuraEnd(kind: PlayerPowerKind, durationMs: number, time: number): void {
    if (durationMs <= 0) {
      return;
    }
    const expiresAt = time + durationMs;
    this.scene.time.delayedCall(durationMs, () => {
      if (this.powerExpiresAt(kind) === expiresAt) {
        this.emitPowerAura(kind, 0, expiresAt, "end", "expired");
        this.emitMotionCue("power", expiresAt, {
          action: "end",
          powerupKind: kind,
          reason: "expired",
        });
      }
    });
  }

  private emitMotionCue(
    cue: PlayerMotionCueName,
    time: number,
    options: Partial<Pick<
      ReturnType<typeof createPlayerMotionCueEvent>,
      "action" | "durationMs" | "intensity" | "powerupKind" | "reason" | "shielded" | "source"
    >> = {},
  ): void {
    const event = createPlayerMotionCueEvent({
      cue,
      facing: this.facing,
      health: this.health,
      x: this.x,
      y: this.y,
      at: time,
      ...options,
    });
    this.setData("motionCue", event);
    this.scene.events.emit(PLAYER_MOTION_EVENTS.playerMotion, event, this);
    this.scene.events.emit(PLAYER_MOTION_EVENTS.cue, event, this);
  }

  private emitSquashStretch(cue: PlayerSquashStretchCue, time = this.scene.time.now): void {
    this.scene.events.emit(PLAYER_MOTION_EVENTS.squashStretch, {
      ...createPlayerSquashStretchCue(cue),
      facing: this.facing,
      target: this,
      time,
      x: this.x,
      y: this.y,
    });
  }

  private emitPowerAura(
    kind: PlayerPowerKind,
    durationMs: number,
    time: number,
    action: PlayerPowerAuraAction,
    reason?: PlayerPowerAuraReason,
  ): void {
    this.scene.events.emit(PLAYER_MOTION_EVENTS.powerAura, {
      ...createPlayerPowerAuraCue(kind, durationMs, time, action, reason),
      facing: this.facing,
      target: this,
      x: this.x,
      y: this.y,
    });
  }

  private emitFeedback(cue: PlayerFeedbackCue, time = this.scene.time.now, shielded = false): void {
    const feedback = {
      ...createPlayerFeedbackCue(cue),
      facing: this.facing,
      target: this,
      time,
      x: this.x,
      y: this.y,
    };
    this.scene.events.emit(
      PLAYER_MOTION_EVENTS.feedback,
      shielded ? { ...feedback, shielded } : feedback,
    );
  }
}
