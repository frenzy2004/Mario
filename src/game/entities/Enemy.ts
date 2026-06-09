import Phaser from "phaser";
import type { EnemyDefinition, EnemyKind } from "../levels/schema";

export type { EnemyKind };

export type EnemyBehavior = "patrol" | "hop" | "fly" | "charge" | "guard" | "turret";

export interface EnemyStats {
  kind: EnemyKind;
  behavior: EnemyBehavior;
  maxHealth: number;
  damage: number;
  baseSpeed: number;
  scoreValue: number;
  stompable: boolean;
  gravity: boolean;
  width: number;
  height: number;
}

export interface EnemyOptions {
  id?: string;
  kind?: EnemyKind;
  texture?: string;
  patrolMin?: number;
  patrolMax?: number;
  speed?: number;
  phase?: number;
  health?: number;
}

export interface EnemyDamageHit {
  source?: unknown;
  sourceX?: number;
  knockback?: number;
  ignoreInvulnerability?: boolean;
}

export type EnemyTellKind = "hop-crouch" | "charge-windup" | "turret-lock";
export type EnemyMotionCueName = "spawn" | "tell" | "attack" | "hit" | "defeat";

export interface EnemyTellProfile {
  tell: EnemyTellKind;
  durationMs: number;
  intensity: number;
}

export interface EnemyMotionCueEvent {
  scope: "enemy";
  cue: EnemyMotionCueName;
  enemyId: string;
  kind: EnemyKind;
  behavior: EnemyBehavior;
  x: number;
  y: number;
  direction: -1 | 1;
  health: number;
  maxHealth: number;
  at: number;
  durationMs: number;
  intensity: number;
  tell?: EnemyTellKind;
  source?: unknown;
}

export const ENEMY_STATS: Record<EnemyKind, EnemyStats> = {
  beetle: {
    kind: "beetle",
    behavior: "patrol",
    maxHealth: 1,
    damage: 1,
    baseSpeed: 52,
    scoreValue: 300,
    stompable: true,
    gravity: true,
    width: 24,
    height: 22,
  },
  acorn: {
    kind: "acorn",
    behavior: "hop",
    maxHealth: 1,
    damage: 1,
    baseSpeed: 46,
    scoreValue: 340,
    stompable: true,
    gravity: true,
    width: 24,
    height: 24,
  },
  lantern: {
    kind: "lantern",
    behavior: "fly",
    maxHealth: 2,
    damage: 1,
    baseSpeed: 64,
    scoreValue: 420,
    stompable: true,
    gravity: false,
    width: 26,
    height: 24,
  },
  charger: {
    kind: "charger",
    behavior: "charge",
    maxHealth: 2,
    damage: 2,
    baseSpeed: 84,
    scoreValue: 520,
    stompable: true,
    gravity: true,
    width: 30,
    height: 24,
  },
  spiker: {
    kind: "spiker",
    behavior: "guard",
    maxHealth: 2,
    damage: 2,
    baseSpeed: 34,
    scoreValue: 460,
    stompable: false,
    gravity: true,
    width: 28,
    height: 24,
  },
  turret: {
    kind: "turret",
    behavior: "turret",
    maxHealth: 3,
    damage: 1,
    baseSpeed: 0,
    scoreValue: 600,
    stompable: false,
    gravity: true,
    width: 30,
    height: 28,
  },
};

export const ENEMY_TELL_PROFILES: Partial<Record<EnemyKind, EnemyTellProfile>> = {
  acorn: { tell: "hop-crouch", durationMs: 150, intensity: 0.85 },
  charger: { tell: "charge-windup", durationMs: 260, intensity: 1.2 },
  turret: { tell: "turret-lock", durationMs: 340, intensity: 1.1 },
};

type TrackableTarget = Phaser.GameObjects.GameObject & { x: number; y: number; active?: boolean };

interface NormalizedEnemyDefinition extends EnemyDefinition {
  texture?: string;
}

export function getEnemyStats(kind: EnemyKind): EnemyStats {
  return { ...ENEMY_STATS[kind] };
}

export function calculateEnemyScore(kind: EnemyKind, combo = 1): number {
  return ENEMY_STATS[kind].scoreValue * Math.max(1, Math.floor(combo));
}

