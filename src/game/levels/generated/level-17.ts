import type { LevelDefinition } from "../schema";

export const LEVEL_17: LevelDefinition = {
  id: "level-17",
  index: 16,
  title: "Windmill Tangle 03",
  chapter: "Windmill Tangle",
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
    "...............#####.........................######........................#######.......................###...........................####...............",
    "..........====..........................=====.........................======........................=======.......................===.....................",
    "...................................####..........................#####.........................######........................#######......................",
    "..............................###...........................####..........................#####.........................######............................",
    ".........................=======.......................===...........................====..........................=====.........................=........",
    "....................######...................W....#######.......................#W#...........................####...W......................#####.........",
    "....................................S...................................S...................................S.............................................",
    "...P.......................W...................................W...................................W...................................W............G.....",
    "..................S...................................S...................................S...................................S...........................",
    "^################^...#############^..##############^....############^...#############^..##############^....############^...#############^################^",
    "##################^.^##############.^###############^.^.#############.^.##############^.###############.^.^#############^.^###############################"
  ],
  enemies: [
    {
      id: "enemy-17-1",
      kind: "spiker",
      x: 448,
      y: 448,
      patrolMin: 353,
      patrolMax: 568,
      speed: 92,
      phase: 16
    },
    {
      id: "enemy-17-2",
      kind: "turret",
      x: 778,
      y: 416,
      patrolMin: 665,
      patrolMax: 920,
      speed: 104,
      phase: 19
    },
    {
      id: "enemy-17-3",
      kind: "beetle",
      x: 1108,
      y: 384,
      patrolMin: 977,
      patrolMax: 1272,
      speed: 44,
      phase: 22
    },
    {
      id: "enemy-17-4",
      kind: "acorn",
      x: 1438,
      y: 352,
      patrolMin: 1289,
      patrolMax: 1624,
      speed: 56,
      phase: 25
    },
    {
      id: "enemy-17-5",
      kind: "lantern",
      x: 1768,
      y: 320,
      patrolMin: 1673,
      patrolMax: 1976,
      speed: 68,
      phase: 28
    },
    {
      id: "enemy-17-6",
      kind: "charger",
      x: 2098,
      y: 448,
      patrolMin: 1985,
      patrolMax: 2218,
      speed: 80,
      phase: 31
    },
    {
      id: "enemy-17-7",
      kind: "spiker",
      x: 2428,
      y: 416,
      patrolMin: 2297,
      patrolMax: 2570,
      speed: 92,
      phase: 34
    },
    {
      id: "enemy-17-8",
      kind: "turret",
      x: 2758,
      y: 384,
      patrolMin: 2609,
      patrolMax: 2922,
      speed: 104,
      phase: 37
    },
    {
      id: "enemy-17-9",
      kind: "beetle",
      x: 3088,
      y: 352,
      patrolMin: 2993,
      patrolMax: 3274,
      speed: 44,
      phase: 40
    },
    {
      id: "enemy-17-10",
      kind: "acorn",
      x: 3418,
      y: 320,
      patrolMin: 3305,
      patrolMax: 3626,
      speed: 56,
      phase: 43
    },
    {
      id: "enemy-17-11",
      kind: "lantern",
      x: 3748,
      y: 448,
      patrolMin: 3617,
      patrolMax: 3868,
      speed: 68,
      phase: 46
    },
    {
      id: "enemy-17-12",
      kind: "charger",
      x: 4078,
      y: 416,
      patrolMin: 3929,
      patrolMax: 4220,
      speed: 80,
      phase: 49
    }
  ],
  collectibles: [
    {
      id: "collectible-17-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 180,
      y: 151
    },
    {
      id: "collectible-17-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 250,
      y: 204
    },
    {
      id: "collectible-17-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 320,
      y: 224
    },
    {
      id: "collectible-17-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 390,
      y: 277
    },
    {
      id: "collectible-17-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 460,
      y: 330
    },
    {
      id: "collectible-17-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 530,
      y: 350
    },
    {
      id: "collectible-17-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 600,
      y: 403
    },
    {
      id: "collectible-17-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 670,
      y: 162
    },
    {
      id: "collectible-17-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 740,
      y: 182
    },
    {
      id: "collectible-17-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 810,
      y: 235
    },
    {
      id: "collectible-17-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 880,
      y: 288
    },
    {
      id: "collectible-17-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 950,
      y: 308
    },
    {
      id: "collectible-17-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1020,
      y: 361
    },
    {
      id: "collectible-17-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1090,
      y: 414
    },
    {
      id: "collectible-17-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1160,
      y: 140
    },
    {
      id: "collectible-17-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1230,
      y: 193
    },
    {
      id: "collectible-17-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1300,
      y: 246
    },
    {
      id: "collectible-17-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1370,
      y: 266
    },
    {
      id: "collectible-17-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1440,
      y: 319
    },
    {
      id: "collectible-17-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1510,
      y: 372
    },
    {
      id: "collectible-17-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1580,
      y: 392
    },
    {
      id: "collectible-17-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1650,
      y: 151
    },
    {
      id: "collectible-17-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1720,
      y: 204
    },
    {
      id: "collectible-17-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1790,
      y: 224
    },
    {
      id: "collectible-17-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1860,
      y: 277
    },
    {
      id: "collectible-17-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1930,
      y: 330
    },
    {
      id: "collectible-17-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2000,
      y: 350
    },
    {
      id: "collectible-17-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2070,
      y: 403
    },
    {
      id: "collectible-17-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2140,
      y: 162
    },
    {
      id: "collectible-17-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2210,
      y: 182
    },
    {
      id: "collectible-17-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2280,
      y: 235
    },
    {
      id: "collectible-17-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2350,
      y: 288
    },
    {
      id: "collectible-17-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2420,
      y: 308
    },
    {
      id: "collectible-17-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2490,
      y: 361
    },
    {
      id: "collectible-17-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2560,
      y: 414
    },
    {
      id: "collectible-17-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2630,
      y: 140
    },
    {
      id: "collectible-17-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2700,
      y: 193
    },
    {
      id: "collectible-17-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2770,
      y: 246
    },
    {
      id: "collectible-17-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2840,
      y: 266
    },
    {
      id: "collectible-17-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2910,
      y: 319
    },
    {
      id: "collectible-17-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2980,
      y: 372
    },
    {
      id: "collectible-17-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3050,
      y: 392
    },
    {
      id: "collectible-17-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3120,
      y: 151
    },
    {
      id: "collectible-17-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3190,
      y: 204
    },
    {
      id: "collectible-17-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3260,
      y: 224
    },
    {
      id: "collectible-17-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3330,
      y: 277
    },
    {
      id: "collectible-17-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3400,
      y: 330
    },
    {
      id: "collectible-17-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3470,
      y: 350
    },
    {
      id: "collectible-17-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3540,
      y: 403
    },
    {
      id: "collectible-17-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3610,
      y: 162
    },
    {
      id: "collectible-17-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3680,
      y: 182
    },
    {
      id: "collectible-17-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3750,
      y: 235
    },
    {
      id: "collectible-17-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3820,
      y: 288
    },
    {
      id: "collectible-17-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3890,
      y: 308
    },
    {
      id: "collectible-17-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3960,
      y: 361
    },
    {
      id: "collectible-17-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4030,
      y: 414
    },
    {
      id: "collectible-17-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4100,
      y: 140
    },
    {
      id: "collectible-17-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4170,
      y: 193
    },
    {
      id: "collectible-17-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4240,
      y: 246
    },
    {
      id: "collectible-17-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4310,
      y: 266
    },
    {
      id: "collectible-17-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4380,
      y: 319
    },
    {
      id: "collectible-17-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4450,
      y: 372
    },
    {
      id: "collectible-17-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4520,
      y: 392
    },
    {
      id: "collectible-17-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4590,
      y: 151
    },
    {
      id: "collectible-17-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4660,
      y: 204
    },
    {
      id: "collectible-17-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4730,
      y: 224
    },
    {
      id: "collectible-17-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4800,
      y: 277
    },
    {
      id: "collectible-17-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4870,
      y: 330
    },
    {
      id: "collectible-17-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4940,
      y: 350
    },
    {
      id: "collectible-17-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5010,
      y: 403
    },
    {
      id: "collectible-17-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5080,
      y: 162
    },
    {
      id: "collectible-17-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5150,
      y: 182
    },
    {
      id: "collectible-17-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5220,
      y: 235
    },
    {
      id: "collectible-17-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5290,
      y: 288
    },
    {
      id: "collectible-17-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5360,
      y: 308
    },
    {
      id: "collectible-17-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5430,
      y: 361
    },
    {
      id: "collectible-17-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5500,
      y: 414
    },
    {
      id: "collectible-17-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5570,
      y: 140
    },
    {
      id: "collectible-17-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5640,
      y: 193
    },
    {
      id: "collectible-17-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5710,
      y: 246
    },
    {
      id: "collectible-17-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5780,
      y: 266
    },
    {
      id: "collectible-17-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5850,
      y: 319
    },
    {
      id: "collectible-17-83",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5920,
      y: 372
    },
    {
      id: "collectible-17-84",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5990,
      y: 392
    },
    {
      id: "collectible-17-85",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6060,
      y: 151
    },
    {
      id: "collectible-17-86",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 6130,
      y: 204
    },
    {
      id: "collectible-17-87",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6200,
      y: 224
    },
    {
      id: "collectible-17-88",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6270,
      y: 277
    },
    {
      id: "collectible-17-89",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6340,
      y: 330
    },
    {
      id: "collectible-17-90",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6410,
      y: 350
    }
  ],
  powerups: [
    {
      id: "powerup-17-1",
      kind: "shield",
      durationMs: 4800,
      x: 620,
      y: 130
    },
    {
      id: "powerup-17-2",
      kind: "springBoots",
      durationMs: 5700,
      x: 1450,
      y: 182
    },
    {
      id: "powerup-17-3",
      kind: "starburst",
      durationMs: 6600,
      x: 2280,
      y: 234
    },
    {
      id: "powerup-17-4",
      kind: "gliderLeaf",
      durationMs: 7500,
      x: 3110,
      y: 286
    },
    {
      id: "powerup-17-5",
      kind: "shield",
      durationMs: 4800,
      x: 3940,
      y: 338
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-17-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 1.6
    },
    {
      id: "moving-platform-17-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 2.3
    },
    {
      id: "moving-platform-17-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 3
    },
    {
      id: "moving-platform-17-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 3.6999999999999997
    },
    {
      id: "moving-platform-17-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 4.4
    },
    {
      id: "moving-platform-17-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 5.1
    },
    {
      id: "moving-platform-17-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 5.799999999999999
    },
    {
      id: "moving-platform-17-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 6.5
    }
  ],
  hazards: [
    {
      id: "hazard-17-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 16
    },
    {
      id: "hazard-17-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 17
    },
    {
      id: "hazard-17-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 18
    },
    {
      id: "hazard-17-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 19
    },
    {
      id: "hazard-17-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 20
    },
    {
      id: "hazard-17-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 21
    },
    {
      id: "hazard-17-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 22
    },
    {
      id: "hazard-17-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 23
    },
    {
      id: "hazard-17-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 24
    },
    {
      id: "hazard-17-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 25
    },
    {
      id: "hazard-17-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 26
    },
    {
      id: "hazard-17-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 27
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-17-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-17-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-17-1",
      x: 674,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-17-2",
      x: 1444,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-17-3",
      x: 2214,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-17-4",
      x: 2984,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-17-5",
      x: 3754,
      y: 416,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-17-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-17-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-17-3",
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
      id: "decor-17-1",
      layer: "near",
      motif: "windmill",
      x: 368,
      y: 240,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-2",
      layer: "far",
      motif: "grass",
      x: 465,
      y: 281,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-3",
      layer: "mid",
      motif: "gear",
      x: 562,
      y: 322,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-4",
      layer: "far",
      motif: "vine",
      x: 659,
      y: 363,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-5",
      layer: "mid",
      motif: "glassBerry",
      x: 756,
      y: 404,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-6",
      layer: "near",
      motif: "cloud",
      x: 853,
      y: 445,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-7",
      layer: "mid",
      motif: "windmill",
      x: 950,
      y: 56,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-8",
      layer: "far",
      motif: "grass",
      x: 1047,
      y: 97,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-9",
      layer: "mid",
      motif: "gear",
      x: 1144,
      y: 138,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-10",
      layer: "far",
      motif: "vine",
      x: 1241,
      y: 179,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-11",
      layer: "near",
      motif: "glassBerry",
      x: 1338,
      y: 220,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-12",
      layer: "far",
      motif: "cloud",
      x: 1435,
      y: 261,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-13",
      layer: "mid",
      motif: "windmill",
      x: 1532,
      y: 302,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-14",
      layer: "far",
      motif: "grass",
      x: 1629,
      y: 343,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-15",
      layer: "mid",
      motif: "gear",
      x: 1726,
      y: 384,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-16",
      layer: "near",
      motif: "vine",
      x: 1823,
      y: 425,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-17",
      layer: "mid",
      motif: "glassBerry",
      x: 1920,
      y: 36,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-18",
      layer: "far",
      motif: "cloud",
      x: 2017,
      y: 77,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-19",
      layer: "mid",
      motif: "windmill",
      x: 2114,
      y: 118,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-20",
      layer: "far",
      motif: "grass",
      x: 2211,
      y: 159,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-21",
      layer: "near",
      motif: "gear",
      x: 2308,
      y: 200,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-22",
      layer: "far",
      motif: "vine",
      x: 2405,
      y: 241,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-23",
      layer: "mid",
      motif: "glassBerry",
      x: 2502,
      y: 282,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-24",
      layer: "far",
      motif: "cloud",
      x: 2599,
      y: 323,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-25",
      layer: "mid",
      motif: "windmill",
      x: 2696,
      y: 364,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-26",
      layer: "near",
      motif: "grass",
      x: 2793,
      y: 405,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-27",
      layer: "mid",
      motif: "gear",
      x: 2890,
      y: 446,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-28",
      layer: "far",
      motif: "vine",
      x: 2987,
      y: 57,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-29",
      layer: "mid",
      motif: "glassBerry",
      x: 3084,
      y: 98,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-30",
      layer: "far",
      motif: "cloud",
      x: 3181,
      y: 139,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-31",
      layer: "near",
      motif: "windmill",
      x: 3278,
      y: 180,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-32",
      layer: "far",
      motif: "grass",
      x: 3375,
      y: 221,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-33",
      layer: "mid",
      motif: "gear",
      x: 3472,
      y: 262,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-34",
      layer: "far",
      motif: "vine",
      x: 3569,
      y: 303,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-35",
      layer: "mid",
      motif: "glassBerry",
      x: 3666,
      y: 344,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-36",
      layer: "near",
      motif: "cloud",
      x: 3763,
      y: 385,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-37",
      layer: "mid",
      motif: "windmill",
      x: 3860,
      y: 426,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-38",
      layer: "far",
      motif: "grass",
      x: 3957,
      y: 37,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-39",
      layer: "mid",
      motif: "gear",
      x: 4054,
      y: 78,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-40",
      layer: "far",
      motif: "vine",
      x: 4151,
      y: 119,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-41",
      layer: "near",
      motif: "glassBerry",
      x: 4248,
      y: 160,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-42",
      layer: "far",
      motif: "cloud",
      x: 4345,
      y: 201,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-43",
      layer: "mid",
      motif: "windmill",
      x: 4442,
      y: 242,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-44",
      layer: "far",
      motif: "grass",
      x: 4539,
      y: 283,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-45",
      layer: "mid",
      motif: "gear",
      x: 4636,
      y: 324,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-46",
      layer: "near",
      motif: "vine",
      x: 4733,
      y: 365,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-47",
      layer: "mid",
      motif: "glassBerry",
      x: 4830,
      y: 406,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-48",
      layer: "far",
      motif: "cloud",
      x: 4927,
      y: 447,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-49",
      layer: "mid",
      motif: "windmill",
      x: 96,
      y: 58,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-50",
      layer: "far",
      motif: "grass",
      x: 193,
      y: 99,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-51",
      layer: "near",
      motif: "gear",
      x: 290,
      y: 140,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-52",
      layer: "far",
      motif: "vine",
      x: 387,
      y: 181,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-53",
      layer: "mid",
      motif: "glassBerry",
      x: 484,
      y: 222,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-54",
      layer: "far",
      motif: "cloud",
      x: 581,
      y: 263,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-55",
      layer: "mid",
      motif: "windmill",
      x: 678,
      y: 304,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-56",
      layer: "near",
      motif: "grass",
      x: 775,
      y: 345,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-57",
      layer: "mid",
      motif: "gear",
      x: 872,
      y: 386,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-58",
      layer: "far",
      motif: "vine",
      x: 969,
      y: 427,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-59",
      layer: "mid",
      motif: "glassBerry",
      x: 1066,
      y: 38,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-60",
      layer: "far",
      motif: "cloud",
      x: 1163,
      y: 79,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-61",
      layer: "near",
      motif: "windmill",
      x: 1260,
      y: 120,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-62",
      layer: "far",
      motif: "grass",
      x: 1357,
      y: 161,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-63",
      layer: "mid",
      motif: "gear",
      x: 1454,
      y: 202,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-64",
      layer: "far",
      motif: "vine",
      x: 1551,
      y: 243,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-65",
      layer: "mid",
      motif: "glassBerry",
      x: 1648,
      y: 284,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-66",
      layer: "near",
      motif: "cloud",
      x: 1745,
      y: 325,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-67",
      layer: "mid",
      motif: "windmill",
      x: 1842,
      y: 366,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-68",
      layer: "far",
      motif: "grass",
      x: 1939,
      y: 407,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-69",
      layer: "mid",
      motif: "gear",
      x: 2036,
      y: 448,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-70",
      layer: "far",
      motif: "vine",
      x: 2133,
      y: 59,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-71",
      layer: "near",
      motif: "glassBerry",
      x: 2230,
      y: 100,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-72",
      layer: "far",
      motif: "cloud",
      x: 2327,
      y: 141,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-73",
      layer: "mid",
      motif: "windmill",
      x: 2424,
      y: 182,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-74",
      layer: "far",
      motif: "grass",
      x: 2521,
      y: 223,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-75",
      layer: "mid",
      motif: "gear",
      x: 2618,
      y: 264,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-76",
      layer: "near",
      motif: "vine",
      x: 2715,
      y: 305,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-77",
      layer: "mid",
      motif: "glassBerry",
      x: 2812,
      y: 346,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-78",
      layer: "far",
      motif: "cloud",
      x: 2909,
      y: 387,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-79",
      layer: "mid",
      motif: "windmill",
      x: 3006,
      y: 428,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-80",
      layer: "far",
      motif: "grass",
      x: 3103,
      y: 39,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-81",
      layer: "near",
      motif: "gear",
      x: 3200,
      y: 80,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-82",
      layer: "far",
      motif: "vine",
      x: 3297,
      y: 121,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-83",
      layer: "mid",
      motif: "glassBerry",
      x: 3394,
      y: 162,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-84",
      layer: "far",
      motif: "cloud",
      x: 3491,
      y: 203,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-85",
      layer: "mid",
      motif: "windmill",
      x: 3588,
      y: 244,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-86",
      layer: "near",
      motif: "grass",
      x: 3685,
      y: 285,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-87",
      layer: "mid",
      motif: "gear",
      x: 3782,
      y: 326,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-88",
      layer: "far",
      motif: "vine",
      x: 3879,
      y: 367,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-89",
      layer: "mid",
      motif: "glassBerry",
      x: 3976,
      y: 408,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-90",
      layer: "far",
      motif: "cloud",
      x: 4073,
      y: 449,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-91",
      layer: "near",
      motif: "windmill",
      x: 4170,
      y: 60,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-92",
      layer: "far",
      motif: "grass",
      x: 4267,
      y: 101,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-93",
      layer: "mid",
      motif: "gear",
      x: 4364,
      y: 142,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-94",
      layer: "far",
      motif: "vine",
      x: 4461,
      y: 183,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-95",
      layer: "mid",
      motif: "glassBerry",
      x: 4558,
      y: 224,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-96",
      layer: "near",
      motif: "cloud",
      x: 4655,
      y: 265,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-97",
      layer: "mid",
      motif: "windmill",
      x: 4752,
      y: 306,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-98",
      layer: "far",
      motif: "grass",
      x: 4849,
      y: 347,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-99",
      layer: "mid",
      motif: "gear",
      x: 18,
      y: 388,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-100",
      layer: "far",
      motif: "vine",
      x: 115,
      y: 429,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-101",
      layer: "near",
      motif: "glassBerry",
      x: 212,
      y: 40,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-102",
      layer: "far",
      motif: "cloud",
      x: 309,
      y: 81,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-103",
      layer: "mid",
      motif: "windmill",
      x: 406,
      y: 122,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-104",
      layer: "far",
      motif: "grass",
      x: 503,
      y: 163,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-105",
      layer: "mid",
      motif: "gear",
      x: 600,
      y: 204,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-106",
      layer: "near",
      motif: "vine",
      x: 697,
      y: 245,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-107",
      layer: "mid",
      motif: "glassBerry",
      x: 794,
      y: 286,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-108",
      layer: "far",
      motif: "cloud",
      x: 891,
      y: 327,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-109",
      layer: "mid",
      motif: "windmill",
      x: 988,
      y: 368,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-110",
      layer: "far",
      motif: "grass",
      x: 1085,
      y: 409,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-111",
      layer: "near",
      motif: "gear",
      x: 1182,
      y: 450,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-112",
      layer: "far",
      motif: "vine",
      x: 1279,
      y: 61,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-113",
      layer: "mid",
      motif: "glassBerry",
      x: 1376,
      y: 102,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-114",
      layer: "far",
      motif: "cloud",
      x: 1473,
      y: 143,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-115",
      layer: "mid",
      motif: "windmill",
      x: 1570,
      y: 184,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-116",
      layer: "near",
      motif: "grass",
      x: 1667,
      y: 225,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-117",
      layer: "mid",
      motif: "gear",
      x: 1764,
      y: 266,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-118",
      layer: "far",
      motif: "vine",
      x: 1861,
      y: 307,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-119",
      layer: "mid",
      motif: "glassBerry",
      x: 1958,
      y: 348,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-120",
      layer: "far",
      motif: "cloud",
      x: 2055,
      y: 389,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-121",
      layer: "near",
      motif: "windmill",
      x: 2152,
      y: 430,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-122",
      layer: "far",
      motif: "grass",
      x: 2249,
      y: 41,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-123",
      layer: "mid",
      motif: "gear",
      x: 2346,
      y: 82,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-124",
      layer: "far",
      motif: "vine",
      x: 2443,
      y: 123,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-125",
      layer: "mid",
      motif: "glassBerry",
      x: 2540,
      y: 164,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-126",
      layer: "near",
      motif: "cloud",
      x: 2637,
      y: 205,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-127",
      layer: "mid",
      motif: "windmill",
      x: 2734,
      y: 246,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-128",
      layer: "far",
      motif: "grass",
      x: 2831,
      y: 287,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-129",
      layer: "mid",
      motif: "gear",
      x: 2928,
      y: 328,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-130",
      layer: "far",
      motif: "vine",
      x: 3025,
      y: 369,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-131",
      layer: "near",
      motif: "glassBerry",
      x: 3122,
      y: 410,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-132",
      layer: "far",
      motif: "cloud",
      x: 3219,
      y: 451,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-133",
      layer: "mid",
      motif: "windmill",
      x: 3316,
      y: 62,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-134",
      layer: "far",
      motif: "grass",
      x: 3413,
      y: 103,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-135",
      layer: "mid",
      motif: "gear",
      x: 3510,
      y: 144,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-136",
      layer: "near",
      motif: "vine",
      x: 3607,
      y: 185,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-137",
      layer: "mid",
      motif: "glassBerry",
      x: 3704,
      y: 226,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-138",
      layer: "far",
      motif: "cloud",
      x: 3801,
      y: 267,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-139",
      layer: "mid",
      motif: "windmill",
      x: 3898,
      y: 308,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-140",
      layer: "far",
      motif: "grass",
      x: 3995,
      y: 349,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-141",
      layer: "near",
      motif: "gear",
      x: 4092,
      y: 390,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-142",
      layer: "far",
      motif: "vine",
      x: 4189,
      y: 431,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-143",
      layer: "mid",
      motif: "glassBerry",
      x: 4286,
      y: 42,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-144",
      layer: "far",
      motif: "cloud",
      x: 4383,
      y: 83,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-145",
      layer: "mid",
      motif: "windmill",
      x: 4480,
      y: 124,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-146",
      layer: "near",
      motif: "grass",
      x: 4577,
      y: 165,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-147",
      layer: "mid",
      motif: "gear",
      x: 4674,
      y: 206,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-148",
      layer: "far",
      motif: "vine",
      x: 4771,
      y: 247,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-149",
      layer: "mid",
      motif: "glassBerry",
      x: 4868,
      y: 288,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-150",
      layer: "far",
      motif: "cloud",
      x: 37,
      y: 329,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-151",
      layer: "near",
      motif: "windmill",
      x: 134,
      y: 370,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-152",
      layer: "far",
      motif: "grass",
      x: 231,
      y: 411,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-153",
      layer: "mid",
      motif: "gear",
      x: 328,
      y: 452,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-154",
      layer: "far",
      motif: "vine",
      x: 425,
      y: 63,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-155",
      layer: "mid",
      motif: "glassBerry",
      x: 522,
      y: 104,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-156",
      layer: "near",
      motif: "cloud",
      x: 619,
      y: 145,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-157",
      layer: "mid",
      motif: "windmill",
      x: 716,
      y: 186,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-158",
      layer: "far",
      motif: "grass",
      x: 813,
      y: 227,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-159",
      layer: "mid",
      motif: "gear",
      x: 910,
      y: 268,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-160",
      layer: "far",
      motif: "vine",
      x: 1007,
      y: 309,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-161",
      layer: "near",
      motif: "glassBerry",
      x: 1104,
      y: 350,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-162",
      layer: "far",
      motif: "cloud",
      x: 1201,
      y: 391,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-163",
      layer: "mid",
      motif: "windmill",
      x: 1298,
      y: 432,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-164",
      layer: "far",
      motif: "grass",
      x: 1395,
      y: 43,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-165",
      layer: "mid",
      motif: "gear",
      x: 1492,
      y: 84,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-166",
      layer: "near",
      motif: "vine",
      x: 1589,
      y: 125,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-167",
      layer: "mid",
      motif: "glassBerry",
      x: 1686,
      y: 166,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-168",
      layer: "far",
      motif: "cloud",
      x: 1783,
      y: 207,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-169",
      layer: "mid",
      motif: "windmill",
      x: 1880,
      y: 248,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-170",
      layer: "far",
      motif: "grass",
      x: 1977,
      y: 289,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-17-171",
      layer: "near",
      motif: "gear",
      x: 2074,
      y: 330,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-172",
      layer: "far",
      motif: "vine",
      x: 2171,
      y: 371,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-17-173",
      layer: "mid",
      motif: "glassBerry",
      x: 2268,
      y: 412,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-17-174",
      layer: "far",
      motif: "cloud",
      x: 2365,
      y: 453,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-17-175",
      layer: "mid",
      motif: "windmill",
      x: 2462,
      y: 64,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-17-176",
      layer: "near",
      motif: "grass",
      x: 2559,
      y: 105,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-17-177",
      layer: "mid",
      motif: "gear",
      x: 2656,
      y: 146,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-17-178",
      layer: "far",
      motif: "vine",
      x: 2753,
      y: 187,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-17-179",
      layer: "mid",
      motif: "glassBerry",
      x: 2850,
      y: 228,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-17-180",
      layer: "far",
      motif: "cloud",
      x: 2947,
      y: 269,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-17",
    x: 4736,
    y: 448,
    nextLevelId: "level-18"
  }
};
