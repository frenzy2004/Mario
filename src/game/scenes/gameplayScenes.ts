import type Phaser from "phaser";
import { HudScene } from "./HudScene";
import { PauseScene } from "./PauseScene";
import { PlayScene } from "./PlayScene";

export function registerGameplayScenes(scene: Phaser.Scene): void {
  if (!scene.scene.get("PlayScene")) {
    scene.scene.add("PlayScene", PlayScene, false);
  }
  if (!scene.scene.get("HudScene")) {
    scene.scene.add("HudScene", HudScene, false);
  }
  if (!scene.scene.get("PauseScene")) {
    scene.scene.add("PauseScene", PauseScene, false);
  }
}
