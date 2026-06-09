import type { LevelDefinition } from "../schema";

export const LEVEL_13: LevelDefinition = {
  id: "level-13",
  index: 12,
  title: "Glassberry Lift 06",
  chapter: "Glassberry Lift",
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
    "...................................#####.........................######........................#######.......................###..........................",
    "..............................####..........................#####.........................######........................#######...........................",
    ".........................===...........................====..........................=====.........................======........................=........",
    "....................#######.......................###...........................####..........................#####.........................######........",
    "...............######........................#######.......................###...........................####..........................#####..............",
    "..........=====.........................=W====........................=======W......................===..........W................====....................",
    "................................S...................................S...................................S.................................................",
    "...P...................W...................................W...................................W...................................W................G.....",
    "..............S...................................S...................................S...................................S...............................",
    "^################^..##############...#############....############..^#############...^############....^###########..###^##########...###^################^",
    "##################^.##############^.^#############^.^.############^.##############^.^#############^.^.############^.##############^.^#####################"
  ],
  enemies: [
    {
      id: "enemy-13-1",
      kind: "beetle",
      x: 476,
      y: 448,
      patrolMin: 381,
      patrolMax: 596,
      speed: 44,
      phase: 12
    },
    {
      id: "enemy-13-2",
      kind: "acorn",
      x: 806,
      y: 416,
      patrolMin: 693,
      patrolMax: 948,
      speed: 56,
      phase: 15
    },
    {
      id: "enemy-13-3",
      kind: "lantern",
      x: 1136,
      y: 384,
      patrolMin: 1005,
      patrolMax: 1300,
      speed: 68,
      phase: 18
    },
    {
      id: "enemy-13-4",
      kind: "charger",
      x: 1466,
      y: 352,
      patrolMin: 1317,
      patrolMax: 1652,
      speed: 80,
      phase: 21
    },
    {
      id: "enemy-13-5",
      kind: "spiker",
      x: 1796,
      y: 320,
      patrolMin: 1701,
      patrolMax: 2004,
      speed: 92,
      phase: 24
    },
    {
      id: "enemy-13-6",
      kind: "turret",
      x: 2126,
      y: 448,
      patrolMin: 2013,
      patrolMax: 2246,
      speed: 104,
      phase: 27
    },
    {
      id: "enemy-13-7",
      kind: "beetle",
      x: 2456,
      y: 416,
      patrolMin: 2325,
      patrolMax: 2598,
      speed: 44,
      phase: 30
    },
    {
      id: "enemy-13-8",
      kind: "acorn",
      x: 2786,
      y: 384,
      patrolMin: 2637,
      patrolMax: 2950,
      speed: 56,
      phase: 33
    },
    {
      id: "enemy-13-9",
      kind: "lantern",
      x: 3116,
      y: 352,
      patrolMin: 3021,
      patrolMax: 3302,
      speed: 68,
      phase: 36
    },
    {
      id: "enemy-13-10",
      kind: "charger",
      x: 3446,
      y: 320,
      patrolMin: 3333,
      patrolMax: 3654,
      speed: 80,
      phase: 39
    },
    {
      id: "enemy-13-11",
      kind: "spiker",
      x: 3776,
      y: 448,
      patrolMin: 3645,
      patrolMax: 3896,
      speed: 92,
      phase: 42
    },
    {
      id: "enemy-13-12",
      kind: "turret",
      x: 4106,
      y: 416,
      patrolMin: 3957,
      patrolMax: 4248,
      speed: 104,
      phase: 45
    },
    {
      id: "enemy-13-13",
      kind: "beetle",
      x: 4436,
      y: 384,
      patrolMin: 4341,
      patrolMax: 4600,
      speed: 44,
      phase: 48
    },
    {
      id: "enemy-13-14",
      kind: "acorn",
      x: 4766,
      y: 352,
      patrolMin: 4653,
      patrolMax: 4748,
      speed: 56,
      phase: 51
    },
    {
      id: "enemy-13-15",
      kind: "lantern",
      x: 5096,
      y: 320,
      patrolMin: 4965,
      patrolMax: 4748,
      speed: 68,
      phase: 54
    },
    {
      id: "enemy-13-16",
      kind: "charger",
      x: 5426,
      y: 448,
      patrolMin: 5277,
      patrolMax: 4748,
      speed: 80,
      phase: 57
    }
  ],
  collectibles: [
    {
      id: "collectible-13-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 180,
      y: 140
    },
    {
      id: "collectible-13-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 250,
      y: 193
    },
    {
      id: "collectible-13-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 320,
      y: 246
    },
    {
      id: "collectible-13-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 390,
      y: 266
    },
    {
      id: "collectible-13-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 460,
      y: 319
    },
    {
      id: "collectible-13-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 530,
      y: 372
    },
    {
      id: "collectible-13-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 600,
      y: 392
    },
    {
      id: "collectible-13-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 670,
      y: 151
    },
    {
      id: "collectible-13-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 740,
      y: 204
    },
    {
      id: "collectible-13-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 810,
      y: 224
    },
    {
      id: "collectible-13-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 880,
      y: 277
    },
    {
      id: "collectible-13-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 950,
      y: 330
    },
    {
      id: "collectible-13-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1020,
      y: 350
    },
    {
      id: "collectible-13-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1090,
      y: 403
    },
    {
      id: "collectible-13-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1160,
      y: 162
    },
    {
      id: "collectible-13-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1230,
      y: 182
    },
    {
      id: "collectible-13-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1300,
      y: 235
    },
    {
      id: "collectible-13-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1370,
      y: 288
    },
    {
      id: "collectible-13-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1440,
      y: 308
    },
    {
      id: "collectible-13-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1510,
      y: 361
    },
    {
      id: "collectible-13-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1580,
      y: 414
    },
    {
      id: "collectible-13-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1650,
      y: 140
    },
    {
      id: "collectible-13-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1720,
      y: 193
    },
    {
      id: "collectible-13-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1790,
      y: 246
    },
    {
      id: "collectible-13-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1860,
      y: 266
    },
    {
      id: "collectible-13-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1930,
      y: 319
    },
    {
      id: "collectible-13-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2000,
      y: 372
    },
    {
      id: "collectible-13-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2070,
      y: 392
    },
    {
      id: "collectible-13-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2140,
      y: 151
    },
    {
      id: "collectible-13-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2210,
      y: 204
    },
    {
      id: "collectible-13-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2280,
      y: 224
    },
    {
      id: "collectible-13-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2350,
      y: 277
    },
    {
      id: "collectible-13-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2420,
      y: 330
    },
    {
      id: "collectible-13-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2490,
      y: 350
    },
    {
      id: "collectible-13-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2560,
      y: 403
    },
    {
      id: "collectible-13-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2630,
      y: 162
    },
    {
      id: "collectible-13-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2700,
      y: 182
    },
    {
      id: "collectible-13-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2770,
      y: 235
    },
    {
      id: "collectible-13-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2840,
      y: 288
    },
    {
      id: "collectible-13-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2910,
      y: 308
    },
    {
      id: "collectible-13-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2980,
      y: 361
    },
    {
      id: "collectible-13-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3050,
      y: 414
    },
    {
      id: "collectible-13-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3120,
      y: 140
    },
    {
      id: "collectible-13-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3190,
      y: 193
    },
    {
      id: "collectible-13-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3260,
      y: 246
    },
    {
      id: "collectible-13-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3330,
      y: 266
    },
    {
      id: "collectible-13-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3400,
      y: 319
    },
    {
      id: "collectible-13-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3470,
      y: 372
    },
    {
      id: "collectible-13-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3540,
      y: 392
    },
    {
      id: "collectible-13-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3610,
      y: 151
    },
    {
      id: "collectible-13-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3680,
      y: 204
    },
    {
      id: "collectible-13-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3750,
      y: 224
    },
    {
      id: "collectible-13-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3820,
      y: 277
    },
    {
      id: "collectible-13-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3890,
      y: 330
    },
    {
      id: "collectible-13-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3960,
      y: 350
    },
    {
      id: "collectible-13-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4030,
      y: 403
    },
    {
      id: "collectible-13-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4100,
      y: 162
    },
    {
      id: "collectible-13-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4170,
      y: 182
    },
    {
      id: "collectible-13-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4240,
      y: 235
    },
    {
      id: "collectible-13-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4310,
      y: 288
    },
    {
      id: "collectible-13-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4380,
      y: 308
    },
    {
      id: "collectible-13-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4450,
      y: 361
    },
    {
      id: "collectible-13-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4520,
      y: 414
    },
    {
      id: "collectible-13-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4590,
      y: 140
    },
    {
      id: "collectible-13-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4660,
      y: 193
    },
    {
      id: "collectible-13-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4730,
      y: 246
    },
    {
      id: "collectible-13-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4800,
      y: 266
    },
    {
      id: "collectible-13-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4870,
      y: 319
    },
    {
      id: "collectible-13-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4940,
      y: 372
    },
    {
      id: "collectible-13-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5010,
      y: 392
    },
    {
      id: "collectible-13-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5080,
      y: 151
    },
    {
      id: "collectible-13-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5150,
      y: 204
    },
    {
      id: "collectible-13-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5220,
      y: 224
    },
    {
      id: "collectible-13-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5290,
      y: 277
    }
  ],
  powerups: [
    {
      id: "powerup-13-1",
      kind: "shield",
      durationMs: 4800,
      x: 500,
      y: 130
    },
    {
      id: "powerup-13-2",
      kind: "springBoots",
      durationMs: 5700,
      x: 1330,
      y: 182
    },
    {
      id: "powerup-13-3",
      kind: "starburst",
      durationMs: 6600,
      x: 2160,
      y: 234
    },
    {
      id: "powerup-13-4",
      kind: "gliderLeaf",
      durationMs: 7500,
      x: 2990,
      y: 286
    },
    {
      id: "powerup-13-5",
      kind: "shield",
      durationMs: 4800,
      x: 3820,
      y: 338
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-13-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 1.2000000000000002
    },
    {
      id: "moving-platform-13-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 1.9000000000000001
    },
    {
      id: "moving-platform-13-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 2.6
    },
    {
      id: "moving-platform-13-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 3.3
    },
    {
      id: "moving-platform-13-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 4
    },
    {
      id: "moving-platform-13-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 4.7
    },
    {
      id: "moving-platform-13-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 5.3999999999999995
    },
    {
      id: "moving-platform-13-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 6.1
    },
    {
      id: "moving-platform-13-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 6.8
    }
  ],
  hazards: [
    {
      id: "hazard-13-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 12
    },
    {
      id: "hazard-13-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 13
    },
    {
      id: "hazard-13-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 14
    },
    {
      id: "hazard-13-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 15
    },
    {
      id: "hazard-13-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 16
    },
    {
      id: "hazard-13-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 17
    },
    {
      id: "hazard-13-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 18
    },
    {
      id: "hazard-13-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 19
    },
    {
      id: "hazard-13-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 20
    },
    {
      id: "hazard-13-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 21
    },
    {
      id: "hazard-13-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 22
    },
    {
      id: "hazard-13-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 23
    },
    {
      id: "hazard-13-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 24
    },
    {
      id: "hazard-13-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 25
    },
    {
      id: "hazard-13-15",
      kind: "thorn",
      x: 5660,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 26
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-13-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-13-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-13-1",
      x: 640,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-13-2",
      x: 1410,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-13-3",
      x: 2180,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-13-4",
      x: 2950,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-13-5",
      x: 3720,
      y: 416,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-13-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-13-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-13-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    }
  ],
  decorations: [
    {
      id: "decor-13-1",
      layer: "near",
      motif: "gear",
      x: 276,
      y: 188,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-2",
      layer: "far",
      motif: "vine",
      x: 373,
      y: 229,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-3",
      layer: "mid",
      motif: "glassBerry",
      x: 470,
      y: 270,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-4",
      layer: "far",
      motif: "cloud",
      x: 567,
      y: 311,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-5",
      layer: "mid",
      motif: "windmill",
      x: 664,
      y: 352,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-6",
      layer: "near",
      motif: "grass",
      x: 761,
      y: 393,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-7",
      layer: "mid",
      motif: "gear",
      x: 858,
      y: 434,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-8",
      layer: "far",
      motif: "vine",
      x: 955,
      y: 45,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-9",
      layer: "mid",
      motif: "glassBerry",
      x: 1052,
      y: 86,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-10",
      layer: "far",
      motif: "cloud",
      x: 1149,
      y: 127,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-11",
      layer: "near",
      motif: "windmill",
      x: 1246,
      y: 168,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-12",
      layer: "far",
      motif: "grass",
      x: 1343,
      y: 209,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-13",
      layer: "mid",
      motif: "gear",
      x: 1440,
      y: 250,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-14",
      layer: "far",
      motif: "vine",
      x: 1537,
      y: 291,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-15",
      layer: "mid",
      motif: "glassBerry",
      x: 1634,
      y: 332,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-16",
      layer: "near",
      motif: "cloud",
      x: 1731,
      y: 373,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-17",
      layer: "mid",
      motif: "windmill",
      x: 1828,
      y: 414,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-18",
      layer: "far",
      motif: "grass",
      x: 1925,
      y: 455,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-19",
      layer: "mid",
      motif: "gear",
      x: 2022,
      y: 66,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-20",
      layer: "far",
      motif: "vine",
      x: 2119,
      y: 107,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-21",
      layer: "near",
      motif: "glassBerry",
      x: 2216,
      y: 148,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-22",
      layer: "far",
      motif: "cloud",
      x: 2313,
      y: 189,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-23",
      layer: "mid",
      motif: "windmill",
      x: 2410,
      y: 230,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-24",
      layer: "far",
      motif: "grass",
      x: 2507,
      y: 271,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-25",
      layer: "mid",
      motif: "gear",
      x: 2604,
      y: 312,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-26",
      layer: "near",
      motif: "vine",
      x: 2701,
      y: 353,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-27",
      layer: "mid",
      motif: "glassBerry",
      x: 2798,
      y: 394,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-28",
      layer: "far",
      motif: "cloud",
      x: 2895,
      y: 435,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-29",
      layer: "mid",
      motif: "windmill",
      x: 2992,
      y: 46,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-30",
      layer: "far",
      motif: "grass",
      x: 3089,
      y: 87,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-31",
      layer: "near",
      motif: "gear",
      x: 3186,
      y: 128,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-32",
      layer: "far",
      motif: "vine",
      x: 3283,
      y: 169,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-33",
      layer: "mid",
      motif: "glassBerry",
      x: 3380,
      y: 210,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-34",
      layer: "far",
      motif: "cloud",
      x: 3477,
      y: 251,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-35",
      layer: "mid",
      motif: "windmill",
      x: 3574,
      y: 292,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-36",
      layer: "near",
      motif: "grass",
      x: 3671,
      y: 333,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-37",
      layer: "mid",
      motif: "gear",
      x: 3768,
      y: 374,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-38",
      layer: "far",
      motif: "vine",
      x: 3865,
      y: 415,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-39",
      layer: "mid",
      motif: "glassBerry",
      x: 3962,
      y: 456,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-40",
      layer: "far",
      motif: "cloud",
      x: 4059,
      y: 67,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-41",
      layer: "near",
      motif: "windmill",
      x: 4156,
      y: 108,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-42",
      layer: "far",
      motif: "grass",
      x: 4253,
      y: 149,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-43",
      layer: "mid",
      motif: "gear",
      x: 4350,
      y: 190,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-44",
      layer: "far",
      motif: "vine",
      x: 4447,
      y: 231,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-45",
      layer: "mid",
      motif: "glassBerry",
      x: 4544,
      y: 272,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-46",
      layer: "near",
      motif: "cloud",
      x: 4641,
      y: 313,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-47",
      layer: "mid",
      motif: "windmill",
      x: 4738,
      y: 354,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-48",
      layer: "far",
      motif: "grass",
      x: 4835,
      y: 395,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-49",
      layer: "mid",
      motif: "gear",
      x: 4,
      y: 436,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-50",
      layer: "far",
      motif: "vine",
      x: 101,
      y: 47,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-51",
      layer: "near",
      motif: "glassBerry",
      x: 198,
      y: 88,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-52",
      layer: "far",
      motif: "cloud",
      x: 295,
      y: 129,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-53",
      layer: "mid",
      motif: "windmill",
      x: 392,
      y: 170,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-54",
      layer: "far",
      motif: "grass",
      x: 489,
      y: 211,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-55",
      layer: "mid",
      motif: "gear",
      x: 586,
      y: 252,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-56",
      layer: "near",
      motif: "vine",
      x: 683,
      y: 293,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-57",
      layer: "mid",
      motif: "glassBerry",
      x: 780,
      y: 334,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-58",
      layer: "far",
      motif: "cloud",
      x: 877,
      y: 375,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-59",
      layer: "mid",
      motif: "windmill",
      x: 974,
      y: 416,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-60",
      layer: "far",
      motif: "grass",
      x: 1071,
      y: 457,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-61",
      layer: "near",
      motif: "gear",
      x: 1168,
      y: 68,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-62",
      layer: "far",
      motif: "vine",
      x: 1265,
      y: 109,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-63",
      layer: "mid",
      motif: "glassBerry",
      x: 1362,
      y: 150,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-64",
      layer: "far",
      motif: "cloud",
      x: 1459,
      y: 191,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-65",
      layer: "mid",
      motif: "windmill",
      x: 1556,
      y: 232,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-66",
      layer: "near",
      motif: "grass",
      x: 1653,
      y: 273,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-67",
      layer: "mid",
      motif: "gear",
      x: 1750,
      y: 314,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-68",
      layer: "far",
      motif: "vine",
      x: 1847,
      y: 355,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-69",
      layer: "mid",
      motif: "glassBerry",
      x: 1944,
      y: 396,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-70",
      layer: "far",
      motif: "cloud",
      x: 2041,
      y: 437,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-71",
      layer: "near",
      motif: "windmill",
      x: 2138,
      y: 48,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-72",
      layer: "far",
      motif: "grass",
      x: 2235,
      y: 89,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-73",
      layer: "mid",
      motif: "gear",
      x: 2332,
      y: 130,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-74",
      layer: "far",
      motif: "vine",
      x: 2429,
      y: 171,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-75",
      layer: "mid",
      motif: "glassBerry",
      x: 2526,
      y: 212,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-76",
      layer: "near",
      motif: "cloud",
      x: 2623,
      y: 253,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-77",
      layer: "mid",
      motif: "windmill",
      x: 2720,
      y: 294,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-78",
      layer: "far",
      motif: "grass",
      x: 2817,
      y: 335,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-79",
      layer: "mid",
      motif: "gear",
      x: 2914,
      y: 376,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-80",
      layer: "far",
      motif: "vine",
      x: 3011,
      y: 417,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-81",
      layer: "near",
      motif: "glassBerry",
      x: 3108,
      y: 458,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-82",
      layer: "far",
      motif: "cloud",
      x: 3205,
      y: 69,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-83",
      layer: "mid",
      motif: "windmill",
      x: 3302,
      y: 110,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-84",
      layer: "far",
      motif: "grass",
      x: 3399,
      y: 151,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-85",
      layer: "mid",
      motif: "gear",
      x: 3496,
      y: 192,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-86",
      layer: "near",
      motif: "vine",
      x: 3593,
      y: 233,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-87",
      layer: "mid",
      motif: "glassBerry",
      x: 3690,
      y: 274,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-88",
      layer: "far",
      motif: "cloud",
      x: 3787,
      y: 315,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-89",
      layer: "mid",
      motif: "windmill",
      x: 3884,
      y: 356,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-90",
      layer: "far",
      motif: "grass",
      x: 3981,
      y: 397,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-91",
      layer: "near",
      motif: "gear",
      x: 4078,
      y: 438,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-92",
      layer: "far",
      motif: "vine",
      x: 4175,
      y: 49,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-93",
      layer: "mid",
      motif: "glassBerry",
      x: 4272,
      y: 90,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-94",
      layer: "far",
      motif: "cloud",
      x: 4369,
      y: 131,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-95",
      layer: "mid",
      motif: "windmill",
      x: 4466,
      y: 172,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-96",
      layer: "near",
      motif: "grass",
      x: 4563,
      y: 213,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-97",
      layer: "mid",
      motif: "gear",
      x: 4660,
      y: 254,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-98",
      layer: "far",
      motif: "vine",
      x: 4757,
      y: 295,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-99",
      layer: "mid",
      motif: "glassBerry",
      x: 4854,
      y: 336,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-100",
      layer: "far",
      motif: "cloud",
      x: 23,
      y: 377,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-101",
      layer: "near",
      motif: "windmill",
      x: 120,
      y: 418,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-102",
      layer: "far",
      motif: "grass",
      x: 217,
      y: 459,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-103",
      layer: "mid",
      motif: "gear",
      x: 314,
      y: 70,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-104",
      layer: "far",
      motif: "vine",
      x: 411,
      y: 111,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-105",
      layer: "mid",
      motif: "glassBerry",
      x: 508,
      y: 152,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-106",
      layer: "near",
      motif: "cloud",
      x: 605,
      y: 193,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-107",
      layer: "mid",
      motif: "windmill",
      x: 702,
      y: 234,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-108",
      layer: "far",
      motif: "grass",
      x: 799,
      y: 275,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-109",
      layer: "mid",
      motif: "gear",
      x: 896,
      y: 316,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-110",
      layer: "far",
      motif: "vine",
      x: 993,
      y: 357,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-111",
      layer: "near",
      motif: "glassBerry",
      x: 1090,
      y: 398,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-112",
      layer: "far",
      motif: "cloud",
      x: 1187,
      y: 439,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-113",
      layer: "mid",
      motif: "windmill",
      x: 1284,
      y: 50,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-114",
      layer: "far",
      motif: "grass",
      x: 1381,
      y: 91,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-115",
      layer: "mid",
      motif: "gear",
      x: 1478,
      y: 132,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-116",
      layer: "near",
      motif: "vine",
      x: 1575,
      y: 173,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-117",
      layer: "mid",
      motif: "glassBerry",
      x: 1672,
      y: 214,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-118",
      layer: "far",
      motif: "cloud",
      x: 1769,
      y: 255,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-119",
      layer: "mid",
      motif: "windmill",
      x: 1866,
      y: 296,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-120",
      layer: "far",
      motif: "grass",
      x: 1963,
      y: 337,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-121",
      layer: "near",
      motif: "gear",
      x: 2060,
      y: 378,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-122",
      layer: "far",
      motif: "vine",
      x: 2157,
      y: 419,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-123",
      layer: "mid",
      motif: "glassBerry",
      x: 2254,
      y: 460,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-124",
      layer: "far",
      motif: "cloud",
      x: 2351,
      y: 71,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-125",
      layer: "mid",
      motif: "windmill",
      x: 2448,
      y: 112,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-126",
      layer: "near",
      motif: "grass",
      x: 2545,
      y: 153,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-127",
      layer: "mid",
      motif: "gear",
      x: 2642,
      y: 194,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-128",
      layer: "far",
      motif: "vine",
      x: 2739,
      y: 235,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-129",
      layer: "mid",
      motif: "glassBerry",
      x: 2836,
      y: 276,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-130",
      layer: "far",
      motif: "cloud",
      x: 2933,
      y: 317,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-131",
      layer: "near",
      motif: "windmill",
      x: 3030,
      y: 358,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-132",
      layer: "far",
      motif: "grass",
      x: 3127,
      y: 399,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-133",
      layer: "mid",
      motif: "gear",
      x: 3224,
      y: 440,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-134",
      layer: "far",
      motif: "vine",
      x: 3321,
      y: 51,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-135",
      layer: "mid",
      motif: "glassBerry",
      x: 3418,
      y: 92,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-136",
      layer: "near",
      motif: "cloud",
      x: 3515,
      y: 133,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-137",
      layer: "mid",
      motif: "windmill",
      x: 3612,
      y: 174,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-138",
      layer: "far",
      motif: "grass",
      x: 3709,
      y: 215,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-139",
      layer: "mid",
      motif: "gear",
      x: 3806,
      y: 256,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-140",
      layer: "far",
      motif: "vine",
      x: 3903,
      y: 297,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-141",
      layer: "near",
      motif: "glassBerry",
      x: 4000,
      y: 338,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-142",
      layer: "far",
      motif: "cloud",
      x: 4097,
      y: 379,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-143",
      layer: "mid",
      motif: "windmill",
      x: 4194,
      y: 420,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-144",
      layer: "far",
      motif: "grass",
      x: 4291,
      y: 461,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-145",
      layer: "mid",
      motif: "gear",
      x: 4388,
      y: 72,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-146",
      layer: "near",
      motif: "vine",
      x: 4485,
      y: 113,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-147",
      layer: "mid",
      motif: "glassBerry",
      x: 4582,
      y: 154,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-148",
      layer: "far",
      motif: "cloud",
      x: 4679,
      y: 195,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-149",
      layer: "mid",
      motif: "windmill",
      x: 4776,
      y: 236,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-150",
      layer: "far",
      motif: "grass",
      x: 4873,
      y: 277,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-151",
      layer: "near",
      motif: "gear",
      x: 42,
      y: 318,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-152",
      layer: "far",
      motif: "vine",
      x: 139,
      y: 359,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-153",
      layer: "mid",
      motif: "glassBerry",
      x: 236,
      y: 400,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-154",
      layer: "far",
      motif: "cloud",
      x: 333,
      y: 441,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-155",
      layer: "mid",
      motif: "windmill",
      x: 430,
      y: 52,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-156",
      layer: "near",
      motif: "grass",
      x: 527,
      y: 93,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-157",
      layer: "mid",
      motif: "gear",
      x: 624,
      y: 134,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-158",
      layer: "far",
      motif: "vine",
      x: 721,
      y: 175,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-159",
      layer: "mid",
      motif: "glassBerry",
      x: 818,
      y: 216,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-160",
      layer: "far",
      motif: "cloud",
      x: 915,
      y: 257,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-161",
      layer: "near",
      motif: "windmill",
      x: 1012,
      y: 298,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-162",
      layer: "far",
      motif: "grass",
      x: 1109,
      y: 339,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-163",
      layer: "mid",
      motif: "gear",
      x: 1206,
      y: 380,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-164",
      layer: "far",
      motif: "vine",
      x: 1303,
      y: 421,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-165",
      layer: "mid",
      motif: "glassBerry",
      x: 1400,
      y: 32,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-166",
      layer: "near",
      motif: "cloud",
      x: 1497,
      y: 73,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-167",
      layer: "mid",
      motif: "windmill",
      x: 1594,
      y: 114,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-168",
      layer: "far",
      motif: "grass",
      x: 1691,
      y: 155,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-169",
      layer: "mid",
      motif: "gear",
      x: 1788,
      y: 196,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-170",
      layer: "far",
      motif: "vine",
      x: 1885,
      y: 237,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-13-171",
      layer: "near",
      motif: "glassBerry",
      x: 1982,
      y: 278,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-172",
      layer: "far",
      motif: "cloud",
      x: 2079,
      y: 319,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-13-173",
      layer: "mid",
      motif: "windmill",
      x: 2176,
      y: 360,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-13-174",
      layer: "far",
      motif: "grass",
      x: 2273,
      y: 401,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-13-175",
      layer: "mid",
      motif: "gear",
      x: 2370,
      y: 442,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-13-176",
      layer: "near",
      motif: "vine",
      x: 2467,
      y: 53,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-13-177",
      layer: "mid",
      motif: "glassBerry",
      x: 2564,
      y: 94,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-13-178",
      layer: "far",
      motif: "cloud",
      x: 2661,
      y: 135,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-13-179",
      layer: "mid",
      motif: "windmill",
      x: 2758,
      y: 176,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-13-180",
      layer: "far",
      motif: "grass",
      x: 2855,
      y: 217,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-13",
    x: 4736,
    y: 448,
    nextLevelId: "level-14"
  }
};
