import type { LevelDefinition } from "../schema";

export const LEVEL_32: LevelDefinition = {
  id: "level-32",
  index: 31,
  title: "Aurora Conservatory 04",
  chapter: "Aurora Conservatory",
  columns: 154,
  rows: 18,
  timeLimit: 316,
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
    ".................................###...........................####..........................#####.........................######.........................",
    "............................=======.......................===...........................====..........................=====...............................",
    ".......................######........................#######.......................###...........................####..........................###........",
    "..................#####.........................######........................#######.......................###...........................####............",
    ".............====..........................=====.........................======........................=======.......................===..................",
    "......................................####W.........................#####.....W...................######..........W.............#######...................",
    ".................................S...................................S...................................S................................................",
    "...P....................W...................................W...................................W...................................W...............G.....",
    "...............S...................................S...................................S...................................S..............................",
    "^################^...#############^..##############^....############^...#############^..##############^....############^...#############^################^",
    "##################.^.##############^.###############.^.^#############^.^##############.^###############^.^.#############.^.###############################"
  ],
  enemies: [
    {
      id: "enemy-32-1",
      kind: "acorn",
      x: 448,
      y: 448,
      patrolMin: 353,
      patrolMax: 568,
      speed: 56,
      phase: 31
    },
    {
      id: "enemy-32-2",
      kind: "lantern",
      x: 778,
      y: 416,
      patrolMin: 665,
      patrolMax: 920,
      speed: 68,
      phase: 34
    },
    {
      id: "enemy-32-3",
      kind: "charger",
      x: 1108,
      y: 384,
      patrolMin: 977,
      patrolMax: 1272,
      speed: 80,
      phase: 37
    },
    {
      id: "enemy-32-4",
      kind: "spiker",
      x: 1438,
      y: 352,
      patrolMin: 1289,
      patrolMax: 1624,
      speed: 92,
      phase: 40
    },
    {
      id: "enemy-32-5",
      kind: "turret",
      x: 1768,
      y: 320,
      patrolMin: 1673,
      patrolMax: 1976,
      speed: 104,
      phase: 43
    },
    {
      id: "enemy-32-6",
      kind: "beetle",
      x: 2098,
      y: 448,
      patrolMin: 1985,
      patrolMax: 2218,
      speed: 44,
      phase: 46
    },
    {
      id: "enemy-32-7",
      kind: "acorn",
      x: 2428,
      y: 416,
      patrolMin: 2297,
      patrolMax: 2570,
      speed: 56,
      phase: 49
    },
    {
      id: "enemy-32-8",
      kind: "lantern",
      x: 2758,
      y: 384,
      patrolMin: 2609,
      patrolMax: 2922,
      speed: 68,
      phase: 52
    },
    {
      id: "enemy-32-9",
      kind: "charger",
      x: 3088,
      y: 352,
      patrolMin: 2993,
      patrolMax: 3274,
      speed: 80,
      phase: 55
    },
    {
      id: "enemy-32-10",
      kind: "spiker",
      x: 3418,
      y: 320,
      patrolMin: 3305,
      patrolMax: 3626,
      speed: 92,
      phase: 58
    },
    {
      id: "enemy-32-11",
      kind: "turret",
      x: 3748,
      y: 448,
      patrolMin: 3617,
      patrolMax: 3868,
      speed: 104,
      phase: 61
    },
    {
      id: "enemy-32-12",
      kind: "beetle",
      x: 4078,
      y: 416,
      patrolMin: 3929,
      patrolMax: 4220,
      speed: 44,
      phase: 64
    },
    {
      id: "enemy-32-13",
      kind: "acorn",
      x: 4408,
      y: 384,
      patrolMin: 4313,
      patrolMax: 4572,
      speed: 56,
      phase: 67
    },
    {
      id: "enemy-32-14",
      kind: "lantern",
      x: 4738,
      y: 352,
      patrolMin: 4625,
      patrolMax: 4748,
      speed: 68,
      phase: 70
    },
    {
      id: "enemy-32-15",
      kind: "charger",
      x: 5068,
      y: 320,
      patrolMin: 4937,
      patrolMax: 4748,
      speed: 80,
      phase: 73
    },
    {
      id: "enemy-32-16",
      kind: "spiker",
      x: 5398,
      y: 448,
      patrolMin: 5249,
      patrolMax: 4748,
      speed: 92,
      phase: 76
    },
    {
      id: "enemy-32-17",
      kind: "turret",
      x: 5728,
      y: 416,
      patrolMin: 5633,
      patrolMax: 4748,
      speed: 104,
      phase: 79
    },
    {
      id: "enemy-32-18",
      kind: "beetle",
      x: 6058,
      y: 384,
      patrolMin: 5945,
      patrolMax: 4748,
      speed: 44,
      phase: 82
    },
    {
      id: "enemy-32-19",
      kind: "acorn",
      x: 6388,
      y: 352,
      patrolMin: 6257,
      patrolMax: 4748,
      speed: 56,
      phase: 85
    }
  ],
  collectibles: [
    {
      id: "collectible-32-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 216,
      y: 151
    },
    {
      id: "collectible-32-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 286,
      y: 204
    },
    {
      id: "collectible-32-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 356,
      y: 224
    },
    {
      id: "collectible-32-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 426,
      y: 277
    },
    {
      id: "collectible-32-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 496,
      y: 330
    },
    {
      id: "collectible-32-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 566,
      y: 350
    },
    {
      id: "collectible-32-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 636,
      y: 403
    },
    {
      id: "collectible-32-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 706,
      y: 162
    },
    {
      id: "collectible-32-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 776,
      y: 182
    },
    {
      id: "collectible-32-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 846,
      y: 235
    },
    {
      id: "collectible-32-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 916,
      y: 288
    },
    {
      id: "collectible-32-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 986,
      y: 308
    },
    {
      id: "collectible-32-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1056,
      y: 361
    },
    {
      id: "collectible-32-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1126,
      y: 414
    },
    {
      id: "collectible-32-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1196,
      y: 140
    },
    {
      id: "collectible-32-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1266,
      y: 193
    },
    {
      id: "collectible-32-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1336,
      y: 246
    },
    {
      id: "collectible-32-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1406,
      y: 266
    },
    {
      id: "collectible-32-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1476,
      y: 319
    },
    {
      id: "collectible-32-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1546,
      y: 372
    },
    {
      id: "collectible-32-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1616,
      y: 392
    },
    {
      id: "collectible-32-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1686,
      y: 151
    },
    {
      id: "collectible-32-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1756,
      y: 204
    },
    {
      id: "collectible-32-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1826,
      y: 224
    },
    {
      id: "collectible-32-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1896,
      y: 277
    },
    {
      id: "collectible-32-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1966,
      y: 330
    },
    {
      id: "collectible-32-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2036,
      y: 350
    },
    {
      id: "collectible-32-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2106,
      y: 403
    },
    {
      id: "collectible-32-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2176,
      y: 162
    },
    {
      id: "collectible-32-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2246,
      y: 182
    },
    {
      id: "collectible-32-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2316,
      y: 235
    },
    {
      id: "collectible-32-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2386,
      y: 288
    },
    {
      id: "collectible-32-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2456,
      y: 308
    },
    {
      id: "collectible-32-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2526,
      y: 361
    },
    {
      id: "collectible-32-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2596,
      y: 414
    },
    {
      id: "collectible-32-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2666,
      y: 140
    },
    {
      id: "collectible-32-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2736,
      y: 193
    },
    {
      id: "collectible-32-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2806,
      y: 246
    },
    {
      id: "collectible-32-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2876,
      y: 266
    },
    {
      id: "collectible-32-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2946,
      y: 319
    },
    {
      id: "collectible-32-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3016,
      y: 372
    },
    {
      id: "collectible-32-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3086,
      y: 392
    },
    {
      id: "collectible-32-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3156,
      y: 151
    },
    {
      id: "collectible-32-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3226,
      y: 204
    },
    {
      id: "collectible-32-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3296,
      y: 224
    },
    {
      id: "collectible-32-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3366,
      y: 277
    },
    {
      id: "collectible-32-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3436,
      y: 330
    },
    {
      id: "collectible-32-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3506,
      y: 350
    },
    {
      id: "collectible-32-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3576,
      y: 403
    },
    {
      id: "collectible-32-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3646,
      y: 162
    },
    {
      id: "collectible-32-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3716,
      y: 182
    },
    {
      id: "collectible-32-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3786,
      y: 235
    },
    {
      id: "collectible-32-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3856,
      y: 288
    },
    {
      id: "collectible-32-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3926,
      y: 308
    },
    {
      id: "collectible-32-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3996,
      y: 361
    },
    {
      id: "collectible-32-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4066,
      y: 414
    },
    {
      id: "collectible-32-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4136,
      y: 140
    },
    {
      id: "collectible-32-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4206,
      y: 193
    },
    {
      id: "collectible-32-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4276,
      y: 246
    },
    {
      id: "collectible-32-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4346,
      y: 266
    },
    {
      id: "collectible-32-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4416,
      y: 319
    },
    {
      id: "collectible-32-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4486,
      y: 372
    },
    {
      id: "collectible-32-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4556,
      y: 392
    },
    {
      id: "collectible-32-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4626,
      y: 151
    },
    {
      id: "collectible-32-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4696,
      y: 204
    },
    {
      id: "collectible-32-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4766,
      y: 224
    },
    {
      id: "collectible-32-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4836,
      y: 277
    },
    {
      id: "collectible-32-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4906,
      y: 330
    },
    {
      id: "collectible-32-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4976,
      y: 350
    },
    {
      id: "collectible-32-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5046,
      y: 403
    },
    {
      id: "collectible-32-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5116,
      y: 162
    },
    {
      id: "collectible-32-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5186,
      y: 182
    },
    {
      id: "collectible-32-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5256,
      y: 235
    },
    {
      id: "collectible-32-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5326,
      y: 288
    },
    {
      id: "collectible-32-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5396,
      y: 308
    },
    {
      id: "collectible-32-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5466,
      y: 361
    },
    {
      id: "collectible-32-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5536,
      y: 414
    },
    {
      id: "collectible-32-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5606,
      y: 140
    }
  ],
  powerups: [
    {
      id: "powerup-32-1",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 530,
      y: 130
    },
    {
      id: "powerup-32-2",
      kind: "shield",
      durationMs: 5700,
      x: 1360,
      y: 182
    },
    {
      id: "powerup-32-3",
      kind: "springBoots",
      durationMs: 6600,
      x: 2190,
      y: 234
    },
    {
      id: "powerup-32-4",
      kind: "starburst",
      durationMs: 7500,
      x: 3020,
      y: 286
    },
    {
      id: "powerup-32-5",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 3850,
      y: 338
    },
    {
      id: "powerup-32-6",
      kind: "shield",
      durationMs: 5700,
      x: 4680,
      y: 130
    },
    {
      id: "powerup-32-7",
      kind: "springBoots",
      durationMs: 6600,
      x: 5510,
      y: 182
    },
    {
      id: "powerup-32-8",
      kind: "starburst",
      durationMs: 7500,
      x: 6340,
      y: 234
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-32-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 3.1
    },
    {
      id: "moving-platform-32-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 3.8
    },
    {
      id: "moving-platform-32-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 4.5
    },
    {
      id: "moving-platform-32-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 5.199999999999999
    },
    {
      id: "moving-platform-32-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 5.9
    },
    {
      id: "moving-platform-32-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 6.6
    },
    {
      id: "moving-platform-32-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 7.299999999999999
    },
    {
      id: "moving-platform-32-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 8
    }
  ],
  hazards: [
    {
      id: "hazard-32-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 31
    },
    {
      id: "hazard-32-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 32
    },
    {
      id: "hazard-32-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 33
    },
    {
      id: "hazard-32-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 34
    },
    {
      id: "hazard-32-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 35
    },
    {
      id: "hazard-32-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 36
    },
    {
      id: "hazard-32-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 37
    },
    {
      id: "hazard-32-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 38
    },
    {
      id: "hazard-32-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 39
    },
    {
      id: "hazard-32-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 40
    },
    {
      id: "hazard-32-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 41
    },
    {
      id: "hazard-32-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 42
    },
    {
      id: "hazard-32-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 43
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-32-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-32-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-32-1",
      x: 674,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-32-2",
      x: 1444,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-32-3",
      x: 2214,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-32-4",
      x: 2984,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-32-5",
      x: 3754,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-32-6",
      x: 4524,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-32-7",
      x: 5294,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-32-8",
      x: 6064,
      y: 384,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-32-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-32-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-32-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-32-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-32-5",
      x: 4660,
      y: 180,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-32-6",
      x: 5620,
      y: 240,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    }
  ],
  decorations: [
    {
      id: "decor-32-1",
      layer: "near",
      motif: "vine",
      x: 713,
      y: 435,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-2",
      layer: "far",
      motif: "glassBerry",
      x: 810,
      y: 46,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-3",
      layer: "mid",
      motif: "cloud",
      x: 907,
      y: 87,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-4",
      layer: "far",
      motif: "windmill",
      x: 1004,
      y: 128,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-5",
      layer: "mid",
      motif: "grass",
      x: 1101,
      y: 169,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-6",
      layer: "near",
      motif: "gear",
      x: 1198,
      y: 210,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-7",
      layer: "mid",
      motif: "vine",
      x: 1295,
      y: 251,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-8",
      layer: "far",
      motif: "glassBerry",
      x: 1392,
      y: 292,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-9",
      layer: "mid",
      motif: "cloud",
      x: 1489,
      y: 333,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-10",
      layer: "far",
      motif: "windmill",
      x: 1586,
      y: 374,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-11",
      layer: "near",
      motif: "grass",
      x: 1683,
      y: 415,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-12",
      layer: "far",
      motif: "gear",
      x: 1780,
      y: 456,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-13",
      layer: "mid",
      motif: "vine",
      x: 1877,
      y: 67,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-14",
      layer: "far",
      motif: "glassBerry",
      x: 1974,
      y: 108,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-15",
      layer: "mid",
      motif: "cloud",
      x: 2071,
      y: 149,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-16",
      layer: "near",
      motif: "windmill",
      x: 2168,
      y: 190,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-17",
      layer: "mid",
      motif: "grass",
      x: 2265,
      y: 231,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-18",
      layer: "far",
      motif: "gear",
      x: 2362,
      y: 272,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-19",
      layer: "mid",
      motif: "vine",
      x: 2459,
      y: 313,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-20",
      layer: "far",
      motif: "glassBerry",
      x: 2556,
      y: 354,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-21",
      layer: "near",
      motif: "cloud",
      x: 2653,
      y: 395,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-22",
      layer: "far",
      motif: "windmill",
      x: 2750,
      y: 436,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-23",
      layer: "mid",
      motif: "grass",
      x: 2847,
      y: 47,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-24",
      layer: "far",
      motif: "gear",
      x: 2944,
      y: 88,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-25",
      layer: "mid",
      motif: "vine",
      x: 3041,
      y: 129,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-26",
      layer: "near",
      motif: "glassBerry",
      x: 3138,
      y: 170,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-27",
      layer: "mid",
      motif: "cloud",
      x: 3235,
      y: 211,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-28",
      layer: "far",
      motif: "windmill",
      x: 3332,
      y: 252,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-29",
      layer: "mid",
      motif: "grass",
      x: 3429,
      y: 293,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-30",
      layer: "far",
      motif: "gear",
      x: 3526,
      y: 334,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-31",
      layer: "near",
      motif: "vine",
      x: 3623,
      y: 375,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-32",
      layer: "far",
      motif: "glassBerry",
      x: 3720,
      y: 416,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-33",
      layer: "mid",
      motif: "cloud",
      x: 3817,
      y: 457,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-34",
      layer: "far",
      motif: "windmill",
      x: 3914,
      y: 68,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-35",
      layer: "mid",
      motif: "grass",
      x: 4011,
      y: 109,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-36",
      layer: "near",
      motif: "gear",
      x: 4108,
      y: 150,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-37",
      layer: "mid",
      motif: "vine",
      x: 4205,
      y: 191,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-38",
      layer: "far",
      motif: "glassBerry",
      x: 4302,
      y: 232,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-39",
      layer: "mid",
      motif: "cloud",
      x: 4399,
      y: 273,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-40",
      layer: "far",
      motif: "windmill",
      x: 4496,
      y: 314,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-41",
      layer: "near",
      motif: "grass",
      x: 4593,
      y: 355,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-42",
      layer: "far",
      motif: "gear",
      x: 4690,
      y: 396,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-43",
      layer: "mid",
      motif: "vine",
      x: 4787,
      y: 437,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-44",
      layer: "far",
      motif: "glassBerry",
      x: 4884,
      y: 48,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-45",
      layer: "mid",
      motif: "cloud",
      x: 53,
      y: 89,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-46",
      layer: "near",
      motif: "windmill",
      x: 150,
      y: 130,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-47",
      layer: "mid",
      motif: "grass",
      x: 247,
      y: 171,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-48",
      layer: "far",
      motif: "gear",
      x: 344,
      y: 212,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-49",
      layer: "mid",
      motif: "vine",
      x: 441,
      y: 253,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-50",
      layer: "far",
      motif: "glassBerry",
      x: 538,
      y: 294,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-51",
      layer: "near",
      motif: "cloud",
      x: 635,
      y: 335,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-52",
      layer: "far",
      motif: "windmill",
      x: 732,
      y: 376,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-53",
      layer: "mid",
      motif: "grass",
      x: 829,
      y: 417,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-54",
      layer: "far",
      motif: "gear",
      x: 926,
      y: 458,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-55",
      layer: "mid",
      motif: "vine",
      x: 1023,
      y: 69,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-56",
      layer: "near",
      motif: "glassBerry",
      x: 1120,
      y: 110,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-57",
      layer: "mid",
      motif: "cloud",
      x: 1217,
      y: 151,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-58",
      layer: "far",
      motif: "windmill",
      x: 1314,
      y: 192,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-59",
      layer: "mid",
      motif: "grass",
      x: 1411,
      y: 233,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-60",
      layer: "far",
      motif: "gear",
      x: 1508,
      y: 274,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-61",
      layer: "near",
      motif: "vine",
      x: 1605,
      y: 315,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-62",
      layer: "far",
      motif: "glassBerry",
      x: 1702,
      y: 356,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-63",
      layer: "mid",
      motif: "cloud",
      x: 1799,
      y: 397,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-64",
      layer: "far",
      motif: "windmill",
      x: 1896,
      y: 438,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-65",
      layer: "mid",
      motif: "grass",
      x: 1993,
      y: 49,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-66",
      layer: "near",
      motif: "gear",
      x: 2090,
      y: 90,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-67",
      layer: "mid",
      motif: "vine",
      x: 2187,
      y: 131,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-68",
      layer: "far",
      motif: "glassBerry",
      x: 2284,
      y: 172,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-69",
      layer: "mid",
      motif: "cloud",
      x: 2381,
      y: 213,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-70",
      layer: "far",
      motif: "windmill",
      x: 2478,
      y: 254,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-71",
      layer: "near",
      motif: "grass",
      x: 2575,
      y: 295,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-72",
      layer: "far",
      motif: "gear",
      x: 2672,
      y: 336,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-73",
      layer: "mid",
      motif: "vine",
      x: 2769,
      y: 377,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-74",
      layer: "far",
      motif: "glassBerry",
      x: 2866,
      y: 418,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-75",
      layer: "mid",
      motif: "cloud",
      x: 2963,
      y: 459,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-76",
      layer: "near",
      motif: "windmill",
      x: 3060,
      y: 70,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-77",
      layer: "mid",
      motif: "grass",
      x: 3157,
      y: 111,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-78",
      layer: "far",
      motif: "gear",
      x: 3254,
      y: 152,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-79",
      layer: "mid",
      motif: "vine",
      x: 3351,
      y: 193,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-80",
      layer: "far",
      motif: "glassBerry",
      x: 3448,
      y: 234,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-81",
      layer: "near",
      motif: "cloud",
      x: 3545,
      y: 275,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-82",
      layer: "far",
      motif: "windmill",
      x: 3642,
      y: 316,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-83",
      layer: "mid",
      motif: "grass",
      x: 3739,
      y: 357,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-84",
      layer: "far",
      motif: "gear",
      x: 3836,
      y: 398,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-85",
      layer: "mid",
      motif: "vine",
      x: 3933,
      y: 439,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-86",
      layer: "near",
      motif: "glassBerry",
      x: 4030,
      y: 50,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-87",
      layer: "mid",
      motif: "cloud",
      x: 4127,
      y: 91,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-88",
      layer: "far",
      motif: "windmill",
      x: 4224,
      y: 132,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-89",
      layer: "mid",
      motif: "grass",
      x: 4321,
      y: 173,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-90",
      layer: "far",
      motif: "gear",
      x: 4418,
      y: 214,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-91",
      layer: "near",
      motif: "vine",
      x: 4515,
      y: 255,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-92",
      layer: "far",
      motif: "glassBerry",
      x: 4612,
      y: 296,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-93",
      layer: "mid",
      motif: "cloud",
      x: 4709,
      y: 337,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-94",
      layer: "far",
      motif: "windmill",
      x: 4806,
      y: 378,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-95",
      layer: "mid",
      motif: "grass",
      x: 4903,
      y: 419,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-96",
      layer: "near",
      motif: "gear",
      x: 72,
      y: 460,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-97",
      layer: "mid",
      motif: "vine",
      x: 169,
      y: 71,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-98",
      layer: "far",
      motif: "glassBerry",
      x: 266,
      y: 112,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-99",
      layer: "mid",
      motif: "cloud",
      x: 363,
      y: 153,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-100",
      layer: "far",
      motif: "windmill",
      x: 460,
      y: 194,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-101",
      layer: "near",
      motif: "grass",
      x: 557,
      y: 235,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-102",
      layer: "far",
      motif: "gear",
      x: 654,
      y: 276,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-103",
      layer: "mid",
      motif: "vine",
      x: 751,
      y: 317,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-104",
      layer: "far",
      motif: "glassBerry",
      x: 848,
      y: 358,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-105",
      layer: "mid",
      motif: "cloud",
      x: 945,
      y: 399,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-106",
      layer: "near",
      motif: "windmill",
      x: 1042,
      y: 440,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-107",
      layer: "mid",
      motif: "grass",
      x: 1139,
      y: 51,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-108",
      layer: "far",
      motif: "gear",
      x: 1236,
      y: 92,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-109",
      layer: "mid",
      motif: "vine",
      x: 1333,
      y: 133,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-110",
      layer: "far",
      motif: "glassBerry",
      x: 1430,
      y: 174,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-111",
      layer: "near",
      motif: "cloud",
      x: 1527,
      y: 215,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-112",
      layer: "far",
      motif: "windmill",
      x: 1624,
      y: 256,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-113",
      layer: "mid",
      motif: "grass",
      x: 1721,
      y: 297,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-114",
      layer: "far",
      motif: "gear",
      x: 1818,
      y: 338,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-115",
      layer: "mid",
      motif: "vine",
      x: 1915,
      y: 379,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-116",
      layer: "near",
      motif: "glassBerry",
      x: 2012,
      y: 420,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-117",
      layer: "mid",
      motif: "cloud",
      x: 2109,
      y: 461,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-118",
      layer: "far",
      motif: "windmill",
      x: 2206,
      y: 72,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-119",
      layer: "mid",
      motif: "grass",
      x: 2303,
      y: 113,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-120",
      layer: "far",
      motif: "gear",
      x: 2400,
      y: 154,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-121",
      layer: "near",
      motif: "vine",
      x: 2497,
      y: 195,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-122",
      layer: "far",
      motif: "glassBerry",
      x: 2594,
      y: 236,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-123",
      layer: "mid",
      motif: "cloud",
      x: 2691,
      y: 277,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-124",
      layer: "far",
      motif: "windmill",
      x: 2788,
      y: 318,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-125",
      layer: "mid",
      motif: "grass",
      x: 2885,
      y: 359,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-126",
      layer: "near",
      motif: "gear",
      x: 2982,
      y: 400,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-127",
      layer: "mid",
      motif: "vine",
      x: 3079,
      y: 441,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-128",
      layer: "far",
      motif: "glassBerry",
      x: 3176,
      y: 52,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-129",
      layer: "mid",
      motif: "cloud",
      x: 3273,
      y: 93,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-130",
      layer: "far",
      motif: "windmill",
      x: 3370,
      y: 134,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-131",
      layer: "near",
      motif: "grass",
      x: 3467,
      y: 175,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-132",
      layer: "far",
      motif: "gear",
      x: 3564,
      y: 216,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-133",
      layer: "mid",
      motif: "vine",
      x: 3661,
      y: 257,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-134",
      layer: "far",
      motif: "glassBerry",
      x: 3758,
      y: 298,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-135",
      layer: "mid",
      motif: "cloud",
      x: 3855,
      y: 339,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-136",
      layer: "near",
      motif: "windmill",
      x: 3952,
      y: 380,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-137",
      layer: "mid",
      motif: "grass",
      x: 4049,
      y: 421,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-138",
      layer: "far",
      motif: "gear",
      x: 4146,
      y: 32,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-139",
      layer: "mid",
      motif: "vine",
      x: 4243,
      y: 73,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-140",
      layer: "far",
      motif: "glassBerry",
      x: 4340,
      y: 114,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-141",
      layer: "near",
      motif: "cloud",
      x: 4437,
      y: 155,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-142",
      layer: "far",
      motif: "windmill",
      x: 4534,
      y: 196,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-143",
      layer: "mid",
      motif: "grass",
      x: 4631,
      y: 237,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-144",
      layer: "far",
      motif: "gear",
      x: 4728,
      y: 278,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-145",
      layer: "mid",
      motif: "vine",
      x: 4825,
      y: 319,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-146",
      layer: "near",
      motif: "glassBerry",
      x: 4922,
      y: 360,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-147",
      layer: "mid",
      motif: "cloud",
      x: 91,
      y: 401,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-148",
      layer: "far",
      motif: "windmill",
      x: 188,
      y: 442,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-149",
      layer: "mid",
      motif: "grass",
      x: 285,
      y: 53,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-150",
      layer: "far",
      motif: "gear",
      x: 382,
      y: 94,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-151",
      layer: "near",
      motif: "vine",
      x: 479,
      y: 135,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-152",
      layer: "far",
      motif: "glassBerry",
      x: 576,
      y: 176,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-153",
      layer: "mid",
      motif: "cloud",
      x: 673,
      y: 217,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-154",
      layer: "far",
      motif: "windmill",
      x: 770,
      y: 258,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-155",
      layer: "mid",
      motif: "grass",
      x: 867,
      y: 299,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-156",
      layer: "near",
      motif: "gear",
      x: 964,
      y: 340,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-157",
      layer: "mid",
      motif: "vine",
      x: 1061,
      y: 381,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-158",
      layer: "far",
      motif: "glassBerry",
      x: 1158,
      y: 422,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-159",
      layer: "mid",
      motif: "cloud",
      x: 1255,
      y: 33,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-160",
      layer: "far",
      motif: "windmill",
      x: 1352,
      y: 74,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-161",
      layer: "near",
      motif: "grass",
      x: 1449,
      y: 115,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-162",
      layer: "far",
      motif: "gear",
      x: 1546,
      y: 156,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-163",
      layer: "mid",
      motif: "vine",
      x: 1643,
      y: 197,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-164",
      layer: "far",
      motif: "glassBerry",
      x: 1740,
      y: 238,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-165",
      layer: "mid",
      motif: "cloud",
      x: 1837,
      y: 279,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-166",
      layer: "near",
      motif: "windmill",
      x: 1934,
      y: 320,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-167",
      layer: "mid",
      motif: "grass",
      x: 2031,
      y: 361,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-168",
      layer: "far",
      motif: "gear",
      x: 2128,
      y: 402,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-169",
      layer: "mid",
      motif: "vine",
      x: 2225,
      y: 443,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-170",
      layer: "far",
      motif: "glassBerry",
      x: 2322,
      y: 54,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-32-171",
      layer: "near",
      motif: "cloud",
      x: 2419,
      y: 95,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-172",
      layer: "far",
      motif: "windmill",
      x: 2516,
      y: 136,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-32-173",
      layer: "mid",
      motif: "grass",
      x: 2613,
      y: 177,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-32-174",
      layer: "far",
      motif: "gear",
      x: 2710,
      y: 218,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-32-175",
      layer: "mid",
      motif: "vine",
      x: 2807,
      y: 259,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-32-176",
      layer: "near",
      motif: "glassBerry",
      x: 2904,
      y: 300,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-32-177",
      layer: "mid",
      motif: "cloud",
      x: 3001,
      y: 341,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-32-178",
      layer: "far",
      motif: "windmill",
      x: 3098,
      y: 382,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-32-179",
      layer: "mid",
      motif: "grass",
      x: 3195,
      y: 423,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-32-180",
      layer: "far",
      motif: "gear",
      x: 3292,
      y: 34,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-32",
    x: 4736,
    y: 448,
    nextLevelId: "level-33"
  }
};
