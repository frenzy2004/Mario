import { describe, expect, it } from "vitest";
import { ALL_LEVELS, FRIEND_READY_LEVEL_COUNT } from "../../src/game/levels";
import { ALL_LEVELS as GENERATED_LEVELS } from "../../src/game/levels/generated";

describe("friend-ready opening levels", () => {
  it("keeps the playable campaign length stable", () => {
    expect(ALL_LEVELS).toHaveLength(GENERATED_LEVELS.length);
  });

  it("adds early assists to the first five playable levels", () => {
    for (let index = 0; index < FRIEND_READY_LEVEL_COUNT; index += 1) {
      const polished = ALL_LEVELS[index]!;
      const raw = GENERATED_LEVELS[index]!;

      expect(polished.id).toBe(raw.id);
      expect(polished.timeLimit).toBeGreaterThan(raw.timeLimit);
      expect(polished.powerups).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ id: `friend-shield-${polished.id}`, kind: "shield" }),
        ]),
      );
      expect(polished.springs).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ id: `friend-spring-${polished.id}`, power: expect.any(Number) }),
        ]),
      );
      expect(polished.collectibles.filter((collectible) => collectible.id.startsWith("friend-guide-"))).toHaveLength(5);
      expect(Math.min(...polished.enemies.map((enemy) => enemy.x))).toBeGreaterThanOrEqual(
        polished.playerSpawn.x + 500,
      );

      const width = polished.columns * 32;
      const height = polished.rows * 32;
      for (const point of [
        ...polished.collectibles.filter((collectible) => collectible.id.startsWith("friend-guide-")),
        ...polished.powerups.filter((powerup) => powerup.id.startsWith("friend-shield-")),
        ...polished.springs.filter((spring) => spring.id.startsWith("friend-spring-")),
      ]) {
        expect(point.x).toBeGreaterThanOrEqual(0);
        expect(point.x).toBeLessThanOrEqual(width);
        expect(point.y).toBeGreaterThanOrEqual(0);
        expect(point.y).toBeLessThanOrEqual(height);
      }
    }
  });

  it("leaves later generated levels untouched by the opening overlay", () => {
    expect(ALL_LEVELS[FRIEND_READY_LEVEL_COUNT]).toBe(GENERATED_LEVELS[FRIEND_READY_LEVEL_COUNT]);
  });
});
