import type Phaser from "phaser";

let gameplayScenesReady: Promise<void> | undefined;

export async function ensureGameplayScenes(scene: Phaser.Scene): Promise<void> {
  if (scene.scene.get("PlayScene")) {
    return;
  }

  gameplayScenesReady ??= import("../scenes/gameplayScenes").then(({ registerGameplayScenes }) => {
    registerGameplayScenes(scene);
  });

  await gameplayScenesReady;
}

export function sceneIsRegistered(scene: Phaser.Scene, key: string): boolean {
  return Boolean(scene.scene.get(key));
}
