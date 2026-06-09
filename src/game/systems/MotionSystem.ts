import type { GameSettings, MotionLevel } from "./SaveSystem";

export type MotionTweenKind = "transform" | "particle" | "camera" | "time" | "fade" | "utility";
export type MinimalTweenBehavior = "instant" | "complete" | "skip";
export type SceneFadeDirection = "in" | "out";

export type FeedbackEvent =
  | { kind: "jump" | "land" | "dash" | "hurt" | "respawn" | "victory"; target?: MotionTarget; x: number; y: number }
  | { kind: "pickup"; collectibleKind?: string; score?: number; target?: MotionTarget; x: number; y: number }
  | { kind: "powerup"; powerupKind?: string; target?: MotionTarget; x: number; y: number }
  | { kind: "enemyHit" | "enemyDefeat"; enemyKind?: string; target?: MotionTarget; x: number; y: number }
  | { kind: "bossAttack"; attack?: string; phase?: number; target?: MotionTarget; x: number; y: number }
  | { kind: "bossPhase"; phase: number; previousPhase?: number; target?: MotionTarget; x: number; y: number }
  | { kind: "checkpoint" | "goal"; target?: MotionTarget; x: number; y: number }
  | { kind: "sceneTransition"; direction: SceneFadeDirection };

export type FeedbackResult = MotionTween | MotionTween[] | MotionTarget[] | boolean | undefined;

export interface MotionProfile {
  level: MotionLevel;
  allowLargeMotion: boolean;
  allowShake: boolean;
  allowHitStop: boolean;
  durationScale: number;
  particleScale: number;
}

export interface MotionSystemOptions {
  settings?: Partial<GameSettings>;
  profile?: MotionProfile;
  random?: () => number;
}

export interface MotionTarget {
  x?: number;
  y?: number;
  alpha?: number;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  rotation?: number;
  angle?: number;
  depth?: number;
  visible?: boolean;
  active?: boolean;
  destroyed?: boolean;
  scene?: unknown;
  texture?: { key?: string };
  frame?: { name?: string | number };
  flipX?: boolean;
  setAlpha?: (alpha: number) => MotionTarget;
  setBlendMode?: (blendMode: string | number) => MotionTarget;
  setDepth?: (depth: number) => MotionTarget;
  setFlipX?: (flipX: boolean) => MotionTarget;
  setOrigin?: (x: number, y?: number) => MotionTarget;
  setPosition?: (x: number, y: number) => MotionTarget;
  setRotation?: (rotation: number) => MotionTarget;
  setScale?: (x: number, y?: number) => MotionTarget;
  setScrollFactor?: (x: number, y?: number) => MotionTarget;
  setStrokeStyle?: (width: number, color: number, alpha?: number) => MotionTarget;
  setTint?: (tint: number) => MotionTarget;
  destroy?: () => void;
}

export interface MotionTween {
  stop?: () => void;
  remove?: () => void;
  destroy?: () => void;
  isPlaying?: () => boolean;
}

export interface MotionTweenConfig {
  targets: MotionTarget | MotionTarget[] | readonly MotionTarget[];
  duration?: number;
  delay?: number;
  ease?: string | ((value: number) => number);
  yoyo?: boolean;
  repeat?: number;
  alpha?: number;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  x?: number;
  y?: number;
  rotation?: number;
  angle?: number;
  onStart?: () => void;
  onComplete?: () => void;
  onStop?: () => void;
  onUpdate?: () => void;
  [key: string]: unknown;
}

export interface SafeTweenOptions {
  kind?: MotionTweenKind;
  killExisting?: boolean;
  skipInactive?: boolean;
  minimalBehavior?: MinimalTweenBehavior;
  minDuration?: number;
}

export interface BurstOptions {
  count?: number;
  distance?: number;
  minDistance?: number;
  maxDistance?: number;
  duration?: number;
  minDuration?: number;
  maxDuration?: number;
  depth?: number;
  tint?: number;
  startScale?: number;
  endScale?: number;
  alpha?: number;
  blendMode?: string | number;
}

export interface PulseOptions {
  scale?: number;
  intensity?: number;
  duration?: number;
  repeat?: number;
  ease?: string;
  killExisting?: boolean;
  onComplete?: () => void;
}

