import type { LevelDefinition } from "../schema";

export const LEVEL_11: LevelDefinition = {
  id: "level-11",
  index: 10,
  title: "Glassberry Lift 04",
  chapter: "Glassberry Lift",
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
    ".................####..........................#####.........................######........................#######.......................###..............",
    "............===...........................====..........................=====.........................======........................=======...............",
    ".....................................###...........................####..........................#####.........................######.....................",
    "................................#######.......................###...........................####..........................#####...........................",
    "...........................======........................=======.......................===...........................====.................................",
    "......................#####..................W......######.......................W#######.......................###..W........................####........",
    "....................................S...................................S...................................S.............................................",
    "...P.......................W...................................W...................................W...................................W............G.....",
    "..................S...................................S...................................S...................................S...........................",
    "^################^...#############^#...############^##...###########^###...##########^####...#########^#####...########^######...#######^################^",
    "##################^.^###############^.^###############^.^###############^.^###############^.^###############^.^###############^.^#########################"
  ],
  enemies: [
    {
      id: "enemy-11-1",
      kind: "spiker",
      x: 420,
      y: 448,
      patrolMin: 325,
      patrolMax: 540,
      speed: 92,
      phase: 10
    },
    {
      id: "enemy-11-2",
      kind: "turret",
      x: 750,
      y: 416,
      patrolMin: 637,
      patrolMax: 892,
      speed: 104,
      phase: 13
    },
    {
      id: "enemy-11-3",
      kind: "beetle",
      x: 1080,
      y: 384,
      patrolMin: 949,
      patrolMax: 1244,
      speed: 44,
      phase: 16
    },
    {
      id: "enemy-11-4",
      kind: "acorn",
      x: 1410,
      y: 352,
      patrolMin: 1261,
      patrolMax: 1596,
      speed: 56,
      phase: 19
    },
    {
      id: "enemy-11-5",
      kind: "lantern",
      x: 1740,
      y: 320,
      patrolMin: 1645,
      patrolMax: 1948,
      speed: 68,
      phase: 22
    },
    {
      id: "enemy-11-6",
      kind: "charger",
      x: 2070,
      y: 448,
      patrolMin: 1957,
      patrolMax: 2190,
      speed: 80,
      phase: 25
    },
    {
      id: "enemy-11-7",
      kind: "spiker",
      x: 2400,
      y: 416,
      patrolMin: 2269,
      patrolMax: 2542,
      speed: 92,
      phase: 28
    },
    {
      id: "enemy-11-8",
      kind: "turret",
      x: 2730,
      y: 384,
      patrolMin: 2581,
      patrolMax: 2894,
      speed: 104,
      phase: 31
    },
    {
      id: "enemy-11-9",
      kind: "beetle",
      x: 3060,
      y: 352,
      patrolMin: 2965,
      patrolMax: 3246,
      speed: 44,
      phase: 34
    },
    {
      id: "enemy-11-10",
      kind: "acorn",
      x: 3390,
      y: 320,
      patrolMin: 3277,
      patrolMax: 3598,
      speed: 56,
      phase: 37
    },
    {
      id: "enemy-11-11",
      kind: "lantern",
      x: 3720,
      y: 448,
      patrolMin: 3589,
      patrolMax: 3840,
      speed: 68,
      phase: 40
    },
    {
      id: "enemy-11-12",
      kind: "charger",
      x: 4050,
      y: 416,
      patrolMin: 3901,
      patrolMax: 4192,
      speed: 80,
      phase: 43
    },
    {
      id: "enemy-11-13",
      kind: "spiker",
      x: 4380,
      y: 384,
      patrolMin: 4285,
      patrolMax: 4544,
      speed: 92,
      phase: 46
    },
    {
      id: "enemy-11-14",
      kind: "turret",
      x: 4710,
      y: 352,
      patrolMin: 4597,
      patrolMax: 4748,
      speed: 104,
      phase: 49
    }
  ],
  collectibles: [
    {
      id: "collectible-11-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 204,
      y: 151
    },
    {
      id: "collectible-11-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 274,
      y: 204
    },
    {
      id: "collectible-11-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 344,
      y: 224
    },
    {
      id: "collectible-11-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 414,
      y: 277
    },
    {
      id: "collectible-11-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 484,
      y: 330
    },
    {
      id: "collectible-11-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 554,
      y: 350
    },
    {
      id: "collectible-11-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 624,
      y: 403
    },
    {
      id: "collectible-11-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 694,
      y: 162
    },
    {
      id: "collectible-11-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 764,
      y: 182
    },
    {
      id: "collectible-11-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 834,
      y: 235
    },
    {
      id: "collectible-11-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 904,
      y: 288
    },
    {
      id: "collectible-11-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 974,
      y: 308
    },
    {
      id: "collectible-11-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1044,
      y: 361
    },
    {
      id: "collectible-11-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1114,
      y: 414
    },
    {
      id: "collectible-11-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1184,
      y: 140
    },
    {
      id: "collectible-11-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1254,
      y: 193
    },
    {
      id: "collectible-11-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1324,
      y: 246
    },
    {
      id: "collectible-11-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1394,
      y: 266
    },
    {
      id: "collectible-11-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1464,
      y: 319
    },
    {
      id: "collectible-11-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1534,
      y: 372
    },
    {
      id: "collectible-11-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1604,
      y: 392
    },
    {
      id: "collectible-11-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1674,
      y: 151
    },
    {
      id: "collectible-11-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1744,
      y: 204
    },
    {
      id: "collectible-11-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1814,
      y: 224
    },
    {
      id: "collectible-11-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1884,
      y: 277
    },
    {
      id: "collectible-11-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1954,
      y: 330
    },
    {
      id: "collectible-11-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2024,
      y: 350
    },
    {
      id: "collectible-11-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2094,
      y: 403
    },
    {
      id: "collectible-11-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2164,
      y: 162
    },
    {
      id: "collectible-11-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2234,
      y: 182
    },
    {
      id: "collectible-11-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2304,
      y: 235
    },
    {
      id: "collectible-11-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2374,
      y: 288
    },
    {
      id: "collectible-11-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2444,
      y: 308
    },
    {
      id: "collectible-11-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2514,
      y: 361
    },
    {
      id: "collectible-11-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2584,
      y: 414
    },
    {
      id: "collectible-11-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2654,
      y: 140
    },
    {
      id: "collectible-11-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2724,
      y: 193
    },
    {
      id: "collectible-11-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2794,
      y: 246
    },
    {
      id: "collectible-11-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2864,
      y: 266
    },
    {
      id: "collectible-11-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2934,
      y: 319
    },
    {
      id: "collectible-11-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3004,
      y: 372
    },
    {
      id: "collectible-11-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3074,
      y: 392
    },
    {
      id: "collectible-11-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3144,
      y: 151
    },
    {
      id: "collectible-11-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3214,
      y: 204
    },
    {
      id: "collectible-11-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3284,
      y: 224
    },
    {
      id: "collectible-11-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3354,
      y: 277
    },
    {
      id: "collectible-11-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3424,
      y: 330
    },
    {
      id: "collectible-11-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3494,
      y: 350
    },
    {
      id: "collectible-11-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3564,
      y: 403
    },
    {
      id: "collectible-11-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3634,
      y: 162
    },
    {
      id: "collectible-11-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3704,
      y: 182
    },
    {
      id: "collectible-11-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3774,
      y: 235
    },
    {
      id: "collectible-11-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3844,
      y: 288
    },
    {
      id: "collectible-11-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3914,
      y: 308
    },
    {
      id: "collectible-11-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3984,
      y: 361
    },
    {
      id: "collectible-11-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4054,
      y: 414
    },
    {
      id: "collectible-11-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4124,
      y: 140
    },
    {
      id: "collectible-11-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4194,
      y: 193
    },
    {
      id: "collectible-11-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4264,
      y: 246
    },
    {
      id: "collectible-11-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4334,
      y: 266
    },
    {
      id: "collectible-11-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4404,
      y: 319
    },
    {
      id: "collectible-11-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4474,
      y: 372
    },
    {
      id: "collectible-11-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4544,
      y: 392
    },
    {
      id: "collectible-11-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4614,
      y: 151
    },
    {
      id: "collectible-11-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4684,
      y: 204
    },
    {
      id: "collectible-11-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4754,
      y: 224
    }
  ],
  powerups: [
    {
      id: "powerup-11-1",
      kind: "starburst",
      durationMs: 4800,
      x: 620,
      y: 130
    },
    {
      id: "powerup-11-2",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 1450,
      y: 182
    },
    {
      id: "powerup-11-3",
      kind: "shield",
      durationMs: 6600,
      x: 2280,
      y: 234
    },
    {
      id: "powerup-11-4",
      kind: "springBoots",
      durationMs: 7500,
      x: 3110,
      y: 286
    },
    {
      id: "powerup-11-5",
      kind: "starburst",
      durationMs: 4800,
      x: 3940,
      y: 338
    },
    {
      id: "powerup-11-6",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 4770,
      y: 130
    },
    {
      id: "powerup-11-7",
      kind: "shield",
      durationMs: 6600,
      x: 5600,
      y: 182
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-11-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 1
    },
    {
      id: "moving-platform-11-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 1.7
    },
    {
      id: "moving-platform-11-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 2.4
    },
    {
      id: "moving-platform-11-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 3.0999999999999996
    },
    {
      id: "moving-platform-11-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 3.8
    },
    {
      id: "moving-platform-11-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 4.5
    },
    {
      id: "moving-platform-11-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 5.199999999999999
    }
  ],
  hazards: [
    {
      id: "hazard-11-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 10
    },
    {
      id: "hazard-11-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 11
    },
    {
      id: "hazard-11-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 12
    },
    {
      id: "hazard-11-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 13
    },
    {
      id: "hazard-11-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 14
    },
    {
      id: "hazard-11-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 15
    },
    {
      id: "hazard-11-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 16
    },
    {
      id: "hazard-11-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 17
    },
    {
      id: "hazard-11-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 18
    },
    {
      id: "hazard-11-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 19
    },
    {
      id: "hazard-11-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 20
    },
    {
      id: "hazard-11-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 21
    },
    {
      id: "hazard-11-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 22
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-11-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-11-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-11-1",
      x: 674,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-11-2",
      x: 1444,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-11-3",
      x: 2214,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-11-4",
      x: 2984,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-11-5",
      x: 3754,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-11-6",
      x: 4524,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-11-7",
      x: 5294,
      y: 416,
      power: 1.1
    }
  ],
  windZones: [
    {
      id: "wind-11-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-11-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-11-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-11-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-11-5",
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
      id: "decor-11-1",
      layer: "near",
      motif: "windmill",
      x: 230,
      y: 162,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-2",
      layer: "far",
      motif: "grass",
      x: 327,
      y: 203,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-3",
      layer: "mid",
      motif: "gear",
      x: 424,
      y: 244,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-4",
      layer: "far",
      motif: "vine",
      x: 521,
      y: 285,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-5",
      layer: "mid",
      motif: "glassBerry",
      x: 618,
      y: 326,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-6",
      layer: "near",
      motif: "cloud",
      x: 715,
      y: 367,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-7",
      layer: "mid",
      motif: "windmill",
      x: 812,
      y: 408,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-8",
      layer: "far",
      motif: "grass",
      x: 909,
      y: 449,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-9",
      layer: "mid",
      motif: "gear",
      x: 1006,
      y: 60,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-10",
      layer: "far",
      motif: "vine",
      x: 1103,
      y: 101,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-11",
      layer: "near",
      motif: "glassBerry",
      x: 1200,
      y: 142,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-12",
      layer: "far",
      motif: "cloud",
      x: 1297,
      y: 183,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-13",
      layer: "mid",
      motif: "windmill",
      x: 1394,
      y: 224,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-14",
      layer: "far",
      motif: "grass",
      x: 1491,
      y: 265,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-15",
      layer: "mid",
      motif: "gear",
      x: 1588,
      y: 306,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-16",
      layer: "near",
      motif: "vine",
      x: 1685,
      y: 347,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-17",
      layer: "mid",
      motif: "glassBerry",
      x: 1782,
      y: 388,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-18",
      layer: "far",
      motif: "cloud",
      x: 1879,
      y: 429,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-19",
      layer: "mid",
      motif: "windmill",
      x: 1976,
      y: 40,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-20",
      layer: "far",
      motif: "grass",
      x: 2073,
      y: 81,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-21",
      layer: "near",
      motif: "gear",
      x: 2170,
      y: 122,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-22",
      layer: "far",
      motif: "vine",
      x: 2267,
      y: 163,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-23",
      layer: "mid",
      motif: "glassBerry",
      x: 2364,
      y: 204,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-24",
      layer: "far",
      motif: "cloud",
      x: 2461,
      y: 245,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-25",
      layer: "mid",
      motif: "windmill",
      x: 2558,
      y: 286,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-26",
      layer: "near",
      motif: "grass",
      x: 2655,
      y: 327,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-27",
      layer: "mid",
      motif: "gear",
      x: 2752,
      y: 368,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-28",
      layer: "far",
      motif: "vine",
      x: 2849,
      y: 409,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-29",
      layer: "mid",
      motif: "glassBerry",
      x: 2946,
      y: 450,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-30",
      layer: "far",
      motif: "cloud",
      x: 3043,
      y: 61,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-31",
      layer: "near",
      motif: "windmill",
      x: 3140,
      y: 102,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-32",
      layer: "far",
      motif: "grass",
      x: 3237,
      y: 143,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-33",
      layer: "mid",
      motif: "gear",
      x: 3334,
      y: 184,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-34",
      layer: "far",
      motif: "vine",
      x: 3431,
      y: 225,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-35",
      layer: "mid",
      motif: "glassBerry",
      x: 3528,
      y: 266,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-36",
      layer: "near",
      motif: "cloud",
      x: 3625,
      y: 307,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-37",
      layer: "mid",
      motif: "windmill",
      x: 3722,
      y: 348,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-38",
      layer: "far",
      motif: "grass",
      x: 3819,
      y: 389,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-39",
      layer: "mid",
      motif: "gear",
      x: 3916,
      y: 430,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-40",
      layer: "far",
      motif: "vine",
      x: 4013,
      y: 41,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-41",
      layer: "near",
      motif: "glassBerry",
      x: 4110,
      y: 82,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-42",
      layer: "far",
      motif: "cloud",
      x: 4207,
      y: 123,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-43",
      layer: "mid",
      motif: "windmill",
      x: 4304,
      y: 164,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-44",
      layer: "far",
      motif: "grass",
      x: 4401,
      y: 205,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-45",
      layer: "mid",
      motif: "gear",
      x: 4498,
      y: 246,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-46",
      layer: "near",
      motif: "vine",
      x: 4595,
      y: 287,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-47",
      layer: "mid",
      motif: "glassBerry",
      x: 4692,
      y: 328,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-48",
      layer: "far",
      motif: "cloud",
      x: 4789,
      y: 369,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-49",
      layer: "mid",
      motif: "windmill",
      x: 4886,
      y: 410,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-50",
      layer: "far",
      motif: "grass",
      x: 55,
      y: 451,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-51",
      layer: "near",
      motif: "gear",
      x: 152,
      y: 62,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-52",
      layer: "far",
      motif: "vine",
      x: 249,
      y: 103,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-53",
      layer: "mid",
      motif: "glassBerry",
      x: 346,
      y: 144,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-54",
      layer: "far",
      motif: "cloud",
      x: 443,
      y: 185,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-55",
      layer: "mid",
      motif: "windmill",
      x: 540,
      y: 226,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-56",
      layer: "near",
      motif: "grass",
      x: 637,
      y: 267,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-57",
      layer: "mid",
      motif: "gear",
      x: 734,
      y: 308,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-58",
      layer: "far",
      motif: "vine",
      x: 831,
      y: 349,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-59",
      layer: "mid",
      motif: "glassBerry",
      x: 928,
      y: 390,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-60",
      layer: "far",
      motif: "cloud",
      x: 1025,
      y: 431,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-61",
      layer: "near",
      motif: "windmill",
      x: 1122,
      y: 42,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-62",
      layer: "far",
      motif: "grass",
      x: 1219,
      y: 83,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-63",
      layer: "mid",
      motif: "gear",
      x: 1316,
      y: 124,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-64",
      layer: "far",
      motif: "vine",
      x: 1413,
      y: 165,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-65",
      layer: "mid",
      motif: "glassBerry",
      x: 1510,
      y: 206,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-66",
      layer: "near",
      motif: "cloud",
      x: 1607,
      y: 247,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-67",
      layer: "mid",
      motif: "windmill",
      x: 1704,
      y: 288,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-68",
      layer: "far",
      motif: "grass",
      x: 1801,
      y: 329,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-69",
      layer: "mid",
      motif: "gear",
      x: 1898,
      y: 370,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-70",
      layer: "far",
      motif: "vine",
      x: 1995,
      y: 411,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-71",
      layer: "near",
      motif: "glassBerry",
      x: 2092,
      y: 452,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-72",
      layer: "far",
      motif: "cloud",
      x: 2189,
      y: 63,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-73",
      layer: "mid",
      motif: "windmill",
      x: 2286,
      y: 104,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-74",
      layer: "far",
      motif: "grass",
      x: 2383,
      y: 145,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-75",
      layer: "mid",
      motif: "gear",
      x: 2480,
      y: 186,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-76",
      layer: "near",
      motif: "vine",
      x: 2577,
      y: 227,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-77",
      layer: "mid",
      motif: "glassBerry",
      x: 2674,
      y: 268,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-78",
      layer: "far",
      motif: "cloud",
      x: 2771,
      y: 309,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-79",
      layer: "mid",
      motif: "windmill",
      x: 2868,
      y: 350,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-80",
      layer: "far",
      motif: "grass",
      x: 2965,
      y: 391,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-81",
      layer: "near",
      motif: "gear",
      x: 3062,
      y: 432,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-82",
      layer: "far",
      motif: "vine",
      x: 3159,
      y: 43,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-83",
      layer: "mid",
      motif: "glassBerry",
      x: 3256,
      y: 84,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-84",
      layer: "far",
      motif: "cloud",
      x: 3353,
      y: 125,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-85",
      layer: "mid",
      motif: "windmill",
      x: 3450,
      y: 166,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-86",
      layer: "near",
      motif: "grass",
      x: 3547,
      y: 207,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-87",
      layer: "mid",
      motif: "gear",
      x: 3644,
      y: 248,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-88",
      layer: "far",
      motif: "vine",
      x: 3741,
      y: 289,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-89",
      layer: "mid",
      motif: "glassBerry",
      x: 3838,
      y: 330,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-90",
      layer: "far",
      motif: "cloud",
      x: 3935,
      y: 371,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-91",
      layer: "near",
      motif: "windmill",
      x: 4032,
      y: 412,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-92",
      layer: "far",
      motif: "grass",
      x: 4129,
      y: 453,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-93",
      layer: "mid",
      motif: "gear",
      x: 4226,
      y: 64,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-94",
      layer: "far",
      motif: "vine",
      x: 4323,
      y: 105,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-95",
      layer: "mid",
      motif: "glassBerry",
      x: 4420,
      y: 146,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-96",
      layer: "near",
      motif: "cloud",
      x: 4517,
      y: 187,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-97",
      layer: "mid",
      motif: "windmill",
      x: 4614,
      y: 228,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-98",
      layer: "far",
      motif: "grass",
      x: 4711,
      y: 269,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-99",
      layer: "mid",
      motif: "gear",
      x: 4808,
      y: 310,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-100",
      layer: "far",
      motif: "vine",
      x: 4905,
      y: 351,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-101",
      layer: "near",
      motif: "glassBerry",
      x: 74,
      y: 392,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-102",
      layer: "far",
      motif: "cloud",
      x: 171,
      y: 433,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-103",
      layer: "mid",
      motif: "windmill",
      x: 268,
      y: 44,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-104",
      layer: "far",
      motif: "grass",
      x: 365,
      y: 85,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-105",
      layer: "mid",
      motif: "gear",
      x: 462,
      y: 126,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-106",
      layer: "near",
      motif: "vine",
      x: 559,
      y: 167,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-107",
      layer: "mid",
      motif: "glassBerry",
      x: 656,
      y: 208,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-108",
      layer: "far",
      motif: "cloud",
      x: 753,
      y: 249,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-109",
      layer: "mid",
      motif: "windmill",
      x: 850,
      y: 290,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-110",
      layer: "far",
      motif: "grass",
      x: 947,
      y: 331,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-111",
      layer: "near",
      motif: "gear",
      x: 1044,
      y: 372,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-112",
      layer: "far",
      motif: "vine",
      x: 1141,
      y: 413,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-113",
      layer: "mid",
      motif: "glassBerry",
      x: 1238,
      y: 454,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-114",
      layer: "far",
      motif: "cloud",
      x: 1335,
      y: 65,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-115",
      layer: "mid",
      motif: "windmill",
      x: 1432,
      y: 106,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-116",
      layer: "near",
      motif: "grass",
      x: 1529,
      y: 147,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-117",
      layer: "mid",
      motif: "gear",
      x: 1626,
      y: 188,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-118",
      layer: "far",
      motif: "vine",
      x: 1723,
      y: 229,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-119",
      layer: "mid",
      motif: "glassBerry",
      x: 1820,
      y: 270,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-120",
      layer: "far",
      motif: "cloud",
      x: 1917,
      y: 311,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-121",
      layer: "near",
      motif: "windmill",
      x: 2014,
      y: 352,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-122",
      layer: "far",
      motif: "grass",
      x: 2111,
      y: 393,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-123",
      layer: "mid",
      motif: "gear",
      x: 2208,
      y: 434,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-124",
      layer: "far",
      motif: "vine",
      x: 2305,
      y: 45,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-125",
      layer: "mid",
      motif: "glassBerry",
      x: 2402,
      y: 86,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-126",
      layer: "near",
      motif: "cloud",
      x: 2499,
      y: 127,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-127",
      layer: "mid",
      motif: "windmill",
      x: 2596,
      y: 168,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-128",
      layer: "far",
      motif: "grass",
      x: 2693,
      y: 209,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-129",
      layer: "mid",
      motif: "gear",
      x: 2790,
      y: 250,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-130",
      layer: "far",
      motif: "vine",
      x: 2887,
      y: 291,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-131",
      layer: "near",
      motif: "glassBerry",
      x: 2984,
      y: 332,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-132",
      layer: "far",
      motif: "cloud",
      x: 3081,
      y: 373,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-133",
      layer: "mid",
      motif: "windmill",
      x: 3178,
      y: 414,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-134",
      layer: "far",
      motif: "grass",
      x: 3275,
      y: 455,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-135",
      layer: "mid",
      motif: "gear",
      x: 3372,
      y: 66,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-136",
      layer: "near",
      motif: "vine",
      x: 3469,
      y: 107,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-137",
      layer: "mid",
      motif: "glassBerry",
      x: 3566,
      y: 148,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-138",
      layer: "far",
      motif: "cloud",
      x: 3663,
      y: 189,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-139",
      layer: "mid",
      motif: "windmill",
      x: 3760,
      y: 230,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-140",
      layer: "far",
      motif: "grass",
      x: 3857,
      y: 271,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-141",
      layer: "near",
      motif: "gear",
      x: 3954,
      y: 312,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-142",
      layer: "far",
      motif: "vine",
      x: 4051,
      y: 353,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-143",
      layer: "mid",
      motif: "glassBerry",
      x: 4148,
      y: 394,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-144",
      layer: "far",
      motif: "cloud",
      x: 4245,
      y: 435,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-145",
      layer: "mid",
      motif: "windmill",
      x: 4342,
      y: 46,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-146",
      layer: "near",
      motif: "grass",
      x: 4439,
      y: 87,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-147",
      layer: "mid",
      motif: "gear",
      x: 4536,
      y: 128,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-148",
      layer: "far",
      motif: "vine",
      x: 4633,
      y: 169,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-149",
      layer: "mid",
      motif: "glassBerry",
      x: 4730,
      y: 210,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-150",
      layer: "far",
      motif: "cloud",
      x: 4827,
      y: 251,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-151",
      layer: "near",
      motif: "windmill",
      x: 4924,
      y: 292,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-152",
      layer: "far",
      motif: "grass",
      x: 93,
      y: 333,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-153",
      layer: "mid",
      motif: "gear",
      x: 190,
      y: 374,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-154",
      layer: "far",
      motif: "vine",
      x: 287,
      y: 415,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-155",
      layer: "mid",
      motif: "glassBerry",
      x: 384,
      y: 456,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-156",
      layer: "near",
      motif: "cloud",
      x: 481,
      y: 67,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-157",
      layer: "mid",
      motif: "windmill",
      x: 578,
      y: 108,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-158",
      layer: "far",
      motif: "grass",
      x: 675,
      y: 149,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-159",
      layer: "mid",
      motif: "gear",
      x: 772,
      y: 190,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-160",
      layer: "far",
      motif: "vine",
      x: 869,
      y: 231,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-161",
      layer: "near",
      motif: "glassBerry",
      x: 966,
      y: 272,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-162",
      layer: "far",
      motif: "cloud",
      x: 1063,
      y: 313,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-163",
      layer: "mid",
      motif: "windmill",
      x: 1160,
      y: 354,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-164",
      layer: "far",
      motif: "grass",
      x: 1257,
      y: 395,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-165",
      layer: "mid",
      motif: "gear",
      x: 1354,
      y: 436,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-166",
      layer: "near",
      motif: "vine",
      x: 1451,
      y: 47,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-167",
      layer: "mid",
      motif: "glassBerry",
      x: 1548,
      y: 88,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-168",
      layer: "far",
      motif: "cloud",
      x: 1645,
      y: 129,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-169",
      layer: "mid",
      motif: "windmill",
      x: 1742,
      y: 170,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-170",
      layer: "far",
      motif: "grass",
      x: 1839,
      y: 211,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-11-171",
      layer: "near",
      motif: "gear",
      x: 1936,
      y: 252,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-172",
      layer: "far",
      motif: "vine",
      x: 2033,
      y: 293,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-11-173",
      layer: "mid",
      motif: "glassBerry",
      x: 2130,
      y: 334,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-11-174",
      layer: "far",
      motif: "cloud",
      x: 2227,
      y: 375,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-11-175",
      layer: "mid",
      motif: "windmill",
      x: 2324,
      y: 416,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-11-176",
      layer: "near",
      motif: "grass",
      x: 2421,
      y: 457,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-11-177",
      layer: "mid",
      motif: "gear",
      x: 2518,
      y: 68,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-11-178",
      layer: "far",
      motif: "vine",
      x: 2615,
      y: 109,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-11-179",
      layer: "mid",
      motif: "glassBerry",
      x: 2712,
      y: 150,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-11-180",
      layer: "far",
      motif: "cloud",
      x: 2809,
      y: 191,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-11",
    x: 4736,
    y: 448,
    nextLevelId: "level-12"
  }
};