export function animationFor(kind: EnemyKind): string {
  switch (kind) {
    case "acorn":
      return "acorn-hop";
    case "lantern":
      return "lantern-float";
    case "charger":
      return "charger-run";
    case "spiker":
      return "spiker-idle";
    case "turret":
      return "turret-wake";
    case "beetle":
    default:
      return "beetle-walk";
  }
}

export function getEnemyTellProfile(kind: EnemyKind): EnemyTellProfile | null {
  const profile = ENEMY_TELL_PROFILES[kind];
  return profile ? { ...profile } : null;
}

function normalizeDefinition(
  xOrDefinition: number | EnemyDefinition,
  y?: number,
  options: EnemyOptions = {},
): NormalizedEnemyDefinition {
  if (typeof xOrDefinition !== "number") {
    return { ...xOrDefinition, texture: options.texture };
  }

  const kind = options.kind ?? "beetle";
  const x = xOrDefinition;
  const resolvedY = y ?? 0;
  const stats = ENEMY_STATS[kind];
  return {
    id: options.id ?? `enemy-${kind}-${Math.round(x)}-${Math.round(resolvedY)}`,
    kind,
    x,
    y: resolvedY,
    patrolMin: options.patrolMin ?? x - 96,
    patrolMax: options.patrolMax ?? x + 96,
    speed: options.speed ?? stats.baseSpeed,
    phase: options.phase ?? 0,
    texture: options.texture,
  };
}

export class Enemy extends Phaser.Physics.Arcade.Sprite {
  readonly enemyId: string;
  readonly kind: EnemyKind;
  readonly stats: EnemyStats;
  readonly stompable: boolean;
  readonly damage: number;
  readonly scoreValue: number;
  maxHealth: number;
  health: number;
  defeated = false;

  private readonly definition: NormalizedEnemyDefinition;
  private direction = 1;
  private nextActionAt = 0;
  private invulnerableUntil = 0;
  private activeTell?: EnemyTellKind;
  private tellEndsAt = 0;
  private chargeReadyUntil = 0;
  private target?: TrackableTarget;

  constructor(scene: Phaser.Scene, definition: EnemyDefinition);
  constructor(scene: Phaser.Scene, x: number, y: number, options?: EnemyOptions);
  constructor(scene: Phaser.Scene, xOrDefinition: number | EnemyDefinition, y?: number, options: EnemyOptions = {}) {
    const definition = normalizeDefinition(xOrDefinition, y, options);
    const stats = ENEMY_STATS[definition.kind];
    const texture = definition.texture ?? `enemy-${definition.kind}-0`;
    super(scene, definition.x, definition.y, texture);

    this.definition = definition;
    this.enemyId = definition.id;
    this.kind = definition.kind;
    this.stats = stats;
    this.stompable = stats.stompable;
    this.damage = stats.damage;
    this.scoreValue = stats.scoreValue;
    this.maxHealth = stats.maxHealth;
    this.health = options.health ?? stats.maxHealth;

    this.setData("definition", definition);
    this.setData("enemyKind", definition.kind);
    this.setData("damage", this.damage);
    this.setData("scoreValue", this.scoreValue);
    this.setData("motionCue", null);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setOrigin(0.5, 1);
    this.setDepth(18);
    this.setSize(stats.width, stats.height);
    this.setOffset(Math.max(0, (32 - stats.width) / 2), Math.max(0, 30 - stats.height));

    this.direction = definition.phase % 2 === 0 ? 1 : -1;
    this.arcadeBody.setAllowGravity(stats.gravity);
    this.arcadeBody.setVelocityX(definition.speed * this.direction);
    this.arcadeBody.setMaxVelocity(Math.max(80, definition.speed * 2.4), 700);

    const animationKey = animationFor(definition.kind);
    if (this.anims.exists(animationKey)) {
      this.play(animationKey, true);
    }
  }

  get arcadeBody(): Phaser.Physics.Arcade.Body {
    return this.body as Phaser.Physics.Arcade.Body;
  }

  setTarget(target?: TrackableTarget): this {
    this.target = target;
    return this;
  }

