import Phaser from "phaser";
import { PLAYER_CONFIG } from "../config/player";
import { Player } from "../entities/Player";
import type { InputSnapshot } from "./InputSystem";

export interface PlayerControllerState {
  lastGroundedAt: number;
  jumpBufferedAt: number;
  dashStartedAt: number;
  dashAvailableAt: number;
  wasGrounded: boolean;
}

export class PlayerController {
  readonly state: PlayerControllerState = {
    lastGroundedAt: 0,
    jumpBufferedAt: Number.NEGATIVE_INFINITY,
    dashStartedAt: Number.NEGATIVE_INFINITY,
    dashAvailableAt: 0,
    wasGrounded: false,
  };

  constructor(
    private readonly scene: Phaser.Scene,
    private readonly player: Player,
  ) {}

  update(snapshot: InputSnapshot, time: number, deltaMs: number): void {
    const body = this.player.arcadeBody;
    const grounded = body.blocked.down || body.touching.down;
    if (grounded) {
      this.state.lastGroundedAt = time;
    }
    if (snapshot.jumpPressed) {
      this.state.jumpBufferedAt = time;
    }

    this.applyHorizontalMovement(snapshot, time, deltaMs, grounded);
    this.applyJump(snapshot, time, grounded);
    this.applyDash(snapshot, time);
    this.applyGlider(snapshot, time);
    this.applyAnimation(snapshot, time, grounded);

    if (!this.state.wasGrounded && grounded && Math.abs(body.velocity.y) > PLAYER_CONFIG.landingDustVelocity) {
      this.scene.events.emit("fx:dust", this.player.x, this.player.y, "land");
      this.scene.events.emit("audio:land");
    }
    this.state.wasGrounded = grounded;
  }

  bounce(force: number = PLAYER_CONFIG.bounceVelocity): void {
    this.player.setVelocityY(force);
    this.state.lastGroundedAt = Number.NEGATIVE_INFINITY;
  }

  private applyHorizontalMovement(
    snapshot: InputSnapshot,
    time: number,
    deltaMs: number,
    grounded: boolean,
  ): void {
    if (!this.player.hasControl) {
      return;
    }
    const body = this.player.arcadeBody;
    const dt = deltaMs / 1000;
    const acceleration = grounded ? PLAYER_CONFIG.groundAcceleration : PLAYER_CONFIG.airAcceleration;
    const drag = grounded ? PLAYER_CONFIG.groundDrag : PLAYER_CONFIG.airDrag;
    const maxSpeed =
      time - this.state.dashStartedAt < PLAYER_CONFIG.dashMs
        ? PLAYER_CONFIG.maxDashSpeed
        : PLAYER_CONFIG.maxRunSpeed;
    body.setDragX(drag);
    if (snapshot.left === snapshot.right) {
      if (grounded) {
        const sign = Math.sign(body.velocity.x);
        const nextSpeed = Math.max(0, Math.abs(body.velocity.x) - drag * dt);
        this.player.setVelocityX(nextSpeed * sign);
      }
      return;
    }
    const direction = snapshot.left ? -1 : 1;
    const nextVelocity = Phaser.Math.Clamp(
      body.velocity.x + direction * acceleration * dt,
      -maxSpeed,
      maxSpeed,
    );
    this.player.setVelocityX(nextVelocity);
    this.player.setFlipX(direction < 0);
  }

  private applyJump(snapshot: InputSnapshot, time: number, grounded: boolean): void {
    const canUseCoyote = time - this.state.lastGroundedAt <= PLAYER_CONFIG.coyoteMs;
    const hasBufferedJump = time - this.state.jumpBufferedAt <= PLAYER_CONFIG.jumpBufferMs;
    if (this.player.hasControl && hasBufferedJump && (grounded || canUseCoyote)) {
      const jumpVelocity = this.player.hasSpringBoots(time)
        ? PLAYER_CONFIG.springJumpVelocity
        : PLAYER_CONFIG.jumpVelocity;
      this.player.setVelocityY(jumpVelocity);
      this.state.jumpBufferedAt = Number.NEGATIVE_INFINITY;
      this.state.lastGroundedAt = Number.NEGATIVE_INFINITY;
      this.scene.events.emit("fx:dust", this.player.x, this.player.y, "jump");
      this.scene.events.emit("audio:jump");
    }
    if (snapshot.jumpReleased && this.player.arcadeBody.velocity.y < PLAYER_CONFIG.minJumpVelocity) {
      this.player.setVelocityY(PLAYER_CONFIG.minJumpVelocity);
    }
  }

  private applyDash(snapshot: InputSnapshot, time: number): void {
    if (!this.player.hasControl || !snapshot.dashPressed || time < this.state.dashAvailableAt) {
      return;
    }
    const direction = this.player.flipX ? -1 : 1;
    this.player.setVelocityX(direction * PLAYER_CONFIG.maxDashSpeed);
    this.state.dashStartedAt = time;
    this.state.dashAvailableAt = time + PLAYER_CONFIG.dashCooldownMs;
    this.scene.events.emit("fx:dust", this.player.x - direction * 10, this.player.y, "dash");
    this.scene.events.emit("audio:dash");
  }

  private applyGlider(snapshot: InputSnapshot, time: number): void {
    const body = this.player.arcadeBody;
    if (
      snapshot.jump &&
      this.player.hasGlider(time) &&
      body.velocity.y > PLAYER_CONFIG.gliderFallSpeed
    ) {
      this.player.setVelocityY(PLAYER_CONFIG.gliderFallSpeed);
    }
  }

  private applyAnimation(snapshot: InputSnapshot, time: number, grounded: boolean): void {
    const body = this.player.arcadeBody;
    if (!this.player.hasControl) {
      return;
    }
    if (body.velocity.y < -35 && !grounded) {
      this.player.setAnimationState("jump");
    } else if (body.velocity.y > 55 && !grounded) {
      this.player.setAnimationState("fall");
    } else if (
      grounded &&
      ((snapshot.left && body.velocity.x > 90) || (snapshot.right && body.velocity.x < -90))
    ) {
      this.player.setAnimationState("skid");
    } else if (grounded && Math.abs(body.velocity.x) > 25) {
      this.player.setAnimationState("run");
    } else if (this.player.hasStarburst(time)) {
      this.player.setAnimationState("run");
    } else {
      this.player.setAnimationState("idle");
    }
  }
}