export interface SquashOptions {
  scaleX?: number;
  scaleY?: number;
  intensity?: number;
  axis?: "vertical" | "horizontal";
  duration?: number;
  ease?: string;
  killExisting?: boolean;
  onComplete?: () => void;
}

export interface TrailOptions {
  count?: number;
  spacing?: number;
  spacingMs?: number;
  alpha?: number;
  duration?: number;
  tint?: number;
  texture?: string;
  frame?: string | number;
  depth?: number;
  depthOffset?: number;
  offsetX?: number;
  offsetY?: number;
  scale?: number;
  blendMode?: string | number;
}

export interface CameraImpulseOptions {
  strength?: number;
  intensity?: number;
  duration?: number;
  force?: boolean;
  camera?: MotionCamera;
}

export interface HitStopOptions {
  duration?: number;
  timeScale?: number;
}

export interface SceneFadeOptions {
  duration?: number;
  color?: number;
  red?: number;
  green?: number;
  blue?: number;
  force?: boolean;
  camera?: MotionCamera;
  onComplete?: () => void;
}

export interface MotionScene {
  add?: {
    image?: (x: number, y: number, texture: string, frame?: string | number) => MotionTarget;
    text?: (x: number, y: number, text: string, style?: Record<string, unknown>) => MotionTarget;
    circle?: (x: number, y: number, radius: number, color: number, alpha?: number) => MotionTarget;
  };
  cameras?: {
    main?: MotionCamera;
  };
  events?: MotionEventEmitter;
  physics?: {
    world?: {
      timeScale?: number;
    };
  };
  sys?: {
    isActive?: () => boolean;
  };
  time?: {
    delayedCall?: (delay: number, callback: () => void) => MotionTween;
  };
  tweens?: MotionTweenManager;
}

export interface MotionTweenManager {
  add?: (config: MotionTweenConfig) => MotionTween;
  killTweensOf?: (targets: MotionTarget | MotionTarget[] | readonly MotionTarget[]) => void;
  timeScale?: number;
}

export interface MotionCamera {
  shake?: (duration: number, intensity: number, force?: boolean) => void;
  fadeIn?: (
    duration: number,
    red?: number,
    green?: number,
    blue?: number,
    force?: boolean,
    callback?: () => void,
  ) => void;
  fadeOut?: (
    duration: number,
    red?: number,
    green?: number,
    blue?: number,
    force?: boolean,
    callback?: () => void,
  ) => void;
  once?: (eventName: string, callback: () => void) => void;
}

export interface MotionEventEmitter {
  once?: (eventName: string, callback: () => void) => void;
}

interface ScaleSnapshot {
  scaleX: number;
  scaleY: number;
  scale?: number;
}

interface HitStopSnapshot {
  tweenTimeScale?: number;
  physicsTimeScale?: number;
}

const DEFAULT_PROFILE: MotionProfile = {
  level: "full",
  allowLargeMotion: true,
  allowShake: true,
  allowHitStop: true,
  durationScale: 1,
  particleScale: 1,
};

const RESERVED_TWEEN_KEYS = new Set([
  "targets",
  "duration",
  "delay",
  "ease",
  "easeParams",
  "hold",
  "loop",
  "loopDelay",
  "paused",
  "persist",
  "props",
  "repeat",
  "repeatDelay",
  "stagger",
  "yoyo",
  "onActive",
  "onComplete",
  "onCompleteParams",
  "onLoop",
  "onRepeat",
  "onStart",
  "onStop",
  "onUpdate",
  "callbackScope",
]);

const FADE_IN_COMPLETE_EVENT = "camerafadeincomplete";
const FADE_OUT_COMPLETE_EVENT = "camerafadeoutcomplete";
const SHUTDOWN_EVENT = "shutdown";

export function resolveMotionProfile(settings: Partial<GameSettings> = {}): MotionProfile {
  const level = settings.motionLevel ?? (settings.reducedMotion || settings.reduceShake ? "reduced" : "full");
  if (level === "minimal") {
    return {
      level,
      allowLargeMotion: false,
      allowShake: false,
      allowHitStop: false,
      durationScale: 0,
      particleScale: 0,
    };
  }
  if (level === "reduced") {
    return {
      level,
      allowLargeMotion: false,
      allowShake: false,
      allowHitStop: false,
      durationScale: 0.55,
      particleScale: 0.45,
    };
  }
  return {
    ...DEFAULT_PROFILE,
    allowShake: settings.screenShake ?? !settings.reduceShake,
  };
}

