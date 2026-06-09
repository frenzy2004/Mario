import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  MotionSystem,
  resolveMotionProfile,
  type MotionCamera,
  type MotionScene,
  type MotionTarget,
  type MotionTweenConfig,
} from "../../src/game/systems/MotionSystem";

interface FakeScene extends MotionScene {
  camera: MotionCamera;
  createdCircles: MotionTarget[];
  createdImages: MotionTarget[];
  createdText: MotionTarget[];
  tweenConfigs: MotionTweenConfig[];
}

describe("resolveMotionProfile", () => {
  it("keeps full motion and shake enabled by default", () => {
    expect(resolveMotionProfile()).toEqual({
      level: "full",
      allowLargeMotion: true,
      allowShake: true,
      allowHitStop: true,
      durationScale: 1,
      particleScale: 1,
    });
  });

  it("respects full-motion screen shake opt out", () => {
    expect(resolveMotionProfile({ motionLevel: "full", screenShake: false })).toMatchObject({
      level: "full",
      allowLargeMotion: true,
      allowShake: false,
    });
  });

  it("maps legacy reduced-motion settings to reduced feedback", () => {
    expect(resolveMotionProfile({ reducedMotion: true, reduceShake: true })).toEqual({
      level: "reduced",
      allowLargeMotion: false,
      allowShake: false,
      allowHitStop: false,
      durationScale: 0.55,
      particleScale: 0.45,
    });
  });

  it("turns minimal motion into static feedback", () => {
    expect(resolveMotionProfile({ motionLevel: "minimal", screenShake: true })).toEqual({
      level: "minimal",
      allowLargeMotion: false,
      allowShake: false,
      allowHitStop: false,
      durationScale: 0,
      particleScale: 0,
    });
  });
});

