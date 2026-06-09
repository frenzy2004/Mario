import type { LevelDefinition } from "../schema";

export const LEVEL_21: LevelDefinition = {
  id: "level-21",
  index: 20,
  title: "Windmill Tangle 07",
  chapter: "Windmill Tangle",
  columns: 154,
  rows: 18,
  timeLimit: 262,
  palette: {
    skyTop: 1013358,
    skyBottom: 8246268,
    ground: 2976596,
    groundAccent: 16498468,
    brass: 16498468,
    leaves: 2278750,
    hazard: 16478597,
    glow: 16707722
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
    ".........................======........................=======.......................===...........................====..........................=........",
    "....................#####.........................######........................#######.......................###...........................####..........",
    "...............####..........................#####.........................######........................#######.......................###................",
    "..........===...........................====..........................=====.........................======........................=======.................",
    "...................................###...........................####..........................#####.........................######.......................",
    "..............................#######......W................###................W..........####.....................W....#####.............................",
    "..................................S...................................S...................................S...............................................",
    "...P.....................W...................................W...................................W...................................W..............G.....",
    "................S...................................S...................................S...................................S.............................",
    "^################^....############^#....###########^##....##########^###....#########^####....########^#####....#######^######....######^################^",
    "##################^.^.##############^.^.##############^.^.##############^.^.##############^.^.##############^.^.##############^.^.########################"
  ],
  enemies: [
    {
      id: "enemy-21-1",
      kind: "lantern",
      x: 420,
      y: 448,
      patrolMin: 325,
      patrolMax: 540,
      speed: 68,
      phase: 20
    },
    {
      id: "enemy-21-2",
      kind: "charger",
      x: 750,
      y: 416,
      patrolMin: 637,
      patrolMax: 892,
      speed: 80,
      phase: 23
    },
    {
      id: "enemy-21-3",
      kind: "spiker",
      x: 1080,
      y: 384,
      patrolMin: 949,
      patrolMax: 1244,
      speed: 92,
      phase: 26
    },
    {
      id: "enemy-21-4",
      kind: "turret",
      x: 1410,
      y: 352,
      patrolMin: 1261,
      patrolMax: 1596,
      speed: 104,
      phase: 29
    },
    {
      id: "enemy-21-5",
      kind: "beetle",
      x: 1740,
      y: 320,
      patrolMin: 1645,
      patrolMax: 1948,
      speed: 44,
      phase: 32
    },
    {
      id: "enemy-21-6",
      kind: "acorn",
      x: 2070,
      y: 448,
      patrolMin: 1957,
      patrolMax: 2190,
      speed: 56,
      phase: 35
    },
    {
      id: "enemy-21-7",
      kind: "lantern",
      x: 2400,
      y: 416,
      patrolMin: 2269,
      patrolMax: 2542,
      speed: 68,
      phase: 38
    },
    {
      id: "enemy-21-8",
      kind: "charger",
      x: 2730,
      y: 384,
      patrolMin: 2581,
      patrolMax: 2894,
      speed: 80,
      phase: 41
    },
    {
      id: "enemy-21-9",
      kind: "spiker",
      x: 3060,
      y: 352,
      patrolMin: 2965,
      patrolMax: 3246,
      speed: 92,
      phase: 44
    },
    {
      id: "enemy-21-10",
      kind: "turret",
      x: 3390,
      y: 320,
      patrolMin: 3277,
      patrolMax: 3598,
      speed: 104,
      phase: 47
    },
    {
      id: "enemy-21-11",
      kind: "beetle",
      x: 3720,
      y: 448,
      patrolMin: 3589,
      patrolMax: 3840,
      speed: 44,
      phase: 50
    },
    {
      id: "enemy-21-12",
      kind: "acorn",
      x: 4050,
      y: 416,
      patrolMin: 3901,
      patrolMax: 4192,
      speed: 56,
      phase: 53
    },
    {
      id: "enemy-21-13",
      kind: "lantern",
      x: 4380,
      y: 384,
      patrolMin: 4285,
      patrolMax: 4544,
      speed: 68,
      phase: 56
    },
    {
      id: "enemy-21-14",
      kind: "charger",
      x: 4710,
      y: 352,
      patrolMin: 4597,
      patrolMax: 4748,
      speed: 80,
      phase: 59
    },
    {
      id: "enemy-21-15",
      kind: "spiker",
      x: 5040,
      y: 320,
      patrolMin: 4909,
      patrolMax: 4748,
      speed: 92,
      phase: 62
    },
    {
      id: "enemy-21-16",
      kind: "turret",
      x: 5370,
      y: 448,
      patrolMin: 5221,
      patrolMax: 4748,
      speed: 104,
      phase: 65
    }
  ],
  collectibles: [
    {
      id: "collectible-21-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 180,
      y: 162
    },
    {
      id: "collectible-21-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 250,
      y: 182
    },
    {
      id: "collectible-21-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 320,
      y: 235
    },
    {
      id: "collectible-21-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 390,
      y: 288
    },
    {
      id: "collectible-21-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 460,
      y: 308
    },
    {
      id: "collectible-21-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 530,
      y: 361
    },
    {
      id: "collectible-21-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 600,
      y: 414
    },
    {
      id: "collectible-21-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 670,
      y: 140
    },
    {
      id: "collectible-21-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 740,
      y: 193
    },
    {
      id: "collectible-21-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 810,
      y: 246
    },
    {
      id: "collectible-21-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 880,
      y: 266
    },
    {
      id: "collectible-21-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 950,
      y: 319
    },
    {
      id: "collectible-21-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1020,
      y: 372
    },
    {
      id: "collectible-21-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1090,
      y: 392
    },
    {
      id: "collectible-21-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1160,
      y: 151
    },
    {
      id: "collectible-21-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1230,
      y: 204
    },
    {
      id: "collectible-21-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1300,
      y: 224
    },
    {
      id: "collectible-21-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1370,
      y: 277
    },
    {
      id: "collectible-21-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1440,
      y: 330
    },
    {
      id: "collectible-21-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1510,
      y: 350
    },
    {
      id: "collectible-21-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1580,
      y: 403
    },
    {
      id: "collectible-21-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1650,
      y: 162
    },
    {
      id: "collectible-21-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1720,
      y: 182
    },
    {
      id: "collectible-21-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1790,
      y: 235
    },
    {
      id: "collectible-21-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1860,
      y: 288
    },
    {
      id: "collectible-21-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1930,
      y: 308
    },
    {
      id: "collectible-21-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2000,
      y: 361
    },
    {
      id: "collectible-21-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2070,
      y: 414
    },
    {
      id: "collectible-21-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2140,
      y: 140
    },
    {
      id: "collectible-21-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2210,
      y: 193
    },
    {
      id: "collectible-21-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2280,
      y: 246
    },
    {
      id: "collectible-21-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2350,
      y: 266
    },
    {
      id: "collectible-21-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2420,
      y: 319
    },
    {
      id: "collectible-21-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2490,
      y: 372
    },
    {
      id: "collectible-21-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2560,
      y: 392
    },
    {
      id: "collectible-21-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2630,
      y: 151
    },
    {
      id: "collectible-21-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2700,
      y: 204
    },
    {
      id: "collectible-21-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2770,
      y: 224
    },
    {
      id: "collectible-21-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2840,
      y: 277
    },
    {
      id: "collectible-21-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2910,
      y: 330
    },
    {
      id: "collectible-21-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2980,
      y: 350
    },
    {
      id: "collectible-21-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3050,
      y: 403
    },
    {
      id: "collectible-21-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3120,
      y: 162
    },
    {
      id: "collectible-21-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3190,
      y: 182
    },
    {
      id: "collectible-21-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3260,
      y: 235
    },
    {
      id: "collectible-21-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3330,
      y: 288
    },
    {
      id: "collectible-21-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3400,
      y: 308
    },
    {
      id: "collectible-21-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3470,
      y: 361
    },
    {
      id: "collectible-21-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3540,
      y: 414
    },
    {
      id: "collectible-21-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3610,
      y: 140
    },
    {
      id: "collectible-21-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3680,
      y: 193
    },
    {
      id: "collectible-21-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3750,
      y: 246
    },
    {
      id: "collectible-21-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3820,
      y: 266
    },
    {
      id: "collectible-21-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3890,
      y: 319
    },
    {
      id: "collectible-21-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3960,
      y: 372
    },
    {
      id: "collectible-21-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4030,
      y: 392
    },
    {
      id: "collectible-21-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4100,
      y: 151
    },
    {
      id: "collectible-21-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4170,
      y: 204
    },
    {
      id: "collectible-21-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4240,
      y: 224
    },
    {
      id: "collectible-21-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4310,
      y: 277
    },
    {
      id: "collectible-21-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4380,
      y: 330
    },
    {
      id: "collectible-21-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4450,
      y: 350
    },
    {
      id: "collectible-21-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4520,
      y: 403
    },
    {
      id: "collectible-21-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4590,
      y: 162
    },
    {
      id: "collectible-21-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4660,
      y: 182
    },
    {
      id: "collectible-21-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4730,
      y: 235
    },
    {
      id: "collectible-21-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4800,
      y: 288
    },
    {
      id: "collectible-21-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4870,
      y: 308
    },
    {
      id: "collectible-21-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4940,
      y: 361
    },
    {
      id: "collectible-21-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5010,
      y: 414
    }
  ],
  powerups: [
    {
      id: "powerup-21-1",
      kind: "shield",
      durationMs: 4800,
      x: 560,
      y: 130
    },
    {
      id: "powerup-21-2",
      kind: "springBoots",
      durationMs: 5700,
      x: 1390,
      y: 182
    },
    {
      id: "powerup-21-3",
      kind: "starburst",
      durationMs: 6600,
      x: 2220,
      y: 234
    },
    {
      id: "powerup-21-4",
      kind: "gliderLeaf",
      durationMs: 7500,
      x: 3050,
      y: 286
    },
    {
      id: "powerup-21-5",
      kind: "shield",
      durationMs: 4800,
      x: 3880,
      y: 338
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-21-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 2
    },
    {
      id: "moving-platform-21-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 2.7
    },
    {
      id: "moving-platform-21-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 3.4
    },
    {
      id: "moving-platform-21-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 4.1
    },
    {
      id: "moving-platform-21-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 4.8
    },
    {
      id: "moving-platform-21-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 5.5
    },
    {
      id: "moving-platform-21-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 6.199999999999999
    }
  ],
  hazards: [
    {
      id: "hazard-21-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 20
    },
    {
      id: "hazard-21-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 21
    },
    {
      id: "hazard-21-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 22
    },
    {
      id: "hazard-21-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 23
    },
    {
      id: "hazard-21-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 24
    },
    {
      id: "hazard-21-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 25
    },
    {
      id: "hazard-21-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 26
    },
    {
      id: "hazard-21-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 27
    },
    {
      id: "hazard-21-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 28
    },
    {
      id: "hazard-21-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 29
    },
    {
      id: "hazard-21-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 30
    },
    {
      id: "hazard-21-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 31
    },
    {
      id: "hazard-21-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 32
    },
    {
      id: "hazard-21-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 33
    },
    {
      id: "hazard-21-15",
      kind: "thorn",
      x: 5660,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 34
    },
    {
      id: "hazard-21-16",
      kind: "crushBlock",
      x: 6020,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 35
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-21-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-21-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-21-1",
      x: 708,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-21-2",
      x: 1478,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-21-3",
      x: 2248,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-21-4",
      x: 3018,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-21-5",
      x: 3788,
      y: 416,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-21-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-21-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-21-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    }
  ],
  decorations: [
    {
      id: "decor-21-1",
      layer: "near",
      motif: "glassBerry",
      x: 460,
      y: 292,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-2",
      layer: "far",
      motif: "cloud",
      x: 557,
      y: 333,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-3",
      layer: "mid",
      motif: "windmill",
      x: 654,
      y: 374,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-4",
      layer: "far",
      motif: "grass",
      x: 751,
      y: 415,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-5",
      layer: "mid",
      motif: "gear",
      x: 848,
      y: 456,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-6",
      layer: "near",
      motif: "vine",
      x: 945,
      y: 67,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-7",
      layer: "mid",
      motif: "glassBerry",
      x: 1042,
      y: 108,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-8",
      layer: "far",
      motif: "cloud",
      x: 1139,
      y: 149,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-9",
      layer: "mid",
      motif: "windmill",
      x: 1236,
      y: 190,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-10",
      layer: "far",
      motif: "grass",
      x: 1333,
      y: 231,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-11",
      layer: "near",
      motif: "gear",
      x: 1430,
      y: 272,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-12",
      layer: "far",
      motif: "vine",
      x: 1527,
      y: 313,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-13",
      layer: "mid",
      motif: "glassBerry",
      x: 1624,
      y: 354,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-14",
      layer: "far",
      motif: "cloud",
      x: 1721,
      y: 395,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-15",
      layer: "mid",
      motif: "windmill",
      x: 1818,
      y: 436,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-16",
      layer: "near",
      motif: "grass",
      x: 1915,
      y: 47,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-17",
      layer: "mid",
      motif: "gear",
      x: 2012,
      y: 88,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-18",
      layer: "far",
      motif: "vine",
      x: 2109,
      y: 129,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-19",
      layer: "mid",
      motif: "glassBerry",
      x: 2206,
      y: 170,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-20",
      layer: "far",
      motif: "cloud",
      x: 2303,
      y: 211,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-21",
      layer: "near",
      motif: "windmill",
      x: 2400,
      y: 252,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-22",
      layer: "far",
      motif: "grass",
      x: 2497,
      y: 293,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-23",
      layer: "mid",
      motif: "gear",
      x: 2594,
      y: 334,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-24",
      layer: "far",
      motif: "vine",
      x: 2691,
      y: 375,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-25",
      layer: "mid",
      motif: "glassBerry",
      x: 2788,
      y: 416,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-26",
      layer: "near",
      motif: "cloud",
      x: 2885,
      y: 457,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-27",
      layer: "mid",
      motif: "windmill",
      x: 2982,
      y: 68,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-28",
      layer: "far",
      motif: "grass",
      x: 3079,
      y: 109,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-29",
      layer: "mid",
      motif: "gear",
      x: 3176,
      y: 150,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-30",
      layer: "far",
      motif: "vine",
      x: 3273,
      y: 191,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-31",
      layer: "near",
      motif: "glassBerry",
      x: 3370,
      y: 232,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-32",
      layer: "far",
      motif: "cloud",
      x: 3467,
      y: 273,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-33",
      layer: "mid",
      motif: "windmill",
      x: 3564,
      y: 314,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-34",
      layer: "far",
      motif: "grass",
      x: 3661,
      y: 355,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-35",
      layer: "mid",
      motif: "gear",
      x: 3758,
      y: 396,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-36",
      layer: "near",
      motif: "vine",
      x: 3855,
      y: 437,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-37",
      layer: "mid",
      motif: "glassBerry",
      x: 3952,
      y: 48,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-38",
      layer: "far",
      motif: "cloud",
      x: 4049,
      y: 89,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-39",
      layer: "mid",
      motif: "windmill",
      x: 4146,
      y: 130,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-40",
      layer: "far",
      motif: "grass",
      x: 4243,
      y: 171,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-41",
      layer: "near",
      motif: "gear",
      x: 4340,
      y: 212,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-42",
      layer: "far",
      motif: "vine",
      x: 4437,
      y: 253,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-43",
      layer: "mid",
      motif: "glassBerry",
      x: 4534,
      y: 294,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-44",
      layer: "far",
      motif: "cloud",
      x: 4631,
      y: 335,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-45",
      layer: "mid",
      motif: "windmill",
      x: 4728,
      y: 376,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-46",
      layer: "near",
      motif: "grass",
      x: 4825,
      y: 417,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-47",
      layer: "mid",
      motif: "gear",
      x: 4922,
      y: 458,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-48",
      layer: "far",
      motif: "vine",
      x: 91,
      y: 69,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-49",
      layer: "mid",
      motif: "glassBerry",
      x: 188,
      y: 110,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-50",
      layer: "far",
      motif: "cloud",
      x: 285,
      y: 151,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-51",
      layer: "near",
      motif: "windmill",
      x: 382,
      y: 192,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-52",
      layer: "far",
      motif: "grass",
      x: 479,
      y: 233,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-53",
      layer: "mid",
      motif: "gear",
      x: 576,
      y: 274,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-54",
      layer: "far",
      motif: "vine",
      x: 673,
      y: 315,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-55",
      layer: "mid",
      motif: "glassBerry",
      x: 770,
      y: 356,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-56",
      layer: "near",
      motif: "cloud",
      x: 867,
      y: 397,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-57",
      layer: "mid",
      motif: "windmill",
      x: 964,
      y: 438,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-58",
      layer: "far",
      motif: "grass",
      x: 1061,
      y: 49,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-59",
      layer: "mid",
      motif: "gear",
      x: 1158,
      y: 90,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-60",
      layer: "far",
      motif: "vine",
      x: 1255,
      y: 131,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-61",
      layer: "near",
      motif: "glassBerry",
      x: 1352,
      y: 172,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-62",
      layer: "far",
      motif: "cloud",
      x: 1449,
      y: 213,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-63",
      layer: "mid",
      motif: "windmill",
      x: 1546,
      y: 254,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-64",
      layer: "far",
      motif: "grass",
      x: 1643,
      y: 295,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-65",
      layer: "mid",
      motif: "gear",
      x: 1740,
      y: 336,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-66",
      layer: "near",
      motif: "vine",
      x: 1837,
      y: 377,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-67",
      layer: "mid",
      motif: "glassBerry",
      x: 1934,
      y: 418,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-68",
      layer: "far",
      motif: "cloud",
      x: 2031,
      y: 459,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-69",
      layer: "mid",
      motif: "windmill",
      x: 2128,
      y: 70,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-70",
      layer: "far",
      motif: "grass",
      x: 2225,
      y: 111,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-71",
      layer: "near",
      motif: "gear",
      x: 2322,
      y: 152,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-72",
      layer: "far",
      motif: "vine",
      x: 2419,
      y: 193,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-73",
      layer: "mid",
      motif: "glassBerry",
      x: 2516,
      y: 234,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-74",
      layer: "far",
      motif: "cloud",
      x: 2613,
      y: 275,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-75",
      layer: "mid",
      motif: "windmill",
      x: 2710,
      y: 316,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-76",
      layer: "near",
      motif: "grass",
      x: 2807,
      y: 357,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-77",
      layer: "mid",
      motif: "gear",
      x: 2904,
      y: 398,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-78",
      layer: "far",
      motif: "vine",
      x: 3001,
      y: 439,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-79",
      layer: "mid",
      motif: "glassBerry",
      x: 3098,
      y: 50,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-80",
      layer: "far",
      motif: "cloud",
      x: 3195,
      y: 91,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-81",
      layer: "near",
      motif: "windmill",
      x: 3292,
      y: 132,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-82",
      layer: "far",
      motif: "grass",
      x: 3389,
      y: 173,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-83",
      layer: "mid",
      motif: "gear",
      x: 3486,
      y: 214,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-84",
      layer: "far",
      motif: "vine",
      x: 3583,
      y: 255,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-85",
      layer: "mid",
      motif: "glassBerry",
      x: 3680,
      y: 296,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-86",
      layer: "near",
      motif: "cloud",
      x: 3777,
      y: 337,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-87",
      layer: "mid",
      motif: "windmill",
      x: 3874,
      y: 378,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-88",
      layer: "far",
      motif: "grass",
      x: 3971,
      y: 419,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-89",
      layer: "mid",
      motif: "gear",
      x: 4068,
      y: 460,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-90",
      layer: "far",
      motif: "vine",
      x: 4165,
      y: 71,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-91",
      layer: "near",
      motif: "glassBerry",
      x: 4262,
      y: 112,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-92",
      layer: "far",
      motif: "cloud",
      x: 4359,
      y: 153,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-93",
      layer: "mid",
      motif: "windmill",
      x: 4456,
      y: 194,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-94",
      layer: "far",
      motif: "grass",
      x: 4553,
      y: 235,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-95",
      layer: "mid",
      motif: "gear",
      x: 4650,
      y: 276,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-96",
      layer: "near",
      motif: "vine",
      x: 4747,
      y: 317,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-97",
      layer: "mid",
      motif: "glassBerry",
      x: 4844,
      y: 358,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-98",
      layer: "far",
      motif: "cloud",
      x: 13,
      y: 399,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-99",
      layer: "mid",
      motif: "windmill",
      x: 110,
      y: 440,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-100",
      layer: "far",
      motif: "grass",
      x: 207,
      y: 51,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-101",
      layer: "near",
      motif: "gear",
      x: 304,
      y: 92,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-102",
      layer: "far",
      motif: "vine",
      x: 401,
      y: 133,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-103",
      layer: "mid",
      motif: "glassBerry",
      x: 498,
      y: 174,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-104",
      layer: "far",
      motif: "cloud",
      x: 595,
      y: 215,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-105",
      layer: "mid",
      motif: "windmill",
      x: 692,
      y: 256,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-106",
      layer: "near",
      motif: "grass",
      x: 789,
      y: 297,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-107",
      layer: "mid",
      motif: "gear",
      x: 886,
      y: 338,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-108",
      layer: "far",
      motif: "vine",
      x: 983,
      y: 379,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-109",
      layer: "mid",
      motif: "glassBerry",
      x: 1080,
      y: 420,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-110",
      layer: "far",
      motif: "cloud",
      x: 1177,
      y: 461,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-111",
      layer: "near",
      motif: "windmill",
      x: 1274,
      y: 72,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-112",
      layer: "far",
      motif: "grass",
      x: 1371,
      y: 113,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-113",
      layer: "mid",
      motif: "gear",
      x: 1468,
      y: 154,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-114",
      layer: "far",
      motif: "vine",
      x: 1565,
      y: 195,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-115",
      layer: "mid",
      motif: "glassBerry",
      x: 1662,
      y: 236,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-116",
      layer: "near",
      motif: "cloud",
      x: 1759,
      y: 277,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-117",
      layer: "mid",
      motif: "windmill",
      x: 1856,
      y: 318,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-118",
      layer: "far",
      motif: "grass",
      x: 1953,
      y: 359,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-119",
      layer: "mid",
      motif: "gear",
      x: 2050,
      y: 400,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-120",
      layer: "far",
      motif: "vine",
      x: 2147,
      y: 441,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-121",
      layer: "near",
      motif: "glassBerry",
      x: 2244,
      y: 52,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-122",
      layer: "far",
      motif: "cloud",
      x: 2341,
      y: 93,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-123",
      layer: "mid",
      motif: "windmill",
      x: 2438,
      y: 134,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-124",
      layer: "far",
      motif: "grass",
      x: 2535,
      y: 175,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-125",
      layer: "mid",
      motif: "gear",
      x: 2632,
      y: 216,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-126",
      layer: "near",
      motif: "vine",
      x: 2729,
      y: 257,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-127",
      layer: "mid",
      motif: "glassBerry",
      x: 2826,
      y: 298,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-128",
      layer: "far",
      motif: "cloud",
      x: 2923,
      y: 339,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-129",
      layer: "mid",
      motif: "windmill",
      x: 3020,
      y: 380,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-130",
      layer: "far",
      motif: "grass",
      x: 3117,
      y: 421,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-131",
      layer: "near",
      motif: "gear",
      x: 3214,
      y: 32,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-132",
      layer: "far",
      motif: "vine",
      x: 3311,
      y: 73,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-133",
      layer: "mid",
      motif: "glassBerry",
      x: 3408,
      y: 114,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-134",
      layer: "far",
      motif: "cloud",
      x: 3505,
      y: 155,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-135",
      layer: "mid",
      motif: "windmill",
      x: 3602,
      y: 196,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-136",
      layer: "near",
      motif: "grass",
      x: 3699,
      y: 237,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-137",
      layer: "mid",
      motif: "gear",
      x: 3796,
      y: 278,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-138",
      layer: "far",
      motif: "vine",
      x: 3893,
      y: 319,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-139",
      layer: "mid",
      motif: "glassBerry",
      x: 3990,
      y: 360,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-140",
      layer: "far",
      motif: "cloud",
      x: 4087,
      y: 401,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-141",
      layer: "near",
      motif: "windmill",
      x: 4184,
      y: 442,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-142",
      layer: "far",
      motif: "grass",
      x: 4281,
      y: 53,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-143",
      layer: "mid",
      motif: "gear",
      x: 4378,
      y: 94,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-144",
      layer: "far",
      motif: "vine",
      x: 4475,
      y: 135,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-145",
      layer: "mid",
      motif: "glassBerry",
      x: 4572,
      y: 176,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-146",
      layer: "near",
      motif: "cloud",
      x: 4669,
      y: 217,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-147",
      layer: "mid",
      motif: "windmill",
      x: 4766,
      y: 258,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-148",
      layer: "far",
      motif: "grass",
      x: 4863,
      y: 299,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-149",
      layer: "mid",
      motif: "gear",
      x: 32,
      y: 340,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-150",
      layer: "far",
      motif: "vine",
      x: 129,
      y: 381,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-151",
      layer: "near",
      motif: "glassBerry",
      x: 226,
      y: 422,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-152",
      layer: "far",
      motif: "cloud",
      x: 323,
      y: 33,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-153",
      layer: "mid",
      motif: "windmill",
      x: 420,
      y: 74,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-154",
      layer: "far",
      motif: "grass",
      x: 517,
      y: 115,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-155",
      layer: "mid",
      motif: "gear",
      x: 614,
      y: 156,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-156",
      layer: "near",
      motif: "vine",
      x: 711,
      y: 197,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-157",
      layer: "mid",
      motif: "glassBerry",
      x: 808,
      y: 238,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-158",
      layer: "far",
      motif: "cloud",
      x: 905,
      y: 279,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-159",
      layer: "mid",
      motif: "windmill",
      x: 1002,
      y: 320,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-160",
      layer: "far",
      motif: "grass",
      x: 1099,
      y: 361,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-161",
      layer: "near",
      motif: "gear",
      x: 1196,
      y: 402,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-162",
      layer: "far",
      motif: "vine",
      x: 1293,
      y: 443,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-163",
      layer: "mid",
      motif: "glassBerry",
      x: 1390,
      y: 54,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-164",
      layer: "far",
      motif: "cloud",
      x: 1487,
      y: 95,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-165",
      layer: "mid",
      motif: "windmill",
      x: 1584,
      y: 136,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-166",
      layer: "near",
      motif: "grass",
      x: 1681,
      y: 177,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-167",
      layer: "mid",
      motif: "gear",
      x: 1778,
      y: 218,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-168",
      layer: "far",
      motif: "vine",
      x: 1875,
      y: 259,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-169",
      layer: "mid",
      motif: "glassBerry",
      x: 1972,
      y: 300,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-170",
      layer: "far",
      motif: "cloud",
      x: 2069,
      y: 341,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-21-171",
      layer: "near",
      motif: "windmill",
      x: 2166,
      y: 382,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-172",
      layer: "far",
      motif: "grass",
      x: 2263,
      y: 423,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-21-173",
      layer: "mid",
      motif: "gear",
      x: 2360,
      y: 34,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-21-174",
      layer: "far",
      motif: "vine",
      x: 2457,
      y: 75,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-21-175",
      layer: "mid",
      motif: "glassBerry",
      x: 2554,
      y: 116,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-21-176",
      layer: "near",
      motif: "cloud",
      x: 2651,
      y: 157,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-21-177",
      layer: "mid",
      motif: "windmill",
      x: 2748,
      y: 198,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-21-178",
      layer: "far",
      motif: "grass",
      x: 2845,
      y: 239,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-21-179",
      layer: "mid",
      motif: "gear",
      x: 2942,
      y: 280,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-21-180",
      layer: "far",
      motif: "vine",
      x: 3039,
      y: 321,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-21",
    x: 4736,
    y: 448,
    nextLevelId: "level-22"
  }
};
