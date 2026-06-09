import type { LevelDefinition } from "../schema";

export const LEVEL_08: LevelDefinition = {
  id: "level-08",
  index: 7,
  title: "Glassberry Lift 01",
  chapter: "Glassberry Lift",
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
    ".................................####..........................#####.........................######........................#######........................",
    "............................===...........................====..........................=====.........................======..............................",
    ".......................#######.......................###...........................####..........................#####.........................###........",
    "..................######........................#######.......................###...........................####..........................#####...........",
    ".............=====.........................======........................=======.......................===...........................====.................",
    "......................................####W.........................######....W...................#######.........W.............###.......................",
    ".................................S...................................S...................................S................................................",
    "...P....................W...................................W...................................W...................................W...............G.....",
    "...............S...................................S...................................S...................................S..............................",
    "^################^...#############....############..##############...#############....############..##^###########...##^##########....##^################^",
    "##################.^.#############.^.^############.^##############.^.#############.^.^############.^##############.^.#############.^.^####################"
  ],
  enemies: [
    {
      id: "enemy-8-1",
      kind: "acorn",
      x: 476,
      y: 448,
      patrolMin: 381,
      patrolMax: 596,
      speed: 56,
      phase: 7
    },
    {
      id: "enemy-8-2",
      kind: "lantern",
      x: 806,
      y: 416,
      patrolMin: 693,
      patrolMax: 948,
      speed: 68,
      phase: 10
    },
    {
      id: "enemy-8-3",
      kind: "charger",
      x: 1136,
      y: 384,
      patrolMin: 1005,
      patrolMax: 1300,
      speed: 80,
      phase: 13
    },
    {
      id: "enemy-8-4",
      kind: "spiker",
      x: 1466,
      y: 352,
      patrolMin: 1317,
      patrolMax: 1652,
      speed: 92,
      phase: 16
    },
    {
      id: "enemy-8-5",
      kind: "turret",
      x: 1796,
      y: 320,
      patrolMin: 1701,
      patrolMax: 2004,
      speed: 104,
      phase: 19
    },
    {
      id: "enemy-8-6",
      kind: "beetle",
      x: 2126,
      y: 448,
      patrolMin: 2013,
      patrolMax: 2246,
      speed: 44,
      phase: 22
    },
    {
      id: "enemy-8-7",
      kind: "acorn",
      x: 2456,
      y: 416,
      patrolMin: 2325,
      patrolMax: 2598,
      speed: 56,
      phase: 25
    },
    {
      id: "enemy-8-8",
      kind: "lantern",
      x: 2786,
      y: 384,
      patrolMin: 2637,
      patrolMax: 2950,
      speed: 68,
      phase: 28
    },
    {
      id: "enemy-8-9",
      kind: "charger",
      x: 3116,
      y: 352,
      patrolMin: 3021,
      patrolMax: 3302,
      speed: 80,
      phase: 31
    },
    {
      id: "enemy-8-10",
      kind: "spiker",
      x: 3446,
      y: 320,
      patrolMin: 3333,
      patrolMax: 3654,
      speed: 92,
      phase: 34
    },
    {
      id: "enemy-8-11",
      kind: "turret",
      x: 3776,
      y: 448,
      patrolMin: 3645,
      patrolMax: 3896,
      speed: 104,
      phase: 37
    },
    {
      id: "enemy-8-12",
      kind: "beetle",
      x: 4106,
      y: 416,
      patrolMin: 3957,
      patrolMax: 4248,
      speed: 44,
      phase: 40
    },
    {
      id: "enemy-8-13",
      kind: "acorn",
      x: 4436,
      y: 384,
      patrolMin: 4341,
      patrolMax: 4600,
      speed: 56,
      phase: 43
    },
    {
      id: "enemy-8-14",
      kind: "lantern",
      x: 4766,
      y: 352,
      patrolMin: 4653,
      patrolMax: 4748,
      speed: 68,
      phase: 46
    },
    {
      id: "enemy-8-15",
      kind: "charger",
      x: 5096,
      y: 320,
      patrolMin: 4965,
      patrolMax: 4748,
      speed: 80,
      phase: 49
    },
    {
      id: "enemy-8-16",
      kind: "spiker",
      x: 5426,
      y: 448,
      patrolMin: 5277,
      patrolMax: 4748,
      speed: 92,
      phase: 52
    },
    {
      id: "enemy-8-17",
      kind: "turret",
      x: 5756,
      y: 416,
      patrolMin: 5661,
      patrolMax: 4748,
      speed: 104,
      phase: 55
    },
    {
      id: "enemy-8-18",
      kind: "beetle",
      x: 6086,
      y: 384,
      patrolMin: 5973,
      patrolMax: 4748,
      speed: 44,
      phase: 58
    },
    {
      id: "enemy-8-19",
      kind: "acorn",
      x: 6416,
      y: 352,
      patrolMin: 6285,
      patrolMax: 4748,
      speed: 56,
      phase: 61
    }
  ],
  collectibles: [
    {
      id: "collectible-8-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 216,
      y: 151
    },
    {
      id: "collectible-8-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 286,
      y: 204
    },
    {
      id: "collectible-8-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 356,
      y: 224
    },
    {
      id: "collectible-8-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 426,
      y: 277
    },
    {
      id: "collectible-8-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 496,
      y: 330
    },
    {
      id: "collectible-8-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 566,
      y: 350
    },
    {
      id: "collectible-8-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 636,
      y: 403
    },
    {
      id: "collectible-8-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 706,
      y: 162
    },
    {
      id: "collectible-8-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 776,
      y: 182
    },
    {
      id: "collectible-8-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 846,
      y: 235
    },
    {
      id: "collectible-8-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 916,
      y: 288
    },
    {
      id: "collectible-8-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 986,
      y: 308
    },
    {
      id: "collectible-8-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1056,
      y: 361
    },
    {
      id: "collectible-8-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1126,
      y: 414
    },
    {
      id: "collectible-8-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1196,
      y: 140
    },
    {
      id: "collectible-8-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1266,
      y: 193
    },
    {
      id: "collectible-8-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1336,
      y: 246
    },
    {
      id: "collectible-8-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1406,
      y: 266
    },
    {
      id: "collectible-8-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1476,
      y: 319
    },
    {
      id: "collectible-8-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1546,
      y: 372
    },
    {
      id: "collectible-8-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1616,
      y: 392
    },
    {
      id: "collectible-8-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1686,
      y: 151
    },
    {
      id: "collectible-8-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1756,
      y: 204
    },
    {
      id: "collectible-8-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1826,
      y: 224
    },
    {
      id: "collectible-8-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1896,
      y: 277
    },
    {
      id: "collectible-8-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1966,
      y: 330
    },
    {
      id: "collectible-8-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2036,
      y: 350
    },
    {
      id: "collectible-8-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2106,
      y: 403
    },
    {
      id: "collectible-8-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2176,
      y: 162
    },
    {
      id: "collectible-8-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2246,
      y: 182
    },
    {
      id: "collectible-8-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2316,
      y: 235
    },
    {
      id: "collectible-8-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2386,
      y: 288
    },
    {
      id: "collectible-8-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2456,
      y: 308
    },
    {
      id: "collectible-8-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2526,
      y: 361
    },
    {
      id: "collectible-8-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2596,
      y: 414
    },
    {
      id: "collectible-8-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2666,
      y: 140
    },
    {
      id: "collectible-8-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2736,
      y: 193
    },
    {
      id: "collectible-8-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2806,
      y: 246
    },
    {
      id: "collectible-8-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2876,
      y: 266
    },
    {
      id: "collectible-8-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2946,
      y: 319
    },
    {
      id: "collectible-8-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3016,
      y: 372
    },
    {
      id: "collectible-8-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3086,
      y: 392
    },
    {
      id: "collectible-8-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3156,
      y: 151
    },
    {
      id: "collectible-8-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3226,
      y: 204
    },
    {
      id: "collectible-8-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3296,
      y: 224
    },
    {
      id: "collectible-8-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3366,
      y: 277
    },
    {
      id: "collectible-8-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3436,
      y: 330
    },
    {
      id: "collectible-8-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3506,
      y: 350
    },
    {
      id: "collectible-8-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3576,
      y: 403
    },
    {
      id: "collectible-8-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3646,
      y: 162
    },
    {
      id: "collectible-8-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3716,
      y: 182
    },
    {
      id: "collectible-8-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3786,
      y: 235
    },
    {
      id: "collectible-8-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3856,
      y: 288
    },
    {
      id: "collectible-8-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3926,
      y: 308
    },
    {
      id: "collectible-8-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3996,
      y: 361
    },
    {
      id: "collectible-8-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4066,
      y: 414
    },
    {
      id: "collectible-8-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4136,
      y: 140
    },
    {
      id: "collectible-8-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4206,
      y: 193
    },
    {
      id: "collectible-8-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4276,
      y: 246
    },
    {
      id: "collectible-8-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4346,
      y: 266
    },
    {
      id: "collectible-8-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4416,
      y: 319
    },
    {
      id: "collectible-8-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4486,
      y: 372
    },
    {
      id: "collectible-8-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4556,
      y: 392
    },
    {
      id: "collectible-8-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4626,
      y: 151
    },
    {
      id: "collectible-8-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4696,
      y: 204
    },
    {
      id: "collectible-8-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4766,
      y: 224
    },
    {
      id: "collectible-8-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4836,
      y: 277
    },
    {
      id: "collectible-8-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4906,
      y: 330
    },
    {
      id: "collectible-8-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4976,
      y: 350
    },
    {
      id: "collectible-8-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5046,
      y: 403
    },
    {
      id: "collectible-8-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5116,
      y: 162
    },
    {
      id: "collectible-8-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5186,
      y: 182
    },
    {
      id: "collectible-8-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5256,
      y: 235
    },
    {
      id: "collectible-8-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5326,
      y: 288
    },
    {
      id: "collectible-8-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5396,
      y: 308
    },
    {
      id: "collectible-8-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5466,
      y: 361
    },
    {
      id: "collectible-8-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5536,
      y: 414
    },
    {
      id: "collectible-8-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5606,
      y: 140
    },
    {
      id: "collectible-8-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5676,
      y: 193
    },
    {
      id: "collectible-8-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5746,
      y: 246
    },
    {
      id: "collectible-8-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5816,
      y: 266
    },
    {
      id: "collectible-8-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5886,
      y: 319
    },
    {
      id: "collectible-8-83",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5956,
      y: 372
    },
    {
      id: "collectible-8-84",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6026,
      y: 392
    },
    {
      id: "collectible-8-85",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6096,
      y: 151
    },
    {
      id: "collectible-8-86",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 6166,
      y: 204
    },
    {
      id: "collectible-8-87",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6236,
      y: 224
    },
    {
      id: "collectible-8-88",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6306,
      y: 277
    },
    {
      id: "collectible-8-89",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6376,
      y: 330
    },
    {
      id: "collectible-8-90",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6446,
      y: 350
    }
  ],
  powerups: [
    {
      id: "powerup-8-1",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 530,
      y: 130
    },
    {
      id: "powerup-8-2",
      kind: "shield",
      durationMs: 5700,
      x: 1360,
      y: 182
    },
    {
      id: "powerup-8-3",
      kind: "springBoots",
      durationMs: 6600,
      x: 2190,
      y: 234
    },
    {
      id: "powerup-8-4",
      kind: "starburst",
      durationMs: 7500,
      x: 3020,
      y: 286
    },
    {
      id: "powerup-8-5",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 3850,
      y: 338
    },
    {
      id: "powerup-8-6",
      kind: "shield",
      durationMs: 5700,
      x: 4680,
      y: 130
    },
    {
      id: "powerup-8-7",
      kind: "springBoots",
      durationMs: 6600,
      x: 5510,
      y: 182
    },
    {
      id: "powerup-8-8",
      kind: "starburst",
      durationMs: 7500,
      x: 6340,
      y: 234
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-8-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 0.7000000000000001
    },
    {
      id: "moving-platform-8-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 1.4
    },
    {
      id: "moving-platform-8-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 2.1
    },
    {
      id: "moving-platform-8-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 2.8
    },
    {
      id: "moving-platform-8-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 3.5
    },
    {
      id: "moving-platform-8-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 4.2
    },
    {
      id: "moving-platform-8-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 4.8999999999999995
    },
    {
      id: "moving-platform-8-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 5.6
    },
    {
      id: "moving-platform-8-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 6.3
    }
  ],
  hazards: [
    {
      id: "hazard-8-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 7
    },
    {
      id: "hazard-8-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 8
    },
    {
      id: "hazard-8-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 9
    },
    {
      id: "hazard-8-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 10
    },
    {
      id: "hazard-8-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 11
    },
    {
      id: "hazard-8-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 12
    },
    {
      id: "hazard-8-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 13
    },
    {
      id: "hazard-8-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 14
    },
    {
      id: "hazard-8-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 15
    },
    {
      id: "hazard-8-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 16
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-8-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-8-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-8-1",
      x: 674,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-8-2",
      x: 1444,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-8-3",
      x: 2214,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-8-4",
      x: 2984,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-8-5",
      x: 3754,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-8-6",
      x: 4524,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-8-7",
      x: 5294,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-8-8",
      x: 6064,
      y: 384,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-8-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-8-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-8-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-8-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-8-5",
      x: 4660,
      y: 180,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-8-6",
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
      id: "decor-8-1",
      layer: "near",
      motif: "vine",
      x: 161,
      y: 123,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-2",
      layer: "far",
      motif: "glassBerry",
      x: 258,
      y: 164,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-3",
      layer: "mid",
      motif: "cloud",
      x: 355,
      y: 205,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-4",
      layer: "far",
      motif: "windmill",
      x: 452,
      y: 246,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-5",
      layer: "mid",
      motif: "grass",
      x: 549,
      y: 287,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-6",
      layer: "near",
      motif: "gear",
      x: 646,
      y: 328,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-7",
      layer: "mid",
      motif: "vine",
      x: 743,
      y: 369,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-8",
      layer: "far",
      motif: "glassBerry",
      x: 840,
      y: 410,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-9",
      layer: "mid",
      motif: "cloud",
      x: 937,
      y: 451,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-10",
      layer: "far",
      motif: "windmill",
      x: 1034,
      y: 62,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-11",
      layer: "near",
      motif: "grass",
      x: 1131,
      y: 103,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-12",
      layer: "far",
      motif: "gear",
      x: 1228,
      y: 144,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-13",
      layer: "mid",
      motif: "vine",
      x: 1325,
      y: 185,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-14",
      layer: "far",
      motif: "glassBerry",
      x: 1422,
      y: 226,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-15",
      layer: "mid",
      motif: "cloud",
      x: 1519,
      y: 267,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-16",
      layer: "near",
      motif: "windmill",
      x: 1616,
      y: 308,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-17",
      layer: "mid",
      motif: "grass",
      x: 1713,
      y: 349,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-18",
      layer: "far",
      motif: "gear",
      x: 1810,
      y: 390,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-19",
      layer: "mid",
      motif: "vine",
      x: 1907,
      y: 431,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-20",
      layer: "far",
      motif: "glassBerry",
      x: 2004,
      y: 42,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-21",
      layer: "near",
      motif: "cloud",
      x: 2101,
      y: 83,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-22",
      layer: "far",
      motif: "windmill",
      x: 2198,
      y: 124,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-23",
      layer: "mid",
      motif: "grass",
      x: 2295,
      y: 165,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-24",
      layer: "far",
      motif: "gear",
      x: 2392,
      y: 206,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-25",
      layer: "mid",
      motif: "vine",
      x: 2489,
      y: 247,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-26",
      layer: "near",
      motif: "glassBerry",
      x: 2586,
      y: 288,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-27",
      layer: "mid",
      motif: "cloud",
      x: 2683,
      y: 329,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-28",
      layer: "far",
      motif: "windmill",
      x: 2780,
      y: 370,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-29",
      layer: "mid",
      motif: "grass",
      x: 2877,
      y: 411,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-30",
      layer: "far",
      motif: "gear",
      x: 2974,
      y: 452,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-31",
      layer: "near",
      motif: "vine",
      x: 3071,
      y: 63,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-32",
      layer: "far",
      motif: "glassBerry",
      x: 3168,
      y: 104,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-33",
      layer: "mid",
      motif: "cloud",
      x: 3265,
      y: 145,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-34",
      layer: "far",
      motif: "windmill",
      x: 3362,
      y: 186,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-35",
      layer: "mid",
      motif: "grass",
      x: 3459,
      y: 227,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-36",
      layer: "near",
      motif: "gear",
      x: 3556,
      y: 268,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-37",
      layer: "mid",
      motif: "vine",
      x: 3653,
      y: 309,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-38",
      layer: "far",
      motif: "glassBerry",
      x: 3750,
      y: 350,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-39",
      layer: "mid",
      motif: "cloud",
      x: 3847,
      y: 391,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-40",
      layer: "far",
      motif: "windmill",
      x: 3944,
      y: 432,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-41",
      layer: "near",
      motif: "grass",
      x: 4041,
      y: 43,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-42",
      layer: "far",
      motif: "gear",
      x: 4138,
      y: 84,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-43",
      layer: "mid",
      motif: "vine",
      x: 4235,
      y: 125,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-44",
      layer: "far",
      motif: "glassBerry",
      x: 4332,
      y: 166,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-45",
      layer: "mid",
      motif: "cloud",
      x: 4429,
      y: 207,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-46",
      layer: "near",
      motif: "windmill",
      x: 4526,
      y: 248,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-47",
      layer: "mid",
      motif: "grass",
      x: 4623,
      y: 289,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-48",
      layer: "far",
      motif: "gear",
      x: 4720,
      y: 330,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-49",
      layer: "mid",
      motif: "vine",
      x: 4817,
      y: 371,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-50",
      layer: "far",
      motif: "glassBerry",
      x: 4914,
      y: 412,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-51",
      layer: "near",
      motif: "cloud",
      x: 83,
      y: 453,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-52",
      layer: "far",
      motif: "windmill",
      x: 180,
      y: 64,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-53",
      layer: "mid",
      motif: "grass",
      x: 277,
      y: 105,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-54",
      layer: "far",
      motif: "gear",
      x: 374,
      y: 146,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-55",
      layer: "mid",
      motif: "vine",
      x: 471,
      y: 187,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-56",
      layer: "near",
      motif: "glassBerry",
      x: 568,
      y: 228,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-57",
      layer: "mid",
      motif: "cloud",
      x: 665,
      y: 269,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-58",
      layer: "far",
      motif: "windmill",
      x: 762,
      y: 310,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-59",
      layer: "mid",
      motif: "grass",
      x: 859,
      y: 351,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-60",
      layer: "far",
      motif: "gear",
      x: 956,
      y: 392,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-61",
      layer: "near",
      motif: "vine",
      x: 1053,
      y: 433,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-62",
      layer: "far",
      motif: "glassBerry",
      x: 1150,
      y: 44,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-63",
      layer: "mid",
      motif: "cloud",
      x: 1247,
      y: 85,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-64",
      layer: "far",
      motif: "windmill",
      x: 1344,
      y: 126,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-65",
      layer: "mid",
      motif: "grass",
      x: 1441,
      y: 167,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-66",
      layer: "near",
      motif: "gear",
      x: 1538,
      y: 208,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-67",
      layer: "mid",
      motif: "vine",
      x: 1635,
      y: 249,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-68",
      layer: "far",
      motif: "glassBerry",
      x: 1732,
      y: 290,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-69",
      layer: "mid",
      motif: "cloud",
      x: 1829,
      y: 331,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-70",
      layer: "far",
      motif: "windmill",
      x: 1926,
      y: 372,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-71",
      layer: "near",
      motif: "grass",
      x: 2023,
      y: 413,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-72",
      layer: "far",
      motif: "gear",
      x: 2120,
      y: 454,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-73",
      layer: "mid",
      motif: "vine",
      x: 2217,
      y: 65,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-74",
      layer: "far",
      motif: "glassBerry",
      x: 2314,
      y: 106,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-75",
      layer: "mid",
      motif: "cloud",
      x: 2411,
      y: 147,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-76",
      layer: "near",
      motif: "windmill",
      x: 2508,
      y: 188,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-77",
      layer: "mid",
      motif: "grass",
      x: 2605,
      y: 229,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-78",
      layer: "far",
      motif: "gear",
      x: 2702,
      y: 270,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-79",
      layer: "mid",
      motif: "vine",
      x: 2799,
      y: 311,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-80",
      layer: "far",
      motif: "glassBerry",
      x: 2896,
      y: 352,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-81",
      layer: "near",
      motif: "cloud",
      x: 2993,
      y: 393,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-82",
      layer: "far",
      motif: "windmill",
      x: 3090,
      y: 434,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-83",
      layer: "mid",
      motif: "grass",
      x: 3187,
      y: 45,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-84",
      layer: "far",
      motif: "gear",
      x: 3284,
      y: 86,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-85",
      layer: "mid",
      motif: "vine",
      x: 3381,
      y: 127,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-86",
      layer: "near",
      motif: "glassBerry",
      x: 3478,
      y: 168,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-87",
      layer: "mid",
      motif: "cloud",
      x: 3575,
      y: 209,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-88",
      layer: "far",
      motif: "windmill",
      x: 3672,
      y: 250,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-89",
      layer: "mid",
      motif: "grass",
      x: 3769,
      y: 291,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-90",
      layer: "far",
      motif: "gear",
      x: 3866,
      y: 332,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-91",
      layer: "near",
      motif: "vine",
      x: 3963,
      y: 373,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-92",
      layer: "far",
      motif: "glassBerry",
      x: 4060,
      y: 414,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-93",
      layer: "mid",
      motif: "cloud",
      x: 4157,
      y: 455,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-94",
      layer: "far",
      motif: "windmill",
      x: 4254,
      y: 66,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-95",
      layer: "mid",
      motif: "grass",
      x: 4351,
      y: 107,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-96",
      layer: "near",
      motif: "gear",
      x: 4448,
      y: 148,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-97",
      layer: "mid",
      motif: "vine",
      x: 4545,
      y: 189,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-98",
      layer: "far",
      motif: "glassBerry",
      x: 4642,
      y: 230,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-99",
      layer: "mid",
      motif: "cloud",
      x: 4739,
      y: 271,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-100",
      layer: "far",
      motif: "windmill",
      x: 4836,
      y: 312,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-101",
      layer: "near",
      motif: "grass",
      x: 5,
      y: 353,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-102",
      layer: "far",
      motif: "gear",
      x: 102,
      y: 394,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-103",
      layer: "mid",
      motif: "vine",
      x: 199,
      y: 435,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-104",
      layer: "far",
      motif: "glassBerry",
      x: 296,
      y: 46,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-105",
      layer: "mid",
      motif: "cloud",
      x: 393,
      y: 87,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-106",
      layer: "near",
      motif: "windmill",
      x: 490,
      y: 128,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-107",
      layer: "mid",
      motif: "grass",
      x: 587,
      y: 169,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-108",
      layer: "far",
      motif: "gear",
      x: 684,
      y: 210,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-109",
      layer: "mid",
      motif: "vine",
      x: 781,
      y: 251,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-110",
      layer: "far",
      motif: "glassBerry",
      x: 878,
      y: 292,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-111",
      layer: "near",
      motif: "cloud",
      x: 975,
      y: 333,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-112",
      layer: "far",
      motif: "windmill",
      x: 1072,
      y: 374,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-113",
      layer: "mid",
      motif: "grass",
      x: 1169,
      y: 415,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-114",
      layer: "far",
      motif: "gear",
      x: 1266,
      y: 456,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-115",
      layer: "mid",
      motif: "vine",
      x: 1363,
      y: 67,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-116",
      layer: "near",
      motif: "glassBerry",
      x: 1460,
      y: 108,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-117",
      layer: "mid",
      motif: "cloud",
      x: 1557,
      y: 149,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-118",
      layer: "far",
      motif: "windmill",
      x: 1654,
      y: 190,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-119",
      layer: "mid",
      motif: "grass",
      x: 1751,
      y: 231,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-120",
      layer: "far",
      motif: "gear",
      x: 1848,
      y: 272,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-121",
      layer: "near",
      motif: "vine",
      x: 1945,
      y: 313,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-122",
      layer: "far",
      motif: "glassBerry",
      x: 2042,
      y: 354,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-123",
      layer: "mid",
      motif: "cloud",
      x: 2139,
      y: 395,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-124",
      layer: "far",
      motif: "windmill",
      x: 2236,
      y: 436,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-125",
      layer: "mid",
      motif: "grass",
      x: 2333,
      y: 47,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-126",
      layer: "near",
      motif: "gear",
      x: 2430,
      y: 88,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-127",
      layer: "mid",
      motif: "vine",
      x: 2527,
      y: 129,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-128",
      layer: "far",
      motif: "glassBerry",
      x: 2624,
      y: 170,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-129",
      layer: "mid",
      motif: "cloud",
      x: 2721,
      y: 211,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-130",
      layer: "far",
      motif: "windmill",
      x: 2818,
      y: 252,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-131",
      layer: "near",
      motif: "grass",
      x: 2915,
      y: 293,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-132",
      layer: "far",
      motif: "gear",
      x: 3012,
      y: 334,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-133",
      layer: "mid",
      motif: "vine",
      x: 3109,
      y: 375,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-134",
      layer: "far",
      motif: "glassBerry",
      x: 3206,
      y: 416,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-135",
      layer: "mid",
      motif: "cloud",
      x: 3303,
      y: 457,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-136",
      layer: "near",
      motif: "windmill",
      x: 3400,
      y: 68,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-137",
      layer: "mid",
      motif: "grass",
      x: 3497,
      y: 109,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-138",
      layer: "far",
      motif: "gear",
      x: 3594,
      y: 150,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-139",
      layer: "mid",
      motif: "vine",
      x: 3691,
      y: 191,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-140",
      layer: "far",
      motif: "glassBerry",
      x: 3788,
      y: 232,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-141",
      layer: "near",
      motif: "cloud",
      x: 3885,
      y: 273,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-142",
      layer: "far",
      motif: "windmill",
      x: 3982,
      y: 314,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-143",
      layer: "mid",
      motif: "grass",
      x: 4079,
      y: 355,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-144",
      layer: "far",
      motif: "gear",
      x: 4176,
      y: 396,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-145",
      layer: "mid",
      motif: "vine",
      x: 4273,
      y: 437,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-146",
      layer: "near",
      motif: "glassBerry",
      x: 4370,
      y: 48,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-147",
      layer: "mid",
      motif: "cloud",
      x: 4467,
      y: 89,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-148",
      layer: "far",
      motif: "windmill",
      x: 4564,
      y: 130,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-149",
      layer: "mid",
      motif: "grass",
      x: 4661,
      y: 171,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-150",
      layer: "far",
      motif: "gear",
      x: 4758,
      y: 212,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-151",
      layer: "near",
      motif: "vine",
      x: 4855,
      y: 253,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-152",
      layer: "far",
      motif: "glassBerry",
      x: 24,
      y: 294,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-153",
      layer: "mid",
      motif: "cloud",
      x: 121,
      y: 335,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-154",
      layer: "far",
      motif: "windmill",
      x: 218,
      y: 376,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-155",
      layer: "mid",
      motif: "grass",
      x: 315,
      y: 417,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-156",
      layer: "near",
      motif: "gear",
      x: 412,
      y: 458,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-157",
      layer: "mid",
      motif: "vine",
      x: 509,
      y: 69,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-158",
      layer: "far",
      motif: "glassBerry",
      x: 606,
      y: 110,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-159",
      layer: "mid",
      motif: "cloud",
      x: 703,
      y: 151,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-160",
      layer: "far",
      motif: "windmill",
      x: 800,
      y: 192,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-161",
      layer: "near",
      motif: "grass",
      x: 897,
      y: 233,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-162",
      layer: "far",
      motif: "gear",
      x: 994,
      y: 274,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-163",
      layer: "mid",
      motif: "vine",
      x: 1091,
      y: 315,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-164",
      layer: "far",
      motif: "glassBerry",
      x: 1188,
      y: 356,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-165",
      layer: "mid",
      motif: "cloud",
      x: 1285,
      y: 397,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-166",
      layer: "near",
      motif: "windmill",
      x: 1382,
      y: 438,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-167",
      layer: "mid",
      motif: "grass",
      x: 1479,
      y: 49,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-168",
      layer: "far",
      motif: "gear",
      x: 1576,
      y: 90,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-169",
      layer: "mid",
      motif: "vine",
      x: 1673,
      y: 131,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-170",
      layer: "far",
      motif: "glassBerry",
      x: 1770,
      y: 172,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-8-171",
      layer: "near",
      motif: "cloud",
      x: 1867,
      y: 213,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-172",
      layer: "far",
      motif: "windmill",
      x: 1964,
      y: 254,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-8-173",
      layer: "mid",
      motif: "grass",
      x: 2061,
      y: 295,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-8-174",
      layer: "far",
      motif: "gear",
      x: 2158,
      y: 336,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-8-175",
      layer: "mid",
      motif: "vine",
      x: 2255,
      y: 377,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-8-176",
      layer: "near",
      motif: "glassBerry",
      x: 2352,
      y: 418,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-8-177",
      layer: "mid",
      motif: "cloud",
      x: 2449,
      y: 459,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-8-178",
      layer: "far",
      motif: "windmill",
      x: 2546,
      y: 70,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-8-179",
      layer: "mid",
      motif: "grass",
      x: 2643,
      y: 111,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-8-180",
      layer: "far",
      motif: "gear",
      x: 2740,
      y: 152,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-8",
    x: 4736,
    y: 448,
    nextLevelId: "level-09"
  }
};
