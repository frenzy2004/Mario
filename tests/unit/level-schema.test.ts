import { describe, expect, it } from "vitest";
import { validateLevel } from "../../src/game/levels/schema";

describe("validateLevel", () => {
  it("accepts a rectangular level with goal after spawn", () => {
    expect(
      validateLevel({
        id: "test",
        index: 0,
        title: "Test",
        chapter: "Test",
        columns: 4,
        rows: 2,
        timeLimit: 120,
        palette: {
          skyTop: 0,
          skyBottom: 0,
          ground: 0,
          groundAccent: 0,
          brass: 0,
          leaves: 0,
          hazard: 0,
          glow: 0,
        },
        playerSpawn: { x: 16, y: 32 },
        layout: ["....", "####"],
        enemies: [],
        collectibles: [],
        powerups: [],
        movingPlatforms: [],
        hazards: [],
        checkpoints: [],
        springs: [],
        windZones: [],
        decorations: [],
        goal: { id: "goal", x: 96, y: 32 },
      }),
    ).toEqual([]);
  });
});
