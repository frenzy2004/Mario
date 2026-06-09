import type { LevelDefinition } from "../schema";

export const LEVEL_40: LevelDefinition = {
  id: "level-40",
  index: 39,
  title: "The Warden's Crown 05",
  chapter: "The Warden's Crown",
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
    ".......................####..........................#####.........................######........................#######.......................###........",
    "..................###...........................####..........................#####.........................######........................#######.........",
    ".............=======.......................===...........................====..........................=====.........................======...............",
    "......................................#######.......................###...........................####..........................#####.....................",
    ".................................######........................#######.......................###...........................####...........................",
    "............................=====...........W.............======................W.......=======.....................W.===.................................",
    "...................................S...................................S...................................S..............................................",
    "...P......................W...................................W...................................W...................................W.............G.....",
    ".................S...................................S...................................S...................................S............................",
    "^################^..############....##########...##^########..######^#####....#######^##...###########..############....##########...###^################^",
    "##################.^############.^.^##########.^.###########.^############.^.^##########.^.###########.^############.^.^##########.^.#####################"
  ],
  enemies: [
    {
      id: "enemy-40-1",
      kind: "charger",
      x: 532,
      y: 448,
      patrolMin: 437,
      patrolMax: 652,
      speed: 80,
      phase: 39
    },
    {
      id: "enemy-40-2",
      kind: "spiker",
      x: 862,
      y: 416,
      patrolMin: 749,
      patrolMax: 1004,
      speed: 92,
      phase: 42
    },
    {
      id: "enemy-40-3",
      kind: "turret",
      x: 1192,
      y: 384,
      patrolMin: 1061,
      patrolMax: 1356,
      speed: 104,
      phase: 45
    },
    {
      id: "enemy-40-4",
      kind: "beetle",
      x: 1522,
      y: 352,
      patrolMin: 1373,
      patrolMax: 1708,
      speed: 44,
      phase: 48
    },
    {
      id: "enemy-40-5",
      kind: "acorn",
      x: 1852,
      y: 320,
      patrolMin: 1757,
      patrolMax: 2060,
      speed: 56,
      phase: 51
    },
    {
      id: "enemy-40-6",
      kind: "lantern",
      x: 2182,
      y: 448,
      patrolMin: 2069,
      patrolMax: 2302,
      speed: 68,
      phase: 54
    },
    {
      id: "enemy-40-7",
      kind: "charger",
      x: 2512,
      y: 416,
      patrolMin: 2381,
      patrolMax: 2654,
      speed: 80,
      phase: 57
    },
    {
      id: "enemy-40-8",
      kind: "spiker",
      x: 2842,
      y: 384,
      patrolMin: 2693,
      patrolMax: 3006,
      speed: 92,
      phase: 60
    },
    {
      id: "enemy-40-9",
      kind: "turret",
      x: 3172,
      y: 352,
      patrolMin: 3077,
      patrolMax: 3358,
      speed: 104,
      phase: 63
    },
    {
      id: "enemy-40-10",
      kind: "beetle",
      x: 3502,
      y: 320,
      patrolMin: 3389,
      patrolMax: 3710,
      speed: 44,
      phase: 66
    },
    {
      id: "enemy-40-11",
      kind: "acorn",
      x: 3832,
      y: 448,
      patrolMin: 3701,
      patrolMax: 3952,
      speed: 56,
      phase: 69
    },
    {
      id: "enemy-40-12",
      kind: "lantern",
      x: 4162,
      y: 416,
      patrolMin: 4013,
      patrolMax: 4304,
      speed: 68,
      phase: 72
    },
    {
      id: "enemy-40-13",
      kind: "charger",
      x: 4492,
      y: 384,
      patrolMin: 4397,
      patrolMax: 4656,
      speed: 80,
      phase: 75
    },
    {
      id: "enemy-40-14",
      kind: "spiker",
      x: 4822,
      y: 352,
      patrolMin: 4709,
      patrolMax: 4748,
      speed: 92,
      phase: 78
    },
    {
      id: "enemy-40-15",
      kind: "turret",
      x: 5152,
      y: 320,
      patrolMin: 5021,
      patrolMax: 4748,
      speed: 104,
      phase: 81
    },
    {
      id: "enemy-40-16",
      kind: "beetle",
      x: 5482,
      y: 448,
      patrolMin: 5333,
      patrolMax: 4748,
      speed: 44,
      phase: 84
    },
    {
      id: "enemy-40-17",
      kind: "acorn",
      x: 5812,
      y: 416,
      patrolMin: 5717,
      patrolMax: 4748,
      speed: 56,
      phase: 87
    },
    {
      id: "enemy-40-18",
      kind: "lantern",
      x: 6142,
      y: 384,
      patrolMin: 6029,
      patrolMax: 4748,
      speed: 68,
      phase: 90
    },
    {
      id: "enemy-40-19",
      kind: "charger",
      x: 6472,
      y: 352,
      patrolMin: 6341,
      patrolMax: 4748,
      speed: 80,
      phase: 93
    }
  ],
  collectibles: [
    {
      id: "collectible-40-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 216,
      y: 140
    },
    {
      id: "collectible-40-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 286,
      y: 193
    },
    {
      id: "collectible-40-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 356,
      y: 246
    },
    {
      id: "collectible-40-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 426,
      y: 266
    },
    {
      id: "collectible-40-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 496,
      y: 319
    },
    {
      id: "collectible-40-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 566,
      y: 372
    },
    {
      id: "collectible-40-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 636,
      y: 392
    },
    {
      id: "collectible-40-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 706,
      y: 151
    },
    {
      id: "collectible-40-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 776,
      y: 204
    },
    {
      id: "collectible-40-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 846,
      y: 224
    },
    {
      id: "collectible-40-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 916,
      y: 277
    },
    {
      id: "collectible-40-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 986,
      y: 330
    },
    {
      id: "collectible-40-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1056,
      y: 350
    },
    {
      id: "collectible-40-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1126,
      y: 403
    },
    {
      id: "collectible-40-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1196,
      y: 162
    },
    {
      id: "collectible-40-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1266,
      y: 182
    },
    {
      id: "collectible-40-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1336,
      y: 235
    },
    {
      id: "collectible-40-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1406,
      y: 288
    },
    {
      id: "collectible-40-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1476,
      y: 308
    },
    {
      id: "collectible-40-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1546,
      y: 361
    },
    {
      id: "collectible-40-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1616,
      y: 414
    },
    {
      id: "collectible-40-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1686,
      y: 140
    },
    {
      id: "collectible-40-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1756,
      y: 193
    },
    {
      id: "collectible-40-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1826,
      y: 246
    },
    {
      id: "collectible-40-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1896,
      y: 266
    },
    {
      id: "collectible-40-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1966,
      y: 319
    },
    {
      id: "collectible-40-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2036,
      y: 372
    },
    {
      id: "collectible-40-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2106,
      y: 392
    },
    {
      id: "collectible-40-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2176,
      y: 151
    },
    {
      id: "collectible-40-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2246,
      y: 204
    },
    {
      id: "collectible-40-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2316,
      y: 224
    },
    {
      id: "collectible-40-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2386,
      y: 277
    },
    {
      id: "collectible-40-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2456,
      y: 330
    },
    {
      id: "collectible-40-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2526,
      y: 350
    },
    {
      id: "collectible-40-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2596,
      y: 403
    },
    {
      id: "collectible-40-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2666,
      y: 162
    },
    {
      id: "collectible-40-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2736,
      y: 182
    },
    {
      id: "collectible-40-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2806,
      y: 235
    },
    {
      id: "collectible-40-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2876,
      y: 288
    },
    {
      id: "collectible-40-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2946,
      y: 308
    },
    {
      id: "collectible-40-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3016,
      y: 361
    },
    {
      id: "collectible-40-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3086,
      y: 414
    },
    {
      id: "collectible-40-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3156,
      y: 140
    },
    {
      id: "collectible-40-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3226,
      y: 193
    },
    {
      id: "collectible-40-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3296,
      y: 246
    },
    {
      id: "collectible-40-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3366,
      y: 266
    },
    {
      id: "collectible-40-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3436,
      y: 319
    },
    {
      id: "collectible-40-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3506,
      y: 372
    },
    {
      id: "collectible-40-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3576,
      y: 392
    },
    {
      id: "collectible-40-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3646,
      y: 151
    },
    {
      id: "collectible-40-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3716,
      y: 204
    },
    {
      id: "collectible-40-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3786,
      y: 224
    },
    {
      id: "collectible-40-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3856,
      y: 277
    },
    {
      id: "collectible-40-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3926,
      y: 330
    },
    {
      id: "collectible-40-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3996,
      y: 350
    },
    {
      id: "collectible-40-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4066,
      y: 403
    },
    {
      id: "collectible-40-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4136,
      y: 162
    },
    {
      id: "collectible-40-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4206,
      y: 182
    },
    {
      id: "collectible-40-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4276,
      y: 235
    },
    {
      id: "collectible-40-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4346,
      y: 288
    },
    {
      id: "collectible-40-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4416,
      y: 308
    },
    {
      id: "collectible-40-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4486,
      y: 361
    },
    {
      id: "collectible-40-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4556,
      y: 414
    },
    {
      id: "collectible-40-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4626,
      y: 140
    },
    {
      id: "collectible-40-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4696,
      y: 193
    },
    {
      id: "collectible-40-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4766,
      y: 246
    },
    {
      id: "collectible-40-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4836,
      y: 266
    },
    {
      id: "collectible-40-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4906,
      y: 319
    },
    {
      id: "collectible-40-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4976,
      y: 372
    },
    {
      id: "collectible-40-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5046,
      y: 392
    },
    {
      id: "collectible-40-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5116,
      y: 151
    },
    {
      id: "collectible-40-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5186,
      y: 204
    },
    {
      id: "collectible-40-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5256,
      y: 224
    },
    {
      id: "collectible-40-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5326,
      y: 277
    }
  ],
  powerups: [
    {
      id: "powerup-40-1",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 590,
      y: 130
    },
    {
      id: "powerup-40-2",
      kind: "shield",
      durationMs: 5700,
      x: 1420,
      y: 182
    },
    {
      id: "powerup-40-3",
      kind: "springBoots",
      durationMs: 6600,
      x: 2250,
      y: 234
    },
    {
      id: "powerup-40-4",
      kind: "starburst",
      durationMs: 7500,
      x: 3080,
      y: 286
    },
    {
      id: "powerup-40-5",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 3910,
      y: 338
    },
    {
      id: "powerup-40-6",
      kind: "shield",
      durationMs: 5700,
      x: 4740,
      y: 130
    },
    {
      id: "powerup-40-7",
      kind: "springBoots",
      durationMs: 6600,
      x: 5570,
      y: 182
    },
    {
      id: "powerup-40-8",
      kind: "starburst",
      durationMs: 7500,
      x: 6400,
      y: 234
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-40-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 3.9000000000000004
    },
    {
      id: "moving-platform-40-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 4.6000000000000005
    },
    {
      id: "moving-platform-40-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 5.300000000000001
    },
    {
      id: "moving-platform-40-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 6
    },
    {
      id: "moving-platform-40-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 6.7
    },
    {
      id: "moving-platform-40-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 7.4
    },
    {
      id: "moving-platform-40-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 8.1
    },
    {
      id: "moving-platform-40-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 8.8
    },
    {
      id: "moving-platform-40-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 9.5
    },
    {
      id: "moving-platform-40-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 10.2
    },
    {
      id: "moving-platform-40-11",
      x: 6040,
      y: 250,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 10.9
    }
  ],
  hazards: [
    {
      id: "hazard-40-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 39
    },
    {
      id: "hazard-40-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 40
    },
    {
      id: "hazard-40-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 41
    },
    {
      id: "hazard-40-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 42
    },
    {
      id: "hazard-40-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 43
    },
    {
      id: "hazard-40-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 44
    },
    {
      id: "hazard-40-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 45
    },
    {
      id: "hazard-40-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 46
    },
    {
      id: "hazard-40-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 47
    },
    {
      id: "hazard-40-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 48
    },
    {
      id: "hazard-40-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 49
    },
    {
      id: "hazard-40-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 50
    },
    {
      id: "hazard-40-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 51
    },
    {
      id: "hazard-40-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 52
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-40-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-40-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-40-1",
      x: 640,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-40-2",
      x: 1410,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-40-3",
      x: 2180,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-40-4",
      x: 2950,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-40-5",
      x: 3720,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-40-6",
      x: 4490,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-40-7",
      x: 5260,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-40-8",
      x: 6030,
      y: 384,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-40-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-40-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-40-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-40-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-40-5",
      x: 4660,
      y: 180,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-40-6",
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
      id: "decor-40-1",
      layer: "near",
      motif: "cloud",
      x: 897,
      y: 109,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-2",
      layer: "far",
      motif: "windmill",
      x: 994,
      y: 150,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-3",
      layer: "mid",
      motif: "grass",
      x: 1091,
      y: 191,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-4",
      layer: "far",
      motif: "gear",
      x: 1188,
      y: 232,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-5",
      layer: "mid",
      motif: "vine",
      x: 1285,
      y: 273,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-6",
      layer: "near",
      motif: "glassBerry",
      x: 1382,
      y: 314,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-7",
      layer: "mid",
      motif: "cloud",
      x: 1479,
      y: 355,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-8",
      layer: "far",
      motif: "windmill",
      x: 1576,
      y: 396,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-9",
      layer: "mid",
      motif: "grass",
      x: 1673,
      y: 437,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-10",
      layer: "far",
      motif: "gear",
      x: 1770,
      y: 48,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-11",
      layer: "near",
      motif: "vine",
      x: 1867,
      y: 89,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-12",
      layer: "far",
      motif: "glassBerry",
      x: 1964,
      y: 130,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-13",
      layer: "mid",
      motif: "cloud",
      x: 2061,
      y: 171,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-14",
      layer: "far",
      motif: "windmill",
      x: 2158,
      y: 212,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-15",
      layer: "mid",
      motif: "grass",
      x: 2255,
      y: 253,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-16",
      layer: "near",
      motif: "gear",
      x: 2352,
      y: 294,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-17",
      layer: "mid",
      motif: "vine",
      x: 2449,
      y: 335,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-18",
      layer: "far",
      motif: "glassBerry",
      x: 2546,
      y: 376,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-19",
      layer: "mid",
      motif: "cloud",
      x: 2643,
      y: 417,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-20",
      layer: "far",
      motif: "windmill",
      x: 2740,
      y: 458,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-21",
      layer: "near",
      motif: "grass",
      x: 2837,
      y: 69,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-22",
      layer: "far",
      motif: "gear",
      x: 2934,
      y: 110,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-23",
      layer: "mid",
      motif: "vine",
      x: 3031,
      y: 151,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-24",
      layer: "far",
      motif: "glassBerry",
      x: 3128,
      y: 192,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-25",
      layer: "mid",
      motif: "cloud",
      x: 3225,
      y: 233,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-26",
      layer: "near",
      motif: "windmill",
      x: 3322,
      y: 274,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-27",
      layer: "mid",
      motif: "grass",
      x: 3419,
      y: 315,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-28",
      layer: "far",
      motif: "gear",
      x: 3516,
      y: 356,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-29",
      layer: "mid",
      motif: "vine",
      x: 3613,
      y: 397,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-30",
      layer: "far",
      motif: "glassBerry",
      x: 3710,
      y: 438,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-31",
      layer: "near",
      motif: "cloud",
      x: 3807,
      y: 49,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-32",
      layer: "far",
      motif: "windmill",
      x: 3904,
      y: 90,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-33",
      layer: "mid",
      motif: "grass",
      x: 4001,
      y: 131,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-34",
      layer: "far",
      motif: "gear",
      x: 4098,
      y: 172,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-35",
      layer: "mid",
      motif: "vine",
      x: 4195,
      y: 213,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-36",
      layer: "near",
      motif: "glassBerry",
      x: 4292,
      y: 254,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-37",
      layer: "mid",
      motif: "cloud",
      x: 4389,
      y: 295,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-38",
      layer: "far",
      motif: "windmill",
      x: 4486,
      y: 336,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-39",
      layer: "mid",
      motif: "grass",
      x: 4583,
      y: 377,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-40",
      layer: "far",
      motif: "gear",
      x: 4680,
      y: 418,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-41",
      layer: "near",
      motif: "vine",
      x: 4777,
      y: 459,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-42",
      layer: "far",
      motif: "glassBerry",
      x: 4874,
      y: 70,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-43",
      layer: "mid",
      motif: "cloud",
      x: 43,
      y: 111,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-44",
      layer: "far",
      motif: "windmill",
      x: 140,
      y: 152,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-45",
      layer: "mid",
      motif: "grass",
      x: 237,
      y: 193,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-46",
      layer: "near",
      motif: "gear",
      x: 334,
      y: 234,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-47",
      layer: "mid",
      motif: "vine",
      x: 431,
      y: 275,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-48",
      layer: "far",
      motif: "glassBerry",
      x: 528,
      y: 316,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-49",
      layer: "mid",
      motif: "cloud",
      x: 625,
      y: 357,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-50",
      layer: "far",
      motif: "windmill",
      x: 722,
      y: 398,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-51",
      layer: "near",
      motif: "grass",
      x: 819,
      y: 439,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-52",
      layer: "far",
      motif: "gear",
      x: 916,
      y: 50,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-53",
      layer: "mid",
      motif: "vine",
      x: 1013,
      y: 91,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-54",
      layer: "far",
      motif: "glassBerry",
      x: 1110,
      y: 132,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-55",
      layer: "mid",
      motif: "cloud",
      x: 1207,
      y: 173,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-56",
      layer: "near",
      motif: "windmill",
      x: 1304,
      y: 214,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-57",
      layer: "mid",
      motif: "grass",
      x: 1401,
      y: 255,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-58",
      layer: "far",
      motif: "gear",
      x: 1498,
      y: 296,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-59",
      layer: "mid",
      motif: "vine",
      x: 1595,
      y: 337,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-60",
      layer: "far",
      motif: "glassBerry",
      x: 1692,
      y: 378,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-61",
      layer: "near",
      motif: "cloud",
      x: 1789,
      y: 419,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-62",
      layer: "far",
      motif: "windmill",
      x: 1886,
      y: 460,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-63",
      layer: "mid",
      motif: "grass",
      x: 1983,
      y: 71,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-64",
      layer: "far",
      motif: "gear",
      x: 2080,
      y: 112,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-65",
      layer: "mid",
      motif: "vine",
      x: 2177,
      y: 153,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-66",
      layer: "near",
      motif: "glassBerry",
      x: 2274,
      y: 194,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-67",
      layer: "mid",
      motif: "cloud",
      x: 2371,
      y: 235,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-68",
      layer: "far",
      motif: "windmill",
      x: 2468,
      y: 276,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-69",
      layer: "mid",
      motif: "grass",
      x: 2565,
      y: 317,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-70",
      layer: "far",
      motif: "gear",
      x: 2662,
      y: 358,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-71",
      layer: "near",
      motif: "vine",
      x: 2759,
      y: 399,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-72",
      layer: "far",
      motif: "glassBerry",
      x: 2856,
      y: 440,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-73",
      layer: "mid",
      motif: "cloud",
      x: 2953,
      y: 51,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-74",
      layer: "far",
      motif: "windmill",
      x: 3050,
      y: 92,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-75",
      layer: "mid",
      motif: "grass",
      x: 3147,
      y: 133,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-76",
      layer: "near",
      motif: "gear",
      x: 3244,
      y: 174,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-77",
      layer: "mid",
      motif: "vine",
      x: 3341,
      y: 215,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-78",
      layer: "far",
      motif: "glassBerry",
      x: 3438,
      y: 256,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-79",
      layer: "mid",
      motif: "cloud",
      x: 3535,
      y: 297,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-80",
      layer: "far",
      motif: "windmill",
      x: 3632,
      y: 338,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-81",
      layer: "near",
      motif: "grass",
      x: 3729,
      y: 379,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-82",
      layer: "far",
      motif: "gear",
      x: 3826,
      y: 420,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-83",
      layer: "mid",
      motif: "vine",
      x: 3923,
      y: 461,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-84",
      layer: "far",
      motif: "glassBerry",
      x: 4020,
      y: 72,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-85",
      layer: "mid",
      motif: "cloud",
      x: 4117,
      y: 113,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-86",
      layer: "near",
      motif: "windmill",
      x: 4214,
      y: 154,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-87",
      layer: "mid",
      motif: "grass",
      x: 4311,
      y: 195,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-88",
      layer: "far",
      motif: "gear",
      x: 4408,
      y: 236,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-89",
      layer: "mid",
      motif: "vine",
      x: 4505,
      y: 277,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-90",
      layer: "far",
      motif: "glassBerry",
      x: 4602,
      y: 318,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-91",
      layer: "near",
      motif: "cloud",
      x: 4699,
      y: 359,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-92",
      layer: "far",
      motif: "windmill",
      x: 4796,
      y: 400,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-93",
      layer: "mid",
      motif: "grass",
      x: 4893,
      y: 441,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-94",
      layer: "far",
      motif: "gear",
      x: 62,
      y: 52,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-95",
      layer: "mid",
      motif: "vine",
      x: 159,
      y: 93,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-96",
      layer: "near",
      motif: "glassBerry",
      x: 256,
      y: 134,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-97",
      layer: "mid",
      motif: "cloud",
      x: 353,
      y: 175,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-98",
      layer: "far",
      motif: "windmill",
      x: 450,
      y: 216,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-99",
      layer: "mid",
      motif: "grass",
      x: 547,
      y: 257,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-100",
      layer: "far",
      motif: "gear",
      x: 644,
      y: 298,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-101",
      layer: "near",
      motif: "vine",
      x: 741,
      y: 339,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-102",
      layer: "far",
      motif: "glassBerry",
      x: 838,
      y: 380,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-103",
      layer: "mid",
      motif: "cloud",
      x: 935,
      y: 421,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-104",
      layer: "far",
      motif: "windmill",
      x: 1032,
      y: 32,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-105",
      layer: "mid",
      motif: "grass",
      x: 1129,
      y: 73,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-106",
      layer: "near",
      motif: "gear",
      x: 1226,
      y: 114,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-107",
      layer: "mid",
      motif: "vine",
      x: 1323,
      y: 155,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-108",
      layer: "far",
      motif: "glassBerry",
      x: 1420,
      y: 196,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-109",
      layer: "mid",
      motif: "cloud",
      x: 1517,
      y: 237,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-110",
      layer: "far",
      motif: "windmill",
      x: 1614,
      y: 278,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-111",
      layer: "near",
      motif: "grass",
      x: 1711,
      y: 319,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-112",
      layer: "far",
      motif: "gear",
      x: 1808,
      y: 360,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-113",
      layer: "mid",
      motif: "vine",
      x: 1905,
      y: 401,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-114",
      layer: "far",
      motif: "glassBerry",
      x: 2002,
      y: 442,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-115",
      layer: "mid",
      motif: "cloud",
      x: 2099,
      y: 53,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-116",
      layer: "near",
      motif: "windmill",
      x: 2196,
      y: 94,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-117",
      layer: "mid",
      motif: "grass",
      x: 2293,
      y: 135,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-118",
      layer: "far",
      motif: "gear",
      x: 2390,
      y: 176,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-119",
      layer: "mid",
      motif: "vine",
      x: 2487,
      y: 217,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-120",
      layer: "far",
      motif: "glassBerry",
      x: 2584,
      y: 258,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-121",
      layer: "near",
      motif: "cloud",
      x: 2681,
      y: 299,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-122",
      layer: "far",
      motif: "windmill",
      x: 2778,
      y: 340,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-123",
      layer: "mid",
      motif: "grass",
      x: 2875,
      y: 381,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-124",
      layer: "far",
      motif: "gear",
      x: 2972,
      y: 422,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-125",
      layer: "mid",
      motif: "vine",
      x: 3069,
      y: 33,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-126",
      layer: "near",
      motif: "glassBerry",
      x: 3166,
      y: 74,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-127",
      layer: "mid",
      motif: "cloud",
      x: 3263,
      y: 115,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-128",
      layer: "far",
      motif: "windmill",
      x: 3360,
      y: 156,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-129",
      layer: "mid",
      motif: "grass",
      x: 3457,
      y: 197,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-130",
      layer: "far",
      motif: "gear",
      x: 3554,
      y: 238,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-131",
      layer: "near",
      motif: "vine",
      x: 3651,
      y: 279,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-132",
      layer: "far",
      motif: "glassBerry",
      x: 3748,
      y: 320,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-133",
      layer: "mid",
      motif: "cloud",
      x: 3845,
      y: 361,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-134",
      layer: "far",
      motif: "windmill",
      x: 3942,
      y: 402,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-135",
      layer: "mid",
      motif: "grass",
      x: 4039,
      y: 443,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-136",
      layer: "near",
      motif: "gear",
      x: 4136,
      y: 54,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-137",
      layer: "mid",
      motif: "vine",
      x: 4233,
      y: 95,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-138",
      layer: "far",
      motif: "glassBerry",
      x: 4330,
      y: 136,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-139",
      layer: "mid",
      motif: "cloud",
      x: 4427,
      y: 177,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-140",
      layer: "far",
      motif: "windmill",
      x: 4524,
      y: 218,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-141",
      layer: "near",
      motif: "grass",
      x: 4621,
      y: 259,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-142",
      layer: "far",
      motif: "gear",
      x: 4718,
      y: 300,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-143",
      layer: "mid",
      motif: "vine",
      x: 4815,
      y: 341,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-144",
      layer: "far",
      motif: "glassBerry",
      x: 4912,
      y: 382,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-145",
      layer: "mid",
      motif: "cloud",
      x: 81,
      y: 423,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-146",
      layer: "near",
      motif: "windmill",
      x: 178,
      y: 34,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-147",
      layer: "mid",
      motif: "grass",
      x: 275,
      y: 75,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-148",
      layer: "far",
      motif: "gear",
      x: 372,
      y: 116,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-149",
      layer: "mid",
      motif: "vine",
      x: 469,
      y: 157,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-150",
      layer: "far",
      motif: "glassBerry",
      x: 566,
      y: 198,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-151",
      layer: "near",
      motif: "cloud",
      x: 663,
      y: 239,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-152",
      layer: "far",
      motif: "windmill",
      x: 760,
      y: 280,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-153",
      layer: "mid",
      motif: "grass",
      x: 857,
      y: 321,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-154",
      layer: "far",
      motif: "gear",
      x: 954,
      y: 362,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-155",
      layer: "mid",
      motif: "vine",
      x: 1051,
      y: 403,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-156",
      layer: "near",
      motif: "glassBerry",
      x: 1148,
      y: 444,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-157",
      layer: "mid",
      motif: "cloud",
      x: 1245,
      y: 55,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-158",
      layer: "far",
      motif: "windmill",
      x: 1342,
      y: 96,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-159",
      layer: "mid",
      motif: "grass",
      x: 1439,
      y: 137,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-160",
      layer: "far",
      motif: "gear",
      x: 1536,
      y: 178,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-161",
      layer: "near",
      motif: "vine",
      x: 1633,
      y: 219,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-162",
      layer: "far",
      motif: "glassBerry",
      x: 1730,
      y: 260,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-163",
      layer: "mid",
      motif: "cloud",
      x: 1827,
      y: 301,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-164",
      layer: "far",
      motif: "windmill",
      x: 1924,
      y: 342,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-165",
      layer: "mid",
      motif: "grass",
      x: 2021,
      y: 383,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-166",
      layer: "near",
      motif: "gear",
      x: 2118,
      y: 424,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-167",
      layer: "mid",
      motif: "vine",
      x: 2215,
      y: 35,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-168",
      layer: "far",
      motif: "glassBerry",
      x: 2312,
      y: 76,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-169",
      layer: "mid",
      motif: "cloud",
      x: 2409,
      y: 117,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-170",
      layer: "far",
      motif: "windmill",
      x: 2506,
      y: 158,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-40-171",
      layer: "near",
      motif: "grass",
      x: 2603,
      y: 199,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-172",
      layer: "far",
      motif: "gear",
      x: 2700,
      y: 240,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-40-173",
      layer: "mid",
      motif: "vine",
      x: 2797,
      y: 281,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-40-174",
      layer: "far",
      motif: "glassBerry",
      x: 2894,
      y: 322,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-40-175",
      layer: "mid",
      motif: "cloud",
      x: 2991,
      y: 363,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-40-176",
      layer: "near",
      motif: "windmill",
      x: 3088,
      y: 404,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-40-177",
      layer: "mid",
      motif: "grass",
      x: 3185,
      y: 445,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-40-178",
      layer: "far",
      motif: "gear",
      x: 3282,
      y: 56,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-40-179",
      layer: "mid",
      motif: "vine",
      x: 3379,
      y: 97,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-40-180",
      layer: "far",
      motif: "glassBerry",
      x: 3476,
      y: 138,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-40",
    x: 4736,
    y: 448,
    nextLevelId: "level-41"
  }
};
