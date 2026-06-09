import { applyFriendReadiness } from "./friendReadiness";
import { ALL_LEVELS as GENERATED_LEVELS } from "./generated";
import type { LevelDefinition } from "./schema";

export const LEVEL_DEFINITIONS: LevelDefinition[] = applyFriendReadiness(GENERATED_LEVELS);

export const LEVEL_IDS: string[] = LEVEL_DEFINITIONS.map((level) => level.id);

export const FINAL_CHALLENGE: LevelDefinition =
  LEVEL_DEFINITIONS[LEVEL_DEFINITIONS.length - 1]!;

export const FINAL_CHALLENGE_ID: string = FINAL_CHALLENGE.id;

export const LEVEL_BY_ID: ReadonlyMap<string, LevelDefinition> = new Map(
  LEVEL_DEFINITIONS.map((level) => [level.id, level]),
);
