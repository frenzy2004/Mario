import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "src", "game", "levels", "generated");
mkdirSync(outDir, { recursive: true });

const levelCount = 42;
const rows = 18;
const columns = 154;
const enemyKinds = ["beetle", "acorn", "lantern", "charger", "spiker", "turret"];
const powerups = ["shield", "springBoots", "starburst", "gliderLeaf"];
const motifs = ["gear", "vine", "glassBerry", "cloud", "windmill", "grass"];
const chapters = [
  "Brassroot Verge",
  "Glassberry Lift",
  "Windmill Tangle",
  "Moonlit Gearway",
  "Aurora Conservatory",
  "The Warden's Crown",
];

const exports = [];
for (let index = 0; index < levelCount; index += 1) {
  const level = createLevel(index, false);
  const constName = `LEVEL_${String(index + 1).padStart(2, "0")}`;
  exports.push({ constName, file: `level-${String(index + 1).padStart(2, "0")}.ts` });
  writeFileSync(join(outDir, `level-${String(index + 1).padStart(2, "0")}.ts`), renderLevel(level, constName));
}

const finalLevel = createLevel(levelCount, true);
exports.push({ constName: "FINAL_CHALLENGE", file: "final-challenge.ts" });
writeFileSync(join(outDir, "final-challenge.ts"), renderLevel(finalLevel, "FINAL_CHALLENGE"));

const indexSource = [
  ...exports.map(({ constName, file }) => `import { ${constName} } from "./${file.replace(".ts", "")}";`),
  'import type { LevelDefinition } from "../schema";',
  "",
  "export const ALL_LEVELS: LevelDefinition[] = [",
  ...exports.map(({ constName }) => `  ${constName},`),
  "];",
  "",
].join("\n");
writeFileSync(join(outDir, "index.ts"), indexSource);

function createLevel(index, final) {
  const chapter = chapters[Math.min(chapters.length - 1, Math.floor(index / 7))];
  const title = final
    ? "Final Challenge: Crown of Turning Leaves"
    : `${chapter} ${String((index % 7) + 1).padStart(2, "0")}`;
  const layout = createLayout(index, final);
  const baseY = (rows - 4) * 32;
  const enemies = createEnemies(index, final);
  const collectibles = createCollectibles(index, final);
  const powerupDefs = createPowerups(index, final);
  const movingPlatforms = createMovingPlatforms(index, final);
  const hazards = createHazards(index, final);
  const checkpoints = [0.36, 0.62].map((ratio, checkpointIndex) => ({
    id: `checkpoint-${index + 1}-${checkpointIndex + 1}`,
    label: checkpointIndex === 0 ? "Lower arbor" : "Upper arbor",
    x: Math.floor(columns * 32 * ratio),
    y: baseY,
  }));
  const springs = Array.from({ length: final ? 10 : 5 + (index % 4) }, (_, springIndex) => ({
    id: `spring-${index + 1}-${springIndex + 1}`,
    x: 640 + springIndex * 770 + (index % 3) * 34,
    y: baseY - ((springIndex % 2) + 1) * 32,
    power: 1.1 + (springIndex % 3) * 0.18,
  }));
  const windZones = Array.from({ length: final ? 8 : 3 + (index % 4) }, (_, zoneIndex) => ({
    id: `wind-${index + 1}-${zoneIndex + 1}`,
    x: 820 + zoneIndex * 960,
    y: 120 + (zoneIndex % 3) * 60,
    width: 160,
    height: 150,
    forceX: zoneIndex % 2 === 0 ? 2.1 : -1.4,
    forceY: -7.5 - (index % 3),
  }));
  const decorations = createDecorations(index, final);
  return {
    id: final ? "final-crown" : `level-${String(index + 1).padStart(2, "0")}`,
    index,
    title,
    chapter,
    columns,
    rows,
    timeLimit: final ? 520 : 190 + (index % 8) * 18,
    palette: paletteFor(index, final),
    playerSpawn: { x: 96, y: baseY },
    layout,
    enemies,
    collectibles,
    powerups: powerupDefs,
    movingPlatforms,
    hazards,
    checkpoints,
    springs,
    windZones,
    decorations,
    goal: {
      id: `goal-${index + 1}`,
      x: (columns - 6) * 32,
      y: baseY,
      nextLevelId: final ? undefined : index + 1 < levelCount ? `level-${String(index + 2).padStart(2, "0")}` : "final-crown",
    },
    boss: final
      ? {
          id: "warden-of-turning-leaves",
          x: (columns - 24) * 32,
          y: baseY,
          health: 7,
          arenaLeft: (columns - 42) * 32,
          arenaRight: (columns - 9) * 32,
        }
      : undefined,
  };
}

