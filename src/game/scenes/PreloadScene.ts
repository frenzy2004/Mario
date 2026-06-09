import Phaser from "phaser";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  create(): void {
    const { width, height } = this.scale;
    this.add
      .text(width / 2, height / 2 - 24, "Clockwork Canopy", {
        fontFamily: "system-ui",
        fontSize: "34px",
        color: "#f8fafc",
      })
      .setOrigin(0.5);
    this.add
      .text(width / 2, height / 2 + 24, "Winding the garden...", {
        fontFamily: "system-ui",
        fontSize: "16px",
        color: "#bae6fd",
      })
      .setOrigin(0.5);
    this.time.delayedCall(250, () => this.scene.start("MenuScene"));
  }
}
