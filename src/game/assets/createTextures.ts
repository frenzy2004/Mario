import Phaser from "phaser";

const PLAYER_STATE_FRAMES = {
  idle: 4,
  run: 8,
  skid: 3,
  jump: 2,
  fall: 2,
  land: 3,
  hurt: 4,
  victory: 6,
} as const;

export function createProceduralTextures(scene: Phaser.Scene): void {
  createTile(scene, "tile-ground", 0x2d6b54, 0x72ce8b, 0x1f4d45);
  createTile(scene, "tile-ground-edge", 0x24604c, 0x9ff0a9, 0x17372e);
  createTile(scene, "tile-platform", 0x8c6434, 0xf7b955, 0x4a321d);
  createTile(scene, "tile-hazard", 0x83263e, 0xff6b7a, 0x3b1426);
  createTile(scene, "tile-spring", 0x4bb7d9, 0xd7fff7, 0x17536b);
  createTile(scene, "tile-wind", 0x77d8ff, 0xf4fcff, 0x285c83);
  createOrb(scene, "particle-dust", 0xd8c58f, 8);
  createOrb(scene, "particle-spark", 0xf8e879, 9);
  createOrb(scene, "particle-leaf", 0x8dde73, 8);
  createGoal(scene);
  createCheckpoint(scene);
  createPlayerTextures(scene);
  createEnemyTextures(scene);
  createCollectibleTextures(scene);
  createPowerupTextures(scene);
  createHazardTextures(scene);
  createBossTextures(scene);
  createUiTextures(scene);
}

function createTile(scene: Phaser.Scene, key: string, base: number, light: number, dark: number): void {
  if (scene.textures.exists(key)) {
    return;
  }
  const graphics = scene.make.graphics({ x: 0, y: 0 }, false);
  graphics.fillStyle(base, 1);
  graphics.fillRect(0, 0, 32, 32);
  graphics.fillStyle(light, 1);
  graphics.fillRect(0, 0, 32, 5);
  graphics.fillStyle(dark, 1);
  graphics.fillRect(0, 27, 32, 5);
  graphics.lineStyle(1, dark, 0.45);
  graphics.strokeRect(0.5, 0.5, 31, 31);
  for (let i = 0; i < 5; i += 1) {
    const x = 4 + i * 6;
    graphics.fillStyle(i % 2 ? dark : light, 0.42);
    graphics.fillRect(x, 10 + ((i * 7) % 12), 3, 3);
  }
  graphics.generateTexture(key, 32, 32);
  graphics.destroy();
}

function createOrb(scene: Phaser.Scene, key: string, color: number, size: number): void {
  if (scene.textures.exists(key)) {
    return;
  }
  const graphics = scene.make.graphics({ x: 0, y: 0 }, false);
  graphics.fillStyle(color, 0.4);
  graphics.fillCircle(size, size, size);
  graphics.fillStyle(color, 1);
  graphics.fillCircle(size, size, Math.max(2, size - 3));
  graphics.generateTexture(key, size * 2, size * 2);
  graphics.destroy();
}

function createPlayerTextures(scene: Phaser.Scene): void {
  for (const [state, frames] of Object.entries(PLAYER_STATE_FRAMES)) {
    for (let frame = 0; frame < frames; frame += 1) {
      const key = `hero-${state}-${frame}`;
      if (scene.textures.exists(key)) {
        continue;
      }
      const graphics = scene.make.graphics({ x: 0, y: 0 }, false);
      drawHeroFrame(graphics, state as keyof typeof PLAYER_STATE_FRAMES, frame);
      graphics.generateTexture(key, 32, 36);
      graphics.destroy();
    }
  }
}

function drawHeroFrame(
  graphics: Phaser.GameObjects.Graphics,
  state: keyof typeof PLAYER_STATE_FRAMES,
  frame: number,
): void {
  const runCycle = frame % 4;
  const runStep = runCycle === 0 || runCycle === 3 ? 1 : -1;
  const bob =
    state === "run"
      ? (runCycle === 1 || runCycle === 2 ? -1 : 0)
      : state === "victory"
        ? Math.sin(frame * 0.9) * 1.2
        : Math.sin(frame * 0.75) * 0.7;
  const airborneLift = state === "jump" ? -2 : state === "fall" ? 1 : 0;
  const landSquash = state === "land" ? 2 : 0;
  const hurtJolt = state === "hurt" ? (frame % 2 === 0 ? -1 : 1) : 0;
  const y = bob + airborneLift;

  graphics.fillStyle(0x07131e, 0.24);
  graphics.fillEllipse(16, 32, state === "jump" ? 18 : 24, state === "jump" ? 5 : 7);

  drawHeroScarf(graphics, state, frame, y);
  drawHeroLegs(graphics, state, frame, y, runStep, landSquash);
  drawHeroBody(graphics, state, y, landSquash, hurtJolt);
  drawHeroArms(graphics, state, frame, y, runStep);
  drawHeroHead(graphics, state, frame, y, hurtJolt);
}

