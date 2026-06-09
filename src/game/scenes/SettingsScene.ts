import Phaser from "phaser";
import { SaveSystem, type GameSettings, type MotionLevel } from "../systems/SaveSystem";
import {
  formatTouchControlsMode,
  nextTouchControlsMode,
  shouldShowTouchControls,
} from "../systems/TouchControlsSystem";

export class SettingsScene extends Phaser.Scene {
  private saveSystem = new SaveSystem();

  constructor() {
    super("SettingsScene");
  }

  create(): void {
    const settings = this.saveSystem.loadSettings();
    const touchMode = settings.touchControls;
    const touchModeLabel =
      touchMode === "auto" ? `Auto (${shouldShowTouchControls("auto") ? "visible" : "hidden"})` : formatTouchControlsMode(touchMode);
    this.add.rectangle(480, 270, 960, 540, 0x07131e);
    this.add
      .text(480, 76, "Settings", {
        fontFamily: "system-ui",
        fontSize: "42px",
        color: "#f8fafc",
      })
      .setOrigin(0.5);
    this.add
      .text(480, 482, "Tap a row or press 1-5     Esc: Back", {
        fontFamily: "system-ui",
        fontSize: "17px",
        color: "#bae6fd",
        align: "center",
      })
      .setOrigin(0.5);
    this.addSettingRow(480, 144, `Volume: ${Math.round(settings.volume * 100)}%`, () => {
      settings.volume = settings.volume > 0.1 ? 0 : 0.42;
      this.saveSystem.saveSettings(settings);
      this.scene.restart();
    });
    this.addSettingRow(480, 194, `Motion: ${formatMotionLevel(settings.motionLevel)}`, () => {
      applyMotionLevel(settings, nextMotionLevel(settings.motionLevel));
      this.saveSystem.saveSettings(settings);
      this.scene.restart();
    });
    this.addSettingRow(480, 244, `Assist mode: ${settings.assistMode ? "On" : "Off"}`, () => {
      settings.assistMode = !settings.assistMode;
      this.saveSystem.saveSettings(settings);
      this.scene.restart();
    });
    this.addSettingRow(480, 294, `Sound cues: ${settings.showSoundCues ? "On" : "Off"}`, () => {
      settings.showSoundCues = !settings.showSoundCues;
      this.saveSystem.saveSettings(settings);
      this.scene.restart();
    });
    this.addSettingRow(480, 344, `Touch controls: ${touchModeLabel}`, () => {
      settings.touchControls = nextTouchControlsMode(touchMode);
      this.saveSystem.saveSettings(settings);
      this.scene.restart();
    });
    this.addSettingRow(480, 414, "Back to title", () => this.scene.start("MenuScene"), 0x475569);
    this.input.keyboard?.once("keydown-ESC", () => this.scene.start("MenuScene"));
    this.input.keyboard?.once("keydown-ONE", () => {
      settings.volume = settings.volume > 0.1 ? 0 : 0.42;
      this.saveSystem.saveSettings(settings);
      this.scene.restart();
    });
    this.input.keyboard?.once("keydown-TWO", () => {
      applyMotionLevel(settings, nextMotionLevel(settings.motionLevel));
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
    this.input.keyboard?.once("keydown-FIVE", () => {
      settings.touchControls = nextTouchControlsMode(touchMode);
      this.saveSystem.saveSettings(settings);
      this.scene.restart();
    });
  }

  private addSettingRow(
    x: number,
    y: number,
    label: string,
    onClick: () => void,
    fillColor = 0x0f766e,
  ): void {
    const rectangle = this.add.rectangle(x, y, 500, 38, fillColor, 0.84).setStrokeStyle(2, 0xf8fafc, 0.36);
    const text = this.add
      .text(x, y, label, {
        fontFamily: "system-ui",
        fontSize: "18px",
        color: "#f8fafc",
      })
      .setOrigin(0.5);
    const zone = this.add.zone(x, y, 500, 38).setInteractive({ useHandCursor: true });
    zone.on("pointerover", () => rectangle.setAlpha(1));
    zone.on("pointerout", () => rectangle.setAlpha(0.84));
    zone.on("pointerdown", onClick);
    text.setDepth(1);
    zone.setDepth(2);
  }
}

function nextMotionLevel(level: MotionLevel): MotionLevel {
  if (level === "full") {
    return "reduced";
  }
  if (level === "reduced") {
    return "minimal";
  }
  return "full";
}

function formatMotionLevel(level: MotionLevel): string {
  if (level === "minimal") {
    return "Minimal";
  }
  if (level === "reduced") {
    return "Reduced";
  }
  return "Full";
}

function applyMotionLevel(settings: GameSettings, level: MotionLevel): void {
  settings.motionLevel = level;
  settings.reducedMotion = level !== "full";
  settings.reduceShake = level !== "full";
  settings.screenShake = level === "full";
}