describe("MotionSystem", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("creates reversible pulse tweens without losing the target's original scale", () => {
    const scene = createScene();
    const motion = new MotionSystem(scene);
    const target = createTarget({ scaleX: 2, scaleY: 1 });
    const onComplete = vi.fn();

    const tween = motion.pulse(target, { intensity: 0.2, duration: 100, onComplete });

    expect(tween).toEqual({});
    expect(scene.tweens?.killTweensOf).toHaveBeenCalledWith([target]);
    expect(scene.tweenConfigs).toHaveLength(1);
    expect(scene.tweenConfigs[0]?.scaleX).toBeCloseTo(2.4);
    expect(scene.tweenConfigs[0]?.scaleY).toBeCloseTo(1.2);
    expect(scene.tweenConfigs[0]?.duration).toBe(100);
    expect(scene.tweenConfigs[0]?.yoyo).toBe(true);

    target.scaleX = 8;
    target.scaleY = 8;
    scene.tweenConfigs[0]?.onComplete?.();

    expect(target.scaleX).toBe(2);
    expect(target.scaleY).toBe(1);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it("reduces burst particle counts and tween duration in reduced mode", () => {
    const scene = createScene();
    const motion = new MotionSystem(scene, {
      settings: { motionLevel: "reduced" },
      random: () => 0.5,
    });

    const particles = motion.burst(10, 20, "particle-spark", {
      count: 10,
      minDistance: 10,
      maxDistance: 10,
      minDuration: 100,
      maxDuration: 100,
    });

    expect(particles).toHaveLength(5);
    expect(scene.createdImages).toHaveLength(5);
    expect(scene.tweenConfigs).toHaveLength(5);
    expect(scene.tweenConfigs[0]?.duration).toBeCloseTo(39.6);
  });

  it("keeps minimal motion static while still completing safe tweens", () => {
    const scene = createScene();
    const motion = new MotionSystem(scene, { settings: { motionLevel: "minimal" } });
    const target = createTarget({ alpha: 1, scaleX: 1, scaleY: 1 });
    const onComplete = vi.fn();

    const tween = motion.safeTween({
      targets: target,
      alpha: 0,
      duration: 200,
      onComplete,
    });

    expect(tween).toBeUndefined();
    expect(target.alpha).toBe(0);
    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(motion.pulse(target)).toBeUndefined();
    expect(motion.cameraImpulse()).toBe(false);
    expect(motion.hitStop()).toBe(false);

    const staticFeedback = motion.burst(0, 0, "particle-dust");
    expect(staticFeedback).toHaveLength(1);
    expect(scene.createdCircles).toHaveLength(1);
    expect(scene.tweenConfigs).toHaveLength(0);
  });

  it("restores overlapping hit stops to the previous scene time scales", () => {
    const scene = createScene();
    const motion = new MotionSystem(scene);
    if (scene.tweens) {
      scene.tweens.timeScale = 1.25;
    }
    if (scene.physics?.world) {
      scene.physics.world.timeScale = 0.8;
    }

    expect(motion.hitStop({ duration: 50, timeScale: 0.05 })).toBe(true);
    expect(motion.hitStop({ duration: 100, timeScale: 0.02 })).toBe(true);
    expect(scene.tweens?.timeScale).toBe(0.02);
    expect(scene.physics?.world?.timeScale).toBe(0.02);

    vi.advanceTimersByTime(50);
    expect(scene.tweens?.timeScale).toBe(0.02);
    expect(scene.physics?.world?.timeScale).toBe(0.02);

    vi.advanceTimersByTime(50);
    expect(scene.tweens?.timeScale).toBe(1.25);
    expect(scene.physics?.world?.timeScale).toBe(0.8);
  });

  it("dispatches scene fades through the camera with split RGB values", () => {
    const scene = createScene();
    const motion = new MotionSystem(scene);
    const onComplete = vi.fn();

    expect(motion.sceneFade("out", { duration: 120, color: 0x123456, onComplete })).toBe(true);

    expect(scene.camera.once).toHaveBeenCalledWith("camerafadeoutcomplete", onComplete);
    expect(scene.camera.fadeOut).toHaveBeenCalledWith(120, 18, 52, 86, undefined, undefined);
    expect(onComplete).not.toHaveBeenCalled();
  });

  it("routes typed gameplay feedback into motion primitives", () => {
    const scene = createScene();
    const motion = new MotionSystem(scene, { random: () => 0.5 });
    const target = createTarget({ texture: { key: "hero-idle-0" } });

    const result = motion.handleFeedback({ kind: "dash", target, x: 30, y: 40 });

    expect(Array.isArray(result)).toBe(true);
    expect(scene.createdImages.length).toBeGreaterThan(0);
    expect(scene.tweenConfigs.length).toBeGreaterThan(0);
  });

  it("creates enemy tell rings from typed cue payloads", () => {
    const scene = createScene();
    const motion = new MotionSystem(scene, { random: () => 0.5 });
    const target = createTarget();

    const result = motion.handleFeedback({
      kind: "enemyTell",
      enemyKind: "turret",
      tell: "turret-lock",
      durationMs: 340,
      intensity: 1.1,
      target,
      x: 80,
      y: 120,
    });

    expect(Array.isArray(result)).toBe(true);
    expect(scene.createdCircles).toHaveLength(1);
    expect(scene.createdImages).toHaveLength(6);
    expect(scene.tweenConfigs.length).toBeGreaterThan(0);
  });

  it("keeps minimal enemy tells static", () => {
    const scene = createScene();
    const motion = new MotionSystem(scene, { settings: { motionLevel: "minimal" } });

    const result = motion.handleFeedback({
      kind: "enemyTell",
      enemyKind: "charger",
      tell: "charge-windup",
      durationMs: 260,
      intensity: 1.2,
      x: 80,
      y: 120,
    });

    expect(Array.isArray(result)).toBe(true);
    expect(scene.createdCircles).toHaveLength(1);
    expect(scene.createdImages).toHaveLength(0);
    expect(scene.tweenConfigs).toHaveLength(0);
  });

  it("gives boss defeat a dedicated burst, ring, hit stop, and camera impulse", () => {
    const scene = createScene();
    const motion = new MotionSystem(scene, { random: () => 0.5 });
    const target = createTarget();

    const result = motion.handleFeedback({ kind: "bossDefeat", target, x: 120, y: 220 });

    expect(Array.isArray(result)).toBe(true);
    expect(scene.createdCircles).toHaveLength(1);
    expect(scene.createdImages.length).toBeGreaterThanOrEqual(30);
    expect(scene.camera.shake).toHaveBeenCalled();
    expect(scene.tweens?.timeScale).toBe(0.08);
  });
});

function createScene(): FakeScene {
  const createdCircles: MotionTarget[] = [];
  const createdImages: MotionTarget[] = [];
  const createdText: MotionTarget[] = [];
  const tweenConfigs: MotionTweenConfig[] = [];
  const camera: MotionCamera = {
    shake: vi.fn(),
    fadeIn: vi.fn(),
    fadeOut: vi.fn(),
    once: vi.fn(),
  };
  return {
    camera,
    createdCircles,
    createdImages,
    createdText,
    tweenConfigs,
    add: {
      image: vi.fn((x: number, y: number, texture: string, frame?: string | number) => {
        const target = createTarget({
          x,
          y,
          texture: { key: texture },
          frame: { name: frame ?? 0 },
        });
        createdImages.push(target);
        return target;
      }),
      circle: vi.fn((x: number, y: number) => {
        const target = createTarget({ x, y });
        createdCircles.push(target);
        return target;
      }),
      text: vi.fn((x: number, y: number) => {
        const target = createTarget({ x, y });
        createdText.push(target);
        return target;
      }),
    },
    cameras: {
      main: camera,
    },
    events: {
      once: vi.fn(),
    },
    physics: {
      world: {
        timeScale: 1,
      },
    },
    sys: {
      isActive: () => true,
    },
    time: {
      delayedCall: vi.fn((delay: number, callback: () => void) => {
        globalThis.setTimeout(callback, delay);
        return {};
      }),
    },
    tweens: {
      timeScale: 1,
      add: vi.fn((config: MotionTweenConfig) => {
        tweenConfigs.push(config);
        return {};
      }),
      killTweensOf: vi.fn(),
    },
  };
}

function createTarget(values: Partial<MotionTarget> = {}): MotionTarget {
  const target: MotionTarget = {
    x: 0,
    y: 0,
    alpha: 1,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    visible: true,
    active: true,
    ...values,
  };
  target.setAlpha = (alpha: number) => {
    target.alpha = alpha;
    return target;
  };
  target.setBlendMode = () => target;
  target.setDepth = (depth: number) => {
    target.depth = depth;
    return target;
  };
  target.setFlipX = (flipX: boolean) => {
    target.flipX = flipX;
    return target;
  };
  target.setOrigin = () => target;
  target.setPosition = (x: number, y: number) => {
    target.x = x;
    target.y = y;
    return target;
  };
  target.setRotation = (rotation: number) => {
    target.rotation = rotation;
    return target;
  };
  target.setScale = (scaleX: number, scaleY = scaleX) => {
    target.scaleX = scaleX;
    target.scaleY = scaleY;
    if (scaleX === scaleY) {
      target.scale = scaleX;
    }
    return target;
  };
  target.setScrollFactor = () => target;
  target.setStrokeStyle = () => target;
  target.setTint = () => target;
  target.destroy = vi.fn();
  return target;
}