function drawHeroBody(
  graphics: Phaser.GameObjects.Graphics,
  state: keyof typeof PLAYER_STATE_FRAMES,
  y: number,
  landSquash: number,
  hurtJolt: number,
): void {
  const coatTop = 13 + y - landSquash * 0.4;
  const coatHeight = 16 + landSquash;
  const coatColor = state === "hurt" ? 0x6b3346 : 0x11635f;
  const trimColor = state === "victory" ? 0xfacc15 : 0x7dd3fc;

  graphics.fillStyle(0x0f172a, 1);
  graphics.fillRoundedRect(7 + hurtJolt, coatTop - 1, 18, coatHeight + 2, 5);
  graphics.fillStyle(coatColor, 1);
  graphics.fillRoundedRect(8 + hurtJolt, coatTop, 16, coatHeight, 5);
  graphics.fillStyle(0x0f3b3b, 1);
  graphics.fillRect(9 + hurtJolt, coatTop + 9, 14, 6);
  graphics.fillStyle(0x49c6b7, 1);
  graphics.fillRoundedRect(10 + hurtJolt, coatTop + 2, 5, 12, 2);
  graphics.fillStyle(0x0b2d2e, 1);
  graphics.fillRect(16 + hurtJolt, coatTop + 2, 2, 15);
  graphics.fillStyle(trimColor, 1);
  graphics.fillRect(18 + hurtJolt, coatTop + 5, 3, 2);
  graphics.fillRect(18 + hurtJolt, coatTop + 10, 3, 2);

  graphics.fillStyle(0xd9a64a, 1);
  graphics.fillRoundedRect(9 + hurtJolt, coatTop + coatHeight - 4, 15, 3, 1);
  graphics.fillStyle(0x6b3f21, 1);
  graphics.fillRect(15 + hurtJolt, coatTop + coatHeight - 4, 3, 3);
}

function drawHeroHead(
  graphics: Phaser.GameObjects.Graphics,
  state: keyof typeof PLAYER_STATE_FRAMES,
  frame: number,
  y: number,
  hurtJolt: number,
): void {
  const headY = 4 + y + (state === "land" ? 1 : 0);
  const blink = state === "idle" && frame === 2;

  graphics.fillStyle(0x0f172a, 1);
  graphics.fillRoundedRect(8 + hurtJolt, headY - 1, 16, 13, 6);
  graphics.fillStyle(state === "hurt" ? 0xf38b70 : 0xf0b45e, 1);
  graphics.fillRoundedRect(9 + hurtJolt, headY, 14, 12, 6);
  graphics.fillStyle(0xffd27a, 1);
  graphics.fillRect(12 + hurtJolt, headY + 1, 7, 2);
  graphics.fillStyle(0x7a3f24, 1);
  graphics.fillRoundedRect(7 + hurtJolt, headY + 2, 5, 8, 3);
  graphics.fillRect(9 + hurtJolt, headY, 10, 2);

  graphics.fillStyle(0xd6a33f, 1);
  graphics.fillRoundedRect(10 + hurtJolt, headY + 4, 13, 5, 2);
  graphics.fillStyle(0x172033, 1);
  graphics.fillRoundedRect(11 + hurtJolt, headY + 5, 5, 3, 1);
  graphics.fillRoundedRect(18 + hurtJolt, headY + 5, 4, 3, 1);
  graphics.fillStyle(0xa7f3d0, 1);
  graphics.fillRect(12 + hurtJolt, headY + 5, 2, 1);
  graphics.fillRect(19 + hurtJolt, headY + 5, 1, 1);

  graphics.fillStyle(0x111827, 1);
  if (blink) {
    graphics.fillRect(12 + hurtJolt, headY + 7, 3, 1);
    graphics.fillRect(19 + hurtJolt, headY + 7, 2, 1);
  } else {
    graphics.fillRect(13 + hurtJolt, headY + 6, 1, 2);
    graphics.fillRect(20 + hurtJolt, headY + 6, 1, 2);
  }
  graphics.fillStyle(state === "victory" ? 0xfde68a : 0x7a3f24, 1);
  graphics.fillRect(15 + hurtJolt, headY + 10, state === "hurt" ? 3 : 4, 1);
}

