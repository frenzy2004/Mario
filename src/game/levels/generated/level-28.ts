import type { LevelDefinition } from "../schema";

export const LEVEL_28: LevelDefinition = {
  id: "level-28",
  index: 27,
  title: "Moonlit Gearway 07",
  chapter: "Moonlit Gearway",
  columns: 154,
  rows: 18,
  timeLimit: 244,
  palette: {
    skyTop: 988970,
    skyBottom: 3718648,
    ground: 1461859,
    groundAccent: 16436245,
    brass: 16436245,
    leaves: 3003583,
    hazard: 16007006,
    glow: 15792639
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
    ".......................#######.......................###...........................####..........................#####.........................###........",
    "..................######........................#######.......................###...........................####..........................#####...........",
    ".............=====.........................======........................=======.......................===...........................====.................",
    "......................................#####.........................######........................#######.......................###.......................",
    ".................................####..........................#####.........................######........................#######........................",
    "............................===.............W.............====..................W.......=====.......................W.======..............................",
    "...................................S...................................S...................................S..............................................",
    "...P......................W...................................W...................................W...................................W.............G.....",
    ".................S...................................S...................................S...................................S............................",
    "^################^..##############...#############....############..^#############...^############....^###########..###^##########...###^################^",
    "##################.^##############.^.#############.^.^############.^##############.^.#############.^.^############.^##############.^.#####################"
  ],
  enemies: [
    {
      id: "enemy-28-1",
      kind: "charger",
      x: 476,
      y: 448,
      patrolMin: 381,
      patrolMax: 596,
      speed: 80,
      phase: 27
    },
    {
      id: "enemy-28-2",
      kind: "spiker",
      x: 806,
      y: 416,
      patrolMin: 693,
      patrolMax: 948,
      speed: 92,
      phase: 30
    },
    {
      id: "enemy-28-3",
      kind: "turret",
      x: 1136,
      y: 384,
      patrolMin: 1005,
      patrolMax: 1300,
      speed: 104,
      phase: 33
    },
    {
      id: "enemy-28-4",
      kind: "beetle",
      x: 1466,
      y: 352,
      patrolMin: 1317,
      patrolMax: 1652,
      speed: 44,
      phase: 36
    },
    {
      id: "enemy-28-5",
      kind: "acorn",
      x: 1796,
      y: 320,
      patrolMin: 1701,
      patrolMax: 2004,
      speed: 56,
      phase: 39
    },
    {
      id: "enemy-28-6",
      kind: "lantern",
      x: 2126,
      y: 448,
      patrolMin: 2013,
      patrolMax: 2246,
      speed: 68,
      phase: 42
    },
    {
      id: "enemy-28-7",
      kind: "charger",
      x: 2456,
      y: 416,
      patrolMin: 2325,
      patrolMax: 2598,
      speed: 80,
      phase: 45
    },
    {
      id: "enemy-28-8",
      kind: "spiker",
      x: 2786,
      y: 384,
      patrolMin: 2637,
      patrolMax: 2950,
      speed: 92,
      phase: 48
    },
    {
      id: "enemy-28-9",
      kind: "turret",
      x: 3116,
      y: 352,
      patrolMin: 3021,
      patrolMax: 3302,
      speed: 104,
      phase: 51
    },
    {
      id: "enemy-28-10",
      kind: "beetle",
      x: 3446,
      y: 320,
      patrolMin: 3333,
      patrolMax: 3654,
      speed: 44,
      phase: 54
    },
    {
      id: "enemy-28-11",
      kind: "acorn",
      x: 3776,
      y: 448,
      patrolMin: 3645,
      patrolMax: 3896,
      speed: 56,
      phase: 57
    },
    {
      id: "enemy-28-12",
      kind: "lantern",
      x: 4106,
      y: 416,
      patrolMin: 3957,
      patrolMax: 4248,
      speed: 68,
      phase: 60
    },
    {
      id: "enemy-28-13",
      kind: "charger",
      x: 4436,
      y: 384,
      patrolMin: 4341,
      patrolMax: 4600,
      speed: 80,
      phase: 63
    },
    {
      id: "enemy-28-14",
      kind: "spiker",
      x: 4766,
      y: 352,
      patrolMin: 4653,
      patrolMax: 4748,
      speed: 92,
      phase: 66
    },
    {
      id: "enemy-28-15",
      kind: "turret",
      x: 5096,
      y: 320,
      patrolMin: 4965,
      patrolMax: 4748,
      speed: 104,
      phase: 69
    }
  ],
  collectibles: [
    {
      id: "collectible-28-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 216,
      y: 140
    },
    {
      id: "collectible-28-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 286,
      y: 193
    },
    {
      id: "collectible-28-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 356,
      y: 246
    },
    {
      id: "collectible-28-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 426,
      y: 266
    },
    {
      id: "collectible-28-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 496,
      y: 319
    },
    {
      id: "collectible-28-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 566,
      y: 372
    },
    {
      id: "collectible-28-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 636,
      y: 392
    },
    {
      id: "collectible-28-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 706,
      y: 151
    },
    {
      id: "collectible-28-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 776,
      y: 204
    },
    {
      id: "collectible-28-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 846,
      y: 224
    },
    {
      id: "collectible-28-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 916,
      y: 277
    },
    {
      id: "collectible-28-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 986,
      y: 330
    },
    {
      id: "collectible-28-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1056,
      y: 350
    },
    {
      id: "collectible-28-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1126,
      y: 403
    },
    {
      id: "collectible-28-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1196,
      y: 162
    },
    {
      id: "collectible-28-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1266,
      y: 182
    },
    {
      id: "collectible-28-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1336,
      y: 235
    },
    {
      id: "collectible-28-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1406,
      y: 288
    },
    {
      id: "collectible-28-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1476,
      y: 308
    },
    {
      id: "collectible-28-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1546,
      y: 361
    },
    {
      id: "collectible-28-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1616,
      y: 414
    },
    {
      id: "collectible-28-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1686,
      y: 140
    },
    {
      id: "collectible-28-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1756,
      y: 193
    },
    {
      id: "collectible-28-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1826,
      y: 246
    },
    {
      id: "collectible-28-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1896,
      y: 266
    },
    {
      id: "collectible-28-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1966,
      y: 319
    },
    {
      id: "collectible-28-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2036,
      y: 372
    },
    {
      id: "collectible-28-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2106,
      y: 392
    },
    {
      id: "collectible-28-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2176,
      y: 151
    },
    {
      id: "collectible-28-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2246,
      y: 204
    },
    {
      id: "collectible-28-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2316,
      y: 224
    },
    {
      id: "collectible-28-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2386,
      y: 277
    },
    {
      id: "collectible-28-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2456,
      y: 330
    },
    {
      id: "collectible-28-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2526,
      y: 350
    },
    {
      id: "collectible-28-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2596,
      y: 403
    },
    {
      id: "collectible-28-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2666,
      y: 162
    },
    {
      id: "collectible-28-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2736,
      y: 182
    },
    {
      id: "collectible-28-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2806,
      y: 235
    },
    {
      id: "collectible-28-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2876,
      y: 288
    },
    {
      id: "collectible-28-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2946,
      y: 308
    },
    {
      id: "collectible-28-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3016,
      y: 361
    },
    {
      id: "collectible-28-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3086,
      y: 414
    },
    {
      id: "collectible-28-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3156,
      y: 140
    },
    {
      id: "collectible-28-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3226,
      y: 193
    },
    {
      id: "collectible-28-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3296,
      y: 246
    },
    {
      id: "collectible-28-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3366,
      y: 266
    },
    {
      id: "collectible-28-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3436,
      y: 319
    },
    {
      id: "collectible-28-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3506,
      y: 372
    },
    {
      id: "collectible-28-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3576,
      y: 392
    },
    {
      id: "collectible-28-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3646,
      y: 151
    },
    {
      id: "collectible-28-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3716,
      y: 204
    },
    {
      id: "collectible-28-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3786,
      y: 224
    },
    {
      id: "collectible-28-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3856,
      y: 277
    },
    {
      id: "collectible-28-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3926,
      y: 330
    },
    {
      id: "collectible-28-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3996,
      y: 350
    },
    {
      id: "collectible-28-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4066,
      y: 403
    },
    {
      id: "collectible-28-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4136,
      y: 162
    },
    {
      id: "collectible-28-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4206,
      y: 182
    },
    {
      id: "collectible-28-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4276,
      y: 235
    },
    {
      id: "collectible-28-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4346,
      y: 288
    },
    {
      id: "collectible-28-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4416,
      y: 308
    },
    {
      id: "collectible-28-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4486,
      y: 361
    }
  ],
  powerups: [
    {
      id: "powerup-28-1",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 590,
      y: 130
    },
    {
      id: "powerup-28-2",
      kind: "shield",
      durationMs: 5700,
      x: 1420,
      y: 182
    },
    {
      id: "powerup-28-3",
      kind: "springBoots",
      durationMs: 6600,
      x: 2250,
      y: 234
    },
    {
      id: "powerup-28-4",
      kind: "starburst",
      durationMs: 7500,
      x: 3080,
      y: 286
    },
    {
      id: "powerup-28-5",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 3910,
      y: 338
    },
    {
      id: "powerup-28-6",
      kind: "shield",
      durationMs: 5700,
      x: 4740,
      y: 130
    },
    {
      id: "powerup-28-7",
      kind: "springBoots",
      durationMs: 6600,
      x: 5570,
      y: 182
    },
    {
      id: "powerup-28-8",
      kind: "starburst",
      durationMs: 7500,
      x: 6400,
      y: 234
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-28-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 2.7
    },
    {
      id: "moving-platform-28-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 3.4000000000000004
    },
    {
      id: "moving-platform-28-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 4.1
    },
    {
      id: "moving-platform-28-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 4.8
    },
    {
      id: "moving-platform-28-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 5.5
    },
    {
      id: "moving-platform-28-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 6.2
    },
    {
      id: "moving-platform-28-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 6.8999999999999995
    },
    {
      id: "moving-platform-28-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 7.6
    },
    {
      id: "moving-platform-28-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 8.3
    }
  ],
  hazards: [
    {
      id: "hazard-28-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 27
    },
    {
      id: "hazard-28-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 28
    },
    {
      id: "hazard-28-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 29
    },
    {
      id: "hazard-28-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 30
    },
    {
      id: "hazard-28-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 31
    },
    {
      id: "hazard-28-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 32
    },
    {
      id: "hazard-28-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 33
    },
    {
      id: "hazard-28-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 34
    },
    {
      id: "hazard-28-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 35
    },
    {
      id: "hazard-28-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 36
    },
    {
      id: "hazard-28-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 37
    },
    {
      id: "hazard-28-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 38
    },
    {
      id: "hazard-28-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 39
    },
    {
      id: "hazard-28-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 40
    },
    {
      id: "hazard-28-15",
      kind: "thorn",
      x: 5660,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 41
    },
    {
      id: "hazard-28-16",
      kind: "crushBlock",
      x: 6020,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 42
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-28-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-28-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-28-1",
      x: 640,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-28-2",
      x: 1410,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-28-3",
      x: 2180,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-28-4",
      x: 2950,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-28-5",
      x: 3720,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-28-6",
      x: 4490,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-28-7",
      x: 5260,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-28-8",
      x: 6030,
      y: 384,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-28-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-28-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-28-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-28-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-28-5",
      x: 4660,
      y: 180,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-28-6",
      x: 5620,
      y: 240,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    }
  ],
  decorations: [
    {
      id: "decor-28-1",
      layer: "near",
      motif: "cloud",
      x: 621,
      y: 383,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-2",
      layer: "far",
      motif: "windmill",
      x: 718,
      y: 424,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-3",
      layer: "mid",
      motif: "grass",
      x: 815,
      y: 35,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-4",
      layer: "far",
      motif: "gear",
      x: 912,
      y: 76,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-5",
      layer: "mid",
      motif: "vine",
      x: 1009,
      y: 117,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-6",
      layer: "near",
      motif: "glassBerry",
      x: 1106,
      y: 158,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-7",
      layer: "mid",
      motif: "cloud",
      x: 1203,
      y: 199,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-8",
      layer: "far",
      motif: "windmill",
      x: 1300,
      y: 240,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-9",
      layer: "mid",
      motif: "grass",
      x: 1397,
      y: 281,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-10",
      layer: "far",
      motif: "gear",
      x: 1494,
      y: 322,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-11",
      layer: "near",
      motif: "vine",
      x: 1591,
      y: 363,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-12",
      layer: "far",
      motif: "glassBerry",
      x: 1688,
      y: 404,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-13",
      layer: "mid",
      motif: "cloud",
      x: 1785,
      y: 445,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-14",
      layer: "far",
      motif: "windmill",
      x: 1882,
      y: 56,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-15",
      layer: "mid",
      motif: "grass",
      x: 1979,
      y: 97,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-16",
      layer: "near",
      motif: "gear",
      x: 2076,
      y: 138,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-17",
      layer: "mid",
      motif: "vine",
      x: 2173,
      y: 179,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-18",
      layer: "far",
      motif: "glassBerry",
      x: 2270,
      y: 220,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-19",
      layer: "mid",
      motif: "cloud",
      x: 2367,
      y: 261,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-20",
      layer: "far",
      motif: "windmill",
      x: 2464,
      y: 302,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-21",
      layer: "near",
      motif: "grass",
      x: 2561,
      y: 343,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-22",
      layer: "far",
      motif: "gear",
      x: 2658,
      y: 384,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-23",
      layer: "mid",
      motif: "vine",
      x: 2755,
      y: 425,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-24",
      layer: "far",
      motif: "glassBerry",
      x: 2852,
      y: 36,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-25",
      layer: "mid",
      motif: "cloud",
      x: 2949,
      y: 77,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-26",
      layer: "near",
      motif: "windmill",
      x: 3046,
      y: 118,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-27",
      layer: "mid",
      motif: "grass",
      x: 3143,
      y: 159,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-28",
      layer: "far",
      motif: "gear",
      x: 3240,
      y: 200,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-29",
      layer: "mid",
      motif: "vine",
      x: 3337,
      y: 241,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-30",
      layer: "far",
      motif: "glassBerry",
      x: 3434,
      y: 282,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-31",
      layer: "near",
      motif: "cloud",
      x: 3531,
      y: 323,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-32",
      layer: "far",
      motif: "windmill",
      x: 3628,
      y: 364,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-33",
      layer: "mid",
      motif: "grass",
      x: 3725,
      y: 405,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-34",
      layer: "far",
      motif: "gear",
      x: 3822,
      y: 446,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-35",
      layer: "mid",
      motif: "vine",
      x: 3919,
      y: 57,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-36",
      layer: "near",
      motif: "glassBerry",
      x: 4016,
      y: 98,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-37",
      layer: "mid",
      motif: "cloud",
      x: 4113,
      y: 139,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-38",
      layer: "far",
      motif: "windmill",
      x: 4210,
      y: 180,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-39",
      layer: "mid",
      motif: "grass",
      x: 4307,
      y: 221,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-40",
      layer: "far",
      motif: "gear",
      x: 4404,
      y: 262,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-41",
      layer: "near",
      motif: "vine",
      x: 4501,
      y: 303,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-42",
      layer: "far",
      motif: "glassBerry",
      x: 4598,
      y: 344,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-43",
      layer: "mid",
      motif: "cloud",
      x: 4695,
      y: 385,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-44",
      layer: "far",
      motif: "windmill",
      x: 4792,
      y: 426,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-45",
      layer: "mid",
      motif: "grass",
      x: 4889,
      y: 37,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-46",
      layer: "near",
      motif: "gear",
      x: 58,
      y: 78,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-47",
      layer: "mid",
      motif: "vine",
      x: 155,
      y: 119,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-48",
      layer: "far",
      motif: "glassBerry",
      x: 252,
      y: 160,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-49",
      layer: "mid",
      motif: "cloud",
      x: 349,
      y: 201,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-50",
      layer: "far",
      motif: "windmill",
      x: 446,
      y: 242,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-51",
      layer: "near",
      motif: "grass",
      x: 543,
      y: 283,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-52",
      layer: "far",
      motif: "gear",
      x: 640,
      y: 324,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-53",
      layer: "mid",
      motif: "vine",
      x: 737,
      y: 365,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-54",
      layer: "far",
      motif: "glassBerry",
      x: 834,
      y: 406,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-55",
      layer: "mid",
      motif: "cloud",
      x: 931,
      y: 447,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-56",
      layer: "near",
      motif: "windmill",
      x: 1028,
      y: 58,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-57",
      layer: "mid",
      motif: "grass",
      x: 1125,
      y: 99,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-58",
      layer: "far",
      motif: "gear",
      x: 1222,
      y: 140,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-59",
      layer: "mid",
      motif: "vine",
      x: 1319,
      y: 181,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-60",
      layer: "far",
      motif: "glassBerry",
      x: 1416,
      y: 222,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-61",
      layer: "near",
      motif: "cloud",
      x: 1513,
      y: 263,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-62",
      layer: "far",
      motif: "windmill",
      x: 1610,
      y: 304,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-63",
      layer: "mid",
      motif: "grass",
      x: 1707,
      y: 345,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-64",
      layer: "far",
      motif: "gear",
      x: 1804,
      y: 386,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-65",
      layer: "mid",
      motif: "vine",
      x: 1901,
      y: 427,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-66",
      layer: "near",
      motif: "glassBerry",
      x: 1998,
      y: 38,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-67",
      layer: "mid",
      motif: "cloud",
      x: 2095,
      y: 79,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-68",
      layer: "far",
      motif: "windmill",
      x: 2192,
      y: 120,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-69",
      layer: "mid",
      motif: "grass",
      x: 2289,
      y: 161,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-70",
      layer: "far",
      motif: "gear",
      x: 2386,
      y: 202,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-71",
      layer: "near",
      motif: "vine",
      x: 2483,
      y: 243,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-72",
      layer: "far",
      motif: "glassBerry",
      x: 2580,
      y: 284,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-73",
      layer: "mid",
      motif: "cloud",
      x: 2677,
      y: 325,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-74",
      layer: "far",
      motif: "windmill",
      x: 2774,
      y: 366,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-75",
      layer: "mid",
      motif: "grass",
      x: 2871,
      y: 407,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-76",
      layer: "near",
      motif: "gear",
      x: 2968,
      y: 448,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-77",
      layer: "mid",
      motif: "vine",
      x: 3065,
      y: 59,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-78",
      layer: "far",
      motif: "glassBerry",
      x: 3162,
      y: 100,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-79",
      layer: "mid",
      motif: "cloud",
      x: 3259,
      y: 141,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-80",
      layer: "far",
      motif: "windmill",
      x: 3356,
      y: 182,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-81",
      layer: "near",
      motif: "grass",
      x: 3453,
      y: 223,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-82",
      layer: "far",
      motif: "gear",
      x: 3550,
      y: 264,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-83",
      layer: "mid",
      motif: "vine",
      x: 3647,
      y: 305,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-84",
      layer: "far",
      motif: "glassBerry",
      x: 3744,
      y: 346,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-85",
      layer: "mid",
      motif: "cloud",
      x: 3841,
      y: 387,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-86",
      layer: "near",
      motif: "windmill",
      x: 3938,
      y: 428,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-87",
      layer: "mid",
      motif: "grass",
      x: 4035,
      y: 39,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-88",
      layer: "far",
      motif: "gear",
      x: 4132,
      y: 80,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-89",
      layer: "mid",
      motif: "vine",
      x: 4229,
      y: 121,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-90",
      layer: "far",
      motif: "glassBerry",
      x: 4326,
      y: 162,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-91",
      layer: "near",
      motif: "cloud",
      x: 4423,
      y: 203,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-92",
      layer: "far",
      motif: "windmill",
      x: 4520,
      y: 244,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-93",
      layer: "mid",
      motif: "grass",
      x: 4617,
      y: 285,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-94",
      layer: "far",
      motif: "gear",
      x: 4714,
      y: 326,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-95",
      layer: "mid",
      motif: "vine",
      x: 4811,
      y: 367,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-96",
      layer: "near",
      motif: "glassBerry",
      x: 4908,
      y: 408,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-97",
      layer: "mid",
      motif: "cloud",
      x: 77,
      y: 449,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-98",
      layer: "far",
      motif: "windmill",
      x: 174,
      y: 60,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-99",
      layer: "mid",
      motif: "grass",
      x: 271,
      y: 101,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-100",
      layer: "far",
      motif: "gear",
      x: 368,
      y: 142,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-101",
      layer: "near",
      motif: "vine",
      x: 465,
      y: 183,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-102",
      layer: "far",
      motif: "glassBerry",
      x: 562,
      y: 224,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-103",
      layer: "mid",
      motif: "cloud",
      x: 659,
      y: 265,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-104",
      layer: "far",
      motif: "windmill",
      x: 756,
      y: 306,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-105",
      layer: "mid",
      motif: "grass",
      x: 853,
      y: 347,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-106",
      layer: "near",
      motif: "gear",
      x: 950,
      y: 388,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-107",
      layer: "mid",
      motif: "vine",
      x: 1047,
      y: 429,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-108",
      layer: "far",
      motif: "glassBerry",
      x: 1144,
      y: 40,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-109",
      layer: "mid",
      motif: "cloud",
      x: 1241,
      y: 81,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-110",
      layer: "far",
      motif: "windmill",
      x: 1338,
      y: 122,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-111",
      layer: "near",
      motif: "grass",
      x: 1435,
      y: 163,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-112",
      layer: "far",
      motif: "gear",
      x: 1532,
      y: 204,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-113",
      layer: "mid",
      motif: "vine",
      x: 1629,
      y: 245,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-114",
      layer: "far",
      motif: "glassBerry",
      x: 1726,
      y: 286,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-115",
      layer: "mid",
      motif: "cloud",
      x: 1823,
      y: 327,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-116",
      layer: "near",
      motif: "windmill",
      x: 1920,
      y: 368,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-117",
      layer: "mid",
      motif: "grass",
      x: 2017,
      y: 409,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-118",
      layer: "far",
      motif: "gear",
      x: 2114,
      y: 450,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-119",
      layer: "mid",
      motif: "vine",
      x: 2211,
      y: 61,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-120",
      layer: "far",
      motif: "glassBerry",
      x: 2308,
      y: 102,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-121",
      layer: "near",
      motif: "cloud",
      x: 2405,
      y: 143,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-122",
      layer: "far",
      motif: "windmill",
      x: 2502,
      y: 184,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-123",
      layer: "mid",
      motif: "grass",
      x: 2599,
      y: 225,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-124",
      layer: "far",
      motif: "gear",
      x: 2696,
      y: 266,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-125",
      layer: "mid",
      motif: "vine",
      x: 2793,
      y: 307,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-126",
      layer: "near",
      motif: "glassBerry",
      x: 2890,
      y: 348,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-127",
      layer: "mid",
      motif: "cloud",
      x: 2987,
      y: 389,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-128",
      layer: "far",
      motif: "windmill",
      x: 3084,
      y: 430,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-129",
      layer: "mid",
      motif: "grass",
      x: 3181,
      y: 41,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-130",
      layer: "far",
      motif: "gear",
      x: 3278,
      y: 82,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-131",
      layer: "near",
      motif: "vine",
      x: 3375,
      y: 123,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-132",
      layer: "far",
      motif: "glassBerry",
      x: 3472,
      y: 164,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-133",
      layer: "mid",
      motif: "cloud",
      x: 3569,
      y: 205,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-134",
      layer: "far",
      motif: "windmill",
      x: 3666,
      y: 246,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-135",
      layer: "mid",
      motif: "grass",
      x: 3763,
      y: 287,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-136",
      layer: "near",
      motif: "gear",
      x: 3860,
      y: 328,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-137",
      layer: "mid",
      motif: "vine",
      x: 3957,
      y: 369,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-138",
      layer: "far",
      motif: "glassBerry",
      x: 4054,
      y: 410,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-139",
      layer: "mid",
      motif: "cloud",
      x: 4151,
      y: 451,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-140",
      layer: "far",
      motif: "windmill",
      x: 4248,
      y: 62,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-141",
      layer: "near",
      motif: "grass",
      x: 4345,
      y: 103,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-142",
      layer: "far",
      motif: "gear",
      x: 4442,
      y: 144,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-143",
      layer: "mid",
      motif: "vine",
      x: 4539,
      y: 185,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-144",
      layer: "far",
      motif: "glassBerry",
      x: 4636,
      y: 226,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-145",
      layer: "mid",
      motif: "cloud",
      x: 4733,
      y: 267,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-146",
      layer: "near",
      motif: "windmill",
      x: 4830,
      y: 308,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-147",
      layer: "mid",
      motif: "grass",
      x: 4927,
      y: 349,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-148",
      layer: "far",
      motif: "gear",
      x: 96,
      y: 390,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-149",
      layer: "mid",
      motif: "vine",
      x: 193,
      y: 431,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-150",
      layer: "far",
      motif: "glassBerry",
      x: 290,
      y: 42,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-151",
      layer: "near",
      motif: "cloud",
      x: 387,
      y: 83,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-152",
      layer: "far",
      motif: "windmill",
      x: 484,
      y: 124,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-153",
      layer: "mid",
      motif: "grass",
      x: 581,
      y: 165,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-154",
      layer: "far",
      motif: "gear",
      x: 678,
      y: 206,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-155",
      layer: "mid",
      motif: "vine",
      x: 775,
      y: 247,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-156",
      layer: "near",
      motif: "glassBerry",
      x: 872,
      y: 288,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-157",
      layer: "mid",
      motif: "cloud",
      x: 969,
      y: 329,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-158",
      layer: "far",
      motif: "windmill",
      x: 1066,
      y: 370,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-159",
      layer: "mid",
      motif: "grass",
      x: 1163,
      y: 411,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-160",
      layer: "far",
      motif: "gear",
      x: 1260,
      y: 452,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-161",
      layer: "near",
      motif: "vine",
      x: 1357,
      y: 63,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-162",
      layer: "far",
      motif: "glassBerry",
      x: 1454,
      y: 104,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-163",
      layer: "mid",
      motif: "cloud",
      x: 1551,
      y: 145,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-164",
      layer: "far",
      motif: "windmill",
      x: 1648,
      y: 186,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-165",
      layer: "mid",
      motif: "grass",
      x: 1745,
      y: 227,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-166",
      layer: "near",
      motif: "gear",
      x: 1842,
      y: 268,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-167",
      layer: "mid",
      motif: "vine",
      x: 1939,
      y: 309,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-168",
      layer: "far",
      motif: "glassBerry",
      x: 2036,
      y: 350,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-169",
      layer: "mid",
      motif: "cloud",
      x: 2133,
      y: 391,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-170",
      layer: "far",
      motif: "windmill",
      x: 2230,
      y: 432,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-28-171",
      layer: "near",
      motif: "grass",
      x: 2327,
      y: 43,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-172",
      layer: "far",
      motif: "gear",
      x: 2424,
      y: 84,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-28-173",
      layer: "mid",
      motif: "vine",
      x: 2521,
      y: 125,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-28-174",
      layer: "far",
      motif: "glassBerry",
      x: 2618,
      y: 166,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-28-175",
      layer: "mid",
      motif: "cloud",
      x: 2715,
      y: 207,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-28-176",
      layer: "near",
      motif: "windmill",
      x: 2812,
      y: 248,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-28-177",
      layer: "mid",
      motif: "grass",
      x: 2909,
      y: 289,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-28-178",
      layer: "far",
      motif: "gear",
      x: 3006,
      y: 330,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-28-179",
      layer: "mid",
      motif: "vine",
      x: 3103,
      y: 371,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-28-180",
      layer: "far",
      motif: "glassBerry",
      x: 3200,
      y: 412,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-28",
    x: 4736,
    y: 448,
    nextLevelId: "level-29"
  }
};
