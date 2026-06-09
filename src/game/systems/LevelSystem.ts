import Phaser from "phaser";
import { WORLD_CONFIG } from "../config/world";
import type { LevelDefinition } from "../levels/schema";

export interface BuiltTerrain {
  solids: Phaser.Physics.Arcade.StaticGroup;
  platforms: Phaser.Physics.Arcade.StaticGroup;
  hazards: Phaser.Physics.Arcade.StaticGroup;
  springs: Phaser.Physics.Arcade.StaticGroup;
  windTiles: Phaser.GameObjects.Rectangle[];
}

export class LevelSystem {
  constructor(private readonly scene: Phaser.Scene) {}

  buildTerrain(level: LevelDefinition): BuiltTerrain {
    const solids = this.scene.physics.add.staticGroup();
    const platforms = this.scene.physics.add.staticGroup();
    const hazards = this.scene.physics.add.staticGroup();
    const springs = this.scene.physics.add.staticGroup();
    const windTiles: Phaser.GameObjects.Rectangle[] = [];
    const tileSize = WORLD_CONFIG.tileSize;

    level.layout.forEach((row, rowIndex) => {
      Array.from(row).forEach((tile, colIndex) => {
        const x = colIndex * tileSize + tileSize / 2;
        const y = rowIndex * tileSize + tileSize / 2;
        switch (tile) {
          case "#":
            solids.create(x, y, rowIndex < level.rows - 1 ? "tile-ground-edge" : "tile-ground");
            break;
          case "=":
            platforms.create(x, y, "tile-platform");
            break;
          case "^":
            hazards.create(x, y, "tile-hazard");
            break;
          case "S":
            springs.create(x, y, "tile-spring");
            break;
          case "W": {
            const rect = this.scene.add.rectangle(x, y, tileSize, tileSize, 0x77d8ff, 0.2);
            rect.setDepth(3);
            windTiles.push(rect);
            break;
          }
          default:
            break;
        }
      });
    });

    for (const group of [solids, platforms, hazards, springs]) {
      group.refresh();
    }
    return { solids, platforms, hazards, springs, windTiles };
  }

  createBackground(level: LevelDefinition): void {
    const width = level.columns * WORLD_CONFIG.tileSize;
    const height = level.rows * WORLD_CONFIG.tileSize;
    const sky = this.scene.add.graphics();
    sky.fillGradientStyle(
      level.palette.skyTop,
      level.palette.skyTop,
      level.palette.skyBottom,
      level.palette.skyBottom,
      1,
    );
    sky.fillRect(0, 0, width, height);
    sky.setScrollFactor(0.25, 0.05);
    sky.setDepth(-20);

    for (const decoration of level.decorations) {
      if (decoration.layer === "near") {
        continue;
      }
      const shape = this.scene.add
        .ellipse(
          decoration.x,
          decoration.y,
          24 * decoration.scale,
          14 * decoration.scale,
          decoration.tint,
          0.35,
        )
        .setScrollFactor(decoration.parallax)
        .setDepth(decoration.layer === "far" ? -18 : -12);
      if (decoration.motif === "gear" || decoration.motif === "windmill") {
        this.scene.tweens.add({
          targets: shape,
          angle: decoration.motif === "gear" ? 360 : -360,
          duration: 9000 + decoration.scale * 1200,
          repeat: -1,
        });
      }
    }
  }
}
