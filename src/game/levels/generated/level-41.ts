import type { LevelDefinition } from "../schema";

export const LEVEL_41: LevelDefinition = {
  id: "level-41",
  index: 40,
  title: "The Warden's Crown 06",
  chapter: "The Warden's Crown",
  columns: 154,
  rows: 18,
  timeLimit: 190,
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
    "...............####..........................#####.........................######........................#######.......................###................",
    "..........===...........................====..........................=====.........................======........................=======.................",
    "...................................###...........................####..........................#####.........................######.......................",
    "..............................#######.......................###...........................####..........................#####.............................",
    ".........................======........................=======.......................===...........................====..........................=........",
    "....................#####....................W....######........................#W#####.......................###....W......................####..........",
    "....................................S...................................S...................................S.............................................",
    "...P.......................W...................................W...................................W...................................W............G.....",
    "..................S...................................S...................................S...................................S...........................",
    "^################^...#############^#...############^##...###########^###...##########^####...#########^#####...########^######...#######^################^",
    "##################^.^###############^.^###############^.^###############^.^###############^.^###############^.^###############^.^#########################"
  ],
  enemies: [
    {
      id: "enemy-41-1",
      kind: "spiker",
      x: 420,
      y: 448,
      patrolMin: 325,
      patrolMax: 540,
      speed: 92,
      phase: 40
    },
    {
      id: "enemy-41-2",
      kind: "turret",
      x: 750,
      y: 416,
      patrolMin: 637,
      patrolMax: 892,
      speed: 104,
      phase: 43
    },
    {
      id: "enemy-41-3",
      kind: "beetle",
      x: 1080,
      y: 384,
      patrolMin: 949,
      patrolMax: 1244,
      speed: 44,
      phase: 46
    },
    {
      id: "enemy-41-4",
      kind: "acorn",
      x: 1410,
      y: 352,
      patrolMin: 1261,
      patrolMax: 1596,
      speed: 56,
      phase: 49
    },
    {
      id: "enemy-41-5",
      kind: "lantern",
      x: 1740,
      y: 320,
      patrolMin: 1645,
      patrolMax: 1948,
      speed: 68,
      phase: 52
    },
    {
      id: "enemy-41-6",
      kind: "charger",
      x: 2070,
      y: 448,
      patrolMin: 1957,
      patrolMax: 2190,
      speed: 80,
      phase: 55
    },
    {
      id: "enemy-41-7",
      kind: "spiker",
      x: 2400,
      y: 416,
      patrolMin: 2269,
      patrolMax: 2542,
      speed: 92,
      phase: 58
    },
    {
      id: "enemy-41-8",
      kind: "turret",
      x: 2730,
      y: 384,
      patrolMin: 2581,
      patrolMax: 2894,
      speed: 104,
      phase: 61
    },
    {
      id: "enemy-41-9",
      kind: "beetle",
      x: 3060,
      y: 352,
      patrolMin: 2965,
      patrolMax: 3246,
      speed: 44,
      phase: 64
    },
    {
      id: "enemy-41-10",
      kind: "acorn",
      x: 3390,
      y: 320,
      patrolMin: 3277,
      patrolMax: 3598,
      speed: 56,
      phase: 67
    },
    {
      id: "enemy-41-11",
      kind: "lantern",
      x: 3720,
      y: 448,
      patrolMin: 3589,
      patrolMax: 3840,
      speed: 68,
      phase: 70
    },
    {
      id: "enemy-41-12",
      kind: "charger",
      x: 4050,
      y: 416,
      patrolMin: 3901,
      patrolMax: 4192,
      speed: 80,
      phase: 73
    }
  ],
  collectibles: [
    {
      id: "collectible-41-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 180,
      y: 151
    },
    {
      id: "collectible-41-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 250,
      y: 204
    },
    {
      id: "collectible-41-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 320,
      y: 224
    },
    {
      id: "collectible-41-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 390,
      y: 277
    },
    {
      id: "collectible-41-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 460,
      y: 330
    },
    {
      id: "collectible-41-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 530,
      y: 350
    },
    {
      id: "collectible-41-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 600,
      y: 403
    },
    {
      id: "collectible-41-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 670,
      y: 162
    },
    {
      id: "collectible-41-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 740,
      y: 182
    },
    {
      id: "collectible-41-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 810,
      y: 235
    },
    {
      id: "collectible-41-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 880,
      y: 288
    },
    {
      id: "collectible-41-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 950,
      y: 308
    },
    {
      id: "collectible-41-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1020,
      y: 361
    },
    {
      id: "collectible-41-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1090,
      y: 414
    },
    {
      id: "collectible-41-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1160,
      y: 140
    },
    {
      id: "collectible-41-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1230,
      y: 193
    },
    {
      id: "collectible-41-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1300,
      y: 246
    },
    {
      id: "collectible-41-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1370,
      y: 266
    },
    {
      id: "collectible-41-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1440,
      y: 319
    },
    {
      id: "collectible-41-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1510,
      y: 372
    },
    {
      id: "collectible-41-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1580,
      y: 392
    },
    {
      id: "collectible-41-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1650,
      y: 151
    },
    {
      id: "collectible-41-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1720,
      y: 204
    },
    {
      id: "collectible-41-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1790,
      y: 224
    },
    {
      id: "collectible-41-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1860,
      y: 277
    },
    {
      id: "collectible-41-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1930,
      y: 330
    },
    {
      id: "collectible-41-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2000,
      y: 350
    },
    {
      id: "collectible-41-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2070,
      y: 403
    },
    {
      id: "collectible-41-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2140,
      y: 162
    },
    {
      id: "collectible-41-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2210,
      y: 182
    },
    {
      id: "collectible-41-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2280,
      y: 235
    },
    {
      id: "collectible-41-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2350,
      y: 288
    },
    {
      id: "collectible-41-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2420,
      y: 308
    },
    {
      id: "collectible-41-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2490,
      y: 361
    },
    {
      id: "collectible-41-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2560,
      y: 414
    },
    {
      id: "collectible-41-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2630,
      y: 140
    },
    {
      id: "collectible-41-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2700,
      y: 193
    },
    {
      id: "collectible-41-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2770,
      y: 246
    },
    {
      id: "collectible-41-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2840,
      y: 266
    },
    {
      id: "collectible-41-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2910,
      y: 319
    },
    {
      id: "collectible-41-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2980,
      y: 372
    },
    {
      id: "collectible-41-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3050,
      y: 392
    },
    {
      id: "collectible-41-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3120,
      y: 151
    },
    {
      id: "collectible-41-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3190,
      y: 204
    },
    {
      id: "collectible-41-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3260,
      y: 224
    },
    {
      id: "collectible-41-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3330,
      y: 277
    },
    {
      id: "collectible-41-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3400,
      y: 330
    },
    {
      id: "collectible-41-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3470,
      y: 350
    },
    {
      id: "collectible-41-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3540,
      y: 403
    },
    {
      id: "collectible-41-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3610,
      y: 162
    },
    {
      id: "collectible-41-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3680,
      y: 182
    },
    {
      id: "collectible-41-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3750,
      y: 235
    },
    {
      id: "collectible-41-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3820,
      y: 288
    },
    {
      id: "collectible-41-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3890,
      y: 308
    },
    {
      id: "collectible-41-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3960,
      y: 361
    },
    {
      id: "collectible-41-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4030,
      y: 414
    },
    {
      id: "collectible-41-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4100,
      y: 140
    },
    {
      id: "collectible-41-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4170,
      y: 193
    },
    {
      id: "collectible-41-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4240,
      y: 246
    },
    {
      id: "collectible-41-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4310,
      y: 266
    },
    {
      id: "collectible-41-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4380,
      y: 319
    },
    {
      id: "collectible-41-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4450,
      y: 372
    },
    {
      id: "collectible-41-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4520,
      y: 392
    },
    {
      id: "collectible-41-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4590,
      y: 151
    },
    {
      id: "collectible-41-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4660,
      y: 204
    },
    {
      id: "collectible-41-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4730,
      y: 224
    },
    {
      id: "collectible-41-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4800,
      y: 277
    },
    {
      id: "collectible-41-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4870,
      y: 330
    },
    {
      id: "collectible-41-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4940,
      y: 350
    },
    {
      id: "collectible-41-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5010,
      y: 403
    },
    {
      id: "collectible-41-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5080,
      y: 162
    },
    {
      id: "collectible-41-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5150,
      y: 182
    },
    {
      id: "collectible-41-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5220,
      y: 235
    },
    {
      id: "collectible-41-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5290,
      y: 288
    },
    {
      id: "collectible-41-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5360,
      y: 308
    },
    {
      id: "collectible-41-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5430,
      y: 361
    },
    {
      id: "collectible-41-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5500,
      y: 414
    },
    {
      id: "collectible-41-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5570,
      y: 140
    }
  ],
  powerups: [
    {
      id: "powerup-41-1",
      kind: "shield",
      durationMs: 4800,
      x: 620,
      y: 130
    },
    {
      id: "powerup-41-2",
      kind: "springBoots",
      durationMs: 5700,
      x: 1450,
      y: 182
    },
    {
      id: "powerup-41-3",
      kind: "starburst",
      durationMs: 6600,
      x: 2280,
      y: 234
    },
    {
      id: "powerup-41-4",
      kind: "gliderLeaf",
      durationMs: 7500,
      x: 3110,
      y: 286
    },
    {
      id: "powerup-41-5",
      kind: "shield",
      durationMs: 4800,
      x: 3940,
      y: 338
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-41-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 4
    },
    {
      id: "moving-platform-41-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 4.7
    },
    {
      id: "moving-platform-41-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 5.4
    },
    {
      id: "moving-platform-41-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 6.1
    },
    {
      id: "moving-platform-41-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 6.8
    },
    {
      id: "moving-platform-41-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 7.5
    },
    {
      id: "moving-platform-41-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 8.2
    }
  ],
  hazards: [
    {
      id: "hazard-41-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 40
    },
    {
      id: "hazard-41-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 41
    },
    {
      id: "hazard-41-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 42
    },
    {
      id: "hazard-41-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 43
    },
    {
      id: "hazard-41-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 44
    },
    {
      id: "hazard-41-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 45
    },
    {
      id: "hazard-41-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 46
    },
    {
      id: "hazard-41-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 47
    },
    {
      id: "hazard-41-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 48
    },
    {
      id: "hazard-41-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 49
    },
    {
      id: "hazard-41-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 50
    },
    {
      id: "hazard-41-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 51
    },
    {
      id: "hazard-41-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 52
    },
    {
      id: "hazard-41-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 53
    },
    {
      id: "hazard-41-15",
      kind: "thorn",
      x: 5660,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 54
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-41-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-41-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-41-1",
      x: 674,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-41-2",
      x: 1444,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-41-3",
      x: 2214,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-41-4",
      x: 2984,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-41-5",
      x: 3754,
      y: 416,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-41-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-41-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-41-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    }
  ],
  decorations: [
    {
      id: "decor-41-1",
      layer: "near",
      motif: "windmill",
      x: 920,
      y: 122,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-2",
      layer: "far",
      motif: "grass",
      x: 1017,
      y: 163,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-3",
      layer: "mid",
      motif: "gear",
      x: 1114,
      y: 204,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-4",
      layer: "far",
      motif: "vine",
      x: 1211,
      y: 245,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-5",
      layer: "mid",
      motif: "glassBerry",
      x: 1308,
      y: 286,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-6",
      layer: "near",
      motif: "cloud",
      x: 1405,
      y: 327,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-7",
      layer: "mid",
      motif: "windmill",
      x: 1502,
      y: 368,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-8",
      layer: "far",
      motif: "grass",
      x: 1599,
      y: 409,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-9",
      layer: "mid",
      motif: "gear",
      x: 1696,
      y: 450,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-10",
      layer: "far",
      motif: "vine",
      x: 1793,
      y: 61,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-11",
      layer: "near",
      motif: "glassBerry",
      x: 1890,
      y: 102,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-12",
      layer: "far",
      motif: "cloud",
      x: 1987,
      y: 143,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-13",
      layer: "mid",
      motif: "windmill",
      x: 2084,
      y: 184,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-14",
      layer: "far",
      motif: "grass",
      x: 2181,
      y: 225,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-15",
      layer: "mid",
      motif: "gear",
      x: 2278,
      y: 266,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-16",
      layer: "near",
      motif: "vine",
      x: 2375,
      y: 307,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-17",
      layer: "mid",
      motif: "glassBerry",
      x: 2472,
      y: 348,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-18",
      layer: "far",
      motif: "cloud",
      x: 2569,
      y: 389,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-19",
      layer: "mid",
      motif: "windmill",
      x: 2666,
      y: 430,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-20",
      layer: "far",
      motif: "grass",
      x: 2763,
      y: 41,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-21",
      layer: "near",
      motif: "gear",
      x: 2860,
      y: 82,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-22",
      layer: "far",
      motif: "vine",
      x: 2957,
      y: 123,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-23",
      layer: "mid",
      motif: "glassBerry",
      x: 3054,
      y: 164,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-24",
      layer: "far",
      motif: "cloud",
      x: 3151,
      y: 205,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-25",
      layer: "mid",
      motif: "windmill",
      x: 3248,
      y: 246,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-26",
      layer: "near",
      motif: "grass",
      x: 3345,
      y: 287,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-27",
      layer: "mid",
      motif: "gear",
      x: 3442,
      y: 328,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-28",
      layer: "far",
      motif: "vine",
      x: 3539,
      y: 369,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-29",
      layer: "mid",
      motif: "glassBerry",
      x: 3636,
      y: 410,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-30",
      layer: "far",
      motif: "cloud",
      x: 3733,
      y: 451,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-31",
      layer: "near",
      motif: "windmill",
      x: 3830,
      y: 62,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-32",
      layer: "far",
      motif: "grass",
      x: 3927,
      y: 103,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-33",
      layer: "mid",
      motif: "gear",
      x: 4024,
      y: 144,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-34",
      layer: "far",
      motif: "vine",
      x: 4121,
      y: 185,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-35",
      layer: "mid",
      motif: "glassBerry",
      x: 4218,
      y: 226,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-36",
      layer: "near",
      motif: "cloud",
      x: 4315,
      y: 267,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-37",
      layer: "mid",
      motif: "windmill",
      x: 4412,
      y: 308,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-38",
      layer: "far",
      motif: "grass",
      x: 4509,
      y: 349,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-39",
      layer: "mid",
      motif: "gear",
      x: 4606,
      y: 390,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-40",
      layer: "far",
      motif: "vine",
      x: 4703,
      y: 431,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-41",
      layer: "near",
      motif: "glassBerry",
      x: 4800,
      y: 42,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-42",
      layer: "far",
      motif: "cloud",
      x: 4897,
      y: 83,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-43",
      layer: "mid",
      motif: "windmill",
      x: 66,
      y: 124,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-44",
      layer: "far",
      motif: "grass",
      x: 163,
      y: 165,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-45",
      layer: "mid",
      motif: "gear",
      x: 260,
      y: 206,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-46",
      layer: "near",
      motif: "vine",
      x: 357,
      y: 247,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-47",
      layer: "mid",
      motif: "glassBerry",
      x: 454,
      y: 288,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-48",
      layer: "far",
      motif: "cloud",
      x: 551,
      y: 329,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-49",
      layer: "mid",
      motif: "windmill",
      x: 648,
      y: 370,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-50",
      layer: "far",
      motif: "grass",
      x: 745,
      y: 411,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-51",
      layer: "near",
      motif: "gear",
      x: 842,
      y: 452,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-52",
      layer: "far",
      motif: "vine",
      x: 939,
      y: 63,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-53",
      layer: "mid",
      motif: "glassBerry",
      x: 1036,
      y: 104,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-54",
      layer: "far",
      motif: "cloud",
      x: 1133,
      y: 145,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-55",
      layer: "mid",
      motif: "windmill",
      x: 1230,
      y: 186,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-56",
      layer: "near",
      motif: "grass",
      x: 1327,
      y: 227,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-57",
      layer: "mid",
      motif: "gear",
      x: 1424,
      y: 268,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-58",
      layer: "far",
      motif: "vine",
      x: 1521,
      y: 309,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-59",
      layer: "mid",
      motif: "glassBerry",
      x: 1618,
      y: 350,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-60",
      layer: "far",
      motif: "cloud",
      x: 1715,
      y: 391,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-61",
      layer: "near",
      motif: "windmill",
      x: 1812,
      y: 432,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-62",
      layer: "far",
      motif: "grass",
      x: 1909,
      y: 43,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-63",
      layer: "mid",
      motif: "gear",
      x: 2006,
      y: 84,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-64",
      layer: "far",
      motif: "vine",
      x: 2103,
      y: 125,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-65",
      layer: "mid",
      motif: "glassBerry",
      x: 2200,
      y: 166,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-66",
      layer: "near",
      motif: "cloud",
      x: 2297,
      y: 207,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-67",
      layer: "mid",
      motif: "windmill",
      x: 2394,
      y: 248,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-68",
      layer: "far",
      motif: "grass",
      x: 2491,
      y: 289,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-69",
      layer: "mid",
      motif: "gear",
      x: 2588,
      y: 330,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-70",
      layer: "far",
      motif: "vine",
      x: 2685,
      y: 371,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-71",
      layer: "near",
      motif: "glassBerry",
      x: 2782,
      y: 412,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-72",
      layer: "far",
      motif: "cloud",
      x: 2879,
      y: 453,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-73",
      layer: "mid",
      motif: "windmill",
      x: 2976,
      y: 64,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-74",
      layer: "far",
      motif: "grass",
      x: 3073,
      y: 105,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-75",
      layer: "mid",
      motif: "gear",
      x: 3170,
      y: 146,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-76",
      layer: "near",
      motif: "vine",
      x: 3267,
      y: 187,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-77",
      layer: "mid",
      motif: "glassBerry",
      x: 3364,
      y: 228,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-78",
      layer: "far",
      motif: "cloud",
      x: 3461,
      y: 269,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-79",
      layer: "mid",
      motif: "windmill",
      x: 3558,
      y: 310,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-80",
      layer: "far",
      motif: "grass",
      x: 3655,
      y: 351,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-81",
      layer: "near",
      motif: "gear",
      x: 3752,
      y: 392,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-82",
      layer: "far",
      motif: "vine",
      x: 3849,
      y: 433,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-83",
      layer: "mid",
      motif: "glassBerry",
      x: 3946,
      y: 44,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-84",
      layer: "far",
      motif: "cloud",
      x: 4043,
      y: 85,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-85",
      layer: "mid",
      motif: "windmill",
      x: 4140,
      y: 126,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-86",
      layer: "near",
      motif: "grass",
      x: 4237,
      y: 167,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-87",
      layer: "mid",
      motif: "gear",
      x: 4334,
      y: 208,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-88",
      layer: "far",
      motif: "vine",
      x: 4431,
      y: 249,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-89",
      layer: "mid",
      motif: "glassBerry",
      x: 4528,
      y: 290,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-90",
      layer: "far",
      motif: "cloud",
      x: 4625,
      y: 331,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-91",
      layer: "near",
      motif: "windmill",
      x: 4722,
      y: 372,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-92",
      layer: "far",
      motif: "grass",
      x: 4819,
      y: 413,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-93",
      layer: "mid",
      motif: "gear",
      x: 4916,
      y: 454,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-94",
      layer: "far",
      motif: "vine",
      x: 85,
      y: 65,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-95",
      layer: "mid",
      motif: "glassBerry",
      x: 182,
      y: 106,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-96",
      layer: "near",
      motif: "cloud",
      x: 279,
      y: 147,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-97",
      layer: "mid",
      motif: "windmill",
      x: 376,
      y: 188,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-98",
      layer: "far",
      motif: "grass",
      x: 473,
      y: 229,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-99",
      layer: "mid",
      motif: "gear",
      x: 570,
      y: 270,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-100",
      layer: "far",
      motif: "vine",
      x: 667,
      y: 311,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-101",
      layer: "near",
      motif: "glassBerry",
      x: 764,
      y: 352,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-102",
      layer: "far",
      motif: "cloud",
      x: 861,
      y: 393,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-103",
      layer: "mid",
      motif: "windmill",
      x: 958,
      y: 434,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-104",
      layer: "far",
      motif: "grass",
      x: 1055,
      y: 45,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-105",
      layer: "mid",
      motif: "gear",
      x: 1152,
      y: 86,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-106",
      layer: "near",
      motif: "vine",
      x: 1249,
      y: 127,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-107",
      layer: "mid",
      motif: "glassBerry",
      x: 1346,
      y: 168,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-108",
      layer: "far",
      motif: "cloud",
      x: 1443,
      y: 209,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-109",
      layer: "mid",
      motif: "windmill",
      x: 1540,
      y: 250,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-110",
      layer: "far",
      motif: "grass",
      x: 1637,
      y: 291,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-111",
      layer: "near",
      motif: "gear",
      x: 1734,
      y: 332,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-112",
      layer: "far",
      motif: "vine",
      x: 1831,
      y: 373,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-113",
      layer: "mid",
      motif: "glassBerry",
      x: 1928,
      y: 414,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-114",
      layer: "far",
      motif: "cloud",
      x: 2025,
      y: 455,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-115",
      layer: "mid",
      motif: "windmill",
      x: 2122,
      y: 66,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-116",
      layer: "near",
      motif: "grass",
      x: 2219,
      y: 107,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-117",
      layer: "mid",
      motif: "gear",
      x: 2316,
      y: 148,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-118",
      layer: "far",
      motif: "vine",
      x: 2413,
      y: 189,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-119",
      layer: "mid",
      motif: "glassBerry",
      x: 2510,
      y: 230,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-120",
      layer: "far",
      motif: "cloud",
      x: 2607,
      y: 271,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-121",
      layer: "near",
      motif: "windmill",
      x: 2704,
      y: 312,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-122",
      layer: "far",
      motif: "grass",
      x: 2801,
      y: 353,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-123",
      layer: "mid",
      motif: "gear",
      x: 2898,
      y: 394,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-124",
      layer: "far",
      motif: "vine",
      x: 2995,
      y: 435,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-125",
      layer: "mid",
      motif: "glassBerry",
      x: 3092,
      y: 46,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-126",
      layer: "near",
      motif: "cloud",
      x: 3189,
      y: 87,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-127",
      layer: "mid",
      motif: "windmill",
      x: 3286,
      y: 128,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-128",
      layer: "far",
      motif: "grass",
      x: 3383,
      y: 169,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-129",
      layer: "mid",
      motif: "gear",
      x: 3480,
      y: 210,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-130",
      layer: "far",
      motif: "vine",
      x: 3577,
      y: 251,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-131",
      layer: "near",
      motif: "glassBerry",
      x: 3674,
      y: 292,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-132",
      layer: "far",
      motif: "cloud",
      x: 3771,
      y: 333,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-133",
      layer: "mid",
      motif: "windmill",
      x: 3868,
      y: 374,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-134",
      layer: "far",
      motif: "grass",
      x: 3965,
      y: 415,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-135",
      layer: "mid",
      motif: "gear",
      x: 4062,
      y: 456,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-136",
      layer: "near",
      motif: "vine",
      x: 4159,
      y: 67,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-137",
      layer: "mid",
      motif: "glassBerry",
      x: 4256,
      y: 108,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-138",
      layer: "far",
      motif: "cloud",
      x: 4353,
      y: 149,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-139",
      layer: "mid",
      motif: "windmill",
      x: 4450,
      y: 190,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-140",
      layer: "far",
      motif: "grass",
      x: 4547,
      y: 231,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-141",
      layer: "near",
      motif: "gear",
      x: 4644,
      y: 272,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-142",
      layer: "far",
      motif: "vine",
      x: 4741,
      y: 313,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-143",
      layer: "mid",
      motif: "glassBerry",
      x: 4838,
      y: 354,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-144",
      layer: "far",
      motif: "cloud",
      x: 7,
      y: 395,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-145",
      layer: "mid",
      motif: "windmill",
      x: 104,
      y: 436,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-146",
      layer: "near",
      motif: "grass",
      x: 201,
      y: 47,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-147",
      layer: "mid",
      motif: "gear",
      x: 298,
      y: 88,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-148",
      layer: "far",
      motif: "vine",
      x: 395,
      y: 129,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-149",
      layer: "mid",
      motif: "glassBerry",
      x: 492,
      y: 170,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-150",
      layer: "far",
      motif: "cloud",
      x: 589,
      y: 211,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-151",
      layer: "near",
      motif: "windmill",
      x: 686,
      y: 252,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-152",
      layer: "far",
      motif: "grass",
      x: 783,
      y: 293,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-153",
      layer: "mid",
      motif: "gear",
      x: 880,
      y: 334,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-154",
      layer: "far",
      motif: "vine",
      x: 977,
      y: 375,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-155",
      layer: "mid",
      motif: "glassBerry",
      x: 1074,
      y: 416,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-156",
      layer: "near",
      motif: "cloud",
      x: 1171,
      y: 457,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-157",
      layer: "mid",
      motif: "windmill",
      x: 1268,
      y: 68,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-158",
      layer: "far",
      motif: "grass",
      x: 1365,
      y: 109,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-159",
      layer: "mid",
      motif: "gear",
      x: 1462,
      y: 150,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-160",
      layer: "far",
      motif: "vine",
      x: 1559,
      y: 191,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-161",
      layer: "near",
      motif: "glassBerry",
      x: 1656,
      y: 232,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-162",
      layer: "far",
      motif: "cloud",
      x: 1753,
      y: 273,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-163",
      layer: "mid",
      motif: "windmill",
      x: 1850,
      y: 314,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-164",
      layer: "far",
      motif: "grass",
      x: 1947,
      y: 355,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-165",
      layer: "mid",
      motif: "gear",
      x: 2044,
      y: 396,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-166",
      layer: "near",
      motif: "vine",
      x: 2141,
      y: 437,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-167",
      layer: "mid",
      motif: "glassBerry",
      x: 2238,
      y: 48,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-168",
      layer: "far",
      motif: "cloud",
      x: 2335,
      y: 89,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-169",
      layer: "mid",
      motif: "windmill",
      x: 2432,
      y: 130,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-170",
      layer: "far",
      motif: "grass",
      x: 2529,
      y: 171,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-41-171",
      layer: "near",
      motif: "gear",
      x: 2626,
      y: 212,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-172",
      layer: "far",
      motif: "vine",
      x: 2723,
      y: 253,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-41-173",
      layer: "mid",
      motif: "glassBerry",
      x: 2820,
      y: 294,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-41-174",
      layer: "far",
      motif: "cloud",
      x: 2917,
      y: 335,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-41-175",
      layer: "mid",
      motif: "windmill",
      x: 3014,
      y: 376,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-41-176",
      layer: "near",
      motif: "grass",
      x: 3111,
      y: 417,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-41-177",
      layer: "mid",
      motif: "gear",
      x: 3208,
      y: 458,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-41-178",
      layer: "far",
      motif: "vine",
      x: 3305,
      y: 69,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-41-179",
      layer: "mid",
      motif: "glassBerry",
      x: 3402,
      y: 110,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-41-180",
      layer: "far",
      motif: "cloud",
      x: 3499,
      y: 151,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-41",
    x: 4736,
    y: 448,
    nextLevelId: "level-42"
  }
};
