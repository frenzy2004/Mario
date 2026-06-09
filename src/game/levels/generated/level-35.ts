import type { LevelDefinition } from "../schema";

export const LEVEL_35: LevelDefinition = {
  id: "level-35",
  index: 34,
  title: "Aurora Conservatory 07",
  chapter: "Aurora Conservatory",
  columns: 154,
  rows: 18,
  timeLimit: 226,
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
    ".................###...........................####..........................#####.........................######........................#######..........",
    "............=======.......................===...........................====..........................=====.........................======................",
    ".....................................#######.......................###...........................####..........................#####......................",
    "................................######........................#######.......................###...........................####............................",
    "...........................=====.........................======........................=======.......................===..................................",
    "......................####...................W......#####........................W######........................#####W#.......................###.........",
    "....................................S...................................S...................................S.............................................",
    "...P.......................W...................................W...................................W...................................W............G.....",
    "..................S...................................S...................................S...................................S...........................",
    "^################^...###########..^###########....#^########...#####^#####..#########^##....##########...###########..#^##########....##^################^",
    "##################^.^###########^.############^.^.##########^.^###########^.############^.^.##########^.^###########^.############^.^.####################"
  ],
  enemies: [
    {
      id: "enemy-35-1",
      kind: "spiker",
      x: 532,
      y: 448,
      patrolMin: 437,
      patrolMax: 652,
      speed: 92,
      phase: 34
    },
    {
      id: "enemy-35-2",
      kind: "turret",
      x: 862,
      y: 416,
      patrolMin: 749,
      patrolMax: 1004,
      speed: 104,
      phase: 37
    },
    {
      id: "enemy-35-3",
      kind: "beetle",
      x: 1192,
      y: 384,
      patrolMin: 1061,
      patrolMax: 1356,
      speed: 44,
      phase: 40
    },
    {
      id: "enemy-35-4",
      kind: "acorn",
      x: 1522,
      y: 352,
      patrolMin: 1373,
      patrolMax: 1708,
      speed: 56,
      phase: 43
    },
    {
      id: "enemy-35-5",
      kind: "lantern",
      x: 1852,
      y: 320,
      patrolMin: 1757,
      patrolMax: 2060,
      speed: 68,
      phase: 46
    },
    {
      id: "enemy-35-6",
      kind: "charger",
      x: 2182,
      y: 448,
      patrolMin: 2069,
      patrolMax: 2302,
      speed: 80,
      phase: 49
    },
    {
      id: "enemy-35-7",
      kind: "spiker",
      x: 2512,
      y: 416,
      patrolMin: 2381,
      patrolMax: 2654,
      speed: 92,
      phase: 52
    },
    {
      id: "enemy-35-8",
      kind: "turret",
      x: 2842,
      y: 384,
      patrolMin: 2693,
      patrolMax: 3006,
      speed: 104,
      phase: 55
    },
    {
      id: "enemy-35-9",
      kind: "beetle",
      x: 3172,
      y: 352,
      patrolMin: 3077,
      patrolMax: 3358,
      speed: 44,
      phase: 58
    },
    {
      id: "enemy-35-10",
      kind: "acorn",
      x: 3502,
      y: 320,
      patrolMin: 3389,
      patrolMax: 3710,
      speed: 56,
      phase: 61
    },
    {
      id: "enemy-35-11",
      kind: "lantern",
      x: 3832,
      y: 448,
      patrolMin: 3701,
      patrolMax: 3952,
      speed: 68,
      phase: 64
    },
    {
      id: "enemy-35-12",
      kind: "charger",
      x: 4162,
      y: 416,
      patrolMin: 4013,
      patrolMax: 4304,
      speed: 80,
      phase: 67
    },
    {
      id: "enemy-35-13",
      kind: "spiker",
      x: 4492,
      y: 384,
      patrolMin: 4397,
      patrolMax: 4656,
      speed: 92,
      phase: 70
    },
    {
      id: "enemy-35-14",
      kind: "turret",
      x: 4822,
      y: 352,
      patrolMin: 4709,
      patrolMax: 4748,
      speed: 104,
      phase: 73
    }
  ],
  collectibles: [
    {
      id: "collectible-35-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 204,
      y: 151
    },
    {
      id: "collectible-35-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 274,
      y: 204
    },
    {
      id: "collectible-35-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 344,
      y: 224
    },
    {
      id: "collectible-35-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 414,
      y: 277
    },
    {
      id: "collectible-35-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 484,
      y: 330
    },
    {
      id: "collectible-35-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 554,
      y: 350
    },
    {
      id: "collectible-35-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 624,
      y: 403
    },
    {
      id: "collectible-35-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 694,
      y: 162
    },
    {
      id: "collectible-35-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 764,
      y: 182
    },
    {
      id: "collectible-35-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 834,
      y: 235
    },
    {
      id: "collectible-35-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 904,
      y: 288
    },
    {
      id: "collectible-35-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 974,
      y: 308
    },
    {
      id: "collectible-35-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1044,
      y: 361
    },
    {
      id: "collectible-35-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1114,
      y: 414
    },
    {
      id: "collectible-35-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1184,
      y: 140
    },
    {
      id: "collectible-35-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1254,
      y: 193
    },
    {
      id: "collectible-35-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1324,
      y: 246
    },
    {
      id: "collectible-35-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1394,
      y: 266
    },
    {
      id: "collectible-35-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1464,
      y: 319
    },
    {
      id: "collectible-35-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1534,
      y: 372
    },
    {
      id: "collectible-35-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1604,
      y: 392
    },
    {
      id: "collectible-35-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1674,
      y: 151
    },
    {
      id: "collectible-35-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1744,
      y: 204
    },
    {
      id: "collectible-35-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1814,
      y: 224
    },
    {
      id: "collectible-35-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1884,
      y: 277
    },
    {
      id: "collectible-35-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1954,
      y: 330
    },
    {
      id: "collectible-35-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2024,
      y: 350
    },
    {
      id: "collectible-35-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2094,
      y: 403
    },
    {
      id: "collectible-35-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2164,
      y: 162
    },
    {
      id: "collectible-35-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2234,
      y: 182
    },
    {
      id: "collectible-35-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2304,
      y: 235
    },
    {
      id: "collectible-35-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2374,
      y: 288
    },
    {
      id: "collectible-35-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2444,
      y: 308
    },
    {
      id: "collectible-35-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2514,
      y: 361
    },
    {
      id: "collectible-35-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2584,
      y: 414
    },
    {
      id: "collectible-35-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2654,
      y: 140
    },
    {
      id: "collectible-35-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2724,
      y: 193
    },
    {
      id: "collectible-35-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2794,
      y: 246
    },
    {
      id: "collectible-35-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2864,
      y: 266
    },
    {
      id: "collectible-35-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2934,
      y: 319
    },
    {
      id: "collectible-35-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3004,
      y: 372
    },
    {
      id: "collectible-35-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3074,
      y: 392
    },
    {
      id: "collectible-35-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3144,
      y: 151
    },
    {
      id: "collectible-35-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3214,
      y: 204
    },
    {
      id: "collectible-35-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3284,
      y: 224
    },
    {
      id: "collectible-35-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3354,
      y: 277
    },
    {
      id: "collectible-35-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3424,
      y: 330
    },
    {
      id: "collectible-35-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3494,
      y: 350
    },
    {
      id: "collectible-35-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3564,
      y: 403
    },
    {
      id: "collectible-35-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3634,
      y: 162
    },
    {
      id: "collectible-35-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3704,
      y: 182
    },
    {
      id: "collectible-35-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3774,
      y: 235
    },
    {
      id: "collectible-35-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3844,
      y: 288
    },
    {
      id: "collectible-35-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3914,
      y: 308
    },
    {
      id: "collectible-35-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3984,
      y: 361
    },
    {
      id: "collectible-35-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4054,
      y: 414
    },
    {
      id: "collectible-35-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4124,
      y: 140
    },
    {
      id: "collectible-35-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4194,
      y: 193
    },
    {
      id: "collectible-35-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4264,
      y: 246
    },
    {
      id: "collectible-35-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4334,
      y: 266
    },
    {
      id: "collectible-35-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4404,
      y: 319
    },
    {
      id: "collectible-35-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4474,
      y: 372
    },
    {
      id: "collectible-35-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4544,
      y: 392
    },
    {
      id: "collectible-35-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4614,
      y: 151
    },
    {
      id: "collectible-35-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4684,
      y: 204
    },
    {
      id: "collectible-35-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4754,
      y: 224
    },
    {
      id: "collectible-35-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4824,
      y: 277
    },
    {
      id: "collectible-35-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4894,
      y: 330
    },
    {
      id: "collectible-35-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4964,
      y: 350
    },
    {
      id: "collectible-35-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5034,
      y: 403
    },
    {
      id: "collectible-35-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5104,
      y: 162
    },
    {
      id: "collectible-35-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5174,
      y: 182
    },
    {
      id: "collectible-35-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5244,
      y: 235
    },
    {
      id: "collectible-35-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5314,
      y: 288
    },
    {
      id: "collectible-35-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5384,
      y: 308
    },
    {
      id: "collectible-35-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5454,
      y: 361
    },
    {
      id: "collectible-35-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5524,
      y: 414
    },
    {
      id: "collectible-35-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5594,
      y: 140
    },
    {
      id: "collectible-35-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5664,
      y: 193
    },
    {
      id: "collectible-35-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5734,
      y: 246
    },
    {
      id: "collectible-35-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5804,
      y: 266
    },
    {
      id: "collectible-35-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5874,
      y: 319
    },
    {
      id: "collectible-35-83",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5944,
      y: 372
    },
    {
      id: "collectible-35-84",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6014,
      y: 392
    },
    {
      id: "collectible-35-85",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6084,
      y: 151
    },
    {
      id: "collectible-35-86",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 6154,
      y: 204
    },
    {
      id: "collectible-35-87",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6224,
      y: 224
    },
    {
      id: "collectible-35-88",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6294,
      y: 277
    },
    {
      id: "collectible-35-89",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6364,
      y: 330
    },
    {
      id: "collectible-35-90",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6434,
      y: 350
    }
  ],
  powerups: [
    {
      id: "powerup-35-1",
      kind: "starburst",
      durationMs: 4800,
      x: 620,
      y: 130
    },
    {
      id: "powerup-35-2",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 1450,
      y: 182
    },
    {
      id: "powerup-35-3",
      kind: "shield",
      durationMs: 6600,
      x: 2280,
      y: 234
    },
    {
      id: "powerup-35-4",
      kind: "springBoots",
      durationMs: 7500,
      x: 3110,
      y: 286
    },
    {
      id: "powerup-35-5",
      kind: "starburst",
      durationMs: 4800,
      x: 3940,
      y: 338
    },
    {
      id: "powerup-35-6",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 4770,
      y: 130
    },
    {
      id: "powerup-35-7",
      kind: "shield",
      durationMs: 6600,
      x: 5600,
      y: 182
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-35-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 3.4000000000000004
    },
    {
      id: "moving-platform-35-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 4.1000000000000005
    },
    {
      id: "moving-platform-35-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 4.800000000000001
    },
    {
      id: "moving-platform-35-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 5.5
    },
    {
      id: "moving-platform-35-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 6.2
    },
    {
      id: "moving-platform-35-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 6.9
    },
    {
      id: "moving-platform-35-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 7.6
    },
    {
      id: "moving-platform-35-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 8.3
    },
    {
      id: "moving-platform-35-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 9
    },
    {
      id: "moving-platform-35-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 9.7
    },
    {
      id: "moving-platform-35-11",
      x: 6040,
      y: 250,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 10.4
    }
  ],
  hazards: [
    {
      id: "hazard-35-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 34
    },
    {
      id: "hazard-35-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 35
    },
    {
      id: "hazard-35-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 36
    },
    {
      id: "hazard-35-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 37
    },
    {
      id: "hazard-35-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 38
    },
    {
      id: "hazard-35-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 39
    },
    {
      id: "hazard-35-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 40
    },
    {
      id: "hazard-35-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 41
    },
    {
      id: "hazard-35-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 42
    },
    {
      id: "hazard-35-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 43
    },
    {
      id: "hazard-35-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 44
    },
    {
      id: "hazard-35-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 45
    },
    {
      id: "hazard-35-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 46
    },
    {
      id: "hazard-35-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 47
    },
    {
      id: "hazard-35-15",
      kind: "thorn",
      x: 5660,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 48
    },
    {
      id: "hazard-35-16",
      kind: "crushBlock",
      x: 6020,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 49
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-35-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-35-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-35-1",
      x: 674,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-35-2",
      x: 1444,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-35-3",
      x: 2214,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-35-4",
      x: 2984,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-35-5",
      x: 3754,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-35-6",
      x: 4524,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-35-7",
      x: 5294,
      y: 416,
      power: 1.1
    }
  ],
  windZones: [
    {
      id: "wind-35-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-35-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-35-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-35-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-35-5",
      x: 4660,
      y: 180,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    }
  ],
  decorations: [
    {
      id: "decor-35-1",
      layer: "near",
      motif: "windmill",
      x: 782,
      y: 44,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-2",
      layer: "far",
      motif: "grass",
      x: 879,
      y: 85,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-3",
      layer: "mid",
      motif: "gear",
      x: 976,
      y: 126,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-4",
      layer: "far",
      motif: "vine",
      x: 1073,
      y: 167,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-5",
      layer: "mid",
      motif: "glassBerry",
      x: 1170,
      y: 208,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-6",
      layer: "near",
      motif: "cloud",
      x: 1267,
      y: 249,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-7",
      layer: "mid",
      motif: "windmill",
      x: 1364,
      y: 290,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-8",
      layer: "far",
      motif: "grass",
      x: 1461,
      y: 331,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-9",
      layer: "mid",
      motif: "gear",
      x: 1558,
      y: 372,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-10",
      layer: "far",
      motif: "vine",
      x: 1655,
      y: 413,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-11",
      layer: "near",
      motif: "glassBerry",
      x: 1752,
      y: 454,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-12",
      layer: "far",
      motif: "cloud",
      x: 1849,
      y: 65,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-13",
      layer: "mid",
      motif: "windmill",
      x: 1946,
      y: 106,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-14",
      layer: "far",
      motif: "grass",
      x: 2043,
      y: 147,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-15",
      layer: "mid",
      motif: "gear",
      x: 2140,
      y: 188,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-16",
      layer: "near",
      motif: "vine",
      x: 2237,
      y: 229,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-17",
      layer: "mid",
      motif: "glassBerry",
      x: 2334,
      y: 270,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-18",
      layer: "far",
      motif: "cloud",
      x: 2431,
      y: 311,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-19",
      layer: "mid",
      motif: "windmill",
      x: 2528,
      y: 352,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-20",
      layer: "far",
      motif: "grass",
      x: 2625,
      y: 393,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-21",
      layer: "near",
      motif: "gear",
      x: 2722,
      y: 434,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-22",
      layer: "far",
      motif: "vine",
      x: 2819,
      y: 45,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-23",
      layer: "mid",
      motif: "glassBerry",
      x: 2916,
      y: 86,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-24",
      layer: "far",
      motif: "cloud",
      x: 3013,
      y: 127,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-25",
      layer: "mid",
      motif: "windmill",
      x: 3110,
      y: 168,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-26",
      layer: "near",
      motif: "grass",
      x: 3207,
      y: 209,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-27",
      layer: "mid",
      motif: "gear",
      x: 3304,
      y: 250,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-28",
      layer: "far",
      motif: "vine",
      x: 3401,
      y: 291,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-29",
      layer: "mid",
      motif: "glassBerry",
      x: 3498,
      y: 332,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-30",
      layer: "far",
      motif: "cloud",
      x: 3595,
      y: 373,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-31",
      layer: "near",
      motif: "windmill",
      x: 3692,
      y: 414,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-32",
      layer: "far",
      motif: "grass",
      x: 3789,
      y: 455,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-33",
      layer: "mid",
      motif: "gear",
      x: 3886,
      y: 66,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-34",
      layer: "far",
      motif: "vine",
      x: 3983,
      y: 107,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-35",
      layer: "mid",
      motif: "glassBerry",
      x: 4080,
      y: 148,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-36",
      layer: "near",
      motif: "cloud",
      x: 4177,
      y: 189,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-37",
      layer: "mid",
      motif: "windmill",
      x: 4274,
      y: 230,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-38",
      layer: "far",
      motif: "grass",
      x: 4371,
      y: 271,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-39",
      layer: "mid",
      motif: "gear",
      x: 4468,
      y: 312,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-40",
      layer: "far",
      motif: "vine",
      x: 4565,
      y: 353,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-41",
      layer: "near",
      motif: "glassBerry",
      x: 4662,
      y: 394,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-42",
      layer: "far",
      motif: "cloud",
      x: 4759,
      y: 435,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-43",
      layer: "mid",
      motif: "windmill",
      x: 4856,
      y: 46,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-44",
      layer: "far",
      motif: "grass",
      x: 25,
      y: 87,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-45",
      layer: "mid",
      motif: "gear",
      x: 122,
      y: 128,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-46",
      layer: "near",
      motif: "vine",
      x: 219,
      y: 169,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-47",
      layer: "mid",
      motif: "glassBerry",
      x: 316,
      y: 210,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-48",
      layer: "far",
      motif: "cloud",
      x: 413,
      y: 251,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-49",
      layer: "mid",
      motif: "windmill",
      x: 510,
      y: 292,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-50",
      layer: "far",
      motif: "grass",
      x: 607,
      y: 333,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-51",
      layer: "near",
      motif: "gear",
      x: 704,
      y: 374,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-52",
      layer: "far",
      motif: "vine",
      x: 801,
      y: 415,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-53",
      layer: "mid",
      motif: "glassBerry",
      x: 898,
      y: 456,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-54",
      layer: "far",
      motif: "cloud",
      x: 995,
      y: 67,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-55",
      layer: "mid",
      motif: "windmill",
      x: 1092,
      y: 108,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-56",
      layer: "near",
      motif: "grass",
      x: 1189,
      y: 149,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-57",
      layer: "mid",
      motif: "gear",
      x: 1286,
      y: 190,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-58",
      layer: "far",
      motif: "vine",
      x: 1383,
      y: 231,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-59",
      layer: "mid",
      motif: "glassBerry",
      x: 1480,
      y: 272,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-60",
      layer: "far",
      motif: "cloud",
      x: 1577,
      y: 313,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-61",
      layer: "near",
      motif: "windmill",
      x: 1674,
      y: 354,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-62",
      layer: "far",
      motif: "grass",
      x: 1771,
      y: 395,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-63",
      layer: "mid",
      motif: "gear",
      x: 1868,
      y: 436,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-64",
      layer: "far",
      motif: "vine",
      x: 1965,
      y: 47,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-65",
      layer: "mid",
      motif: "glassBerry",
      x: 2062,
      y: 88,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-66",
      layer: "near",
      motif: "cloud",
      x: 2159,
      y: 129,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-67",
      layer: "mid",
      motif: "windmill",
      x: 2256,
      y: 170,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-68",
      layer: "far",
      motif: "grass",
      x: 2353,
      y: 211,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-69",
      layer: "mid",
      motif: "gear",
      x: 2450,
      y: 252,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-70",
      layer: "far",
      motif: "vine",
      x: 2547,
      y: 293,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-71",
      layer: "near",
      motif: "glassBerry",
      x: 2644,
      y: 334,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-72",
      layer: "far",
      motif: "cloud",
      x: 2741,
      y: 375,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-73",
      layer: "mid",
      motif: "windmill",
      x: 2838,
      y: 416,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-74",
      layer: "far",
      motif: "grass",
      x: 2935,
      y: 457,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-75",
      layer: "mid",
      motif: "gear",
      x: 3032,
      y: 68,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-76",
      layer: "near",
      motif: "vine",
      x: 3129,
      y: 109,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-77",
      layer: "mid",
      motif: "glassBerry",
      x: 3226,
      y: 150,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-78",
      layer: "far",
      motif: "cloud",
      x: 3323,
      y: 191,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-79",
      layer: "mid",
      motif: "windmill",
      x: 3420,
      y: 232,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-80",
      layer: "far",
      motif: "grass",
      x: 3517,
      y: 273,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-81",
      layer: "near",
      motif: "gear",
      x: 3614,
      y: 314,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-82",
      layer: "far",
      motif: "vine",
      x: 3711,
      y: 355,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-83",
      layer: "mid",
      motif: "glassBerry",
      x: 3808,
      y: 396,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-84",
      layer: "far",
      motif: "cloud",
      x: 3905,
      y: 437,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-85",
      layer: "mid",
      motif: "windmill",
      x: 4002,
      y: 48,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-86",
      layer: "near",
      motif: "grass",
      x: 4099,
      y: 89,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-87",
      layer: "mid",
      motif: "gear",
      x: 4196,
      y: 130,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-88",
      layer: "far",
      motif: "vine",
      x: 4293,
      y: 171,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-89",
      layer: "mid",
      motif: "glassBerry",
      x: 4390,
      y: 212,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-90",
      layer: "far",
      motif: "cloud",
      x: 4487,
      y: 253,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-91",
      layer: "near",
      motif: "windmill",
      x: 4584,
      y: 294,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-92",
      layer: "far",
      motif: "grass",
      x: 4681,
      y: 335,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-93",
      layer: "mid",
      motif: "gear",
      x: 4778,
      y: 376,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-94",
      layer: "far",
      motif: "vine",
      x: 4875,
      y: 417,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-95",
      layer: "mid",
      motif: "glassBerry",
      x: 44,
      y: 458,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-96",
      layer: "near",
      motif: "cloud",
      x: 141,
      y: 69,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-97",
      layer: "mid",
      motif: "windmill",
      x: 238,
      y: 110,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-98",
      layer: "far",
      motif: "grass",
      x: 335,
      y: 151,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-99",
      layer: "mid",
      motif: "gear",
      x: 432,
      y: 192,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-100",
      layer: "far",
      motif: "vine",
      x: 529,
      y: 233,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-101",
      layer: "near",
      motif: "glassBerry",
      x: 626,
      y: 274,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-102",
      layer: "far",
      motif: "cloud",
      x: 723,
      y: 315,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-103",
      layer: "mid",
      motif: "windmill",
      x: 820,
      y: 356,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-104",
      layer: "far",
      motif: "grass",
      x: 917,
      y: 397,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-105",
      layer: "mid",
      motif: "gear",
      x: 1014,
      y: 438,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-106",
      layer: "near",
      motif: "vine",
      x: 1111,
      y: 49,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-107",
      layer: "mid",
      motif: "glassBerry",
      x: 1208,
      y: 90,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-108",
      layer: "far",
      motif: "cloud",
      x: 1305,
      y: 131,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-109",
      layer: "mid",
      motif: "windmill",
      x: 1402,
      y: 172,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-110",
      layer: "far",
      motif: "grass",
      x: 1499,
      y: 213,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-111",
      layer: "near",
      motif: "gear",
      x: 1596,
      y: 254,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-112",
      layer: "far",
      motif: "vine",
      x: 1693,
      y: 295,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-113",
      layer: "mid",
      motif: "glassBerry",
      x: 1790,
      y: 336,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-114",
      layer: "far",
      motif: "cloud",
      x: 1887,
      y: 377,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-115",
      layer: "mid",
      motif: "windmill",
      x: 1984,
      y: 418,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-116",
      layer: "near",
      motif: "grass",
      x: 2081,
      y: 459,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-117",
      layer: "mid",
      motif: "gear",
      x: 2178,
      y: 70,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-118",
      layer: "far",
      motif: "vine",
      x: 2275,
      y: 111,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-119",
      layer: "mid",
      motif: "glassBerry",
      x: 2372,
      y: 152,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-120",
      layer: "far",
      motif: "cloud",
      x: 2469,
      y: 193,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-121",
      layer: "near",
      motif: "windmill",
      x: 2566,
      y: 234,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-122",
      layer: "far",
      motif: "grass",
      x: 2663,
      y: 275,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-123",
      layer: "mid",
      motif: "gear",
      x: 2760,
      y: 316,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-124",
      layer: "far",
      motif: "vine",
      x: 2857,
      y: 357,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-125",
      layer: "mid",
      motif: "glassBerry",
      x: 2954,
      y: 398,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-126",
      layer: "near",
      motif: "cloud",
      x: 3051,
      y: 439,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-127",
      layer: "mid",
      motif: "windmill",
      x: 3148,
      y: 50,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-128",
      layer: "far",
      motif: "grass",
      x: 3245,
      y: 91,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-129",
      layer: "mid",
      motif: "gear",
      x: 3342,
      y: 132,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-130",
      layer: "far",
      motif: "vine",
      x: 3439,
      y: 173,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-131",
      layer: "near",
      motif: "glassBerry",
      x: 3536,
      y: 214,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-132",
      layer: "far",
      motif: "cloud",
      x: 3633,
      y: 255,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-133",
      layer: "mid",
      motif: "windmill",
      x: 3730,
      y: 296,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-134",
      layer: "far",
      motif: "grass",
      x: 3827,
      y: 337,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-135",
      layer: "mid",
      motif: "gear",
      x: 3924,
      y: 378,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-136",
      layer: "near",
      motif: "vine",
      x: 4021,
      y: 419,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-137",
      layer: "mid",
      motif: "glassBerry",
      x: 4118,
      y: 460,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-138",
      layer: "far",
      motif: "cloud",
      x: 4215,
      y: 71,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-139",
      layer: "mid",
      motif: "windmill",
      x: 4312,
      y: 112,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-140",
      layer: "far",
      motif: "grass",
      x: 4409,
      y: 153,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-141",
      layer: "near",
      motif: "gear",
      x: 4506,
      y: 194,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-142",
      layer: "far",
      motif: "vine",
      x: 4603,
      y: 235,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-143",
      layer: "mid",
      motif: "glassBerry",
      x: 4700,
      y: 276,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-144",
      layer: "far",
      motif: "cloud",
      x: 4797,
      y: 317,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-145",
      layer: "mid",
      motif: "windmill",
      x: 4894,
      y: 358,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-146",
      layer: "near",
      motif: "grass",
      x: 63,
      y: 399,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-147",
      layer: "mid",
      motif: "gear",
      x: 160,
      y: 440,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-148",
      layer: "far",
      motif: "vine",
      x: 257,
      y: 51,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-149",
      layer: "mid",
      motif: "glassBerry",
      x: 354,
      y: 92,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-150",
      layer: "far",
      motif: "cloud",
      x: 451,
      y: 133,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-151",
      layer: "near",
      motif: "windmill",
      x: 548,
      y: 174,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-152",
      layer: "far",
      motif: "grass",
      x: 645,
      y: 215,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-153",
      layer: "mid",
      motif: "gear",
      x: 742,
      y: 256,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-154",
      layer: "far",
      motif: "vine",
      x: 839,
      y: 297,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-155",
      layer: "mid",
      motif: "glassBerry",
      x: 936,
      y: 338,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-156",
      layer: "near",
      motif: "cloud",
      x: 1033,
      y: 379,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-157",
      layer: "mid",
      motif: "windmill",
      x: 1130,
      y: 420,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-158",
      layer: "far",
      motif: "grass",
      x: 1227,
      y: 461,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-159",
      layer: "mid",
      motif: "gear",
      x: 1324,
      y: 72,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-160",
      layer: "far",
      motif: "vine",
      x: 1421,
      y: 113,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-161",
      layer: "near",
      motif: "glassBerry",
      x: 1518,
      y: 154,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-162",
      layer: "far",
      motif: "cloud",
      x: 1615,
      y: 195,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-163",
      layer: "mid",
      motif: "windmill",
      x: 1712,
      y: 236,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-164",
      layer: "far",
      motif: "grass",
      x: 1809,
      y: 277,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-165",
      layer: "mid",
      motif: "gear",
      x: 1906,
      y: 318,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-166",
      layer: "near",
      motif: "vine",
      x: 2003,
      y: 359,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-167",
      layer: "mid",
      motif: "glassBerry",
      x: 2100,
      y: 400,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-168",
      layer: "far",
      motif: "cloud",
      x: 2197,
      y: 441,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-169",
      layer: "mid",
      motif: "windmill",
      x: 2294,
      y: 52,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-170",
      layer: "far",
      motif: "grass",
      x: 2391,
      y: 93,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-35-171",
      layer: "near",
      motif: "gear",
      x: 2488,
      y: 134,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-172",
      layer: "far",
      motif: "vine",
      x: 2585,
      y: 175,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-35-173",
      layer: "mid",
      motif: "glassBerry",
      x: 2682,
      y: 216,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-35-174",
      layer: "far",
      motif: "cloud",
      x: 2779,
      y: 257,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-35-175",
      layer: "mid",
      motif: "windmill",
      x: 2876,
      y: 298,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-35-176",
      layer: "near",
      motif: "grass",
      x: 2973,
      y: 339,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-35-177",
      layer: "mid",
      motif: "gear",
      x: 3070,
      y: 380,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-35-178",
      layer: "far",
      motif: "vine",
      x: 3167,
      y: 421,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-35-179",
      layer: "mid",
      motif: "glassBerry",
      x: 3264,
      y: 32,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-35-180",
      layer: "far",
      motif: "cloud",
      x: 3361,
      y: 73,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-35",
    x: 4736,
    y: 448,
    nextLevelId: "level-36"
  }
};