  emitMotionCue(
    cue: EnemyMotionCueName,
    time = this.scene.time.now,
    options: Partial<Pick<EnemyMotionCueEvent, "durationMs" | "intensity" | "tell" | "source">> = {},
  ): EnemyMotionCueEvent {
    const event: EnemyMotionCueEvent = {
      scope: "enemy",
      cue,
      enemyId: this.enemyId,
      kind: this.kind,
      behavior: this.stats.behavior,
      x: this.x,
      y: this.y,
      direction: this.direction < 0 ? -1 : 1,
      health: this.health,
      maxHealth: this.maxHealth,
      at: time,
      durationMs: options.durationMs ?? 0,
      intensity: options.intensity ?? 1,
      tell: options.tell,
      source: options.source,
    };
    this.setData("motionCue", event);
    this.scene.events.emit("enemy:motion", event, this);
    this.scene.events.emit("motion:cue", event, this);
    return event;
  }

  updateEnemy(time: number): void {
    if (!this.active || this.defeated) {
      return;
    }

    if (time >= this.invulnerableUntil && this.isTinted) {
      this.clearTint();
    }

    switch (this.stats.behavior) {
      case "hop":
        this.updateHop(time);
        break;
      case "fly":
        this.updatePatrol(1);
        this.setVelocityY(Math.sin((time + this.definition.phase * 100) / 420) * 45);
        break;
      case "charge":
        this.updateCharge(time);
        break;
      case "turret":
        this.updateTurret(time);
        break;
      case "guard":
        this.updatePatrol(0.55);
        break;
      case "patrol":
      default:
        this.updatePatrol(1);
        break;
    }

    this.setFlipX(this.direction < 0);
  }

  takeDamage(amount = 1, hit: EnemyDamageHit = {}): boolean {
    if (this.defeated || amount <= 0) {
      return false;
    }

    const now = this.scene.time.now;
    if (!hit.ignoreInvulnerability && now < this.invulnerableUntil) {
      return false;
    }

    this.health = Math.max(0, this.health - amount);
    this.invulnerableUntil = now + 180;
    this.setTint(0xfef08a);

    let hitDirection: -1 | 1 = this.direction < 0 ? -1 : 1;
    if (typeof hit.sourceX === "number") {
      const knockbackDirection = this.x < hit.sourceX ? -1 : 1;
      hitDirection = knockbackDirection;
      this.setVelocityX(knockbackDirection * (hit.knockback ?? 120));
    }

    const defeated = this.health <= 0;
    const cue = this.emitMotionCue("hit", now, { durationMs: 160, intensity: Math.max(1, amount), source: hit.source });
    if (!defeated) {
      this.playHitMotion(hitDirection);
    }
    this.scene.events.emit("enemy:damaged", this, amount, hit, cue);
    if (defeated) {
      return this.defeat(hit.source);
    }
    return true;
  }

  defeat(source?: unknown): boolean {
    if (this.defeated) {
      return false;
    }

    this.defeated = true;
    this.health = 0;
    this.scene.tweens.killTweensOf(this);
    const cue = this.emitMotionCue("defeat", this.scene.time.now, { durationMs: 180, intensity: 1.35, source });
    this.scene.events.emit("enemy:defeated", this, source, cue);
    this.disableBody(true, false);
    this.scene.tweens.add({
      targets: this,
      scaleX: 1.45,
      scaleY: 0.18,
      alpha: 0,
      duration: 180,
      ease: "Quad.easeOut",
      onComplete: () => this.destroy(),
    });
    return true;
  }

  isHazardous(): boolean {
    return this.active && !this.defeated;
  }

  private updateHop(time: number): void {
    this.updatePatrol(0.85);

    if (this.activeTell === "hop-crouch") {
      if (time < this.tellEndsAt) {
        this.setVelocityX(this.definition.speed * 0.22 * this.direction);
        return;
      }
      this.clearTell();
      this.setVelocityY(-330);
      this.nextActionAt = time + 900 + this.definition.phase * 20;
      return;
    }

    if (this.arcadeBody.blocked.down && time > this.nextActionAt) {
      const profile = getEnemyTellProfile(this.kind);
      if (profile) {
        this.beginTell(profile, time);
        this.setVelocityX(this.definition.speed * 0.22 * this.direction);
        return;
      }
      this.setVelocityY(-330);
      this.nextActionAt = time + 900 + this.definition.phase * 20;
    }
  }

