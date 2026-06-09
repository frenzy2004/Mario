export const PLAYER_CONFIG = {
  width: 24,
  height: 30,
  maxWalkSpeed: 168,
  maxRunSpeed: 252,
  maxDashSpeed: 344,
  groundAcceleration: 2350,
  airAcceleration: 1640,
  groundDrag: 2180,
  airDrag: 520,
  skidAcceleration: 3400,
  skidDrag: 2850,
  skidThreshold: 125,
  jumpVelocity: -536,
  springJumpVelocity: -760,
  minJumpVelocity: -240,
  bounceVelocity: -420,
  coyoteMs: 115,
  jumpBufferMs: 125,
  landStateMs: 85,
  dashMs: 155,
  dashCooldownMs: 420,
  hurtStateMs: 420,
  hurtInvulnerabilityMs: 1450,
  hurtKnockbackX: 240,
  hurtKnockbackY: -315,
  maxHealth: 3,
  landingDustVelocity: 360,
  gliderFallSpeed: 118,
} as const;

export type PlayerPowerKind = "shield" | "springBoots" | "starburst" | "gliderLeaf";
export type PlayerSquashStretchCue = "jump" | "land" | "dash" | "hurt" | "respawn" | "victory";
export type PlayerMotionCueName = PlayerSquashStretchCue | "power";
export type PlayerFeedbackCue = "hurt" | "respawn" | "victory";
export type PlayerPowerAuraAction = "start" | "refresh" | "end";
export type PlayerPowerAuraReason = "expired" | "absorbed-hit";

export interface PlayerSquashStretchCueConfig {
  cue: PlayerSquashStretchCue;
  durationMs: number;
  ease: string;
  recoverMs: number;
  scaleX: number;
  scaleY: number;
}

export interface PlayerDashTrailCueConfig {
  alpha: number;
  direction: -1 | 1;
  durationMs: number;
  facing: PlayerFacing;
  intervalMs: number;
  offsetX: number;
  scale: number;
  tint: number;
}

export interface PlayerPowerAuraCueConfig {
  action: PlayerPowerAuraAction;
  alpha: number;
  durationMs: number;
  expiresAt: number | null;
  kind: PlayerPowerKind;
  pulseMs: number;
  radius: number;
  reason?: PlayerPowerAuraReason;
  startedAt: number;
  tint: number;
}

export interface PlayerFeedbackCueConfig {
  burstCount: number;
  cue: PlayerFeedbackCue;
  flashTint: number;
  freezeMs: number;
  shakeIntensity: number;
  shakeMs: number;
}

export interface PlayerMotionCueEvent {
  scope: "player";
  cue: PlayerMotionCueName;
  x: number;
  y: number;
  direction: -1 | 1;
  health: number;
  maxHealth: number;
  at: number;
  durationMs: number;
  intensity: number;
  action?: PlayerPowerAuraAction;
  powerupKind?: PlayerPowerKind;
  reason?: PlayerPowerAuraReason;
  shielded?: boolean;
  source?: unknown;
}

export interface PlayerMotionCueInput {
  cue: PlayerMotionCueName;
  facing: PlayerFacing;
  health: number;
  x: number;
  y: number;
  at: number;
  action?: PlayerPowerAuraAction;
  durationMs?: number;
  intensity?: number;
  powerupKind?: PlayerPowerKind;
  reason?: PlayerPowerAuraReason;
  shielded?: boolean;
  source?: unknown;
}

export const PLAYER_MOTION_EVENTS = {
  cue: "motion:cue",
  dashTrail: "motion:dash-trail",
  feedback: "motion:player-feedback",
  playerMotion: "player:motion",
  powerAura: "motion:power-aura",
  squashStretch: "motion:squash-stretch",
} as const;

