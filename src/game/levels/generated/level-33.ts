import type { LevelDefinition } from "../schema";

export const LEVEL_33: LevelDefinition = {
  id: "level-33",
  index: 32,
  title: "Aurora Conservatory 05",
  chapter: "Aurora Conservatory",
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
    ".........................===...........................====..........................=====.........................======........................=........",
    "....................#######.......................###...........................####..........................#####.........................######........",
    "...............######........................#######.......................###...........................####..........................#####..............",
    "..........=====.........................======........................=======.......................===...........................====....................",
    "...................................#####.........................######........................#######.......................###..........................",
    "..............................####.........W................#####..............W..........######...................W....#######...........................",
    "..................................S...................................S...................................S...............................................",
    "...P.....................W...................................W...................................W...................................W..............G.....",
    "................S...................................S...................................S...................................S.............................",
    "^################^....############..##############...#############....############..#^############...#^###########....#^##########..####^################^",
    "##################^.^.############^.##############^.^#############^.^.############^.##############^.^#############^.^.############^.######################"
  ],
  enemies: [
    {
      id: "enemy-33-1",
      kind: "lantern",
      x: 476,
      y: 448,
      patrolMin: 381,
      patrolMax: 596,
      speed: 68,
      phase: 32
    },
    {
      id: "enemy-33-2",
      kind: "charger",
      x: 806,
      y: 416,
      patrolMin: 693,
      patrolMax: 948,
      speed: 80,
      phase: 35
    },
    {
      id: "enemy-33-3",
      kind: "spiker",
      x: 1136,
      y: 384,
      patrolMin: 1005,
      patrolMax: 1300,
      speed: 92,
      phase: 38
    },
    {
      id: "enemy-33-4",
      kind: "turret",
      x: 1466,
      y: 352,
      patrolMin: 1317,
      patrolMax: 1652,
      speed: 104,
      phase: 41
    },
    {
      id: "enemy-33-5",
      kind: "beetle",
      x: 1796,
      y: 320,
      patrolMin: 1701,
      patrolMax: 2004,
      speed: 44,
      phase: 44
    },
    {
      id: "enemy-33-6",
      kind: "acorn",
      x: 2126,
      y: 448,
      patrolMin: 2013,
      patrolMax: 2246,
      speed: 56,
      phase: 47
    },
    {
      id: "enemy-33-7",
      kind: "lantern",
      x: 2456,
      y: 416,
      patrolMin: 2325,
      patrolMax: 2598,
      speed: 68,
      phase: 50
    },
    {
      id: "enemy-33-8",
      kind: "charger",
      x: 2786,
      y: 384,
      patrolMin: 2637,
      patrolMax: 2950,
      speed: 80,
      phase: 53
    },
    {
      id: "enemy-33-9",
      kind: "spiker",
      x: 3116,
      y: 352,
      patrolMin: 3021,
      patrolMax: 3302,
      speed: 92,
      phase: 56
    },
    {
      id: "enemy-33-10",
      kind: "turret",
      x: 3446,
      y: 320,
      patrolMin: 3333,
      patrolMax: 3654,
      speed: 104,
      phase: 59
    },
    {
      id: "enemy-33-11",
      kind: "beetle",
      x: 3776,
      y: 448,
      patrolMin: 3645,
      patrolMax: 3896,
      speed: 44,
      phase: 62
    },
    {
      id: "enemy-33-12",
      kind: "acorn",
      x: 4106,
      y: 416,
      patrolMin: 3957,
      patrolMax: 4248,
      speed: 56,
      phase: 65
    }
  ],
  collectibles: [
    {
      id: "collectible-33-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 180,
      y: 162
    },
    {
      id: "collectible-33-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 250,
      y: 182
    },
    {
      id: "collectible-33-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 320,
      y: 235
    },
    {
      id: "collectible-33-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 390,
      y: 288
    },
    {
      id: "collectible-33-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 460,
      y: 308
    },
    {
      id: "collectible-33-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 530,
      y: 361
    },
    {
      id: "collectible-33-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 600,
      y: 414
    },
    {
      id: "collectible-33-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 670,
      y: 140
    },
    {
      id: "collectible-33-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 740,
      y: 193
    },
    {
      id: "collectible-33-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 810,
      y: 246
    },
    {
      id: "collectible-33-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 880,
      y: 266
    },
    {
      id: "collectible-33-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 950,
      y: 319
    },
    {
      id: "collectible-33-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1020,
      y: 372
    },
    {
      id: "collectible-33-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1090,
      y: 392
    },
    {
      id: "collectible-33-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1160,
      y: 151
    },
    {
      id: "collectible-33-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1230,
      y: 204
    },
    {
      id: "collectible-33-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1300,
      y: 224
    },
    {
      id: "collectible-33-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1370,
      y: 277
    },
    {
      id: "collectible-33-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1440,
      y: 330
    },
    {
      id: "collectible-33-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1510,
      y: 350
    },
    {
      id: "collectible-33-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1580,
      y: 403
    },
    {
      id: "collectible-33-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1650,
      y: 162
    },
    {
      id: "collectible-33-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1720,
      y: 182
    },
    {
      id: "collectible-33-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1790,
      y: 235
    },
    {
      id: "collectible-33-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1860,
      y: 288
    },
    {
      id: "collectible-33-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1930,
      y: 308
    },
    {
      id: "collectible-33-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2000,
      y: 361
    },
    {
      id: "collectible-33-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2070,
      y: 414
    },
    {
      id: "collectible-33-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2140,
      y: 140
    },
    {
      id: "collectible-33-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2210,
      y: 193
    },
    {
      id: "collectible-33-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2280,
      y: 246
    },
    {
      id: "collectible-33-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2350,
      y: 266
    },
    {
      id: "collectible-33-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2420,
      y: 319
    },
    {
      id: "collectible-33-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2490,
      y: 372
    },
    {
      id: "collectible-33-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2560,
      y: 392
    },
    {
      id: "collectible-33-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2630,
      y: 151
    },
    {
      id: "collectible-33-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2700,
      y: 204
    },
    {
      id: "collectible-33-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2770,
      y: 224
    },
    {
      id: "collectible-33-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2840,
      y: 277
    },
    {
      id: "collectible-33-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2910,
      y: 330
    },
    {
      id: "collectible-33-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2980,
      y: 350
    },
    {
      id: "collectible-33-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3050,
      y: 403
    },
    {
      id: "collectible-33-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3120,
      y: 162
    },
    {
      id: "collectible-33-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3190,
      y: 182
    },
    {
      id: "collectible-33-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3260,
      y: 235
    },
    {
      id: "collectible-33-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3330,
      y: 288
    },
    {
      id: "collectible-33-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3400,
      y: 308
    },
    {
      id: "collectible-33-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3470,
      y: 361
    },
    {
      id: "collectible-33-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3540,
      y: 414
    },
    {
      id: "collectible-33-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3610,
      y: 140
    },
    {
      id: "collectible-33-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3680,
      y: 193
    },
    {
      id: "collectible-33-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3750,
      y: 246
    },
    {
      id: "collectible-33-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3820,
      y: 266
    },
    {
      id: "collectible-33-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3890,
      y: 319
    },
    {
      id: "collectible-33-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3960,
      y: 372
    },
    {
      id: "collectible-33-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4030,
      y: 392
    },
    {
      id: "collectible-33-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4100,
      y: 151
    },
    {
      id: "collectible-33-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4170,
      y: 204
    },
    {
      id: "collectible-33-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4240,
      y: 224
    },
    {
      id: "collectible-33-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4310,
      y: 277
    },
    {
      id: "collectible-33-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4380,
      y: 330
    },
    {
      id: "collectible-33-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4450,
      y: 350
    },
    {
      id: "collectible-33-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4520,
      y: 403
    },
    {
      id: "collectible-33-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4590,
      y: 162
    },
    {
      id: "collectible-33-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4660,
      y: 182
    },
    {
      id: "collectible-33-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4730,
      y: 235
    },
    {
      id: "collectible-33-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4800,
      y: 288
    },
    {
      id: "collectible-33-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4870,
      y: 308
    },
    {
      id: "collectible-33-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4940,
      y: 361
    },
    {
      id: "collectible-33-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5010,
      y: 414
    },
    {
      id: "collectible-33-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5080,
      y: 140
    },
    {
      id: "collectible-33-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5150,
      y: 193
    },
    {
      id: "collectible-33-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5220,
      y: 246
    },
    {
      id: "collectible-33-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5290,
      y: 266
    },
    {
      id: "collectible-33-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5360,
      y: 319
    },
    {
      id: "collectible-33-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5430,
      y: 372
    },
    {
      id: "collectible-33-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5500,
      y: 392
    },
    {
      id: "collectible-33-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5570,
      y: 151
    },
    {
      id: "collectible-33-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5640,
      y: 204
    },
    {
      id: "collectible-33-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5710,
      y: 224
    },
    {
      id: "collectible-33-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5780,
      y: 277
    },
    {
      id: "collectible-33-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5850,
      y: 330
    }
  ],
  powerups: [
    {
      id: "powerup-33-1",
      kind: "shield",
      durationMs: 4800,
      x: 560,
      y: 130
    },
    {
      id: "powerup-33-2",
      kind: "springBoots",
      durationMs: 5700,
      x: 1390,
      y: 182
    },
    {
      id: "powerup-33-3",
      kind: "starburst",
      durationMs: 6600,
      x: 2220,
      y: 234
    },
    {
      id: "powerup-33-4",
      kind: "gliderLeaf",
      durationMs: 7500,
      x: 3050,
      y: 286
    },
    {
      id: "powerup-33-5",
      kind: "shield",
      durationMs: 4800,
      x: 3880,
      y: 338
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-33-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 3.2
    },
    {
      id: "moving-platform-33-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 3.9000000000000004
    },
    {
      id: "moving-platform-33-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 4.6
    },
    {
      id: "moving-platform-33-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 5.3
    },
    {
      id: "moving-platform-33-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 6
    },
    {
      id: "moving-platform-33-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 6.7
    },
    {
      id: "moving-platform-33-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 7.3999999999999995
    },
    {
      id: "moving-platform-33-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 8.1
    },
    {
      id: "moving-platform-33-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 8.8
    }
  ],
  hazards: [
    {
      id: "hazard-33-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 32
    },
    {
      id: "hazard-33-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 33
    },
    {
      id: "hazard-33-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 34
    },
    {
      id: "hazard-33-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 35
    },
    {
      id: "hazard-33-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 36
    },
    {
      id: "hazard-33-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 37
    },
    {
      id: "hazard-33-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 38
    },
    {
      id: "hazard-33-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 39
    },
    {
      id: "hazard-33-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 40
    },
    {
      id: "hazard-33-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 41
    },
    {
      id: "hazard-33-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 42
    },
    {
      id: "hazard-33-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 43
    },
    {
      id: "hazard-33-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 44
    },
    {
      id: "hazard-33-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 45
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-33-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-33-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-33-1",
      x: 708,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-33-2",
      x: 1478,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-33-3",
      x: 2248,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-33-4",
      x: 3018,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-33-5",
      x: 3788,
      y: 416,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-33-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-33-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-33-3",
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
      id: "decor-33-1",
      layer: "near",
      motif: "glassBerry",
      x: 736,
      y: 448,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-2",
      layer: "far",
      motif: "cloud",
      x: 833,
      y: 59,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-3",
      layer: "mid",
      motif: "windmill",
      x: 930,
      y: 100,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-4",
      layer: "far",
      motif: "grass",
      x: 1027,
      y: 141,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-5",
      layer: "mid",
      motif: "gear",
      x: 1124,
      y: 182,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-6",
      layer: "near",
      motif: "vine",
      x: 1221,
      y: 223,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-7",
      layer: "mid",
      motif: "glassBerry",
      x: 1318,
      y: 264,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-8",
      layer: "far",
      motif: "cloud",
      x: 1415,
      y: 305,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-9",
      layer: "mid",
      motif: "windmill",
      x: 1512,
      y: 346,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-10",
      layer: "far",
      motif: "grass",
      x: 1609,
      y: 387,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-11",
      layer: "near",
      motif: "gear",
      x: 1706,
      y: 428,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-12",
      layer: "far",
      motif: "vine",
      x: 1803,
      y: 39,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-13",
      layer: "mid",
      motif: "glassBerry",
      x: 1900,
      y: 80,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-14",
      layer: "far",
      motif: "cloud",
      x: 1997,
      y: 121,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-15",
      layer: "mid",
      motif: "windmill",
      x: 2094,
      y: 162,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-16",
      layer: "near",
      motif: "grass",
      x: 2191,
      y: 203,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-17",
      layer: "mid",
      motif: "gear",
      x: 2288,
      y: 244,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-18",
      layer: "far",
      motif: "vine",
      x: 2385,
      y: 285,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-19",
      layer: "mid",
      motif: "glassBerry",
      x: 2482,
      y: 326,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-20",
      layer: "far",
      motif: "cloud",
      x: 2579,
      y: 367,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-21",
      layer: "near",
      motif: "windmill",
      x: 2676,
      y: 408,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-22",
      layer: "far",
      motif: "grass",
      x: 2773,
      y: 449,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-23",
      layer: "mid",
      motif: "gear",
      x: 2870,
      y: 60,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-24",
      layer: "far",
      motif: "vine",
      x: 2967,
      y: 101,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-25",
      layer: "mid",
      motif: "glassBerry",
      x: 3064,
      y: 142,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-26",
      layer: "near",
      motif: "cloud",
      x: 3161,
      y: 183,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-27",
      layer: "mid",
      motif: "windmill",
      x: 3258,
      y: 224,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-28",
      layer: "far",
      motif: "grass",
      x: 3355,
      y: 265,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-29",
      layer: "mid",
      motif: "gear",
      x: 3452,
      y: 306,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-30",
      layer: "far",
      motif: "vine",
      x: 3549,
      y: 347,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-31",
      layer: "near",
      motif: "glassBerry",
      x: 3646,
      y: 388,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-32",
      layer: "far",
      motif: "cloud",
      x: 3743,
      y: 429,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-33",
      layer: "mid",
      motif: "windmill",
      x: 3840,
      y: 40,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-34",
      layer: "far",
      motif: "grass",
      x: 3937,
      y: 81,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-35",
      layer: "mid",
      motif: "gear",
      x: 4034,
      y: 122,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-36",
      layer: "near",
      motif: "vine",
      x: 4131,
      y: 163,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-37",
      layer: "mid",
      motif: "glassBerry",
      x: 4228,
      y: 204,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-38",
      layer: "far",
      motif: "cloud",
      x: 4325,
      y: 245,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-39",
      layer: "mid",
      motif: "windmill",
      x: 4422,
      y: 286,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-40",
      layer: "far",
      motif: "grass",
      x: 4519,
      y: 327,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-41",
      layer: "near",
      motif: "gear",
      x: 4616,
      y: 368,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-42",
      layer: "far",
      motif: "vine",
      x: 4713,
      y: 409,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-43",
      layer: "mid",
      motif: "glassBerry",
      x: 4810,
      y: 450,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-44",
      layer: "far",
      motif: "cloud",
      x: 4907,
      y: 61,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-45",
      layer: "mid",
      motif: "windmill",
      x: 76,
      y: 102,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-46",
      layer: "near",
      motif: "grass",
      x: 173,
      y: 143,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-47",
      layer: "mid",
      motif: "gear",
      x: 270,
      y: 184,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-48",
      layer: "far",
      motif: "vine",
      x: 367,
      y: 225,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-49",
      layer: "mid",
      motif: "glassBerry",
      x: 464,
      y: 266,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-50",
      layer: "far",
      motif: "cloud",
      x: 561,
      y: 307,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-51",
      layer: "near",
      motif: "windmill",
      x: 658,
      y: 348,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-52",
      layer: "far",
      motif: "grass",
      x: 755,
      y: 389,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-53",
      layer: "mid",
      motif: "gear",
      x: 852,
      y: 430,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-54",
      layer: "far",
      motif: "vine",
      x: 949,
      y: 41,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-55",
      layer: "mid",
      motif: "glassBerry",
      x: 1046,
      y: 82,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-56",
      layer: "near",
      motif: "cloud",
      x: 1143,
      y: 123,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-57",
      layer: "mid",
      motif: "windmill",
      x: 1240,
      y: 164,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-58",
      layer: "far",
      motif: "grass",
      x: 1337,
      y: 205,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-59",
      layer: "mid",
      motif: "gear",
      x: 1434,
      y: 246,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-60",
      layer: "far",
      motif: "vine",
      x: 1531,
      y: 287,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-61",
      layer: "near",
      motif: "glassBerry",
      x: 1628,
      y: 328,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-62",
      layer: "far",
      motif: "cloud",
      x: 1725,
      y: 369,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-63",
      layer: "mid",
      motif: "windmill",
      x: 1822,
      y: 410,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-64",
      layer: "far",
      motif: "grass",
      x: 1919,
      y: 451,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-65",
      layer: "mid",
      motif: "gear",
      x: 2016,
      y: 62,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-66",
      layer: "near",
      motif: "vine",
      x: 2113,
      y: 103,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-67",
      layer: "mid",
      motif: "glassBerry",
      x: 2210,
      y: 144,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-68",
      layer: "far",
      motif: "cloud",
      x: 2307,
      y: 185,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-69",
      layer: "mid",
      motif: "windmill",
      x: 2404,
      y: 226,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-70",
      layer: "far",
      motif: "grass",
      x: 2501,
      y: 267,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-71",
      layer: "near",
      motif: "gear",
      x: 2598,
      y: 308,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-72",
      layer: "far",
      motif: "vine",
      x: 2695,
      y: 349,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-73",
      layer: "mid",
      motif: "glassBerry",
      x: 2792,
      y: 390,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-74",
      layer: "far",
      motif: "cloud",
      x: 2889,
      y: 431,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-75",
      layer: "mid",
      motif: "windmill",
      x: 2986,
      y: 42,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-76",
      layer: "near",
      motif: "grass",
      x: 3083,
      y: 83,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-77",
      layer: "mid",
      motif: "gear",
      x: 3180,
      y: 124,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-78",
      layer: "far",
      motif: "vine",
      x: 3277,
      y: 165,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-79",
      layer: "mid",
      motif: "glassBerry",
      x: 3374,
      y: 206,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-80",
      layer: "far",
      motif: "cloud",
      x: 3471,
      y: 247,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-81",
      layer: "near",
      motif: "windmill",
      x: 3568,
      y: 288,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-82",
      layer: "far",
      motif: "grass",
      x: 3665,
      y: 329,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-83",
      layer: "mid",
      motif: "gear",
      x: 3762,
      y: 370,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-84",
      layer: "far",
      motif: "vine",
      x: 3859,
      y: 411,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-85",
      layer: "mid",
      motif: "glassBerry",
      x: 3956,
      y: 452,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-86",
      layer: "near",
      motif: "cloud",
      x: 4053,
      y: 63,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-87",
      layer: "mid",
      motif: "windmill",
      x: 4150,
      y: 104,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-88",
      layer: "far",
      motif: "grass",
      x: 4247,
      y: 145,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-89",
      layer: "mid",
      motif: "gear",
      x: 4344,
      y: 186,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-90",
      layer: "far",
      motif: "vine",
      x: 4441,
      y: 227,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-91",
      layer: "near",
      motif: "glassBerry",
      x: 4538,
      y: 268,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-92",
      layer: "far",
      motif: "cloud",
      x: 4635,
      y: 309,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-93",
      layer: "mid",
      motif: "windmill",
      x: 4732,
      y: 350,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-94",
      layer: "far",
      motif: "grass",
      x: 4829,
      y: 391,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-95",
      layer: "mid",
      motif: "gear",
      x: 4926,
      y: 432,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-96",
      layer: "near",
      motif: "vine",
      x: 95,
      y: 43,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-97",
      layer: "mid",
      motif: "glassBerry",
      x: 192,
      y: 84,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-98",
      layer: "far",
      motif: "cloud",
      x: 289,
      y: 125,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-99",
      layer: "mid",
      motif: "windmill",
      x: 386,
      y: 166,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-100",
      layer: "far",
      motif: "grass",
      x: 483,
      y: 207,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-101",
      layer: "near",
      motif: "gear",
      x: 580,
      y: 248,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-102",
      layer: "far",
      motif: "vine",
      x: 677,
      y: 289,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-103",
      layer: "mid",
      motif: "glassBerry",
      x: 774,
      y: 330,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-104",
      layer: "far",
      motif: "cloud",
      x: 871,
      y: 371,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-105",
      layer: "mid",
      motif: "windmill",
      x: 968,
      y: 412,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-106",
      layer: "near",
      motif: "grass",
      x: 1065,
      y: 453,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-107",
      layer: "mid",
      motif: "gear",
      x: 1162,
      y: 64,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-108",
      layer: "far",
      motif: "vine",
      x: 1259,
      y: 105,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-109",
      layer: "mid",
      motif: "glassBerry",
      x: 1356,
      y: 146,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-110",
      layer: "far",
      motif: "cloud",
      x: 1453,
      y: 187,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-111",
      layer: "near",
      motif: "windmill",
      x: 1550,
      y: 228,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-112",
      layer: "far",
      motif: "grass",
      x: 1647,
      y: 269,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-113",
      layer: "mid",
      motif: "gear",
      x: 1744,
      y: 310,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-114",
      layer: "far",
      motif: "vine",
      x: 1841,
      y: 351,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-115",
      layer: "mid",
      motif: "glassBerry",
      x: 1938,
      y: 392,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-116",
      layer: "near",
      motif: "cloud",
      x: 2035,
      y: 433,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-117",
      layer: "mid",
      motif: "windmill",
      x: 2132,
      y: 44,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-118",
      layer: "far",
      motif: "grass",
      x: 2229,
      y: 85,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-119",
      layer: "mid",
      motif: "gear",
      x: 2326,
      y: 126,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-120",
      layer: "far",
      motif: "vine",
      x: 2423,
      y: 167,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-121",
      layer: "near",
      motif: "glassBerry",
      x: 2520,
      y: 208,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-122",
      layer: "far",
      motif: "cloud",
      x: 2617,
      y: 249,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-123",
      layer: "mid",
      motif: "windmill",
      x: 2714,
      y: 290,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-124",
      layer: "far",
      motif: "grass",
      x: 2811,
      y: 331,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-125",
      layer: "mid",
      motif: "gear",
      x: 2908,
      y: 372,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-126",
      layer: "near",
      motif: "vine",
      x: 3005,
      y: 413,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-127",
      layer: "mid",
      motif: "glassBerry",
      x: 3102,
      y: 454,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-128",
      layer: "far",
      motif: "cloud",
      x: 3199,
      y: 65,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-129",
      layer: "mid",
      motif: "windmill",
      x: 3296,
      y: 106,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-130",
      layer: "far",
      motif: "grass",
      x: 3393,
      y: 147,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-131",
      layer: "near",
      motif: "gear",
      x: 3490,
      y: 188,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-132",
      layer: "far",
      motif: "vine",
      x: 3587,
      y: 229,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-133",
      layer: "mid",
      motif: "glassBerry",
      x: 3684,
      y: 270,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-134",
      layer: "far",
      motif: "cloud",
      x: 3781,
      y: 311,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-135",
      layer: "mid",
      motif: "windmill",
      x: 3878,
      y: 352,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-136",
      layer: "near",
      motif: "grass",
      x: 3975,
      y: 393,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-137",
      layer: "mid",
      motif: "gear",
      x: 4072,
      y: 434,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-138",
      layer: "far",
      motif: "vine",
      x: 4169,
      y: 45,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-139",
      layer: "mid",
      motif: "glassBerry",
      x: 4266,
      y: 86,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-140",
      layer: "far",
      motif: "cloud",
      x: 4363,
      y: 127,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-141",
      layer: "near",
      motif: "windmill",
      x: 4460,
      y: 168,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-142",
      layer: "far",
      motif: "grass",
      x: 4557,
      y: 209,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-143",
      layer: "mid",
      motif: "gear",
      x: 4654,
      y: 250,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-144",
      layer: "far",
      motif: "vine",
      x: 4751,
      y: 291,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-145",
      layer: "mid",
      motif: "glassBerry",
      x: 4848,
      y: 332,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-146",
      layer: "near",
      motif: "cloud",
      x: 17,
      y: 373,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-147",
      layer: "mid",
      motif: "windmill",
      x: 114,
      y: 414,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-148",
      layer: "far",
      motif: "grass",
      x: 211,
      y: 455,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-149",
      layer: "mid",
      motif: "gear",
      x: 308,
      y: 66,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-150",
      layer: "far",
      motif: "vine",
      x: 405,
      y: 107,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-151",
      layer: "near",
      motif: "glassBerry",
      x: 502,
      y: 148,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-152",
      layer: "far",
      motif: "cloud",
      x: 599,
      y: 189,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-153",
      layer: "mid",
      motif: "windmill",
      x: 696,
      y: 230,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-154",
      layer: "far",
      motif: "grass",
      x: 793,
      y: 271,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-155",
      layer: "mid",
      motif: "gear",
      x: 890,
      y: 312,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-156",
      layer: "near",
      motif: "vine",
      x: 987,
      y: 353,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-157",
      layer: "mid",
      motif: "glassBerry",
      x: 1084,
      y: 394,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-158",
      layer: "far",
      motif: "cloud",
      x: 1181,
      y: 435,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-159",
      layer: "mid",
      motif: "windmill",
      x: 1278,
      y: 46,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-160",
      layer: "far",
      motif: "grass",
      x: 1375,
      y: 87,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-161",
      layer: "near",
      motif: "gear",
      x: 1472,
      y: 128,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-162",
      layer: "far",
      motif: "vine",
      x: 1569,
      y: 169,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-163",
      layer: "mid",
      motif: "glassBerry",
      x: 1666,
      y: 210,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-164",
      layer: "far",
      motif: "cloud",
      x: 1763,
      y: 251,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-165",
      layer: "mid",
      motif: "windmill",
      x: 1860,
      y: 292,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-166",
      layer: "near",
      motif: "grass",
      x: 1957,
      y: 333,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-167",
      layer: "mid",
      motif: "gear",
      x: 2054,
      y: 374,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-168",
      layer: "far",
      motif: "vine",
      x: 2151,
      y: 415,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-169",
      layer: "mid",
      motif: "glassBerry",
      x: 2248,
      y: 456,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-170",
      layer: "far",
      motif: "cloud",
      x: 2345,
      y: 67,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-33-171",
      layer: "near",
      motif: "windmill",
      x: 2442,
      y: 108,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-172",
      layer: "far",
      motif: "grass",
      x: 2539,
      y: 149,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-33-173",
      layer: "mid",
      motif: "gear",
      x: 2636,
      y: 190,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-33-174",
      layer: "far",
      motif: "vine",
      x: 2733,
      y: 231,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-33-175",
      layer: "mid",
      motif: "glassBerry",
      x: 2830,
      y: 272,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-33-176",
      layer: "near",
      motif: "cloud",
      x: 2927,
      y: 313,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-33-177",
      layer: "mid",
      motif: "windmill",
      x: 3024,
      y: 354,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-33-178",
      layer: "far",
      motif: "grass",
      x: 3121,
      y: 395,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-33-179",
      layer: "mid",
      motif: "gear",
      x: 3218,
      y: 436,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-33-180",
      layer: "far",
      motif: "vine",
      x: 3315,
      y: 47,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-33",
    x: 4736,
    y: 448,
    nextLevelId: "level-34"
  }
};
