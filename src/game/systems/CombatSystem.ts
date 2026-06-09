import Phaser from "phaser";
import { Boss } from "../entities/Boss";
import { Enemy } from "../entities/Enemy";
import { Player } from "../entities/Player";
import { isStomp } from "./CollisionSystem";
import { PlayerController } from "./PlayerController";

export class CombatSystem {
  constructor(
    private readonly scene: Phaser.Scene,
    private readonly player: Player,
    private readonly controller: PlayerController,
  ) {}

  handleEnemyOverlap(enemyObject: Phaser.GameObjects.GameObject): "defeated" | "hurt" | "none" {
    const enemy = enemyObject as Enemy;
    if (!enemy.active) {
      return "none";
    }
    if (enemy.stompable && isStomp(this.player, enemy)) {
      enemy.defeat(this.player);
      this.controller.bounce();
      this.scene.events.emit("audio:enemy");
      this.scene.events.emit("fx:spark", enemy.x, enemy.y);
      return "defeated";
    }
    if (this.player.damage(this.scene.time.now)) {
      return "hurt";
    }
    this.scene.events.emit("audio:hurt");
    return "hurt";
  }

  handleBossOverlap(boss: Boss): "defeated" | "hit" | "hurt" | "none" {
    if (!boss.active) {
      return "none";
    }
    if (isStomp(this.player, boss)) {
      const defeated = boss.hit({ source: this.player, sourceX: this.player.x, knockback: 180 });
      this.controller.bounce(-520);
      this.scene.events.emit("audio:boss");
      this.scene.events.emit("fx:spark", boss.x, boss.y - 30);
      return defeated ? "defeated" : "hit";
    }
    if (this.player.damage(this.scene.time.now)) {
      return "hurt";
    }
    this.scene.events.emit("audio:hurt");
    return "hurt";
  }
}
