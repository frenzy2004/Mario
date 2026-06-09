import Phaser from "phaser";

export class GameCompleteScene extends Phaser.Scene {
  private transitioning = false;

  constructor() {
    super("GameCompleteScene");
  }

  create(data: { score?: number }): void {
    this.transitioning = false;
    const finalScore = Math.max(0, Math.floor(data.score ?? 0));
    this.cameras.main.setBackgroundColor("#07131e");
    this.cameras.main.fadeIn(360, 7, 19, 30);
    this.add.rectangle(480, 270, 960, 540, 0x07131e);
    for (let i = 0; i < 18; i += 1) {
      const spark = this.add.circle(80 + i * 48, 82 + Math.sin(i * 0.8) * 22, 3 + (i % 3), i % 2 ? 0x2dd4bf : 0xfbbf24, 0.34);
      this.tweens.add({
        targets: spark,
        y: spark.y - Phaser.Math.Between(10, 24),
        alpha: 0.08,
        duration: 1300 + i * 55,
        yoyo: true,
        repeat: -1,
        ease: "Sine.easeInOut",
      });
    }
    const title = this.add
      .text(480, 145, "Canopy Restored", {
        fontFamily: "system-ui",
        fontSize: "48px",
        color: "#f8fafc",
      })
      .setOrigin(0.5);
    const scoreText = this.add
      .text(480, 235, "Final score: 0", {
        fontFamily: "system-ui",
        fontSize: "24px",
        color: "#fde68a",
      })
      .setOrigin(0.5);
    const prompt = this.add
      .text(480, 330, "Enter: Main Menu", {
        fontFamily: "system-ui",
        fontSize: "18px",
        color: "#bae6fd",
      })
      .setOrigin(0.5);
    for (const [index, target] of [title, scoreText, prompt].entries()) {
      target.setAlpha(0);
      target.setY(target.y + 12);
      this.tweens.add({
        targets: target,
        y: target.y - 12,
        alpha: 1,
        delay: 110 + index * 90,
        duration: 380,
        ease: "Cubic.easeOut",
      });
    }
    this.tweens.add({
      targets: prompt,
      scale: 1.04,
      duration: 820,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });
    const scoreCounter = { value: 0 };
    this.tweens.add({
      targets: scoreCounter,
      value: finalScore,
      duration: 900,
      ease: "Cubic.easeOut",
      onUpdate: () => scoreText.setText(`Final score: ${Math.round(scoreCounter.value).toLocaleString("en-US")}`),
      onComplete: () => scoreText.setText(`Final score: ${finalScore.toLocaleString("en-US")}`),
    });
    this.input.keyboard?.once("keydown-ENTER", () => this.returnToMenu());
    this.input.once("pointerdown", () => this.returnToMenu());
  }

  private returnToMenu(): void {
    if (this.transitioning) {
      return;
    }

    this.transitioning = true;
    this.cameras.main.fadeOut(280, 7, 19, 30);
    this.time.delayedCall(280, () => this.scene.start("MenuScene"));
  }
}
