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

  updateEnemy(time: number): void {
    if (!this.active || this.defeated) {
      return;
    }

    if (time >= this.invulnerableUntil && this.isTinted) {
      this.clearTint();
    }

    switch (this.stats.behavior) {
      case "hop":
        this.updatePatrol(0.85);
        if (this.arcadeBody.blocked.down && time > this.nextActionAt) {
          this.setVelocityY(-330);
          this.nextActionAt = time + 900 + this.definition.phase * 20;
        }
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

    if (typeof hit.sourceX === "number") {
      const knockbackDirection = this.x < hit.sourceX ? -1 : 1;
      this.setVelocityX(knockbackDirection * (hit.knockback ?? 120));
    }

    this.scene.events.emit("enemy:damaged", this, amount, hit);
    if (this.health <= 0) {
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
    this.scene.events.emit("enemy:defeated", this, source);
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
      this.setVelocityX(this.definition.speed * 1.75 * this.direction);
      return;
    }

    if (time > this.nextActionAt) {
      this.direction *= -1;
      this.nextActionAt = time + 1500;
    }
    this.updatePatrol(1.35);
  }

  private updateTurret(time: number): void {
    this.setVelocityX(0);
    if (time <= this.nextActionAt) {
      return;
    }

    this.nextActionAt = time + 1500 + this.definition.phase * 15;
    this.scene.events.emit("enemy:turret-fire", {
      enemy: this,
      x: this.x,
      y: this.y - 16,
      direction: this.target && this.target.x < this.x ? -1 : 1,
      damage: this.damage,
    });
  }
}