  private updatePatrol(speedScale: number): void {
    if (this.x <= this.definition.patrolMin || this.arcadeBody.blocked.left) {
      this.direction = 1;
    } else if (this.x >= this.definition.patrolMax || this.arcadeBody.blocked.right) {
      this.direction = -1;
    }
    this.setVelocityX(this.definition.speed * speedScale * this.direction);
  }

  private updateCharge(time: number): void {
    const seesTarget =
      this.target &&
      this.target.active !== false &&
      Math.abs(this.target.x - this.x) <= 280 &&
      Math.abs(this.target.y - this.y) <= 96;

    if (seesTarget && this.target) {
      this.direction = this.target.x < this.x ? -1 : 1;
      if (this.activeTell === "charge-windup") {
        if (time < this.tellEndsAt) {
          this.setVelocityX(0);
          return;
        }
        this.clearTell();
        this.chargeReadyUntil = time + 700;
      }
      if (time > this.chargeReadyUntil) {
        const profile = getEnemyTellProfile(this.kind);
        if (profile) {
          this.beginTell(profile, time);
          this.setVelocityX(0);
          return;
        }
      }
      this.setVelocityX(this.definition.speed * 1.75 * this.direction);
      return;
    }

    if (this.activeTell === "charge-windup") {
      this.clearTell();
    }
    this.chargeReadyUntil = 0;
    if (time > this.nextActionAt) {
      this.direction *= -1;
      this.nextActionAt = time + 1500;
    }
    this.updatePatrol(1.35);
  }

  private updateTurret(time: number): void {
    this.setVelocityX(0);
    if (this.activeTell === "turret-lock") {
      if (time < this.tellEndsAt) {
        return;
      }
      this.clearTell();
      this.fireTurret(time);
      return;
    }

    if (time <= this.nextActionAt) {
      return;
    }

    const profile = getEnemyTellProfile(this.kind);
    if (profile) {
      this.beginTell(profile, time);
      return;
    }
    this.fireTurret(time);
  }

  private fireTurret(time: number): void {
    this.nextActionAt = time + 1500 + this.definition.phase * 15;
    const direction = this.target && this.target.x < this.x ? -1 : 1;
    this.emitMotionCue("attack", time, { durationMs: 120, intensity: 1, tell: "turret-lock" });
    this.scene.events.emit("enemy:turret-fire", {
      enemy: this,
      x: this.x,
      y: this.y - 16,
      direction,
      damage: this.damage,
    });
  }

  private beginTell(profile: EnemyTellProfile, time: number): void {
    this.activeTell = profile.tell;
    this.tellEndsAt = time + profile.durationMs;
    const cue = this.emitMotionCue("tell", time, {
      durationMs: profile.durationMs,
      intensity: profile.intensity,
      tell: profile.tell,
    });
    this.scene.events.emit("enemy:tell", cue, this);
    this.playTellMotion(profile);
  }

  private clearTell(): void {
    this.activeTell = undefined;
    this.tellEndsAt = 0;
  }

  private playTellMotion(profile: EnemyTellProfile): void {
    const squash = profile.tell === "hop-crouch" || profile.tell === "charge-windup";
    this.scene.tweens.add({
      targets: this,
      scaleX: squash ? 1 + 0.12 * profile.intensity : 0.94,
      scaleY: squash ? 1 - 0.1 * profile.intensity : 1.08,
      angle: profile.tell === "turret-lock" ? 4 * this.direction : 0,
      yoyo: true,
      duration: Math.max(70, Math.floor(profile.durationMs / 2)),
      ease: "Sine.easeInOut",
      onComplete: () => {
        this.setScale(1);
        this.setAngle(0);
      },
    });
  }

  private playHitMotion(direction: -1 | 1): void {
    this.scene.tweens.add({
      targets: this,
      scaleX: 0.9,
      scaleY: 1.08,
      angle: -6 * direction,
      yoyo: true,
      duration: 70,
      ease: "Quad.easeOut",
      onComplete: () => {
        this.setScale(1);
        this.setAngle(0);
      },
    });
  }
}
