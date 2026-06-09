import type { CollectibleDefinition, EnemyDefinition, LevelDefinition, PowerupDefinition, SpringDefinition } from "./schema";

export const FRIEND_READY_LEVEL_COUNT = 5;

const OPENING_BONUS_SECONDS = [35, 30, 26, 22, 18] as const;
const SAFE_OPENING_DISTANCE = 520;

export function applyFriendReadiness(levels: readonly LevelDefinition[]): LevelDefinition[] {
  return levels.map((level) => (level.index < FRIEND_READY_LEVEL_COUNT ? polishFriendReadyLevel(level) : level));
}

export function polishFriendReadyLevel(level: LevelDefinition): LevelDefinition {
  const bonusSeconds = OPENING_BONUS_SECONDS[level.index] ?? 0;
  return {
    ...level,
    timeLimit: level.timeLimit + bonusSeconds,
    enemies: level.enemies.map((enemy) => softenOpeningEnemy(level, enemy)),
    collectibles: withOpeningCollectibleArc(level),
    powerups: withOpeningShield(level),
    springs: withOpeningSpring(level),
  };
}

function softenOpeningEnemy(level: LevelDefinition, enemy: EnemyDefinition): EnemyDefinition {
  const openingLine = level.playerSpawn.x + SAFE_OPENING_DISTANCE + level.index * 18;
  if (enemy.x >= openingLine) {
    return enemy;
  }

  const width = level.columns * 32;
  const leftSpan = Math.max(70, enemy.x - enemy.patrolMin);
  const rightSpan = Math.max(88, enemy.patrolMax - enemy.x);
  const x = clamp(openingLine, 32, width - 64);
  const patrolMin = clamp(x - leftSpan, 16, width - 96);
  const patrolMax = clamp(Math.max(x + rightSpan, patrolMin + 96), patrolMin + 64, width - 32);

  return {
    ...enemy,
    x,
    patrolMin,
    patrolMax,
    speed: Math.max(28, Math.round(enemy.speed * 0.86)),
  };
}

function withOpeningCollectibleArc(level: LevelDefinition): CollectibleDefinition[] {
  const ids = new Set(level.collectibles.map((collectible) => collectible.id));
  const arc = [0, 1, 2, 3, 4].map((index) => {
    const collectible: CollectibleDefinition = {
      id: `friend-guide-${level.id}-${index + 1}`,
      kind: index === 2 ? "largeCog" : "glimmer",
      score: index === 2 ? 120 : 40,
      x: level.playerSpawn.x + 112 + index * 54,
      y: level.playerSpawn.y - 84 - Math.sin((index / 4) * Math.PI) * 42,
    };
    return collectible;
  });

  return [...level.collectibles, ...arc.filter((collectible) => !ids.has(collectible.id))];
}

function withOpeningShield(level: LevelDefinition): PowerupDefinition[] {
  const id = `friend-shield-${level.id}`;
  if (level.powerups.some((powerup) => powerup.id === id)) {
    return level.powerups;
  }

  return [
    ...level.powerups,
    {
      id,
      kind: "shield",
      durationMs: 6500,
      x: level.playerSpawn.x + 176,
      y: level.playerSpawn.y - 34,
    },
  ];
}

function withOpeningSpring(level: LevelDefinition): SpringDefinition[] {
  const id = `friend-spring-${level.id}`;
  if (level.springs.some((spring) => spring.id === id)) {
    return level.springs;
  }

  return [
    ...level.springs,
    {
      id,
      power: 1.08,
      x: level.playerSpawn.x + 270,
      y: level.playerSpawn.y,
    },
  ];
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
