import Phaser from "phaser";
import { createProceduralTextures } from "../assets/createTextures";
import { createAnimations } from "../systems/AnimationSystem";

export class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  create(): void {
    createProceduralTextures(this);
    createAnimations(this);
    this.scene.start("PreloadScene");
  }
}
