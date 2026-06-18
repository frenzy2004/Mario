import Phaser from "phaser";
import { LEVEL_COUNT, LEVEL_META, campaignProgress, clampLevelIndex, levelIsUnlocked } from "../levels/meta";
import { ensureGameplayScenes } from "../systems/SceneLoadSystem";
import { SaveSystem, type SaveData } from "../systems/SaveSystem";

interface WorldMapSceneData {
  selectedLevelIndex?: number;
}

interface LevelNode {
  index: number;
  circle: Phaser.GameObjects.Arc;
  label: Phaser.GameObjects.Text;
  zone: Phaser.GameObjects.Zone;
}

export class WorldMapScene extends Phaser.Scene {
  private readonly saveSystem = new SaveSystem();
  private save!: SaveData;
  private selectedIndex = 0;
  private nodes: LevelNode[] = [];
  private detailText?: Phaser.GameObjects.Text;
  private transitioning = false;
  private loadingText?: Phaser.GameObjects.Text;

  constructor() {
    super("WorldMapScene");
  }

  init(data: WorldMapSceneData = {}): void {
    this.save = this.saveSystem.loadSave();
    const defaultIndex = Math.min(this.save.unlockedLevel, LEVEL_COUNT - 1);
    this.selectedIndex = clampLevelIndex(data.selectedLevelIndex ?? defaultIndex);
    if (!levelIsUnlocked(this.selectedIndex, this.save.unlockedLevel)) {
      this.selectedIndex = defaultIndex;
    }
  }

  create(): void {
    this.transitioning = false;
    this.nodes = [];
    this.cameras.main.setBackgroundColor("#07131e");
    this.cameras.main.fadeIn(260, 7, 19, 30);
    this.add.rectangle(480, 270, 960, 540, 0x07131e);
    this.drawBackdrop();

    this.add
      .text(480, 40, "World Map", {
        fontFamily: "system-ui",
        fontSize: "32px",
        fontStyle: "700",
        color: "#f8fafc",
      })
      .setOrigin(0.5);
    this.add
      .text(480, 75, "Pick an unlocked stop or replay a completed level", {
        fontFamily: "system-ui",
        fontSize: "15px",
        color: "#bae6fd",
      })
      .setOrigin(0.5);
    this.drawProgress();

    this.drawRoutes();
    this.drawNodes();
    this.detailText = this.add
      .text(480, 468, "", {
        fontFamily: "system-ui",
        fontSize: "17px",
        color: "#e0f2fe",
        align: "center",
      })
      .setOrigin(0.5);
    this.loadingText = this.add
      .text(480, 505, "Enter: Play     Arrows/A-D: Select     Esc: Title", {
        fontFamily: "system-ui",
        fontSize: "15px",
        color: "#a7f3d0",
      })
      .setOrigin(0.5);

    this.input.keyboard?.on("keydown-LEFT", () => this.moveSelection(-1));
    this.input.keyboard?.on("keydown-A", () => this.moveSelection(-1));
    this.input.keyboard?.on("keydown-RIGHT", () => this.moveSelection(1));
    this.input.keyboard?.on("keydown-D", () => this.moveSelection(1));
    this.input.keyboard?.on("keydown-UP", () => this.moveSelection(-7));
    this.input.keyboard?.on("keydown-W", () => this.moveSelection(-7));
    this.input.keyboard?.on("keydown-DOWN", () => this.moveSelection(7));
    this.input.keyboard?.on("keydown-S", () => this.moveSelection(7));
    this.input.keyboard?.once("keydown-ENTER", () => {
      void this.startSelectedLevel();
    });
    this.input.keyboard?.once("keydown-SPACE", () => {
      void this.startSelectedLevel();
    });
    this.input.keyboard?.once("keydown-ESC", () => this.transitionToMenu());

    this.updateSelection();
  }

  private drawBackdrop(): void {
    for (let index = 0; index < 24; index += 1) {
      const x = 52 + index * 39;
      const y = 108 + Math.sin(index * 0.8) * 18;
      const light = this.add.ellipse(x, y, 26, 9, index % 2 ? 0x2dd4bf : 0xfbbf24, 0.13).setAngle(index * 21);
      this.tweens.add({
        targets: light,
        y: y + Phaser.Math.Between(-6, 6),
        alpha: 0.06 + (index % 4) * 0.025,
        duration: 1600 + index * 44,
        yoyo: true,
        repeat: -1,
        ease: "Sine.easeInOut",
      });
    }
  }

  private drawProgress(): void {
    const progress = campaignProgress(this.save.bestTimes);
    const railWidth = 310;
    const railX = 480 - railWidth / 2;
    const fillWidth = Math.round((progress.percent / 100) * railWidth);

    this.add
      .text(480, 98, `Campaign ${progress.label}`, {
        fontFamily: "system-ui",
        fontSize: "13px",
        color: progress.complete ? "#fde68a" : "#93c5fd",
      })
      .setOrigin(0.5);
    this.add.rectangle(480, 116, railWidth, 6, 0x0f172a, 0.92).setStrokeStyle(1, 0x38bdf8, 0.36);
    if (fillWidth > 0) {
      this.add
        .rectangle(railX + fillWidth / 2, 116, fillWidth, 6, progress.complete ? 0xfacc15 : 0x22c55e, 0.88)
        .setOrigin(0.5);
    }
  }

