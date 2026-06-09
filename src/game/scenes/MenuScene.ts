import Phaser from "phaser";
import { ALL_LEVELS } from "../levels";
import { SaveSystem } from "../systems/SaveSystem";

export class MenuScene extends Phaser.Scene {
  private selectedLevel = 0;
  private saveSystem = new SaveSystem();

  constructor() {
    super("MenuScene");
  }

  create(): void {
    const save = this.saveSystem.loadSave();
    this.selectedLevel = Math.min(save.unlockedLevel, ALL_LEVELS.length - 1);
    this.cameras.main.setBackgroundColor("#07131e");
    this.add.rectangle(480, 270, 960, 540, 0x07131e);
    for (let i = 0; i < 20; i += 1) {
      this.add
        .ellipse(80 + i * 48, 80 + Math.sin(i) * 26, 34, 12, i % 2 ? 0x2dd4bf : 0xfbbf24, 0.18)
        .setAngle(i * 17);
    }
    this.add
      .text(480, 112, "Clockwork Canopy", {
        fontFamily: "system-ui",
        fontSize: "54px",
        fontStyle: "700",
        color: "#f8fafc",
      })
      .setOrigin(0.5);
    this.add
      .text(480, 174, "Original precision platform adventure", {
        fontFamily: "system-ui",
        fontSize: "20px",
        color: "#a7f3d0",
      })
      .setOrigin(0.5);
    this.add
      .text(480, 260, `Continue: ${ALL_LEVELS[this.selectedLevel]!.title}`, {
        fontFamily: "system-ui",
        fontSize: "25px",
        color: "#fde68a",
      })
      .setOrigin(0.5);
    this.add
      .text(480, 340, "Space / Enter: Play     S: Settings     C: Credits", {
        fontFamily: "system-ui",
        fontSize: "17px",
        color: "#e0f2fe",
      })
      .setOrigin(0.5);
    this.input.keyboard?.once("keydown-SPACE", () => this.startGame());
    this.input.keyboard?.once("keydown-ENTER", () => this.startGame());
    this.input.keyboard?.once("keydown-S", () => this.scene.start("SettingsScene"));
    this.input.keyboard?.once("keydown-C", () => this.scene.start("CreditsScene"));
    this.input.once("pointerdown", () => this.startGame());
  }

  private startGame(): void {
    this.scene.start("PlayScene", { levelIndex: this.selectedLevel });
  }
}
