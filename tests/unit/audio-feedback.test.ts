import { describe, expect, it } from "vitest";
import { SFX_DEFINITIONS, type CueName } from "../../src/game/config/audio";

const GAMEPLAY_POLISH_CUES: CueName[] = [
  "enemyTell",
  "enemyHit",
  "enemyDefeat",
  "bossTelegraph",
  "bossHit",
  "bossPhase",
  "bossDefeat",
];

describe("gameplay feedback audio cues", () => {
  it("defines layered cues for enemy and boss polish events", () => {
    for (const cue of GAMEPLAY_POLISH_CUES) {
      expect(SFX_DEFINITIONS[cue].description.length).toBeGreaterThan(10);
      expect(SFX_DEFINITIONS[cue].steps.length).toBeGreaterThanOrEqual(cue.endsWith("Defeat") ? 3 : 2);
    }
  });

  it("keeps generic legacy cues available as aliases", () => {
    expect(SFX_DEFINITIONS.enemy.steps).toHaveLength(SFX_DEFINITIONS.enemyDefeat.steps.length);
    expect(SFX_DEFINITIONS.boss.steps.length).toBeGreaterThanOrEqual(3);
  });
});
