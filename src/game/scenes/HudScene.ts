import Phaser from "phaser";

export interface HudState {
  levelTitle: string;
  score: number;
  lives: number;
  health: number;
  glimmers: number;
  hiddenSeeds: number;
  timeRemaining: number;
  soundCue?: string;
}

export class HudScene extends Phaser.Scene {
  private backdrop?: Phaser.GameObjects.Rectangle;
  private text?: Phaser.GameObjects.Text;
  private cueText?: Phaser.GameObjects.Text;
  private previousState?: HudState;
  private previousCue = "";

  constructor() {
    super("HudScene");
  }

  create(): void {
    this.backdrop = this.add
      .rectangle(12, 10, 742, 31, 0x020617, 0.52)
      .setOrigin(0, 0)
      .setScrollFactor(0)
      .setDepth(999);
    this.text = this.add
      .text(18, 14, "", {
        fontFamily: "system-ui",
        fontSize: "16px",
        color: "#f8fafc",
        stroke: "#07131e",
        strokeThickness: 4,
      })
      .setScrollFactor(0)
      .setDepth(1000);
    this.cueText = this.add
      .text(942, 14, "", {
        fontFamily: "system-ui",
        fontSize: "15px",
        color: "#fde68a",
        stroke: "#07131e",
        strokeThickness: 4,
        align: "right",
      })
      .setOrigin(1, 0)
      .setScrollFactor(0)
      .setDepth(1000);
  }

  update(): void {
    const state = this.registry.get("hud") as HudState | undefined;
    if (!state || !this.text || !this.cueText) {
      return;
    }

    const previous = this.previousState;
    this.text.setText(formatHudState(state));
    if (this.backdrop) {
      this.backdrop.displayWidth = Math.min(760, this.text.displayWidth + 18);
    }

    if (previous) {
      const scoreDelta = state.score - previous.score;
      if (scoreDelta > 0) {
        this.pulseHud("#fde68a");
        this.showScorePopup(scoreDelta);
      } else if (state.health < previous.health || state.lives < previous.lives) {
        this.pulseHud("#fecaca");
      } else if (state.glimmers > previous.glimmers || state.hiddenSeeds > previous.hiddenSeeds) {
        this.pulseHud("#bbf7d0");
      } else if (state.timeRemaining <= 10 && state.timeRemaining !== previous.timeRemaining) {
        this.pulseHud("#fca5a5");
      }
    }

    const cue = state.soundCue ?? "";
    if (cue !== this.previousCue) {
      this.setCue(cue);
      this.previousCue = cue;
    }
    this.previousState = { ...state };
  }

  private pulseHud(color: string): void {
    if (!this.text || !this.backdrop) {
      return;
    }

    this.tweens.killTweensOf([this.text, this.backdrop]);
    this.text.setColor(color);
    this.text.setScale(1.045);
    this.backdrop.setAlpha(1);
    this.backdrop.setFillStyle(0x0f172a, 0.72);
    this.tweens.add({
      targets: this.text,
      scale: 1,
      duration: 210,
      ease: "Back.easeOut",
      onComplete: () => this.text?.setColor("#f8fafc"),
    });
    this.tweens.add({
      targets: this.backdrop,
      alpha: 0.82,
      yoyo: true,
      duration: 130,
      ease: "Cubic.easeOut",
      onComplete: () => {
        this.backdrop?.setAlpha(1);
        this.backdrop?.setFillStyle(0x020617, 0.52);
      },
    });
  }

  private showScorePopup(delta: number): void {
    const popup = this.add
      .text(250, 39, `+${delta.toLocaleString("en-US")}`, {
        fontFamily: "system-ui",
        fontSize: "15px",
        fontStyle: "700",
        color: "#fde68a",
        stroke: "#07131e",
        strokeThickness: 4,
      })
      .setOrigin(0.5, 0)
      .setScrollFactor(0)
      .setDepth(1001);
    this.tweens.add({
      targets: popup,
      y: 24,
      scale: 1.12,
      alpha: 0,
      duration: 560,
      ease: "Cubic.easeOut",
      onComplete: () => popup.destroy(),
    });
  }

  private setCue(cue: string): void {
    if (!this.cueText) {
      return;
    }

    this.tweens.killTweensOf(this.cueText);
    if (!cue) {
      this.tweens.add({
        targets: this.cueText,
        alpha: 0,
        duration: 160,
        ease: "Cubic.easeOut",
        onComplete: () => this.cueText?.setText(""),
      });
      return;
    }

    this.cueText.setText(`Sound: ${cue}`);
    this.cueText.setAlpha(0);
    this.cueText.setScale(0.94);
    this.cueText.setY(19);
    this.tweens.add({
      targets: this.cueText,
      alpha: 1,
      scale: 1,
      y: 14,
      duration: 180,
      ease: "Back.easeOut",
    });
  }
}

function formatHudState(state: HudState): string {
  return `${state.levelTitle}   Score ${state.score.toLocaleString("en-US")}   Lives ${state.lives}   Health ${state.health}   Glimmers ${state.glimmers}   Seeds ${state.hiddenSeeds}   Time ${state.timeRemaining}`;
}
