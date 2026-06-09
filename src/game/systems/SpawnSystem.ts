import Phaser from "phaser";
import { Boss } from "../entities/Boss";
import { Collectible } from "../entities/Collectible";
import { Enemy } from "../entities/Enemy";
import { Goal } from "../entities/Goal";
import { Hazard } from "../entities/Hazard";
import { MovingPlatform } from "../entities/MovingPlatform";
import { Powerup } from "../entities/Powerup";
import type {
  CollectibleDefinition,
  EnemyDefinition,
  GoalDefinition,
  HazardDefinition,
  LevelDefinition,
  MovingPlatformDefinition,
  PowerupDefinition,
} from "../levels/schema";

export interface SpawnedWorld {
  enemies: Phaser.GameObjects.Group;
  collectibles: Phaser.GameObjects.Group;
  powerups: Phaser.GameObjects.Group;
  movingPlatforms: Phaser.GameObjects.Group;
  hazards: Phaser.GameObjects.Group;
  checkpoints: Phaser.Physics.Arcade.StaticGroup;
  goal: Goal;
  boss?: Boss;
}

export type SpawnEntityType = "enemy" | "collectible" | "powerup" | "movingPlatform" | "hazard" | "goal" | "boss";

export interface SpawnDefinition {
  type: SpawnEntityType;
  x: number;
  y: number;
  id?: string;
}

export function normalizeSpawnDefinition(definition: SpawnDefinition): SpawnDefinition {
  return {
    ...definition,
    x: Number.isFinite(definition.x) ? definition.x : 0,
    y: Number.isFinite(definition.y) ? definition.y : 0,
  };
}

export function sortSpawnDefinitions(definitions: SpawnDefinition[]): SpawnDefinition[] {
  return [...definitions].sort((a, b) => {
    if (a.y === b.y) {
      return a.x - b.x;
    }
    return a.y - b.y;
  });
}

export class SpawnSystem {
  constructor(private readonly scene: Phaser.Scene) {}

  spawn(level: LevelDefinition): SpawnedWorld {
    const enemies = this.scene.add.group();
    const collectibles = this.scene.add.group();
    const powerups = this.scene.add.group();
    const movingPlatforms = this.scene.add.group();
    const hazards = this.scene.add.group();
    const checkpoints = this.scene.physics.add.staticGroup();

    level.enemies.forEach((definition) => enemies.add(this.spawnEnemy(definition)));
    level.collectibles.forEach((definition) => collectibles.add(this.spawnCollectible(definition)));
    level.powerups.forEach((definition) => powerups.add(this.spawnPowerup(definition)));
    level.movingPlatforms.forEach((definition) => movingPlatforms.add(this.spawnMovingPlatform(definition)));
    level.hazards.forEach((definition) => hazards.add(this.spawnHazard(definition)));
    level.checkpoints.forEach((definition) => {
      const checkpoint = checkpoints.create(definition.x, definition.y, "checkpoint");
      checkpoint.setOrigin(0.5, 1);
      checkpoint.setData("checkpoint", definition);
      checkpoint.setData("active", false);
    });
    checkpoints.refresh();

    const goal = this.spawnGoal(level.goal);
    const boss = level.boss
      ? new Boss(
          this.scene,
          level.boss.x,
          level.boss.y,
          level.boss.health,
          level.boss.arenaLeft,
          level.boss.arenaRight,
        )
      : undefined;

    if (boss) {
      this.scene.events.emit("spawn:boss", boss, level.boss);
      boss.emitMotionCue("spawn", this.scene.time.now, { durationMs: 420, intensity: 1.2 });
      goal.lock();
      boss.once("destroy", () => goal.unlock());
    }

    return { enemies, collectibles, powerups, movingPlatforms, hazards, checkpoints, goal, boss };
  }

  spawnEnemy(definition: EnemyDefinition): Enemy {
    const enemy = new Enemy(this.scene, definition);
    this.scene.events.emit("spawn:enemy", enemy, definition);
    enemy.emitMotionCue("spawn", this.scene.time.now, { durationMs: 220, intensity: 0.8 });
    return enemy;
  }

  spawnCollectible(definition: CollectibleDefinition): Collectible {
    const collectible = new Collectible(this.scene, definition);
    this.scene.events.emit("spawn:collectible", collectible, definition);
    return collectible;
  }

  spawnPowerup(definition: PowerupDefinition): Powerup {
    const powerup = new Powerup(this.scene, definition);
    this.scene.events.emit("spawn:powerup", powerup, definition);
    return powerup;
  }

  spawnMovingPlatform(definition: MovingPlatformDefinition): MovingPlatform {
    const movingPlatform = new MovingPlatform(this.scene, definition);
    this.scene.events.emit("spawn:moving-platform", movingPlatform, definition);
    return movingPlatform;
  }

  spawnHazard(definition: HazardDefinition): Hazard {
    const hazard = new Hazard(this.scene, definition);
    this.scene.events.emit("spawn:hazard", hazard, definition);
    return hazard;
  }

  spawnGoal(definition: GoalDefinition): Goal {
    const goal = new Goal(this.scene, definition);
    this.scene.events.emit("spawn:goal", goal, definition);
    return goal;
  }
}
