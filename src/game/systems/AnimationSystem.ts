import Phaser from "phaser";
import {
  PLAYER_ANIMATIONS,
  type PlayerAnimationDefinition,
  type PlayerAnimationState,
  type PlayerFacing,
} from "../config/player";

export interface AnimatedPlayerLike {
  anims: {
    currentAnim?: { key: string } | null;
    exists?: (key: string) => boolean;
    play?: (key: string, ignoreIfPlaying?: boolean) => unknown;
  };
  play?: (key: string, ignoreIfPlaying?: boolean) => unknown;
  setFlipX?: (value: boolean) => unknown;
}

export function animationKeyForState(state: PlayerAnimationState): string {
  return PLAYER_ANIMATIONS[state].key;
}

export class AnimationSystem {
  private lastKey = "";

  update(player: AnimatedPlayerLike, state: PlayerAnimationState, facing?: PlayerFacing): void {
    const key = animationKeyForState(state);
    if (facing) {
      player.setFlipX?.(facing === "left");
    }
    if (player.anims.currentAnim?.key === key || this.lastKey === key) {
      return;
    }
    if (player.anims.exists?.(key) === false) {
      return;
    }
    player.play?.(key, true) ?? player.anims.play?.(key, true);
    this.lastKey = key;
  }

  reset(): void {
    this.lastKey = "";
  }
}

export function createAnimations(scene: Phaser.Scene): void {
  for (const animation of Object.values(PLAYER_ANIMATIONS)) {
    createPlayerAnimation(scene, animation);
  }

  createSimpleAnimation(scene, "beetle-walk", "enemy-beetle", 4, 8);
  createSimpleAnimation(scene, "acorn-hop", "enemy-acorn", 4, 7);
  createSimpleAnimation(scene, "lantern-float", "enemy-lantern", 4, 6);
  createSimpleAnimation(scene, "charger-run", "enemy-charger", 4, 10);
  createSimpleAnimation(scene, "spiker-idle", "enemy-spiker", 4, 6);
  createSimpleAnimation(scene, "turret-wake", "enemy-turret", 4, 5);
  createSimpleAnimation(scene, "collectible-spin", "collectible-glimmer", 6, 10);
  createSimpleAnimation(scene, "powerup-pulse", "powerup", 4, 7);
  createSimpleAnimation(scene, "boss-warden", "boss-warden", 4, 6);
}

function createPlayerAnimation(scene: Phaser.Scene, animation: PlayerAnimationDefinition): void {
  if (scene.anims.exists(animation.key)) {
    return;
  }
  scene.anims.create({
    key: animation.key,
    frames: Array.from({ length: animation.frames }, (_unused, index) => ({
      key: `${animation.key}-${index}`,
    })),
    frameRate: animation.frameRate,
    repeat: animation.repeat,
  });
}

function createSimpleAnimation(
  scene: Phaser.Scene,
  animationKey: string,
  texturePrefix: string,
  frameCount: number,
  frameRate: number,
): void {
  if (scene.anims.exists(animationKey)) {
    return;
  }
  scene.anims.create({
    key: animationKey,
    frames: Array.from({ length: frameCount }, (_unused, index) => ({ key: `${texturePrefix}-${index}` })),
    frameRate,
    repeat: -1,
  });
}