function createLayout(index, final) {
  const grid = Array.from({ length: rows }, () => Array.from({ length: columns }, () => "."));
  for (let x = 0; x < columns; x += 1) {
    grid[rows - 1][x] = "#";
    grid[rows - 2][x] = x % 17 === 0 ? "^" : "#";
  }
  grid[rows - 4][3] = "P";
  grid[rows - 4][columns - 6] = "G";
  const gapEvery = final ? 15 : 18 - (index % 5);
  for (let x = 18; x < columns - 18; x += gapEvery) {
    const gapWidth = 2 + ((x + index) % 3);
    for (let g = 0; g < gapWidth; g += 1) {
      grid[rows - 2][x + g] = ".";
      grid[rows - 1][x + g] = ".";
      if ((x + g + index) % 2 === 0) {
        grid[rows - 1][x + g] = "^";
      }
    }
  }
  for (let segment = 0; segment < 28; segment += 1) {
    const start = 10 + segment * 5 + (index % 4);
    const y = rows - 6 - ((segment + index) % 6);
    const length = 3 + ((segment + index) % 5);
    for (let x = start; x < Math.min(columns - 8, start + length); x += 1) {
      grid[y][x] = segment % 3 === 0 ? "=" : "#";
    }
  }
  for (let i = 0; i < 14; i += 1) {
    const x = 14 + i * 9 + (index % 6);
    const y = rows - 3 - (i % 4);
    grid[y][x] = i % 2 === 0 ? "S" : "W";
  }
  if (final) {
    for (let x = columns - 45; x < columns - 8; x += 1) {
      grid[rows - 5][x] = x % 3 === 0 ? "=" : ".";
    }
    grid[rows - 4][columns - 22] = "B";
  }
  return grid.map((row) => row.join(""));
}

function createEnemies(index, final) {
  const count = final ? 34 : 12 + (index % 8);
  return Array.from({ length: count }, (_, enemyIndex) => {
    const x = 420 + enemyIndex * 330 + (index % 5) * 28;
    const y = (rows - 4 - (enemyIndex % 5)) * 32;
    const kind = enemyKinds[(enemyIndex + index) % enemyKinds.length];
    return {
      id: `enemy-${index + 1}-${enemyIndex + 1}`,
      kind,
      x,
      y,
      patrolMin: Math.max(160, x - 95 - (enemyIndex % 4) * 18),
      patrolMax: Math.min(columns * 32 - 180, x + 120 + (enemyIndex % 5) * 22),
      speed: 44 + ((enemyIndex + index) % 6) * 12,
      phase: enemyIndex * 3 + index,
    };
  });
}

function createCollectibles(index, final) {
  const count = final ? 128 : 62 + (index % 9) * 4;
  return Array.from({ length: count }, (_, collectibleIndex) => {
    const lane = collectibleIndex % 7;
    const kind =
      collectibleIndex % 31 === 0 ? "hiddenSeed" : collectibleIndex % 17 === 0 ? "largeCog" : "glimmer";
    return {
      id: `collectible-${index + 1}-${collectibleIndex + 1}`,
      kind,
      score: kind === "glimmer" ? 100 : kind === "largeCog" ? 1000 : 2000,
      hidden: kind === "hiddenSeed",
      x: 180 + collectibleIndex * 70 + (index % 4) * 12,
      y: 140 + lane * 42 + ((collectibleIndex + index) % 3) * 11,
    };
  });
}

