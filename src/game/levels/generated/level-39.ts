import type { LevelDefinition } from "../schema";

export const LEVEL_39: LevelDefinition = {
  id: "level-39",
  index: 38,
  title: "The Warden's Crown 04",
  chapter: "The Warden's Crown",
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
    "...........................====..........................=====.........................======........................=======..............................",
    "......................###...........................####..........................#####.........................######........................####........",
    ".................#######.......................###...........................####..........................#####.........................######...........",
    "............======........................=======.......................===...........................====..........................=====.................",
    ".....................................######........................#######.......................###...........................####.......................",
    "................................#####......W..................######...........W............#######................W......###.............................",
    "..................................S...................................S...................................S...............................................",
    "...P.....................W...................................W...................................W...................................W..............G.....",
    "................S...................................S...................................S...................................S.............................",
    "^################^....###########....###########....###########....#^#########....###^#######....#####^#####....#######^###....#########^################^",
    "##################^.^.###########.^.^###########^.^.###########.^.^###########^.^.###########.^.^###########^.^.###########.^.^###########################"
  ],
  enemies: [
    {
      id: "enemy-39-1",
      kind: "lantern",
      x: 504,
      y: 448,
      patrolMin: 409,
      patrolMax: 624,
      speed: 68,
      phase: 38
    },
    {
      id: "enemy-39-2",
      kind: "charger",
      x: 834,
      y: 416,
      patrolMin: 721,
      patrolMax: 976,
      speed: 80,
      phase: 41
    },
    {
      id: "enemy-39-3",
      kind: "spiker",
      x: 1164,
      y: 384,
      patrolMin: 1033,
      patrolMax: 1328,
      speed: 92,
      phase: 44
    },
    {
      id: "enemy-39-4",
      kind: "turret",
      x: 1494,
      y: 352,
      patrolMin: 1345,
      patrolMax: 1680,
      speed: 104,
      phase: 47
    },
    {
      id: "enemy-39-5",
      kind: "beetle",
      x: 1824,
      y: 320,
      patrolMin: 1729,
      patrolMax: 2032,
      speed: 44,
      phase: 50
    },
    {
      id: "enemy-39-6",
      kind: "acorn",
      x: 2154,
      y: 448,
      patrolMin: 2041,
      patrolMax: 2274,
      speed: 56,
      phase: 53
    },
    {
      id: "enemy-39-7",
      kind: "lantern",
      x: 2484,
      y: 416,
      patrolMin: 2353,
      patrolMax: 2626,
      speed: 68,
      phase: 56
    },
    {
      id: "enemy-39-8",
      kind: "charger",
      x: 2814,
      y: 384,
      patrolMin: 2665,
      patrolMax: 2978,
      speed: 80,
      phase: 59
    },
    {
      id: "enemy-39-9",
      kind: "spiker",
      x: 3144,
      y: 352,
      patrolMin: 3049,
      patrolMax: 3330,
      speed: 92,
      phase: 62
    },
    {
      id: "enemy-39-10",
      kind: "turret",
      x: 3474,
      y: 320,
      patrolMin: 3361,
      patrolMax: 3682,
      speed: 104,
      phase: 65
    },
    {
      id: "enemy-39-11",
      kind: "beetle",
      x: 3804,
      y: 448,
      patrolMin: 3673,
      patrolMax: 3924,
      speed: 44,
      phase: 68
    },
    {
      id: "enemy-39-12",
      kind: "acorn",
      x: 4134,
      y: 416,
      patrolMin: 3985,
      patrolMax: 4276,
      speed: 56,
      phase: 71
    },
    {
      id: "enemy-39-13",
      kind: "lantern",
      x: 4464,
      y: 384,
      patrolMin: 4369,
      patrolMax: 4628,
      speed: 68,
      phase: 74
    },
    {
      id: "enemy-39-14",
      kind: "charger",
      x: 4794,
      y: 352,
      patrolMin: 4681,
      patrolMax: 4748,
      speed: 80,
      phase: 77
    },
    {
      id: "enemy-39-15",
      kind: "spiker",
      x: 5124,
      y: 320,
      patrolMin: 4993,
      patrolMax: 4748,
      speed: 92,
      phase: 80
    },
    {
      id: "enemy-39-16",
      kind: "turret",
      x: 5454,
      y: 448,
      patrolMin: 5305,
      patrolMax: 4748,
      speed: 104,
      phase: 83
    },
    {
      id: "enemy-39-17",
      kind: "beetle",
      x: 5784,
      y: 416,
      patrolMin: 5689,
      patrolMax: 4748,
      speed: 44,
      phase: 86
    },
    {
      id: "enemy-39-18",
      kind: "acorn",
      x: 6114,
      y: 384,
      patrolMin: 6001,
      patrolMax: 4748,
      speed: 56,
      phase: 89
    }
  ],
  collectibles: [
    {
      id: "collectible-39-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 204,
      y: 162
    },
    {
      id: "collectible-39-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 274,
      y: 182
    },
    {
      id: "collectible-39-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 344,
      y: 235
    },
    {
      id: "collectible-39-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 414,
      y: 288
    },
    {
      id: "collectible-39-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 484,
      y: 308
    },
    {
      id: "collectible-39-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 554,
      y: 361
    },
    {
      id: "collectible-39-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 624,
      y: 414
    },
    {
      id: "collectible-39-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 694,
      y: 140
    },
    {
      id: "collectible-39-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 764,
      y: 193
    },
    {
      id: "collectible-39-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 834,
      y: 246
    },
    {
      id: "collectible-39-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 904,
      y: 266
    },
    {
      id: "collectible-39-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 974,
      y: 319
    },
    {
      id: "collectible-39-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1044,
      y: 372
    },
    {
      id: "collectible-39-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1114,
      y: 392
    },
    {
      id: "collectible-39-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1184,
      y: 151
    },
    {
      id: "collectible-39-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1254,
      y: 204
    },
    {
      id: "collectible-39-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1324,
      y: 224
    },
    {
      id: "collectible-39-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1394,
      y: 277
    },
    {
      id: "collectible-39-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1464,
      y: 330
    },
    {
      id: "collectible-39-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1534,
      y: 350
    },
    {
      id: "collectible-39-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1604,
      y: 403
    },
    {
      id: "collectible-39-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1674,
      y: 162
    },
    {
      id: "collectible-39-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1744,
      y: 182
    },
    {
      id: "collectible-39-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1814,
      y: 235
    },
    {
      id: "collectible-39-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1884,
      y: 288
    },
    {
      id: "collectible-39-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1954,
      y: 308
    },
    {
      id: "collectible-39-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2024,
      y: 361
    },
    {
      id: "collectible-39-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2094,
      y: 414
    },
    {
      id: "collectible-39-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2164,
      y: 140
    },
    {
      id: "collectible-39-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2234,
      y: 193
    },
    {
      id: "collectible-39-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2304,
      y: 246
    },
    {
      id: "collectible-39-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2374,
      y: 266
    },
    {
      id: "collectible-39-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2444,
      y: 319
    },
    {
      id: "collectible-39-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2514,
      y: 372
    },
    {
      id: "collectible-39-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2584,
      y: 392
    },
    {
      id: "collectible-39-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2654,
      y: 151
    },
    {
      id: "collectible-39-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2724,
      y: 204
    },
    {
      id: "collectible-39-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2794,
      y: 224
    },
    {
      id: "collectible-39-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2864,
      y: 277
    },
    {
      id: "collectible-39-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2934,
      y: 330
    },
    {
      id: "collectible-39-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3004,
      y: 350
    },
    {
      id: "collectible-39-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3074,
      y: 403
    },
    {
      id: "collectible-39-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3144,
      y: 162
    },
    {
      id: "collectible-39-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3214,
      y: 182
    },
    {
      id: "collectible-39-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3284,
      y: 235
    },
    {
      id: "collectible-39-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3354,
      y: 288
    },
    {
      id: "collectible-39-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3424,
      y: 308
    },
    {
      id: "collectible-39-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3494,
      y: 361
    },
    {
      id: "collectible-39-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3564,
      y: 414
    },
    {
      id: "collectible-39-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3634,
      y: 140
    },
    {
      id: "collectible-39-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3704,
      y: 193
    },
    {
      id: "collectible-39-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3774,
      y: 246
    },
    {
      id: "collectible-39-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3844,
      y: 266
    },
    {
      id: "collectible-39-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3914,
      y: 319
    },
    {
      id: "collectible-39-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3984,
      y: 372
    },
    {
      id: "collectible-39-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4054,
      y: 392
    },
    {
      id: "collectible-39-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4124,
      y: 151
    },
    {
      id: "collectible-39-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4194,
      y: 204
    },
    {
      id: "collectible-39-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4264,
      y: 224
    },
    {
      id: "collectible-39-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4334,
      y: 277
    },
    {
      id: "collectible-39-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4404,
      y: 330
    },
    {
      id: "collectible-39-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4474,
      y: 350
    },
    {
      id: "collectible-39-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4544,
      y: 403
    },
    {
      id: "collectible-39-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4614,
      y: 162
    },
    {
      id: "collectible-39-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4684,
      y: 182
    },
    {
      id: "collectible-39-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4754,
      y: 235
    },
    {
      id: "collectible-39-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4824,
      y: 288
    },
    {
      id: "collectible-39-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4894,
      y: 308
    },
    {
      id: "collectible-39-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4964,
      y: 361
    },
    {
      id: "collectible-39-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5034,
      y: 414
    }
  ],
  powerups: [
    {
      id: "powerup-39-1",
      kind: "starburst",
      durationMs: 4800,
      x: 560,
      y: 130
    },
    {
      id: "powerup-39-2",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 1390,
      y: 182
    },
    {
      id: "powerup-39-3",
      kind: "shield",
      durationMs: 6600,
      x: 2220,
      y: 234
    },
    {
      id: "powerup-39-4",
      kind: "springBoots",
      durationMs: 7500,
      x: 3050,
      y: 286
    },
    {
      id: "powerup-39-5",
      kind: "starburst",
      durationMs: 4800,
      x: 3880,
      y: 338
    },
    {
      id: "powerup-39-6",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 4710,
      y: 130
    },
    {
      id: "powerup-39-7",
      kind: "shield",
      durationMs: 6600,
      x: 5540,
      y: 182
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-39-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 3.8000000000000003
    },
    {
      id: "moving-platform-39-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 4.5
    },
    {
      id: "moving-platform-39-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 5.2
    },
    {
      id: "moving-platform-39-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 5.9
    },
    {
      id: "moving-platform-39-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 6.6
    },
    {
      id: "moving-platform-39-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 7.300000000000001
    },
    {
      id: "moving-platform-39-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 8
    },
    {
      id: "moving-platform-39-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 8.7
    },
    {
      id: "moving-platform-39-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 9.4
    },
    {
      id: "moving-platform-39-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 10.1
    }
  ],
  hazards: [
    {
      id: "hazard-39-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 38
    },
    {
      id: "hazard-39-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 39
    },
    {
      id: "hazard-39-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 40
    },
    {
      id: "hazard-39-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 41
    },
    {
      id: "hazard-39-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 42
    },
    {
      id: "hazard-39-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 43
    },
    {
      id: "hazard-39-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 44
    },
    {
      id: "hazard-39-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 45
    },
    {
      id: "hazard-39-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 46
    },
    {
      id: "hazard-39-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 47
    },
    {
      id: "hazard-39-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 48
    },
    {
      id: "hazard-39-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 49
    },
    {
      id: "hazard-39-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 50
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-39-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-39-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-39-1",
      x: 708,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-39-2",
      x: 1478,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-39-3",
      x: 2248,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-39-4",
      x: 3018,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-39-5",
      x: 3788,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-39-6",
      x: 4558,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-39-7",
      x: 5328,
      y: 416,
      power: 1.1
    }
  ],
  windZones: [
    {
      id: "wind-39-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-39-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-39-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-39-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-39-5",
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
      id: "decor-39-1",
      layer: "near",
      motif: "glassBerry",
      x: 874,
      y: 96,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-2",
      layer: "far",
      motif: "cloud",
      x: 971,
      y: 137,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-3",
      layer: "mid",
      motif: "windmill",
      x: 1068,
      y: 178,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-4",
      layer: "far",
      motif: "grass",
      x: 1165,
      y: 219,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-5",
      layer: "mid",
      motif: "gear",
      x: 1262,
      y: 260,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-6",
      layer: "near",
      motif: "vine",
      x: 1359,
      y: 301,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-7",
      layer: "mid",
      motif: "glassBerry",
      x: 1456,
      y: 342,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-8",
      layer: "far",
      motif: "cloud",
      x: 1553,
      y: 383,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-9",
      layer: "mid",
      motif: "windmill",
      x: 1650,
      y: 424,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-10",
      layer: "far",
      motif: "grass",
      x: 1747,
      y: 35,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-11",
      layer: "near",
      motif: "gear",
      x: 1844,
      y: 76,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-12",
      layer: "far",
      motif: "vine",
      x: 1941,
      y: 117,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-13",
      layer: "mid",
      motif: "glassBerry",
      x: 2038,
      y: 158,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-14",
      layer: "far",
      motif: "cloud",
      x: 2135,
      y: 199,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-15",
      layer: "mid",
      motif: "windmill",
      x: 2232,
      y: 240,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-16",
      layer: "near",
      motif: "grass",
      x: 2329,
      y: 281,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-17",
      layer: "mid",
      motif: "gear",
      x: 2426,
      y: 322,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-18",
      layer: "far",
      motif: "vine",
      x: 2523,
      y: 363,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-19",
      layer: "mid",
      motif: "glassBerry",
      x: 2620,
      y: 404,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-20",
      layer: "far",
      motif: "cloud",
      x: 2717,
      y: 445,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-21",
      layer: "near",
      motif: "windmill",
      x: 2814,
      y: 56,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-22",
      layer: "far",
      motif: "grass",
      x: 2911,
      y: 97,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-23",
      layer: "mid",
      motif: "gear",
      x: 3008,
      y: 138,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-24",
      layer: "far",
      motif: "vine",
      x: 3105,
      y: 179,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-25",
      layer: "mid",
      motif: "glassBerry",
      x: 3202,
      y: 220,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-26",
      layer: "near",
      motif: "cloud",
      x: 3299,
      y: 261,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-27",
      layer: "mid",
      motif: "windmill",
      x: 3396,
      y: 302,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-28",
      layer: "far",
      motif: "grass",
      x: 3493,
      y: 343,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-29",
      layer: "mid",
      motif: "gear",
      x: 3590,
      y: 384,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-30",
      layer: "far",
      motif: "vine",
      x: 3687,
      y: 425,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-31",
      layer: "near",
      motif: "glassBerry",
      x: 3784,
      y: 36,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-32",
      layer: "far",
      motif: "cloud",
      x: 3881,
      y: 77,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-33",
      layer: "mid",
      motif: "windmill",
      x: 3978,
      y: 118,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-34",
      layer: "far",
      motif: "grass",
      x: 4075,
      y: 159,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-35",
      layer: "mid",
      motif: "gear",
      x: 4172,
      y: 200,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-36",
      layer: "near",
      motif: "vine",
      x: 4269,
      y: 241,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-37",
      layer: "mid",
      motif: "glassBerry",
      x: 4366,
      y: 282,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-38",
      layer: "far",
      motif: "cloud",
      x: 4463,
      y: 323,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-39",
      layer: "mid",
      motif: "windmill",
      x: 4560,
      y: 364,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-40",
      layer: "far",
      motif: "grass",
      x: 4657,
      y: 405,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-41",
      layer: "near",
      motif: "gear",
      x: 4754,
      y: 446,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-42",
      layer: "far",
      motif: "vine",
      x: 4851,
      y: 57,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-43",
      layer: "mid",
      motif: "glassBerry",
      x: 20,
      y: 98,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-44",
      layer: "far",
      motif: "cloud",
      x: 117,
      y: 139,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-45",
      layer: "mid",
      motif: "windmill",
      x: 214,
      y: 180,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-46",
      layer: "near",
      motif: "grass",
      x: 311,
      y: 221,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-47",
      layer: "mid",
      motif: "gear",
      x: 408,
      y: 262,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-48",
      layer: "far",
      motif: "vine",
      x: 505,
      y: 303,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-49",
      layer: "mid",
      motif: "glassBerry",
      x: 602,
      y: 344,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-50",
      layer: "far",
      motif: "cloud",
      x: 699,
      y: 385,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-51",
      layer: "near",
      motif: "windmill",
      x: 796,
      y: 426,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-52",
      layer: "far",
      motif: "grass",
      x: 893,
      y: 37,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-53",
      layer: "mid",
      motif: "gear",
      x: 990,
      y: 78,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-54",
      layer: "far",
      motif: "vine",
      x: 1087,
      y: 119,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-55",
      layer: "mid",
      motif: "glassBerry",
      x: 1184,
      y: 160,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-56",
      layer: "near",
      motif: "cloud",
      x: 1281,
      y: 201,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-57",
      layer: "mid",
      motif: "windmill",
      x: 1378,
      y: 242,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-58",
      layer: "far",
      motif: "grass",
      x: 1475,
      y: 283,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-59",
      layer: "mid",
      motif: "gear",
      x: 1572,
      y: 324,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-60",
      layer: "far",
      motif: "vine",
      x: 1669,
      y: 365,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-61",
      layer: "near",
      motif: "glassBerry",
      x: 1766,
      y: 406,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-62",
      layer: "far",
      motif: "cloud",
      x: 1863,
      y: 447,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-63",
      layer: "mid",
      motif: "windmill",
      x: 1960,
      y: 58,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-64",
      layer: "far",
      motif: "grass",
      x: 2057,
      y: 99,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-65",
      layer: "mid",
      motif: "gear",
      x: 2154,
      y: 140,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-66",
      layer: "near",
      motif: "vine",
      x: 2251,
      y: 181,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-67",
      layer: "mid",
      motif: "glassBerry",
      x: 2348,
      y: 222,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-68",
      layer: "far",
      motif: "cloud",
      x: 2445,
      y: 263,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-69",
      layer: "mid",
      motif: "windmill",
      x: 2542,
      y: 304,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-70",
      layer: "far",
      motif: "grass",
      x: 2639,
      y: 345,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-71",
      layer: "near",
      motif: "gear",
      x: 2736,
      y: 386,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-72",
      layer: "far",
      motif: "vine",
      x: 2833,
      y: 427,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-73",
      layer: "mid",
      motif: "glassBerry",
      x: 2930,
      y: 38,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-74",
      layer: "far",
      motif: "cloud",
      x: 3027,
      y: 79,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-75",
      layer: "mid",
      motif: "windmill",
      x: 3124,
      y: 120,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-76",
      layer: "near",
      motif: "grass",
      x: 3221,
      y: 161,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-77",
      layer: "mid",
      motif: "gear",
      x: 3318,
      y: 202,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-78",
      layer: "far",
      motif: "vine",
      x: 3415,
      y: 243,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-79",
      layer: "mid",
      motif: "glassBerry",
      x: 3512,
      y: 284,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-80",
      layer: "far",
      motif: "cloud",
      x: 3609,
      y: 325,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-81",
      layer: "near",
      motif: "windmill",
      x: 3706,
      y: 366,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-82",
      layer: "far",
      motif: "grass",
      x: 3803,
      y: 407,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-83",
      layer: "mid",
      motif: "gear",
      x: 3900,
      y: 448,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-84",
      layer: "far",
      motif: "vine",
      x: 3997,
      y: 59,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-85",
      layer: "mid",
      motif: "glassBerry",
      x: 4094,
      y: 100,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-86",
      layer: "near",
      motif: "cloud",
      x: 4191,
      y: 141,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-87",
      layer: "mid",
      motif: "windmill",
      x: 4288,
      y: 182,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-88",
      layer: "far",
      motif: "grass",
      x: 4385,
      y: 223,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-89",
      layer: "mid",
      motif: "gear",
      x: 4482,
      y: 264,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-90",
      layer: "far",
      motif: "vine",
      x: 4579,
      y: 305,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-91",
      layer: "near",
      motif: "glassBerry",
      x: 4676,
      y: 346,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-92",
      layer: "far",
      motif: "cloud",
      x: 4773,
      y: 387,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-93",
      layer: "mid",
      motif: "windmill",
      x: 4870,
      y: 428,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-94",
      layer: "far",
      motif: "grass",
      x: 39,
      y: 39,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-95",
      layer: "mid",
      motif: "gear",
      x: 136,
      y: 80,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-96",
      layer: "near",
      motif: "vine",
      x: 233,
      y: 121,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-97",
      layer: "mid",
      motif: "glassBerry",
      x: 330,
      y: 162,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-98",
      layer: "far",
      motif: "cloud",
      x: 427,
      y: 203,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-99",
      layer: "mid",
      motif: "windmill",
      x: 524,
      y: 244,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-100",
      layer: "far",
      motif: "grass",
      x: 621,
      y: 285,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-101",
      layer: "near",
      motif: "gear",
      x: 718,
      y: 326,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-102",
      layer: "far",
      motif: "vine",
      x: 815,
      y: 367,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-103",
      layer: "mid",
      motif: "glassBerry",
      x: 912,
      y: 408,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-104",
      layer: "far",
      motif: "cloud",
      x: 1009,
      y: 449,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-105",
      layer: "mid",
      motif: "windmill",
      x: 1106,
      y: 60,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-106",
      layer: "near",
      motif: "grass",
      x: 1203,
      y: 101,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-107",
      layer: "mid",
      motif: "gear",
      x: 1300,
      y: 142,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-108",
      layer: "far",
      motif: "vine",
      x: 1397,
      y: 183,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-109",
      layer: "mid",
      motif: "glassBerry",
      x: 1494,
      y: 224,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-110",
      layer: "far",
      motif: "cloud",
      x: 1591,
      y: 265,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-111",
      layer: "near",
      motif: "windmill",
      x: 1688,
      y: 306,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-112",
      layer: "far",
      motif: "grass",
      x: 1785,
      y: 347,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-113",
      layer: "mid",
      motif: "gear",
      x: 1882,
      y: 388,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-114",
      layer: "far",
      motif: "vine",
      x: 1979,
      y: 429,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-115",
      layer: "mid",
      motif: "glassBerry",
      x: 2076,
      y: 40,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-116",
      layer: "near",
      motif: "cloud",
      x: 2173,
      y: 81,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-117",
      layer: "mid",
      motif: "windmill",
      x: 2270,
      y: 122,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-118",
      layer: "far",
      motif: "grass",
      x: 2367,
      y: 163,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-119",
      layer: "mid",
      motif: "gear",
      x: 2464,
      y: 204,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-120",
      layer: "far",
      motif: "vine",
      x: 2561,
      y: 245,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-121",
      layer: "near",
      motif: "glassBerry",
      x: 2658,
      y: 286,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-122",
      layer: "far",
      motif: "cloud",
      x: 2755,
      y: 327,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-123",
      layer: "mid",
      motif: "windmill",
      x: 2852,
      y: 368,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-124",
      layer: "far",
      motif: "grass",
      x: 2949,
      y: 409,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-125",
      layer: "mid",
      motif: "gear",
      x: 3046,
      y: 450,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-126",
      layer: "near",
      motif: "vine",
      x: 3143,
      y: 61,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-127",
      layer: "mid",
      motif: "glassBerry",
      x: 3240,
      y: 102,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-128",
      layer: "far",
      motif: "cloud",
      x: 3337,
      y: 143,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-129",
      layer: "mid",
      motif: "windmill",
      x: 3434,
      y: 184,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-130",
      layer: "far",
      motif: "grass",
      x: 3531,
      y: 225,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-131",
      layer: "near",
      motif: "gear",
      x: 3628,
      y: 266,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-132",
      layer: "far",
      motif: "vine",
      x: 3725,
      y: 307,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-133",
      layer: "mid",
      motif: "glassBerry",
      x: 3822,
      y: 348,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-134",
      layer: "far",
      motif: "cloud",
      x: 3919,
      y: 389,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-135",
      layer: "mid",
      motif: "windmill",
      x: 4016,
      y: 430,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-136",
      layer: "near",
      motif: "grass",
      x: 4113,
      y: 41,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-137",
      layer: "mid",
      motif: "gear",
      x: 4210,
      y: 82,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-138",
      layer: "far",
      motif: "vine",
      x: 4307,
      y: 123,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-139",
      layer: "mid",
      motif: "glassBerry",
      x: 4404,
      y: 164,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-140",
      layer: "far",
      motif: "cloud",
      x: 4501,
      y: 205,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-141",
      layer: "near",
      motif: "windmill",
      x: 4598,
      y: 246,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-142",
      layer: "far",
      motif: "grass",
      x: 4695,
      y: 287,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-143",
      layer: "mid",
      motif: "gear",
      x: 4792,
      y: 328,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-144",
      layer: "far",
      motif: "vine",
      x: 4889,
      y: 369,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-145",
      layer: "mid",
      motif: "glassBerry",
      x: 58,
      y: 410,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-146",
      layer: "near",
      motif: "cloud",
      x: 155,
      y: 451,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-147",
      layer: "mid",
      motif: "windmill",
      x: 252,
      y: 62,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-148",
      layer: "far",
      motif: "grass",
      x: 349,
      y: 103,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-149",
      layer: "mid",
      motif: "gear",
      x: 446,
      y: 144,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-150",
      layer: "far",
      motif: "vine",
      x: 543,
      y: 185,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-151",
      layer: "near",
      motif: "glassBerry",
      x: 640,
      y: 226,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-152",
      layer: "far",
      motif: "cloud",
      x: 737,
      y: 267,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-153",
      layer: "mid",
      motif: "windmill",
      x: 834,
      y: 308,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-154",
      layer: "far",
      motif: "grass",
      x: 931,
      y: 349,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-155",
      layer: "mid",
      motif: "gear",
      x: 1028,
      y: 390,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-156",
      layer: "near",
      motif: "vine",
      x: 1125,
      y: 431,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-157",
      layer: "mid",
      motif: "glassBerry",
      x: 1222,
      y: 42,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-158",
      layer: "far",
      motif: "cloud",
      x: 1319,
      y: 83,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-159",
      layer: "mid",
      motif: "windmill",
      x: 1416,
      y: 124,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-160",
      layer: "far",
      motif: "grass",
      x: 1513,
      y: 165,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-161",
      layer: "near",
      motif: "gear",
      x: 1610,
      y: 206,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-162",
      layer: "far",
      motif: "vine",
      x: 1707,
      y: 247,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-163",
      layer: "mid",
      motif: "glassBerry",
      x: 1804,
      y: 288,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-164",
      layer: "far",
      motif: "cloud",
      x: 1901,
      y: 329,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-165",
      layer: "mid",
      motif: "windmill",
      x: 1998,
      y: 370,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-166",
      layer: "near",
      motif: "grass",
      x: 2095,
      y: 411,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-167",
      layer: "mid",
      motif: "gear",
      x: 2192,
      y: 452,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-168",
      layer: "far",
      motif: "vine",
      x: 2289,
      y: 63,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-169",
      layer: "mid",
      motif: "glassBerry",
      x: 2386,
      y: 104,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-170",
      layer: "far",
      motif: "cloud",
      x: 2483,
      y: 145,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-39-171",
      layer: "near",
      motif: "windmill",
      x: 2580,
      y: 186,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-172",
      layer: "far",
      motif: "grass",
      x: 2677,
      y: 227,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-39-173",
      layer: "mid",
      motif: "gear",
      x: 2774,
      y: 268,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-39-174",
      layer: "far",
      motif: "vine",
      x: 2871,
      y: 309,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-39-175",
      layer: "mid",
      motif: "glassBerry",
      x: 2968,
      y: 350,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-39-176",
      layer: "near",
      motif: "cloud",
      x: 3065,
      y: 391,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-39-177",
      layer: "mid",
      motif: "windmill",
      x: 3162,
      y: 432,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-39-178",
      layer: "far",
      motif: "grass",
      x: 3259,
      y: 43,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-39-179",
      layer: "mid",
      motif: "gear",
      x: 3356,
      y: 84,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-39-180",
      layer: "far",
      motif: "vine",
      x: 3453,
      y: 125,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-39",
    x: 4736,
    y: 448,
    nextLevelId: "level-40"
  }
};
