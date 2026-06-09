import Phaser from "phaser";
import type { GoalDefinition } from "../levels/schema";

export type GoalKind = "checkpoint" | "finish" | "clockCore";

export interface GoalRequirements {
  bossDefeated?: boolean;
  collectibleIds?: string[];
  score?: number;
}

export interface GoalProgress {
  bossDefeated?: boolean;
  collectedIds?: string[];
  score?: number;
}

export interface GoalOptions {
  id?: string;
  kind?: GoalKind;
  nextLevelId?: string;
  locked?: boolean;
  requirements?: GoalRequirements;
  texture?: string;
}

export interface GoalActivation {
  id: string;
  kind: GoalKind;
  completed: boolean;
  nextLevelId?: string;
  reason?: "locked" | "requirements";
}

const GOAL_TINTS: Record<GoalKind, number> = {
  checkpoint: 0x38bdf8,
  finish: 0x22c55e,
  clockCore: 0xfacc15,
};

interface NormalizedGoalDefinition extends GoalDefinition {
  kind: GoalKind;
  locked: boolean;
  requirements: GoalRequirements;
  texture?: string;
}

export function canUnlockGoal(requirements: GoalRequirements = {}, progress: GoalProgress = {}): boolean {
  if (requirements.bossDefeated && !progress.bossDefeated) {
    return false;
  }

  if ((progress.score ?? 0) < (requirements.score ?? 0)) {
    return false;
  }

  const collectedIds = new Set(progress.collectedIds ?? []);
  return requirements.collectibleIds?.every((id) => collectedIds.has(id)) ?? true;
}

export function createCheckpointActivation(id: string, x: number, y: number, label = id) {
  return {
    id,
    label,
    x,
    y,
    activatedAt: Date.now(),
  };
}

function normalizeDefinition(
  xOrDefinition: number | GoalDefinition,
  y?: number,
  options: GoalOptions = {},
): NormalizedGoalDefinition {
  if (typeof xOrDefinition !== "number") {
    return {
      ...xOrDefinition,
      kind: options.kind ?? "finish",
      locked: options.locked ?? false,
      requirements: options.requirements ?? {},
      texture: options.texture,
    };
  }

  const x = xOrDefinition;
  const resolvedY = y ?? 0;
  return {
    id: options.id ?? `goal-${Math.round(x)}-${Math.round(resolvedY)}`,
    x,
    y: resolvedY,
    nextLevelId: options.nextLevelId,
    kind: options.kind ?? "finish",
    locked: options.locked ?? false,
    requirements: options.requirements ?? {},
    texture: options.texture,
  };
}

export class Goal extends Phaser.Physics.Arcade.Sprite {
  readonly goalId: string;
  readonly kind: GoalKind;
  readonly nextLevelId?: string;
  readonly requirements: GoalRequirements;
  locked = false;
  completed = false;

  private readonly baseY: number;

  constructor(scene: Phaser.Scene, definition: GoalDefinition);
  constructor(scene: Phaser.Scene, x: number, y: number, options?: GoalOptions);
  constructor(scene: Phaser.Scene, xOrDefinition: number | GoalDefinition, y?: number, options: GoalOptions = {}) {
    const definition = normalizeDefinition(xOrDefinition, y, options);
    super(scene, definition.x, definition.y, definition.texture ?? goalTexture(definition.kind));

    this.goalId = definition.id;
    this.kind = definition.kind;
    this.nextLevelId = definition.nextLevelId;
    this.requirements = definition.requirements;
    this.locked = definition.locked;
    this.baseY = definition.y;

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setOrigin(0.5, 1);
    this.setDepth(16);
    this.setAlpha(this.locked ? 0.7 : 1);
    if (this.locked) {
      this.setTint(0x64748b);
    }
    this.setData("goalId", definition.id);
    this.setData("goalKind", definition.kind);
    this.arcadeBody.setAllowGravity(false);
    this.arcadeBody.setSize(24, 42);

    scene.tweens.add({
      targets: this,
      y: definition.y - 4,
      duration: 1100,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });
    scene.events.once("audio:goal", () => this.playCompletionEffect());
  }

