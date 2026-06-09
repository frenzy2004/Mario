import Phaser from "phaser";

export class CreditsScene extends Phaser.Scene {
  constructor() {
    super("CreditsScene");
  }

  create(): void {
    this.add.rectangle(480, 270, 960, 540, 0x07131e);
    this.add
      .text(480, 120, "Credits", {
        fontFamily: "system-ui",
        fontSize: "42px",
        color: "#f8fafc",
      })
      .setOrigin(0.5);
    this.add
      .text(
        480,
        270,
        [
          "Clockwork Canopy",
          "Original code, procedural art, generated level content, and synthesized sound.",
          "Built with Vite, TypeScript, and Phaser 3.",
          "",
          "Esc: Back",
        ].join("\n"),
        {
          fontFamily: "system-ui",
          fontSize: "19px",
          color: "#bae6fd",
          align: "center",
          lineSpacing: 10,
        },
      )
      .setOrigin(0.5);
    this.input.keyboard?.once("keydown-ESC", () => this.scene.start("MenuScene"));
  }
}
