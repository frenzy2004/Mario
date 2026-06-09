import Phaser from "phaser";
import { WORLD_CONFIG } from "../config/world";
import type { DecorationDefinition, LevelDefinition } from "../levels/schema";

export interface BuiltTerrain {
  solids: Phaser.Physics.Arcade.StaticGroup;
  platforms: Phaser.Physics.Arcade.StaticGroup;
  hazards: Phaser.Physics.Arcade.StaticGroup;
  springs: Phaser.Physics.Arcade.StaticGroup;
  windTiles: Phaser.GameObjects.Rectangle[];
}

type DecorationShape = Phaser.GameObjects.GameObject & {
  angle: number;
  setDepth(depth: number): DecorationShape;
  setScrollFactor(x: number, y?: number): DecorationShape;
};

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

    this.createBackgroundStrata(width, height, level.palette.skyBottom);
    this.createDistantCanopy(width, height, level.palette.leaves);

    for (const decoration of level.decorations) {
      if (decoration.layer === "near") {
        continue;
      }
      const shape = this.createDecorationShape(decoration)
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

  private createBackgroundStrata(width: number, height: number, tint: number): void {
    for (let index = 0; index < 4; index += 1) {
      const y = height * (0.32 + index * 0.12);
      const band = this.scene.add
        .rectangle(width / 2, y, width * 1.2, 18 + index * 6, tint, 0.07 + index * 0.018)
        .setScrollFactor(0.12 + index * 0.04, 0.04)
        .setDepth(-19 + index);
      band.setAngle(index % 2 === 0 ? -1.2 : 1.2);
    }
  }

  private createDistantCanopy(width: number, height: number, accent: number): void {
    const baseline = height * 0.78;
    for (let index = 0; index < Math.max(6, Math.floor(width / 520)); index += 1) {
      const x = 90 + index * 430;
      const trunk = this.scene.add
        .rectangle(x, baseline + 70, 26, 170, 0x0f302d, 0.18)
        .setScrollFactor(0.18, 0.06)
        .setDepth(-17);
      trunk.setAngle(index % 2 === 0 ? -5 : 4);
      this.scene.add
        .ellipse(x - 36, baseline, 150, 42, accent, 0.12)
        .setScrollFactor(0.18, 0.06)
        .setDepth(-16)
        .setAngle(index % 2 === 0 ? -8 : 7);
      this.scene.add
        .ellipse(x + 62, baseline + 20, 120, 36, accent, 0.09)
        .setScrollFactor(0.2, 0.06)
        .setDepth(-16)
        .setAngle(index % 2 === 0 ? 6 : -6);
    }
  }

  private createDecorationShape(decoration: DecorationDefinition): DecorationShape {
    const scale = decoration.scale;
    if (decoration.motif === "gear") {
      const gear = this.scene.add.graphics({ x: decoration.x, y: decoration.y });
      const radius = 9 * scale;
      gear.lineStyle(Math.max(1, 2 * scale), decoration.tint, 0.36);
      gear.strokeCircle(0, 0, radius);
      for (let tooth = 0; tooth < 8; tooth += 1) {
        const angle = (Math.PI * 2 * tooth) / 8;
        gear.lineBetween(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          Math.cos(angle) * (radius + 5 * scale),
          Math.sin(angle) * (radius + 5 * scale),
        );
      }
      return gear as DecorationShape;
    }

    if (decoration.motif === "windmill") {
      const windmill = this.scene.add.graphics({ x: decoration.x, y: decoration.y });
      windmill.lineStyle(Math.max(1, 2 * scale), decoration.tint, 0.34);
      windmill.strokeCircle(0, 0, 5 * scale);
      for (let blade = 0; blade < 4; blade += 1) {
        const angle = (Math.PI * 2 * blade) / 4;
        windmill.lineBetween(0, 0, Math.cos(angle) * 20 * scale, Math.sin(angle) * 20 * scale);
      }
      return windmill as DecorationShape;
    }

    if (decoration.motif === "vine" || decoration.motif === "grass") {
      const vine = this.scene.add.graphics({ x: decoration.x, y: decoration.y });
      vine.lineStyle(Math.max(1, 2 * scale), decoration.tint, 0.32);
      vine.lineBetween(-16 * scale, 0, 16 * scale, -5 * scale);
      vine.fillStyle(decoration.tint, 0.3);
      vine.fillEllipse(-8 * scale, -4 * scale, 12 * scale, 6 * scale);
      vine.fillEllipse(10 * scale, -7 * scale, 13 * scale, 6 * scale);
      return vine as DecorationShape;
    }

    if (decoration.motif === "glassBerry") {
      return this.scene.add
        .ellipse(decoration.x, decoration.y, 16 * scale, 16 * scale, decoration.tint, 0.24)
        .setStrokeStyle(Math.max(1, 2 * scale), 0xf0fdfa, 0.18) as DecorationShape;
    }

    return this.scene.add
      .ellipse(decoration.x, decoration.y, 28 * scale, 13 * scale, decoration.tint, 0.24)
      .setAngle(-8 + scale * 3) as DecorationShape;
  }
}
