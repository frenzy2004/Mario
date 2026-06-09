import Phaser from "phaser";
import { PLAYER_CONFIG, type PlayerAnimationState, type PlayerFacing } from "../config/player";
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
      return false;
    }
    this.health -= 1;
    this.invulnerableUntil = time + PLAYER_CONFIG.hurtInvulnerabilityMs;
    this.hurtAnimationUntil = time + PLAYER_CONFIG.hurtStateMs;
    this.setAnimationState("hurt");
    this.setTint(0xff6b7a);
    this.scene.time.delayedCall(320, () => this.clearTint());
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
  }

  startVictory(time = this.scene.time.now): void {
    this.hasControl = false;
    this.victoryStartedAt = time;
    this.setAnimationState("victory");
  }

  applyPower(kind: string, durationMs: number, time: number): void {
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
      default:
        break;
    }
  }
}