export class MotionSystem {
  private readonly scene: MotionScene;
  private readonly random: () => number;
  private profile: MotionProfile;
  private hitStopDepth = 0;
  private hitStopSnapshot?: HitStopSnapshot;
  private readonly hitStopTimers = new Set<ReturnType<typeof globalThis.setTimeout>>();

  constructor(scene: unknown, options: MotionSystemOptions = {}) {
    this.scene = scene as MotionScene;
    this.profile = options.profile ?? resolveMotionProfile(options.settings);
    this.random = options.random ?? Math.random;
    this.scene.events?.once?.(SHUTDOWN_EVENT, () => this.destroy());
  }

  setSettings(settings: Partial<GameSettings>): void {
    this.profile = resolveMotionProfile(settings);
  }

  setProfile(profile: MotionProfile): void {
    this.profile = { ...profile };
  }

  getProfile(): MotionProfile {
    return { ...this.profile };
  }

  safeTween(config: MotionTweenConfig, options: SafeTweenOptions = {}): MotionTween | undefined {
    if (this.profile.level === "minimal") {
      this.resolveMinimalTween(config, options.minimalBehavior ?? "instant");
      return undefined;
    }
    if (this.scene.sys?.isActive && !this.scene.sys.isActive()) {
      return undefined;
    }
    if (!this.scene.tweens?.add) {
      return undefined;
    }

    const targets = targetsFrom(config.targets).filter((target) => this.canAnimateTarget(target, options.skipInactive));
    if (targets.length === 0) {
      return undefined;
    }

    if (options.killExisting) {
      this.scene.tweens.killTweensOf?.(targets);
    }

    const tweenTargets: MotionTweenConfig["targets"] = targets.length === 1 ? targets[0]! : targets;
    return this.scene.tweens.add({
      ...config,
      targets: tweenTargets,
      duration: Math.max(
        options.minDuration ?? 0,
        scaleDuration(config.duration ?? 0, this.profile, options.kind ?? "utility"),
      ),
      delay: scaleDuration(config.delay ?? 0, this.profile, options.kind ?? "utility"),
    });
  }

  pulse(target: MotionTarget, options: PulseOptions = {}): MotionTween | undefined {
    if (!this.canAnimateTarget(target, true) || this.profile.level === "minimal") {
      return undefined;
    }

    const snapshot = scaleSnapshot(target);
    const scale = options.scale ?? 1 + (options.intensity ?? 0.16);
    const targetScaleX = snapshot.scaleX * scale;
    const targetScaleY = snapshot.scaleY * scale;

    return this.safeTween(
      {
        targets: target,
        scaleX: targetScaleX,
        scaleY: targetScaleY,
        duration: options.duration ?? 130,
        yoyo: true,
        repeat: this.profile.level === "reduced" ? 0 : (options.repeat ?? 0),
        ease: options.ease ?? "Back.easeOut",
        onComplete: () => {
          restoreScale(target, snapshot);
          options.onComplete?.();
        },
      },
      { kind: "transform", killExisting: options.killExisting ?? true, minimalBehavior: "skip" },
    );
  }

  squash(target: MotionTarget, options: SquashOptions = {}): MotionTween | undefined {
    if (!this.canAnimateTarget(target, true) || this.profile.level === "minimal") {
      return undefined;
    }

    const snapshot = scaleSnapshot(target);
    const intensity = options.intensity ?? 0.16;
    const vertical = options.axis !== "horizontal";
    const scaleX = options.scaleX ?? snapshot.scaleX * (vertical ? 1 + intensity : 1 - intensity * 0.6);
    const scaleY = options.scaleY ?? snapshot.scaleY * (vertical ? 1 - intensity : 1 + intensity);

    return this.safeTween(
      {
        targets: target,
        scaleX,
        scaleY,
        duration: options.duration ?? 105,
        yoyo: true,
        ease: options.ease ?? "Quad.easeOut",
        onComplete: () => {
          restoreScale(target, snapshot);
          options.onComplete?.();
        },
      },
      { kind: "transform", killExisting: options.killExisting ?? true, minimalBehavior: "skip" },
    );
  }

