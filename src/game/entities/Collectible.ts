import Phaser from "phaser";
import type { CollectibleDefinition, CollectibleKind } from "../levels/schema";

export type { CollectibleKind };

export interface CollectibleDefinitionData {
  kind: CollectibleKind;
  score: number;
  value: number;
  hidden: boolean;
}

export interface CollectibleOptions {
  id?: string;
  kind?: CollectibleKind;
  score?: number;
  hidden?: boolean;
  texture?: string;
}

export interface CollectiblePickup {
  id: string;
  kind: CollectibleKind;
  score: number;
  x: number;
  y: number;
  collectedAt: number;
}

export const COLLECTIBLE_DEFINITIONS: Record<CollectibleKind, CollectibleDefinitionData> = {
  glimmer: {
    kind: "glimmer",
    score: 100,
    value: 1,
    hidden: false,
  },
  largeCog: {
    kind: "largeCog",
    score: 1000,
    value: 5,
    hidden: false,
  },
  hiddenSeed: {
    kind: "hiddenSeed",
    score: 2000,
    value: 1,
    hidden: true,
  },
};

interface NormalizedCollectibleDefinition extends CollectibleDefinition {
  texture?: string;
}

export function getCollectibleDefinition(kind: CollectibleKind): CollectibleDefinitionData {
  return { ...COLLECTIBLE_DEFINITIONS[kind] };
}

export function getCollectibleScore(kind: CollectibleKind, count = 1): number {
  return COLLECTIBLE_DEFINITIONS[kind].score * Math.max(0, Math.floor(count));
}

function normalizeDefinition(
  xOrDefinition: number | CollectibleDefinition,
  y?: number,
  options: CollectibleOptions = {},
): NormalizedCollectibleDefinition {
  if (typeof xOrDefinition !== "number") {
    return { ...xOrDefinition, texture: options.texture };
  }

  const kind = options.kind ?? "glimmer";
  const x = xOrDefinition;
  const resolvedY = y ?? 0;
  const defaults = COLLECTIBLE_DEFINITIONS[kind];
  return {
    id: options.id ?? `collectible-${kind}-${Math.round(x)}-${Math.round(resolvedY)}`,
    kind,
    x,
    y: resolvedY,
    score: options.score ?? defaults.score,
    hidden: options.hidden ?? defaults.hidden,
    texture: options.texture,
  };
}

export class Collectible extends Phaser.Physics.Arcade.Sprite {
  readonly collectibleId: string;
  readonly kind: CollectibleKind;
  readonly score: number;
  collected = false;

  private readonly baseY: number;

  constructor(scene: Phaser.Scene, definition: CollectibleDefinition);
  constructor(scene: Phaser.Scene, x: number, y: number, options?: CollectibleOptions);
  constructor(
    scene: Phaser.Scene,
    xOrDefinition: number | CollectibleDefinition,
    y?: number,
    options: CollectibleOptions = {},
  ) {
    const definition = normalizeDefinition(xOrDefinition, y, options);
    const texture = definition.texture ?? collectibleTexture(definition.kind);
    super(scene, definition.x, definition.y, texture);

    this.collectibleId = definition.id;
    this.kind = definition.kind;
    this.score = definition.score;
    this.baseY = definition.y;

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setDepth(definition.hidden ? 9 : 14);
    this.setAlpha(definition.hidden ? 0.55 : 1);
    this.setData("collectibleId", definition.id);
    this.setData("collectibleKind", definition.kind);
    this.setData("score", definition.score);

    const animationKey = "collectible-spin";
    if (this.anims.exists(animationKey)) {
      this.play(animationKey, true);
    }

    this.arcadeBody.setAllowGravity(false);
    this.arcadeBody.setCircle(10, 6, 6);
    scene.tweens.add({
      targets: this,
      y: definition.y - 5,
      duration: 850 + (definition.x % 7) * 20,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });
  }

  get arcadeBody(): Phaser.Physics.Arcade.Body {
    return this.body as Phaser.Physics.Arcade.Body;
  }

  collect(): CollectiblePickup | null {
    if (this.collected || !this.active) {
      return null;
    }

    this.collected = true;
    const pickup: CollectiblePickup = {
      id: this.collectibleId,
      kind: this.kind,
      score: this.score,
      x: this.x,
      y: this.y,
      collectedAt: this.scene.time.now,
    };

    this.scene.events.emit("collectible:collected", pickup);
    this.disableBody(true, false);
    this.scene.tweens.add({
      targets: this,
      scale: 1.8,
      alpha: 0,
      duration: 180,
      onComplete: () => this.destroy(),
    });
    return pickup;
  }

  resetCollectible(): void {
    this.collected = false;
    this.setPosition(this.x, this.baseY);
    this.setAlpha(this.kind === "hiddenSeed" ? 0.55 : 1);
    this.setScale(1);
    this.enableBody(true, this.x, this.baseY, true, true);
  }
}

function collectibleTexture(kind: CollectibleKind): string {
  switch (kind) {
    case "largeCog":
      return "collectible-cog-0";
    case "hiddenSeed":
      return "collectible-seed-0";
    case "glimmer":
    default:
      return "collectible-glimmer-0";
  }
}
