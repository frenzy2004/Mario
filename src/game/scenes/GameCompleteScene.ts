import Phaser from "phaser";

export class GameCompleteScene extends Phaser.Scene {
  constructor() {
    super("GameCompleteScene");
  }

  create(data: { score?: number }): void {
    this.add.rectangle(480, 270, 960, 540, 0x07131e);
    this.add
      .text(480, 145, "Canopy Restored", {
        fontFamily: "system-ui",
        fontSize: "48px",
        color: "#f8fafc",
      })
      .setOrigin(0.5);
    this.add
      .text(480, 235, `Final score: ${data.score ?? 0}`, {
        fontFamily: "system-ui",
        fontSize: "24px",
        color: "#fde68a",
      })
      .setOrigin(0.5);
    this.add
      .text(480, 330, "Enter: Main Menu", {
        fontFamily: "system-ui",
        fontSize: "18px",
        color: "#bae6fd",
      })
      .setOrigin(0.5);
    this.input.keyboard?.once("keydown-ENTER", () => this.scene.start("MenuScene"));
  }
}