function drawHeroScarf(
  graphics: Phaser.GameObjects.Graphics,
  state: keyof typeof PLAYER_STATE_FRAMES,
  frame: number,
  y: number,
): void {
  const scarfY = 15 + y;
  const flutter = state === "run" ? 2 + (frame % 2) : state === "jump" || state === "fall" ? 3 : 1;
  graphics.fillStyle(0xb91c1c, 1);
  graphics.fillTriangle(9, scarfY, 2, scarfY + 2 + flutter, 9, scarfY + 5);
  graphics.fillStyle(0xff6b7a, 1);
  graphics.fillTriangle(9, scarfY + 1, 4, scarfY + 2 + flutter, 9, scarfY + 3);
  graphics.fillStyle(0x7f1d1d, 1);
  graphics.fillRect(9, scarfY, 12, 3);
}

function drawHeroArms(
  graphics: Phaser.GameObjects.Graphics,
  state: keyof typeof PLAYER_STATE_FRAMES,
  frame: number,
  y: number,
  runStep: number,
): void {
  const swing = state === "run" ? runStep * 2 : state === "skid" ? -3 : state === "victory" ? -4 : 0;
  const leftHandY = state === "victory" ? 9 + Math.sin(frame) * 1.3 : 19 + y - swing * 0.4;
  const rightHandY = state === "jump" ? 17 + y : 19 + y + swing * 0.4;

  graphics.lineStyle(4, 0x0f172a, 1);
  graphics.lineBetween(9, 18 + y, 5, leftHandY);
  graphics.lineBetween(23, 18 + y, 27, rightHandY);
  graphics.lineStyle(2, 0x49c6b7, 1);
  graphics.lineBetween(9, 18 + y, 5, leftHandY);
  graphics.lineBetween(23, 18 + y, 27, rightHandY);
  graphics.fillStyle(0xf0b45e, 1);
  graphics.fillCircle(5, leftHandY, 3);
  graphics.fillCircle(27, rightHandY, 3);
}

function drawHeroLegs(
  graphics: Phaser.GameObjects.Graphics,
  state: keyof typeof PLAYER_STATE_FRAMES,
  frame: number,
  y: number,
  runStep: number,
  landSquash: number,
): void {
  const stride = state === "run" ? runStep * 3 : state === "skid" ? -3 : 0;
  const bootY = 28 + y + landSquash * 0.5;
  const leftBootX = 6 + stride;
  const rightBootX = 17 - stride;

  graphics.fillStyle(0x12202a, 1);
  graphics.fillRect(11, 25 + y, 5, 5);
  graphics.fillRect(18, 25 + y, 5, 5);
  if (state === "jump") {
    graphics.fillRect(13, 27 + y, 5, 3);
    graphics.fillRect(18, 26 + y, 5, 3);
  }
  graphics.fillStyle(0x0f172a, 1);
  graphics.fillRoundedRect(leftBootX, bootY, 10, 5, 2);
  graphics.fillRoundedRect(rightBootX, bootY, 10, 5, 2);
  graphics.fillStyle(0x334155, 1);
  graphics.fillRect(leftBootX + 1, bootY, 7, 2);
  graphics.fillRect(rightBootX + 1, bootY, 7, 2);
  if (state === "victory") {
    graphics.fillStyle(0xfacc15, frame % 2 ? 0.95 : 0.5);
    graphics.fillCircle(16, 2 + y, 2);
  }
}

function createEnemyTextures(scene: Phaser.Scene): void {
  const enemies = [
    ["enemy-beetle", 0x694c35, 0xf87171],
    ["enemy-acorn", 0xa16207, 0xfacc15],
    ["enemy-lantern", 0x0f766e, 0x67e8f9],
    ["enemy-charger", 0x6d28d9, 0xc4b5fd],
    ["enemy-spiker", 0x991b1b, 0xfca5a5],
    ["enemy-turret", 0x166534, 0x86efac],
  ] as const;
  for (const [prefix, base, accent] of enemies) {
    for (let frame = 0; frame < 4; frame += 1) {
      const key = `${prefix}-${frame}`;
      if (scene.textures.exists(key)) {
        continue;
      }
      const graphics = scene.make.graphics({ x: 0, y: 0 }, false);
      const pulse = Math.sin(frame * 1.7) * 2;
      graphics.fillStyle(0x000000, 0.18);
      graphics.fillEllipse(16, 28, 25, 6);
      graphics.fillStyle(base, 1);
      graphics.fillRoundedRect(4, 8 - pulse * 0.2, 24, 19 + pulse, 7);
      graphics.fillStyle(accent, 1);
      graphics.fillCircle(12, 14, 3);
      graphics.fillCircle(21, 14, 3);
      graphics.fillStyle(0x111827, 1);
      graphics.fillCircle(12, 14, 1.2);
      graphics.fillCircle(21, 14, 1.2);
      if (prefix === "enemy-spiker") {
        graphics.fillStyle(accent, 1);
        graphics.fillTriangle(8, 8, 12, 0, 16, 8);
        graphics.fillTriangle(16, 8, 20, 0, 24, 8);
      }
      graphics.generateTexture(key, 32, 32);
      graphics.destroy();
    }
  }
}

