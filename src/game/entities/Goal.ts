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

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setOrigin(0.5, 1);
    this.setDepth(16);
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
  }

  get arcadeBody(): Phaser.Physics.Arcade.Body {
    return this.body as Phaser.Physics.Arcade.Body;
  }

  lock(): void {
    this.locked = true;
    this.setTint(0x64748b);
  }

  unlock(): void {
    this.locked = false;
    this.clearTint();
    this.scene.events.emit("goal:unlocked", this);
  }

  activate(progress: GoalProgress = {}): GoalActivation {
    if (this.locked) {
      return { id: this.goalId, kind: this.kind, completed: false, reason: "locked" };
    }

    if (!canUnlockGoal(this.requirements, progress)) {
      return { id: this.goalId, kind: this.kind, completed: false, reason: "requirements" };
    }

    this.completed = true;
    const activation = {
      id: this.goalId,
      kind: this.kind,
      completed: true,
      nextLevelId: this.nextLevelId,
    };
    this.scene.events.emit("goal:completed", activation, this);
    return activation;
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
