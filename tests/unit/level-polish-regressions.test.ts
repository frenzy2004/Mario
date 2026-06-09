import { describe, expect, it } from "vitest";
import { ALL_LEVELS } from "../../src/game/levels/generated";
import type { LevelDefinition } from "../../src/game/levels/schema";
import { getLevelContentSummary } from "../../src/game/levels/schema";

type PolishRegressionCheck = {
  name: string;
  run: (levels: readonly LevelDefinition[]) => void;
};

const polishChecks: PolishRegressionCheck[] = [
  {
    name: "keeps level-01 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-01");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-02 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-02");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-03 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-03");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-04 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-04");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-05 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-05");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-06 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-06");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-07 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-07");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-08 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-08");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-09 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-09");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-10 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-10");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
];

function getLevel(levels: readonly LevelDefinition[], id: string): LevelDefinition {
  const level = levels.find((candidate) => candidate.id === id);
  expect(level, `missing generated level: ${id}`).toBeDefined();
  return level as LevelDefinition;
}

describe("generated level polish regressions", () => {
  for (const check of polishChecks) {
    it(check.name, () => {
      check.run(ALL_LEVELS);
    });
  }
});
