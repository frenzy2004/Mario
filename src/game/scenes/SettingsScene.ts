import Phaser from "phaser";
import { SaveSystem } from "../systems/SaveSystem";

export class SettingsScene extends Phaser.Scene {
  private saveSystem = new SaveSystem();

  constructor() {
    super("SettingsScene");
  }

  create(): void {
    const settings = this.saveSystem.loadSettings();
    this.add.rectangle(480, 270, 960, 540, 0x07131e);
    this.add
      .text(480, 120, "Settings", {
        fontFamily: "system-ui",
        fontSize: "42px",
        color: "#f8fafc",
      })
      .setOrigin(0.5);
    const copy = [
      `Volume: ${Math.round(settings.volume * 100)}%`,
      `Screen shake: ${settings.reduceShake ? "Reduced" : "Full"}`,
      `Assist mode: ${settings.assistMode ? "On" : "Off"}`,
      `Sound cues: ${settings.showSoundCues ? "On" : "Off"}`,
      "",
      "1/2/3/4 toggle settings     Esc: Back",
    ].join("\n");
    this.add
      .text(480, 250, copy, {
        fontFamily: "system-ui",
        fontSize: "20px",
        color: "#bae6fd",
        align: "center",
        lineSpacing: 10,
      })
      .setOrigin(0.5);
    this.input.keyboard?.once("keydown-ESC", () => this.scene.start("MenuScene"));
    this.input.keyboard?.once("keydown-ONE", () => {
      settings.volume = settings.volume > 0.1 ? 0 : 0.42;
      this.saveSystem.saveSettings(settings);
      this.scene.restart();
    });
    this.input.keyboard?.once("keydown-TWO", () => {
      settings.reduceShake = !settings.reduceShake;
      this.saveSystem.saveSettings(settings);
      this.scene.restart();
    });
    this.input.keyboard?.once("keydown-THREE", () => {
      settings.assistMode = !settings.assistMode;
      this.saveSystem.saveSettings(settings);
      this.scene.restart();
    });
    this.input.keyboard?.once("keydown-FOUR", () => {
      settings.showSoundCues = !settings.showSoundCues;
      this.saveSystem.saveSettings(settings);
      this.scene.restart();
    });
  }
}
