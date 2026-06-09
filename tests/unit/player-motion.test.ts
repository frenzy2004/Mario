import { describe, expect, it } from "vitest";
import {
  PLAYER_CONFIG,
  PLAYER_MOTION_EVENTS,
  createPlayerDashTrailCue,
  createPlayerFeedbackCue,
  createPlayerMotionCueEvent,
  createPlayerPowerAuraCue,
  createPlayerSquashStretchCue,
} from "../../src/game/config/player";

describe("player motion feel cues", () => {
  it("keeps the MotionSystem event names stable", () => {
    expect(PLAYER_MOTION_EVENTS).toEqual({
      cue: "motion:cue",
      dashTrail: "motion:dash-trail",
      feedback: "motion:player-feedback",
      playerMotion: "player:motion",
      powerAura: "motion:power-aura",
      squashStretch: "motion:squash-stretch",
    });
  });

  it("builds squash/stretch cues for directional movement beats", () => {
    const jump = createPlayerSquashStretchCue("jump");
    const land = createPlayerSquashStretchCue("land");
    const dash = createPlayerSquashStretchCue("dash");

    expect(jump.scaleY).toBeGreaterThan(jump.scaleX);
    expect(land.scaleX).toBeGreaterThan(land.scaleY);
    expect(dash.durationMs).toBeLessThanOrEqual(PLAYER_CONFIG.dashMs);
  });

  it("builds dash trail cues with facing-derived direction", () => {
    const leftTrail = createPlayerDashTrailCue("left");
    const rightTrail = createPlayerDashTrailCue("right");

    expect(leftTrail.direction).toBe(-1);
    expect(rightTrail.direction).toBe(1);
    expect(leftTrail.durationMs).toBe(PLAYER_CONFIG.dashMs);
    expect(leftTrail.intervalMs).toBeGreaterThan(0);
  });

  it("builds power aura lifecycle cues with expiry metadata", () => {
    const starburst = createPlayerPowerAuraCue("starburst", 6500, 1000, "refresh");
    const shieldBreak = createPlayerPowerAuraCue("shield", 0, 2400, "end", "absorbed-hit");

    expect(starburst.expiresAt).toBe(7500);
    expect(starburst.action).toBe("refresh");
    expect(shieldBreak.expiresAt).toBeNull();
    expect(shieldBreak.reason).toBe("absorbed-hit");
  });

  it("builds hurt feedback cues with hit-stop and shake metadata", () => {
    const hurt = createPlayerFeedbackCue("hurt");

    expect(hurt.freezeMs).toBeGreaterThan(0);
    expect(hurt.shakeMs).toBeGreaterThan(0);
    expect(hurt.burstCount).toBeGreaterThan(0);
  });

  it("builds shared motion cue payloads for player hooks", () => {
    const event = createPlayerMotionCueEvent({
      cue: "dash",
      facing: "left",
      health: 2,
      x: 40,
      y: 80,
      at: 1200,
      durationMs: PLAYER_CONFIG.dashMs,
      intensity: 1.16,
    });

    expect(event).toMatchObject({
      scope: "player",
      cue: "dash",
      direction: -1,
      maxHealth: PLAYER_CONFIG.maxHealth,
      durationMs: PLAYER_CONFIG.dashMs,
    });
  });
});
