import type { LevelDefinition } from "../schema";

export const LEVEL_31: LevelDefinition = {
  id: "level-31",
  index: 30,
  title: "Aurora Conservatory 03",
  chapter: "Aurora Conservatory",
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
    ".....................................###...........................####..........................#####.........................######.....................",
    "................................#######.......................###...........................####..........................#####...........................",
    "...........................======........................=======.......................===...........................====.................................",
    "......................#####.........................######........................#######.......................###...........................####........",
    ".................####..........................#####.........................######........................#######.......................###..............",
    "............===..........................W====..........................=====W........................======.....W..................=======...............",
    "................................S...................................S...................................S.................................................",
    "...P...................W...................................W...................................W...................................W................G.....",
    "..............S...................................S...................................S...................................S...............................",
    "^################^..##############^#..#############^##..############^###..###########^####..##########^#####..#########^######..########^################^",
    "##################^.################^.################^.################^.################^.################^.################^.##########################"
  ],
  enemies: [
    {
      id: "enemy-31-1",
      kind: "beetle",
      x: 420,
      y: 448,
      patrolMin: 325,
      patrolMax: 540,
      speed: 44,
      phase: 30
    },
    {
      id: "enemy-31-2",
      kind: "acorn",
      x: 750,
      y: 416,
      patrolMin: 637,
      patrolMax: 892,
      speed: 56,
      phase: 33
    },
    {
      id: "enemy-31-3",
      kind: "lantern",
      x: 1080,
      y: 384,
      patrolMin: 949,
      patrolMax: 1244,
      speed: 68,
      phase: 36
    },
    {
      id: "enemy-31-4",
      kind: "charger",
      x: 1410,
      y: 352,
      patrolMin: 1261,
      patrolMax: 1596,
      speed: 80,
      phase: 39
    },
    {
      id: "enemy-31-5",
      kind: "spiker",
      x: 1740,
      y: 320,
      patrolMin: 1645,
      patrolMax: 1948,
      speed: 92,
      phase: 42
    },
    {
      id: "enemy-31-6",
      kind: "turret",
      x: 2070,
      y: 448,
      patrolMin: 1957,
      patrolMax: 2190,
      speed: 104,
      phase: 45
    },
    {
      id: "enemy-31-7",
      kind: "beetle",
      x: 2400,
      y: 416,
      patrolMin: 2269,
      patrolMax: 2542,
      speed: 44,
      phase: 48
    },
    {
      id: "enemy-31-8",
      kind: "acorn",
      x: 2730,
      y: 384,
      patrolMin: 2581,
      patrolMax: 2894,
      speed: 56,
      phase: 51
    },
    {
      id: "enemy-31-9",
      kind: "lantern",
      x: 3060,
      y: 352,
      patrolMin: 2965,
      patrolMax: 3246,
      speed: 68,
      phase: 54
    },
    {
      id: "enemy-31-10",
      kind: "charger",
      x: 3390,
      y: 320,
      patrolMin: 3277,
      patrolMax: 3598,
      speed: 80,
      phase: 57
    },
    {
      id: "enemy-31-11",
      kind: "spiker",
      x: 3720,
      y: 448,
      patrolMin: 3589,
      patrolMax: 3840,
      speed: 92,
      phase: 60
    },
    {
      id: "enemy-31-12",
      kind: "turret",
      x: 4050,
      y: 416,
      patrolMin: 3901,
      patrolMax: 4192,
      speed: 104,
      phase: 63
    },
    {
      id: "enemy-31-13",
      kind: "beetle",
      x: 4380,
      y: 384,
      patrolMin: 4285,
      patrolMax: 4544,
      speed: 44,
      phase: 66
    },
    {
      id: "enemy-31-14",
      kind: "acorn",
      x: 4710,
      y: 352,
      patrolMin: 4597,
      patrolMax: 4748,
      speed: 56,
      phase: 69
    },
    {
      id: "enemy-31-15",
      kind: "lantern",
      x: 5040,
      y: 320,
      patrolMin: 4909,
      patrolMax: 4748,
      speed: 68,
      phase: 72
    },
    {
      id: "enemy-31-16",
      kind: "charger",
      x: 5370,
      y: 448,
      patrolMin: 5221,
      patrolMax: 4748,
      speed: 80,
      phase: 75
    },
    {
      id: "enemy-31-17",
      kind: "spiker",
      x: 5700,
      y: 416,
      patrolMin: 5605,
      patrolMax: 4748,
      speed: 92,
      phase: 78
    },
    {
      id: "enemy-31-18",
      kind: "turret",
      x: 6030,
      y: 384,
      patrolMin: 5917,
      patrolMax: 4748,
      speed: 104,
      phase: 81
    }
  ],
  collectibles: [
    {
      id: "collectible-31-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 204,
      y: 140
    },
    {
      id: "collectible-31-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 274,
      y: 193
    },
    {
      id: "collectible-31-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 344,
      y: 246
    },
    {
      id: "collectible-31-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 414,
      y: 266
    },
    {
      id: "collectible-31-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 484,
      y: 319
    },
    {
      id: "collectible-31-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 554,
      y: 372
    },
    {
      id: "collectible-31-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 624,
      y: 392
    },
    {
      id: "collectible-31-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 694,
      y: 151
    },
    {
      id: "collectible-31-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 764,
      y: 204
    },
    {
      id: "collectible-31-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 834,
      y: 224
    },
    {
      id: "collectible-31-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 904,
      y: 277
    },
    {
      id: "collectible-31-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 974,
      y: 330
    },
    {
      id: "collectible-31-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1044,
      y: 350
    },
    {
      id: "collectible-31-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1114,
      y: 403
    },
    {
      id: "collectible-31-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1184,
      y: 162
    },
    {
      id: "collectible-31-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1254,
      y: 182
    },
    {
      id: "collectible-31-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1324,
      y: 235
    },
    {
      id: "collectible-31-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1394,
      y: 288
    },
    {
      id: "collectible-31-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1464,
      y: 308
    },
    {
      id: "collectible-31-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1534,
      y: 361
    },
    {
      id: "collectible-31-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1604,
      y: 414
    },
    {
      id: "collectible-31-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1674,
      y: 140
    },
    {
      id: "collectible-31-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1744,
      y: 193
    },
    {
      id: "collectible-31-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1814,
      y: 246
    },
    {
      id: "collectible-31-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1884,
      y: 266
    },
    {
      id: "collectible-31-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1954,
      y: 319
    },
    {
      id: "collectible-31-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2024,
      y: 372
    },
    {
      id: "collectible-31-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2094,
      y: 392
    },
    {
      id: "collectible-31-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2164,
      y: 151
    },
    {
      id: "collectible-31-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2234,
      y: 204
    },
    {
      id: "collectible-31-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2304,
      y: 224
    },
    {
      id: "collectible-31-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2374,
      y: 277
    },
    {
      id: "collectible-31-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2444,
      y: 330
    },
    {
      id: "collectible-31-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2514,
      y: 350
    },
    {
      id: "collectible-31-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2584,
      y: 403
    },
    {
      id: "collectible-31-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2654,
      y: 162
    },
    {
      id: "collectible-31-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2724,
      y: 182
    },
    {
      id: "collectible-31-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2794,
      y: 235
    },
    {
      id: "collectible-31-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2864,
      y: 288
    },
    {
      id: "collectible-31-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2934,
      y: 308
    },
    {
      id: "collectible-31-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3004,
      y: 361
    },
    {
      id: "collectible-31-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3074,
      y: 414
    },
    {
      id: "collectible-31-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3144,
      y: 140
    },
    {
      id: "collectible-31-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3214,
      y: 193
    },
    {
      id: "collectible-31-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3284,
      y: 246
    },
    {
      id: "collectible-31-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3354,
      y: 266
    },
    {
      id: "collectible-31-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3424,
      y: 319
    },
    {
      id: "collectible-31-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3494,
      y: 372
    },
    {
      id: "collectible-31-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3564,
      y: 392
    },
    {
      id: "collectible-31-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3634,
      y: 151
    },
    {
      id: "collectible-31-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3704,
      y: 204
    },
    {
      id: "collectible-31-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3774,
      y: 224
    },
    {
      id: "collectible-31-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3844,
      y: 277
    },
    {
      id: "collectible-31-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3914,
      y: 330
    },
    {
      id: "collectible-31-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3984,
      y: 350
    },
    {
      id: "collectible-31-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4054,
      y: 403
    },
    {
      id: "collectible-31-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4124,
      y: 162
    },
    {
      id: "collectible-31-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4194,
      y: 182
    },
    {
      id: "collectible-31-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4264,
      y: 235
    },
    {
      id: "collectible-31-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4334,
      y: 288
    },
    {
      id: "collectible-31-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4404,
      y: 308
    },
    {
      id: "collectible-31-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4474,
      y: 361
    },
    {
      id: "collectible-31-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4544,
      y: 414
    },
    {
      id: "collectible-31-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4614,
      y: 140
    },
    {
      id: "collectible-31-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4684,
      y: 193
    },
    {
      id: "collectible-31-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4754,
      y: 246
    },
    {
      id: "collectible-31-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4824,
      y: 266
    },
    {
      id: "collectible-31-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4894,
      y: 319
    },
    {
      id: "collectible-31-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4964,
      y: 372
    },
    {
      id: "collectible-31-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5034,
      y: 392
    },
    {
      id: "collectible-31-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5104,
      y: 151
    },
    {
      id: "collectible-31-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5174,
      y: 204
    },
    {
      id: "collectible-31-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5244,
      y: 224
    },
    {
      id: "collectible-31-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5314,
      y: 277
    }
  ],
  powerups: [
    {
      id: "powerup-31-1",
      kind: "starburst",
      durationMs: 4800,
      x: 500,
      y: 130
    },
    {
      id: "powerup-31-2",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 1330,
      y: 182
    },
    {
      id: "powerup-31-3",
      kind: "shield",
      durationMs: 6600,
      x: 2160,
      y: 234
    },
    {
      id: "powerup-31-4",
      kind: "springBoots",
      durationMs: 7500,
      x: 2990,
      y: 286
    },
    {
      id: "powerup-31-5",
      kind: "starburst",
      durationMs: 4800,
      x: 3820,
      y: 338
    },
    {
      id: "powerup-31-6",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 4650,
      y: 130
    },
    {
      id: "powerup-31-7",
      kind: "shield",
      durationMs: 6600,
      x: 5480,
      y: 182
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-31-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 3
    },
    {
      id: "moving-platform-31-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 3.7
    },
    {
      id: "moving-platform-31-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 4.4
    },
    {
      id: "moving-platform-31-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 5.1
    },
    {
      id: "moving-platform-31-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 5.8
    },
    {
      id: "moving-platform-31-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 6.5
    },
    {
      id: "moving-platform-31-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 7.199999999999999
    }
  ],
  hazards: [
    {
      id: "hazard-31-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 30
    },
    {
      id: "hazard-31-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 31
    },
    {
      id: "hazard-31-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 32
    },
    {
      id: "hazard-31-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 33
    },
    {
      id: "hazard-31-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 34
    },
    {
      id: "hazard-31-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 35
    },
    {
      id: "hazard-31-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 36
    },
    {
      id: "hazard-31-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 37
    },
    {
      id: "hazard-31-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 38
    },
    {
      id: "hazard-31-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 39
    },
    {
      id: "hazard-31-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 40
    },
    {
      id: "hazard-31-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 41
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-31-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-31-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-31-1",
      x: 640,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-31-2",
      x: 1410,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-31-3",
      x: 2180,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-31-4",
      x: 2950,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-31-5",
      x: 3720,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-31-6",
      x: 4490,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-31-7",
      x: 5260,
      y: 416,
      power: 1.1
    }
  ],
  windZones: [
    {
      id: "wind-31-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-31-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-31-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-31-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-31-5",
      x: 4660,
      y: 180,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    }
  ],
  decorations: [
    {
      id: "decor-31-1",
      layer: "near",
      motif: "gear",
      x: 690,
      y: 422,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-2",
      layer: "far",
      motif: "vine",
      x: 787,
      y: 33,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-3",
      layer: "mid",
      motif: "glassBerry",
      x: 884,
      y: 74,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-4",
      layer: "far",
      motif: "cloud",
      x: 981,
      y: 115,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-5",
      layer: "mid",
      motif: "windmill",
      x: 1078,
      y: 156,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-6",
      layer: "near",
      motif: "grass",
      x: 1175,
      y: 197,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-7",
      layer: "mid",
      motif: "gear",
      x: 1272,
      y: 238,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-8",
      layer: "far",
      motif: "vine",
      x: 1369,
      y: 279,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-9",
      layer: "mid",
      motif: "glassBerry",
      x: 1466,
      y: 320,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-10",
      layer: "far",
      motif: "cloud",
      x: 1563,
      y: 361,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-11",
      layer: "near",
      motif: "windmill",
      x: 1660,
      y: 402,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-12",
      layer: "far",
      motif: "grass",
      x: 1757,
      y: 443,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-13",
      layer: "mid",
      motif: "gear",
      x: 1854,
      y: 54,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-14",
      layer: "far",
      motif: "vine",
      x: 1951,
      y: 95,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-15",
      layer: "mid",
      motif: "glassBerry",
      x: 2048,
      y: 136,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-16",
      layer: "near",
      motif: "cloud",
      x: 2145,
      y: 177,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-17",
      layer: "mid",
      motif: "windmill",
      x: 2242,
      y: 218,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-18",
      layer: "far",
      motif: "grass",
      x: 2339,
      y: 259,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-19",
      layer: "mid",
      motif: "gear",
      x: 2436,
      y: 300,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-20",
      layer: "far",
      motif: "vine",
      x: 2533,
      y: 341,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-21",
      layer: "near",
      motif: "glassBerry",
      x: 2630,
      y: 382,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-22",
      layer: "far",
      motif: "cloud",
      x: 2727,
      y: 423,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-23",
      layer: "mid",
      motif: "windmill",
      x: 2824,
      y: 34,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-24",
      layer: "far",
      motif: "grass",
      x: 2921,
      y: 75,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-25",
      layer: "mid",
      motif: "gear",
      x: 3018,
      y: 116,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-26",
      layer: "near",
      motif: "vine",
      x: 3115,
      y: 157,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-27",
      layer: "mid",
      motif: "glassBerry",
      x: 3212,
      y: 198,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-28",
      layer: "far",
      motif: "cloud",
      x: 3309,
      y: 239,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-29",
      layer: "mid",
      motif: "windmill",
      x: 3406,
      y: 280,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-30",
      layer: "far",
      motif: "grass",
      x: 3503,
      y: 321,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-31",
      layer: "near",
      motif: "gear",
      x: 3600,
      y: 362,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-32",
      layer: "far",
      motif: "vine",
      x: 3697,
      y: 403,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-33",
      layer: "mid",
      motif: "glassBerry",
      x: 3794,
      y: 444,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-34",
      layer: "far",
      motif: "cloud",
      x: 3891,
      y: 55,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-35",
      layer: "mid",
      motif: "windmill",
      x: 3988,
      y: 96,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-36",
      layer: "near",
      motif: "grass",
      x: 4085,
      y: 137,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-37",
      layer: "mid",
      motif: "gear",
      x: 4182,
      y: 178,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-38",
      layer: "far",
      motif: "vine",
      x: 4279,
      y: 219,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-39",
      layer: "mid",
      motif: "glassBerry",
      x: 4376,
      y: 260,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-40",
      layer: "far",
      motif: "cloud",
      x: 4473,
      y: 301,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-41",
      layer: "near",
      motif: "windmill",
      x: 4570,
      y: 342,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-42",
      layer: "far",
      motif: "grass",
      x: 4667,
      y: 383,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-43",
      layer: "mid",
      motif: "gear",
      x: 4764,
      y: 424,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-44",
      layer: "far",
      motif: "vine",
      x: 4861,
      y: 35,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-45",
      layer: "mid",
      motif: "glassBerry",
      x: 30,
      y: 76,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-46",
      layer: "near",
      motif: "cloud",
      x: 127,
      y: 117,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-47",
      layer: "mid",
      motif: "windmill",
      x: 224,
      y: 158,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-48",
      layer: "far",
      motif: "grass",
      x: 321,
      y: 199,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-49",
      layer: "mid",
      motif: "gear",
      x: 418,
      y: 240,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-50",
      layer: "far",
      motif: "vine",
      x: 515,
      y: 281,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-51",
      layer: "near",
      motif: "glassBerry",
      x: 612,
      y: 322,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-52",
      layer: "far",
      motif: "cloud",
      x: 709,
      y: 363,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-53",
      layer: "mid",
      motif: "windmill",
      x: 806,
      y: 404,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-54",
      layer: "far",
      motif: "grass",
      x: 903,
      y: 445,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-55",
      layer: "mid",
      motif: "gear",
      x: 1000,
      y: 56,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-56",
      layer: "near",
      motif: "vine",
      x: 1097,
      y: 97,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-57",
      layer: "mid",
      motif: "glassBerry",
      x: 1194,
      y: 138,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-58",
      layer: "far",
      motif: "cloud",
      x: 1291,
      y: 179,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-59",
      layer: "mid",
      motif: "windmill",
      x: 1388,
      y: 220,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-60",
      layer: "far",
      motif: "grass",
      x: 1485,
      y: 261,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-61",
      layer: "near",
      motif: "gear",
      x: 1582,
      y: 302,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-62",
      layer: "far",
      motif: "vine",
      x: 1679,
      y: 343,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-63",
      layer: "mid",
      motif: "glassBerry",
      x: 1776,
      y: 384,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-64",
      layer: "far",
      motif: "cloud",
      x: 1873,
      y: 425,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-65",
      layer: "mid",
      motif: "windmill",
      x: 1970,
      y: 36,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-66",
      layer: "near",
      motif: "grass",
      x: 2067,
      y: 77,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-67",
      layer: "mid",
      motif: "gear",
      x: 2164,
      y: 118,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-68",
      layer: "far",
      motif: "vine",
      x: 2261,
      y: 159,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-69",
      layer: "mid",
      motif: "glassBerry",
      x: 2358,
      y: 200,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-70",
      layer: "far",
      motif: "cloud",
      x: 2455,
      y: 241,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-71",
      layer: "near",
      motif: "windmill",
      x: 2552,
      y: 282,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-72",
      layer: "far",
      motif: "grass",
      x: 2649,
      y: 323,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-73",
      layer: "mid",
      motif: "gear",
      x: 2746,
      y: 364,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-74",
      layer: "far",
      motif: "vine",
      x: 2843,
      y: 405,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-75",
      layer: "mid",
      motif: "glassBerry",
      x: 2940,
      y: 446,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-76",
      layer: "near",
      motif: "cloud",
      x: 3037,
      y: 57,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-77",
      layer: "mid",
      motif: "windmill",
      x: 3134,
      y: 98,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-78",
      layer: "far",
      motif: "grass",
      x: 3231,
      y: 139,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-79",
      layer: "mid",
      motif: "gear",
      x: 3328,
      y: 180,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-80",
      layer: "far",
      motif: "vine",
      x: 3425,
      y: 221,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-81",
      layer: "near",
      motif: "glassBerry",
      x: 3522,
      y: 262,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-82",
      layer: "far",
      motif: "cloud",
      x: 3619,
      y: 303,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-83",
      layer: "mid",
      motif: "windmill",
      x: 3716,
      y: 344,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-84",
      layer: "far",
      motif: "grass",
      x: 3813,
      y: 385,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-85",
      layer: "mid",
      motif: "gear",
      x: 3910,
      y: 426,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-86",
      layer: "near",
      motif: "vine",
      x: 4007,
      y: 37,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-87",
      layer: "mid",
      motif: "glassBerry",
      x: 4104,
      y: 78,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-88",
      layer: "far",
      motif: "cloud",
      x: 4201,
      y: 119,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-89",
      layer: "mid",
      motif: "windmill",
      x: 4298,
      y: 160,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-90",
      layer: "far",
      motif: "grass",
      x: 4395,
      y: 201,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-91",
      layer: "near",
      motif: "gear",
      x: 4492,
      y: 242,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-92",
      layer: "far",
      motif: "vine",
      x: 4589,
      y: 283,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-93",
      layer: "mid",
      motif: "glassBerry",
      x: 4686,
      y: 324,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-94",
      layer: "far",
      motif: "cloud",
      x: 4783,
      y: 365,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-95",
      layer: "mid",
      motif: "windmill",
      x: 4880,
      y: 406,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-96",
      layer: "near",
      motif: "grass",
      x: 49,
      y: 447,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-97",
      layer: "mid",
      motif: "gear",
      x: 146,
      y: 58,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-98",
      layer: "far",
      motif: "vine",
      x: 243,
      y: 99,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-99",
      layer: "mid",
      motif: "glassBerry",
      x: 340,
      y: 140,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-100",
      layer: "far",
      motif: "cloud",
      x: 437,
      y: 181,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-101",
      layer: "near",
      motif: "windmill",
      x: 534,
      y: 222,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-102",
      layer: "far",
      motif: "grass",
      x: 631,
      y: 263,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-103",
      layer: "mid",
      motif: "gear",
      x: 728,
      y: 304,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-104",
      layer: "far",
      motif: "vine",
      x: 825,
      y: 345,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-105",
      layer: "mid",
      motif: "glassBerry",
      x: 922,
      y: 386,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-106",
      layer: "near",
      motif: "cloud",
      x: 1019,
      y: 427,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-107",
      layer: "mid",
      motif: "windmill",
      x: 1116,
      y: 38,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-108",
      layer: "far",
      motif: "grass",
      x: 1213,
      y: 79,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-109",
      layer: "mid",
      motif: "gear",
      x: 1310,
      y: 120,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-110",
      layer: "far",
      motif: "vine",
      x: 1407,
      y: 161,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-111",
      layer: "near",
      motif: "glassBerry",
      x: 1504,
      y: 202,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-112",
      layer: "far",
      motif: "cloud",
      x: 1601,
      y: 243,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-113",
      layer: "mid",
      motif: "windmill",
      x: 1698,
      y: 284,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-114",
      layer: "far",
      motif: "grass",
      x: 1795,
      y: 325,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-115",
      layer: "mid",
      motif: "gear",
      x: 1892,
      y: 366,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-116",
      layer: "near",
      motif: "vine",
      x: 1989,
      y: 407,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-117",
      layer: "mid",
      motif: "glassBerry",
      x: 2086,
      y: 448,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-118",
      layer: "far",
      motif: "cloud",
      x: 2183,
      y: 59,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-119",
      layer: "mid",
      motif: "windmill",
      x: 2280,
      y: 100,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-120",
      layer: "far",
      motif: "grass",
      x: 2377,
      y: 141,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-121",
      layer: "near",
      motif: "gear",
      x: 2474,
      y: 182,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-122",
      layer: "far",
      motif: "vine",
      x: 2571,
      y: 223,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-123",
      layer: "mid",
      motif: "glassBerry",
      x: 2668,
      y: 264,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-124",
      layer: "far",
      motif: "cloud",
      x: 2765,
      y: 305,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-125",
      layer: "mid",
      motif: "windmill",
      x: 2862,
      y: 346,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-126",
      layer: "near",
      motif: "grass",
      x: 2959,
      y: 387,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-127",
      layer: "mid",
      motif: "gear",
      x: 3056,
      y: 428,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-128",
      layer: "far",
      motif: "vine",
      x: 3153,
      y: 39,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-129",
      layer: "mid",
      motif: "glassBerry",
      x: 3250,
      y: 80,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-130",
      layer: "far",
      motif: "cloud",
      x: 3347,
      y: 121,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-131",
      layer: "near",
      motif: "windmill",
      x: 3444,
      y: 162,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-132",
      layer: "far",
      motif: "grass",
      x: 3541,
      y: 203,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-133",
      layer: "mid",
      motif: "gear",
      x: 3638,
      y: 244,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-134",
      layer: "far",
      motif: "vine",
      x: 3735,
      y: 285,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-135",
      layer: "mid",
      motif: "glassBerry",
      x: 3832,
      y: 326,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-136",
      layer: "near",
      motif: "cloud",
      x: 3929,
      y: 367,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-137",
      layer: "mid",
      motif: "windmill",
      x: 4026,
      y: 408,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-138",
      layer: "far",
      motif: "grass",
      x: 4123,
      y: 449,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-139",
      layer: "mid",
      motif: "gear",
      x: 4220,
      y: 60,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-140",
      layer: "far",
      motif: "vine",
      x: 4317,
      y: 101,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-141",
      layer: "near",
      motif: "glassBerry",
      x: 4414,
      y: 142,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-142",
      layer: "far",
      motif: "cloud",
      x: 4511,
      y: 183,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-143",
      layer: "mid",
      motif: "windmill",
      x: 4608,
      y: 224,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-144",
      layer: "far",
      motif: "grass",
      x: 4705,
      y: 265,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-145",
      layer: "mid",
      motif: "gear",
      x: 4802,
      y: 306,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-146",
      layer: "near",
      motif: "vine",
      x: 4899,
      y: 347,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-147",
      layer: "mid",
      motif: "glassBerry",
      x: 68,
      y: 388,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-148",
      layer: "far",
      motif: "cloud",
      x: 165,
      y: 429,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-149",
      layer: "mid",
      motif: "windmill",
      x: 262,
      y: 40,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-150",
      layer: "far",
      motif: "grass",
      x: 359,
      y: 81,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-151",
      layer: "near",
      motif: "gear",
      x: 456,
      y: 122,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-152",
      layer: "far",
      motif: "vine",
      x: 553,
      y: 163,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-153",
      layer: "mid",
      motif: "glassBerry",
      x: 650,
      y: 204,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-154",
      layer: "far",
      motif: "cloud",
      x: 747,
      y: 245,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-155",
      layer: "mid",
      motif: "windmill",
      x: 844,
      y: 286,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-156",
      layer: "near",
      motif: "grass",
      x: 941,
      y: 327,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-157",
      layer: "mid",
      motif: "gear",
      x: 1038,
      y: 368,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-158",
      layer: "far",
      motif: "vine",
      x: 1135,
      y: 409,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-159",
      layer: "mid",
      motif: "glassBerry",
      x: 1232,
      y: 450,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-160",
      layer: "far",
      motif: "cloud",
      x: 1329,
      y: 61,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-161",
      layer: "near",
      motif: "windmill",
      x: 1426,
      y: 102,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-162",
      layer: "far",
      motif: "grass",
      x: 1523,
      y: 143,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-163",
      layer: "mid",
      motif: "gear",
      x: 1620,
      y: 184,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-164",
      layer: "far",
      motif: "vine",
      x: 1717,
      y: 225,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-165",
      layer: "mid",
      motif: "glassBerry",
      x: 1814,
      y: 266,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-166",
      layer: "near",
      motif: "cloud",
      x: 1911,
      y: 307,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-167",
      layer: "mid",
      motif: "windmill",
      x: 2008,
      y: 348,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-168",
      layer: "far",
      motif: "grass",
      x: 2105,
      y: 389,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-169",
      layer: "mid",
      motif: "gear",
      x: 2202,
      y: 430,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-170",
      layer: "far",
      motif: "vine",
      x: 2299,
      y: 41,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-31-171",
      layer: "near",
      motif: "glassBerry",
      x: 2396,
      y: 82,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-172",
      layer: "far",
      motif: "cloud",
      x: 2493,
      y: 123,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-31-173",
      layer: "mid",
      motif: "windmill",
      x: 2590,
      y: 164,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-31-174",
      layer: "far",
      motif: "grass",
      x: 2687,
      y: 205,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-31-175",
      layer: "mid",
      motif: "gear",
      x: 2784,
      y: 246,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-31-176",
      layer: "near",
      motif: "vine",
      x: 2881,
      y: 287,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-31-177",
      layer: "mid",
      motif: "glassBerry",
      x: 2978,
      y: 328,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-31-178",
      layer: "far",
      motif: "cloud",
      x: 3075,
      y: 369,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-31-179",
      layer: "mid",
      motif: "windmill",
      x: 3172,
      y: 410,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-31-180",
      layer: "far",
      motif: "grass",
      x: 3269,
      y: 451,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-31",
    x: 4736,
    y: 448,
    nextLevelId: "level-32"
  }
};