function createPowerups(index, final) {
  const count = final ? 14 : 5 + (index % 4);
  return Array.from({ length: count }, (_, powerIndex) => ({
    id: `powerup-${index + 1}-${powerIndex + 1}`,
    kind: powerups[(powerIndex + index) % powerups.length],
    durationMs: 4800 + (powerIndex % 4) * 900,
    x: 500 + powerIndex * 830 + (index % 6) * 30,
    y: 130 + (powerIndex % 5) * 52,
  }));
}

function createMovingPlatforms(index, final) {
  const count = final ? 24 : 7 + (index % 5);
  return Array.from({ length: count }, (_, platformIndex) => ({
    id: `moving-platform-${index + 1}-${platformIndex + 1}`,
    x: 740 + platformIndex * 530,
    y: 250 + (platformIndex % 5) * 42,
    widthTiles: 2 + (platformIndex % 4),
    travelX: platformIndex % 2 === 0 ? 110 : 0,
    travelY: platformIndex % 2 === 0 ? 24 : 86,
    speed: 0.75 + (platformIndex % 5) * 0.16,
    phase: platformIndex * 0.7 + index * 0.1,
  }));
}

function createHazards(index, final) {
  const count = final ? 38 : 10 + (index % 7);
  return Array.from({ length: count }, (_, hazardIndex) => ({
    id: `hazard-${index + 1}-${hazardIndex + 1}`,
    kind: hazardIndex % 5 === 0 ? "crushBlock" : hazardIndex % 3 === 0 ? "spark" : "thorn",
    x: 620 + hazardIndex * 360,
    y: (rows - 3) * 32 - (hazardIndex % 3) * 34,
    width: 30 + (hazardIndex % 2) * 34,
    height: 26,
    damage: 1,
    phase: hazardIndex + index,
  }));
}

function createDecorations(index, final) {
  const count = final ? 260 : 180;
  return Array.from({ length: count }, (_, decorationIndex) => {
    const layer = decorationIndex % 5 === 0 ? "near" : decorationIndex % 2 === 0 ? "mid" : "far";
    return {
      id: `decor-${index + 1}-${decorationIndex + 1}`,
      layer,
      motif: motifs[(decorationIndex + index) % motifs.length],
      x: (decorationIndex * 97 + index * 23) % (columns * 32),
      y: 32 + ((decorationIndex * 41 + index * 13) % 430),
      scale: Number((0.45 + (decorationIndex % 9) * 0.11).toFixed(2)),
      tint: [0x22c55e, 0xf59e0b, 0x38bdf8, 0xfb7185, 0xa78bfa][(decorationIndex + index) % 5],
      parallax: layer === "far" ? 0.18 : layer === "mid" ? 0.42 : 0.82,
    };
  });
}

function paletteFor(index, final) {
  if (final) {
    return {
      skyTop: 0x130f2f,
      skyBottom: 0x43216b,
      ground: 0x2d6b54,
      groundAccent: 0xf59e0b,
      brass: 0xfbbf24,
      leaves: 0x22c55e,
      hazard: 0xfb7185,
      glow: 0xfef08a,
    };
  }
  const palettes = [
    [0x0f766e, 0x7dd3fc, 0x2d6b54, 0xfbbf24, 0x22c55e, 0xfb7185, 0xfef08a],
    [0x1d4ed8, 0x93c5fd, 0x365314, 0xeab308, 0x84cc16, 0xf97316, 0xfef3c7],
    [0x4c1d95, 0xc4b5fd, 0x14532d, 0xf59e0b, 0x10b981, 0xef4444, 0xa7f3d0],
    [0x0f172a, 0x38bdf8, 0x164e63, 0xfacc15, 0x2dd4bf, 0xf43f5e, 0xf0f9ff],
  ];
  const palette = palettes[index % palettes.length];
  return {
    skyTop: palette[0],
    skyBottom: palette[1],
    ground: palette[2],
    groundAccent: palette[3],
    brass: palette[3],
    leaves: palette[4],
    hazard: palette[5],
    glow: palette[6],
  };
}

function renderLevel(level, constName) {
  return `import type { LevelDefinition } from "../schema";

export const ${constName}: LevelDefinition = ${stringify(level)};
`;
}

function stringify(value) {
  return JSON.stringify(value, null, 2).replace(/"([a-zA-Z0-9_]+)":/g, "$1:");
}
