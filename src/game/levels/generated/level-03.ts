import type { LevelDefinition } from "../schema";

export const LEVEL_03: LevelDefinition = {
  id: "level-03",
  index: 2,
  title: "Brassroot Verge 03",
  chapter: "Brassroot Verge",
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
    "...........................===...........................====..........................=====.........................======...............................",
    "......................#######.......................###...........................####..........................#####.........................####........",
    ".................######........................#######.......................###...........................####..........................#####............",
    "............=====.........................======........................=======.......................===...........................====..................",
    ".....................................#####.........................######........................#######.......................###........................",
    "................................####.......W..................#####............W............######.................W......#######.........................",
    "..................................S...................................S...................................S...............................................",
    "...P.....................W...................................W...................................W...................................W..............G.....",
    "................S...................................S...................................S...................................S.............................",
    "^################^....############..##############...#############....############..#^############...#^###########....#^##########..####^################^",
    "##################^.^.############^.##############^.^#############^.^.############^.##############^.^#############^.^.############^.######################"
  ],
  enemies: [
    {
      id: "enemy-3-1",
      kind: "lantern",
      x: 476,
      y: 448,
      patrolMin: 381,
      patrolMax: 596,
      speed: 68,
      phase: 2
    },
    {
      id: "enemy-3-2",
      kind: "charger",
      x: 806,
      y: 416,
      patrolMin: 693,
      patrolMax: 948,
      speed: 80,
      phase: 5
    },
    {
      id: "enemy-3-3",
      kind: "spiker",
      x: 1136,
      y: 384,
      patrolMin: 1005,
      patrolMax: 1300,
      speed: 92,
      phase: 8
    },
    {
      id: "enemy-3-4",
      kind: "turret",
      x: 1466,
      y: 352,
      patrolMin: 1317,
      patrolMax: 1652,
      speed: 104,
      phase: 11
    },
    {
      id: "enemy-3-5",
      kind: "beetle",
      x: 1796,
      y: 320,
      patrolMin: 1701,
      patrolMax: 2004,
      speed: 44,
      phase: 14
    },
    {
      id: "enemy-3-6",
      kind: "acorn",
      x: 2126,
      y: 448,
      patrolMin: 2013,
      patrolMax: 2246,
      speed: 56,
      phase: 17
    },
    {
      id: "enemy-3-7",
      kind: "lantern",
      x: 2456,
      y: 416,
      patrolMin: 2325,
      patrolMax: 2598,
      speed: 68,
      phase: 20
    },
    {
      id: "enemy-3-8",
      kind: "charger",
      x: 2786,
      y: 384,
      patrolMin: 2637,
      patrolMax: 2950,
      speed: 80,
      phase: 23
    },
    {
      id: "enemy-3-9",
      kind: "spiker",
      x: 3116,
      y: 352,
      patrolMin: 3021,
      patrolMax: 3302,
      speed: 92,
      phase: 26
    },
    {
      id: "enemy-3-10",
      kind: "turret",
      x: 3446,
      y: 320,
      patrolMin: 3333,
      patrolMax: 3654,
      speed: 104,
      phase: 29
    },
    {
      id: "enemy-3-11",
      kind: "beetle",
      x: 3776,
      y: 448,
      patrolMin: 3645,
      patrolMax: 3896,
      speed: 44,
      phase: 32
    },
    {
      id: "enemy-3-12",
      kind: "acorn",
      x: 4106,
      y: 416,
      patrolMin: 3957,
      patrolMax: 4248,
      speed: 56,
      phase: 35
    },
    {
      id: "enemy-3-13",
      kind: "lantern",
      x: 4436,
      y: 384,
      patrolMin: 4341,
      patrolMax: 4600,
      speed: 68,
      phase: 38
    },
    {
      id: "enemy-3-14",
      kind: "charger",
      x: 4766,
      y: 352,
      patrolMin: 4653,
      patrolMax: 4748,
      speed: 80,
      phase: 41
    }
  ],
  collectibles: [
    {
      id: "collectible-3-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 204,
      y: 162
    },
    {
      id: "collectible-3-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 274,
      y: 182
    },
    {
      id: "collectible-3-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 344,
      y: 235
    },
    {
      id: "collectible-3-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 414,
      y: 288
    },
    {
      id: "collectible-3-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 484,
      y: 308
    },
    {
      id: "collectible-3-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 554,
      y: 361
    },
    {
      id: "collectible-3-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 624,
      y: 414
    },
    {
      id: "collectible-3-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 694,
      y: 140
    },
    {
      id: "collectible-3-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 764,
      y: 193
    },
    {
      id: "collectible-3-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 834,
      y: 246
    },
    {
      id: "collectible-3-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 904,
      y: 266
    },
    {
      id: "collectible-3-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 974,
      y: 319
    },
    {
      id: "collectible-3-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1044,
      y: 372
    },
    {
      id: "collectible-3-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1114,
      y: 392
    },
    {
      id: "collectible-3-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1184,
      y: 151
    },
    {
      id: "collectible-3-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1254,
      y: 204
    },
    {
      id: "collectible-3-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1324,
      y: 224
    },
    {
      id: "collectible-3-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1394,
      y: 277
    },
    {
      id: "collectible-3-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1464,
      y: 330
    },
    {
      id: "collectible-3-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1534,
      y: 350
    },
    {
      id: "collectible-3-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1604,
      y: 403
    },
    {
      id: "collectible-3-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1674,
      y: 162
    },
    {
      id: "collectible-3-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1744,
      y: 182
    },
    {
      id: "collectible-3-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1814,
      y: 235
    },
    {
      id: "collectible-3-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1884,
      y: 288
    },
    {
      id: "collectible-3-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1954,
      y: 308
    },
    {
      id: "collectible-3-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2024,
      y: 361
    },
    {
      id: "collectible-3-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2094,
      y: 414
    },
    {
      id: "collectible-3-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2164,
      y: 140
    },
    {
      id: "collectible-3-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2234,
      y: 193
    },
    {
      id: "collectible-3-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2304,
      y: 246
    },
    {
      id: "collectible-3-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2374,
      y: 266
    },
    {
      id: "collectible-3-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2444,
      y: 319
    },
    {
      id: "collectible-3-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2514,
      y: 372
    },
    {
      id: "collectible-3-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2584,
      y: 392
    },
    {
      id: "collectible-3-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2654,
      y: 151
    },
    {
      id: "collectible-3-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2724,
      y: 204
    },
    {
      id: "collectible-3-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2794,
      y: 224
    },
    {
      id: "collectible-3-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2864,
      y: 277
    },
    {
      id: "collectible-3-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2934,
      y: 330
    },
    {
      id: "collectible-3-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3004,
      y: 350
    },
    {
      id: "collectible-3-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3074,
      y: 403
    },
    {
      id: "collectible-3-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3144,
      y: 162
    },
    {
      id: "collectible-3-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3214,
      y: 182
    },
    {
      id: "collectible-3-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3284,
      y: 235
    },
    {
      id: "collectible-3-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3354,
      y: 288
    },
    {
      id: "collectible-3-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3424,
      y: 308
    },
    {
      id: "collectible-3-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3494,
      y: 361
    },
    {
      id: "collectible-3-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3564,
      y: 414
    },
    {
      id: "collectible-3-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3634,
      y: 140
    },
    {
      id: "collectible-3-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3704,
      y: 193
    },
    {
      id: "collectible-3-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3774,
      y: 246
    },
    {
      id: "collectible-3-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3844,
      y: 266
    },
    {
      id: "collectible-3-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3914,
      y: 319
    },
    {
      id: "collectible-3-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3984,
      y: 372
    },
    {
      id: "collectible-3-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4054,
      y: 392
    },
    {
      id: "collectible-3-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4124,
      y: 151
    },
    {
      id: "collectible-3-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4194,
      y: 204
    },
    {
      id: "collectible-3-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4264,
      y: 224
    },
    {
      id: "collectible-3-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4334,
      y: 277
    },
    {
      id: "collectible-3-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4404,
      y: 330
    },
    {
      id: "collectible-3-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4474,
      y: 350
    },
    {
      id: "collectible-3-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4544,
      y: 403
    },
    {
      id: "collectible-3-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4614,
      y: 162
    },
    {
      id: "collectible-3-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4684,
      y: 182
    },
    {
      id: "collectible-3-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4754,
      y: 235
    },
    {
      id: "collectible-3-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4824,
      y: 288
    },
    {
      id: "collectible-3-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4894,
      y: 308
    },
    {
      id: "collectible-3-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4964,
      y: 361
    },
    {
      id: "collectible-3-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5034,
      y: 414
    }
  ],
  powerups: [
    {
      id: "powerup-3-1",
      kind: "starburst",
      durationMs: 4800,
      x: 560,
      y: 130
    },
    {
      id: "powerup-3-2",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 1390,
      y: 182
    },
    {
      id: "powerup-3-3",
      kind: "shield",
      durationMs: 6600,
      x: 2220,
      y: 234
    },
    {
      id: "powerup-3-4",
      kind: "springBoots",
      durationMs: 7500,
      x: 3050,
      y: 286
    },
    {
      id: "powerup-3-5",
      kind: "starburst",
      durationMs: 4800,
      x: 3880,
      y: 338
    },
    {
      id: "powerup-3-6",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 4710,
      y: 130
    },
    {
      id: "powerup-3-7",
      kind: "shield",
      durationMs: 6600,
      x: 5540,
      y: 182
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-3-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 0.2
    },
    {
      id: "moving-platform-3-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 0.8999999999999999
    },
    {
      id: "moving-platform-3-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 1.5999999999999999
    },
    {
      id: "moving-platform-3-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 2.3
    },
    {
      id: "moving-platform-3-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 3
    },
    {
      id: "moving-platform-3-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 3.7
    },
    {
      id: "moving-platform-3-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 4.3999999999999995
    },
    {
      id: "moving-platform-3-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 5.1
    },
    {
      id: "moving-platform-3-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 5.8
    }
  ],
  hazards: [
    {
      id: "hazard-3-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 2
    },
    {
      id: "hazard-3-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 3
    },
    {
      id: "hazard-3-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 4
    },
    {
      id: "hazard-3-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 5
    },
    {
      id: "hazard-3-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 6
    },
    {
      id: "hazard-3-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 7
    },
    {
      id: "hazard-3-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 8
    },
    {
      id: "hazard-3-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 9
    },
    {
      id: "hazard-3-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 10
    },
    {
      id: "hazard-3-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 11
    },
    {
      id: "hazard-3-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 12
    },
    {
      id: "hazard-3-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 13
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-3-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-3-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-3-1",
      x: 708,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-3-2",
      x: 1478,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-3-3",
      x: 2248,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-3-4",
      x: 3018,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-3-5",
      x: 3788,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-3-6",
      x: 4558,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-3-7",
      x: 5328,
      y: 416,
      power: 1.1
    }
  ],
  windZones: [
    {
      id: "wind-3-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-3-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-3-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-3-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-3-5",
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
      id: "decor-3-1",
      layer: "near",
      motif: "glassBerry",
      x: 46,
      y: 58,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-2",
      layer: "far",
      motif: "cloud",
      x: 143,
      y: 99,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-3",
      layer: "mid",
      motif: "windmill",
      x: 240,
      y: 140,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-4",
      layer: "far",
      motif: "grass",
      x: 337,
      y: 181,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-5",
      layer: "mid",
      motif: "gear",
      x: 434,
      y: 222,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-6",
      layer: "near",
      motif: "vine",
      x: 531,
      y: 263,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-7",
      layer: "mid",
      motif: "glassBerry",
      x: 628,
      y: 304,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-8",
      layer: "far",
      motif: "cloud",
      x: 725,
      y: 345,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-9",
      layer: "mid",
      motif: "windmill",
      x: 822,
      y: 386,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-10",
      layer: "far",
      motif: "grass",
      x: 919,
      y: 427,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-11",
      layer: "near",
      motif: "gear",
      x: 1016,
      y: 38,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-12",
      layer: "far",
      motif: "vine",
      x: 1113,
      y: 79,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-13",
      layer: "mid",
      motif: "glassBerry",
      x: 1210,
      y: 120,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-14",
      layer: "far",
      motif: "cloud",
      x: 1307,
      y: 161,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-15",
      layer: "mid",
      motif: "windmill",
      x: 1404,
      y: 202,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-16",
      layer: "near",
      motif: "grass",
      x: 1501,
      y: 243,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-17",
      layer: "mid",
      motif: "gear",
      x: 1598,
      y: 284,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-18",
      layer: "far",
      motif: "vine",
      x: 1695,
      y: 325,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-19",
      layer: "mid",
      motif: "glassBerry",
      x: 1792,
      y: 366,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-20",
      layer: "far",
      motif: "cloud",
      x: 1889,
      y: 407,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-21",
      layer: "near",
      motif: "windmill",
      x: 1986,
      y: 448,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-22",
      layer: "far",
      motif: "grass",
      x: 2083,
      y: 59,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-23",
      layer: "mid",
      motif: "gear",
      x: 2180,
      y: 100,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-24",
      layer: "far",
      motif: "vine",
      x: 2277,
      y: 141,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-25",
      layer: "mid",
      motif: "glassBerry",
      x: 2374,
      y: 182,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-26",
      layer: "near",
      motif: "cloud",
      x: 2471,
      y: 223,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-27",
      layer: "mid",
      motif: "windmill",
      x: 2568,
      y: 264,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-28",
      layer: "far",
      motif: "grass",
      x: 2665,
      y: 305,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-29",
      layer: "mid",
      motif: "gear",
      x: 2762,
      y: 346,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-30",
      layer: "far",
      motif: "vine",
      x: 2859,
      y: 387,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-31",
      layer: "near",
      motif: "glassBerry",
      x: 2956,
      y: 428,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-32",
      layer: "far",
      motif: "cloud",
      x: 3053,
      y: 39,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-33",
      layer: "mid",
      motif: "windmill",
      x: 3150,
      y: 80,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-34",
      layer: "far",
      motif: "grass",
      x: 3247,
      y: 121,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-35",
      layer: "mid",
      motif: "gear",
      x: 3344,
      y: 162,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-36",
      layer: "near",
      motif: "vine",
      x: 3441,
      y: 203,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-37",
      layer: "mid",
      motif: "glassBerry",
      x: 3538,
      y: 244,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-38",
      layer: "far",
      motif: "cloud",
      x: 3635,
      y: 285,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-39",
      layer: "mid",
      motif: "windmill",
      x: 3732,
      y: 326,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-40",
      layer: "far",
      motif: "grass",
      x: 3829,
      y: 367,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-41",
      layer: "near",
      motif: "gear",
      x: 3926,
      y: 408,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-42",
      layer: "far",
      motif: "vine",
      x: 4023,
      y: 449,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-43",
      layer: "mid",
      motif: "glassBerry",
      x: 4120,
      y: 60,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-44",
      layer: "far",
      motif: "cloud",
      x: 4217,
      y: 101,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-45",
      layer: "mid",
      motif: "windmill",
      x: 4314,
      y: 142,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-46",
      layer: "near",
      motif: "grass",
      x: 4411,
      y: 183,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-47",
      layer: "mid",
      motif: "gear",
      x: 4508,
      y: 224,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-48",
      layer: "far",
      motif: "vine",
      x: 4605,
      y: 265,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-49",
      layer: "mid",
      motif: "glassBerry",
      x: 4702,
      y: 306,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-50",
      layer: "far",
      motif: "cloud",
      x: 4799,
      y: 347,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-51",
      layer: "near",
      motif: "windmill",
      x: 4896,
      y: 388,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-52",
      layer: "far",
      motif: "grass",
      x: 65,
      y: 429,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-53",
      layer: "mid",
      motif: "gear",
      x: 162,
      y: 40,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-54",
      layer: "far",
      motif: "vine",
      x: 259,
      y: 81,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-55",
      layer: "mid",
      motif: "glassBerry",
      x: 356,
      y: 122,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-56",
      layer: "near",
      motif: "cloud",
      x: 453,
      y: 163,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-57",
      layer: "mid",
      motif: "windmill",
      x: 550,
      y: 204,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-58",
      layer: "far",
      motif: "grass",
      x: 647,
      y: 245,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-59",
      layer: "mid",
      motif: "gear",
      x: 744,
      y: 286,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-60",
      layer: "far",
      motif: "vine",
      x: 841,
      y: 327,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-61",
      layer: "near",
      motif: "glassBerry",
      x: 938,
      y: 368,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-62",
      layer: "far",
      motif: "cloud",
      x: 1035,
      y: 409,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-63",
      layer: "mid",
      motif: "windmill",
      x: 1132,
      y: 450,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-64",
      layer: "far",
      motif: "grass",
      x: 1229,
      y: 61,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-65",
      layer: "mid",
      motif: "gear",
      x: 1326,
      y: 102,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-66",
      layer: "near",
      motif: "vine",
      x: 1423,
      y: 143,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-67",
      layer: "mid",
      motif: "glassBerry",
      x: 1520,
      y: 184,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-68",
      layer: "far",
      motif: "cloud",
      x: 1617,
      y: 225,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-69",
      layer: "mid",
      motif: "windmill",
      x: 1714,
      y: 266,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-70",
      layer: "far",
      motif: "grass",
      x: 1811,
      y: 307,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-71",
      layer: "near",
      motif: "gear",
      x: 1908,
      y: 348,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-72",
      layer: "far",
      motif: "vine",
      x: 2005,
      y: 389,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-73",
      layer: "mid",
      motif: "glassBerry",
      x: 2102,
      y: 430,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-74",
      layer: "far",
      motif: "cloud",
      x: 2199,
      y: 41,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-75",
      layer: "mid",
      motif: "windmill",
      x: 2296,
      y: 82,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-76",
      layer: "near",
      motif: "grass",
      x: 2393,
      y: 123,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-77",
      layer: "mid",
      motif: "gear",
      x: 2490,
      y: 164,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-78",
      layer: "far",
      motif: "vine",
      x: 2587,
      y: 205,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-79",
      layer: "mid",
      motif: "glassBerry",
      x: 2684,
      y: 246,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-80",
      layer: "far",
      motif: "cloud",
      x: 2781,
      y: 287,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-81",
      layer: "near",
      motif: "windmill",
      x: 2878,
      y: 328,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-82",
      layer: "far",
      motif: "grass",
      x: 2975,
      y: 369,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-83",
      layer: "mid",
      motif: "gear",
      x: 3072,
      y: 410,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-84",
      layer: "far",
      motif: "vine",
      x: 3169,
      y: 451,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-85",
      layer: "mid",
      motif: "glassBerry",
      x: 3266,
      y: 62,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-86",
      layer: "near",
      motif: "cloud",
      x: 3363,
      y: 103,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-87",
      layer: "mid",
      motif: "windmill",
      x: 3460,
      y: 144,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-88",
      layer: "far",
      motif: "grass",
      x: 3557,
      y: 185,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-89",
      layer: "mid",
      motif: "gear",
      x: 3654,
      y: 226,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-90",
      layer: "far",
      motif: "vine",
      x: 3751,
      y: 267,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-91",
      layer: "near",
      motif: "glassBerry",
      x: 3848,
      y: 308,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-92",
      layer: "far",
      motif: "cloud",
      x: 3945,
      y: 349,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-93",
      layer: "mid",
      motif: "windmill",
      x: 4042,
      y: 390,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-94",
      layer: "far",
      motif: "grass",
      x: 4139,
      y: 431,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-95",
      layer: "mid",
      motif: "gear",
      x: 4236,
      y: 42,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-96",
      layer: "near",
      motif: "vine",
      x: 4333,
      y: 83,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-97",
      layer: "mid",
      motif: "glassBerry",
      x: 4430,
      y: 124,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-98",
      layer: "far",
      motif: "cloud",
      x: 4527,
      y: 165,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-99",
      layer: "mid",
      motif: "windmill",
      x: 4624,
      y: 206,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-100",
      layer: "far",
      motif: "grass",
      x: 4721,
      y: 247,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-101",
      layer: "near",
      motif: "gear",
      x: 4818,
      y: 288,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-102",
      layer: "far",
      motif: "vine",
      x: 4915,
      y: 329,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-103",
      layer: "mid",
      motif: "glassBerry",
      x: 84,
      y: 370,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-104",
      layer: "far",
      motif: "cloud",
      x: 181,
      y: 411,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-105",
      layer: "mid",
      motif: "windmill",
      x: 278,
      y: 452,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-106",
      layer: "near",
      motif: "grass",
      x: 375,
      y: 63,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-107",
      layer: "mid",
      motif: "gear",
      x: 472,
      y: 104,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-108",
      layer: "far",
      motif: "vine",
      x: 569,
      y: 145,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-109",
      layer: "mid",
      motif: "glassBerry",
      x: 666,
      y: 186,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-110",
      layer: "far",
      motif: "cloud",
      x: 763,
      y: 227,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-111",
      layer: "near",
      motif: "windmill",
      x: 860,
      y: 268,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-112",
      layer: "far",
      motif: "grass",
      x: 957,
      y: 309,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-113",
      layer: "mid",
      motif: "gear",
      x: 1054,
      y: 350,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-114",
      layer: "far",
      motif: "vine",
      x: 1151,
      y: 391,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-115",
      layer: "mid",
      motif: "glassBerry",
      x: 1248,
      y: 432,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-116",
      layer: "near",
      motif: "cloud",
      x: 1345,
      y: 43,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-117",
      layer: "mid",
      motif: "windmill",
      x: 1442,
      y: 84,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-118",
      layer: "far",
      motif: "grass",
      x: 1539,
      y: 125,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-119",
      layer: "mid",
      motif: "gear",
      x: 1636,
      y: 166,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-120",
      layer: "far",
      motif: "vine",
      x: 1733,
      y: 207,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-121",
      layer: "near",
      motif: "glassBerry",
      x: 1830,
      y: 248,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-122",
      layer: "far",
      motif: "cloud",
      x: 1927,
      y: 289,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-123",
      layer: "mid",
      motif: "windmill",
      x: 2024,
      y: 330,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-124",
      layer: "far",
      motif: "grass",
      x: 2121,
      y: 371,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-125",
      layer: "mid",
      motif: "gear",
      x: 2218,
      y: 412,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-126",
      layer: "near",
      motif: "vine",
      x: 2315,
      y: 453,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-127",
      layer: "mid",
      motif: "glassBerry",
      x: 2412,
      y: 64,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-128",
      layer: "far",
      motif: "cloud",
      x: 2509,
      y: 105,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-129",
      layer: "mid",
      motif: "windmill",
      x: 2606,
      y: 146,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-130",
      layer: "far",
      motif: "grass",
      x: 2703,
      y: 187,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-131",
      layer: "near",
      motif: "gear",
      x: 2800,
      y: 228,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-132",
      layer: "far",
      motif: "vine",
      x: 2897,
      y: 269,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-133",
      layer: "mid",
      motif: "glassBerry",
      x: 2994,
      y: 310,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-134",
      layer: "far",
      motif: "cloud",
      x: 3091,
      y: 351,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-135",
      layer: "mid",
      motif: "windmill",
      x: 3188,
      y: 392,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-136",
      layer: "near",
      motif: "grass",
      x: 3285,
      y: 433,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-137",
      layer: "mid",
      motif: "gear",
      x: 3382,
      y: 44,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-138",
      layer: "far",
      motif: "vine",
      x: 3479,
      y: 85,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-139",
      layer: "mid",
      motif: "glassBerry",
      x: 3576,
      y: 126,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-140",
      layer: "far",
      motif: "cloud",
      x: 3673,
      y: 167,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-141",
      layer: "near",
      motif: "windmill",
      x: 3770,
      y: 208,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-142",
      layer: "far",
      motif: "grass",
      x: 3867,
      y: 249,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-143",
      layer: "mid",
      motif: "gear",
      x: 3964,
      y: 290,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-144",
      layer: "far",
      motif: "vine",
      x: 4061,
      y: 331,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-145",
      layer: "mid",
      motif: "glassBerry",
      x: 4158,
      y: 372,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-146",
      layer: "near",
      motif: "cloud",
      x: 4255,
      y: 413,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-147",
      layer: "mid",
      motif: "windmill",
      x: 4352,
      y: 454,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-148",
      layer: "far",
      motif: "grass",
      x: 4449,
      y: 65,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-149",
      layer: "mid",
      motif: "gear",
      x: 4546,
      y: 106,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-150",
      layer: "far",
      motif: "vine",
      x: 4643,
      y: 147,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-151",
      layer: "near",
      motif: "glassBerry",
      x: 4740,
      y: 188,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-152",
      layer: "far",
      motif: "cloud",
      x: 4837,
      y: 229,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-153",
      layer: "mid",
      motif: "windmill",
      x: 6,
      y: 270,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-154",
      layer: "far",
      motif: "grass",
      x: 103,
      y: 311,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-155",
      layer: "mid",
      motif: "gear",
      x: 200,
      y: 352,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-156",
      layer: "near",
      motif: "vine",
      x: 297,
      y: 393,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-157",
      layer: "mid",
      motif: "glassBerry",
      x: 394,
      y: 434,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-158",
      layer: "far",
      motif: "cloud",
      x: 491,
      y: 45,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-159",
      layer: "mid",
      motif: "windmill",
      x: 588,
      y: 86,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-160",
      layer: "far",
      motif: "grass",
      x: 685,
      y: 127,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-161",
      layer: "near",
      motif: "gear",
      x: 782,
      y: 168,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-162",
      layer: "far",
      motif: "vine",
      x: 879,
      y: 209,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-163",
      layer: "mid",
      motif: "glassBerry",
      x: 976,
      y: 250,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-164",
      layer: "far",
      motif: "cloud",
      x: 1073,
      y: 291,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-165",
      layer: "mid",
      motif: "windmill",
      x: 1170,
      y: 332,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-166",
      layer: "near",
      motif: "grass",
      x: 1267,
      y: 373,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-167",
      layer: "mid",
      motif: "gear",
      x: 1364,
      y: 414,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-168",
      layer: "far",
      motif: "vine",
      x: 1461,
      y: 455,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-169",
      layer: "mid",
      motif: "glassBerry",
      x: 1558,
      y: 66,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-170",
      layer: "far",
      motif: "cloud",
      x: 1655,
      y: 107,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-3-171",
      layer: "near",
      motif: "windmill",
      x: 1752,
      y: 148,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-172",
      layer: "far",
      motif: "grass",
      x: 1849,
      y: 189,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-3-173",
      layer: "mid",
      motif: "gear",
      x: 1946,
      y: 230,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-3-174",
      layer: "far",
      motif: "vine",
      x: 2043,
      y: 271,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-3-175",
      layer: "mid",
      motif: "glassBerry",
      x: 2140,
      y: 312,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-3-176",
      layer: "near",
      motif: "cloud",
      x: 2237,
      y: 353,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-3-177",
      layer: "mid",
      motif: "windmill",
      x: 2334,
      y: 394,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-3-178",
      layer: "far",
      motif: "grass",
      x: 2431,
      y: 435,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-3-179",
      layer: "mid",
      motif: "gear",
      x: 2528,
      y: 46,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-3-180",
      layer: "far",
      motif: "vine",
      x: 2625,
      y: 87,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-3",
    x: 4736,
    y: 448,
    nextLevelId: "level-04"
  }
};
