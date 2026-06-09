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
  {
    name: "keeps level-11 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-11");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-12 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-12");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-13 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-13");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-14 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-14");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-15 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-15");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-16 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-16");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-17 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-17");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-18 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-18");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-19 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-19");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-20 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-20");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-21 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-21");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-22 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-22");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-23 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-23");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-24 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-24");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-25 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-25");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-26 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-26");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-27 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-27");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-28 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-28");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-29 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-29");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-30 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-30");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-31 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-31");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-32 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-32");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-33 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-33");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-34 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-34");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-35 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-35");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-36 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-36");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-37 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-37");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-38 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-38");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-39 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-39");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-40 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-40");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-41 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-41");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps level-42 readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "level-42");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(62);
      expect(level.decorations.length).toBeGreaterThanOrEqual(180);
    },
  },
  {
    name: "keeps final challenge readability pickups visible",
    run: (levels) => {
      const level = getLevel(levels, "final-crown");
      const summary = getLevelContentSummary(level);
      expect(summary.collectibleCount).toBeGreaterThanOrEqual(128);
      expect(level.decorations.length).toBeGreaterThanOrEqual(260);
    },
  },
  {
    name: "keeps level-01 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-01");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(3);
    },
  },
  {
    name: "keeps level-02 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-02");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(4);
    },
  },
  {
    name: "keeps level-03 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-03");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(5);
    },
  },
  {
    name: "keeps level-04 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-04");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(6);
    },
  },
  {
    name: "keeps level-05 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-05");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(3);
    },
  },
  {
    name: "keeps level-06 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-06");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(4);
    },
  },
  {
    name: "keeps level-07 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-07");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(5);
    },
  },
  {
    name: "keeps level-08 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-08");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(6);
    },
  },
  {
    name: "keeps level-09 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-09");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(3);
    },
  },
  {
    name: "keeps level-10 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-10");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(4);
    },
  },
  {
    name: "keeps level-11 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-11");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(5);
    },
  },
  {
    name: "keeps level-12 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-12");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(6);
    },
  },
  {
    name: "keeps level-13 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-13");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(3);
    },
  },
  {
    name: "keeps level-14 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-14");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(4);
    },
  },
  {
    name: "keeps level-15 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-15");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(5);
    },
  },
  {
    name: "keeps level-16 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-16");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(6);
    },
  },
  {
    name: "keeps level-17 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-17");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(3);
    },
  },
  {
    name: "keeps level-18 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-18");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(4);
    },
  },
  {
    name: "keeps level-19 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-19");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(5);
    },
  },
  {
    name: "keeps level-20 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-20");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(6);
    },
  },
  {
    name: "keeps level-21 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-21");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(3);
    },
  },
  {
    name: "keeps level-22 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-22");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(4);
    },
  },
  {
    name: "keeps level-23 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-23");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(5);
    },
  },
  {
    name: "keeps level-24 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-24");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(6);
    },
  },
  {
    name: "keeps level-25 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-25");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(3);
    },
  },
  {
    name: "keeps level-26 encounter pacing varied",
    run: (levels) => {
      const level = getLevel(levels, "level-26");
      const summary = getLevelContentSummary(level);
      expect(summary.enemyCount).toBeGreaterThanOrEqual(12);
      expect(summary.hazardTiles + level.hazards.length).toBeGreaterThanOrEqual(10);
      expect(summary.movingPlatformCount).toBeGreaterThanOrEqual(7);
      expect(level.windZones.length).toBeGreaterThanOrEqual(4);
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