  trail(target: MotionTarget, texture = target.texture?.key, options: TrailOptions = {}): MotionTarget[] {
    if (!this.profile.allowLargeMotion || !this.canAnimateTarget(target, true) || !texture || !this.scene.add?.image) {
      return [];
    }
    if (typeof target.x !== "number" || typeof target.y !== "number") {
      return [];
    }

    const count = scaledCount(options.count ?? 4, this.profile);
    const spacing = options.spacing ?? 12;
    const baseScale = uniformScale(target) * (options.scale ?? 1);
    const offsetX = options.offsetX ?? (target.flipX ? spacing : -spacing);
    const offsetY = options.offsetY ?? 0;
    const ghosts: MotionTarget[] = [];

    for (let index = 0; index < count; index += 1) {
      const progress = index + 1;
      const ghost = this.scene.add.image(
        target.x + offsetX * progress,
        target.y + offsetY * progress,
        options.texture ?? texture,
        options.frame ?? target.frame?.name,
      );
      ghost.setOrigin?.(0.5, 0.5);
      setTargetScale(ghost, baseScale, baseScale);
      setTargetAlpha(ghost, (options.alpha ?? 0.34) / progress);
      setDepth(ghost, options.depth ?? ((target.depth ?? 0) + (options.depthOffset ?? -1)));
      if (typeof target.flipX === "boolean") {
        ghost.setFlipX?.(target.flipX);
        ghost.flipX = target.flipX;
      }
      if (typeof target.rotation === "number") {
        ghost.setRotation?.(target.rotation);
        ghost.rotation = target.rotation;
      }
      if (options.tint !== undefined) {
        ghost.setTint?.(options.tint);
      }
      if (options.blendMode !== undefined) {
        ghost.setBlendMode?.(options.blendMode);
      }
      ghosts.push(ghost);

      this.safeTween(
        {
          targets: ghost,
          alpha: 0,
          scaleX: baseScale * 1.12,
          scaleY: baseScale * 1.12,
          duration: options.duration ?? 260,
          ease: "Quad.easeOut",
          onComplete: () => ghost.destroy?.(),
        },
        { kind: "particle", minimalBehavior: "complete" },
      );
    }

    return ghosts;
  }

  burst(x: number, y: number, texture: string, options: BurstOptions = {}): MotionTarget[] {
    if (!texture || !this.scene.add?.image) {
      return [];
    }
    if (this.profile.level === "minimal") {
      const dot = this.flashDot(x, y, options.tint ?? 0xfde68a);
      return dot ? [dot] : [];
    }

    const count = scaledCount(options.count ?? 8, this.profile);
    const minDistance = scaleDistance(options.minDistance ?? 12, this.profile);
    const maxDistance = Math.max(minDistance, scaleDistance(options.maxDistance ?? options.distance ?? 44, this.profile));
    const minDuration = options.minDuration ?? 180;
    const maxDuration = Math.max(minDuration, options.maxDuration ?? options.duration ?? 480);
    const startScale = options.startScale ?? 1;
    const endScale = options.endScale ?? 0.15;
    const particles: MotionTarget[] = [];

    for (let index = 0; index < count; index += 1) {
      const angle = randomBetween(this.random, -Math.PI, Math.PI);
      const distance = randomBetween(this.random, minDistance, maxDistance);
      const duration = randomBetween(this.random, minDuration, maxDuration);
      const particle = this.scene.add.image(x, y, texture);
      setDepth(particle, options.depth ?? 50);
      setTargetAlpha(particle, options.alpha ?? 1);
      setTargetScale(particle, startScale, startScale);
      if (options.tint !== undefined) {
        particle.setTint?.(options.tint);
      }
      if (options.blendMode !== undefined) {
        particle.setBlendMode?.(options.blendMode);
      }
      particles.push(particle);

      this.safeTween(
        {
          targets: particle,
          x: x + Math.cos(angle) * distance,
          y: y + Math.sin(angle) * distance,
          alpha: 0,
          scaleX: endScale,
          scaleY: endScale,
          duration,
          ease: "Quad.easeOut",
          onComplete: () => particle.destroy?.(),
        },
        { kind: "particle", minimalBehavior: "complete" },
      );
    }

    return particles;
  }

