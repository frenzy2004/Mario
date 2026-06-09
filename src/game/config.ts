import Phaser from "phaser";
import { GAME_CONFIG } from "./config/gameConfig";
import { BootScene } from "./scenes/BootScene";
import { MenuScene } from "./scenes/MenuScene";
import { PreloadScene } from "./scenes/PreloadScene";

export const GAME_WIDTH = GAME_CONFIG.width;
export const GAME_HEIGHT = GAME_CONFIG.height;

export const sceneKeys = {
  boot: "BootScene",
  preload: "PreloadScene",
  menu: "MenuScene",
} as const;

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "app",
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  backgroundColor: GAME_CONFIG.backgroundColor,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: GAME_CONFIG.gravity },
      debug: false,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [BootScene, PreloadScene, MenuScene],
};
