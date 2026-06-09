import type { LevelDefinition } from "../schema";

export const LEVEL_01: LevelDefinition = {
  id: "level-01",
  index: 0,
  title: "Brassroot Verge 01",
  chapter: "Brassroot Verge",
  columns: 154,
  rows: 18,
  timeLimit: 190,
  palette: {
    skyTop: 1013358,
    skyBottom: 8246268,
    ground: 2976596,
    groundAccent: 16498468,
    brass: 16498468,
    leaves: 2278750,
    hazard: 16478597,
    glow: 16707722
  },
  playerSpawn: {
    x: 96,
    y: 448
  },
  layout: [
    "..........................................................................................................................................................",
    "..........................................................................................................................................................",
    "..........................................................................................................................................................",
    "..........................................................................................................................................................",
    "..........................................................................................................................................................",
    "..........................................................................................................................................................",
    "..........................................................................................................................................................",
    "...................................###...........................####..........................#####.........................######.......................",
    "..............................#######.......................###...........................####..........................#####.............................",
    ".........................======........................=======.......................===...........................====..........................=........",
    "....................#####.........................######........................#######.......................###...........................####..........",
    "...............####..........................#####.........................######........................#######.......................###................",
    "..........===...........................=W==..........................=====..W......................======.......W................=======.................",
    "................................S...................................S...................................S.................................................",
    "...P...................W...................................W...................................W...................................W................G.....",
    "..............S...................................S...................................S...................................S...............................",
    "^################^..##############^#..#############^##..############^###..###########^####..##########^#####..#########^######..########^################^",
    "##################^.################^.################^.################^.################^.################^.################^.##########################"
  ],
  enemies: [
    {
      id: "enemy-1-1",
      kind: "beetle",
      x: 420,
      y: 448,
      patrolMin: 325,
      patrolMax: 540,
      speed: 44,
      phase: 0
    },
    {
      id: "enemy-1-2",
      kind: "acorn",
      x: 750,
      y: 416,
      patrolMin: 637,
      patrolMax: 892,
      speed: 56,
      phase: 3
    },
    {
      id: "enemy-1-3",
      kind: "lantern",
      x: 1080,
      y: 384,
      patrolMin: 949,
      patrolMax: 1244,
      speed: 68,
      phase: 6
    },
    {
      id: "enemy-1-4",
      kind: "charger",
      x: 1410,
      y: 352,
      patrolMin: 1261,
      patrolMax: 1596,
      speed: 80,
      phase: 9
    },
    {
      id: "enemy-1-5",
      kind: "spiker",
      x: 1740,
      y: 320,
      patrolMin: 1645,
      patrolMax: 1948,
      speed: 92,
      phase: 12
    },
    {
      id: "enemy-1-6",
      kind: "turret",
      x: 2070,
      y: 448,
      patrolMin: 1957,
      patrolMax: 2190,
      speed: 104,
      phase: 15
    },
    {
      id: "enemy-1-7",
      kind: "beetle",
      x: 2400,
      y: 416,
      patrolMin: 2269,
      patrolMax: 2542,
      speed: 44,
      phase: 18
    },
    {
      id: "enemy-1-8",
      kind: "acorn",
      x: 2730,
      y: 384,
      patrolMin: 2581,
      patrolMax: 2894,
      speed: 56,
      phase: 21
    },
    {
      id: "enemy-1-9",
      kind: "lantern",
      x: 3060,
      y: 352,
      patrolMin: 2965,
      patrolMax: 3246,
      speed: 68,
      phase: 24
    },
    {
      id: "enemy-1-10",
      kind: "charger",
      x: 3390,
      y: 320,
      patrolMin: 3277,
      patrolMax: 3598,
      speed: 80,
      phase: 27
    },
    {
      id: "enemy-1-11",
      kind: "spiker",
      x: 3720,
      y: 448,
      patrolMin: 3589,
      patrolMax: 3840,
      speed: 92,
      phase: 30
    },
    {
      id: "enemy-1-12",
      kind: "turret",
      x: 4050,
      y: 416,
      patrolMin: 3901,
      patrolMax: 4192,
      speed: 104,
      phase: 33
    }
  ],
  collectibles: [
    {
      id: "collectible-1-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 180,
      y: 140
    },
    {
      id: "collectible-1-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 250,
      y: 193
    },
    {
      id: "collectible-1-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 320,
      y: 246
    },
    {
      id: "collectible-1-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 390,
      y: 266
    },
    {
      id: "collectible-1-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 460,
      y: 319
    },
    {
      id: "collectible-1-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 530,
      y: 372
    },
    {
      id: "collectible-1-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 600,
      y: 392
    },
    {
      id: "collectible-1-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 670,
      y: 151
    },
    {
      id: "collectible-1-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 740,
      y: 204
    },
    {
      id: "collectible-1-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 810,
      y: 224
    },
    {
      id: "collectible-1-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 880,
      y: 277
    },
    {
      id: "collectible-1-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 950,
      y: 330
    },
    {
      id: "collectible-1-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1020,
      y: 350
    },
    {
      id: "collectible-1-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1090,
      y: 403
    },
    {
      id: "collectible-1-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1160,
      y: 162
    },
    {
      id: "collectible-1-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1230,
      y: 182
    },
    {
      id: "collectible-1-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1300,
      y: 235
    },
    {
      id: "collectible-1-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1370,
      y: 288
    },
    {
      id: "collectible-1-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1440,
      y: 308
    },
    {
      id: "collectible-1-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1510,
      y: 361
    },
    {
      id: "collectible-1-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1580,
      y: 414
    },
    {
      id: "collectible-1-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1650,
      y: 140
    },
    {
      id: "collectible-1-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1720,
      y: 193
    },
    {
      id: "collectible-1-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1790,
      y: 246
    },
    {
      id: "collectible-1-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1860,
      y: 266
    },
    {
      id: "collectible-1-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1930,
      y: 319
    },
    {
      id: "collectible-1-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2000,
      y: 372
    },
    {
      id: "collectible-1-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2070,
      y: 392
    },
    {
      id: "collectible-1-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2140,
      y: 151
    },
    {
      id: "collectible-1-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2210,
      y: 204
    },
    {
      id: "collectible-1-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2280,
      y: 224
    },
    {
      id: "collectible-1-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2350,
      y: 277
    },
    {
      id: "collectible-1-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2420,
      y: 330
    },
    {
      id: "collectible-1-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2490,
      y: 350
    },
    {
      id: "collectible-1-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2560,
      y: 403
    },
    {
      id: "collectible-1-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2630,
      y: 162
    },
    {
      id: "collectible-1-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2700,
      y: 182
    },
    {
      id: "collectible-1-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2770,
      y: 235
    },
    {
      id: "collectible-1-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2840,
      y: 288
    },
    {
      id: "collectible-1-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2910,
      y: 308
    },
    {
      id: "collectible-1-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2980,
      y: 361
    },
    {
      id: "collectible-1-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3050,
      y: 414
    },
    {
      id: "collectible-1-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3120,
      y: 140
    },
    {
      id: "collectible-1-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3190,
      y: 193
    },
    {
      id: "collectible-1-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3260,
      y: 246
    },
    {
      id: "collectible-1-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3330,
      y: 266
    },
    {
      id: "collectible-1-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3400,
      y: 319
    },
    {
      id: "collectible-1-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3470,
      y: 372
    },
    {
      id: "collectible-1-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3540,
      y: 392
    },
    {
      id: "collectible-1-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3610,
      y: 151
    },
    {
      id: "collectible-1-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3680,
      y: 204
    },
    {
      id: "collectible-1-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3750,
      y: 224
    },
    {
      id: "collectible-1-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3820,
      y: 277
    },
    {
      id: "collectible-1-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3890,
      y: 330
    },
    {
      id: "collectible-1-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3960,
      y: 350
    },
    {
      id: "collectible-1-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4030,
      y: 403
    },
    {
      id: "collectible-1-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4100,
      y: 162
    },
    {
      id: "collectible-1-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4170,
      y: 182
    },
    {
      id: "collectible-1-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4240,
      y: 235
    },
    {
      id: "collectible-1-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4310,
      y: 288
    },
    {
      id: "collectible-1-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4380,
      y: 308
    },
    {
      id: "collectible-1-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4450,
      y: 361
    }
  ],
  powerups: [
    {
      id: "powerup-1-1",
      kind: "shield",
      durationMs: 4800,
      x: 500,
      y: 130
    },
    {
      id: "powerup-1-2",
      kind: "springBoots",
      durationMs: 5700,
      x: 1330,
      y: 182
    },
    {
      id: "powerup-1-3",
      kind: "starburst",
      durationMs: 6600,
      x: 2160,
      y: 234
    },
    {
      id: "powerup-1-4",
      kind: "gliderLeaf",
      durationMs: 7500,
      x: 2990,
      y: 286
    },
    {
      id: "powerup-1-5",
      kind: "shield",
      durationMs: 4800,
      x: 3820,
      y: 338
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-1-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 0
    },
    {
      id: "moving-platform-1-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 0.7
    },
    {
      id: "moving-platform-1-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 1.4
    },
    {
      id: "moving-platform-1-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 2.0999999999999996
    },
    {
      id: "moving-platform-1-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 2.8
    },
    {
      id: "moving-platform-1-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 3.5
    },
    {
      id: "moving-platform-1-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 4.199999999999999
    }
  ],
  hazards: [
    {
      id: "hazard-1-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 0
    },
    {
      id: "hazard-1-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 1
    },
    {
      id: "hazard-1-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 2
    },
    {
      id: "hazard-1-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 3
    },
    {
      id: "hazard-1-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 4
    },
    {
      id: "hazard-1-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 5
    },
    {
      id: "hazard-1-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 6
    },
    {
      id: "hazard-1-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 7
    },
    {
      id: "hazard-1-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 8
    },
    {
      id: "hazard-1-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 9
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-1-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-1-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-1-1",
      x: 640,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-1-2",
      x: 1410,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-1-3",
      x: 2180,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-1-4",
      x: 2950,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-1-5",
      x: 3720,
      y: 416,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-1-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-1-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-1-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    }
  ],
  decorations: [
    {
      id: "decor-1-1",
      layer: "near",
      motif: "gear",
      x: 0,
      y: 32,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-2",
      layer: "far",
      motif: "vine",
      x: 97,
      y: 73,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-3",
      layer: "mid",
      motif: "glassBerry",
      x: 194,
      y: 114,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-4",
      layer: "far",
      motif: "cloud",
      x: 291,
      y: 155,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-5",
      layer: "mid",
      motif: "windmill",
      x: 388,
      y: 196,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-6",
      layer: "near",
      motif: "grass",
      x: 485,
      y: 237,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-7",
      layer: "mid",
      motif: "gear",
      x: 582,
      y: 278,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-8",
      layer: "far",
      motif: "vine",
      x: 679,
      y: 319,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-9",
      layer: "mid",
      motif: "glassBerry",
      x: 776,
      y: 360,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-10",
      layer: "far",
      motif: "cloud",
      x: 873,
      y: 401,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-11",
      layer: "near",
      motif: "windmill",
      x: 970,
      y: 442,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-12",
      layer: "far",
      motif: "grass",
      x: 1067,
      y: 53,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-13",
      layer: "mid",
      motif: "gear",
      x: 1164,
      y: 94,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-14",
      layer: "far",
      motif: "vine",
      x: 1261,
      y: 135,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-15",
      layer: "mid",
      motif: "glassBerry",
      x: 1358,
      y: 176,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-16",
      layer: "near",
      motif: "cloud",
      x: 1455,
      y: 217,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-17",
      layer: "mid",
      motif: "windmill",
      x: 1552,
      y: 258,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-18",
      layer: "far",
      motif: "grass",
      x: 1649,
      y: 299,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-19",
      layer: "mid",
      motif: "gear",
      x: 1746,
      y: 340,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-20",
      layer: "far",
      motif: "vine",
      x: 1843,
      y: 381,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-21",
      layer: "near",
      motif: "glassBerry",
      x: 1940,
      y: 422,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-22",
      layer: "far",
      motif: "cloud",
      x: 2037,
      y: 33,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-23",
      layer: "mid",
      motif: "windmill",
      x: 2134,
      y: 74,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-24",
      layer: "far",
      motif: "grass",
      x: 2231,
      y: 115,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-25",
      layer: "mid",
      motif: "gear",
      x: 2328,
      y: 156,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-26",
      layer: "near",
      motif: "vine",
      x: 2425,
      y: 197,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-27",
      layer: "mid",
      motif: "glassBerry",
      x: 2522,
      y: 238,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-28",
      layer: "far",
      motif: "cloud",
      x: 2619,
      y: 279,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-29",
      layer: "mid",
      motif: "windmill",
      x: 2716,
      y: 320,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-30",
      layer: "far",
      motif: "grass",
      x: 2813,
      y: 361,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-31",
      layer: "near",
      motif: "gear",
      x: 2910,
      y: 402,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-32",
      layer: "far",
      motif: "vine",
      x: 3007,
      y: 443,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-33",
      layer: "mid",
      motif: "glassBerry",
      x: 3104,
      y: 54,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-34",
      layer: "far",
      motif: "cloud",
      x: 3201,
      y: 95,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-35",
      layer: "mid",
      motif: "windmill",
      x: 3298,
      y: 136,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-36",
      layer: "near",
      motif: "grass",
      x: 3395,
      y: 177,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-37",
      layer: "mid",
      motif: "gear",
      x: 3492,
      y: 218,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-38",
      layer: "far",
      motif: "vine",
      x: 3589,
      y: 259,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-39",
      layer: "mid",
      motif: "glassBerry",
      x: 3686,
      y: 300,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-40",
      layer: "far",
      motif: "cloud",
      x: 3783,
      y: 341,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-41",
      layer: "near",
      motif: "windmill",
      x: 3880,
      y: 382,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-42",
      layer: "far",
      motif: "grass",
      x: 3977,
      y: 423,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-43",
      layer: "mid",
      motif: "gear",
      x: 4074,
      y: 34,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-44",
      layer: "far",
      motif: "vine",
      x: 4171,
      y: 75,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-45",
      layer: "mid",
      motif: "glassBerry",
      x: 4268,
      y: 116,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-46",
      layer: "near",
      motif: "cloud",
      x: 4365,
      y: 157,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-47",
      layer: "mid",
      motif: "windmill",
      x: 4462,
      y: 198,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-48",
      layer: "far",
      motif: "grass",
      x: 4559,
      y: 239,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-49",
      layer: "mid",
      motif: "gear",
      x: 4656,
      y: 280,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-50",
      layer: "far",
      motif: "vine",
      x: 4753,
      y: 321,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-51",
      layer: "near",
      motif: "glassBerry",
      x: 4850,
      y: 362,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-52",
      layer: "far",
      motif: "cloud",
      x: 19,
      y: 403,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-53",
      layer: "mid",
      motif: "windmill",
      x: 116,
      y: 444,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-54",
      layer: "far",
      motif: "grass",
      x: 213,
      y: 55,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-55",
      layer: "mid",
      motif: "gear",
      x: 310,
      y: 96,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-56",
      layer: "near",
      motif: "vine",
      x: 407,
      y: 137,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-57",
      layer: "mid",
      motif: "glassBerry",
      x: 504,
      y: 178,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-58",
      layer: "far",
      motif: "cloud",
      x: 601,
      y: 219,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-59",
      layer: "mid",
      motif: "windmill",
      x: 698,
      y: 260,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-60",
      layer: "far",
      motif: "grass",
      x: 795,
      y: 301,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-61",
      layer: "near",
      motif: "gear",
      x: 892,
      y: 342,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-62",
      layer: "far",
      motif: "vine",
      x: 989,
      y: 383,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-63",
      layer: "mid",
      motif: "glassBerry",
      x: 1086,
      y: 424,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-64",
      layer: "far",
      motif: "cloud",
      x: 1183,
      y: 35,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-65",
      layer: "mid",
      motif: "windmill",
      x: 1280,
      y: 76,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-66",
      layer: "near",
      motif: "grass",
      x: 1377,
      y: 117,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-67",
      layer: "mid",
      motif: "gear",
      x: 1474,
      y: 158,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-68",
      layer: "far",
      motif: "vine",
      x: 1571,
      y: 199,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-69",
      layer: "mid",
      motif: "glassBerry",
      x: 1668,
      y: 240,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-70",
      layer: "far",
      motif: "cloud",
      x: 1765,
      y: 281,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-71",
      layer: "near",
      motif: "windmill",
      x: 1862,
      y: 322,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-72",
      layer: "far",
      motif: "grass",
      x: 1959,
      y: 363,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-73",
      layer: "mid",
      motif: "gear",
      x: 2056,
      y: 404,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-74",
      layer: "far",
      motif: "vine",
      x: 2153,
      y: 445,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-75",
      layer: "mid",
      motif: "glassBerry",
      x: 2250,
      y: 56,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-76",
      layer: "near",
      motif: "cloud",
      x: 2347,
      y: 97,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-77",
      layer: "mid",
      motif: "windmill",
      x: 2444,
      y: 138,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-78",
      layer: "far",
      motif: "grass",
      x: 2541,
      y: 179,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-79",
      layer: "mid",
      motif: "gear",
      x: 2638,
      y: 220,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-80",
      layer: "far",
      motif: "vine",
      x: 2735,
      y: 261,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-81",
      layer: "near",
      motif: "glassBerry",
      x: 2832,
      y: 302,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-82",
      layer: "far",
      motif: "cloud",
      x: 2929,
      y: 343,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-83",
      layer: "mid",
      motif: "windmill",
      x: 3026,
      y: 384,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-84",
      layer: "far",
      motif: "grass",
      x: 3123,
      y: 425,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-85",
      layer: "mid",
      motif: "gear",
      x: 3220,
      y: 36,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-86",
      layer: "near",
      motif: "vine",
      x: 3317,
      y: 77,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-87",
      layer: "mid",
      motif: "glassBerry",
      x: 3414,
      y: 118,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-88",
      layer: "far",
      motif: "cloud",
      x: 3511,
      y: 159,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-89",
      layer: "mid",
      motif: "windmill",
      x: 3608,
      y: 200,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-90",
      layer: "far",
      motif: "grass",
      x: 3705,
      y: 241,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-91",
      layer: "near",
      motif: "gear",
      x: 3802,
      y: 282,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-92",
      layer: "far",
      motif: "vine",
      x: 3899,
      y: 323,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-93",
      layer: "mid",
      motif: "glassBerry",
      x: 3996,
      y: 364,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-94",
      layer: "far",
      motif: "cloud",
      x: 4093,
      y: 405,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-95",
      layer: "mid",
      motif: "windmill",
      x: 4190,
      y: 446,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-96",
      layer: "near",
      motif: "grass",
      x: 4287,
      y: 57,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-97",
      layer: "mid",
      motif: "gear",
      x: 4384,
      y: 98,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-98",
      layer: "far",
      motif: "vine",
      x: 4481,
      y: 139,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-99",
      layer: "mid",
      motif: "glassBerry",
      x: 4578,
      y: 180,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-100",
      layer: "far",
      motif: "cloud",
      x: 4675,
      y: 221,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-101",
      layer: "near",
      motif: "windmill",
      x: 4772,
      y: 262,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-102",
      layer: "far",
      motif: "grass",
      x: 4869,
      y: 303,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-103",
      layer: "mid",
      motif: "gear",
      x: 38,
      y: 344,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-104",
      layer: "far",
      motif: "vine",
      x: 135,
      y: 385,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-105",
      layer: "mid",
      motif: "glassBerry",
      x: 232,
      y: 426,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-106",
      layer: "near",
      motif: "cloud",
      x: 329,
      y: 37,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-107",
      layer: "mid",
      motif: "windmill",
      x: 426,
      y: 78,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-108",
      layer: "far",
      motif: "grass",
      x: 523,
      y: 119,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-109",
      layer: "mid",
      motif: "gear",
      x: 620,
      y: 160,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-110",
      layer: "far",
      motif: "vine",
      x: 717,
      y: 201,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-111",
      layer: "near",
      motif: "glassBerry",
      x: 814,
      y: 242,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-112",
      layer: "far",
      motif: "cloud",
      x: 911,
      y: 283,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-113",
      layer: "mid",
      motif: "windmill",
      x: 1008,
      y: 324,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-114",
      layer: "far",
      motif: "grass",
      x: 1105,
      y: 365,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-115",
      layer: "mid",
      motif: "gear",
      x: 1202,
      y: 406,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-116",
      layer: "near",
      motif: "vine",
      x: 1299,
      y: 447,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-117",
      layer: "mid",
      motif: "glassBerry",
      x: 1396,
      y: 58,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-118",
      layer: "far",
      motif: "cloud",
      x: 1493,
      y: 99,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-119",
      layer: "mid",
      motif: "windmill",
      x: 1590,
      y: 140,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-120",
      layer: "far",
      motif: "grass",
      x: 1687,
      y: 181,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-121",
      layer: "near",
      motif: "gear",
      x: 1784,
      y: 222,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-122",
      layer: "far",
      motif: "vine",
      x: 1881,
      y: 263,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-123",
      layer: "mid",
      motif: "glassBerry",
      x: 1978,
      y: 304,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-124",
      layer: "far",
      motif: "cloud",
      x: 2075,
      y: 345,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-125",
      layer: "mid",
      motif: "windmill",
      x: 2172,
      y: 386,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-126",
      layer: "near",
      motif: "grass",
      x: 2269,
      y: 427,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-127",
      layer: "mid",
      motif: "gear",
      x: 2366,
      y: 38,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-128",
      layer: "far",
      motif: "vine",
      x: 2463,
      y: 79,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-129",
      layer: "mid",
      motif: "glassBerry",
      x: 2560,
      y: 120,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-130",
      layer: "far",
      motif: "cloud",
      x: 2657,
      y: 161,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-131",
      layer: "near",
      motif: "windmill",
      x: 2754,
      y: 202,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-132",
      layer: "far",
      motif: "grass",
      x: 2851,
      y: 243,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-133",
      layer: "mid",
      motif: "gear",
      x: 2948,
      y: 284,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-134",
      layer: "far",
      motif: "vine",
      x: 3045,
      y: 325,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-135",
      layer: "mid",
      motif: "glassBerry",
      x: 3142,
      y: 366,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-136",
      layer: "near",
      motif: "cloud",
      x: 3239,
      y: 407,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-137",
      layer: "mid",
      motif: "windmill",
      x: 3336,
      y: 448,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-138",
      layer: "far",
      motif: "grass",
      x: 3433,
      y: 59,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-139",
      layer: "mid",
      motif: "gear",
      x: 3530,
      y: 100,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-140",
      layer: "far",
      motif: "vine",
      x: 3627,
      y: 141,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-141",
      layer: "near",
      motif: "glassBerry",
      x: 3724,
      y: 182,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-142",
      layer: "far",
      motif: "cloud",
      x: 3821,
      y: 223,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-143",
      layer: "mid",
      motif: "windmill",
      x: 3918,
      y: 264,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-144",
      layer: "far",
      motif: "grass",
      x: 4015,
      y: 305,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-145",
      layer: "mid",
      motif: "gear",
      x: 4112,
      y: 346,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-146",
      layer: "near",
      motif: "vine",
      x: 4209,
      y: 387,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-147",
      layer: "mid",
      motif: "glassBerry",
      x: 4306,
      y: 428,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-148",
      layer: "far",
      motif: "cloud",
      x: 4403,
      y: 39,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-149",
      layer: "mid",
      motif: "windmill",
      x: 4500,
      y: 80,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-150",
      layer: "far",
      motif: "grass",
      x: 4597,
      y: 121,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-151",
      layer: "near",
      motif: "gear",
      x: 4694,
      y: 162,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-152",
      layer: "far",
      motif: "vine",
      x: 4791,
      y: 203,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-153",
      layer: "mid",
      motif: "glassBerry",
      x: 4888,
      y: 244,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-154",
      layer: "far",
      motif: "cloud",
      x: 57,
      y: 285,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-155",
      layer: "mid",
      motif: "windmill",
      x: 154,
      y: 326,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-156",
      layer: "near",
      motif: "grass",
      x: 251,
      y: 367,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-157",
      layer: "mid",
      motif: "gear",
      x: 348,
      y: 408,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-158",
      layer: "far",
      motif: "vine",
      x: 445,
      y: 449,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-159",
      layer: "mid",
      motif: "glassBerry",
      x: 542,
      y: 60,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-160",
      layer: "far",
      motif: "cloud",
      x: 639,
      y: 101,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-161",
      layer: "near",
      motif: "windmill",
      x: 736,
      y: 142,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-162",
      layer: "far",
      motif: "grass",
      x: 833,
      y: 183,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-163",
      layer: "mid",
      motif: "gear",
      x: 930,
      y: 224,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-164",
      layer: "far",
      motif: "vine",
      x: 1027,
      y: 265,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-165",
      layer: "mid",
      motif: "glassBerry",
      x: 1124,
      y: 306,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-166",
      layer: "near",
      motif: "cloud",
      x: 1221,
      y: 347,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-167",
      layer: "mid",
      motif: "windmill",
      x: 1318,
      y: 388,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-168",
      layer: "far",
      motif: "grass",
      x: 1415,
      y: 429,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-169",
      layer: "mid",
      motif: "gear",
      x: 1512,
      y: 40,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-170",
      layer: "far",
      motif: "vine",
      x: 1609,
      y: 81,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-1-171",
      layer: "near",
      motif: "glassBerry",
      x: 1706,
      y: 122,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-172",
      layer: "far",
      motif: "cloud",
      x: 1803,
      y: 163,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-1-173",
      layer: "mid",
      motif: "windmill",
      x: 1900,
      y: 204,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-1-174",
      layer: "far",
      motif: "grass",
      x: 1997,
      y: 245,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-1-175",
      layer: "mid",
      motif: "gear",
      x: 2094,
      y: 286,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-1-176",
      layer: "near",
      motif: "vine",
      x: 2191,
      y: 327,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-1-177",
      layer: "mid",
      motif: "glassBerry",
      x: 2288,
      y: 368,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-1-178",
      layer: "far",
      motif: "cloud",
      x: 2385,
      y: 409,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-1-179",
      layer: "mid",
      motif: "windmill",
      x: 2482,
      y: 450,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-1-180",
      layer: "far",
      motif: "grass",
      x: 2579,
      y: 61,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-1",
    x: 4736,
    y: 448,
    nextLevelId: "level-02"
  }
};
