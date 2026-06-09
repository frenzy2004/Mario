import Phaser from "phaser";
import type { HazardDefinition as LevelHazardDefinition, HazardKind } from "../levels/schema";

export type { HazardKind };

export interface HazardStats {
  kind: HazardKind;
  damage: number;
  knockback: number;
  activeMs: number;
  inactiveMs: number;
  lethal: boolean;
}

export interface HazardOptions {
  id?: string;
  kind?: HazardKind;
  damage?: number;
  width?: number;
  height?: number;
  phase?: number;
  texture?: string;
}

export interface HazardHit {
  kind: HazardKind;
  damage: number;
  knockbackX: number;
  knockbackY: number;
  lethal: boolean;
  hitAt: number;
}

export const HAZARD_STATS: Record<HazardKind, HazardStats> = {
  thorn: {
    kind: "thorn",
    damage: 1,
    knockback: 190,
    activeMs: 1,
    inactiveMs: 0,
    lethal: false,
  },
  crushBlock: {
    kind: "crushBlock",
    damage: 2,
    knockback: 300,
    activeMs: 900,
    inactiveMs: 1400,
    lethal: true,
  },
  acid: {
    kind: "acid",
    damage: 1,
    knockback: 120,
    activeMs: 1,
    inactiveMs: 0,
    lethal: true,
  },
  spark: {
    kind: "spark",
    damage: 1,
    knockback: 230,
    activeMs: 850,
    inactiveMs: 650,
    lethal: false,
  },
};

interface NormalizedHazardDefinition extends LevelHazardDefinition {
  texture?: string;
}

type DamageableTarget = {
  x: number;
  y: number;
  damage?: (time: number) => boolean;
  takeDamage?: (amount: number, hit?: Record<string, unknown>) => unknown;
  body?: Phaser.Physics.Arcade.Body;
};

export function getHazardStats(kind: HazardKind): HazardStats {
  return { ...HAZARD_STATS[kind] };
}

export function isHazardActive(kind: HazardKind, elapsedMs: number, phase = 0): boolean {
  const stats = HAZARD_STATS[kind];
  if (stats.inactiveMs <= 0) {
    return true;
  }

  const cycleMs = stats.activeMs + stats.inactiveMs;
  const t = (((elapsedMs + phase * 100) % cycleMs) + cycleMs) % cycleMs;
  return t < stats.activeMs;
}

function normalizeDefinition(
  xOrDefinition: number | LevelHazardDefinition,
  y?: number,
  options: HazardOptions = {},
): NormalizedHazardDefinition {
  if (typeof xOrDefinition !== "number") {
    return { ...xOrDefinition, texture: options.texture };
  }

  const kind = options.kind ?? "thorn";
  const x = xOrDefinition;
  const resolvedY = y ?? 0;
  return {
    id: options.id ?? `hazard-${kind}-${Math.round(x)}-${Math.round(resolvedY)}`,
    kind,
    x,
    y: resolvedY,
    width: options.width ?? 32,
    height: options.height ?? 32,
    damage: options.damage ?? HAZARD_STATS[kind].damage,
    phase: options.phase ?? 0,
    texture: options.texture,
  };
}

export class Hazard extends Phaser.Physics.Arcade.Sprite {
  readonly hazardId: string;
  readonly kind: HazardKind;
  readonly stats: HazardStats;
  readonly damage: number;

  private readonly definition: NormalizedHazardDefinition;
  private readonly spawnedAt: number;
  private lastHitAt = Number.NEGATIVE_INFINITY;

  constructor(scene: Phaser.Scene, definition: LevelHazardDefinition);
  constructor(scene: Phaser.Scene, x: number, y: number, options?: HazardOptions);
  constructor(scene: Phaser.Scene, xOrDefinition: number | LevelHazardDefinition, y?: number, options: HazardOptions = {}) {
    const definition = normalizeDefinition(xOrDefinition, y, options);
    super(scene, definition.x + definition.width / 2, definition.y + definition.height / 2, definition.texture ?? hazardTexture(definition.kind));

    this.definition = definition;
    this.hazardId = definition.id;
    this.kind = definition.kind;
    this.stats = HAZARD_STATS[definition.kind];
    this.damage = definition.damage;
    this.spawnedAt = scene.time.now;

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setDepth(13);
    this.setData("hazardId", definition.id);
    this.setData("hazardKind", definition.kind);
    this.setData("damage", definition.damage);
    this.arcadeBody.setAllowGravity(false);
    this.arcadeBody.setImmovable(true);
    this.arcadeBody.setSize(definition.width, definition.height);
  }

  get arcadeBody(): Phaser.Physics.Arcade.Body {
    return this.body as Phaser.Physics.Arcade.Body;
  }

  updateHazard(time: number): void {
    const active = this.isActive(time);
    this.setAlpha(active ? 1 : 0.35);
    if (this.kind === "spark" && active) {
      this.angle += 5;
    }
  }

  isActive(time = this.scene.time.now): boolean {
    return isHazardActive(this.kind, time - this.spawnedAt, this.definition.phase);
  }

  applyTo(target: DamageableTarget, time = this.scene.time.now): HazardHit | null {
    if (!this.active || !this.isActive(time) || time - this.lastHitAt < 700) {
      return null;
    }

    this.lastHitAt = time;
    const direction = target.x < this.x ? -1 : 1;
    const hit: HazardHit = {
      kind: this.kind,
      damage: this.damage,
      knockbackX: direction * this.stats.knockback,
      knockbackY: -Math.min(340, this.stats.knockback * 0.75),
      lethal: this.stats.lethal,
      hitAt: time,
    };

    target.takeDamage?.(hit.damage, { source: this, sourceX: this.x, hazardKind: this.kind });
    target.damage?.(time);
    target.body?.setVelocity(hit.knockbackX, hit.knockbackY);
    this.scene.events.emit("hazard:hit", hit, target);
    return hit;
  }
}

function hazardTexture(kind: HazardKind): string {
  switch (kind) {
    case "crushBlock":
      return "hazard-crush-block";
    case "acid":
      return "hazard-acid";
    case "spark":
      return "hazard-spark";
    case "thorn":
    default:
      return "tile-hazard";
  }
}
