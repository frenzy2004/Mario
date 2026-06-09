import { describe, expect, it } from "vitest";
import {
  LEVEL_COUNT,
  LEVEL_META,
  clampLevelIndex,
  getLevelMetaByIndex,
  levelIndexFromSearch,
  levelIsUnlocked,
} from "../../src/game/levels/meta";

describe("level metadata", () => {
  it("describes the full campaign without loading generated level data", () => {
    expect(LEVEL_COUNT).toBe(43);
    expect(LEVEL_META).toHaveLength(43);
    expect(getLevelMetaByIndex(0)).toMatchObject({
      id: "level-01",
      title: "Brassroot Verge 01",
      chapter: "Brassroot Verge",
    });
    expect(getLevelMetaByIndex(42)).toMatchObject({
      id: "final-crown",
      final: true,
    });
  });

  it("clamps selection and unlock checks", () => {
    expect(clampLevelIndex(-10)).toBe(0);
    expect(clampLevelIndex(999)).toBe(42);
    expect(levelIsUnlocked(3, 3)).toBe(true);
    expect(levelIsUnlocked(4, 3)).toBe(false);
  });

  it("parses one-based share links into zero-based level indexes", () => {
    expect(levelIndexFromSearch("?level=1", 7)).toBe(0);
    expect(levelIndexFromSearch("?level=8", 0)).toBe(7);
    expect(levelIndexFromSearch("?level=999", 0)).toBe(42);
    expect(levelIndexFromSearch("?level=bad", 5)).toBe(5);
  });
});
