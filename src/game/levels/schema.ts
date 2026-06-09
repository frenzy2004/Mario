export type EnemyKind = "beetle" | "acorn" | "lantern" | "charger" | "spiker" | "turret";
export type PowerupKind = "shield" | "springBoots" | "starburst" | "gliderLeaf";
export type CollectibleKind = "glimmer" | "largeCog" | "hiddenSeed";
export type HazardKind = "thorn" | "crushBlock" | "acid" | "spark";

export interface PointDefinition {
  x: number;
  y: number;
}

export interface RectDefinition extends PointDefinition {
  width: number;
  height: number;
}

export interface PaletteDefinition {
  skyTop: number;
  skyBottom: number;
  ground: number;
  groundAccent: number;
  brass: number;
  leaves: number;
  hazard: number;
  glow: number;
}

export interface EnemyDefinition extends PointDefinition {
  id: string;
  kind: EnemyKind;
  patrolMin: number;
  patrolMax: number;
  speed: number;
  phase: number;
}

export interface CollectibleDefinition extends PointDefinition {
  id: string;
  kind: CollectibleKind;
  score: number;
  hidden?: boolean;
}

export interface PowerupDefinition extends PointDefinition {
  id: string;
  kind: PowerupKind;
  durationMs: number;
}

export interface MovingPlatformDefinition extends PointDefinition {
  id: string;
  widthTiles: number;
  travelX: number;
  travelY: number;
  speed: number;
  phase: number;
}

export interface HazardDefinition extends RectDefinition {
  id: string;
  kind: HazardKind;
  damage: number;
  phase: number;
}

export interface CheckpointDefinition extends PointDefinition {
  id: string;
  label: string;
}

export interface GoalDefinition extends PointDefinition {
  id: string;
  nextLevelId?: string;
}

export interface WindZoneDefinition extends RectDefinition {
  id: string;
  forceX: number;
  forceY: number;
}

export interface SpringDefinition extends PointDefinition {
  id: string;
  power: number;
}

export interface DecorationDefinition extends PointDefinition {
  id: string;
  layer: "far" | "mid" | "near";
  motif: "gear" | "vine" | "glassBerry" | "cloud" | "windmill" | "grass";
  scale: number;
  tint: number;
  parallax: number;
}

export interface LevelDefinition {
  id: string;
  index: number;
  title: string;
  chapter: string;
  columns: number;
  rows: number;
  timeLimit: number;
  palette: PaletteDefinition;
  playerSpawn: PointDefinition;
  layout: string[];
  enemies: EnemyDefinition[];
  collectibles: CollectibleDefinition[];
  powerups: PowerupDefinition[];
  movingPlatforms: MovingPlatformDefinition[];
  hazards: HazardDefinition[];
  checkpoints: CheckpointDefinition[];
  springs: SpringDefinition[];
  windZones: WindZoneDefinition[];
  decorations: DecorationDefinition[];
  goal: GoalDefinition;
  boss?: {
    id: string;
    x: number;
    y: number;
    health: number;
    arenaLeft: number;
    arenaRight: number;
  };
}

export interface LevelValidationIssue {
  levelId: string;
  message: string;
  entityId?: string;
}

export interface LevelContentSummary {
  solidTiles: number;
  platformTiles: number;
  hazardTiles: number;
  spawnCount: number;
  collectibleCount: number;
  enemyCount: number;
  checkpointCount: number;
  goalCount: number;
  movingPlatformCount: number;
}

export function validateLevel(level: LevelDefinition): LevelValidationIssue[] {
  const issues: LevelValidationIssue[] = [];
  if (level.layout.length !== level.rows) {
    issues.push({
      levelId: level.id,
      message: `expected ${level.rows} rows but found ${level.layout.length}`,
    });
  }
  level.layout.forEach((row, rowIndex) => {
    if (row.length !== level.columns) {
      issues.push({
        levelId: level.id,
        message: `row ${rowIndex} expected ${level.columns} columns but found ${row.length}`,
      });
    }
  });
  if (level.playerSpawn.x < 0 || level.playerSpawn.y < 0) {
    issues.push({ levelId: level.id, message: "player spawn must be inside the world" });
  }
  if (level.goal.x <= level.playerSpawn.x) {
    issues.push({ levelId: level.id, message: "goal should be to the right of player spawn" });
  }
  return issues;
}

