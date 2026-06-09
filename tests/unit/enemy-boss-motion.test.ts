import { describe, expect, it, vi } from "vitest";

vi.mock("phaser", () => ({
  default: {
    Math: {
      Clamp: (value: number, min: number, max: number) => Math.min(Math.max(value, min), max),
    },
    Physics: {
      Arcade: {
        Sprite: class {},
      },
    },
  },
}));

import { getBossAttackTelegraph, getBossPhaseTelegraph, BOSS_PHASES } from "../../src/game/entities/Boss";
import { getEnemyTellProfile } from "../../src/game/entities/Enemy";

describe("enemy motion tells", () => {
  it("gives high-intent enemies readable tells", () => {
    expect(getEnemyTellProfile("charger")).toMatchObject({
      tell: "charge-windup",
      durationMs: expect.any(Number),
      intensity: expect.any(Number),
    });
    expect(getEnemyTellProfile("turret")).toMatchObject({
      tell: "turret-lock",
      durationMs: expect.any(Number),
    });
    expect(getEnemyTellProfile("acorn")).toMatchObject({
      tell: "hop-crouch",
      durationMs: expect.any(Number),
    });
  });

  it("keeps ambient patrol enemies tell-free", () => {
    expect(getEnemyTellProfile("beetle")).toBeNull();
    expect(getEnemyTellProfile("lantern")).toBeNull();
  });
});

describe("boss motion telegraphs", () => {
  it("keeps every phase attack backed by a telegraph shorter than the attack", () => {
    for (const phase of [1, 2, 3] as const) {
      for (const attack of BOSS_PHASES[phase].attacks) {
        const telegraph = getBossAttackTelegraph(attack, phase);
        expect(telegraph.attack).toBe(attack);
        expect(telegraph.durationMs).toBeGreaterThan(0);
        expect(telegraph.durationMs).toBeLessThan(BOSS_PHASES[phase].attackDurationMs);
        expect(telegraph.intensity).toBeGreaterThan(0);
      }
    }
  });

  it("tightens attack tells and raises intensity in later phases", () => {
    const phaseOneDash = getBossAttackTelegraph("dashWeave", 1);
    const phaseThreeDash = getBossAttackTelegraph("dashWeave", 3);

    expect(phaseThreeDash.durationMs).toBeLessThan(phaseOneDash.durationMs);
    expect(phaseThreeDash.intensity).toBeGreaterThan(phaseOneDash.intensity);
  });

  it("scales phase-shift telegraphs with escalation", () => {
    const phaseTwo = getBossPhaseTelegraph(2, 1);
    const phaseThree = getBossPhaseTelegraph(3, 2);

    expect(phaseTwo.telegraph).toBe("phase-surge");
    expect(phaseThree.durationMs).toBeGreaterThan(phaseTwo.durationMs);
    expect(phaseThree.intensity).toBeGreaterThan(phaseTwo.intensity);
  });
});
