import { describe, expect, it } from "vitest";
import {
  addCollectibleScore,
  addCompletionBonus,
  addEnemyScore,
  createScoreState,
} from "../../src/game/systems/ScoringSystem";

describe("ScoringSystem", () => {
  it("scores collectibles, enemies, bosses, and time bonuses deterministically", () => {
    const afterGem = addCollectibleScore(createScoreState(), "glimmer");
    const afterEnemy = addEnemyScore(afterGem);
    const afterBoss = addEnemyScore(afterEnemy, true);
    const afterBonus = addCompletionBonus(afterBoss, 10);
    expect(afterBonus.score).toBeGreaterThan(afterBoss.score);
    expect(afterBonus.glimmers).toBe(1);
    expect(afterBonus.enemiesDefeated).toBe(2);
  });
});
