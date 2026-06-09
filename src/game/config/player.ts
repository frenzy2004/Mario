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

export type PlayerAnimationState =
  | "idle"
  | "run"
  | "skid"
  | "jump"
  | "fall"
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
  idle: { key: "hero-idle", frames: 4, frameRate: 7, repeat: -1 },
  run: { key: "hero-run", frames: 8, frameRate: 12, repeat: -1 },
  skid: { key: "hero-skid", frames: 3, frameRate: 10, repeat: -1 },
  jump: { key: "hero-jump", frames: 2, frameRate: 9, repeat: -1 },
  fall: { key: "hero-fall", frames: 2, frameRate: 8, repeat: -1 },
  land: { key: "hero-land", frames: 3, frameRate: 12, repeat: 0 },
  hurt: { key: "hero-hurt", frames: 4, frameRate: 10, repeat: 0 },
  victory: { key: "hero-victory", frames: 6, frameRate: 9, repeat: -1 },
} satisfies Record<PlayerAnimationState, PlayerAnimationDefinition>;