export const PLAYER_FEEL_CONFIG = {
  squashStretch: {
    jump: { scaleX: 0.86, scaleY: 1.14, durationMs: 82, recoverMs: 96, ease: "Back.Out" },
    land: { scaleX: 1.18, scaleY: 0.82, durationMs: 74, recoverMs: 118, ease: "Quad.Out" },
    dash: { scaleX: 1.24, scaleY: 0.88, durationMs: 68, recoverMs: 110, ease: "Cubic.Out" },
    hurt: { scaleX: 1.12, scaleY: 0.9, durationMs: 88, recoverMs: 130, ease: "Back.Out" },
    respawn: { scaleX: 0.74, scaleY: 1.24, durationMs: 130, recoverMs: 170, ease: "Back.Out" },
    victory: { scaleX: 1.08, scaleY: 1.12, durationMs: 180, recoverMs: 220, ease: "Sine.Out" },
  },
  dashTrail: {
    alpha: 0.42,
    durationMs: PLAYER_CONFIG.dashMs,
    intervalMs: 26,
    offsetX: 12,
    scale: 0.96,
    tint: 0x8dde73,
  },
  powerAura: {
    shield: { alpha: 0.36, pulseMs: 520, radius: 24, tint: 0x83f7ff },
    springBoots: { alpha: 0.3, pulseMs: 440, radius: 22, tint: 0x38bdf8 },
    starburst: { alpha: 0.42, pulseMs: 360, radius: 28, tint: 0xfacc15 },
    gliderLeaf: { alpha: 0.28, pulseMs: 620, radius: 26, tint: 0x22c55e },
  },
  feedback: {
    hurt: { burstCount: 9, flashTint: 0xff6b7a, freezeMs: 42, shakeIntensity: 0.0042, shakeMs: 120 },
    respawn: { burstCount: 14, flashTint: 0x83f7ff, freezeMs: 0, shakeIntensity: 0.0018, shakeMs: 150 },
    victory: { burstCount: 18, flashTint: 0xfacc15, freezeMs: 0, shakeIntensity: 0.0026, shakeMs: 210 },
  },
} as const satisfies {
  dashTrail: Omit<PlayerDashTrailCueConfig, "direction" | "facing">;
  feedback: Record<PlayerFeedbackCue, Omit<PlayerFeedbackCueConfig, "cue">>;
  powerAura: Record<PlayerPowerKind, Omit<PlayerPowerAuraCueConfig, "action" | "durationMs" | "expiresAt" | "kind" | "reason" | "startedAt">>;
  squashStretch: Record<PlayerSquashStretchCue, Omit<PlayerSquashStretchCueConfig, "cue">>;
};

export function createPlayerSquashStretchCue(cue: PlayerSquashStretchCue): PlayerSquashStretchCueConfig {
  return {
    cue,
    ...PLAYER_FEEL_CONFIG.squashStretch[cue],
  };
}

export function createPlayerDashTrailCue(facing: PlayerFacing): PlayerDashTrailCueConfig {
  return {
    ...PLAYER_FEEL_CONFIG.dashTrail,
    direction: facing === "left" ? -1 : 1,
    facing,
  };
}

export function createPlayerPowerAuraCue(
  kind: PlayerPowerKind,
  durationMs: number,
  startedAt: number,
  action: PlayerPowerAuraAction = "start",
  reason?: PlayerPowerAuraReason,
): PlayerPowerAuraCueConfig {
  const cue = {
    ...PLAYER_FEEL_CONFIG.powerAura[kind],
    action,
    durationMs,
    expiresAt: durationMs > 0 ? startedAt + durationMs : null,
    kind,
    startedAt,
  };
  return reason ? { ...cue, reason } : cue;
}

export function createPlayerFeedbackCue(cue: PlayerFeedbackCue): PlayerFeedbackCueConfig {
  return {
    cue,
    ...PLAYER_FEEL_CONFIG.feedback[cue],
  };
}

export function createPlayerMotionCueEvent(input: PlayerMotionCueInput): PlayerMotionCueEvent {
  const event: PlayerMotionCueEvent = {
    scope: "player",
    cue: input.cue,
    x: input.x,
    y: input.y,
    direction: input.facing === "left" ? -1 : 1,
    health: input.health,
    maxHealth: PLAYER_CONFIG.maxHealth,
    at: input.at,
    durationMs: input.durationMs ?? 0,
    intensity: input.intensity ?? 1,
  };
  return {
    ...event,
    ...(input.action ? { action: input.action } : {}),
    ...(input.powerupKind ? { powerupKind: input.powerupKind } : {}),
    ...(input.reason ? { reason: input.reason } : {}),
    ...(input.shielded ? { shielded: true } : {}),
    ...(input.source ? { source: input.source } : {}),
  };
}

export type PlayerAnimationState =
  | "idle"
  | "run"
  | "skid"
  | "jump"
  | "fall"
  | "dash"
  | "glide"
  | "land"
  | "hurt"
  | "victory";

export type PlayerFacing = "left" | "right";

export interface PlayerAnimationDefinition {
  key: string;
  frames: number;
  frameRate: number;
  repeat: number;
}

export const PLAYER_ANIMATIONS = {
  idle: { key: "hero-idle", frames: 6, frameRate: 7, repeat: -1 },
  run: { key: "hero-run", frames: 10, frameRate: 14, repeat: -1 },
  skid: { key: "hero-skid", frames: 4, frameRate: 12, repeat: -1 },
  jump: { key: "hero-jump", frames: 3, frameRate: 10, repeat: -1 },
  fall: { key: "hero-fall", frames: 3, frameRate: 8, repeat: -1 },
  dash: { key: "hero-dash", frames: 4, frameRate: 18, repeat: -1 },
  glide: { key: "hero-glide", frames: 4, frameRate: 8, repeat: -1 },
  land: { key: "hero-land", frames: 4, frameRate: 13, repeat: 0 },
  hurt: { key: "hero-hurt", frames: 5, frameRate: 11, repeat: 0 },
  victory: { key: "hero-victory", frames: 8, frameRate: 10, repeat: -1 },
} satisfies Record<PlayerAnimationState, PlayerAnimationDefinition>;
