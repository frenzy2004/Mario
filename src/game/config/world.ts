export const WORLD_CONFIG = {
  tileSize: 32,
  rows: 18,
  defaultColumns: 150,
  cameraLerpX: 0.09,
  cameraLerpY: 0.08,
  checkpointScore: 250,
  gemScore: 100,
  hiddenCogScore: 1000,
  enemyScore: 300,
  bossScore: 5000,
  timeBonusMultiplier: 8,
  maxParticles: 120,
} as const;

export const TILE_CODES = {
  empty: ".",
  ground: "#",
  platform: "=",
  hazard: "^",
  spring: "S",
  wind: "W",
  player: "P",
  goal: "G",
  checkpoint: "K",
  movingPlatform: "M",
  boss: "B",
} as const;

export interface WorldPoint {
  x: number;
  y: number;
}

export interface WorldRect extends WorldPoint {
  width: number;
  height: number;
}

export interface TilePoint {
  x: number;
  y: number;
}

export interface TileRect extends TilePoint {
  width: number;
  height: number;
}

export function tileToWorld(value: number, tileSize = WORLD_CONFIG.tileSize): number {
  return value * tileSize;
}

export function worldToTile(value: number, tileSize = WORLD_CONFIG.tileSize): number {
  return value / tileSize;
}

export function tilePointToWorldPoint(
  point: TilePoint,
  tileSize = WORLD_CONFIG.tileSize,
): WorldPoint {
  return {
    x: tileToWorld(point.x, tileSize),
    y: tileToWorld(point.y, tileSize),
  };
}

export function tileRectToWorldRect(
  rect: TileRect,
  tileSize = WORLD_CONFIG.tileSize,
): WorldRect {
  return {
    x: tileToWorld(rect.x, tileSize),
    y: tileToWorld(rect.y, tileSize),
    width: tileToWorld(rect.width, tileSize),
    height: tileToWorld(rect.height, tileSize),
  };
}

export function pointToWorldRect(
  point: WorldPoint,
  width: number,
  height: number,
): WorldRect {
  return {
    x: point.x - width / 2,
    y: point.y - height,
    width,
    height,
  };
}
