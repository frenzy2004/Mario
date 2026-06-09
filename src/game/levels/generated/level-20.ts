import type { LevelDefinition } from "../schema";

export const LEVEL_20: LevelDefinition = {
  id: "level-20",
  index: 19,
  title: "Windmill Tangle 06",
  chapter: "Windmill Tangle",
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
    ".................................######........................#######.......................###...........................####...........................",
    "............................=====.........................======........................=======.......................===.................................",
    ".......................####..........................#####.........................######........................#######.......................###........",
    "..................###...........................####..........................#####.........................######........................#######.........",
    ".............=======.......................===...........................====..........................=====.........................======...............",
    "......................................####W##.......................###.......W...................####............W.............#####.....................",
    ".................................S...................................S...................................S................................................",
    "...P....................W...................................W...................................W...................................W...............G.....",
    "...............S...................................S...................................S...................................S..............................",
    "^################^...###########..^###########....#^########...#####^#####..#########^##....##########...###########..#^##########....##^################^",
    "##################.^.###########.^############.^.^##########.^.###########.^############.^.^##########.^.###########.^############.^.^####################"
  ],
  enemies: [
    {
      id: "enemy-20-1",
      kind: "acorn",
      x: 532,
      y: 448,
      patrolMin: 437,
      patrolMax: 652,
      speed: 56,
      phase: 19
    },
    {
      id: "enemy-20-2",
      kind: "lantern",
      x: 862,
      y: 416,
      patrolMin: 749,
      patrolMax: 1004,
      speed: 68,
      phase: 22
    },
    {
      id: "enemy-20-3",
      kind: "charger",
      x: 1192,
      y: 384,
      patrolMin: 1061,
      patrolMax: 1356,
      speed: 80,
      phase: 25
    },
    {
      id: "enemy-20-4",
      kind: "spiker",
      x: 1522,
      y: 352,
      patrolMin: 1373,
      patrolMax: 1708,
      speed: 92,
      phase: 28
    },
    {
      id: "enemy-20-5",
      kind: "turret",
      x: 1852,
      y: 320,
      patrolMin: 1757,
      patrolMax: 2060,
      speed: 104,
      phase: 31
    },
    {
      id: "enemy-20-6",
      kind: "beetle",
      x: 2182,
      y: 448,
      patrolMin: 2069,
      patrolMax: 2302,
      speed: 44,
      phase: 34
    },
    {
      id: "enemy-20-7",
      kind: "acorn",
      x: 2512,
      y: 416,
      patrolMin: 2381,
      patrolMax: 2654,
      speed: 56,
      phase: 37
    },
    {
      id: "enemy-20-8",
      kind: "lantern",
      x: 2842,
      y: 384,
      patrolMin: 2693,
      patrolMax: 3006,
      speed: 68,
      phase: 40
    },
    {
      id: "enemy-20-9",
      kind: "charger",
      x: 3172,
      y: 352,
      patrolMin: 3077,
      patrolMax: 3358,
      speed: 80,
      phase: 43
    },
    {
      id: "enemy-20-10",
      kind: "spiker",
      x: 3502,
      y: 320,
      patrolMin: 3389,
      patrolMax: 3710,
      speed: 92,
      phase: 46
    },
    {
      id: "enemy-20-11",
      kind: "turret",
      x: 3832,
      y: 448,
      patrolMin: 3701,
      patrolMax: 3952,
      speed: 104,
      phase: 49
    },
    {
      id: "enemy-20-12",
      kind: "beetle",
      x: 4162,
      y: 416,
      patrolMin: 4013,
      patrolMax: 4304,
      speed: 44,
      phase: 52
    },
    {
      id: "enemy-20-13",
      kind: "acorn",
      x: 4492,
      y: 384,
      patrolMin: 4397,
      patrolMax: 4656,
      speed: 56,
      phase: 55
    },
    {
      id: "enemy-20-14",
      kind: "lantern",
      x: 4822,
      y: 352,
      patrolMin: 4709,
      patrolMax: 4748,
      speed: 68,
      phase: 58
    },
    {
      id: "enemy-20-15",
      kind: "charger",
      x: 5152,
      y: 320,
      patrolMin: 5021,
      patrolMax: 4748,
      speed: 80,
      phase: 61
    }
  ],
  collectibles: [
    {
      id: "collectible-20-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 216,
      y: 151
    },
    {
      id: "collectible-20-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 286,
      y: 204
    },
    {
      id: "collectible-20-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 356,
      y: 224
    },
    {
      id: "collectible-20-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 426,
      y: 277
    },
    {
      id: "collectible-20-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 496,
      y: 330
    },
    {
      id: "collectible-20-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 566,
      y: 350
    },
    {
      id: "collectible-20-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 636,
      y: 403
    },
    {
      id: "collectible-20-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 706,
      y: 162
    },
    {
      id: "collectible-20-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 776,
      y: 182
    },
    {
      id: "collectible-20-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 846,
      y: 235
    },
    {
      id: "collectible-20-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 916,
      y: 288
    },
    {
      id: "collectible-20-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 986,
      y: 308
    },
    {
      id: "collectible-20-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1056,
      y: 361
    },
    {
      id: "collectible-20-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1126,
      y: 414
    },
    {
      id: "collectible-20-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1196,
      y: 140
    },
    {
      id: "collectible-20-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1266,
      y: 193
    },
    {
      id: "collectible-20-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1336,
      y: 246
    },
    {
      id: "collectible-20-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1406,
      y: 266
    },
    {
      id: "collectible-20-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1476,
      y: 319
    },
    {
      id: "collectible-20-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1546,
      y: 372
    },
    {
      id: "collectible-20-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1616,
      y: 392
    },
    {
      id: "collectible-20-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1686,
      y: 151
    },
    {
      id: "collectible-20-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1756,
      y: 204
    },
    {
      id: "collectible-20-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1826,
      y: 224
    },
    {
      id: "collectible-20-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1896,
      y: 277
    },
    {
      id: "collectible-20-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1966,
      y: 330
    },
    {
      id: "collectible-20-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2036,
      y: 350
    },
    {
      id: "collectible-20-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2106,
      y: 403
    },
    {
      id: "collectible-20-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2176,
      y: 162
    },
    {
      id: "collectible-20-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2246,
      y: 182
    },
    {
      id: "collectible-20-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2316,
      y: 235
    },
    {
      id: "collectible-20-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2386,
      y: 288
    },
    {
      id: "collectible-20-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2456,
      y: 308
    },
    {
      id: "collectible-20-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2526,
      y: 361
    },
    {
      id: "collectible-20-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2596,
      y: 414
    },
    {
      id: "collectible-20-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2666,
      y: 140
    },
    {
      id: "collectible-20-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2736,
      y: 193
    },
    {
      id: "collectible-20-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2806,
      y: 246
    },
    {
      id: "collectible-20-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2876,
      y: 266
    },
    {
      id: "collectible-20-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2946,
      y: 319
    },
    {
      id: "collectible-20-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3016,
      y: 372
    },
    {
      id: "collectible-20-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3086,
      y: 392
    },
    {
      id: "collectible-20-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3156,
      y: 151
    },
    {
      id: "collectible-20-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3226,
      y: 204
    },
    {
      id: "collectible-20-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3296,
      y: 224
    },
    {
      id: "collectible-20-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3366,
      y: 277
    },
    {
      id: "collectible-20-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3436,
      y: 330
    },
    {
      id: "collectible-20-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3506,
      y: 350
    },
    {
      id: "collectible-20-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3576,
      y: 403
    },
    {
      id: "collectible-20-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3646,
      y: 162
    },
    {
      id: "collectible-20-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3716,
      y: 182
    },
    {
      id: "collectible-20-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3786,
      y: 235
    },
    {
      id: "collectible-20-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3856,
      y: 288
    },
    {
      id: "collectible-20-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3926,
      y: 308
    },
    {
      id: "collectible-20-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3996,
      y: 361
    },
    {
      id: "collectible-20-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4066,
      y: 414
    },
    {
      id: "collectible-20-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4136,
      y: 140
    },
    {
      id: "collectible-20-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4206,
      y: 193
    },
    {
      id: "collectible-20-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4276,
      y: 246
    },
    {
      id: "collectible-20-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4346,
      y: 266
    },
    {
      id: "collectible-20-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4416,
      y: 319
    },
    {
      id: "collectible-20-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4486,
      y: 372
    },
    {
      id: "collectible-20-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4556,
      y: 392
    },
    {
      id: "collectible-20-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4626,
      y: 151
    },
    {
      id: "collectible-20-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4696,
      y: 204
    },
    {
      id: "collectible-20-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4766,
      y: 224
    }
  ],
  powerups: [
    {
      id: "powerup-20-1",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 530,
      y: 130
    },
    {
      id: "powerup-20-2",
      kind: "shield",
      durationMs: 5700,
      x: 1360,
      y: 182
    },
    {
      id: "powerup-20-3",
      kind: "springBoots",
      durationMs: 6600,
      x: 2190,
      y: 234
    },
    {
      id: "powerup-20-4",
      kind: "starburst",
      durationMs: 7500,
      x: 3020,
      y: 286
    },
    {
      id: "powerup-20-5",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 3850,
      y: 338
    },
    {
      id: "powerup-20-6",
      kind: "shield",
      durationMs: 5700,
      x: 4680,
      y: 130
    },
    {
      id: "powerup-20-7",
      kind: "springBoots",
      durationMs: 6600,
      x: 5510,
      y: 182
    },
    {
      id: "powerup-20-8",
      kind: "starburst",
      durationMs: 7500,
      x: 6340,
      y: 234
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-20-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 1.9000000000000001
    },
    {
      id: "moving-platform-20-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 2.6
    },
    {
      id: "moving-platform-20-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 3.3
    },
    {
      id: "moving-platform-20-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 4
    },
    {
      id: "moving-platform-20-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 4.7
    },
    {
      id: "moving-platform-20-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 5.4
    },
    {
      id: "moving-platform-20-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 6.1
    },
    {
      id: "moving-platform-20-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 6.8
    },
    {
      id: "moving-platform-20-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 7.5
    },
    {
      id: "moving-platform-20-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 8.2
    },
    {
      id: "moving-platform-20-11",
      x: 6040,
      y: 250,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 8.9
    }
  ],
  hazards: [
    {
      id: "hazard-20-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 19
    },
    {
      id: "hazard-20-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 20
    },
    {
      id: "hazard-20-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 21
    },
    {
      id: "hazard-20-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 22
    },
    {
      id: "hazard-20-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 23
    },
    {
      id: "hazard-20-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 24
    },
    {
      id: "hazard-20-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 25
    },
    {
      id: "hazard-20-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 26
    },
    {
      id: "hazard-20-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 27
    },
    {
      id: "hazard-20-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 28
    },
    {
      id: "hazard-20-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 29
    },
    {
      id: "hazard-20-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 30
    },
    {
      id: "hazard-20-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 31
    },
    {
      id: "hazard-20-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 32
    },
    {
      id: "hazard-20-15",
      kind: "thorn",
      x: 5660,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 33
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-20-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-20-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-20-1",
      x: 674,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-20-2",
      x: 1444,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-20-3",
      x: 2214,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-20-4",
      x: 2984,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-20-5",
      x: 3754,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-20-6",
      x: 4524,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-20-7",
      x: 5294,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-20-8",
      x: 6064,
      y: 384,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-20-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-20-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-20-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-20-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-20-5",
      x: 4660,
      y: 180,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-20-6",
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
      id: "decor-20-1",
      layer: "near",
      motif: "vine",
      x: 437,
      y: 279,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-2",
      layer: "far",
      motif: "glassBerry",
      x: 534,
      y: 320,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-3",
      layer: "mid",
      motif: "cloud",
      x: 631,
      y: 361,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-4",
      layer: "far",
      motif: "windmill",
      x: 728,
      y: 402,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-5",
      layer: "mid",
      motif: "grass",
      x: 825,
      y: 443,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-6",
      layer: "near",
      motif: "gear",
      x: 922,
      y: 54,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-7",
      layer: "mid",
      motif: "vine",
      x: 1019,
      y: 95,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-8",
      layer: "far",
      motif: "glassBerry",
      x: 1116,
      y: 136,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-9",
      layer: "mid",
      motif: "cloud",
      x: 1213,
      y: 177,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-10",
      layer: "far",
      motif: "windmill",
      x: 1310,
      y: 218,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-11",
      layer: "near",
      motif: "grass",
      x: 1407,
      y: 259,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-12",
      layer: "far",
      motif: "gear",
      x: 1504,
      y: 300,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-13",
      layer: "mid",
      motif: "vine",
      x: 1601,
      y: 341,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-14",
      layer: "far",
      motif: "glassBerry",
      x: 1698,
      y: 382,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-15",
      layer: "mid",
      motif: "cloud",
      x: 1795,
      y: 423,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-16",
      layer: "near",
      motif: "windmill",
      x: 1892,
      y: 34,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-17",
      layer: "mid",
      motif: "grass",
      x: 1989,
      y: 75,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-18",
      layer: "far",
      motif: "gear",
      x: 2086,
      y: 116,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-19",
      layer: "mid",
      motif: "vine",
      x: 2183,
      y: 157,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-20",
      layer: "far",
      motif: "glassBerry",
      x: 2280,
      y: 198,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-21",
      layer: "near",
      motif: "cloud",
      x: 2377,
      y: 239,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-22",
      layer: "far",
      motif: "windmill",
      x: 2474,
      y: 280,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-23",
      layer: "mid",
      motif: "grass",
      x: 2571,
      y: 321,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-24",
      layer: "far",
      motif: "gear",
      x: 2668,
      y: 362,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-25",
      layer: "mid",
      motif: "vine",
      x: 2765,
      y: 403,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-26",
      layer: "near",
      motif: "glassBerry",
      x: 2862,
      y: 444,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-27",
      layer: "mid",
      motif: "cloud",
      x: 2959,
      y: 55,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-28",
      layer: "far",
      motif: "windmill",
      x: 3056,
      y: 96,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-29",
      layer: "mid",
      motif: "grass",
      x: 3153,
      y: 137,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-30",
      layer: "far",
      motif: "gear",
      x: 3250,
      y: 178,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-31",
      layer: "near",
      motif: "vine",
      x: 3347,
      y: 219,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-32",
      layer: "far",
      motif: "glassBerry",
      x: 3444,
      y: 260,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-33",
      layer: "mid",
      motif: "cloud",
      x: 3541,
      y: 301,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-34",
      layer: "far",
      motif: "windmill",
      x: 3638,
      y: 342,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-35",
      layer: "mid",
      motif: "grass",
      x: 3735,
      y: 383,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-36",
      layer: "near",
      motif: "gear",
      x: 3832,
      y: 424,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-37",
      layer: "mid",
      motif: "vine",
      x: 3929,
      y: 35,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-38",
      layer: "far",
      motif: "glassBerry",
      x: 4026,
      y: 76,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-39",
      layer: "mid",
      motif: "cloud",
      x: 4123,
      y: 117,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-40",
      layer: "far",
      motif: "windmill",
      x: 4220,
      y: 158,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-41",
      layer: "near",
      motif: "grass",
      x: 4317,
      y: 199,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-42",
      layer: "far",
      motif: "gear",
      x: 4414,
      y: 240,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-43",
      layer: "mid",
      motif: "vine",
      x: 4511,
      y: 281,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-44",
      layer: "far",
      motif: "glassBerry",
      x: 4608,
      y: 322,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-45",
      layer: "mid",
      motif: "cloud",
      x: 4705,
      y: 363,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-46",
      layer: "near",
      motif: "windmill",
      x: 4802,
      y: 404,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-47",
      layer: "mid",
      motif: "grass",
      x: 4899,
      y: 445,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-48",
      layer: "far",
      motif: "gear",
      x: 68,
      y: 56,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-49",
      layer: "mid",
      motif: "vine",
      x: 165,
      y: 97,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-50",
      layer: "far",
      motif: "glassBerry",
      x: 262,
      y: 138,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-51",
      layer: "near",
      motif: "cloud",
      x: 359,
      y: 179,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-52",
      layer: "far",
      motif: "windmill",
      x: 456,
      y: 220,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-53",
      layer: "mid",
      motif: "grass",
      x: 553,
      y: 261,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-54",
      layer: "far",
      motif: "gear",
      x: 650,
      y: 302,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-55",
      layer: "mid",
      motif: "vine",
      x: 747,
      y: 343,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-56",
      layer: "near",
      motif: "glassBerry",
      x: 844,
      y: 384,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-57",
      layer: "mid",
      motif: "cloud",
      x: 941,
      y: 425,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-58",
      layer: "far",
      motif: "windmill",
      x: 1038,
      y: 36,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-59",
      layer: "mid",
      motif: "grass",
      x: 1135,
      y: 77,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-60",
      layer: "far",
      motif: "gear",
      x: 1232,
      y: 118,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-61",
      layer: "near",
      motif: "vine",
      x: 1329,
      y: 159,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-62",
      layer: "far",
      motif: "glassBerry",
      x: 1426,
      y: 200,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-63",
      layer: "mid",
      motif: "cloud",
      x: 1523,
      y: 241,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-64",
      layer: "far",
      motif: "windmill",
      x: 1620,
      y: 282,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-65",
      layer: "mid",
      motif: "grass",
      x: 1717,
      y: 323,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-66",
      layer: "near",
      motif: "gear",
      x: 1814,
      y: 364,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-67",
      layer: "mid",
      motif: "vine",
      x: 1911,
      y: 405,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-68",
      layer: "far",
      motif: "glassBerry",
      x: 2008,
      y: 446,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-69",
      layer: "mid",
      motif: "cloud",
      x: 2105,
      y: 57,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-70",
      layer: "far",
      motif: "windmill",
      x: 2202,
      y: 98,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-71",
      layer: "near",
      motif: "grass",
      x: 2299,
      y: 139,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-72",
      layer: "far",
      motif: "gear",
      x: 2396,
      y: 180,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-73",
      layer: "mid",
      motif: "vine",
      x: 2493,
      y: 221,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-74",
      layer: "far",
      motif: "glassBerry",
      x: 2590,
      y: 262,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-75",
      layer: "mid",
      motif: "cloud",
      x: 2687,
      y: 303,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-76",
      layer: "near",
      motif: "windmill",
      x: 2784,
      y: 344,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-77",
      layer: "mid",
      motif: "grass",
      x: 2881,
      y: 385,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-78",
      layer: "far",
      motif: "gear",
      x: 2978,
      y: 426,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-79",
      layer: "mid",
      motif: "vine",
      x: 3075,
      y: 37,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-80",
      layer: "far",
      motif: "glassBerry",
      x: 3172,
      y: 78,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-81",
      layer: "near",
      motif: "cloud",
      x: 3269,
      y: 119,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-82",
      layer: "far",
      motif: "windmill",
      x: 3366,
      y: 160,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-83",
      layer: "mid",
      motif: "grass",
      x: 3463,
      y: 201,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-84",
      layer: "far",
      motif: "gear",
      x: 3560,
      y: 242,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-85",
      layer: "mid",
      motif: "vine",
      x: 3657,
      y: 283,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-86",
      layer: "near",
      motif: "glassBerry",
      x: 3754,
      y: 324,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-87",
      layer: "mid",
      motif: "cloud",
      x: 3851,
      y: 365,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-88",
      layer: "far",
      motif: "windmill",
      x: 3948,
      y: 406,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-89",
      layer: "mid",
      motif: "grass",
      x: 4045,
      y: 447,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-90",
      layer: "far",
      motif: "gear",
      x: 4142,
      y: 58,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-91",
      layer: "near",
      motif: "vine",
      x: 4239,
      y: 99,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-92",
      layer: "far",
      motif: "glassBerry",
      x: 4336,
      y: 140,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-93",
      layer: "mid",
      motif: "cloud",
      x: 4433,
      y: 181,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-94",
      layer: "far",
      motif: "windmill",
      x: 4530,
      y: 222,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-95",
      layer: "mid",
      motif: "grass",
      x: 4627,
      y: 263,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-96",
      layer: "near",
      motif: "gear",
      x: 4724,
      y: 304,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-97",
      layer: "mid",
      motif: "vine",
      x: 4821,
      y: 345,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-98",
      layer: "far",
      motif: "glassBerry",
      x: 4918,
      y: 386,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-99",
      layer: "mid",
      motif: "cloud",
      x: 87,
      y: 427,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-100",
      layer: "far",
      motif: "windmill",
      x: 184,
      y: 38,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-101",
      layer: "near",
      motif: "grass",
      x: 281,
      y: 79,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-102",
      layer: "far",
      motif: "gear",
      x: 378,
      y: 120,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-103",
      layer: "mid",
      motif: "vine",
      x: 475,
      y: 161,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-104",
      layer: "far",
      motif: "glassBerry",
      x: 572,
      y: 202,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-105",
      layer: "mid",
      motif: "cloud",
      x: 669,
      y: 243,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-106",
      layer: "near",
      motif: "windmill",
      x: 766,
      y: 284,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-107",
      layer: "mid",
      motif: "grass",
      x: 863,
      y: 325,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-108",
      layer: "far",
      motif: "gear",
      x: 960,
      y: 366,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-109",
      layer: "mid",
      motif: "vine",
      x: 1057,
      y: 407,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-110",
      layer: "far",
      motif: "glassBerry",
      x: 1154,
      y: 448,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-111",
      layer: "near",
      motif: "cloud",
      x: 1251,
      y: 59,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-112",
      layer: "far",
      motif: "windmill",
      x: 1348,
      y: 100,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-113",
      layer: "mid",
      motif: "grass",
      x: 1445,
      y: 141,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-114",
      layer: "far",
      motif: "gear",
      x: 1542,
      y: 182,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-115",
      layer: "mid",
      motif: "vine",
      x: 1639,
      y: 223,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-116",
      layer: "near",
      motif: "glassBerry",
      x: 1736,
      y: 264,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-117",
      layer: "mid",
      motif: "cloud",
      x: 1833,
      y: 305,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-118",
      layer: "far",
      motif: "windmill",
      x: 1930,
      y: 346,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-119",
      layer: "mid",
      motif: "grass",
      x: 2027,
      y: 387,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-120",
      layer: "far",
      motif: "gear",
      x: 2124,
      y: 428,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-121",
      layer: "near",
      motif: "vine",
      x: 2221,
      y: 39,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-122",
      layer: "far",
      motif: "glassBerry",
      x: 2318,
      y: 80,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-123",
      layer: "mid",
      motif: "cloud",
      x: 2415,
      y: 121,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-124",
      layer: "far",
      motif: "windmill",
      x: 2512,
      y: 162,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-125",
      layer: "mid",
      motif: "grass",
      x: 2609,
      y: 203,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-126",
      layer: "near",
      motif: "gear",
      x: 2706,
      y: 244,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-127",
      layer: "mid",
      motif: "vine",
      x: 2803,
      y: 285,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-128",
      layer: "far",
      motif: "glassBerry",
      x: 2900,
      y: 326,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-129",
      layer: "mid",
      motif: "cloud",
      x: 2997,
      y: 367,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-130",
      layer: "far",
      motif: "windmill",
      x: 3094,
      y: 408,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-131",
      layer: "near",
      motif: "grass",
      x: 3191,
      y: 449,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-132",
      layer: "far",
      motif: "gear",
      x: 3288,
      y: 60,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-133",
      layer: "mid",
      motif: "vine",
      x: 3385,
      y: 101,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-134",
      layer: "far",
      motif: "glassBerry",
      x: 3482,
      y: 142,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-135",
      layer: "mid",
      motif: "cloud",
      x: 3579,
      y: 183,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-136",
      layer: "near",
      motif: "windmill",
      x: 3676,
      y: 224,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-137",
      layer: "mid",
      motif: "grass",
      x: 3773,
      y: 265,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-138",
      layer: "far",
      motif: "gear",
      x: 3870,
      y: 306,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-139",
      layer: "mid",
      motif: "vine",
      x: 3967,
      y: 347,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-140",
      layer: "far",
      motif: "glassBerry",
      x: 4064,
      y: 388,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-141",
      layer: "near",
      motif: "cloud",
      x: 4161,
      y: 429,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-142",
      layer: "far",
      motif: "windmill",
      x: 4258,
      y: 40,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-143",
      layer: "mid",
      motif: "grass",
      x: 4355,
      y: 81,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-144",
      layer: "far",
      motif: "gear",
      x: 4452,
      y: 122,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-145",
      layer: "mid",
      motif: "vine",
      x: 4549,
      y: 163,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-146",
      layer: "near",
      motif: "glassBerry",
      x: 4646,
      y: 204,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-147",
      layer: "mid",
      motif: "cloud",
      x: 4743,
      y: 245,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-148",
      layer: "far",
      motif: "windmill",
      x: 4840,
      y: 286,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-149",
      layer: "mid",
      motif: "grass",
      x: 9,
      y: 327,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-150",
      layer: "far",
      motif: "gear",
      x: 106,
      y: 368,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-151",
      layer: "near",
      motif: "vine",
      x: 203,
      y: 409,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-152",
      layer: "far",
      motif: "glassBerry",
      x: 300,
      y: 450,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-153",
      layer: "mid",
      motif: "cloud",
      x: 397,
      y: 61,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-154",
      layer: "far",
      motif: "windmill",
      x: 494,
      y: 102,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-155",
      layer: "mid",
      motif: "grass",
      x: 591,
      y: 143,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-156",
      layer: "near",
      motif: "gear",
      x: 688,
      y: 184,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-157",
      layer: "mid",
      motif: "vine",
      x: 785,
      y: 225,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-158",
      layer: "far",
      motif: "glassBerry",
      x: 882,
      y: 266,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-159",
      layer: "mid",
      motif: "cloud",
      x: 979,
      y: 307,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-160",
      layer: "far",
      motif: "windmill",
      x: 1076,
      y: 348,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-161",
      layer: "near",
      motif: "grass",
      x: 1173,
      y: 389,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-162",
      layer: "far",
      motif: "gear",
      x: 1270,
      y: 430,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-163",
      layer: "mid",
      motif: "vine",
      x: 1367,
      y: 41,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-164",
      layer: "far",
      motif: "glassBerry",
      x: 1464,
      y: 82,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-165",
      layer: "mid",
      motif: "cloud",
      x: 1561,
      y: 123,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-166",
      layer: "near",
      motif: "windmill",
      x: 1658,
      y: 164,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-167",
      layer: "mid",
      motif: "grass",
      x: 1755,
      y: 205,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-168",
      layer: "far",
      motif: "gear",
      x: 1852,
      y: 246,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-169",
      layer: "mid",
      motif: "vine",
      x: 1949,
      y: 287,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-170",
      layer: "far",
      motif: "glassBerry",
      x: 2046,
      y: 328,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-20-171",
      layer: "near",
      motif: "cloud",
      x: 2143,
      y: 369,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-172",
      layer: "far",
      motif: "windmill",
      x: 2240,
      y: 410,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-20-173",
      layer: "mid",
      motif: "grass",
      x: 2337,
      y: 451,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-20-174",
      layer: "far",
      motif: "gear",
      x: 2434,
      y: 62,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-20-175",
      layer: "mid",
      motif: "vine",
      x: 2531,
      y: 103,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-20-176",
      layer: "near",
      motif: "glassBerry",
      x: 2628,
      y: 144,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-20-177",
      layer: "mid",
      motif: "cloud",
      x: 2725,
      y: 185,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-20-178",
      layer: "far",
      motif: "windmill",
      x: 2822,
      y: 226,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-20-179",
      layer: "mid",
      motif: "grass",
      x: 2919,
      y: 267,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-20-180",
      layer: "far",
      motif: "gear",
      x: 3016,
      y: 308,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-20",
    x: 4736,
    y: 448,
    nextLevelId: "level-21"
  }
};
