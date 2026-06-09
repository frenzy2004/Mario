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
  private text?: Phaser.GameObjects.Text;
  private cueText?: Phaser.GameObjects.Text;

  constructor() {
    super("HudScene");
  }

  create(): void {
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
    this.text.setText(
      `${state.levelTitle}   Score ${state.score}   Lives ${state.lives}   Health ${state.health}   Glimmers ${state.glimmers}   Seeds ${state.hiddenSeeds}   Time ${state.timeRemaining}`,
    );
    this.cueText.setText(state.soundCue ? `Sound: ${state.soundCue}` : "");
  }
}
