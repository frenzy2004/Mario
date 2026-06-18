import Phaser from "phaser";
import { campaignProgress, getLevelMetaByIndex, LEVEL_COUNT, levelIndexFromSearch } from "../levels/meta";
import { ensureGameplayScenes } from "../systems/SceneLoadSystem";
import { SaveSystem } from "../systems/SaveSystem";

export class MenuScene extends Phaser.Scene {
  private selectedLevel = 0;
  private saveSystem = new SaveSystem();
  private transitioning = false;
  private shareStatus?: Phaser.GameObjects.Text;
  private shareStatusClearEvent?: Phaser.Time.TimerEvent;

  constructor() {
    super("MenuScene");
  }

  create(): void {
    this.transitioning = false;
    const save = this.saveSystem.loadSave();
    this.selectedLevel = levelIndexFromSearch(window.location.search, Math.min(save.unlockedLevel, LEVEL_COUNT - 1));
    if (this.selectedLevel > save.unlockedLevel) {
      this.selectedLevel = Math.min(save.unlockedLevel, LEVEL_COUNT - 1);
    }
    const progress = campaignProgress(save.bestTimes);
    this.cameras.main.setBackgroundColor("#07131e");
    this.cameras.main.fadeIn(320, 7, 19, 30);
    this.add.rectangle(480, 270, 960, 540, 0x07131e);
    for (let i = 0; i < 20; i += 1) {
      const canopyLight = this.add
        .ellipse(80 + i * 48, 80 + Math.sin(i) * 26, 34, 12, i % 2 ? 0x2dd4bf : 0xfbbf24, 0.18)
        .setAngle(i * 17);
      this.tweens.add({
        targets: canopyLight,
        y: canopyLight.y + Phaser.Math.Between(-5, 5),
        alpha: 0.1 + (i % 3) * 0.04,
        duration: 1400 + i * 42,
        yoyo: true,
        repeat: -1,
        ease: "Sine.easeInOut",
      });
    }
    const title = this.add
      .text(480, 112, "Clockwork Canopy", {
        fontFamily: "system-ui",
        fontSize: "54px",
        fontStyle: "700",
        color: "#f8fafc",
      })
      .setOrigin(0.5);
    const subtitle = this.add
      .text(480, 174, "Original precision platform adventure", {
        fontFamily: "system-ui",
        fontSize: "20px",
        color: "#a7f3d0",
      })
      .setOrigin(0.5);
    const progressText = this.add
      .text(480, 214, `Campaign ${progress.label}`, {
        fontFamily: "system-ui",
        fontSize: "16px",
        color: progress.complete ? "#fde68a" : "#93c5fd",
      })
      .setOrigin(0.5);
    const continueText = this.add
      .text(480, 260, `Continue: ${getLevelMetaByIndex(this.selectedLevel).title}`, {
        fontFamily: "system-ui",
        fontSize: "25px",
        color: "#fde68a",
      })
      .setOrigin(0.5);
    const controls = this.add
      .text(480, 316, "Space / Enter: Play     M: Map     S: Settings     C: Credits", {
        fontFamily: "system-ui",
        fontSize: "17px",
        color: "#e0f2fe",
      })
      .setOrigin(0.5);
    for (const [index, target] of [title, subtitle, progressText, continueText, controls].entries()) {
      target.setAlpha(0);
      target.setY(target.y + 10);
      this.tweens.add({
        targets: target,
        y: target.y - 10,
        alpha: 1,
        delay: 80 + index * 70,
        duration: 360,
        ease: "Cubic.easeOut",
      });
    }
    this.tweens.add({
      targets: continueText,
      scale: 1.035,
      duration: 780,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });
    this.addButton(480, 374, 248, "Play", () => {
      void this.startGame();
    }, 0x0f766e);
    this.addButton(480, 426, 248, "World Map", () => this.transitionTo("WorldMapScene", { selectedLevelIndex: this.selectedLevel }), 0x1d4ed8);
    this.addButton(174, 482, 156, "Settings", () => this.transitionTo("SettingsScene"), 0x334155);
    this.addButton(378, 482, 156, "Credits", () => this.transitionTo("CreditsScene"), 0x475569);
    this.addButton(582, 482, 156, "Share", () => {
      void this.shareGame();
    }, 0xb45309);
    this.addButton(786, 482, 156, "Feedback", () => {
      void this.copyFeedbackNote();
    }, 0x7c3aed);
    this.shareStatus = this.add
      .text(480, 522, "", {
        fontFamily: "system-ui",
        fontSize: "14px",
        color: "#a7f3d0",
      })
      .setOrigin(0.5);
    this.input.keyboard?.once("keydown-SPACE", () => {
      void this.startGame();
    });
    this.input.keyboard?.once("keydown-ENTER", () => {
      void this.startGame();
    });
    this.input.keyboard?.once("keydown-M", () => this.transitionTo("WorldMapScene", { selectedLevelIndex: this.selectedLevel }));
    this.input.keyboard?.once("keydown-S", () => this.transitionTo("SettingsScene"));
    this.input.keyboard?.once("keydown-C", () => this.transitionTo("CreditsScene"));
  }

