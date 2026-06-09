import type { LevelDefinition } from "../schema";

export const LEVEL_29: LevelDefinition = {
  id: "level-29",
  index: 28,
  title: "Aurora Conservatory 01",
  chapter: "Aurora Conservatory",
  columns: 154,
  rows: 18,
  timeLimit: 262,
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
    "...............#######.......................###...........................####..........................#####.........................######.............",
    "..........======........................=======.......................===...........................====..........................=====...................",
    "...................................######........................#######.......................###...........................####.........................",
    "..............................#####.........................######........................#######.......................###...............................",
    ".........................====..........................=====.........................======........................=======.......................=........",
    "....................###......................W....####..........................#W###.........................######.W......................######........",
    "....................................S...................................S...................................S.............................................",
    "...P.......................W...................................W...................................W...................................W............G.....",
    "..................S...................................S...................................S...................................S...........................",
    "^################^...############...############...^###########...##^#########...####^#######...######^#####...########^###...##########^################^",
    "##################^.^############.^.############^.^############.^.############^.^############.^.############^.^############.^.############################"
  ],
  enemies: [
    {
      id: "enemy-29-1",
      kind: "spiker",
      x: 504,
      y: 448,
      patrolMin: 409,
      patrolMax: 624,
      speed: 92,
      phase: 28
    },
    {
      id: "enemy-29-2",
      kind: "turret",
      x: 834,
      y: 416,
      patrolMin: 721,
      patrolMax: 976,
      speed: 104,
      phase: 31
    },
    {
      id: "enemy-29-3",
      kind: "beetle",
      x: 1164,
      y: 384,
      patrolMin: 1033,
      patrolMax: 1328,
      speed: 44,
      phase: 34
    },
    {
      id: "enemy-29-4",
      kind: "acorn",
      x: 1494,
      y: 352,
      patrolMin: 1345,
      patrolMax: 1680,
      speed: 56,
      phase: 37
    },
    {
      id: "enemy-29-5",
      kind: "lantern",
      x: 1824,
      y: 320,
      patrolMin: 1729,
      patrolMax: 2032,
      speed: 68,
      phase: 40
    },
    {
      id: "enemy-29-6",
      kind: "charger",
      x: 2154,
      y: 448,
      patrolMin: 2041,
      patrolMax: 2274,
      speed: 80,
      phase: 43
    },
    {
      id: "enemy-29-7",
      kind: "spiker",
      x: 2484,
      y: 416,
      patrolMin: 2353,
      patrolMax: 2626,
      speed: 92,
      phase: 46
    },
    {
      id: "enemy-29-8",
      kind: "turret",
      x: 2814,
      y: 384,
      patrolMin: 2665,
      patrolMax: 2978,
      speed: 104,
      phase: 49
    },
    {
      id: "enemy-29-9",
      kind: "beetle",
      x: 3144,
      y: 352,
      patrolMin: 3049,
      patrolMax: 3330,
      speed: 44,
      phase: 52
    },
    {
      id: "enemy-29-10",
      kind: "acorn",
      x: 3474,
      y: 320,
      patrolMin: 3361,
      patrolMax: 3682,
      speed: 56,
      phase: 55
    },
    {
      id: "enemy-29-11",
      kind: "lantern",
      x: 3804,
      y: 448,
      patrolMin: 3673,
      patrolMax: 3924,
      speed: 68,
      phase: 58
    },
    {
      id: "enemy-29-12",
      kind: "charger",
      x: 4134,
      y: 416,
      patrolMin: 3985,
      patrolMax: 4276,
      speed: 80,
      phase: 61
    },
    {
      id: "enemy-29-13",
      kind: "spiker",
      x: 4464,
      y: 384,
      patrolMin: 4369,
      patrolMax: 4628,
      speed: 92,
      phase: 64
    },
    {
      id: "enemy-29-14",
      kind: "turret",
      x: 4794,
      y: 352,
      patrolMin: 4681,
      patrolMax: 4748,
      speed: 104,
      phase: 67
    },
    {
      id: "enemy-29-15",
      kind: "beetle",
      x: 5124,
      y: 320,
      patrolMin: 4993,
      patrolMax: 4748,
      speed: 44,
      phase: 70
    },
    {
      id: "enemy-29-16",
      kind: "acorn",
      x: 5454,
      y: 448,
      patrolMin: 5305,
      patrolMax: 4748,
      speed: 56,
      phase: 73
    }
  ],
  collectibles: [
    {
      id: "collectible-29-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 180,
      y: 151
    },
    {
      id: "collectible-29-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 250,
      y: 204
    },
    {
      id: "collectible-29-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 320,
      y: 224
    },
    {
      id: "collectible-29-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 390,
      y: 277
    },
    {
      id: "collectible-29-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 460,
      y: 330
    },
    {
      id: "collectible-29-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 530,
      y: 350
    },
    {
      id: "collectible-29-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 600,
      y: 403
    },
    {
      id: "collectible-29-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 670,
      y: 162
    },
    {
      id: "collectible-29-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 740,
      y: 182
    },
    {
      id: "collectible-29-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 810,
      y: 235
    },
    {
      id: "collectible-29-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 880,
      y: 288
    },
    {
      id: "collectible-29-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 950,
      y: 308
    },
    {
      id: "collectible-29-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1020,
      y: 361
    },
    {
      id: "collectible-29-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1090,
      y: 414
    },
    {
      id: "collectible-29-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1160,
      y: 140
    },
    {
      id: "collectible-29-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1230,
      y: 193
    },
    {
      id: "collectible-29-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1300,
      y: 246
    },
    {
      id: "collectible-29-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1370,
      y: 266
    },
    {
      id: "collectible-29-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1440,
      y: 319
    },
    {
      id: "collectible-29-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1510,
      y: 372
    },
    {
      id: "collectible-29-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1580,
      y: 392
    },
    {
      id: "collectible-29-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1650,
      y: 151
    },
    {
      id: "collectible-29-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1720,
      y: 204
    },
    {
      id: "collectible-29-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1790,
      y: 224
    },
    {
      id: "collectible-29-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1860,
      y: 277
    },
    {
      id: "collectible-29-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1930,
      y: 330
    },
    {
      id: "collectible-29-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2000,
      y: 350
    },
    {
      id: "collectible-29-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2070,
      y: 403
    },
    {
      id: "collectible-29-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2140,
      y: 162
    },
    {
      id: "collectible-29-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2210,
      y: 182
    },
    {
      id: "collectible-29-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2280,
      y: 235
    },
    {
      id: "collectible-29-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2350,
      y: 288
    },
    {
      id: "collectible-29-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2420,
      y: 308
    },
    {
      id: "collectible-29-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2490,
      y: 361
    },
    {
      id: "collectible-29-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2560,
      y: 414
    },
    {
      id: "collectible-29-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2630,
      y: 140
    },
    {
      id: "collectible-29-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2700,
      y: 193
    },
    {
      id: "collectible-29-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2770,
      y: 246
    },
    {
      id: "collectible-29-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2840,
      y: 266
    },
    {
      id: "collectible-29-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2910,
      y: 319
    },
    {
      id: "collectible-29-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2980,
      y: 372
    },
    {
      id: "collectible-29-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3050,
      y: 392
    },
    {
      id: "collectible-29-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3120,
      y: 151
    },
    {
      id: "collectible-29-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3190,
      y: 204
    },
    {
      id: "collectible-29-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3260,
      y: 224
    },
    {
      id: "collectible-29-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3330,
      y: 277
    },
    {
      id: "collectible-29-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3400,
      y: 330
    },
    {
      id: "collectible-29-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3470,
      y: 350
    },
    {
      id: "collectible-29-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3540,
      y: 403
    },
    {
      id: "collectible-29-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3610,
      y: 162
    },
    {
      id: "collectible-29-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3680,
      y: 182
    },
    {
      id: "collectible-29-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3750,
      y: 235
    },
    {
      id: "collectible-29-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3820,
      y: 288
    },
    {
      id: "collectible-29-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3890,
      y: 308
    },
    {
      id: "collectible-29-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3960,
      y: 361
    },
    {
      id: "collectible-29-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4030,
      y: 414
    },
    {
      id: "collectible-29-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4100,
      y: 140
    },
    {
      id: "collectible-29-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4170,
      y: 193
    },
    {
      id: "collectible-29-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4240,
      y: 246
    },
    {
      id: "collectible-29-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4310,
      y: 266
    },
    {
      id: "collectible-29-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4380,
      y: 319
    },
    {
      id: "collectible-29-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4450,
      y: 372
    },
    {
      id: "collectible-29-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4520,
      y: 392
    },
    {
      id: "collectible-29-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4590,
      y: 151
    },
    {
      id: "collectible-29-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4660,
      y: 204
    },
    {
      id: "collectible-29-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4730,
      y: 224
    }
  ],
  powerups: [
    {
      id: "powerup-29-1",
      kind: "shield",
      durationMs: 4800,
      x: 620,
      y: 130
    },
    {
      id: "powerup-29-2",
      kind: "springBoots",
      durationMs: 5700,
      x: 1450,
      y: 182
    },
    {
      id: "powerup-29-3",
      kind: "starburst",
      durationMs: 6600,
      x: 2280,
      y: 234
    },
    {
      id: "powerup-29-4",
      kind: "gliderLeaf",
      durationMs: 7500,
      x: 3110,
      y: 286
    },
    {
      id: "powerup-29-5",
      kind: "shield",
      durationMs: 4800,
      x: 3940,
      y: 338
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-29-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 2.8000000000000003
    },
    {
      id: "moving-platform-29-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 3.5
    },
    {
      id: "moving-platform-29-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 4.2
    },
    {
      id: "moving-platform-29-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 4.9
    },
    {
      id: "moving-platform-29-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 5.6
    },
    {
      id: "moving-platform-29-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 6.300000000000001
    },
    {
      id: "moving-platform-29-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 7
    },
    {
      id: "moving-platform-29-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 7.699999999999999
    },
    {
      id: "moving-platform-29-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 8.4
    },
    {
      id: "moving-platform-29-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 9.1
    }
  ],
  hazards: [
    {
      id: "hazard-29-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 28
    },
    {
      id: "hazard-29-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 29
    },
    {
      id: "hazard-29-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 30
    },
    {
      id: "hazard-29-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 31
    },
    {
      id: "hazard-29-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 32
    },
    {
      id: "hazard-29-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 33
    },
    {
      id: "hazard-29-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 34
    },
    {
      id: "hazard-29-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 35
    },
    {
      id: "hazard-29-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 36
    },
    {
      id: "hazard-29-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 37
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-29-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-29-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-29-1",
      x: 674,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-29-2",
      x: 1444,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-29-3",
      x: 2214,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-29-4",
      x: 2984,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-29-5",
      x: 3754,
      y: 416,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-29-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-29-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-29-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    }
  ],
  decorations: [
    {
      id: "decor-29-1",
      layer: "near",
      motif: "windmill",
      x: 644,
      y: 396,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-2",
      layer: "far",
      motif: "grass",
      x: 741,
      y: 437,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-3",
      layer: "mid",
      motif: "gear",
      x: 838,
      y: 48,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-4",
      layer: "far",
      motif: "vine",
      x: 935,
      y: 89,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-5",
      layer: "mid",
      motif: "glassBerry",
      x: 1032,
      y: 130,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-6",
      layer: "near",
      motif: "cloud",
      x: 1129,
      y: 171,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-7",
      layer: "mid",
      motif: "windmill",
      x: 1226,
      y: 212,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-8",
      layer: "far",
      motif: "grass",
      x: 1323,
      y: 253,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-9",
      layer: "mid",
      motif: "gear",
      x: 1420,
      y: 294,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-10",
      layer: "far",
      motif: "vine",
      x: 1517,
      y: 335,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-11",
      layer: "near",
      motif: "glassBerry",
      x: 1614,
      y: 376,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-12",
      layer: "far",
      motif: "cloud",
      x: 1711,
      y: 417,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-13",
      layer: "mid",
      motif: "windmill",
      x: 1808,
      y: 458,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-14",
      layer: "far",
      motif: "grass",
      x: 1905,
      y: 69,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-15",
      layer: "mid",
      motif: "gear",
      x: 2002,
      y: 110,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-16",
      layer: "near",
      motif: "vine",
      x: 2099,
      y: 151,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-17",
      layer: "mid",
      motif: "glassBerry",
      x: 2196,
      y: 192,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-18",
      layer: "far",
      motif: "cloud",
      x: 2293,
      y: 233,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-19",
      layer: "mid",
      motif: "windmill",
      x: 2390,
      y: 274,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-20",
      layer: "far",
      motif: "grass",
      x: 2487,
      y: 315,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-21",
      layer: "near",
      motif: "gear",
      x: 2584,
      y: 356,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-22",
      layer: "far",
      motif: "vine",
      x: 2681,
      y: 397,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-23",
      layer: "mid",
      motif: "glassBerry",
      x: 2778,
      y: 438,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-24",
      layer: "far",
      motif: "cloud",
      x: 2875,
      y: 49,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-25",
      layer: "mid",
      motif: "windmill",
      x: 2972,
      y: 90,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-26",
      layer: "near",
      motif: "grass",
      x: 3069,
      y: 131,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-27",
      layer: "mid",
      motif: "gear",
      x: 3166,
      y: 172,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-28",
      layer: "far",
      motif: "vine",
      x: 3263,
      y: 213,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-29",
      layer: "mid",
      motif: "glassBerry",
      x: 3360,
      y: 254,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-30",
      layer: "far",
      motif: "cloud",
      x: 3457,
      y: 295,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-31",
      layer: "near",
      motif: "windmill",
      x: 3554,
      y: 336,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-32",
      layer: "far",
      motif: "grass",
      x: 3651,
      y: 377,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-33",
      layer: "mid",
      motif: "gear",
      x: 3748,
      y: 418,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-34",
      layer: "far",
      motif: "vine",
      x: 3845,
      y: 459,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-35",
      layer: "mid",
      motif: "glassBerry",
      x: 3942,
      y: 70,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-36",
      layer: "near",
      motif: "cloud",
      x: 4039,
      y: 111,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-37",
      layer: "mid",
      motif: "windmill",
      x: 4136,
      y: 152,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-38",
      layer: "far",
      motif: "grass",
      x: 4233,
      y: 193,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-39",
      layer: "mid",
      motif: "gear",
      x: 4330,
      y: 234,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-40",
      layer: "far",
      motif: "vine",
      x: 4427,
      y: 275,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-41",
      layer: "near",
      motif: "glassBerry",
      x: 4524,
      y: 316,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-42",
      layer: "far",
      motif: "cloud",
      x: 4621,
      y: 357,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-43",
      layer: "mid",
      motif: "windmill",
      x: 4718,
      y: 398,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-44",
      layer: "far",
      motif: "grass",
      x: 4815,
      y: 439,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-45",
      layer: "mid",
      motif: "gear",
      x: 4912,
      y: 50,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-46",
      layer: "near",
      motif: "vine",
      x: 81,
      y: 91,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-47",
      layer: "mid",
      motif: "glassBerry",
      x: 178,
      y: 132,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-48",
      layer: "far",
      motif: "cloud",
      x: 275,
      y: 173,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-49",
      layer: "mid",
      motif: "windmill",
      x: 372,
      y: 214,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-50",
      layer: "far",
      motif: "grass",
      x: 469,
      y: 255,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-51",
      layer: "near",
      motif: "gear",
      x: 566,
      y: 296,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-52",
      layer: "far",
      motif: "vine",
      x: 663,
      y: 337,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-53",
      layer: "mid",
      motif: "glassBerry",
      x: 760,
      y: 378,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-54",
      layer: "far",
      motif: "cloud",
      x: 857,
      y: 419,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-55",
      layer: "mid",
      motif: "windmill",
      x: 954,
      y: 460,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-56",
      layer: "near",
      motif: "grass",
      x: 1051,
      y: 71,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-57",
      layer: "mid",
      motif: "gear",
      x: 1148,
      y: 112,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-58",
      layer: "far",
      motif: "vine",
      x: 1245,
      y: 153,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-59",
      layer: "mid",
      motif: "glassBerry",
      x: 1342,
      y: 194,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-60",
      layer: "far",
      motif: "cloud",
      x: 1439,
      y: 235,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-61",
      layer: "near",
      motif: "windmill",
      x: 1536,
      y: 276,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-62",
      layer: "far",
      motif: "grass",
      x: 1633,
      y: 317,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-63",
      layer: "mid",
      motif: "gear",
      x: 1730,
      y: 358,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-64",
      layer: "far",
      motif: "vine",
      x: 1827,
      y: 399,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-65",
      layer: "mid",
      motif: "glassBerry",
      x: 1924,
      y: 440,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-66",
      layer: "near",
      motif: "cloud",
      x: 2021,
      y: 51,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-67",
      layer: "mid",
      motif: "windmill",
      x: 2118,
      y: 92,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-68",
      layer: "far",
      motif: "grass",
      x: 2215,
      y: 133,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-69",
      layer: "mid",
      motif: "gear",
      x: 2312,
      y: 174,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-70",
      layer: "far",
      motif: "vine",
      x: 2409,
      y: 215,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-71",
      layer: "near",
      motif: "glassBerry",
      x: 2506,
      y: 256,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-72",
      layer: "far",
      motif: "cloud",
      x: 2603,
      y: 297,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-73",
      layer: "mid",
      motif: "windmill",
      x: 2700,
      y: 338,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-74",
      layer: "far",
      motif: "grass",
      x: 2797,
      y: 379,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-75",
      layer: "mid",
      motif: "gear",
      x: 2894,
      y: 420,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-76",
      layer: "near",
      motif: "vine",
      x: 2991,
      y: 461,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-77",
      layer: "mid",
      motif: "glassBerry",
      x: 3088,
      y: 72,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-78",
      layer: "far",
      motif: "cloud",
      x: 3185,
      y: 113,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-79",
      layer: "mid",
      motif: "windmill",
      x: 3282,
      y: 154,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-80",
      layer: "far",
      motif: "grass",
      x: 3379,
      y: 195,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-81",
      layer: "near",
      motif: "gear",
      x: 3476,
      y: 236,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-82",
      layer: "far",
      motif: "vine",
      x: 3573,
      y: 277,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-83",
      layer: "mid",
      motif: "glassBerry",
      x: 3670,
      y: 318,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-84",
      layer: "far",
      motif: "cloud",
      x: 3767,
      y: 359,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-85",
      layer: "mid",
      motif: "windmill",
      x: 3864,
      y: 400,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-86",
      layer: "near",
      motif: "grass",
      x: 3961,
      y: 441,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-87",
      layer: "mid",
      motif: "gear",
      x: 4058,
      y: 52,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-88",
      layer: "far",
      motif: "vine",
      x: 4155,
      y: 93,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-89",
      layer: "mid",
      motif: "glassBerry",
      x: 4252,
      y: 134,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-90",
      layer: "far",
      motif: "cloud",
      x: 4349,
      y: 175,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-91",
      layer: "near",
      motif: "windmill",
      x: 4446,
      y: 216,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-92",
      layer: "far",
      motif: "grass",
      x: 4543,
      y: 257,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-93",
      layer: "mid",
      motif: "gear",
      x: 4640,
      y: 298,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-94",
      layer: "far",
      motif: "vine",
      x: 4737,
      y: 339,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-95",
      layer: "mid",
      motif: "glassBerry",
      x: 4834,
      y: 380,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-96",
      layer: "near",
      motif: "cloud",
      x: 3,
      y: 421,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-97",
      layer: "mid",
      motif: "windmill",
      x: 100,
      y: 32,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-98",
      layer: "far",
      motif: "grass",
      x: 197,
      y: 73,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-99",
      layer: "mid",
      motif: "gear",
      x: 294,
      y: 114,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-100",
      layer: "far",
      motif: "vine",
      x: 391,
      y: 155,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-101",
      layer: "near",
      motif: "glassBerry",
      x: 488,
      y: 196,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-102",
      layer: "far",
      motif: "cloud",
      x: 585,
      y: 237,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-103",
      layer: "mid",
      motif: "windmill",
      x: 682,
      y: 278,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-104",
      layer: "far",
      motif: "grass",
      x: 779,
      y: 319,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-105",
      layer: "mid",
      motif: "gear",
      x: 876,
      y: 360,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-106",
      layer: "near",
      motif: "vine",
      x: 973,
      y: 401,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-107",
      layer: "mid",
      motif: "glassBerry",
      x: 1070,
      y: 442,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-108",
      layer: "far",
      motif: "cloud",
      x: 1167,
      y: 53,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-109",
      layer: "mid",
      motif: "windmill",
      x: 1264,
      y: 94,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-110",
      layer: "far",
      motif: "grass",
      x: 1361,
      y: 135,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-111",
      layer: "near",
      motif: "gear",
      x: 1458,
      y: 176,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-112",
      layer: "far",
      motif: "vine",
      x: 1555,
      y: 217,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-113",
      layer: "mid",
      motif: "glassBerry",
      x: 1652,
      y: 258,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-114",
      layer: "far",
      motif: "cloud",
      x: 1749,
      y: 299,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-115",
      layer: "mid",
      motif: "windmill",
      x: 1846,
      y: 340,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-116",
      layer: "near",
      motif: "grass",
      x: 1943,
      y: 381,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-117",
      layer: "mid",
      motif: "gear",
      x: 2040,
      y: 422,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-118",
      layer: "far",
      motif: "vine",
      x: 2137,
      y: 33,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-119",
      layer: "mid",
      motif: "glassBerry",
      x: 2234,
      y: 74,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-120",
      layer: "far",
      motif: "cloud",
      x: 2331,
      y: 115,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-121",
      layer: "near",
      motif: "windmill",
      x: 2428,
      y: 156,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-122",
      layer: "far",
      motif: "grass",
      x: 2525,
      y: 197,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-123",
      layer: "mid",
      motif: "gear",
      x: 2622,
      y: 238,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-124",
      layer: "far",
      motif: "vine",
      x: 2719,
      y: 279,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-125",
      layer: "mid",
      motif: "glassBerry",
      x: 2816,
      y: 320,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-126",
      layer: "near",
      motif: "cloud",
      x: 2913,
      y: 361,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-127",
      layer: "mid",
      motif: "windmill",
      x: 3010,
      y: 402,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-128",
      layer: "far",
      motif: "grass",
      x: 3107,
      y: 443,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-129",
      layer: "mid",
      motif: "gear",
      x: 3204,
      y: 54,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-130",
      layer: "far",
      motif: "vine",
      x: 3301,
      y: 95,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-131",
      layer: "near",
      motif: "glassBerry",
      x: 3398,
      y: 136,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-132",
      layer: "far",
      motif: "cloud",
      x: 3495,
      y: 177,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-133",
      layer: "mid",
      motif: "windmill",
      x: 3592,
      y: 218,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-134",
      layer: "far",
      motif: "grass",
      x: 3689,
      y: 259,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-135",
      layer: "mid",
      motif: "gear",
      x: 3786,
      y: 300,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-136",
      layer: "near",
      motif: "vine",
      x: 3883,
      y: 341,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-137",
      layer: "mid",
      motif: "glassBerry",
      x: 3980,
      y: 382,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-138",
      layer: "far",
      motif: "cloud",
      x: 4077,
      y: 423,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-139",
      layer: "mid",
      motif: "windmill",
      x: 4174,
      y: 34,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-140",
      layer: "far",
      motif: "grass",
      x: 4271,
      y: 75,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-141",
      layer: "near",
      motif: "gear",
      x: 4368,
      y: 116,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-142",
      layer: "far",
      motif: "vine",
      x: 4465,
      y: 157,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-143",
      layer: "mid",
      motif: "glassBerry",
      x: 4562,
      y: 198,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-144",
      layer: "far",
      motif: "cloud",
      x: 4659,
      y: 239,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-145",
      layer: "mid",
      motif: "windmill",
      x: 4756,
      y: 280,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-146",
      layer: "near",
      motif: "grass",
      x: 4853,
      y: 321,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-147",
      layer: "mid",
      motif: "gear",
      x: 22,
      y: 362,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-148",
      layer: "far",
      motif: "vine",
      x: 119,
      y: 403,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-149",
      layer: "mid",
      motif: "glassBerry",
      x: 216,
      y: 444,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-150",
      layer: "far",
      motif: "cloud",
      x: 313,
      y: 55,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-151",
      layer: "near",
      motif: "windmill",
      x: 410,
      y: 96,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-152",
      layer: "far",
      motif: "grass",
      x: 507,
      y: 137,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-153",
      layer: "mid",
      motif: "gear",
      x: 604,
      y: 178,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-154",
      layer: "far",
      motif: "vine",
      x: 701,
      y: 219,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-155",
      layer: "mid",
      motif: "glassBerry",
      x: 798,
      y: 260,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-156",
      layer: "near",
      motif: "cloud",
      x: 895,
      y: 301,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-157",
      layer: "mid",
      motif: "windmill",
      x: 992,
      y: 342,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-158",
      layer: "far",
      motif: "grass",
      x: 1089,
      y: 383,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-159",
      layer: "mid",
      motif: "gear",
      x: 1186,
      y: 424,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-160",
      layer: "far",
      motif: "vine",
      x: 1283,
      y: 35,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-161",
      layer: "near",
      motif: "glassBerry",
      x: 1380,
      y: 76,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-162",
      layer: "far",
      motif: "cloud",
      x: 1477,
      y: 117,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-163",
      layer: "mid",
      motif: "windmill",
      x: 1574,
      y: 158,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-164",
      layer: "far",
      motif: "grass",
      x: 1671,
      y: 199,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-165",
      layer: "mid",
      motif: "gear",
      x: 1768,
      y: 240,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-166",
      layer: "near",
      motif: "vine",
      x: 1865,
      y: 281,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-167",
      layer: "mid",
      motif: "glassBerry",
      x: 1962,
      y: 322,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-168",
      layer: "far",
      motif: "cloud",
      x: 2059,
      y: 363,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-169",
      layer: "mid",
      motif: "windmill",
      x: 2156,
      y: 404,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-170",
      layer: "far",
      motif: "grass",
      x: 2253,
      y: 445,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-29-171",
      layer: "near",
      motif: "gear",
      x: 2350,
      y: 56,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-172",
      layer: "far",
      motif: "vine",
      x: 2447,
      y: 97,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-29-173",
      layer: "mid",
      motif: "glassBerry",
      x: 2544,
      y: 138,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-29-174",
      layer: "far",
      motif: "cloud",
      x: 2641,
      y: 179,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-29-175",
      layer: "mid",
      motif: "windmill",
      x: 2738,
      y: 220,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-29-176",
      layer: "near",
      motif: "grass",
      x: 2835,
      y: 261,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-29-177",
      layer: "mid",
      motif: "gear",
      x: 2932,
      y: 302,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-29-178",
      layer: "far",
      motif: "vine",
      x: 3029,
      y: 343,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-29-179",
      layer: "mid",
      motif: "glassBerry",
      x: 3126,
      y: 384,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-29-180",
      layer: "far",
      motif: "cloud",
      x: 3223,
      y: 425,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-29",
    x: 4736,
    y: 448,
    nextLevelId: "level-30"
  }
};
