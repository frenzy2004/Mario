import Phaser from "phaser";
import type { MovingPlatformDefinition } from "../levels/schema";

export interface PlatformPoint {
  x: number;
  y: number;
}

export interface PlatformMotionState extends PlatformPoint {
  progress: number;
  direction: -1 | 0 | 1;
  phase: "outbound" | "returning";
}

export interface MovingPlatformOptions {
  id?: string;
  widthTiles?: number;
  travelX?: number;
  travelY?: number;
  speed?: number;
  phase?: number;
  texture?: string;
}

interface NormalizedMovingPlatformDefinition extends MovingPlatformDefinition {
  texture?: string;
}

export function computePlatformPosition(
  start: PlatformPoint,
  travelX: number,
  travelY: number,
  speed: number,
  phase: number,
  time: number,
): PlatformMotionState {
  const t = (time * speed * 0.00035 + phase) % (Math.PI * 2);
  const sin = Math.sin(t);
  const direction = Math.cos(t) >= 0 ? 1 : -1;
  return {
    x: start.x + sin * travelX,
    y: start.y + Math.cos(t) * travelY,
    progress: (sin + 1) / 2,
    direction,
    phase: direction > 0 ? "outbound" : "returning",
  };
}

function normalizeDefinition(
  xOrDefinition: number | MovingPlatformDefinition,
  y?: number,
  options: MovingPlatformOptions = {},
): NormalizedMovingPlatformDefinition {
  if (typeof xOrDefinition !== "number") {
    return { ...xOrDefinition, texture: options.texture };
  }

  const x = xOrDefinition;
  const resolvedY = y ?? 0;
  return {
    id: options.id ?? `moving-platform-${Math.round(x)}-${Math.round(resolvedY)}`,
    x,
    y: resolvedY,
    widthTiles: options.widthTiles ?? 3,
    travelX: options.travelX ?? 96,
    travelY: options.travelY ?? 0,
    speed: options.speed ?? 1,
    phase: options.phase ?? 0,
    texture: options.texture,
  };
}

export class MovingPlatform extends Phaser.Physics.Arcade.Sprite {
  readonly platformId: string;

  private readonly startX: number;
  private readonly startY: number;
  private readonly definition: NormalizedMovingPlatformDefinition;

  constructor(scene: Phaser.Scene, definition: MovingPlatformDefinition);
  constructor(scene: Phaser.Scene, x: number, y: number, options?: MovingPlatformOptions);
  constructor(
    scene: Phaser.Scene,
    xOrDefinition: number | MovingPlatformDefinition,
    y?: number,
    options: MovingPlatformOptions = {},
  ) {
    const definition = normalizeDefinition(xOrDefinition, y, options);
    super(scene, definition.x, definition.y, definition.texture ?? "tile-platform");

    this.definition = definition;
    this.platformId = definition.id;
    this.startX = definition.x;
    this.startY = definition.y;

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setOrigin(0.5, 0.5);
    this.setDisplaySize(definition.widthTiles * 32, 18);
    this.setDepth(12);
    this.setData("platformId", definition.id);
    this.arcadeBody.setAllowGravity(false);
    this.arcadeBody.setImmovable(true);
    this.arcadeBody.setSize(definition.widthTiles * 32, 18);
  }

  get arcadeBody(): Phaser.Physics.Arcade.Body {
    return this.body as Phaser.Physics.Arcade.Body;
  }

  getMotionState(time: number): PlatformMotionState {
    return computePlatformPosition(
      { x: this.startX, y: this.startY },
      this.definition.travelX,
      this.definition.travelY,
      this.definition.speed,
      this.definition.phase,
      time,
    );
  }

  updatePlatform(time: number): void {
    const next = this.getMotionState(time);
    this.arcadeBody.setVelocity((next.x - this.x) * 60, (next.y - this.y) * 60);
    this.setPosition(next.x, next.y);
  }
}