function createCollectibleTextures(scene: Phaser.Scene): void {
  for (let frame = 0; frame < 6; frame += 1) {
    const key = `collectible-glimmer-${frame}`;
    if (scene.textures.exists(key)) {
      continue;
    }
    const graphics = scene.make.graphics({ x: 0, y: 0 }, false);
    const width = 6 + Math.abs(Math.sin(frame)) * 6;
    graphics.fillStyle(0xf7df66, 0.35);
    graphics.fillCircle(16, 16, 12);
    graphics.fillStyle(0xfff7ad, 1);
    graphics.fillEllipse(16, 16, width, 18);
    graphics.lineStyle(2, 0xd99b2b, 1);
    graphics.strokeEllipse(16, 16, width, 18);
    graphics.generateTexture(key, 32, 32);
    graphics.destroy();
  }
  createCogCollectible(scene);
  createSeedCollectible(scene);
}

function createCogCollectible(scene: Phaser.Scene): void {
  if (scene.textures.exists("collectible-cog-0")) {
    return;
  }
  const graphics = scene.make.graphics({ x: 0, y: 0 }, false);
  graphics.fillStyle(0xf7df66, 0.35);
  graphics.fillCircle(16, 16, 14);
  graphics.lineStyle(4, 0xd99b2b, 1);
  graphics.strokeCircle(16, 16, 9);
  for (let tooth = 0; tooth < 8; tooth += 1) {
    const angle = (Math.PI * 2 * tooth) / 8;
    graphics.fillStyle(0xfff7ad, 1);
    graphics.fillRect(15 + Math.cos(angle) * 11, 15 + Math.sin(angle) * 11, 3, 3);
  }
  graphics.generateTexture("collectible-cog-0", 32, 32);
  graphics.destroy();
}

function createSeedCollectible(scene: Phaser.Scene): void {
  if (scene.textures.exists("collectible-seed-0")) {
    return;
  }
  const graphics = scene.make.graphics({ x: 0, y: 0 }, false);
  graphics.fillStyle(0x8dde73, 0.3);
  graphics.fillCircle(16, 16, 13);
  graphics.fillStyle(0x3f7d3d, 1);
  graphics.fillEllipse(16, 17, 12, 19);
  graphics.fillStyle(0xecfccb, 1);
  graphics.fillEllipse(18, 12, 4, 8);
  graphics.generateTexture("collectible-seed-0", 32, 32);
  graphics.destroy();
}

function createPowerupTextures(scene: Phaser.Scene): void {
  for (let frame = 0; frame < 4; frame += 1) {
    const key = `powerup-${frame}`;
    if (scene.textures.exists(key)) {
      continue;
    }
    const graphics = scene.make.graphics({ x: 0, y: 0 }, false);
    const radius = 10 + frame;
    graphics.fillStyle(0x67e8f9, 0.28);
    graphics.fillCircle(16, 16, radius + 5);
    graphics.fillStyle(0x22c55e, 1);
    graphics.fillRoundedRect(8, 8, 16, 16, 5);
    graphics.fillStyle(0xecfccb, 1);
    graphics.fillCircle(16, 16, 5);
    graphics.generateTexture(key, 32, 32);
    graphics.destroy();
  }
  createPowerupVariant(scene, "powerup-boots-0", 0x38bdf8, "boots");
  createPowerupVariant(scene, "powerup-starburst-0", 0xfacc15, "star");
  createPowerupVariant(scene, "powerup-leaf-0", 0x22c55e, "leaf");
}