  cameraImpulse(options?: CameraImpulseOptions): boolean;
  cameraImpulse(strength?: number, duration?: number): boolean;
  cameraImpulse(strengthOrOptions: number | CameraImpulseOptions = {}, duration?: number): boolean {
    if (!this.profile.allowShake) {
      return false;
    }
    const camera = typeof strengthOrOptions === "object" ? strengthOrOptions.camera : undefined;
    const targetCamera = camera ?? this.scene.cameras?.main;
    if (!targetCamera?.shake) {
      return false;
    }

    const strength =
      typeof strengthOrOptions === "number"
        ? strengthOrOptions
        : (strengthOrOptions.intensity ?? strengthOrOptions.strength ?? 0.0028);
    const requestedDuration = typeof strengthOrOptions === "number" ? (duration ?? 90) : (strengthOrOptions.duration ?? 90);
    const scaledDuration = Math.round(scaleDuration(requestedDuration, this.profile, "camera"));
    const scaledStrength = Math.max(0, strength) * (this.profile.level === "full" ? 1 : 0.25);
    if (scaledDuration <= 0 || scaledStrength <= 0) {
      return false;
    }

    targetCamera.shake(scaledDuration, scaledStrength, typeof strengthOrOptions === "object" ? strengthOrOptions.force : undefined);
    return true;
  }

  hitStop(options?: HitStopOptions): boolean;
  hitStop(duration?: number): boolean;
  hitStop(durationOrOptions: number | HitStopOptions = {}): boolean {
    if (!this.profile.allowHitStop) {
      return false;
    }

    const duration = Math.round(
      scaleDuration(
        typeof durationOrOptions === "number" ? durationOrOptions : (durationOrOptions.duration ?? 70),
        this.profile,
        "time",
      ),
    );
    if (duration <= 0) {
      return false;
    }

    if (this.hitStopDepth === 0) {
      this.hitStopSnapshot = {
        tweenTimeScale: this.scene.tweens?.timeScale,
        physicsTimeScale: this.scene.physics?.world?.timeScale,
      };
    }

    this.hitStopDepth += 1;
    const stoppedScale = clamp(
      typeof durationOrOptions === "number" ? 0.08 : (durationOrOptions.timeScale ?? 0.08),
      0,
      1,
    );
    if (this.scene.tweens) {
      this.scene.tweens.timeScale = stoppedScale;
    }
    if (this.scene.physics?.world) {
      this.scene.physics.world.timeScale = stoppedScale;
    }

    const timer = globalThis.setTimeout(() => this.releaseHitStop(timer), duration);
    this.hitStopTimers.add(timer);
    return true;
  }

  sceneFade(direction: SceneFadeDirection, options?: SceneFadeOptions): boolean;
  sceneFade(direction: SceneFadeDirection, duration?: number, onComplete?: () => void): boolean;
  sceneFade(
    direction: SceneFadeDirection,
    durationOrOptions: number | SceneFadeOptions = {},
    onComplete?: () => void,
  ): boolean {
    const options: SceneFadeOptions =
      typeof durationOrOptions === "number" ? { duration: durationOrOptions, onComplete } : durationOrOptions;
    if (this.profile.level === "minimal") {
      options.onComplete?.();
      return false;
    }

    const camera = options.camera ?? this.scene.cameras?.main;
    const fade = direction === "in" ? camera?.fadeIn : camera?.fadeOut;
    if (!camera || !fade) {
      options.onComplete?.();
      return false;
    }

    const duration = Math.round(scaleDuration(options.duration ?? 240, this.profile, "fade"));
    const color = splitColor(options.color ?? 0x07131e);
    const red = options.red ?? color.red;
    const green = options.green ?? color.green;
    const blue = options.blue ?? color.blue;
    const callback = camera.once ? undefined : options.onComplete;

    if (options.onComplete && camera.once) {
      camera.once(direction === "in" ? FADE_IN_COMPLETE_EVENT : FADE_OUT_COMPLETE_EVENT, options.onComplete);
    }
    fade.call(camera, duration, red, green, blue, options.force, callback);
    if (duration <= 0 && callback) {
      options.onComplete?.();
    }
    return true;
  }