  private async startGame(): Promise<void> {
    if (this.transitioning) {
      return;
    }
    this.setShareStatus("Loading level...");
    await ensureGameplayScenes(this);
    this.transitionTo("PlayScene", { levelIndex: this.selectedLevel });
  }

  private transitionTo(sceneKey: string, data?: Record<string, unknown>): void {
    if (this.transitioning) {
      return;
    }

    this.transitioning = true;
    this.cameras.main.fadeOut(260, 7, 19, 30);
    this.time.delayedCall(260, () => this.scene.start(sceneKey, data));
  }

  private addButton(
    x: number,
    y: number,
    width: number,
    label: string,
    onClick: () => void,
    fillColor: number,
  ): void {
    const rectangle = this.add.rectangle(x, y, width, 42, fillColor, 0.88).setStrokeStyle(2, 0xf8fafc, 0.46);
    const text = this.add
      .text(x, y, label, {
        fontFamily: "system-ui",
        fontSize: "17px",
        fontStyle: "700",
        color: "#f8fafc",
      })
      .setOrigin(0.5);
    const zone = this.add.zone(x, y, width, 42).setInteractive({ useHandCursor: true });
    zone.on("pointerover", () => rectangle.setAlpha(1));
    zone.on("pointerout", () => rectangle.setAlpha(0.88));
    zone.on("pointerdown", onClick);
    text.setDepth(1);
    zone.setDepth(2);
  }

  private async shareGame(): Promise<void> {
    const url = this.shareUrl();
    const shareData: ShareData = {
      title: "Clockwork Canopy",
      text: `Play ${getLevelMetaByIndex(this.selectedLevel).title} in Clockwork Canopy.`,
      url,
    };

    try {
      if (navigator.share && (!navigator.canShare || navigator.canShare(shareData))) {
        await navigator.share(shareData);
        this.setShareStatus("Share sheet opened");
        return;
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        this.setShareStatus("Share canceled");
        return;
      }
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        this.setShareStatus("Link copied");
        return;
      }
    } catch {
      // Fall through to manual copy.
    }

    window.prompt("Copy this link", url);
    this.setShareStatus("Copy link shown");
  }

  private setShareStatus(status: string): void {
    if (!this.shareStatus) {
      return;
    }

    this.shareStatusClearEvent?.remove(false);
    this.tweens.killTweensOf(this.shareStatus);
    this.shareStatus.setText(status).setAlpha(1);
    if (!status) {
      return;
    }

    this.shareStatusClearEvent = this.time.delayedCall(2400, () => {
      this.tweens.add({
        targets: this.shareStatus,
        alpha: 0,
        duration: 260,
        ease: "Sine.easeOut",
        onComplete: () => this.shareStatus?.setText(""),
      });
    });
  }

  private async copyFeedbackNote(): Promise<void> {
    const level = getLevelMetaByIndex(this.selectedLevel);
    const note = [
      `Clockwork Canopy playtest note for ${level.title}`,
      `Link: ${this.shareUrl()}`,
      "What felt great:",
      "Where I got stuck:",
      "One thing I would improve:",
    ].join("\n");

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(note);
        this.setShareStatus("Feedback note copied");
        return;
      }
    } catch {
      // Fall through to manual copy.
    }

    window.prompt("Copy this feedback note", note);
    this.setShareStatus("Feedback note shown");
  }

  private shareUrl(): string {
    const url = new URL(window.location.href);
    url.searchParams.set("level", String(this.selectedLevel + 1));
    return url.toString();
  }
}
