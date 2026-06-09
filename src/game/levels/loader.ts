import { FINAL_CHALLENGE_ID, LEVEL_DEFINITIONS } from "./data";
import type { LevelDefinition } from "./schema";
import { validateLevels } from "./schema";

export type LevelRef = string | number | { id?: string; index?: number };

export function cloneLevel(level: LevelDefinition): LevelDefinition {
  return JSON.parse(JSON.stringify(level)) as LevelDefinition;
}

export class LevelLoader {
  private readonly levels: LevelDefinition[];
  private readonly byId: ReadonlyMap<string, LevelDefinition>;
  private readonly byIndex: ReadonlyMap<number, LevelDefinition>;

  constructor(levels: readonly LevelDefinition[] = LEVEL_DEFINITIONS) {
    const copied = levels.map(cloneLevel).sort((a, b) => a.index - b.index);
    const issues = validateLevels(copied);

    if (issues.length > 0) {
      throw new Error(
        `Invalid level data:\n${issues
          .map((issue) => `${issue.levelId}: ${issue.message}`)
          .join("\n")}`,
      );
    }

    this.levels = copied;
    this.byId = new Map(copied.map((level) => [level.id, level]));
    this.byIndex = new Map(copied.map((level) => [level.index, level]));
  }

  getAll(): LevelDefinition[] {
    return this.levels.map(cloneLevel);
  }

  getById(id: string): LevelDefinition | undefined {
    const level = this.byId.get(id);
    return level ? cloneLevel(level) : undefined;
  }

  getByIndex(index: number): LevelDefinition | undefined {
    const level = this.byIndex.get(index);
    return level ? cloneLevel(level) : undefined;
  }

  load(ref: LevelRef): LevelDefinition {
    const level =
      typeof ref === "number"
        ? this.byIndex.get(ref)
        : typeof ref === "string"
          ? this.byId.get(ref)
          : ref.id !== undefined
            ? this.byId.get(ref.id)
            : ref.index !== undefined
              ? this.byIndex.get(ref.index)
              : undefined;

    if (!level) {
      throw new Error(`Unknown level reference: ${JSON.stringify(ref)}`);
    }

    return cloneLevel(level);
  }

  getNextLevel(current: LevelDefinition): LevelDefinition | undefined {
    const explicitNext = current.goal.nextLevelId
      ? this.byId.get(current.goal.nextLevelId)
      : undefined;

    if (explicitNext) {
      return cloneLevel(explicitNext);
    }

    const currentIndex = this.levels.findIndex((level) => level.id === current.id);
    const next = currentIndex >= 0 ? this.levels[currentIndex + 1] : undefined;
    return next ? cloneLevel(next) : undefined;
  }

  getNextLevelId(current: LevelDefinition | string): string | undefined {
    const level = typeof current === "string" ? this.byId.get(current) : current;
    return level ? this.getNextLevel(level)?.id : undefined;
  }

  getFinalChallenge(): LevelDefinition {
    return this.load(FINAL_CHALLENGE_ID);
  }
}

export const defaultLevelLoader = new LevelLoader();

export function getOrderedLevels(): LevelDefinition[] {
  return defaultLevelLoader.getAll();
}

export function loadLevel(ref: LevelRef): LevelDefinition {
  return defaultLevelLoader.load(ref);
}

export function getNextLevelId(current: LevelDefinition | string): string | undefined {
  return defaultLevelLoader.getNextLevelId(current);
}
