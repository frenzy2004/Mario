import type { LevelDefinition } from "../schema";

export const LEVEL_23: LevelDefinition = {
  id: "level-23",
  index: 22,
  title: "Moonlit Gearway 02",
  chapter: "Moonlit Gearway",
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
    ".................######........................#######.......................###...........................####..........................#####............",
    "............=====.........................======........................=======.......................===...........................====..................",
    ".....................................#####.........................######........................#######.......................###........................",
    "................................####..........................#####.........................######........................#######.........................",
    "...........................===...........................====..........................=====.........................======...............................",
    "......................#######................W......###..........................W####..........................#####W........................####........",
    "....................................S...................................S...................................S.............................................",
    "...P.......................W...................................W...................................W...................................W............G.....",
    "..................S...................................S...................................S...................................S...........................",
    "^################^...#############....############..##############...#############....############..##^###########...##^##########....##^################^",
    "##################^.^#############^.^.############^.##############^.^#############^.^.############^.##############^.^#############^.^.####################"
  ],
  enemies: [
    {
      id: "enemy-23-1",
      kind: "spiker",
      x: 476,
      y: 448,
      patrolMin: 381,
      patrolMax: 596,
      speed: 92,
      phase: 22
    },
    {
      id: "enemy-23-2",
      kind: "turret",
      x: 806,
      y: 416,
      patrolMin: 693,
      patrolMax: 948,
      speed: 104,
      phase: 25
    },
    {
      id: "enemy-23-3",
      kind: "beetle",
      x: 1136,
      y: 384,
      patrolMin: 1005,
      patrolMax: 1300,
      speed: 44,
      phase: 28
    },
    {
      id: "enemy-23-4",
      kind: "acorn",
      x: 1466,
      y: 352,
      patrolMin: 1317,
      patrolMax: 1652,
      speed: 56,
      phase: 31
    },
    {
      id: "enemy-23-5",
      kind: "lantern",
      x: 1796,
      y: 320,
      patrolMin: 1701,
      patrolMax: 2004,
      speed: 68,
      phase: 34
    },
    {
      id: "enemy-23-6",
      kind: "charger",
      x: 2126,
      y: 448,
      patrolMin: 2013,
      patrolMax: 2246,
      speed: 80,
      phase: 37
    },
    {
      id: "enemy-23-7",
      kind: "spiker",
      x: 2456,
      y: 416,
      patrolMin: 2325,
      patrolMax: 2598,
      speed: 92,
      phase: 40
    },
    {
      id: "enemy-23-8",
      kind: "turret",
      x: 2786,
      y: 384,
      patrolMin: 2637,
      patrolMax: 2950,
      speed: 104,
      phase: 43
    },
    {
      id: "enemy-23-9",
      kind: "beetle",
      x: 3116,
      y: 352,
      patrolMin: 3021,
      patrolMax: 3302,
      speed: 44,
      phase: 46
    },
    {
      id: "enemy-23-10",
      kind: "acorn",
      x: 3446,
      y: 320,
      patrolMin: 3333,
      patrolMax: 3654,
      speed: 56,
      phase: 49
    },
    {
      id: "enemy-23-11",
      kind: "lantern",
      x: 3776,
      y: 448,
      patrolMin: 3645,
      patrolMax: 3896,
      speed: 68,
      phase: 52
    },
    {
      id: "enemy-23-12",
      kind: "charger",
      x: 4106,
      y: 416,
      patrolMin: 3957,
      patrolMax: 4248,
      speed: 80,
      phase: 55
    },
    {
      id: "enemy-23-13",
      kind: "spiker",
      x: 4436,
      y: 384,
      patrolMin: 4341,
      patrolMax: 4600,
      speed: 92,
      phase: 58
    },
    {
      id: "enemy-23-14",
      kind: "turret",
      x: 4766,
      y: 352,
      patrolMin: 4653,
      patrolMax: 4748,
      speed: 104,
      phase: 61
    },
    {
      id: "enemy-23-15",
      kind: "beetle",
      x: 5096,
      y: 320,
      patrolMin: 4965,
      patrolMax: 4748,
      speed: 44,
      phase: 64
    },
    {
      id: "enemy-23-16",
      kind: "acorn",
      x: 5426,
      y: 448,
      patrolMin: 5277,
      patrolMax: 4748,
      speed: 56,
      phase: 67
    },
    {
      id: "enemy-23-17",
      kind: "lantern",
      x: 5756,
      y: 416,
      patrolMin: 5661,
      patrolMax: 4748,
      speed: 68,
      phase: 70
    },
    {
      id: "enemy-23-18",
      kind: "charger",
      x: 6086,
      y: 384,
      patrolMin: 5973,
      patrolMax: 4748,
      speed: 80,
      phase: 73
    }
  ],
  collectibles: [
    {
      id: "collectible-23-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 204,
      y: 151
    },
    {
      id: "collectible-23-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 274,
      y: 204
    },
    {
      id: "collectible-23-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 344,
      y: 224
    },
    {
      id: "collectible-23-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 414,
      y: 277
    },
    {
      id: "collectible-23-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 484,
      y: 330
    },
    {
      id: "collectible-23-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 554,
      y: 350
    },
    {
      id: "collectible-23-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 624,
      y: 403
    },
    {
      id: "collectible-23-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 694,
      y: 162
    },
    {
      id: "collectible-23-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 764,
      y: 182
    },
    {
      id: "collectible-23-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 834,
      y: 235
    },
    {
      id: "collectible-23-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 904,
      y: 288
    },
    {
      id: "collectible-23-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 974,
      y: 308
    },
    {
      id: "collectible-23-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1044,
      y: 361
    },
    {
      id: "collectible-23-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1114,
      y: 414
    },
    {
      id: "collectible-23-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1184,
      y: 140
    },
    {
      id: "collectible-23-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1254,
      y: 193
    },
    {
      id: "collectible-23-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1324,
      y: 246
    },
    {
      id: "collectible-23-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1394,
      y: 266
    },
    {
      id: "collectible-23-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1464,
      y: 319
    },
    {
      id: "collectible-23-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1534,
      y: 372
    },
    {
      id: "collectible-23-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1604,
      y: 392
    },
    {
      id: "collectible-23-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1674,
      y: 151
    },
    {
      id: "collectible-23-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1744,
      y: 204
    },
    {
      id: "collectible-23-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1814,
      y: 224
    },
    {
      id: "collectible-23-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1884,
      y: 277
    },
    {
      id: "collectible-23-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1954,
      y: 330
    },
    {
      id: "collectible-23-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2024,
      y: 350
    },
    {
      id: "collectible-23-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2094,
      y: 403
    },
    {
      id: "collectible-23-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2164,
      y: 162
    },
    {
      id: "collectible-23-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2234,
      y: 182
    },
    {
      id: "collectible-23-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2304,
      y: 235
    },
    {
      id: "collectible-23-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2374,
      y: 288
    },
    {
      id: "collectible-23-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2444,
      y: 308
    },
    {
      id: "collectible-23-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2514,
      y: 361
    },
    {
      id: "collectible-23-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2584,
      y: 414
    },
    {
      id: "collectible-23-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2654,
      y: 140
    },
    {
      id: "collectible-23-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2724,
      y: 193
    },
    {
      id: "collectible-23-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2794,
      y: 246
    },
    {
      id: "collectible-23-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2864,
      y: 266
    },
    {
      id: "collectible-23-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2934,
      y: 319
    },
    {
      id: "collectible-23-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3004,
      y: 372
    },
    {
      id: "collectible-23-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3074,
      y: 392
    },
    {
      id: "collectible-23-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3144,
      y: 151
    },
    {
      id: "collectible-23-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3214,
      y: 204
    },
    {
      id: "collectible-23-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3284,
      y: 224
    },
    {
      id: "collectible-23-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3354,
      y: 277
    },
    {
      id: "collectible-23-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3424,
      y: 330
    },
    {
      id: "collectible-23-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3494,
      y: 350
    },
    {
      id: "collectible-23-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3564,
      y: 403
    },
    {
      id: "collectible-23-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3634,
      y: 162
    },
    {
      id: "collectible-23-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3704,
      y: 182
    },
    {
      id: "collectible-23-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3774,
      y: 235
    },
    {
      id: "collectible-23-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3844,
      y: 288
    },
    {
      id: "collectible-23-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3914,
      y: 308
    },
    {
      id: "collectible-23-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3984,
      y: 361
    },
    {
      id: "collectible-23-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4054,
      y: 414
    },
    {
      id: "collectible-23-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4124,
      y: 140
    },
    {
      id: "collectible-23-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4194,
      y: 193
    },
    {
      id: "collectible-23-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4264,
      y: 246
    },
    {
      id: "collectible-23-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4334,
      y: 266
    },
    {
      id: "collectible-23-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4404,
      y: 319
    },
    {
      id: "collectible-23-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4474,
      y: 372
    },
    {
      id: "collectible-23-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4544,
      y: 392
    },
    {
      id: "collectible-23-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4614,
      y: 151
    },
    {
      id: "collectible-23-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4684,
      y: 204
    },
    {
      id: "collectible-23-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4754,
      y: 224
    },
    {
      id: "collectible-23-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4824,
      y: 277
    },
    {
      id: "collectible-23-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4894,
      y: 330
    },
    {
      id: "collectible-23-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4964,
      y: 350
    },
    {
      id: "collectible-23-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5034,
      y: 403
    },
    {
      id: "collectible-23-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5104,
      y: 162
    },
    {
      id: "collectible-23-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5174,
      y: 182
    },
    {
      id: "collectible-23-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5244,
      y: 235
    },
    {
      id: "collectible-23-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5314,
      y: 288
    },
    {
      id: "collectible-23-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5384,
      y: 308
    },
    {
      id: "collectible-23-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5454,
      y: 361
    },
    {
      id: "collectible-23-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5524,
      y: 414
    },
    {
      id: "collectible-23-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5594,
      y: 140
    }
  ],
  powerups: [
    {
      id: "powerup-23-1",
      kind: "starburst",
      durationMs: 4800,
      x: 620,
      y: 130
    },
    {
      id: "powerup-23-2",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 1450,
      y: 182
    },
    {
      id: "powerup-23-3",
      kind: "shield",
      durationMs: 6600,
      x: 2280,
      y: 234
    },
    {
      id: "powerup-23-4",
      kind: "springBoots",
      durationMs: 7500,
      x: 3110,
      y: 286
    },
    {
      id: "powerup-23-5",
      kind: "starburst",
      durationMs: 4800,
      x: 3940,
      y: 338
    },
    {
      id: "powerup-23-6",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 4770,
      y: 130
    },
    {
      id: "powerup-23-7",
      kind: "shield",
      durationMs: 6600,
      x: 5600,
      y: 182
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-23-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 2.2
    },
    {
      id: "moving-platform-23-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 2.9000000000000004
    },
    {
      id: "moving-platform-23-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 3.6
    },
    {
      id: "moving-platform-23-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 4.3
    },
    {
      id: "moving-platform-23-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 5
    },
    {
      id: "moving-platform-23-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 5.7
    },
    {
      id: "moving-platform-23-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 6.3999999999999995
    },
    {
      id: "moving-platform-23-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 7.1
    },
    {
      id: "moving-platform-23-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 7.8
    }
  ],
  hazards: [
    {
      id: "hazard-23-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 22
    },
    {
      id: "hazard-23-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 23
    },
    {
      id: "hazard-23-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 24
    },
    {
      id: "hazard-23-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 25
    },
    {
      id: "hazard-23-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 26
    },
    {
      id: "hazard-23-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 27
    },
    {
      id: "hazard-23-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 28
    },
    {
      id: "hazard-23-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 29
    },
    {
      id: "hazard-23-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 30
    },
    {
      id: "hazard-23-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 31
    },
    {
      id: "hazard-23-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 32
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-23-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-23-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-23-1",
      x: 674,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-23-2",
      x: 1444,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-23-3",
      x: 2214,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-23-4",
      x: 2984,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-23-5",
      x: 3754,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-23-6",
      x: 4524,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-23-7",
      x: 5294,
      y: 416,
      power: 1.1
    }
  ],
  windZones: [
    {
      id: "wind-23-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-23-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-23-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-23-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-23-5",
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
      id: "decor-23-1",
      layer: "near",
      motif: "windmill",
      x: 506,
      y: 318,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-2",
      layer: "far",
      motif: "grass",
      x: 603,
      y: 359,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-3",
      layer: "mid",
      motif: "gear",
      x: 700,
      y: 400,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-4",
      layer: "far",
      motif: "vine",
      x: 797,
      y: 441,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-5",
      layer: "mid",
      motif: "glassBerry",
      x: 894,
      y: 52,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-6",
      layer: "near",
      motif: "cloud",
      x: 991,
      y: 93,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-7",
      layer: "mid",
      motif: "windmill",
      x: 1088,
      y: 134,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-8",
      layer: "far",
      motif: "grass",
      x: 1185,
      y: 175,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-9",
      layer: "mid",
      motif: "gear",
      x: 1282,
      y: 216,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-10",
      layer: "far",
      motif: "vine",
      x: 1379,
      y: 257,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-11",
      layer: "near",
      motif: "glassBerry",
      x: 1476,
      y: 298,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-12",
      layer: "far",
      motif: "cloud",
      x: 1573,
      y: 339,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-13",
      layer: "mid",
      motif: "windmill",
      x: 1670,
      y: 380,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-14",
      layer: "far",
      motif: "grass",
      x: 1767,
      y: 421,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-15",
      layer: "mid",
      motif: "gear",
      x: 1864,
      y: 32,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-16",
      layer: "near",
      motif: "vine",
      x: 1961,
      y: 73,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-17",
      layer: "mid",
      motif: "glassBerry",
      x: 2058,
      y: 114,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-18",
      layer: "far",
      motif: "cloud",
      x: 2155,
      y: 155,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-19",
      layer: "mid",
      motif: "windmill",
      x: 2252,
      y: 196,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-20",
      layer: "far",
      motif: "grass",
      x: 2349,
      y: 237,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-21",
      layer: "near",
      motif: "gear",
      x: 2446,
      y: 278,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-22",
      layer: "far",
      motif: "vine",
      x: 2543,
      y: 319,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-23",
      layer: "mid",
      motif: "glassBerry",
      x: 2640,
      y: 360,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-24",
      layer: "far",
      motif: "cloud",
      x: 2737,
      y: 401,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-25",
      layer: "mid",
      motif: "windmill",
      x: 2834,
      y: 442,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-26",
      layer: "near",
      motif: "grass",
      x: 2931,
      y: 53,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-27",
      layer: "mid",
      motif: "gear",
      x: 3028,
      y: 94,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-28",
      layer: "far",
      motif: "vine",
      x: 3125,
      y: 135,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-29",
      layer: "mid",
      motif: "glassBerry",
      x: 3222,
      y: 176,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-30",
      layer: "far",
      motif: "cloud",
      x: 3319,
      y: 217,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-31",
      layer: "near",
      motif: "windmill",
      x: 3416,
      y: 258,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-32",
      layer: "far",
      motif: "grass",
      x: 3513,
      y: 299,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-33",
      layer: "mid",
      motif: "gear",
      x: 3610,
      y: 340,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-34",
      layer: "far",
      motif: "vine",
      x: 3707,
      y: 381,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-35",
      layer: "mid",
      motif: "glassBerry",
      x: 3804,
      y: 422,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-36",
      layer: "near",
      motif: "cloud",
      x: 3901,
      y: 33,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-37",
      layer: "mid",
      motif: "windmill",
      x: 3998,
      y: 74,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-38",
      layer: "far",
      motif: "grass",
      x: 4095,
      y: 115,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-39",
      layer: "mid",
      motif: "gear",
      x: 4192,
      y: 156,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-40",
      layer: "far",
      motif: "vine",
      x: 4289,
      y: 197,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-41",
      layer: "near",
      motif: "glassBerry",
      x: 4386,
      y: 238,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-42",
      layer: "far",
      motif: "cloud",
      x: 4483,
      y: 279,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-43",
      layer: "mid",
      motif: "windmill",
      x: 4580,
      y: 320,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-44",
      layer: "far",
      motif: "grass",
      x: 4677,
      y: 361,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-45",
      layer: "mid",
      motif: "gear",
      x: 4774,
      y: 402,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-46",
      layer: "near",
      motif: "vine",
      x: 4871,
      y: 443,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-47",
      layer: "mid",
      motif: "glassBerry",
      x: 40,
      y: 54,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-48",
      layer: "far",
      motif: "cloud",
      x: 137,
      y: 95,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-49",
      layer: "mid",
      motif: "windmill",
      x: 234,
      y: 136,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-50",
      layer: "far",
      motif: "grass",
      x: 331,
      y: 177,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-51",
      layer: "near",
      motif: "gear",
      x: 428,
      y: 218,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-52",
      layer: "far",
      motif: "vine",
      x: 525,
      y: 259,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-53",
      layer: "mid",
      motif: "glassBerry",
      x: 622,
      y: 300,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-54",
      layer: "far",
      motif: "cloud",
      x: 719,
      y: 341,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-55",
      layer: "mid",
      motif: "windmill",
      x: 816,
      y: 382,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-56",
      layer: "near",
      motif: "grass",
      x: 913,
      y: 423,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-57",
      layer: "mid",
      motif: "gear",
      x: 1010,
      y: 34,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-58",
      layer: "far",
      motif: "vine",
      x: 1107,
      y: 75,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-59",
      layer: "mid",
      motif: "glassBerry",
      x: 1204,
      y: 116,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-60",
      layer: "far",
      motif: "cloud",
      x: 1301,
      y: 157,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-61",
      layer: "near",
      motif: "windmill",
      x: 1398,
      y: 198,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-62",
      layer: "far",
      motif: "grass",
      x: 1495,
      y: 239,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-63",
      layer: "mid",
      motif: "gear",
      x: 1592,
      y: 280,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-64",
      layer: "far",
      motif: "vine",
      x: 1689,
      y: 321,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-65",
      layer: "mid",
      motif: "glassBerry",
      x: 1786,
      y: 362,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-66",
      layer: "near",
      motif: "cloud",
      x: 1883,
      y: 403,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-67",
      layer: "mid",
      motif: "windmill",
      x: 1980,
      y: 444,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-68",
      layer: "far",
      motif: "grass",
      x: 2077,
      y: 55,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-69",
      layer: "mid",
      motif: "gear",
      x: 2174,
      y: 96,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-70",
      layer: "far",
      motif: "vine",
      x: 2271,
      y: 137,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-71",
      layer: "near",
      motif: "glassBerry",
      x: 2368,
      y: 178,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-72",
      layer: "far",
      motif: "cloud",
      x: 2465,
      y: 219,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-73",
      layer: "mid",
      motif: "windmill",
      x: 2562,
      y: 260,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-74",
      layer: "far",
      motif: "grass",
      x: 2659,
      y: 301,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-75",
      layer: "mid",
      motif: "gear",
      x: 2756,
      y: 342,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-76",
      layer: "near",
      motif: "vine",
      x: 2853,
      y: 383,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-77",
      layer: "mid",
      motif: "glassBerry",
      x: 2950,
      y: 424,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-78",
      layer: "far",
      motif: "cloud",
      x: 3047,
      y: 35,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-79",
      layer: "mid",
      motif: "windmill",
      x: 3144,
      y: 76,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-80",
      layer: "far",
      motif: "grass",
      x: 3241,
      y: 117,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-81",
      layer: "near",
      motif: "gear",
      x: 3338,
      y: 158,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-82",
      layer: "far",
      motif: "vine",
      x: 3435,
      y: 199,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-83",
      layer: "mid",
      motif: "glassBerry",
      x: 3532,
      y: 240,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-84",
      layer: "far",
      motif: "cloud",
      x: 3629,
      y: 281,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-85",
      layer: "mid",
      motif: "windmill",
      x: 3726,
      y: 322,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-86",
      layer: "near",
      motif: "grass",
      x: 3823,
      y: 363,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-87",
      layer: "mid",
      motif: "gear",
      x: 3920,
      y: 404,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-88",
      layer: "far",
      motif: "vine",
      x: 4017,
      y: 445,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-89",
      layer: "mid",
      motif: "glassBerry",
      x: 4114,
      y: 56,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-90",
      layer: "far",
      motif: "cloud",
      x: 4211,
      y: 97,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-91",
      layer: "near",
      motif: "windmill",
      x: 4308,
      y: 138,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-92",
      layer: "far",
      motif: "grass",
      x: 4405,
      y: 179,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-93",
      layer: "mid",
      motif: "gear",
      x: 4502,
      y: 220,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-94",
      layer: "far",
      motif: "vine",
      x: 4599,
      y: 261,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-95",
      layer: "mid",
      motif: "glassBerry",
      x: 4696,
      y: 302,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-96",
      layer: "near",
      motif: "cloud",
      x: 4793,
      y: 343,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-97",
      layer: "mid",
      motif: "windmill",
      x: 4890,
      y: 384,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-98",
      layer: "far",
      motif: "grass",
      x: 59,
      y: 425,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-99",
      layer: "mid",
      motif: "gear",
      x: 156,
      y: 36,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-100",
      layer: "far",
      motif: "vine",
      x: 253,
      y: 77,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-101",
      layer: "near",
      motif: "glassBerry",
      x: 350,
      y: 118,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-102",
      layer: "far",
      motif: "cloud",
      x: 447,
      y: 159,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-103",
      layer: "mid",
      motif: "windmill",
      x: 544,
      y: 200,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-104",
      layer: "far",
      motif: "grass",
      x: 641,
      y: 241,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-105",
      layer: "mid",
      motif: "gear",
      x: 738,
      y: 282,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-106",
      layer: "near",
      motif: "vine",
      x: 835,
      y: 323,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-107",
      layer: "mid",
      motif: "glassBerry",
      x: 932,
      y: 364,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-108",
      layer: "far",
      motif: "cloud",
      x: 1029,
      y: 405,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-109",
      layer: "mid",
      motif: "windmill",
      x: 1126,
      y: 446,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-110",
      layer: "far",
      motif: "grass",
      x: 1223,
      y: 57,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-111",
      layer: "near",
      motif: "gear",
      x: 1320,
      y: 98,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-112",
      layer: "far",
      motif: "vine",
      x: 1417,
      y: 139,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-113",
      layer: "mid",
      motif: "glassBerry",
      x: 1514,
      y: 180,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-114",
      layer: "far",
      motif: "cloud",
      x: 1611,
      y: 221,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-115",
      layer: "mid",
      motif: "windmill",
      x: 1708,
      y: 262,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-116",
      layer: "near",
      motif: "grass",
      x: 1805,
      y: 303,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-117",
      layer: "mid",
      motif: "gear",
      x: 1902,
      y: 344,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-118",
      layer: "far",
      motif: "vine",
      x: 1999,
      y: 385,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-119",
      layer: "mid",
      motif: "glassBerry",
      x: 2096,
      y: 426,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-120",
      layer: "far",
      motif: "cloud",
      x: 2193,
      y: 37,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-121",
      layer: "near",
      motif: "windmill",
      x: 2290,
      y: 78,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-122",
      layer: "far",
      motif: "grass",
      x: 2387,
      y: 119,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-123",
      layer: "mid",
      motif: "gear",
      x: 2484,
      y: 160,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-124",
      layer: "far",
      motif: "vine",
      x: 2581,
      y: 201,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-125",
      layer: "mid",
      motif: "glassBerry",
      x: 2678,
      y: 242,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-126",
      layer: "near",
      motif: "cloud",
      x: 2775,
      y: 283,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-127",
      layer: "mid",
      motif: "windmill",
      x: 2872,
      y: 324,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-128",
      layer: "far",
      motif: "grass",
      x: 2969,
      y: 365,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-129",
      layer: "mid",
      motif: "gear",
      x: 3066,
      y: 406,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-130",
      layer: "far",
      motif: "vine",
      x: 3163,
      y: 447,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-131",
      layer: "near",
      motif: "glassBerry",
      x: 3260,
      y: 58,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-132",
      layer: "far",
      motif: "cloud",
      x: 3357,
      y: 99,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-133",
      layer: "mid",
      motif: "windmill",
      x: 3454,
      y: 140,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-134",
      layer: "far",
      motif: "grass",
      x: 3551,
      y: 181,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-135",
      layer: "mid",
      motif: "gear",
      x: 3648,
      y: 222,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-136",
      layer: "near",
      motif: "vine",
      x: 3745,
      y: 263,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-137",
      layer: "mid",
      motif: "glassBerry",
      x: 3842,
      y: 304,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-138",
      layer: "far",
      motif: "cloud",
      x: 3939,
      y: 345,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-139",
      layer: "mid",
      motif: "windmill",
      x: 4036,
      y: 386,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-140",
      layer: "far",
      motif: "grass",
      x: 4133,
      y: 427,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-141",
      layer: "near",
      motif: "gear",
      x: 4230,
      y: 38,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-142",
      layer: "far",
      motif: "vine",
      x: 4327,
      y: 79,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-143",
      layer: "mid",
      motif: "glassBerry",
      x: 4424,
      y: 120,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-144",
      layer: "far",
      motif: "cloud",
      x: 4521,
      y: 161,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-145",
      layer: "mid",
      motif: "windmill",
      x: 4618,
      y: 202,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-146",
      layer: "near",
      motif: "grass",
      x: 4715,
      y: 243,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-147",
      layer: "mid",
      motif: "gear",
      x: 4812,
      y: 284,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-148",
      layer: "far",
      motif: "vine",
      x: 4909,
      y: 325,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-149",
      layer: "mid",
      motif: "glassBerry",
      x: 78,
      y: 366,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-150",
      layer: "far",
      motif: "cloud",
      x: 175,
      y: 407,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-151",
      layer: "near",
      motif: "windmill",
      x: 272,
      y: 448,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-152",
      layer: "far",
      motif: "grass",
      x: 369,
      y: 59,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-153",
      layer: "mid",
      motif: "gear",
      x: 466,
      y: 100,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-154",
      layer: "far",
      motif: "vine",
      x: 563,
      y: 141,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-155",
      layer: "mid",
      motif: "glassBerry",
      x: 660,
      y: 182,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-156",
      layer: "near",
      motif: "cloud",
      x: 757,
      y: 223,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-157",
      layer: "mid",
      motif: "windmill",
      x: 854,
      y: 264,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-158",
      layer: "far",
      motif: "grass",
      x: 951,
      y: 305,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-159",
      layer: "mid",
      motif: "gear",
      x: 1048,
      y: 346,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-160",
      layer: "far",
      motif: "vine",
      x: 1145,
      y: 387,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-161",
      layer: "near",
      motif: "glassBerry",
      x: 1242,
      y: 428,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-162",
      layer: "far",
      motif: "cloud",
      x: 1339,
      y: 39,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-163",
      layer: "mid",
      motif: "windmill",
      x: 1436,
      y: 80,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-164",
      layer: "far",
      motif: "grass",
      x: 1533,
      y: 121,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-165",
      layer: "mid",
      motif: "gear",
      x: 1630,
      y: 162,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-166",
      layer: "near",
      motif: "vine",
      x: 1727,
      y: 203,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-167",
      layer: "mid",
      motif: "glassBerry",
      x: 1824,
      y: 244,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-168",
      layer: "far",
      motif: "cloud",
      x: 1921,
      y: 285,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-169",
      layer: "mid",
      motif: "windmill",
      x: 2018,
      y: 326,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-170",
      layer: "far",
      motif: "grass",
      x: 2115,
      y: 367,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-23-171",
      layer: "near",
      motif: "gear",
      x: 2212,
      y: 408,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-172",
      layer: "far",
      motif: "vine",
      x: 2309,
      y: 449,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-23-173",
      layer: "mid",
      motif: "glassBerry",
      x: 2406,
      y: 60,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-23-174",
      layer: "far",
      motif: "cloud",
      x: 2503,
      y: 101,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-23-175",
      layer: "mid",
      motif: "windmill",
      x: 2600,
      y: 142,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-23-176",
      layer: "near",
      motif: "grass",
      x: 2697,
      y: 183,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-23-177",
      layer: "mid",
      motif: "gear",
      x: 2794,
      y: 224,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-23-178",
      layer: "far",
      motif: "vine",
      x: 2891,
      y: 265,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-23-179",
      layer: "mid",
      motif: "glassBerry",
      x: 2988,
      y: 306,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-23-180",
      layer: "far",
      motif: "cloud",
      x: 3085,
      y: 347,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-23",
    x: 4736,
    y: 448,
    nextLevelId: "level-24"
  }
};
