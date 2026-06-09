import { LEVEL_DEFINITIONS } from "./data";
import type { LevelDefinition } from "./schema";

export const ALL_LEVELS: LevelDefinition[] = LEVEL_DEFINITIONS;
export type { LevelDefinition };
export { FRIEND_READY_LEVEL_COUNT, applyFriendReadiness, polishFriendReadyLevel } from "./friendReadiness";
export {
  LEVEL_COUNT,
  LEVEL_META,
  clampLevelIndex,
  clampUnlockedLevel,
  getLevelMetaByIndex,
  levelIndexFromSearch,
  levelIsUnlocked,
  type LevelMeta,
} from "./meta";
export {
  getLevelContentSummary,
  validateCampaignLevel,
  validateCampaignLevels,
  validateLevel,
  validateLevels,
} from "./schema";
export {
  FINAL_CHALLENGE,
  FINAL_CHALLENGE_ID,
  LEVEL_BY_ID,
  LEVEL_DEFINITIONS,
  LEVEL_IDS,
} from "./data";
export {
  LevelLoader,
  cloneLevel,
  defaultLevelLoader,
  getNextLevelId,
  getOrderedLevels,
  loadLevel,
} from "./loader";

export function getLevelByIndex(index: number): LevelDefinition {
  const safeIndex = Math.max(0, Math.min(index, ALL_LEVELS.length - 1));
  return ALL_LEVELS[safeIndex]!;
}

export function getLevelById(id: string): LevelDefinition | undefined {
  return ALL_LEVELS.find((level) => level.id === id);
}

export function getNextLevel(current: LevelDefinition): LevelDefinition | undefined {
  if (current.goal.nextLevelId) {
    return getLevelById(current.goal.nextLevelId);
  }
  return ALL_LEVELS[current.index + 1];
}
