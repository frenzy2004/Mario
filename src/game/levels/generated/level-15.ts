import type { LevelDefinition } from "../schema";

export const LEVEL_15: LevelDefinition = {
  id: "level-15",
  index: 14,
  title: "Windmill Tangle 01",
  chapter: "Windmill Tangle",
  columns: 154,
  rows: 18,
  timeLimit: 298,
  palette: {
    skyTop: 4988309,
    skyBottom: 12891645,
    ground: 1332013,
    groundAccent: 16096779,
    brass: 16096779,
    leaves: 1096065,
    hazard: 15680580,
    glow: 11006928
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
    "...........................=====.........................======........................=======.......................===..................................",
    "......................####..........................#####.........................######........................#######.......................###.........",
    ".................###...........................####..........................#####.........................######........................#######..........",
    "............=======.......................===...........................====..........................=====.........................======................",
    ".....................................#######.......................###...........................####..........................#####......................",
    "................................######.....W..................#######..........W............###....................W......####............................",
    "..................................S...................................S...................................S...............................................",
    "...P.....................W...................................W...................................W...................................W..............G.....",
    "................S...................................S...................................S...................................S.............................",
    "^################^....##########...###########..###^########....####^#####...########^##..############....##########...^##########..####^################^",
    "##################^.^.##########^.^###########^.############^.^.##########^.^###########^.############^.^.##########^.^###########^.######################"
  ],
  enemies: [
    {
      id: "enemy-15-1",
      kind: "lantern",
      x: 532,
      y: 448,
      patrolMin: 437,
      patrolMax: 652,
      speed: 68,
      phase: 14
    },
    {
      id: "enemy-15-2",
      kind: "charger",
      x: 862,
      y: 416,
      patrolMin: 749,
      patrolMax: 1004,
      speed: 80,
      phase: 17
    },
    {
      id: "enemy-15-3",
      kind: "spiker",
      x: 1192,
      y: 384,
      patrolMin: 1061,
      patrolMax: 1356,
      speed: 92,
      phase: 20
    },
    {
      id: "enemy-15-4",
      kind: "turret",
      x: 1522,
      y: 352,
      patrolMin: 1373,
      patrolMax: 1708,
      speed: 104,
      phase: 23
    },
    {
      id: "enemy-15-5",
      kind: "beetle",
      x: 1852,
      y: 320,
      patrolMin: 1757,
      patrolMax: 2060,
      speed: 44,
      phase: 26
    },
    {
      id: "enemy-15-6",
      kind: "acorn",
      x: 2182,
      y: 448,
      patrolMin: 2069,
      patrolMax: 2302,
      speed: 56,
      phase: 29
    },
    {
      id: "enemy-15-7",
      kind: "lantern",
      x: 2512,
      y: 416,
      patrolMin: 2381,
      patrolMax: 2654,
      speed: 68,
      phase: 32
    },
    {
      id: "enemy-15-8",
      kind: "charger",
      x: 2842,
      y: 384,
      patrolMin: 2693,
      patrolMax: 3006,
      speed: 80,
      phase: 35
    },
    {
      id: "enemy-15-9",
      kind: "spiker",
      x: 3172,
      y: 352,
      patrolMin: 3077,
      patrolMax: 3358,
      speed: 92,
      phase: 38
    },
    {
      id: "enemy-15-10",
      kind: "turret",
      x: 3502,
      y: 320,
      patrolMin: 3389,
      patrolMax: 3710,
      speed: 104,
      phase: 41
    },
    {
      id: "enemy-15-11",
      kind: "beetle",
      x: 3832,
      y: 448,
      patrolMin: 3701,
      patrolMax: 3952,
      speed: 44,
      phase: 44
    },
    {
      id: "enemy-15-12",
      kind: "acorn",
      x: 4162,
      y: 416,
      patrolMin: 4013,
      patrolMax: 4304,
      speed: 56,
      phase: 47
    },
    {
      id: "enemy-15-13",
      kind: "lantern",
      x: 4492,
      y: 384,
      patrolMin: 4397,
      patrolMax: 4656,
      speed: 68,
      phase: 50
    },
    {
      id: "enemy-15-14",
      kind: "charger",
      x: 4822,
      y: 352,
      patrolMin: 4709,
      patrolMax: 4748,
      speed: 80,
      phase: 53
    },
    {
      id: "enemy-15-15",
      kind: "spiker",
      x: 5152,
      y: 320,
      patrolMin: 5021,
      patrolMax: 4748,
      speed: 92,
      phase: 56
    },
    {
      id: "enemy-15-16",
      kind: "turret",
      x: 5482,
      y: 448,
      patrolMin: 5333,
      patrolMax: 4748,
      speed: 104,
      phase: 59
    },
    {
      id: "enemy-15-17",
      kind: "beetle",
      x: 5812,
      y: 416,
      patrolMin: 5717,
      patrolMax: 4748,
      speed: 44,
      phase: 62
    },
    {
      id: "enemy-15-18",
      kind: "acorn",
      x: 6142,
      y: 384,
      patrolMin: 6029,
      patrolMax: 4748,
      speed: 56,
      phase: 65
    }
  ],
  collectibles: [
    {
      id: "collectible-15-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 204,
      y: 162
    },
    {
      id: "collectible-15-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 274,
      y: 182
    },
    {
      id: "collectible-15-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 344,
      y: 235
    },
    {
      id: "collectible-15-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 414,
      y: 288
    },
    {
      id: "collectible-15-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 484,
      y: 308
    },
    {
      id: "collectible-15-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 554,
      y: 361
    },
    {
      id: "collectible-15-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 624,
      y: 414
    },
    {
      id: "collectible-15-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 694,
      y: 140
    },
    {
      id: "collectible-15-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 764,
      y: 193
    },
    {
      id: "collectible-15-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 834,
      y: 246
    },
    {
      id: "collectible-15-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 904,
      y: 266
    },
    {
      id: "collectible-15-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 974,
      y: 319
    },
    {
      id: "collectible-15-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1044,
      y: 372
    },
    {
      id: "collectible-15-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1114,
      y: 392
    },
    {
      id: "collectible-15-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1184,
      y: 151
    },
    {
      id: "collectible-15-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1254,
      y: 204
    },
    {
      id: "collectible-15-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1324,
      y: 224
    },
    {
      id: "collectible-15-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1394,
      y: 277
    },
    {
      id: "collectible-15-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1464,
      y: 330
    },
    {
      id: "collectible-15-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1534,
      y: 350
    },
    {
      id: "collectible-15-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1604,
      y: 403
    },
    {
      id: "collectible-15-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1674,
      y: 162
    },
    {
      id: "collectible-15-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1744,
      y: 182
    },
    {
      id: "collectible-15-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1814,
      y: 235
    },
    {
      id: "collectible-15-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1884,
      y: 288
    },
    {
      id: "collectible-15-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1954,
      y: 308
    },
    {
      id: "collectible-15-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2024,
      y: 361
    },
    {
      id: "collectible-15-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2094,
      y: 414
    },
    {
      id: "collectible-15-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2164,
      y: 140
    },
    {
      id: "collectible-15-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2234,
      y: 193
    },
    {
      id: "collectible-15-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2304,
      y: 246
    },
    {
      id: "collectible-15-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2374,
      y: 266
    },
    {
      id: "collectible-15-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2444,
      y: 319
    },
    {
      id: "collectible-15-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2514,
      y: 372
    },
    {
      id: "collectible-15-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2584,
      y: 392
    },
    {
      id: "collectible-15-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2654,
      y: 151
    },
    {
      id: "collectible-15-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2724,
      y: 204
    },
    {
      id: "collectible-15-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2794,
      y: 224
    },
    {
      id: "collectible-15-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2864,
      y: 277
    },
    {
      id: "collectible-15-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2934,
      y: 330
    },
    {
      id: "collectible-15-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3004,
      y: 350
    },
    {
      id: "collectible-15-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3074,
      y: 403
    },
    {
      id: "collectible-15-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3144,
      y: 162
    },
    {
      id: "collectible-15-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3214,
      y: 182
    },
    {
      id: "collectible-15-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3284,
      y: 235
    },
    {
      id: "collectible-15-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3354,
      y: 288
    },
    {
      id: "collectible-15-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3424,
      y: 308
    },
    {
      id: "collectible-15-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3494,
      y: 361
    },
    {
      id: "collectible-15-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3564,
      y: 414
    },
    {
      id: "collectible-15-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3634,
      y: 140
    },
    {
      id: "collectible-15-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3704,
      y: 193
    },
    {
      id: "collectible-15-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3774,
      y: 246
    },
    {
      id: "collectible-15-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3844,
      y: 266
    },
    {
      id: "collectible-15-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3914,
      y: 319
    },
    {
      id: "collectible-15-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3984,
      y: 372
    },
    {
      id: "collectible-15-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4054,
      y: 392
    },
    {
      id: "collectible-15-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4124,
      y: 151
    },
    {
      id: "collectible-15-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4194,
      y: 204
    },
    {
      id: "collectible-15-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4264,
      y: 224
    },
    {
      id: "collectible-15-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4334,
      y: 277
    },
    {
      id: "collectible-15-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4404,
      y: 330
    },
    {
      id: "collectible-15-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4474,
      y: 350
    },
    {
      id: "collectible-15-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4544,
      y: 403
    },
    {
      id: "collectible-15-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4614,
      y: 162
    },
    {
      id: "collectible-15-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4684,
      y: 182
    },
    {
      id: "collectible-15-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4754,
      y: 235
    },
    {
      id: "collectible-15-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4824,
      y: 288
    },
    {
      id: "collectible-15-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4894,
      y: 308
    },
    {
      id: "collectible-15-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4964,
      y: 361
    },
    {
      id: "collectible-15-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5034,
      y: 414
    },
    {
      id: "collectible-15-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5104,
      y: 140
    },
    {
      id: "collectible-15-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5174,
      y: 193
    },
    {
      id: "collectible-15-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5244,
      y: 246
    },
    {
      id: "collectible-15-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5314,
      y: 266
    },
    {
      id: "collectible-15-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5384,
      y: 319
    },
    {
      id: "collectible-15-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5454,
      y: 372
    },
    {
      id: "collectible-15-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5524,
      y: 392
    },
    {
      id: "collectible-15-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5594,
      y: 151
    },
    {
      id: "collectible-15-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5664,
      y: 204
    },
    {
      id: "collectible-15-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5734,
      y: 224
    },
    {
      id: "collectible-15-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5804,
      y: 277
    },
    {
      id: "collectible-15-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5874,
      y: 330
    }
  ],
  powerups: [
    {
      id: "powerup-15-1",
      kind: "starburst",
      durationMs: 4800,
      x: 560,
      y: 130
    },
    {
      id: "powerup-15-2",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 1390,
      y: 182
    },
    {
      id: "powerup-15-3",
      kind: "shield",
      durationMs: 6600,
      x: 2220,
      y: 234
    },
    {
      id: "powerup-15-4",
      kind: "springBoots",
      durationMs: 7500,
      x: 3050,
      y: 286
    },
    {
      id: "powerup-15-5",
      kind: "starburst",
      durationMs: 4800,
      x: 3880,
      y: 338
    },
    {
      id: "powerup-15-6",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 4710,
      y: 130
    },
    {
      id: "powerup-15-7",
      kind: "shield",
      durationMs: 6600,
      x: 5540,
      y: 182
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-15-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 1.4000000000000001
    },
    {
      id: "moving-platform-15-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 2.1
    },
    {
      id: "moving-platform-15-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 2.8
    },
    {
      id: "moving-platform-15-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 3.5
    },
    {
      id: "moving-platform-15-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 4.2
    },
    {
      id: "moving-platform-15-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 4.9
    },
    {
      id: "moving-platform-15-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 5.6
    },
    {
      id: "moving-platform-15-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 6.3
    },
    {
      id: "moving-platform-15-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 7
    },
    {
      id: "moving-platform-15-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 7.7
    },
    {
      id: "moving-platform-15-11",
      x: 6040,
      y: 250,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 8.4
    }
  ],
  hazards: [
    {
      id: "hazard-15-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 14
    },
    {
      id: "hazard-15-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 15
    },
    {
      id: "hazard-15-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 16
    },
    {
      id: "hazard-15-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 17
    },
    {
      id: "hazard-15-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 18
    },
    {
      id: "hazard-15-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 19
    },
    {
      id: "hazard-15-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 20
    },
    {
      id: "hazard-15-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 21
    },
    {
      id: "hazard-15-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 22
    },
    {
      id: "hazard-15-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 23
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-15-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-15-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-15-1",
      x: 708,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-15-2",
      x: 1478,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-15-3",
      x: 2248,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-15-4",
      x: 3018,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-15-5",
      x: 3788,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-15-6",
      x: 4558,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-15-7",
      x: 5328,
      y: 416,
      power: 1.1
    }
  ],
  windZones: [
    {
      id: "wind-15-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-15-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-15-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-15-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-15-5",
      x: 4660,
      y: 180,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    }
  ],
  decorations: [
    {
      id: "decor-15-1",
      layer: "near",
      motif: "glassBerry",
      x: 322,
      y: 214,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-2",
      layer: "far",
      motif: "cloud",
      x: 419,
      y: 255,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-3",
      layer: "mid",
      motif: "windmill",
      x: 516,
      y: 296,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-4",
      layer: "far",
      motif: "grass",
      x: 613,
      y: 337,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-5",
      layer: "mid",
      motif: "gear",
      x: 710,
      y: 378,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-6",
      layer: "near",
      motif: "vine",
      x: 807,
      y: 419,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-7",
      layer: "mid",
      motif: "glassBerry",
      x: 904,
      y: 460,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-8",
      layer: "far",
      motif: "cloud",
      x: 1001,
      y: 71,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-9",
      layer: "mid",
      motif: "windmill",
      x: 1098,
      y: 112,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-10",
      layer: "far",
      motif: "grass",
      x: 1195,
      y: 153,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-11",
      layer: "near",
      motif: "gear",
      x: 1292,
      y: 194,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-12",
      layer: "far",
      motif: "vine",
      x: 1389,
      y: 235,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-13",
      layer: "mid",
      motif: "glassBerry",
      x: 1486,
      y: 276,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-14",
      layer: "far",
      motif: "cloud",
      x: 1583,
      y: 317,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-15",
      layer: "mid",
      motif: "windmill",
      x: 1680,
      y: 358,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-16",
      layer: "near",
      motif: "grass",
      x: 1777,
      y: 399,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-17",
      layer: "mid",
      motif: "gear",
      x: 1874,
      y: 440,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-18",
      layer: "far",
      motif: "vine",
      x: 1971,
      y: 51,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-19",
      layer: "mid",
      motif: "glassBerry",
      x: 2068,
      y: 92,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-20",
      layer: "far",
      motif: "cloud",
      x: 2165,
      y: 133,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-21",
      layer: "near",
      motif: "windmill",
      x: 2262,
      y: 174,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-22",
      layer: "far",
      motif: "grass",
      x: 2359,
      y: 215,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-23",
      layer: "mid",
      motif: "gear",
      x: 2456,
      y: 256,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-24",
      layer: "far",
      motif: "vine",
      x: 2553,
      y: 297,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-25",
      layer: "mid",
      motif: "glassBerry",
      x: 2650,
      y: 338,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-26",
      layer: "near",
      motif: "cloud",
      x: 2747,
      y: 379,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-27",
      layer: "mid",
      motif: "windmill",
      x: 2844,
      y: 420,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-28",
      layer: "far",
      motif: "grass",
      x: 2941,
      y: 461,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-29",
      layer: "mid",
      motif: "gear",
      x: 3038,
      y: 72,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-30",
      layer: "far",
      motif: "vine",
      x: 3135,
      y: 113,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-31",
      layer: "near",
      motif: "glassBerry",
      x: 3232,
      y: 154,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-32",
      layer: "far",
      motif: "cloud",
      x: 3329,
      y: 195,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-33",
      layer: "mid",
      motif: "windmill",
      x: 3426,
      y: 236,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-34",
      layer: "far",
      motif: "grass",
      x: 3523,
      y: 277,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-35",
      layer: "mid",
      motif: "gear",
      x: 3620,
      y: 318,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-36",
      layer: "near",
      motif: "vine",
      x: 3717,
      y: 359,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-37",
      layer: "mid",
      motif: "glassBerry",
      x: 3814,
      y: 400,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-38",
      layer: "far",
      motif: "cloud",
      x: 3911,
      y: 441,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-39",
      layer: "mid",
      motif: "windmill",
      x: 4008,
      y: 52,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-40",
      layer: "far",
      motif: "grass",
      x: 4105,
      y: 93,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-41",
      layer: "near",
      motif: "gear",
      x: 4202,
      y: 134,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-42",
      layer: "far",
      motif: "vine",
      x: 4299,
      y: 175,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-43",
      layer: "mid",
      motif: "glassBerry",
      x: 4396,
      y: 216,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-44",
      layer: "far",
      motif: "cloud",
      x: 4493,
      y: 257,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-45",
      layer: "mid",
      motif: "windmill",
      x: 4590,
      y: 298,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-46",
      layer: "near",
      motif: "grass",
      x: 4687,
      y: 339,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-47",
      layer: "mid",
      motif: "gear",
      x: 4784,
      y: 380,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-48",
      layer: "far",
      motif: "vine",
      x: 4881,
      y: 421,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-49",
      layer: "mid",
      motif: "glassBerry",
      x: 50,
      y: 32,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-50",
      layer: "far",
      motif: "cloud",
      x: 147,
      y: 73,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-51",
      layer: "near",
      motif: "windmill",
      x: 244,
      y: 114,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-52",
      layer: "far",
      motif: "grass",
      x: 341,
      y: 155,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-53",
      layer: "mid",
      motif: "gear",
      x: 438,
      y: 196,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-54",
      layer: "far",
      motif: "vine",
      x: 535,
      y: 237,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-55",
      layer: "mid",
      motif: "glassBerry",
      x: 632,
      y: 278,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-56",
      layer: "near",
      motif: "cloud",
      x: 729,
      y: 319,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-57",
      layer: "mid",
      motif: "windmill",
      x: 826,
      y: 360,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-58",
      layer: "far",
      motif: "grass",
      x: 923,
      y: 401,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-59",
      layer: "mid",
      motif: "gear",
      x: 1020,
      y: 442,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-60",
      layer: "far",
      motif: "vine",
      x: 1117,
      y: 53,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-61",
      layer: "near",
      motif: "glassBerry",
      x: 1214,
      y: 94,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-62",
      layer: "far",
      motif: "cloud",
      x: 1311,
      y: 135,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-63",
      layer: "mid",
      motif: "windmill",
      x: 1408,
      y: 176,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-64",
      layer: "far",
      motif: "grass",
      x: 1505,
      y: 217,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-65",
      layer: "mid",
      motif: "gear",
      x: 1602,
      y: 258,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-66",
      layer: "near",
      motif: "vine",
      x: 1699,
      y: 299,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-67",
      layer: "mid",
      motif: "glassBerry",
      x: 1796,
      y: 340,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-68",
      layer: "far",
      motif: "cloud",
      x: 1893,
      y: 381,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-69",
      layer: "mid",
      motif: "windmill",
      x: 1990,
      y: 422,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-70",
      layer: "far",
      motif: "grass",
      x: 2087,
      y: 33,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-71",
      layer: "near",
      motif: "gear",
      x: 2184,
      y: 74,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-72",
      layer: "far",
      motif: "vine",
      x: 2281,
      y: 115,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-73",
      layer: "mid",
      motif: "glassBerry",
      x: 2378,
      y: 156,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-74",
      layer: "far",
      motif: "cloud",
      x: 2475,
      y: 197,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-75",
      layer: "mid",
      motif: "windmill",
      x: 2572,
      y: 238,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-76",
      layer: "near",
      motif: "grass",
      x: 2669,
      y: 279,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-77",
      layer: "mid",
      motif: "gear",
      x: 2766,
      y: 320,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-78",
      layer: "far",
      motif: "vine",
      x: 2863,
      y: 361,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-79",
      layer: "mid",
      motif: "glassBerry",
      x: 2960,
      y: 402,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-80",
      layer: "far",
      motif: "cloud",
      x: 3057,
      y: 443,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-81",
      layer: "near",
      motif: "windmill",
      x: 3154,
      y: 54,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-82",
      layer: "far",
      motif: "grass",
      x: 3251,
      y: 95,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-83",
      layer: "mid",
      motif: "gear",
      x: 3348,
      y: 136,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-84",
      layer: "far",
      motif: "vine",
      x: 3445,
      y: 177,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-85",
      layer: "mid",
      motif: "glassBerry",
      x: 3542,
      y: 218,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-86",
      layer: "near",
      motif: "cloud",
      x: 3639,
      y: 259,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-87",
      layer: "mid",
      motif: "windmill",
      x: 3736,
      y: 300,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-88",
      layer: "far",
      motif: "grass",
      x: 3833,
      y: 341,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-89",
      layer: "mid",
      motif: "gear",
      x: 3930,
      y: 382,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-90",
      layer: "far",
      motif: "vine",
      x: 4027,
      y: 423,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-91",
      layer: "near",
      motif: "glassBerry",
      x: 4124,
      y: 34,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-92",
      layer: "far",
      motif: "cloud",
      x: 4221,
      y: 75,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-93",
      layer: "mid",
      motif: "windmill",
      x: 4318,
      y: 116,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-94",
      layer: "far",
      motif: "grass",
      x: 4415,
      y: 157,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-95",
      layer: "mid",
      motif: "gear",
      x: 4512,
      y: 198,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-96",
      layer: "near",
      motif: "vine",
      x: 4609,
      y: 239,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-97",
      layer: "mid",
      motif: "glassBerry",
      x: 4706,
      y: 280,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-98",
      layer: "far",
      motif: "cloud",
      x: 4803,
      y: 321,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-99",
      layer: "mid",
      motif: "windmill",
      x: 4900,
      y: 362,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-100",
      layer: "far",
      motif: "grass",
      x: 69,
      y: 403,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-101",
      layer: "near",
      motif: "gear",
      x: 166,
      y: 444,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-102",
      layer: "far",
      motif: "vine",
      x: 263,
      y: 55,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-103",
      layer: "mid",
      motif: "glassBerry",
      x: 360,
      y: 96,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-104",
      layer: "far",
      motif: "cloud",
      x: 457,
      y: 137,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-105",
      layer: "mid",
      motif: "windmill",
      x: 554,
      y: 178,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-106",
      layer: "near",
      motif: "grass",
      x: 651,
      y: 219,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-107",
      layer: "mid",
      motif: "gear",
      x: 748,
      y: 260,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-108",
      layer: "far",
      motif: "vine",
      x: 845,
      y: 301,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-109",
      layer: "mid",
      motif: "glassBerry",
      x: 942,
      y: 342,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-110",
      layer: "far",
      motif: "cloud",
      x: 1039,
      y: 383,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-111",
      layer: "near",
      motif: "windmill",
      x: 1136,
      y: 424,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-112",
      layer: "far",
      motif: "grass",
      x: 1233,
      y: 35,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-113",
      layer: "mid",
      motif: "gear",
      x: 1330,
      y: 76,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-114",
      layer: "far",
      motif: "vine",
      x: 1427,
      y: 117,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-115",
      layer: "mid",
      motif: "glassBerry",
      x: 1524,
      y: 158,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-116",
      layer: "near",
      motif: "cloud",
      x: 1621,
      y: 199,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-117",
      layer: "mid",
      motif: "windmill",
      x: 1718,
      y: 240,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-118",
      layer: "far",
      motif: "grass",
      x: 1815,
      y: 281,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-119",
      layer: "mid",
      motif: "gear",
      x: 1912,
      y: 322,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-120",
      layer: "far",
      motif: "vine",
      x: 2009,
      y: 363,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-121",
      layer: "near",
      motif: "glassBerry",
      x: 2106,
      y: 404,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-122",
      layer: "far",
      motif: "cloud",
      x: 2203,
      y: 445,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-123",
      layer: "mid",
      motif: "windmill",
      x: 2300,
      y: 56,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-124",
      layer: "far",
      motif: "grass",
      x: 2397,
      y: 97,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-125",
      layer: "mid",
      motif: "gear",
      x: 2494,
      y: 138,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-126",
      layer: "near",
      motif: "vine",
      x: 2591,
      y: 179,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-127",
      layer: "mid",
      motif: "glassBerry",
      x: 2688,
      y: 220,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-128",
      layer: "far",
      motif: "cloud",
      x: 2785,
      y: 261,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-129",
      layer: "mid",
      motif: "windmill",
      x: 2882,
      y: 302,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-130",
      layer: "far",
      motif: "grass",
      x: 2979,
      y: 343,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-131",
      layer: "near",
      motif: "gear",
      x: 3076,
      y: 384,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-132",
      layer: "far",
      motif: "vine",
      x: 3173,
      y: 425,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-133",
      layer: "mid",
      motif: "glassBerry",
      x: 3270,
      y: 36,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-134",
      layer: "far",
      motif: "cloud",
      x: 3367,
      y: 77,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-135",
      layer: "mid",
      motif: "windmill",
      x: 3464,
      y: 118,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-136",
      layer: "near",
      motif: "grass",
      x: 3561,
      y: 159,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-137",
      layer: "mid",
      motif: "gear",
      x: 3658,
      y: 200,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-138",
      layer: "far",
      motif: "vine",
      x: 3755,
      y: 241,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-139",
      layer: "mid",
      motif: "glassBerry",
      x: 3852,
      y: 282,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-140",
      layer: "far",
      motif: "cloud",
      x: 3949,
      y: 323,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-141",
      layer: "near",
      motif: "windmill",
      x: 4046,
      y: 364,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-142",
      layer: "far",
      motif: "grass",
      x: 4143,
      y: 405,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-143",
      layer: "mid",
      motif: "gear",
      x: 4240,
      y: 446,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-144",
      layer: "far",
      motif: "vine",
      x: 4337,
      y: 57,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-145",
      layer: "mid",
      motif: "glassBerry",
      x: 4434,
      y: 98,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-146",
      layer: "near",
      motif: "cloud",
      x: 4531,
      y: 139,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-147",
      layer: "mid",
      motif: "windmill",
      x: 4628,
      y: 180,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-148",
      layer: "far",
      motif: "grass",
      x: 4725,
      y: 221,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-149",
      layer: "mid",
      motif: "gear",
      x: 4822,
      y: 262,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-150",
      layer: "far",
      motif: "vine",
      x: 4919,
      y: 303,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-151",
      layer: "near",
      motif: "glassBerry",
      x: 88,
      y: 344,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-152",
      layer: "far",
      motif: "cloud",
      x: 185,
      y: 385,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-153",
      layer: "mid",
      motif: "windmill",
      x: 282,
      y: 426,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-154",
      layer: "far",
      motif: "grass",
      x: 379,
      y: 37,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-155",
      layer: "mid",
      motif: "gear",
      x: 476,
      y: 78,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-156",
      layer: "near",
      motif: "vine",
      x: 573,
      y: 119,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-157",
      layer: "mid",
      motif: "glassBerry",
      x: 670,
      y: 160,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-158",
      layer: "far",
      motif: "cloud",
      x: 767,
      y: 201,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-159",
      layer: "mid",
      motif: "windmill",
      x: 864,
      y: 242,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-160",
      layer: "far",
      motif: "grass",
      x: 961,
      y: 283,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-161",
      layer: "near",
      motif: "gear",
      x: 1058,
      y: 324,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-162",
      layer: "far",
      motif: "vine",
      x: 1155,
      y: 365,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-163",
      layer: "mid",
      motif: "glassBerry",
      x: 1252,
      y: 406,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-164",
      layer: "far",
      motif: "cloud",
      x: 1349,
      y: 447,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-165",
      layer: "mid",
      motif: "windmill",
      x: 1446,
      y: 58,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-166",
      layer: "near",
      motif: "grass",
      x: 1543,
      y: 99,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-167",
      layer: "mid",
      motif: "gear",
      x: 1640,
      y: 140,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-168",
      layer: "far",
      motif: "vine",
      x: 1737,
      y: 181,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-169",
      layer: "mid",
      motif: "glassBerry",
      x: 1834,
      y: 222,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-170",
      layer: "far",
      motif: "cloud",
      x: 1931,
      y: 263,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-15-171",
      layer: "near",
      motif: "windmill",
      x: 2028,
      y: 304,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-172",
      layer: "far",
      motif: "grass",
      x: 2125,
      y: 345,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-15-173",
      layer: "mid",
      motif: "gear",
      x: 2222,
      y: 386,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-15-174",
      layer: "far",
      motif: "vine",
      x: 2319,
      y: 427,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-15-175",
      layer: "mid",
      motif: "glassBerry",
      x: 2416,
      y: 38,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-15-176",
      layer: "near",
      motif: "cloud",
      x: 2513,
      y: 79,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-15-177",
      layer: "mid",
      motif: "windmill",
      x: 2610,
      y: 120,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-15-178",
      layer: "far",
      motif: "grass",
      x: 2707,
      y: 161,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-15-179",
      layer: "mid",
      motif: "gear",
      x: 2804,
      y: 202,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-15-180",
      layer: "far",
      motif: "vine",
      x: 2901,
      y: 243,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-15",
    x: 4736,
    y: 448,
    nextLevelId: "level-16"
  }
};
