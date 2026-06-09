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

const POWERUP_LABELS: Record<PowerupKind, string> = {
  shield: "Shield",
  springBoots: "Spring",
  starburst: "Starburst",
  gliderLeaf: "Glide",
};

const POWERUP_TINTS: Record<PowerupKind, number> = {
  shield: 0x67e8f9,
  springBoots: 0x38bdf8,
  starburst: 0xfacc15,
  gliderLeaf: 0x86efac,
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

  private readonly baseY: number;

  constructor(scene: Phaser.Scene, definition: PowerupDefinition);
  constructor(scene: Phaser.Scene, x: number, y: number, options?: PowerupOptions);
  constructor(scene: Phaser.Scene, xOrDefinition: number | PowerupDefinition, y?: number, options: PowerupOptions = {}) {
    const definition = normalizeDefinition(xOrDefinition, y, options);
    super(scene, definition.x, definition.y, definition.texture ?? powerupTexture(definition.kind));

    this.powerupId = definition.id;
    this.kind = definition.kind;
    this.durationMs = definition.durationMs;
    this.score = POWERUP_DEFINITIONS[definition.kind].score;
    this.baseY = definition.y;

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setDepth(15);
    this.setData("powerupId", definition.id);
    this.setData("powerupKind", definition.kind);
    this.setData("durationMs", definition.durationMs);
    this.setData("score", this.score);

    if (this.anims.exists("powerup-pulse")) {
      this.play("powerup-pulse", true);
    }

    this.setScale(0.96);
    this.setAngle(-3);
    this.arcadeBody.setAllowGravity(false);
    this.arcadeBody.setCircle(11, 5, 5);
    scene.tweens.add({
      targets: this,
      y: this.baseY - 6,
      scaleX: 1.08,
      scaleY: 1.08,
      angle: 3,
      duration: 760 + (definition.x % 5) * 35,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });
  }

  get arcadeBody(): Phaser.Physics.Arcade.Body {
    return this.body as Phaser.Physics.Arcade.Body;
  }

  disableBody(disableGameObject = false, hideGameObject = false): this {
    if (hideGameObject && !this.collected && this.active) {
      this.collected = true;
      super.disableBody(disableGameObject, false);
      this.playPickupArc();
      return this;
    }

    return super.disableBody(disableGameObject, hideGameObject);
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
    super.disableBody(true, false);
    this.playPickupArc();
    return effect;
  }

  private playPickupArc(): void {
    const x = this.x;
    const y = this.y;
    const tint = POWERUP_TINTS[this.kind];
    const ring = this.scene.add
      .ellipse(x, y, 24, 24)
      .setStrokeStyle(2, tint, 0.8)
      .setDepth(84);
    const label = this.scene.add
      .text(x, y - 25, POWERUP_LABELS[this.kind], {
        fontFamily: "system-ui",
        fontSize: "14px",
        fontStyle: "700",
        color: "#f8fafc",
        stroke: "#07131e",
        strokeThickness: 4,
      })
      .setOrigin(0.5)
      .setDepth(86);

    this.scene.tweens.killTweensOf(this);
    this.setVisible(true);
    this.setDepth(85);
    this.setAlpha(1);
    this.setTint(tint);
    this.setBlendMode(Phaser.BlendModes.ADD);

    this.scene.tweens.add({
      targets: this,
      x: x + Phaser.Math.Between(-14, 14),
      y: y - 56,
      angle: this.angle + Phaser.Math.Between(160, 240),
      scaleX: 0.32,
      scaleY: 0.32,
      alpha: 0,
      duration: 390,
      ease: "Cubic.easeOut",
      onComplete: () => this.destroy(),
    });
    this.scene.tweens.add({
      targets: ring,
      scale: 2.4,
      alpha: 0,
      duration: 420,
      ease: "Cubic.easeOut",
      onComplete: () => ring.destroy(),
    });
    this.scene.tweens.add({
      targets: label,
      y: y - 54,
      scale: 1.08,
      alpha: 0,
      duration: 580,
      ease: "Cubic.easeOut",
      onComplete: () => label.destroy(),
    });
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