  get arcadeBody(): Phaser.Physics.Arcade.Body {
    return this.body as Phaser.Physics.Arcade.Body;
  }

  lock(): void {
    this.locked = true;
    this.setTint(0x64748b);
    this.setAlpha(0.7);
  }

  unlock(): void {
    this.locked = false;
    this.clearTint();
    this.setAlpha(1);
    this.playUnlockEffect();
    this.scene.events.emit("goal:unlocked", this);
  }

  activate(progress: GoalProgress = {}): GoalActivation {
    if (this.locked) {
      this.playDeniedEffect();
      return { id: this.goalId, kind: this.kind, completed: false, reason: "locked" };
    }

    if (!canUnlockGoal(this.requirements, progress)) {
      this.playDeniedEffect();
      return { id: this.goalId, kind: this.kind, completed: false, reason: "requirements" };
    }

    this.completed = true;
    const activation = {
      id: this.goalId,
      kind: this.kind,
      completed: true,
      nextLevelId: this.nextLevelId,
    };
    this.playCompletionEffect();
    this.scene.events.emit("goal:completed", activation, this);
    return activation;
  }

  private playDeniedEffect(): void {
    const startX = this.x;
    this.scene.tweens.killTweensOf(this);
    this.scene.tweens.add({
      targets: this,
      x: startX + 5,
      duration: 45,
      yoyo: true,
      repeat: 3,
      ease: "Sine.easeInOut",
      onComplete: () => {
        this.setX(startX);
        this.restartIdleMotion();
      },
    });
  }

  private playUnlockEffect(): void {
    const tint = GOAL_TINTS[this.kind];
    const ring = this.scene.add
      .ellipse(this.x, this.y - 24, 34, 34)
      .setStrokeStyle(2, tint, 0.85)
      .setDepth(78);

    this.scene.tweens.add({
      targets: this,
      scaleX: 1.16,
      scaleY: 1.16,
      duration: 170,
      yoyo: true,
      ease: "Cubic.easeOut",
    });
    this.scene.tweens.add({
      targets: ring,
      scale: 2.1,
      alpha: 0,
      duration: 520,
      ease: "Cubic.easeOut",
      onComplete: () => ring.destroy(),
    });
  }

  private playCompletionEffect(): void {
    if (!this.active) {
      return;
    }

    const tint = GOAL_TINTS[this.kind];
    this.scene.tweens.killTweensOf(this);
    this.setDepth(82);
    this.setTint(tint);
    this.scene.tweens.add({
      targets: this,
      y: this.baseY - 8,
      scaleX: 1.18,
      scaleY: 1.18,
      duration: 220,
      yoyo: true,
      repeat: 1,
      ease: "Cubic.easeOut",
      onComplete: () => this.restartIdleMotion(),
    });

    for (let i = 0; i < 3; i += 1) {
      const ring = this.scene.add
        .ellipse(this.x, this.y - 24, 28 + i * 10, 28 + i * 10)
        .setStrokeStyle(2, tint, 0.7 - i * 0.16)
        .setDepth(80);
      this.scene.tweens.add({
        targets: ring,
        scale: 2.4 + i * 0.35,
        alpha: 0,
        duration: 520 + i * 130,
        delay: i * 70,
        ease: "Cubic.easeOut",
        onComplete: () => ring.destroy(),
      });
    }
  }

  private restartIdleMotion(): void {
    if (!this.active || this.completed) {
      return;
    }

    this.scene.tweens.add({
      targets: this,
      y: this.baseY - 4,
      duration: 1100,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });
  }
}

function goalTexture(kind: GoalKind): string {
  switch (kind) {
    case "checkpoint":
      return "checkpoint";
    case "clockCore":
      return "goal-clock-core";
    case "finish":
    default:
      return "goal-beacon";
  }
}