  private drawRoutes(): void {
    const graphics = this.add.graphics();
    graphics.lineStyle(3, 0x38bdf8, 0.2);
    let previous: Phaser.Math.Vector2 | undefined;
    for (const meta of LEVEL_META) {
      const point = nodePoint(meta.index);
      if (previous) {
        graphics.lineBetween(previous.x, previous.y, point.x, point.y);
      }
      previous = point;
    }
  }

  private drawNodes(): void {
    for (const meta of LEVEL_META) {
      const point = nodePoint(meta.index);
      const unlocked = levelIsUnlocked(meta.index, this.save.unlockedLevel);
      const completed = Object.hasOwn(this.save.bestTimes, meta.id);
      const color = completed ? 0x22c55e : unlocked ? 0xfacc15 : 0x334155;
      const circle = this.add.circle(point.x, point.y, meta.final ? 15 : 12, color, unlocked ? 0.86 : 0.58);
      circle.setStrokeStyle(2, unlocked ? 0xf8fafc : 0x64748b, unlocked ? 0.66 : 0.3);
      const label = this.add
        .text(point.x, point.y + 23, meta.final ? "Crown" : String(meta.chapterLevel), {
          fontFamily: "system-ui",
          fontSize: meta.final ? "12px" : "13px",
          fontStyle: "700",
          color: unlocked ? "#f8fafc" : "#94a3b8",
        })
        .setOrigin(0.5);
      const zone = this.add.zone(point.x, point.y, 42, 42).setInteractive({ useHandCursor: unlocked });
      zone.on("pointerover", () => {
        if (unlocked) {
          this.selectedIndex = meta.index;
          this.updateSelection();
        }
      });
      zone.on("pointerdown", () => {
        if (unlocked) {
          this.selectedIndex = meta.index;
          void this.startSelectedLevel();
        }
      });
      this.nodes.push({ index: meta.index, circle, label, zone });
    }
  }

  private moveSelection(delta: number): void {
    if (this.transitioning) {
      return;
    }
    let next = this.selectedIndex;
    for (let attempts = 0; attempts < LEVEL_COUNT; attempts += 1) {
      next = clampLevelIndex(next + delta);
      if (levelIsUnlocked(next, this.save.unlockedLevel)) {
        this.selectedIndex = next;
        this.updateSelection();
        return;
      }
      if (next === 0 || next === Math.min(this.save.unlockedLevel, LEVEL_COUNT - 1)) {
        break;
      }
    }
  }

  private updateSelection(): void {
    const selected = LEVEL_META[this.selectedIndex]!;
    for (const node of this.nodes) {
      const active = node.index === this.selectedIndex;
      this.tweens.killTweensOf([node.circle, node.label]);
      node.circle.setScale(active ? 1.35 : 1);
      node.label.setScale(active ? 1.08 : 1);
      node.circle.setStrokeStyle(active ? 4 : 2, active ? 0xfde68a : 0xf8fafc, active ? 0.95 : 0.5);
    }

    const best = this.save.bestTimes[selected.id];
    const status = best === undefined ? "New" : `Best ${formatTime(best)}`;
    const locked = !levelIsUnlocked(selected.index, this.save.unlockedLevel);
    this.detailText?.setText(
      locked
        ? `${selected.title}\nLocked`
        : `${selected.title}   ${status}\n${selected.chapter}`,
    );
  }

  private async startSelectedLevel(): Promise<void> {
    if (this.transitioning || !levelIsUnlocked(this.selectedIndex, this.save.unlockedLevel)) {
      return;
    }

    this.transitioning = true;
    this.loadingText?.setText("Loading level...");
    await ensureGameplayScenes(this);
    this.cameras.main.fadeOut(220, 7, 19, 30);
    this.time.delayedCall(220, () =>
      this.scene.start("PlayScene", {
        levelIndex: this.selectedIndex,
        returnScene: "WorldMapScene",
      }),
    );
  }

  private transitionToMenu(): void {
    if (this.transitioning) {
      return;
    }

    this.transitioning = true;
    this.cameras.main.fadeOut(220, 7, 19, 30);
    this.time.delayedCall(220, () => this.scene.start("MenuScene"));
  }
}

function nodePoint(index: number): Phaser.Math.Vector2 {
  if (index >= 42) {
    return new Phaser.Math.Vector2(842, 388);
  }

  const chapter = Math.floor(index / 7);
  const chapterLevel = index % 7;
  const x = 96 + chapterLevel * 118;
  const y = 130 + chapter * 48 + Math.sin((chapterLevel + chapter) * 0.8) * 15;
  return new Phaser.Math.Vector2(x, y);
}

function formatTime(ms: number): string {
  const seconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${minutes}:${String(remainder).padStart(2, "0")}`;
}
