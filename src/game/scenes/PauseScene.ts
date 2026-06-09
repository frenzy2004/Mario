import Phaser from "phaser";

export class PauseScene extends Phaser.Scene {
  constructor() {
    super("PauseScene");
  }

  create(): void {
    this.add.rectangle(480, 270, 960, 540, 0x020617, 0.68);
    this.add
      .text(480, 220, "Paused", {
        fontFamily: "system-ui",
        fontSize: "44px",
        color: "#f8fafc",
      })
      .setOrigin(0.5);
    this.add
      .text(480, 292, "Esc / Enter: Resume     R: Restart     M: Menu", {
        fontFamily: "system-ui",
        fontSize: "18px",
        color: "#bae6fd",
      })
      .setOrigin(0.5);
    this.input.keyboard?.once("keydown-ESC", () => this.resumeGame());
    this.input.keyboard?.once("keydown-ENTER", () => this.resumeGame());
    this.input.keyboard?.once("keydown-R", () => {
      this.scene.stop("PlayScene");
      this.scene.stop("HudScene");
      this.scene.start("PlayScene", { levelIndex: this.registry.get("currentLevelIndex") ?? 0 });
    });
    this.input.keyboard?.once("keydown-M", () => {
      this.scene.stop("PlayScene");
      this.scene.stop("HudScene");
      this.scene.start("MenuScene");
    });
  }

  private resumeGame(): void {
    this.scene.resume("PlayScene");
    this.scene.stop();
  }
}