function createPowerupVariant(scene: Phaser.Scene, key: string, color: number, motif: "boots" | "star" | "leaf"): void {
  if (scene.textures.exists(key)) {
    return;
  }
  const graphics = scene.make.graphics({ x: 0, y: 0 }, false);
  graphics.fillStyle(color, 0.28);
  graphics.fillCircle(16, 16, 15);
  graphics.fillStyle(color, 1);
  if (motif === "boots") {
    graphics.fillRoundedRect(8, 17, 7, 8, 2);
    graphics.fillRoundedRect(17, 17, 7, 8, 2);
    graphics.fillStyle(0xf0f9ff, 1);
    graphics.fillRect(9, 14, 5, 5);
    graphics.fillRect(18, 14, 5, 5);
  } else if (motif === "star") {
    graphics.fillTriangle(16, 4, 20, 14, 30, 14);
    graphics.fillTriangle(16, 4, 12, 14, 2, 14);
    graphics.fillTriangle(6, 28, 16, 20, 26, 28);
  } else {
    graphics.fillEllipse(16, 16, 13, 21);
    graphics.lineStyle(2, 0xecfccb, 1);
    graphics.lineBetween(16, 8, 16, 25);
  }
  graphics.generateTexture(key, 32, 32);
  graphics.destroy();
}

function createHazardTextures(scene: Phaser.Scene): void {
  createTile(scene, "hazard-crush-block", 0x7f4f32, 0xf59e0b, 0x3f2416);
  createTile(scene, "hazard-acid", 0x2f7d32, 0xbef264, 0x14532d);
  if (!scene.textures.exists("hazard-spark")) {
    const graphics = scene.make.graphics({ x: 0, y: 0 }, false);
    graphics.fillStyle(0xf97316, 0.3);
    graphics.fillCircle(16, 16, 15);
    graphics.lineStyle(4, 0xfef08a, 1);
    graphics.lineBetween(16, 2, 11, 15);
    graphics.lineBetween(11, 15, 21, 15);
    graphics.lineBetween(21, 15, 15, 30);
    graphics.generateTexture("hazard-spark", 32, 32);
    graphics.destroy();
  }
  if (!scene.textures.exists("goal-clock-core")) {
    const graphics = scene.make.graphics({ x: 0, y: 0 }, false);
    graphics.fillStyle(0x7c3aed, 0.35);
    graphics.fillCircle(17, 24, 22);
    graphics.lineStyle(4, 0xfacc15, 1);
    graphics.strokeCircle(17, 24, 14);
    graphics.fillStyle(0xfef3c7, 1);
    graphics.fillCircle(17, 24, 5);
    graphics.generateTexture("goal-clock-core", 34, 48);
    graphics.destroy();
  }
}

function createGoal(scene: Phaser.Scene): void {
  if (scene.textures.exists("goal-beacon")) {
    return;
  }
  const graphics = scene.make.graphics({ x: 0, y: 0 }, false);
  graphics.fillStyle(0x1f2937, 1);
  graphics.fillRect(13, 2, 6, 44);
  graphics.fillStyle(0x22c55e, 1);
  graphics.fillRoundedRect(5, 4, 24, 18, 4);
  graphics.fillStyle(0xfef3c7, 1);
  graphics.fillCircle(17, 13, 5);
  graphics.generateTexture("goal-beacon", 34, 48);
  graphics.destroy();
}

function createCheckpoint(scene: Phaser.Scene): void {
  if (scene.textures.exists("checkpoint")) {
    return;
  }
  const graphics = scene.make.graphics({ x: 0, y: 0 }, false);
  graphics.fillStyle(0x334155, 1);
  graphics.fillRect(14, 4, 4, 38);
  graphics.fillStyle(0x38bdf8, 1);
  graphics.fillTriangle(18, 5, 18, 23, 3, 14);
  graphics.generateTexture("checkpoint", 32, 44);
  graphics.destroy();
}

function createBossTextures(scene: Phaser.Scene): void {
  for (let frame = 0; frame < 4; frame += 1) {
    const key = `boss-warden-${frame}`;
    if (scene.textures.exists(key)) {
      continue;
    }
    const graphics = scene.make.graphics({ x: 0, y: 0 }, false);
    graphics.fillStyle(0x0f172a, 0.22);
    graphics.fillEllipse(48, 72, 76, 16);
    graphics.fillStyle(0x7c3aed, 1);
    graphics.fillRoundedRect(12, 18 + Math.sin(frame) * 3, 72, 48, 12);
    graphics.fillStyle(0xfacc15, 1);
    graphics.fillCircle(34, 38, 9);
    graphics.fillCircle(62, 38, 9);
    graphics.fillStyle(0x111827, 1);
    graphics.fillCircle(34, 38, 3);
    graphics.fillCircle(62, 38, 3);
    graphics.lineStyle(5, 0xf97316, 1);
    graphics.strokeCircle(48, 43, 26 + frame);
    graphics.generateTexture(key, 96, 84);
    graphics.destroy();
  }
}

function createUiTextures(scene: Phaser.Scene): void {
  createOrb(scene, "ui-heart", 0xff6b7a, 8);
  createOrb(scene, "ui-cog", 0xf7df66, 8);
}
