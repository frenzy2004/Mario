import Phaser from "phaser";

export class PauseScene extends Phaser.Scene {
  private overlay?: Phaser.GameObjects.Rectangle;
  private content?: Phaser.GameObjects.Container;
  private transitioning = false;

  constructor() {
    super("PauseScene");
  }

  create(): void {
    this.transitioning = false;
    this.overlay = this.add.rectangle(480, 270, 960, 540, 0x020617, 0).setDepth(100);
    const title = this.add
      .text(0, -44, "Paused", {
        fontFamily: "system-ui",
        fontSize: "44px",
        color: "#f8fafc",
      })
      .setOrigin(0.5);
    const divider = this.add.rectangle(0, 8, 460, 2, 0x38bdf8, 0.42);
    const controls = this.add
      .text(0, 52, "Esc / Enter: Resume     R: Restart     M: Menu", {
        fontFamily: "system-ui",
        fontSize: "18px",
        color: "#bae6fd",
      })
      .setOrigin(0.5);
    this.content = this.add.container(480, 264, [title, divider, controls]).setAlpha(0).setDepth(101);
    this.content.setY(this.content.y + 8);
    this.tweens.add({
      targets: this.overlay,
      alpha: 0.68,
      duration: 140,
      ease: "Cubic.easeOut",
    });
    this.tweens.add({
      targets: this.content,
      y: 264,
      alpha: 1,
      duration: 190,
      ease: "Cubic.easeOut",
    });
    this.input.keyboard?.once("keydown-ESC", () => this.resumeGame());
    this.input.keyboard?.once("keydown-ENTER", () => this.resumeGame());
    this.input.keyboard?.once("keydown-R", () => {
      this.fadeToAction(() => {
        this.scene.stop("PlayScene");
        this.scene.stop("HudScene");
        this.scene.start("PlayScene", { levelIndex: this.registry.get("currentLevelIndex") ?? 0 });
      });
    });
    this.input.keyboard?.once("keydown-M", () => {
      this.fadeToAction(() => {
        this.scene.stop("PlayScene");
        this.scene.stop("HudScene");
        this.scene.start("MenuScene");
      });
    });
  }

  private resumeGame(): void {
    if (this.transitioning) {
      return;
    }

    this.transitioning = true;
    this.tweens.add({
      targets: [this.overlay, this.content],
      alpha: 0,
      duration: 140,
      ease: "Cubic.easeOut",
      onComplete: () => {
        this.scene.resume("PlayScene");
        this.scene.stop();
      },
    });
  }

  private fadeToAction(action: () => void): void {
    if (this.transitioning) {
      return;
    }

    this.transitioning = true;
    const fade = this.add.rectangle(480, 270, 960, 540, 0x020617, 0).setDepth(120);
    this.tweens.add({
      targets: fade,
      alpha: 1,
      duration: 190,
      ease: "Cubic.easeOut",
      onComplete: action,
    });
  }
}