  handleFeedback(event: FeedbackEvent): FeedbackResult {
    switch (event.kind) {
      case "jump":
        this.squashTarget(event.target, 0.9, 1.16, 90);
        return this.burst(event.x, event.y, "particle-dust", { count: 7, distance: 28 });
      case "land":
        this.squashTarget(event.target, 1.18, 0.78, 120);
        return this.burst(event.x, event.y, "particle-dust", { count: 9, distance: 34 });
      case "dash":
        this.squashTarget(event.target, 1.24, 0.82, 95);
        if (event.target?.texture?.key) {
          this.trail(event.target, event.target.texture.key, { count: 5, tint: 0x8dde73 });
        }
        return this.burst(event.x, event.y, "particle-leaf", { count: 10, distance: 40 });
      case "hurt":
        this.pulseTarget(event.target, 1.12, 120);
        this.cameraImpulse(0.0032, 110);
        return this.burst(event.x, event.y, "particle-spark", { count: 10, tint: 0xff6b7a });
      case "respawn":
        this.pulseTarget(event.target, 1.08, 160);
        return this.burst(event.x, event.y, "particle-dust", { count: 8, tint: 0x83f7ff });
      case "pickup":
        this.scorePopup(event.x, event.y, event.score ?? 100);
        return this.burst(event.x, event.y, "particle-spark", { count: 8, tint: 0xfde68a });
      case "powerup":
        this.powerAura(event.target, event.powerupKind);
        return this.burst(event.x, event.y, "particle-spark", { count: 14, tint: 0x67e8f9 });
      case "enemyHit":
        this.pulseTarget(event.target, 1.12, 95);
        return this.burst(event.x, event.y, "particle-spark", { count: 8, tint: 0xfef08a });
      case "enemyDefeat":
        this.hitStop(55);
        return this.burst(event.x, event.y, "particle-leaf", { count: 13, distance: 46 });
      case "bossAttack":
        return this.warningRing(event.x, event.y, 0xf97316, event.attack === "rootStomp" ? 86 : 58);
      case "bossPhase":
        this.hitStop(90);
        this.cameraImpulse(0.004, 150);
        return this.warningRing(event.x, event.y, 0xfacc15, 124);
      case "checkpoint":
        this.scorePopup(event.x, event.y - 20, "Checkpoint");
        return this.warningRing(event.x, event.y, 0x38bdf8, 58);
      case "goal":
        this.hitStop(80);
        this.scorePopup(event.x, event.y - 24, "Goal");
        return this.warningRing(event.x, event.y, 0x22c55e, 96);
      case "sceneTransition":
        return this.sceneFade(event.direction);
      case "victory":
        this.pulseTarget(event.target, 1.2, 180);
        return this.warningRing(event.x, event.y, 0xfacc15, 80);
      default:
        return undefined;
    }
  }

  destroy(): void {
    for (const timer of this.hitStopTimers) {
      globalThis.clearTimeout(timer);
    }
    this.hitStopTimers.clear();
    this.hitStopDepth = 0;
    this.restoreHitStop();
  }

  private releaseHitStop(timer: ReturnType<typeof globalThis.setTimeout>): void {
    this.hitStopTimers.delete(timer);
    this.hitStopDepth = Math.max(0, this.hitStopDepth - 1);
    if (this.hitStopDepth === 0) {
      this.restoreHitStop();
    }
  }

  private restoreHitStop(): void {
    if (!this.hitStopSnapshot) {
      return;
    }
    if (this.scene.tweens && this.hitStopSnapshot.tweenTimeScale !== undefined) {
      this.scene.tweens.timeScale = this.hitStopSnapshot.tweenTimeScale;
    }
    if (this.scene.physics?.world && this.hitStopSnapshot.physicsTimeScale !== undefined) {
      this.scene.physics.world.timeScale = this.hitStopSnapshot.physicsTimeScale;
    }
    this.hitStopSnapshot = undefined;
  }

