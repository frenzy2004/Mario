import Phaser from "phaser";
import type { PowerupDefinition, PowerupKind } from "../levels/schema";

export type { PowerupKind };

export interface PowerupData {
  kind: PowerupKind;
  durationMs: number;
  score: number;
  modifiers: Record<string, number | boolean>;
}

export interface PowerupOptions {
  id?: string;
  kind?: PowerupKind;
  durationMs?: number;
  texture?: string;
}

export interface ActivePowerupEffect {
  kind: PowerupKind;
  durationMs: number;
  startedAt: number;
  expiresAt: number | null;
  score: number;
  modifiers: Record<string, number | boolean>;
}

export const POWERUP_DEFINITIONS: Record<PowerupKind, PowerupData> = {
  shield: {
    kind: "shield",
    durationMs: 0,
    score: 200,
    modifiers: { absorbsHit: true },
  },
  springBoots: {
    kind: "springBoots",
    durationMs: 9000,
    score: 250,
    modifiers: { jumpMultiplier: 1.25 },
  },
  starburst: {
    kind: "starburst",
    durationMs: 6500,
    score: 300,
    modifiers: { invulnerable: true, speedMultiplier: 1.18 },
  },
  gliderLeaf: {
    kind: "gliderLeaf",
    durationMs: 10000,
    score: 225,
    modifiers: { glide: true, fallSpeedMultiplier: 0.35 },
  },
};

interface NormalizedPowerupDefinition extends PowerupDefinition {
  texture?: string;
}

export function getPowerupDefinition(kind: PowerupKind): PowerupData {
  const definition = POWERUP_DEFINITIONS[kind];
  return { ...definition, modifiers: { ...definition.modifiers } };
}

export function createPowerupEffect(kind: PowerupKind, startedAt = 0): ActivePowerupEffect {
  const definition = POWERUP_DEFINITIONS[kind];
  return {
    kind,
    durationMs: definition.durationMs,
    startedAt,
    expiresAt: definition.durationMs > 0 ? startedAt + definition.durationMs : null,
    score: definition.score,
    modifiers: { ...definition.modifiers },
  };
}

function normalizeDefinition(
  xOrDefinition: number | PowerupDefinition,
  y?: number,
  options: PowerupOptions = {},
): NormalizedPowerupDefinition {
  if (typeof xOrDefinition !== "number") {
    return { ...xOrDefinition, texture: options.texture };
  }

  const kind = options.kind ?? "shield";
  const x = xOrDefinition;
  const resolvedY = y ?? 0;
  return {
    id: options.id ?? `powerup-${kind}-${Math.round(x)}-${Math.round(resolvedY)}`,
    kind,
    x,
    y: resolvedY,
    durationMs: options.durationMs ?? POWERUP_DEFINITIONS[kind].durationMs,
    texture: options.texture,
  };
}

export class Powerup extends Phaser.Physics.Arcade.Sprite {
  readonly powerupId: string;
  readonly kind: PowerupKind;
  readonly durationMs: number;
  readonly score: number;
  collected = false;

  constructor(scene: Phaser.Scene, definition: PowerupDefinition);
  constructor(scene: Phaser.Scene, x: number, y: number, options?: PowerupOptions);
  constructor(scene: Phaser.Scene, xOrDefinition: number | PowerupDefinition, y?: number, options: PowerupOptions = {}) {
    const definition = normalizeDefinition(xOrDefinition, y, options);
    super(scene, definition.x, definition.y, definition.texture ?? powerupTexture(definition.kind));

    this.powerupId = definition.id;
    this.kind = definition.kind;
    this.durationMs = definition.durationMs;
    this.score = POWERUP_DEFINITIONS[definition.kind].score;

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setDepth(15);
    this.setData("powerupId", definition.id);
    this.setData("powerupKind", definition.kind);
    this.setData("durationMs", definition.durationMs);

    if (this.anims.exists("powerup-pulse")) {
      this.play("powerup-pulse", true);
    }

    this.arcadeBody.setAllowGravity(false);
    this.arcadeBody.setCircle(11, 5, 5);
  }

  get arcadeBody(): Phaser.Physics.Arcade.Body {
    return this.body as Phaser.Physics.Arcade.Body;
  }

  collect(startedAt = this.scene.time.now): ActivePowerupEffect | null {
    if (this.collected || !this.active) {
      return null;
    }

    this.collected = true;
    const effect = {
      ...createPowerupEffect(this.kind, startedAt),
      durationMs: this.durationMs,
      expiresAt: this.durationMs > 0 ? startedAt + this.durationMs : null,
    };
    this.scene.events.emit("powerup:collected", effect, this);
    this.disableBody(true, true);
    return effect;
  }
}

function powerupTexture(kind: PowerupKind): string {
  switch (kind) {
    case "springBoots":
      return "powerup-boots-0";
    case "starburst":
      return "powerup-starburst-0";
    case "gliderLeaf":
      return "powerup-leaf-0";
    case "shield":
    default:
      return "powerup-0";
  }
}
