import type { LevelDefinition } from "../schema";

export const LEVEL_19: LevelDefinition = {
  id: "level-19",
  index: 18,
  title: "Windmill Tangle 05",
  chapter: "Windmill Tangle",
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
    ".....................................######........................#######.......................###...........................####.......................",
    "................................#####.........................######........................#######.......................###.............................",
    "...........................====..........................=====.........................======........................=======..............................",
    "......................###...........................####..........................#####.........................######........................####........",
    ".................#######.......................###...........................####..........................#####.........................######...........",
    "............======.......................W=======.......................===..W........................====.......W..................=====.................",
    "................................S...................................S...................................S.................................................",
    "...P...................W...................................W...................................W...................................W................G.....",
    "..............S...................................S...................................S...................................S...............................",
    "^################^..#############..#############..#^###########..###^#########..#####^#######..#######^#####..#########^###..###########^################^",
    "##################^.#############.^#############^.#############.^#############^.#############.^#############^.#############.^#############################"
  ],
  enemies: [
    {
      id: "enemy-19-1",
      kind: "beetle",
      x: 504,
      y: 448,
      patrolMin: 409,
      patrolMax: 624,
      speed: 44,
      phase: 18
    },
    {
      id: "enemy-19-2",
      kind: "acorn",
      x: 834,
      y: 416,
      patrolMin: 721,
      patrolMax: 976,
      speed: 56,
      phase: 21
    },
    {
      id: "enemy-19-3",
      kind: "lantern",
      x: 1164,
      y: 384,
      patrolMin: 1033,
      patrolMax: 1328,
      speed: 68,
      phase: 24
    },
    {
      id: "enemy-19-4",
      kind: "charger",
      x: 1494,
      y: 352,
      patrolMin: 1345,
      patrolMax: 1680,
      speed: 80,
      phase: 27
    },
    {
      id: "enemy-19-5",
      kind: "spiker",
      x: 1824,
      y: 320,
      patrolMin: 1729,
      patrolMax: 2032,
      speed: 92,
      phase: 30
    },
    {
      id: "enemy-19-6",
      kind: "turret",
      x: 2154,
      y: 448,
      patrolMin: 2041,
      patrolMax: 2274,
      speed: 104,
      phase: 33
    },
    {
      id: "enemy-19-7",
      kind: "beetle",
      x: 2484,
      y: 416,
      patrolMin: 2353,
      patrolMax: 2626,
      speed: 44,
      phase: 36
    },
    {
      id: "enemy-19-8",
      kind: "acorn",
      x: 2814,
      y: 384,
      patrolMin: 2665,
      patrolMax: 2978,
      speed: 56,
      phase: 39
    },
    {
      id: "enemy-19-9",
      kind: "lantern",
      x: 3144,
      y: 352,
      patrolMin: 3049,
      patrolMax: 3330,
      speed: 68,
      phase: 42
    },
    {
      id: "enemy-19-10",
      kind: "charger",
      x: 3474,
      y: 320,
      patrolMin: 3361,
      patrolMax: 3682,
      speed: 80,
      phase: 45
    },
    {
      id: "enemy-19-11",
      kind: "spiker",
      x: 3804,
      y: 448,
      patrolMin: 3673,
      patrolMax: 3924,
      speed: 92,
      phase: 48
    },
    {
      id: "enemy-19-12",
      kind: "turret",
      x: 4134,
      y: 416,
      patrolMin: 3985,
      patrolMax: 4276,
      speed: 104,
      phase: 51
    },
    {
      id: "enemy-19-13",
      kind: "beetle",
      x: 4464,
      y: 384,
      patrolMin: 4369,
      patrolMax: 4628,
      speed: 44,
      phase: 54
    },
    {
      id: "enemy-19-14",
      kind: "acorn",
      x: 4794,
      y: 352,
      patrolMin: 4681,
      patrolMax: 4748,
      speed: 56,
      phase: 57
    }
  ],
  collectibles: [
    {
      id: "collectible-19-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 204,
      y: 140
    },
    {
      id: "collectible-19-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 274,
      y: 193
    },
    {
      id: "collectible-19-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 344,
      y: 246
    },
    {
      id: "collectible-19-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 414,
      y: 266
    },
    {
      id: "collectible-19-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 484,
      y: 319
    },
    {
      id: "collectible-19-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 554,
      y: 372
    },
    {
      id: "collectible-19-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 624,
      y: 392
    },
    {
      id: "collectible-19-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 694,
      y: 151
    },
    {
      id: "collectible-19-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 764,
      y: 204
    },
    {
      id: "collectible-19-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 834,
      y: 224
    },
    {
      id: "collectible-19-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 904,
      y: 277
    },
    {
      id: "collectible-19-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 974,
      y: 330
    },
    {
      id: "collectible-19-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1044,
      y: 350
    },
    {
      id: "collectible-19-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1114,
      y: 403
    },
    {
      id: "collectible-19-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1184,
      y: 162
    },
    {
      id: "collectible-19-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1254,
      y: 182
    },
    {
      id: "collectible-19-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1324,
      y: 235
    },
    {
      id: "collectible-19-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1394,
      y: 288
    },
    {
      id: "collectible-19-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1464,
      y: 308
    },
    {
      id: "collectible-19-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1534,
      y: 361
    },
    {
      id: "collectible-19-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1604,
      y: 414
    },
    {
      id: "collectible-19-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1674,
      y: 140
    },
    {
      id: "collectible-19-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1744,
      y: 193
    },
    {
      id: "collectible-19-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1814,
      y: 246
    },
    {
      id: "collectible-19-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1884,
      y: 266
    },
    {
      id: "collectible-19-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1954,
      y: 319
    },
    {
      id: "collectible-19-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2024,
      y: 372
    },
    {
      id: "collectible-19-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2094,
      y: 392
    },
    {
      id: "collectible-19-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2164,
      y: 151
    },
    {
      id: "collectible-19-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2234,
      y: 204
    },
    {
      id: "collectible-19-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2304,
      y: 224
    },
    {
      id: "collectible-19-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2374,
      y: 277
    },
    {
      id: "collectible-19-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2444,
      y: 330
    },
    {
      id: "collectible-19-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2514,
      y: 350
    },
    {
      id: "collectible-19-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2584,
      y: 403
    },
    {
      id: "collectible-19-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2654,
      y: 162
    },
    {
      id: "collectible-19-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2724,
      y: 182
    },
    {
      id: "collectible-19-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2794,
      y: 235
    },
    {
      id: "collectible-19-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2864,
      y: 288
    },
    {
      id: "collectible-19-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2934,
      y: 308
    },
    {
      id: "collectible-19-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3004,
      y: 361
    },
    {
      id: "collectible-19-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3074,
      y: 414
    },
    {
      id: "collectible-19-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3144,
      y: 140
    },
    {
      id: "collectible-19-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3214,
      y: 193
    },
    {
      id: "collectible-19-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3284,
      y: 246
    },
    {
      id: "collectible-19-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3354,
      y: 266
    },
    {
      id: "collectible-19-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3424,
      y: 319
    },
    {
      id: "collectible-19-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3494,
      y: 372
    },
    {
      id: "collectible-19-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3564,
      y: 392
    },
    {
      id: "collectible-19-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3634,
      y: 151
    },
    {
      id: "collectible-19-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3704,
      y: 204
    },
    {
      id: "collectible-19-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3774,
      y: 224
    },
    {
      id: "collectible-19-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3844,
      y: 277
    },
    {
      id: "collectible-19-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3914,
      y: 330
    },
    {
      id: "collectible-19-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3984,
      y: 350
    },
    {
      id: "collectible-19-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4054,
      y: 403
    },
    {
      id: "collectible-19-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4124,
      y: 162
    },
    {
      id: "collectible-19-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4194,
      y: 182
    },
    {
      id: "collectible-19-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4264,
      y: 235
    },
    {
      id: "collectible-19-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4334,
      y: 288
    },
    {
      id: "collectible-19-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4404,
      y: 308
    },
    {
      id: "collectible-19-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4474,
      y: 361
    }
  ],
  powerups: [
    {
      id: "powerup-19-1",
      kind: "starburst",
      durationMs: 4800,
      x: 500,
      y: 130
    },
    {
      id: "powerup-19-2",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 1330,
      y: 182
    },
    {
      id: "powerup-19-3",
      kind: "shield",
      durationMs: 6600,
      x: 2160,
      y: 234
    },
    {
      id: "powerup-19-4",
      kind: "springBoots",
      durationMs: 7500,
      x: 2990,
      y: 286
    },
    {
      id: "powerup-19-5",
      kind: "starburst",
      durationMs: 4800,
      x: 3820,
      y: 338
    },
    {
      id: "powerup-19-6",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 4650,
      y: 130
    },
    {
      id: "powerup-19-7",
      kind: "shield",
      durationMs: 6600,
      x: 5480,
      y: 182
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-19-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 1.8
    },
    {
      id: "moving-platform-19-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 2.5
    },
    {
      id: "moving-platform-19-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 3.2
    },
    {
      id: "moving-platform-19-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 3.8999999999999995
    },
    {
      id: "moving-platform-19-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 4.6
    },
    {
      id: "moving-platform-19-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 5.3
    },
    {
      id: "moving-platform-19-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 5.999999999999999
    },
    {
      id: "moving-platform-19-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 6.699999999999999
    },
    {
      id: "moving-platform-19-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 7.3999999999999995
    },
    {
      id: "moving-platform-19-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 8.1
    }
  ],
  hazards: [
    {
      id: "hazard-19-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 18
    },
    {
      id: "hazard-19-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 19
    },
    {
      id: "hazard-19-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 20
    },
    {
      id: "hazard-19-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 21
    },
    {
      id: "hazard-19-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 22
    },
    {
      id: "hazard-19-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 23
    },
    {
      id: "hazard-19-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 24
    },
    {
      id: "hazard-19-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 25
    },
    {
      id: "hazard-19-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 26
    },
    {
      id: "hazard-19-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 27
    },
    {
      id: "hazard-19-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 28
    },
    {
      id: "hazard-19-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 29
    },
    {
      id: "hazard-19-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 30
    },
    {
      id: "hazard-19-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 31
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-19-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-19-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-19-1",
      x: 640,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-19-2",
      x: 1410,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-19-3",
      x: 2180,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-19-4",
      x: 2950,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-19-5",
      x: 3720,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-19-6",
      x: 4490,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-19-7",
      x: 5260,
      y: 416,
      power: 1.1
    }
  ],
  windZones: [
    {
      id: "wind-19-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-19-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-19-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-19-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-19-5",
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
      id: "decor-19-1",
      layer: "near",
      motif: "gear",
      x: 414,
      y: 266,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-2",
      layer: "far",
      motif: "vine",
      x: 511,
      y: 307,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-3",
      layer: "mid",
      motif: "glassBerry",
      x: 608,
      y: 348,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-4",
      layer: "far",
      motif: "cloud",
      x: 705,
      y: 389,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-5",
      layer: "mid",
      motif: "windmill",
      x: 802,
      y: 430,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-6",
      layer: "near",
      motif: "grass",
      x: 899,
      y: 41,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-7",
      layer: "mid",
      motif: "gear",
      x: 996,
      y: 82,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-8",
      layer: "far",
      motif: "vine",
      x: 1093,
      y: 123,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-9",
      layer: "mid",
      motif: "glassBerry",
      x: 1190,
      y: 164,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-10",
      layer: "far",
      motif: "cloud",
      x: 1287,
      y: 205,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-11",
      layer: "near",
      motif: "windmill",
      x: 1384,
      y: 246,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-12",
      layer: "far",
      motif: "grass",
      x: 1481,
      y: 287,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-13",
      layer: "mid",
      motif: "gear",
      x: 1578,
      y: 328,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-14",
      layer: "far",
      motif: "vine",
      x: 1675,
      y: 369,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-15",
      layer: "mid",
      motif: "glassBerry",
      x: 1772,
      y: 410,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-16",
      layer: "near",
      motif: "cloud",
      x: 1869,
      y: 451,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-17",
      layer: "mid",
      motif: "windmill",
      x: 1966,
      y: 62,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-18",
      layer: "far",
      motif: "grass",
      x: 2063,
      y: 103,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-19",
      layer: "mid",
      motif: "gear",
      x: 2160,
      y: 144,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-20",
      layer: "far",
      motif: "vine",
      x: 2257,
      y: 185,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-21",
      layer: "near",
      motif: "glassBerry",
      x: 2354,
      y: 226,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-22",
      layer: "far",
      motif: "cloud",
      x: 2451,
      y: 267,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-23",
      layer: "mid",
      motif: "windmill",
      x: 2548,
      y: 308,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-24",
      layer: "far",
      motif: "grass",
      x: 2645,
      y: 349,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-25",
      layer: "mid",
      motif: "gear",
      x: 2742,
      y: 390,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-26",
      layer: "near",
      motif: "vine",
      x: 2839,
      y: 431,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-27",
      layer: "mid",
      motif: "glassBerry",
      x: 2936,
      y: 42,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-28",
      layer: "far",
      motif: "cloud",
      x: 3033,
      y: 83,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-29",
      layer: "mid",
      motif: "windmill",
      x: 3130,
      y: 124,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-30",
      layer: "far",
      motif: "grass",
      x: 3227,
      y: 165,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-31",
      layer: "near",
      motif: "gear",
      x: 3324,
      y: 206,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-32",
      layer: "far",
      motif: "vine",
      x: 3421,
      y: 247,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-33",
      layer: "mid",
      motif: "glassBerry",
      x: 3518,
      y: 288,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-34",
      layer: "far",
      motif: "cloud",
      x: 3615,
      y: 329,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-35",
      layer: "mid",
      motif: "windmill",
      x: 3712,
      y: 370,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-36",
      layer: "near",
      motif: "grass",
      x: 3809,
      y: 411,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-37",
      layer: "mid",
      motif: "gear",
      x: 3906,
      y: 452,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-38",
      layer: "far",
      motif: "vine",
      x: 4003,
      y: 63,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-39",
      layer: "mid",
      motif: "glassBerry",
      x: 4100,
      y: 104,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-40",
      layer: "far",
      motif: "cloud",
      x: 4197,
      y: 145,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-41",
      layer: "near",
      motif: "windmill",
      x: 4294,
      y: 186,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-42",
      layer: "far",
      motif: "grass",
      x: 4391,
      y: 227,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-43",
      layer: "mid",
      motif: "gear",
      x: 4488,
      y: 268,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-44",
      layer: "far",
      motif: "vine",
      x: 4585,
      y: 309,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-45",
      layer: "mid",
      motif: "glassBerry",
      x: 4682,
      y: 350,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-46",
      layer: "near",
      motif: "cloud",
      x: 4779,
      y: 391,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-47",
      layer: "mid",
      motif: "windmill",
      x: 4876,
      y: 432,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-48",
      layer: "far",
      motif: "grass",
      x: 45,
      y: 43,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-49",
      layer: "mid",
      motif: "gear",
      x: 142,
      y: 84,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-50",
      layer: "far",
      motif: "vine",
      x: 239,
      y: 125,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-51",
      layer: "near",
      motif: "glassBerry",
      x: 336,
      y: 166,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-52",
      layer: "far",
      motif: "cloud",
      x: 433,
      y: 207,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-53",
      layer: "mid",
      motif: "windmill",
      x: 530,
      y: 248,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-54",
      layer: "far",
      motif: "grass",
      x: 627,
      y: 289,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-55",
      layer: "mid",
      motif: "gear",
      x: 724,
      y: 330,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-56",
      layer: "near",
      motif: "vine",
      x: 821,
      y: 371,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-57",
      layer: "mid",
      motif: "glassBerry",
      x: 918,
      y: 412,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-58",
      layer: "far",
      motif: "cloud",
      x: 1015,
      y: 453,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-59",
      layer: "mid",
      motif: "windmill",
      x: 1112,
      y: 64,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-60",
      layer: "far",
      motif: "grass",
      x: 1209,
      y: 105,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-61",
      layer: "near",
      motif: "gear",
      x: 1306,
      y: 146,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-62",
      layer: "far",
      motif: "vine",
      x: 1403,
      y: 187,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-63",
      layer: "mid",
      motif: "glassBerry",
      x: 1500,
      y: 228,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-64",
      layer: "far",
      motif: "cloud",
      x: 1597,
      y: 269,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-65",
      layer: "mid",
      motif: "windmill",
      x: 1694,
      y: 310,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-66",
      layer: "near",
      motif: "grass",
      x: 1791,
      y: 351,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-67",
      layer: "mid",
      motif: "gear",
      x: 1888,
      y: 392,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-68",
      layer: "far",
      motif: "vine",
      x: 1985,
      y: 433,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-69",
      layer: "mid",
      motif: "glassBerry",
      x: 2082,
      y: 44,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-70",
      layer: "far",
      motif: "cloud",
      x: 2179,
      y: 85,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-71",
      layer: "near",
      motif: "windmill",
      x: 2276,
      y: 126,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-72",
      layer: "far",
      motif: "grass",
      x: 2373,
      y: 167,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-73",
      layer: "mid",
      motif: "gear",
      x: 2470,
      y: 208,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-74",
      layer: "far",
      motif: "vine",
      x: 2567,
      y: 249,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-75",
      layer: "mid",
      motif: "glassBerry",
      x: 2664,
      y: 290,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-76",
      layer: "near",
      motif: "cloud",
      x: 2761,
      y: 331,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-77",
      layer: "mid",
      motif: "windmill",
      x: 2858,
      y: 372,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-78",
      layer: "far",
      motif: "grass",
      x: 2955,
      y: 413,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-79",
      layer: "mid",
      motif: "gear",
      x: 3052,
      y: 454,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-80",
      layer: "far",
      motif: "vine",
      x: 3149,
      y: 65,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-81",
      layer: "near",
      motif: "glassBerry",
      x: 3246,
      y: 106,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-82",
      layer: "far",
      motif: "cloud",
      x: 3343,
      y: 147,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-83",
      layer: "mid",
      motif: "windmill",
      x: 3440,
      y: 188,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-84",
      layer: "far",
      motif: "grass",
      x: 3537,
      y: 229,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-85",
      layer: "mid",
      motif: "gear",
      x: 3634,
      y: 270,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-86",
      layer: "near",
      motif: "vine",
      x: 3731,
      y: 311,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-87",
      layer: "mid",
      motif: "glassBerry",
      x: 3828,
      y: 352,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-88",
      layer: "far",
      motif: "cloud",
      x: 3925,
      y: 393,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-89",
      layer: "mid",
      motif: "windmill",
      x: 4022,
      y: 434,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-90",
      layer: "far",
      motif: "grass",
      x: 4119,
      y: 45,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-91",
      layer: "near",
      motif: "gear",
      x: 4216,
      y: 86,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-92",
      layer: "far",
      motif: "vine",
      x: 4313,
      y: 127,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-93",
      layer: "mid",
      motif: "glassBerry",
      x: 4410,
      y: 168,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-94",
      layer: "far",
      motif: "cloud",
      x: 4507,
      y: 209,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-95",
      layer: "mid",
      motif: "windmill",
      x: 4604,
      y: 250,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-96",
      layer: "near",
      motif: "grass",
      x: 4701,
      y: 291,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-97",
      layer: "mid",
      motif: "gear",
      x: 4798,
      y: 332,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-98",
      layer: "far",
      motif: "vine",
      x: 4895,
      y: 373,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-99",
      layer: "mid",
      motif: "glassBerry",
      x: 64,
      y: 414,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-100",
      layer: "far",
      motif: "cloud",
      x: 161,
      y: 455,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-101",
      layer: "near",
      motif: "windmill",
      x: 258,
      y: 66,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-102",
      layer: "far",
      motif: "grass",
      x: 355,
      y: 107,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-103",
      layer: "mid",
      motif: "gear",
      x: 452,
      y: 148,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-104",
      layer: "far",
      motif: "vine",
      x: 549,
      y: 189,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-105",
      layer: "mid",
      motif: "glassBerry",
      x: 646,
      y: 230,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-106",
      layer: "near",
      motif: "cloud",
      x: 743,
      y: 271,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-107",
      layer: "mid",
      motif: "windmill",
      x: 840,
      y: 312,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-108",
      layer: "far",
      motif: "grass",
      x: 937,
      y: 353,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-109",
      layer: "mid",
      motif: "gear",
      x: 1034,
      y: 394,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-110",
      layer: "far",
      motif: "vine",
      x: 1131,
      y: 435,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-111",
      layer: "near",
      motif: "glassBerry",
      x: 1228,
      y: 46,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-112",
      layer: "far",
      motif: "cloud",
      x: 1325,
      y: 87,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-113",
      layer: "mid",
      motif: "windmill",
      x: 1422,
      y: 128,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-114",
      layer: "far",
      motif: "grass",
      x: 1519,
      y: 169,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-115",
      layer: "mid",
      motif: "gear",
      x: 1616,
      y: 210,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-116",
      layer: "near",
      motif: "vine",
      x: 1713,
      y: 251,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-117",
      layer: "mid",
      motif: "glassBerry",
      x: 1810,
      y: 292,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-118",
      layer: "far",
      motif: "cloud",
      x: 1907,
      y: 333,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-119",
      layer: "mid",
      motif: "windmill",
      x: 2004,
      y: 374,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-120",
      layer: "far",
      motif: "grass",
      x: 2101,
      y: 415,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-121",
      layer: "near",
      motif: "gear",
      x: 2198,
      y: 456,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-122",
      layer: "far",
      motif: "vine",
      x: 2295,
      y: 67,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-123",
      layer: "mid",
      motif: "glassBerry",
      x: 2392,
      y: 108,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-124",
      layer: "far",
      motif: "cloud",
      x: 2489,
      y: 149,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-125",
      layer: "mid",
      motif: "windmill",
      x: 2586,
      y: 190,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-126",
      layer: "near",
      motif: "grass",
      x: 2683,
      y: 231,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-127",
      layer: "mid",
      motif: "gear",
      x: 2780,
      y: 272,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-128",
      layer: "far",
      motif: "vine",
      x: 2877,
      y: 313,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-129",
      layer: "mid",
      motif: "glassBerry",
      x: 2974,
      y: 354,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-130",
      layer: "far",
      motif: "cloud",
      x: 3071,
      y: 395,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-131",
      layer: "near",
      motif: "windmill",
      x: 3168,
      y: 436,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-132",
      layer: "far",
      motif: "grass",
      x: 3265,
      y: 47,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-133",
      layer: "mid",
      motif: "gear",
      x: 3362,
      y: 88,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-134",
      layer: "far",
      motif: "vine",
      x: 3459,
      y: 129,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-135",
      layer: "mid",
      motif: "glassBerry",
      x: 3556,
      y: 170,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-136",
      layer: "near",
      motif: "cloud",
      x: 3653,
      y: 211,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-137",
      layer: "mid",
      motif: "windmill",
      x: 3750,
      y: 252,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-138",
      layer: "far",
      motif: "grass",
      x: 3847,
      y: 293,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-139",
      layer: "mid",
      motif: "gear",
      x: 3944,
      y: 334,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-140",
      layer: "far",
      motif: "vine",
      x: 4041,
      y: 375,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-141",
      layer: "near",
      motif: "glassBerry",
      x: 4138,
      y: 416,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-142",
      layer: "far",
      motif: "cloud",
      x: 4235,
      y: 457,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-143",
      layer: "mid",
      motif: "windmill",
      x: 4332,
      y: 68,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-144",
      layer: "far",
      motif: "grass",
      x: 4429,
      y: 109,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-145",
      layer: "mid",
      motif: "gear",
      x: 4526,
      y: 150,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-146",
      layer: "near",
      motif: "vine",
      x: 4623,
      y: 191,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-147",
      layer: "mid",
      motif: "glassBerry",
      x: 4720,
      y: 232,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-148",
      layer: "far",
      motif: "cloud",
      x: 4817,
      y: 273,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-149",
      layer: "mid",
      motif: "windmill",
      x: 4914,
      y: 314,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-150",
      layer: "far",
      motif: "grass",
      x: 83,
      y: 355,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-151",
      layer: "near",
      motif: "gear",
      x: 180,
      y: 396,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-152",
      layer: "far",
      motif: "vine",
      x: 277,
      y: 437,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-153",
      layer: "mid",
      motif: "glassBerry",
      x: 374,
      y: 48,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-154",
      layer: "far",
      motif: "cloud",
      x: 471,
      y: 89,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-155",
      layer: "mid",
      motif: "windmill",
      x: 568,
      y: 130,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-156",
      layer: "near",
      motif: "grass",
      x: 665,
      y: 171,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-157",
      layer: "mid",
      motif: "gear",
      x: 762,
      y: 212,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-158",
      layer: "far",
      motif: "vine",
      x: 859,
      y: 253,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-159",
      layer: "mid",
      motif: "glassBerry",
      x: 956,
      y: 294,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-160",
      layer: "far",
      motif: "cloud",
      x: 1053,
      y: 335,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-161",
      layer: "near",
      motif: "windmill",
      x: 1150,
      y: 376,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-162",
      layer: "far",
      motif: "grass",
      x: 1247,
      y: 417,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-163",
      layer: "mid",
      motif: "gear",
      x: 1344,
      y: 458,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-164",
      layer: "far",
      motif: "vine",
      x: 1441,
      y: 69,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-165",
      layer: "mid",
      motif: "glassBerry",
      x: 1538,
      y: 110,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-166",
      layer: "near",
      motif: "cloud",
      x: 1635,
      y: 151,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-167",
      layer: "mid",
      motif: "windmill",
      x: 1732,
      y: 192,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-168",
      layer: "far",
      motif: "grass",
      x: 1829,
      y: 233,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-169",
      layer: "mid",
      motif: "gear",
      x: 1926,
      y: 274,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-170",
      layer: "far",
      motif: "vine",
      x: 2023,
      y: 315,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-19-171",
      layer: "near",
      motif: "glassBerry",
      x: 2120,
      y: 356,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-172",
      layer: "far",
      motif: "cloud",
      x: 2217,
      y: 397,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-19-173",
      layer: "mid",
      motif: "windmill",
      x: 2314,
      y: 438,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-19-174",
      layer: "far",
      motif: "grass",
      x: 2411,
      y: 49,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-19-175",
      layer: "mid",
      motif: "gear",
      x: 2508,
      y: 90,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-19-176",
      layer: "near",
      motif: "vine",
      x: 2605,
      y: 131,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-19-177",
      layer: "mid",
      motif: "glassBerry",
      x: 2702,
      y: 172,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-19-178",
      layer: "far",
      motif: "cloud",
      x: 2799,
      y: 213,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-19-179",
      layer: "mid",
      motif: "windmill",
      x: 2896,
      y: 254,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-19-180",
      layer: "far",
      motif: "grass",
      x: 2993,
      y: 295,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-19",
    x: 4736,
    y: 448,
    nextLevelId: "level-20"
  }
};
