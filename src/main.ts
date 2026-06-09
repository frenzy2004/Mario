import Phaser from "phaser";
import "./styles.css";
import { GAME_CONFIG } from "./game/config/gameConfig";
import { BootScene } from "./game/scenes/BootScene";
import { CreditsScene } from "./game/scenes/CreditsScene";
import { GameCompleteScene } from "./game/scenes/GameCompleteScene";
import { HudScene } from "./game/scenes/HudScene";
import { MenuScene } from "./game/scenes/MenuScene";
import { PauseScene } from "./game/scenes/PauseScene";
import { PlayScene } from "./game/scenes/PlayScene";
import { PreloadScene } from "./game/scenes/PreloadScene";
import { SettingsScene } from "./game/scenes/SettingsScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "app",
  width: GAME_CONFIG.width,
  height: GAME_CONFIG.height,
  backgroundColor: GAME_CONFIG.backgroundColor,
  pixelArt: true,
  roundPixels: true,
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
  scene: [
    BootScene,
    PreloadScene,
    MenuScene,
    PlayScene,
    HudScene,
    PauseScene,
    SettingsScene,
    CreditsScene,
    GameCompleteScene,
  ],
};

window.addEventListener("load", () => {
  const game = new Phaser.Game(config);
  window.__clockworkCanopyGame = game;
});

declare global {
  interface Window {
    __clockworkCanopyGame?: Phaser.Game;
  }
}
