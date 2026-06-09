import type { LevelDefinition } from "../schema";

export const LEVEL_04: LevelDefinition = {
  id: "level-04",
  index: 3,
  title: "Brassroot Verge 04",
  chapter: "Brassroot Verge",
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
    ".......................###...........................####..........................#####.........................######........................###........",
    "..................#######.......................###...........................####..........................#####.........................######..........",
    ".............======........................=======.......................===...........................====..........................=====................",
    "......................................######........................#######.......................###...........................####......................",
    ".................................#####.........................######........................#######.......................###............................",
    "............................====............W.............=====.................W.......======......................W.=======.............................",
    "...................................S...................................S...................................S..............................................",
    "...P......................W...................................W...................................W...................................W.............G.....",
    ".................S...................................S...................................S...................................S............................",
    "^################^..#############..#############..#^###########..###^#########..#####^#######..#######^#####..#########^###..###########^################^",
    "##################.^#############^.#############.^#############^.#############.^#############^.#############.^#############^.#############################"
  ],
  enemies: [
    {
      id: "enemy-4-1",
      kind: "charger",
      x: 504,
      y: 448,
      patrolMin: 409,
      patrolMax: 624,
      speed: 80,
      phase: 3
    },
    {
      id: "enemy-4-2",
      kind: "spiker",
      x: 834,
      y: 416,
      patrolMin: 721,
      patrolMax: 976,
      speed: 92,
      phase: 6
    },
    {
      id: "enemy-4-3",
      kind: "turret",
      x: 1164,
      y: 384,
      patrolMin: 1033,
      patrolMax: 1328,
      speed: 104,
      phase: 9
    },
    {
      id: "enemy-4-4",
      kind: "beetle",
      x: 1494,
      y: 352,
      patrolMin: 1345,
      patrolMax: 1680,
      speed: 44,
      phase: 12
    },
    {
      id: "enemy-4-5",
      kind: "acorn",
      x: 1824,
      y: 320,
      patrolMin: 1729,
      patrolMax: 2032,
      speed: 56,
      phase: 15
    },
    {
      id: "enemy-4-6",
      kind: "lantern",
      x: 2154,
      y: 448,
      patrolMin: 2041,
      patrolMax: 2274,
      speed: 68,
      phase: 18
    },
    {
      id: "enemy-4-7",
      kind: "charger",
      x: 2484,
      y: 416,
      patrolMin: 2353,
      patrolMax: 2626,
      speed: 80,
      phase: 21
    },
    {
      id: "enemy-4-8",
      kind: "spiker",
      x: 2814,
      y: 384,
      patrolMin: 2665,
      patrolMax: 2978,
      speed: 92,
      phase: 24
    },
    {
      id: "enemy-4-9",
      kind: "turret",
      x: 3144,
      y: 352,
      patrolMin: 3049,
      patrolMax: 3330,
      speed: 104,
      phase: 27
    },
    {
      id: "enemy-4-10",
      kind: "beetle",
      x: 3474,
      y: 320,
      patrolMin: 3361,
      patrolMax: 3682,
      speed: 44,
      phase: 30
    },
    {
      id: "enemy-4-11",
      kind: "acorn",
      x: 3804,
      y: 448,
      patrolMin: 3673,
      patrolMax: 3924,
      speed: 56,
      phase: 33
    },
    {
      id: "enemy-4-12",
      kind: "lantern",
      x: 4134,
      y: 416,
      patrolMin: 3985,
      patrolMax: 4276,
      speed: 68,
      phase: 36
    },
    {
      id: "enemy-4-13",
      kind: "charger",
      x: 4464,
      y: 384,
      patrolMin: 4369,
      patrolMax: 4628,
      speed: 80,
      phase: 39
    },
    {
      id: "enemy-4-14",
      kind: "spiker",
      x: 4794,
      y: 352,
      patrolMin: 4681,
      patrolMax: 4748,
      speed: 92,
      phase: 42
    },
    {
      id: "enemy-4-15",
      kind: "turret",
      x: 5124,
      y: 320,
      patrolMin: 4993,
      patrolMax: 4748,
      speed: 104,
      phase: 45
    }
  ],
  collectibles: [
    {
      id: "collectible-4-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 216,
      y: 140
    },
    {
      id: "collectible-4-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 286,
      y: 193
    },
    {
      id: "collectible-4-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 356,
      y: 246
    },
    {
      id: "collectible-4-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 426,
      y: 266
    },
    {
      id: "collectible-4-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 496,
      y: 319
    },
    {
      id: "collectible-4-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 566,
      y: 372
    },
    {
      id: "collectible-4-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 636,
      y: 392
    },
    {
      id: "collectible-4-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 706,
      y: 151
    },
    {
      id: "collectible-4-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 776,
      y: 204
    },
    {
      id: "collectible-4-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 846,
      y: 224
    },
    {
      id: "collectible-4-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 916,
      y: 277
    },
    {
      id: "collectible-4-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 986,
      y: 330
    },
    {
      id: "collectible-4-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1056,
      y: 350
    },
    {
      id: "collectible-4-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1126,
      y: 403
    },
    {
      id: "collectible-4-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1196,
      y: 162
    },
    {
      id: "collectible-4-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1266,
      y: 182
    },
    {
      id: "collectible-4-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1336,
      y: 235
    },
    {
      id: "collectible-4-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1406,
      y: 288
    },
    {
      id: "collectible-4-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1476,
      y: 308
    },
    {
      id: "collectible-4-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1546,
      y: 361
    },
    {
      id: "collectible-4-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1616,
      y: 414
    },
    {
      id: "collectible-4-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1686,
      y: 140
    },
    {
      id: "collectible-4-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1756,
      y: 193
    },
    {
      id: "collectible-4-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1826,
      y: 246
    },
    {
      id: "collectible-4-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1896,
      y: 266
    },
    {
      id: "collectible-4-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1966,
      y: 319
    },
    {
      id: "collectible-4-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2036,
      y: 372
    },
    {
      id: "collectible-4-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2106,
      y: 392
    },
    {
      id: "collectible-4-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2176,
      y: 151
    },
    {
      id: "collectible-4-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2246,
      y: 204
    },
    {
      id: "collectible-4-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2316,
      y: 224
    },
    {
      id: "collectible-4-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2386,
      y: 277
    },
    {
      id: "collectible-4-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2456,
      y: 330
    },
    {
      id: "collectible-4-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2526,
      y: 350
    },
    {
      id: "collectible-4-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2596,
      y: 403
    },
    {
      id: "collectible-4-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2666,
      y: 162
    },
    {
      id: "collectible-4-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2736,
      y: 182
    },
    {
      id: "collectible-4-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2806,
      y: 235
    },
    {
      id: "collectible-4-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2876,
      y: 288
    },
    {
      id: "collectible-4-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2946,
      y: 308
    },
    {
      id: "collectible-4-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3016,
      y: 361
    },
    {
      id: "collectible-4-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3086,
      y: 414
    },
    {
      id: "collectible-4-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3156,
      y: 140
    },
    {
      id: "collectible-4-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3226,
      y: 193
    },
    {
      id: "collectible-4-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3296,
      y: 246
    },
    {
      id: "collectible-4-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3366,
      y: 266
    },
    {
      id: "collectible-4-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3436,
      y: 319
    },
    {
      id: "collectible-4-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3506,
      y: 372
    },
    {
      id: "collectible-4-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3576,
      y: 392
    },
    {
      id: "collectible-4-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3646,
      y: 151
    },
    {
      id: "collectible-4-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3716,
      y: 204
    },
    {
      id: "collectible-4-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3786,
      y: 224
    },
    {
      id: "collectible-4-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3856,
      y: 277
    },
    {
      id: "collectible-4-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3926,
      y: 330
    },
    {
      id: "collectible-4-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3996,
      y: 350
    },
    {
      id: "collectible-4-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4066,
      y: 403
    },
    {
      id: "collectible-4-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4136,
      y: 162
    },
    {
      id: "collectible-4-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4206,
      y: 182
    },
    {
      id: "collectible-4-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4276,
      y: 235
    },
    {
      id: "collectible-4-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4346,
      y: 288
    },
    {
      id: "collectible-4-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4416,
      y: 308
    },
    {
      id: "collectible-4-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4486,
      y: 361
    },
    {
      id: "collectible-4-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4556,
      y: 414
    },
    {
      id: "collectible-4-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4626,
      y: 140
    },
    {
      id: "collectible-4-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4696,
      y: 193
    },
    {
      id: "collectible-4-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4766,
      y: 246
    },
    {
      id: "collectible-4-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4836,
      y: 266
    },
    {
      id: "collectible-4-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4906,
      y: 319
    },
    {
      id: "collectible-4-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4976,
      y: 372
    },
    {
      id: "collectible-4-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5046,
      y: 392
    },
    {
      id: "collectible-4-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5116,
      y: 151
    },
    {
      id: "collectible-4-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5186,
      y: 204
    },
    {
      id: "collectible-4-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5256,
      y: 224
    },
    {
      id: "collectible-4-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5326,
      y: 277
    }
  ],
  powerups: [
    {
      id: "powerup-4-1",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 590,
      y: 130
    },
    {
      id: "powerup-4-2",
      kind: "shield",
      durationMs: 5700,
      x: 1420,
      y: 182
    },
    {
      id: "powerup-4-3",
      kind: "springBoots",
      durationMs: 6600,
      x: 2250,
      y: 234
    },
    {
      id: "powerup-4-4",
      kind: "starburst",
      durationMs: 7500,
      x: 3080,
      y: 286
    },
    {
      id: "powerup-4-5",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 3910,
      y: 338
    },
    {
      id: "powerup-4-6",
      kind: "shield",
      durationMs: 5700,
      x: 4740,
      y: 130
    },
    {
      id: "powerup-4-7",
      kind: "springBoots",
      durationMs: 6600,
      x: 5570,
      y: 182
    },
    {
      id: "powerup-4-8",
      kind: "starburst",
      durationMs: 7500,
      x: 6400,
      y: 234
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-4-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 0.30000000000000004
    },
    {
      id: "moving-platform-4-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 1
    },
    {
      id: "moving-platform-4-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 1.7
    },
    {
      id: "moving-platform-4-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 2.3999999999999995
    },
    {
      id: "moving-platform-4-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 3.0999999999999996
    },
    {
      id: "moving-platform-4-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 3.8
    },
    {
      id: "moving-platform-4-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 4.499999999999999
    },
    {
      id: "moving-platform-4-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 5.199999999999999
    },
    {
      id: "moving-platform-4-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 5.8999999999999995
    },
    {
      id: "moving-platform-4-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 6.6
    }
  ],
  hazards: [
    {
      id: "hazard-4-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 3
    },
    {
      id: "hazard-4-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 4
    },
    {
      id: "hazard-4-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 5
    },
    {
      id: "hazard-4-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 6
    },
    {
      id: "hazard-4-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 7
    },
    {
      id: "hazard-4-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 8
    },
    {
      id: "hazard-4-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 9
    },
    {
      id: "hazard-4-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 10
    },
    {
      id: "hazard-4-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 11
    },
    {
      id: "hazard-4-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 12
    },
    {
      id: "hazard-4-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 13
    },
    {
      id: "hazard-4-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 14
    },
    {
      id: "hazard-4-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 15
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-4-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-4-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-4-1",
      x: 640,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-4-2",
      x: 1410,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-4-3",
      x: 2180,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-4-4",
      x: 2950,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-4-5",
      x: 3720,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-4-6",
      x: 4490,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-4-7",
      x: 5260,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-4-8",
      x: 6030,
      y: 384,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-4-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-4-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-4-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-4-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-4-5",
      x: 4660,
      y: 180,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-4-6",
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
      id: "decor-4-1",
      layer: "near",
      motif: "cloud",
      x: 69,
      y: 71,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-2",
      layer: "far",
      motif: "windmill",
      x: 166,
      y: 112,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-3",
      layer: "mid",
      motif: "grass",
      x: 263,
      y: 153,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-4",
      layer: "far",
      motif: "gear",
      x: 360,
      y: 194,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-5",
      layer: "mid",
      motif: "vine",
      x: 457,
      y: 235,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-6",
      layer: "near",
      motif: "glassBerry",
      x: 554,
      y: 276,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-7",
      layer: "mid",
      motif: "cloud",
      x: 651,
      y: 317,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-8",
      layer: "far",
      motif: "windmill",
      x: 748,
      y: 358,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-9",
      layer: "mid",
      motif: "grass",
      x: 845,
      y: 399,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-10",
      layer: "far",
      motif: "gear",
      x: 942,
      y: 440,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-11",
      layer: "near",
      motif: "vine",
      x: 1039,
      y: 51,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-12",
      layer: "far",
      motif: "glassBerry",
      x: 1136,
      y: 92,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-13",
      layer: "mid",
      motif: "cloud",
      x: 1233,
      y: 133,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-14",
      layer: "far",
      motif: "windmill",
      x: 1330,
      y: 174,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-15",
      layer: "mid",
      motif: "grass",
      x: 1427,
      y: 215,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-16",
      layer: "near",
      motif: "gear",
      x: 1524,
      y: 256,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-17",
      layer: "mid",
      motif: "vine",
      x: 1621,
      y: 297,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-18",
      layer: "far",
      motif: "glassBerry",
      x: 1718,
      y: 338,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-19",
      layer: "mid",
      motif: "cloud",
      x: 1815,
      y: 379,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-20",
      layer: "far",
      motif: "windmill",
      x: 1912,
      y: 420,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-21",
      layer: "near",
      motif: "grass",
      x: 2009,
      y: 461,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-22",
      layer: "far",
      motif: "gear",
      x: 2106,
      y: 72,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-23",
      layer: "mid",
      motif: "vine",
      x: 2203,
      y: 113,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-24",
      layer: "far",
      motif: "glassBerry",
      x: 2300,
      y: 154,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-25",
      layer: "mid",
      motif: "cloud",
      x: 2397,
      y: 195,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-26",
      layer: "near",
      motif: "windmill",
      x: 2494,
      y: 236,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-27",
      layer: "mid",
      motif: "grass",
      x: 2591,
      y: 277,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-28",
      layer: "far",
      motif: "gear",
      x: 2688,
      y: 318,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-29",
      layer: "mid",
      motif: "vine",
      x: 2785,
      y: 359,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-30",
      layer: "far",
      motif: "glassBerry",
      x: 2882,
      y: 400,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-31",
      layer: "near",
      motif: "cloud",
      x: 2979,
      y: 441,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-32",
      layer: "far",
      motif: "windmill",
      x: 3076,
      y: 52,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-33",
      layer: "mid",
      motif: "grass",
      x: 3173,
      y: 93,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-34",
      layer: "far",
      motif: "gear",
      x: 3270,
      y: 134,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-35",
      layer: "mid",
      motif: "vine",
      x: 3367,
      y: 175,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-36",
      layer: "near",
      motif: "glassBerry",
      x: 3464,
      y: 216,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-37",
      layer: "mid",
      motif: "cloud",
      x: 3561,
      y: 257,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-38",
      layer: "far",
      motif: "windmill",
      x: 3658,
      y: 298,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-39",
      layer: "mid",
      motif: "grass",
      x: 3755,
      y: 339,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-40",
      layer: "far",
      motif: "gear",
      x: 3852,
      y: 380,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-41",
      layer: "near",
      motif: "vine",
      x: 3949,
      y: 421,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-42",
      layer: "far",
      motif: "glassBerry",
      x: 4046,
      y: 32,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-43",
      layer: "mid",
      motif: "cloud",
      x: 4143,
      y: 73,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-44",
      layer: "far",
      motif: "windmill",
      x: 4240,
      y: 114,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-45",
      layer: "mid",
      motif: "grass",
      x: 4337,
      y: 155,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-46",
      layer: "near",
      motif: "gear",
      x: 4434,
      y: 196,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-47",
      layer: "mid",
      motif: "vine",
      x: 4531,
      y: 237,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-48",
      layer: "far",
      motif: "glassBerry",
      x: 4628,
      y: 278,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-49",
      layer: "mid",
      motif: "cloud",
      x: 4725,
      y: 319,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-50",
      layer: "far",
      motif: "windmill",
      x: 4822,
      y: 360,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-51",
      layer: "near",
      motif: "grass",
      x: 4919,
      y: 401,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-52",
      layer: "far",
      motif: "gear",
      x: 88,
      y: 442,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-53",
      layer: "mid",
      motif: "vine",
      x: 185,
      y: 53,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-54",
      layer: "far",
      motif: "glassBerry",
      x: 282,
      y: 94,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-55",
      layer: "mid",
      motif: "cloud",
      x: 379,
      y: 135,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-56",
      layer: "near",
      motif: "windmill",
      x: 476,
      y: 176,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-57",
      layer: "mid",
      motif: "grass",
      x: 573,
      y: 217,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-58",
      layer: "far",
      motif: "gear",
      x: 670,
      y: 258,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-59",
      layer: "mid",
      motif: "vine",
      x: 767,
      y: 299,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-60",
      layer: "far",
      motif: "glassBerry",
      x: 864,
      y: 340,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-61",
      layer: "near",
      motif: "cloud",
      x: 961,
      y: 381,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-62",
      layer: "far",
      motif: "windmill",
      x: 1058,
      y: 422,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-63",
      layer: "mid",
      motif: "grass",
      x: 1155,
      y: 33,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-64",
      layer: "far",
      motif: "gear",
      x: 1252,
      y: 74,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-65",
      layer: "mid",
      motif: "vine",
      x: 1349,
      y: 115,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-66",
      layer: "near",
      motif: "glassBerry",
      x: 1446,
      y: 156,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-67",
      layer: "mid",
      motif: "cloud",
      x: 1543,
      y: 197,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-68",
      layer: "far",
      motif: "windmill",
      x: 1640,
      y: 238,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-69",
      layer: "mid",
      motif: "grass",
      x: 1737,
      y: 279,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-70",
      layer: "far",
      motif: "gear",
      x: 1834,
      y: 320,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-71",
      layer: "near",
      motif: "vine",
      x: 1931,
      y: 361,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-72",
      layer: "far",
      motif: "glassBerry",
      x: 2028,
      y: 402,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-73",
      layer: "mid",
      motif: "cloud",
      x: 2125,
      y: 443,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-74",
      layer: "far",
      motif: "windmill",
      x: 2222,
      y: 54,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-75",
      layer: "mid",
      motif: "grass",
      x: 2319,
      y: 95,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-76",
      layer: "near",
      motif: "gear",
      x: 2416,
      y: 136,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-77",
      layer: "mid",
      motif: "vine",
      x: 2513,
      y: 177,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-78",
      layer: "far",
      motif: "glassBerry",
      x: 2610,
      y: 218,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-79",
      layer: "mid",
      motif: "cloud",
      x: 2707,
      y: 259,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-80",
      layer: "far",
      motif: "windmill",
      x: 2804,
      y: 300,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-81",
      layer: "near",
      motif: "grass",
      x: 2901,
      y: 341,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-82",
      layer: "far",
      motif: "gear",
      x: 2998,
      y: 382,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-83",
      layer: "mid",
      motif: "vine",
      x: 3095,
      y: 423,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-84",
      layer: "far",
      motif: "glassBerry",
      x: 3192,
      y: 34,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-85",
      layer: "mid",
      motif: "cloud",
      x: 3289,
      y: 75,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-86",
      layer: "near",
      motif: "windmill",
      x: 3386,
      y: 116,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-87",
      layer: "mid",
      motif: "grass",
      x: 3483,
      y: 157,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-88",
      layer: "far",
      motif: "gear",
      x: 3580,
      y: 198,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-89",
      layer: "mid",
      motif: "vine",
      x: 3677,
      y: 239,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-90",
      layer: "far",
      motif: "glassBerry",
      x: 3774,
      y: 280,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-91",
      layer: "near",
      motif: "cloud",
      x: 3871,
      y: 321,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-92",
      layer: "far",
      motif: "windmill",
      x: 3968,
      y: 362,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-93",
      layer: "mid",
      motif: "grass",
      x: 4065,
      y: 403,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-94",
      layer: "far",
      motif: "gear",
      x: 4162,
      y: 444,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-95",
      layer: "mid",
      motif: "vine",
      x: 4259,
      y: 55,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-96",
      layer: "near",
      motif: "glassBerry",
      x: 4356,
      y: 96,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-97",
      layer: "mid",
      motif: "cloud",
      x: 4453,
      y: 137,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-98",
      layer: "far",
      motif: "windmill",
      x: 4550,
      y: 178,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-99",
      layer: "mid",
      motif: "grass",
      x: 4647,
      y: 219,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-100",
      layer: "far",
      motif: "gear",
      x: 4744,
      y: 260,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-101",
      layer: "near",
      motif: "vine",
      x: 4841,
      y: 301,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-102",
      layer: "far",
      motif: "glassBerry",
      x: 10,
      y: 342,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-103",
      layer: "mid",
      motif: "cloud",
      x: 107,
      y: 383,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-104",
      layer: "far",
      motif: "windmill",
      x: 204,
      y: 424,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-105",
      layer: "mid",
      motif: "grass",
      x: 301,
      y: 35,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-106",
      layer: "near",
      motif: "gear",
      x: 398,
      y: 76,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-107",
      layer: "mid",
      motif: "vine",
      x: 495,
      y: 117,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-108",
      layer: "far",
      motif: "glassBerry",
      x: 592,
      y: 158,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-109",
      layer: "mid",
      motif: "cloud",
      x: 689,
      y: 199,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-110",
      layer: "far",
      motif: "windmill",
      x: 786,
      y: 240,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-111",
      layer: "near",
      motif: "grass",
      x: 883,
      y: 281,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-112",
      layer: "far",
      motif: "gear",
      x: 980,
      y: 322,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-113",
      layer: "mid",
      motif: "vine",
      x: 1077,
      y: 363,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-114",
      layer: "far",
      motif: "glassBerry",
      x: 1174,
      y: 404,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-115",
      layer: "mid",
      motif: "cloud",
      x: 1271,
      y: 445,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-116",
      layer: "near",
      motif: "windmill",
      x: 1368,
      y: 56,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-117",
      layer: "mid",
      motif: "grass",
      x: 1465,
      y: 97,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-118",
      layer: "far",
      motif: "gear",
      x: 1562,
      y: 138,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-119",
      layer: "mid",
      motif: "vine",
      x: 1659,
      y: 179,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-120",
      layer: "far",
      motif: "glassBerry",
      x: 1756,
      y: 220,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-121",
      layer: "near",
      motif: "cloud",
      x: 1853,
      y: 261,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-122",
      layer: "far",
      motif: "windmill",
      x: 1950,
      y: 302,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-123",
      layer: "mid",
      motif: "grass",
      x: 2047,
      y: 343,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-124",
      layer: "far",
      motif: "gear",
      x: 2144,
      y: 384,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-125",
      layer: "mid",
      motif: "vine",
      x: 2241,
      y: 425,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-126",
      layer: "near",
      motif: "glassBerry",
      x: 2338,
      y: 36,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-127",
      layer: "mid",
      motif: "cloud",
      x: 2435,
      y: 77,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-128",
      layer: "far",
      motif: "windmill",
      x: 2532,
      y: 118,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-129",
      layer: "mid",
      motif: "grass",
      x: 2629,
      y: 159,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-130",
      layer: "far",
      motif: "gear",
      x: 2726,
      y: 200,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-131",
      layer: "near",
      motif: "vine",
      x: 2823,
      y: 241,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-132",
      layer: "far",
      motif: "glassBerry",
      x: 2920,
      y: 282,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-133",
      layer: "mid",
      motif: "cloud",
      x: 3017,
      y: 323,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-134",
      layer: "far",
      motif: "windmill",
      x: 3114,
      y: 364,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-135",
      layer: "mid",
      motif: "grass",
      x: 3211,
      y: 405,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-136",
      layer: "near",
      motif: "gear",
      x: 3308,
      y: 446,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-137",
      layer: "mid",
      motif: "vine",
      x: 3405,
      y: 57,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-138",
      layer: "far",
      motif: "glassBerry",
      x: 3502,
      y: 98,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-139",
      layer: "mid",
      motif: "cloud",
      x: 3599,
      y: 139,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-140",
      layer: "far",
      motif: "windmill",
      x: 3696,
      y: 180,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-141",
      layer: "near",
      motif: "grass",
      x: 3793,
      y: 221,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-142",
      layer: "far",
      motif: "gear",
      x: 3890,
      y: 262,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-143",
      layer: "mid",
      motif: "vine",
      x: 3987,
      y: 303,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-144",
      layer: "far",
      motif: "glassBerry",
      x: 4084,
      y: 344,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-145",
      layer: "mid",
      motif: "cloud",
      x: 4181,
      y: 385,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-146",
      layer: "near",
      motif: "windmill",
      x: 4278,
      y: 426,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-147",
      layer: "mid",
      motif: "grass",
      x: 4375,
      y: 37,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-148",
      layer: "far",
      motif: "gear",
      x: 4472,
      y: 78,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-149",
      layer: "mid",
      motif: "vine",
      x: 4569,
      y: 119,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-150",
      layer: "far",
      motif: "glassBerry",
      x: 4666,
      y: 160,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-151",
      layer: "near",
      motif: "cloud",
      x: 4763,
      y: 201,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-152",
      layer: "far",
      motif: "windmill",
      x: 4860,
      y: 242,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-153",
      layer: "mid",
      motif: "grass",
      x: 29,
      y: 283,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-154",
      layer: "far",
      motif: "gear",
      x: 126,
      y: 324,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-155",
      layer: "mid",
      motif: "vine",
      x: 223,
      y: 365,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-156",
      layer: "near",
      motif: "glassBerry",
      x: 320,
      y: 406,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-157",
      layer: "mid",
      motif: "cloud",
      x: 417,
      y: 447,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-158",
      layer: "far",
      motif: "windmill",
      x: 514,
      y: 58,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-159",
      layer: "mid",
      motif: "grass",
      x: 611,
      y: 99,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-160",
      layer: "far",
      motif: "gear",
      x: 708,
      y: 140,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-161",
      layer: "near",
      motif: "vine",
      x: 805,
      y: 181,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-162",
      layer: "far",
      motif: "glassBerry",
      x: 902,
      y: 222,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-163",
      layer: "mid",
      motif: "cloud",
      x: 999,
      y: 263,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-164",
      layer: "far",
      motif: "windmill",
      x: 1096,
      y: 304,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-165",
      layer: "mid",
      motif: "grass",
      x: 1193,
      y: 345,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-166",
      layer: "near",
      motif: "gear",
      x: 1290,
      y: 386,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-167",
      layer: "mid",
      motif: "vine",
      x: 1387,
      y: 427,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-168",
      layer: "far",
      motif: "glassBerry",
      x: 1484,
      y: 38,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-169",
      layer: "mid",
      motif: "cloud",
      x: 1581,
      y: 79,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-170",
      layer: "far",
      motif: "windmill",
      x: 1678,
      y: 120,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-4-171",
      layer: "near",
      motif: "grass",
      x: 1775,
      y: 161,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-172",
      layer: "far",
      motif: "gear",
      x: 1872,
      y: 202,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-4-173",
      layer: "mid",
      motif: "vine",
      x: 1969,
      y: 243,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-4-174",
      layer: "far",
      motif: "glassBerry",
      x: 2066,
      y: 284,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-4-175",
      layer: "mid",
      motif: "cloud",
      x: 2163,
      y: 325,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-4-176",
      layer: "near",
      motif: "windmill",
      x: 2260,
      y: 366,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-4-177",
      layer: "mid",
      motif: "grass",
      x: 2357,
      y: 407,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-4-178",
      layer: "far",
      motif: "gear",
      x: 2454,
      y: 448,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-4-179",
      layer: "mid",
      motif: "vine",
      x: 2551,
      y: 59,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-4-180",
      layer: "far",
      motif: "glassBerry",
      x: 2648,
      y: 100,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-4",
    x: 4736,
    y: 448,
    nextLevelId: "level-05"
  }
};