  private canAnimateTarget(target: MotionTarget | undefined, skipInactive = false): target is MotionTarget {
    if (!target || target.destroyed || target.visible === false) {
      return false;
    }
    return !(skipInactive && target.active === false);
  }

  private resolveMinimalTween(config: MotionTweenConfig, behavior: MinimalTweenBehavior): void {
    if (behavior === "skip") {
      return;
    }
    if (behavior === "instant") {
      applyTerminalTweenValues(config, targetsFrom(config.targets));
    }
    config.onComplete?.();
  }

  private squashTarget(target: MotionTarget | undefined, scaleX: number, scaleY: number, duration: number): void {
    if (target) {
      this.squash(target, { scaleX, scaleY, duration });
    }
  }

  private pulseTarget(target: MotionTarget | undefined, scale: number, duration: number): void {
    if (target) {
      this.pulse(target, { scale, duration });
    }
  }

  private scorePopup(x: number, y: number, label: string | number): MotionTarget | undefined {
    if (this.profile.level === "minimal" || !this.scene.add?.text) {
      return undefined;
    }
    const text = typeof label === "number" ? `+${label}` : label;
    const popup = this.scene.add.text(x, y - 20, text, {
      fontFamily: "system-ui",
      fontSize: "16px",
      fontStyle: "700",
      color: "#fde68a",
      stroke: "#07131e",
      strokeThickness: 4,
    });
    popup.setOrigin?.(0.5);
    setDepth(popup, 80);
    this.safeTween(
      {
        targets: popup,
        y: y - 54,
        alpha: 0,
        scale: 1.18,
        duration: 520,
        ease: "Quad.easeOut",
        onComplete: () => popup.destroy?.(),
      },
      { kind: "particle", minimalBehavior: "complete" },
    );
    return popup;
  }

  private powerAura(target: MotionTarget | undefined, kind: string | undefined): MotionTarget | undefined {
    if (!target || this.profile.level === "minimal" || !this.scene.add?.circle) {
      return undefined;
    }
    if (typeof target.x !== "number" || typeof target.y !== "number") {
      return undefined;
    }
    const color = kind === "starburst" ? 0xfacc15 : kind === "gliderLeaf" ? 0x22c55e : kind === "springBoots" ? 0x38bdf8 : 0x83f7ff;
    const ring = this.scene.add.circle(target.x, target.y - 17, 20, color, 0.24);
    setDepth(ring, (target.depth ?? 0) - 1);
    this.safeTween(
      {
        targets: ring,
        scale: 2.2,
        alpha: 0,
        duration: 620,
        ease: "Quad.easeOut",
        onUpdate: () => ring.setPosition?.(target.x ?? 0, (target.y ?? 0) - 17),
        onComplete: () => ring.destroy?.(),
      },
      { kind: "particle", minimalBehavior: "complete" },
    );
    return ring;
  }

  private warningRing(x: number, y: number, color: number, radius: number): MotionTarget | undefined {
    if (this.profile.level === "minimal" || !this.scene.add?.circle) {
      return undefined;
    }
    const ring = this.scene.add.circle(x, y - 18, radius * 0.35, color, 0.18);
    setDepth(ring, 49);
    ring.setStrokeStyle?.(3, color, 0.9);
    this.safeTween(
      {
        targets: ring,
        scale: 1.9,
        alpha: 0,
        duration: 440,
        ease: "Quad.easeOut",
        onComplete: () => ring.destroy?.(),
      },
      { kind: "particle", minimalBehavior: "complete" },
    );
    return ring;
  }

  private flashDot(x: number, y: number, color: number): MotionTarget | undefined {
    if (!this.scene.add?.circle) {
      return undefined;
    }
    const dot = this.scene.add.circle(x, y, 4, color, 0.8);
    setDepth(dot, 70);
    if (this.scene.time?.delayedCall) {
      this.scene.time.delayedCall(80, () => dot.destroy?.());
    }
    return dot;
  }
}

function targetsFrom(targets: MotionTweenConfig["targets"]): MotionTarget[] {
  return Array.isArray(targets) ? [...(targets as readonly MotionTarget[])] : [targets as MotionTarget];
}