export function validateLevels(levels: LevelDefinition[]): LevelValidationIssue[] {
  return levels.flatMap(validateLevel);
}

function countTiles(level: LevelDefinition, tileCode: string): number {
  return level.layout.reduce(
    (count, row) => count + Array.from(row).filter((tile) => tile === tileCode).length,
    0,
  );
}

function pointIsInsideLevel(level: LevelDefinition, point: PointDefinition): boolean {
  const width = level.columns * 32;
  const height = level.rows * 32;
  return point.x >= 0 && point.y >= 0 && point.x <= width && point.y <= height;
}

function rectIsInsideLevel(level: LevelDefinition, rect: RectDefinition): boolean {
  const width = level.columns * 32;
  const height = level.rows * 32;
  return (
    rect.x >= 0 &&
    rect.y >= 0 &&
    rect.width > 0 &&
    rect.height > 0 &&
    rect.x + rect.width <= width &&
    rect.y + rect.height <= height
  );
}

function pushIssue(
  issues: LevelValidationIssue[],
  level: LevelDefinition,
  message: string,
  entityId?: string,
): void {
  issues.push({
    levelId: level.id,
    message,
    ...(entityId === undefined ? {} : { entityId }),
  });
}

export function getLevelContentSummary(level: LevelDefinition): LevelContentSummary {
  return {
    solidTiles: countTiles(level, "#"),
    platformTiles: countTiles(level, "="),
    hazardTiles: countTiles(level, "^"),
    spawnCount: level.playerSpawn ? 1 : 0,
    collectibleCount: level.collectibles.length,
    enemyCount: level.enemies.length,
    checkpointCount: level.checkpoints.length,
    goalCount: level.goal ? 1 : 0,
    movingPlatformCount: level.movingPlatforms.length,
  };
}

export function validateCampaignLevel(level: LevelDefinition): LevelValidationIssue[] {
  const issues = validateLevel(level);
  const summary = getLevelContentSummary(level);

  if (summary.solidTiles === 0) {
    pushIssue(issues, level, "campaign level must include solid tiles");
  }
  if (summary.platformTiles + summary.movingPlatformCount === 0) {
    pushIssue(issues, level, "campaign level must include platforms");
  }
  if (summary.hazardTiles + level.hazards.length === 0) {
    pushIssue(issues, level, "campaign level must include hazards");
  }
  if (summary.spawnCount === 0) {
    pushIssue(issues, level, "campaign level must include a player spawn");
  }
  if (summary.collectibleCount === 0) {
    pushIssue(issues, level, "campaign level must include collectibles");
  }
  if (summary.enemyCount === 0) {
    pushIssue(issues, level, "campaign level must include enemies");
  }
  if (summary.checkpointCount === 0) {
    pushIssue(issues, level, "campaign level must include checkpoints");
  }
  if (summary.goalCount === 0) {
    pushIssue(issues, level, "campaign level must include a goal");
  }

  if (!pointIsInsideLevel(level, level.playerSpawn)) {
    pushIssue(issues, level, "player spawn must be inside level bounds");
  }
  if (!pointIsInsideLevel(level, level.goal)) {
    pushIssue(issues, level, "goal must be inside level bounds", level.goal.id);
  }

  for (const collectible of level.collectibles) {
    if (!pointIsInsideLevel(level, collectible)) {
      pushIssue(issues, level, "collectible must be inside level bounds", collectible.id);
    }
  }
  for (const enemy of level.enemies) {
    if (!pointIsInsideLevel(level, enemy)) {
      pushIssue(issues, level, "enemy must be inside level bounds", enemy.id);
    }
  }
  for (const hazard of level.hazards) {
    if (!rectIsInsideLevel(level, hazard)) {
      pushIssue(issues, level, "hazard must be inside level bounds", hazard.id);
    }
  }
  for (const checkpoint of level.checkpoints) {
    if (!pointIsInsideLevel(level, checkpoint)) {
      pushIssue(issues, level, "checkpoint must be inside level bounds", checkpoint.id);
    }
  }

  return issues;
}

export function validateCampaignLevels(levels: LevelDefinition[]): LevelValidationIssue[] {
  return levels.flatMap(validateCampaignLevel);
}