function scaleSnapshot(target: MotionTarget): ScaleSnapshot {
  const snapshot: ScaleSnapshot = {
    scaleX: finiteNumber(target.scaleX, finiteNumber(target.scale, 1)),
    scaleY: finiteNumber(target.scaleY, finiteNumber(target.scale, 1)),
  };
  if (typeof target.scale === "number") {
    snapshot.scale = target.scale;
  }
  return snapshot;
}

function restoreScale(target: MotionTarget, snapshot: ScaleSnapshot): void {
  setTargetScale(target, snapshot.scaleX, snapshot.scaleY);
  if (snapshot.scale !== undefined) {
    target.scale = snapshot.scale;
  }
}

function uniformScale(target: MotionTarget): number {
  const scaleX = finiteNumber(target.scaleX, finiteNumber(target.scale, 1));
  const scaleY = finiteNumber(target.scaleY, finiteNumber(target.scale, 1));
  return (scaleX + scaleY) / 2;
}

function setTargetScale(target: MotionTarget, scaleX: number, scaleY: number): void {
  if (target.setScale) {
    target.setScale(scaleX, scaleY);
  }
  target.scaleX = scaleX;
  target.scaleY = scaleY;
  if (scaleX === scaleY) {
    target.scale = scaleX;
  }
}

function setTargetAlpha(target: MotionTarget, alpha: number): void {
  const clamped = clamp(alpha, 0, 1);
  if (target.setAlpha) {
    target.setAlpha(clamped);
  }
  target.alpha = clamped;
}

function setDepth(target: MotionTarget, depth: number): void {
  if (target.setDepth) {
    target.setDepth(depth);
  }
  target.depth = depth;
}

function applyTerminalTweenValues(config: MotionTweenConfig, targets: MotionTarget[]): void {
  for (const [key, value] of Object.entries(config)) {
    if (RESERVED_TWEEN_KEYS.has(key) || typeof value !== "number") {
      continue;
    }
    for (const target of targets) {
      setTweenValue(target, key, value);
    }
  }
}

function setTweenValue(target: MotionTarget, key: string, value: number): void {
  switch (key) {
    case "alpha":
      setTargetAlpha(target, value);
      break;
    case "scale":
      setTargetScale(target, value, value);
      break;
    case "scaleX":
      setTargetScale(target, value, finiteNumber(target.scaleY, finiteNumber(target.scale, 1)));
      break;
    case "scaleY":
      setTargetScale(target, finiteNumber(target.scaleX, finiteNumber(target.scale, 1)), value);
      break;
    default:
      (target as Record<string, unknown>)[key] = value;
      break;
  }
}

function scaleDuration(duration: number, profile: MotionProfile, kind: MotionTweenKind): number {
  const base = Math.max(0, finiteNumber(duration, 0)) * profile.durationScale;
  if (profile.level === "minimal") {
    return kind === "fade" ? 0 : base;
  }
  if (profile.level === "reduced") {
    switch (kind) {
      case "camera":
      case "time":
        return base * 0.45;
      case "particle":
        return base * 0.72;
      case "fade":
        return base * 0.7;
      case "transform":
        return base * 0.8;
      case "utility":
      default:
        return base;
    }
  }
  return base;
}

function scaleDistance(distance: number, profile: MotionProfile): number {
  const base = Math.max(0, finiteNumber(distance, 0));
  if (profile.level === "reduced") {
    return base * profile.particleScale;
  }
  if (profile.level === "minimal") {
    return 0;
  }
  return base;
}

function scaledCount(count: number, profile: MotionProfile): number {
  const base = Math.max(0, Math.floor(finiteNumber(count, 0)));
  if (profile.level === "minimal") {
    return 0;
  }
  if (profile.level === "reduced") {
    return Math.min(base, Math.max(1, Math.ceil(base * profile.particleScale)));
  }
  return base;
}

function splitColor(color: number): { red: number; green: number; blue: number } {
  const normalized = Math.max(0, Math.floor(finiteNumber(color, 0))) & 0xffffff;
  return {
    red: (normalized >> 16) & 0xff,
    green: (normalized >> 8) & 0xff,
    blue: normalized & 0xff,
  };
}

function randomBetween(random: () => number, min: number, max: number): number {
  return min + (max - min) * clamp(random(), 0, 1);
}

function finiteNumber(value: unknown, fallback: number): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, finiteNumber(value, min)));
}
