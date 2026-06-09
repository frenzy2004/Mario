import type { LevelDefinition } from "../schema";

export const LEVEL_12: LevelDefinition = {
  id: "level-12",
  index: 11,
  title: "Glassberry Lift 05",
  chapter: "Glassberry Lift",
  columns: 154,
  rows: 18,
  timeLimit: 244,
  palette: {
    skyTop: 988970,
    skyBottom: 3718648,
    ground: 1461859,
    groundAccent: 16436245,
    brass: 16436245,
    leaves: 3003583,
    hazard: 16007006,
    glow: 15792639
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
    ".............====..........................=====.........................======........................=======.......................===..................",
    "......................................####..........................#####.........................######........................#######...................",
    ".................................###...........................####..........................#####.........................######.........................",
    "............................=======.......................===...........................====..........................=====...............................",
    ".......................######........................#######.......................###...........................####..........................###........",
    "..................#####.......................W.######........................####W##.......................###.......W...................####............",
    ".....................................S...................................S...................................S............................................",
    "...P........................W...................................W...................................W...................................W...........G.....",
    "...................S...................................S...................................S...................................S..........................",
    "^################^....############^...#############^..##############^....############^...#############^..##############^....############^################^",
    "##################.^.^#############^.^##############.^###############^.^.#############.^.##############^.###############.^.^##############################"
  ],
  enemies: [
    {
      id: "enemy-12-1",
      kind: "turret",
      x: 448,
      y: 448,
      patrolMin: 353,
      patrolMax: 568,
      speed: 104,
      phase: 11
    },
    {
      id: "enemy-12-2",
      kind: "beetle",
      x: 778,
      y: 416,
      patrolMin: 665,
      patrolMax: 920,
      speed: 44,
      phase: 14
    },
    {
      id: "enemy-12-3",
      kind: "acorn",
      x: 1108,
      y: 384,
      patrolMin: 977,
      patrolMax: 1272,
      speed: 56,
      phase: 17
    },
    {
      id: "enemy-12-4",
      kind: "lantern",
      x: 1438,
      y: 352,
      patrolMin: 1289,
      patrolMax: 1624,
      speed: 68,
      phase: 20
    },
    {
      id: "enemy-12-5",
      kind: "charger",
      x: 1768,
      y: 320,
      patrolMin: 1673,
      patrolMax: 1976,
      speed: 80,
      phase: 23
    },
    {
      id: "enemy-12-6",
      kind: "spiker",
      x: 2098,
      y: 448,
      patrolMin: 1985,
      patrolMax: 2218,
      speed: 92,
      phase: 26
    },
    {
      id: "enemy-12-7",
      kind: "turret",
      x: 2428,
      y: 416,
      patrolMin: 2297,
      patrolMax: 2570,
      speed: 104,
      phase: 29
    },
    {
      id: "enemy-12-8",
      kind: "beetle",
      x: 2758,
      y: 384,
      patrolMin: 2609,
      patrolMax: 2922,
      speed: 44,
      phase: 32
    },
    {
      id: "enemy-12-9",
      kind: "acorn",
      x: 3088,
      y: 352,
      patrolMin: 2993,
      patrolMax: 3274,
      speed: 56,
      phase: 35
    },
    {
      id: "enemy-12-10",
      kind: "lantern",
      x: 3418,
      y: 320,
      patrolMin: 3305,
      patrolMax: 3626,
      speed: 68,
      phase: 38
    },
    {
      id: "enemy-12-11",
      kind: "charger",
      x: 3748,
      y: 448,
      patrolMin: 3617,
      patrolMax: 3868,
      speed: 80,
      phase: 41
    },
    {
      id: "enemy-12-12",
      kind: "spiker",
      x: 4078,
      y: 416,
      patrolMin: 3929,
      patrolMax: 4220,
      speed: 92,
      phase: 44
    },
    {
      id: "enemy-12-13",
      kind: "turret",
      x: 4408,
      y: 384,
      patrolMin: 4313,
      patrolMax: 4572,
      speed: 104,
      phase: 47
    },
    {
      id: "enemy-12-14",
      kind: "beetle",
      x: 4738,
      y: 352,
      patrolMin: 4625,
      patrolMax: 4748,
      speed: 44,
      phase: 50
    },
    {
      id: "enemy-12-15",
      kind: "acorn",
      x: 5068,
      y: 320,
      patrolMin: 4937,
      patrolMax: 4748,
      speed: 56,
      phase: 53
    }
  ],
  collectibles: [
    {
      id: "collectible-12-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 216,
      y: 162
    },
    {
      id: "collectible-12-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 286,
      y: 182
    },
    {
      id: "collectible-12-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 356,
      y: 235
    },
    {
      id: "collectible-12-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 426,
      y: 288
    },
    {
      id: "collectible-12-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 496,
      y: 308
    },
    {
      id: "collectible-12-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 566,
      y: 361
    },
    {
      id: "collectible-12-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 636,
      y: 414
    },
    {
      id: "collectible-12-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 706,
      y: 140
    },
    {
      id: "collectible-12-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 776,
      y: 193
    },
    {
      id: "collectible-12-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 846,
      y: 246
    },
    {
      id: "collectible-12-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 916,
      y: 266
    },
    {
      id: "collectible-12-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 986,
      y: 319
    },
    {
      id: "collectible-12-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1056,
      y: 372
    },
    {
      id: "collectible-12-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1126,
      y: 392
    },
    {
      id: "collectible-12-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1196,
      y: 151
    },
    {
      id: "collectible-12-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1266,
      y: 204
    },
    {
      id: "collectible-12-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1336,
      y: 224
    },
    {
      id: "collectible-12-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1406,
      y: 277
    },
    {
      id: "collectible-12-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1476,
      y: 330
    },
    {
      id: "collectible-12-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1546,
      y: 350
    },
    {
      id: "collectible-12-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1616,
      y: 403
    },
    {
      id: "collectible-12-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1686,
      y: 162
    },
    {
      id: "collectible-12-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1756,
      y: 182
    },
    {
      id: "collectible-12-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1826,
      y: 235
    },
    {
      id: "collectible-12-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1896,
      y: 288
    },
    {
      id: "collectible-12-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1966,
      y: 308
    },
    {
      id: "collectible-12-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2036,
      y: 361
    },
    {
      id: "collectible-12-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2106,
      y: 414
    },
    {
      id: "collectible-12-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2176,
      y: 140
    },
    {
      id: "collectible-12-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2246,
      y: 193
    },
    {
      id: "collectible-12-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2316,
      y: 246
    },
    {
      id: "collectible-12-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2386,
      y: 266
    },
    {
      id: "collectible-12-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2456,
      y: 319
    },
    {
      id: "collectible-12-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2526,
      y: 372
    },
    {
      id: "collectible-12-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2596,
      y: 392
    },
    {
      id: "collectible-12-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2666,
      y: 151
    },
    {
      id: "collectible-12-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2736,
      y: 204
    },
    {
      id: "collectible-12-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2806,
      y: 224
    },
    {
      id: "collectible-12-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2876,
      y: 277
    },
    {
      id: "collectible-12-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2946,
      y: 330
    },
    {
      id: "collectible-12-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3016,
      y: 350
    },
    {
      id: "collectible-12-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3086,
      y: 403
    },
    {
      id: "collectible-12-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3156,
      y: 162
    },
    {
      id: "collectible-12-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3226,
      y: 182
    },
    {
      id: "collectible-12-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3296,
      y: 235
    },
    {
      id: "collectible-12-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3366,
      y: 288
    },
    {
      id: "collectible-12-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3436,
      y: 308
    },
    {
      id: "collectible-12-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3506,
      y: 361
    },
    {
      id: "collectible-12-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3576,
      y: 414
    },
    {
      id: "collectible-12-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3646,
      y: 140
    },
    {
      id: "collectible-12-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3716,
      y: 193
    },
    {
      id: "collectible-12-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3786,
      y: 246
    },
    {
      id: "collectible-12-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3856,
      y: 266
    },
    {
      id: "collectible-12-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3926,
      y: 319
    },
    {
      id: "collectible-12-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3996,
      y: 372
    },
    {
      id: "collectible-12-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4066,
      y: 392
    },
    {
      id: "collectible-12-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4136,
      y: 151
    },
    {
      id: "collectible-12-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4206,
      y: 204
    },
    {
      id: "collectible-12-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4276,
      y: 224
    },
    {
      id: "collectible-12-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4346,
      y: 277
    },
    {
      id: "collectible-12-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4416,
      y: 330
    },
    {
      id: "collectible-12-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4486,
      y: 350
    },
    {
      id: "collectible-12-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4556,
      y: 403
    },
    {
      id: "collectible-12-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4626,
      y: 162
    },
    {
      id: "collectible-12-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4696,
      y: 182
    },
    {
      id: "collectible-12-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4766,
      y: 235
    },
    {
      id: "collectible-12-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4836,
      y: 288
    },
    {
      id: "collectible-12-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4906,
      y: 308
    },
    {
      id: "collectible-12-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4976,
      y: 361
    },
    {
      id: "collectible-12-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5046,
      y: 414
    }
  ],
  powerups: [
    {
      id: "powerup-12-1",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 650,
      y: 130
    },
    {
      id: "powerup-12-2",
      kind: "shield",
      durationMs: 5700,
      x: 1480,
      y: 182
    },
    {
      id: "powerup-12-3",
      kind: "springBoots",
      durationMs: 6600,
      x: 2310,
      y: 234
    },
    {
      id: "powerup-12-4",
      kind: "starburst",
      durationMs: 7500,
      x: 3140,
      y: 286
    },
    {
      id: "powerup-12-5",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 3970,
      y: 338
    },
    {
      id: "powerup-12-6",
      kind: "shield",
      durationMs: 5700,
      x: 4800,
      y: 130
    },
    {
      id: "powerup-12-7",
      kind: "springBoots",
      durationMs: 6600,
      x: 5630,
      y: 182
    },
    {
      id: "powerup-12-8",
      kind: "starburst",
      durationMs: 7500,
      x: 6460,
      y: 234
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-12-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 1.1
    },
    {
      id: "moving-platform-12-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 1.8
    },
    {
      id: "moving-platform-12-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 2.5
    },
    {
      id: "moving-platform-12-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 3.1999999999999997
    },
    {
      id: "moving-platform-12-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 3.9
    },
    {
      id: "moving-platform-12-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 4.6
    },
    {
      id: "moving-platform-12-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 5.299999999999999
    },
    {
      id: "moving-platform-12-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 6
    }
  ],
  hazards: [
    {
      id: "hazard-12-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 11
    },
    {
      id: "hazard-12-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 12
    },
    {
      id: "hazard-12-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 13
    },
    {
      id: "hazard-12-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 14
    },
    {
      id: "hazard-12-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 15
    },
    {
      id: "hazard-12-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 16
    },
    {
      id: "hazard-12-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 17
    },
    {
      id: "hazard-12-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 18
    },
    {
      id: "hazard-12-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 19
    },
    {
      id: "hazard-12-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 20
    },
    {
      id: "hazard-12-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 21
    },
    {
      id: "hazard-12-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 22
    },
    {
      id: "hazard-12-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 23
    },
    {
      id: "hazard-12-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 24
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-12-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-12-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-12-1",
      x: 708,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-12-2",
      x: 1478,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-12-3",
      x: 2248,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-12-4",
      x: 3018,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-12-5",
      x: 3788,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-12-6",
      x: 4558,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-12-7",
      x: 5328,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-12-8",
      x: 6098,
      y: 384,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-12-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-12-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-12-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-12-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-12-5",
      x: 4660,
      y: 180,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-12-6",
      x: 5620,
      y: 240,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    }
  ],
  decorations: [
    {
      id: "decor-12-1",
      layer: "near",
      motif: "grass",
      x: 253,
      y: 175,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-2",
      layer: "far",
      motif: "gear",
      x: 350,
      y: 216,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-3",
      layer: "mid",
      motif: "vine",
      x: 447,
      y: 257,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-4",
      layer: "far",
      motif: "glassBerry",
      x: 544,
      y: 298,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-5",
      layer: "mid",
      motif: "cloud",
      x: 641,
      y: 339,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-6",
      layer: "near",
      motif: "windmill",
      x: 738,
      y: 380,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-7",
      layer: "mid",
      motif: "grass",
      x: 835,
      y: 421,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-8",
      layer: "far",
      motif: "gear",
      x: 932,
      y: 32,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-9",
      layer: "mid",
      motif: "vine",
      x: 1029,
      y: 73,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-10",
      layer: "far",
      motif: "glassBerry",
      x: 1126,
      y: 114,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-11",
      layer: "near",
      motif: "cloud",
      x: 1223,
      y: 155,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-12",
      layer: "far",
      motif: "windmill",
      x: 1320,
      y: 196,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-13",
      layer: "mid",
      motif: "grass",
      x: 1417,
      y: 237,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-14",
      layer: "far",
      motif: "gear",
      x: 1514,
      y: 278,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-15",
      layer: "mid",
      motif: "vine",
      x: 1611,
      y: 319,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-16",
      layer: "near",
      motif: "glassBerry",
      x: 1708,
      y: 360,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-17",
      layer: "mid",
      motif: "cloud",
      x: 1805,
      y: 401,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-18",
      layer: "far",
      motif: "windmill",
      x: 1902,
      y: 442,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-19",
      layer: "mid",
      motif: "grass",
      x: 1999,
      y: 53,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-20",
      layer: "far",
      motif: "gear",
      x: 2096,
      y: 94,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-21",
      layer: "near",
      motif: "vine",
      x: 2193,
      y: 135,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-22",
      layer: "far",
      motif: "glassBerry",
      x: 2290,
      y: 176,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-23",
      layer: "mid",
      motif: "cloud",
      x: 2387,
      y: 217,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-24",
      layer: "far",
      motif: "windmill",
      x: 2484,
      y: 258,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-25",
      layer: "mid",
      motif: "grass",
      x: 2581,
      y: 299,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-26",
      layer: "near",
      motif: "gear",
      x: 2678,
      y: 340,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-27",
      layer: "mid",
      motif: "vine",
      x: 2775,
      y: 381,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-28",
      layer: "far",
      motif: "glassBerry",
      x: 2872,
      y: 422,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-29",
      layer: "mid",
      motif: "cloud",
      x: 2969,
      y: 33,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-30",
      layer: "far",
      motif: "windmill",
      x: 3066,
      y: 74,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-31",
      layer: "near",
      motif: "grass",
      x: 3163,
      y: 115,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-32",
      layer: "far",
      motif: "gear",
      x: 3260,
      y: 156,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-33",
      layer: "mid",
      motif: "vine",
      x: 3357,
      y: 197,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-34",
      layer: "far",
      motif: "glassBerry",
      x: 3454,
      y: 238,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-35",
      layer: "mid",
      motif: "cloud",
      x: 3551,
      y: 279,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-36",
      layer: "near",
      motif: "windmill",
      x: 3648,
      y: 320,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-37",
      layer: "mid",
      motif: "grass",
      x: 3745,
      y: 361,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-38",
      layer: "far",
      motif: "gear",
      x: 3842,
      y: 402,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-39",
      layer: "mid",
      motif: "vine",
      x: 3939,
      y: 443,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-40",
      layer: "far",
      motif: "glassBerry",
      x: 4036,
      y: 54,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-41",
      layer: "near",
      motif: "cloud",
      x: 4133,
      y: 95,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-42",
      layer: "far",
      motif: "windmill",
      x: 4230,
      y: 136,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-43",
      layer: "mid",
      motif: "grass",
      x: 4327,
      y: 177,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-44",
      layer: "far",
      motif: "gear",
      x: 4424,
      y: 218,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-45",
      layer: "mid",
      motif: "vine",
      x: 4521,
      y: 259,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-46",
      layer: "near",
      motif: "glassBerry",
      x: 4618,
      y: 300,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-47",
      layer: "mid",
      motif: "cloud",
      x: 4715,
      y: 341,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-48",
      layer: "far",
      motif: "windmill",
      x: 4812,
      y: 382,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-49",
      layer: "mid",
      motif: "grass",
      x: 4909,
      y: 423,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-50",
      layer: "far",
      motif: "gear",
      x: 78,
      y: 34,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-51",
      layer: "near",
      motif: "vine",
      x: 175,
      y: 75,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-52",
      layer: "far",
      motif: "glassBerry",
      x: 272,
      y: 116,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-53",
      layer: "mid",
      motif: "cloud",
      x: 369,
      y: 157,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-54",
      layer: "far",
      motif: "windmill",
      x: 466,
      y: 198,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-55",
      layer: "mid",
      motif: "grass",
      x: 563,
      y: 239,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-56",
      layer: "near",
      motif: "gear",
      x: 660,
      y: 280,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-57",
      layer: "mid",
      motif: "vine",
      x: 757,
      y: 321,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-58",
      layer: "far",
      motif: "glassBerry",
      x: 854,
      y: 362,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-59",
      layer: "mid",
      motif: "cloud",
      x: 951,
      y: 403,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-60",
      layer: "far",
      motif: "windmill",
      x: 1048,
      y: 444,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-61",
      layer: "near",
      motif: "grass",
      x: 1145,
      y: 55,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-62",
      layer: "far",
      motif: "gear",
      x: 1242,
      y: 96,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-63",
      layer: "mid",
      motif: "vine",
      x: 1339,
      y: 137,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-64",
      layer: "far",
      motif: "glassBerry",
      x: 1436,
      y: 178,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-65",
      layer: "mid",
      motif: "cloud",
      x: 1533,
      y: 219,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-66",
      layer: "near",
      motif: "windmill",
      x: 1630,
      y: 260,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-67",
      layer: "mid",
      motif: "grass",
      x: 1727,
      y: 301,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-68",
      layer: "far",
      motif: "gear",
      x: 1824,
      y: 342,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-69",
      layer: "mid",
      motif: "vine",
      x: 1921,
      y: 383,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-70",
      layer: "far",
      motif: "glassBerry",
      x: 2018,
      y: 424,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-71",
      layer: "near",
      motif: "cloud",
      x: 2115,
      y: 35,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-72",
      layer: "far",
      motif: "windmill",
      x: 2212,
      y: 76,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-73",
      layer: "mid",
      motif: "grass",
      x: 2309,
      y: 117,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-74",
      layer: "far",
      motif: "gear",
      x: 2406,
      y: 158,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-75",
      layer: "mid",
      motif: "vine",
      x: 2503,
      y: 199,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-76",
      layer: "near",
      motif: "glassBerry",
      x: 2600,
      y: 240,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-77",
      layer: "mid",
      motif: "cloud",
      x: 2697,
      y: 281,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-78",
      layer: "far",
      motif: "windmill",
      x: 2794,
      y: 322,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-79",
      layer: "mid",
      motif: "grass",
      x: 2891,
      y: 363,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-80",
      layer: "far",
      motif: "gear",
      x: 2988,
      y: 404,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-81",
      layer: "near",
      motif: "vine",
      x: 3085,
      y: 445,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-82",
      layer: "far",
      motif: "glassBerry",
      x: 3182,
      y: 56,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-83",
      layer: "mid",
      motif: "cloud",
      x: 3279,
      y: 97,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-84",
      layer: "far",
      motif: "windmill",
      x: 3376,
      y: 138,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-85",
      layer: "mid",
      motif: "grass",
      x: 3473,
      y: 179,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-86",
      layer: "near",
      motif: "gear",
      x: 3570,
      y: 220,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-87",
      layer: "mid",
      motif: "vine",
      x: 3667,
      y: 261,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-88",
      layer: "far",
      motif: "glassBerry",
      x: 3764,
      y: 302,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-89",
      layer: "mid",
      motif: "cloud",
      x: 3861,
      y: 343,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-90",
      layer: "far",
      motif: "windmill",
      x: 3958,
      y: 384,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-91",
      layer: "near",
      motif: "grass",
      x: 4055,
      y: 425,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-92",
      layer: "far",
      motif: "gear",
      x: 4152,
      y: 36,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-93",
      layer: "mid",
      motif: "vine",
      x: 4249,
      y: 77,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-94",
      layer: "far",
      motif: "glassBerry",
      x: 4346,
      y: 118,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-95",
      layer: "mid",
      motif: "cloud",
      x: 4443,
      y: 159,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-96",
      layer: "near",
      motif: "windmill",
      x: 4540,
      y: 200,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-97",
      layer: "mid",
      motif: "grass",
      x: 4637,
      y: 241,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-98",
      layer: "far",
      motif: "gear",
      x: 4734,
      y: 282,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-99",
      layer: "mid",
      motif: "vine",
      x: 4831,
      y: 323,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-100",
      layer: "far",
      motif: "glassBerry",
      x: 0,
      y: 364,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-101",
      layer: "near",
      motif: "cloud",
      x: 97,
      y: 405,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-102",
      layer: "far",
      motif: "windmill",
      x: 194,
      y: 446,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-103",
      layer: "mid",
      motif: "grass",
      x: 291,
      y: 57,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-104",
      layer: "far",
      motif: "gear",
      x: 388,
      y: 98,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-105",
      layer: "mid",
      motif: "vine",
      x: 485,
      y: 139,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-106",
      layer: "near",
      motif: "glassBerry",
      x: 582,
      y: 180,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-107",
      layer: "mid",
      motif: "cloud",
      x: 679,
      y: 221,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-108",
      layer: "far",
      motif: "windmill",
      x: 776,
      y: 262,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-109",
      layer: "mid",
      motif: "grass",
      x: 873,
      y: 303,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-110",
      layer: "far",
      motif: "gear",
      x: 970,
      y: 344,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-111",
      layer: "near",
      motif: "vine",
      x: 1067,
      y: 385,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-112",
      layer: "far",
      motif: "glassBerry",
      x: 1164,
      y: 426,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-113",
      layer: "mid",
      motif: "cloud",
      x: 1261,
      y: 37,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-114",
      layer: "far",
      motif: "windmill",
      x: 1358,
      y: 78,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-115",
      layer: "mid",
      motif: "grass",
      x: 1455,
      y: 119,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-116",
      layer: "near",
      motif: "gear",
      x: 1552,
      y: 160,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-117",
      layer: "mid",
      motif: "vine",
      x: 1649,
      y: 201,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-118",
      layer: "far",
      motif: "glassBerry",
      x: 1746,
      y: 242,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-119",
      layer: "mid",
      motif: "cloud",
      x: 1843,
      y: 283,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-120",
      layer: "far",
      motif: "windmill",
      x: 1940,
      y: 324,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-121",
      layer: "near",
      motif: "grass",
      x: 2037,
      y: 365,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-122",
      layer: "far",
      motif: "gear",
      x: 2134,
      y: 406,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-123",
      layer: "mid",
      motif: "vine",
      x: 2231,
      y: 447,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-124",
      layer: "far",
      motif: "glassBerry",
      x: 2328,
      y: 58,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-125",
      layer: "mid",
      motif: "cloud",
      x: 2425,
      y: 99,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-126",
      layer: "near",
      motif: "windmill",
      x: 2522,
      y: 140,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-127",
      layer: "mid",
      motif: "grass",
      x: 2619,
      y: 181,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-128",
      layer: "far",
      motif: "gear",
      x: 2716,
      y: 222,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-129",
      layer: "mid",
      motif: "vine",
      x: 2813,
      y: 263,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-130",
      layer: "far",
      motif: "glassBerry",
      x: 2910,
      y: 304,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-131",
      layer: "near",
      motif: "cloud",
      x: 3007,
      y: 345,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-132",
      layer: "far",
      motif: "windmill",
      x: 3104,
      y: 386,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-133",
      layer: "mid",
      motif: "grass",
      x: 3201,
      y: 427,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-134",
      layer: "far",
      motif: "gear",
      x: 3298,
      y: 38,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-135",
      layer: "mid",
      motif: "vine",
      x: 3395,
      y: 79,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-136",
      layer: "near",
      motif: "glassBerry",
      x: 3492,
      y: 120,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-137",
      layer: "mid",
      motif: "cloud",
      x: 3589,
      y: 161,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-138",
      layer: "far",
      motif: "windmill",
      x: 3686,
      y: 202,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-139",
      layer: "mid",
      motif: "grass",
      x: 3783,
      y: 243,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-140",
      layer: "far",
      motif: "gear",
      x: 3880,
      y: 284,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-141",
      layer: "near",
      motif: "vine",
      x: 3977,
      y: 325,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-142",
      layer: "far",
      motif: "glassBerry",
      x: 4074,
      y: 366,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-143",
      layer: "mid",
      motif: "cloud",
      x: 4171,
      y: 407,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-144",
      layer: "far",
      motif: "windmill",
      x: 4268,
      y: 448,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-145",
      layer: "mid",
      motif: "grass",
      x: 4365,
      y: 59,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-146",
      layer: "near",
      motif: "gear",
      x: 4462,
      y: 100,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-147",
      layer: "mid",
      motif: "vine",
      x: 4559,
      y: 141,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-148",
      layer: "far",
      motif: "glassBerry",
      x: 4656,
      y: 182,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-149",
      layer: "mid",
      motif: "cloud",
      x: 4753,
      y: 223,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-150",
      layer: "far",
      motif: "windmill",
      x: 4850,
      y: 264,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-151",
      layer: "near",
      motif: "grass",
      x: 19,
      y: 305,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-152",
      layer: "far",
      motif: "gear",
      x: 116,
      y: 346,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-153",
      layer: "mid",
      motif: "vine",
      x: 213,
      y: 387,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-154",
      layer: "far",
      motif: "glassBerry",
      x: 310,
      y: 428,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-155",
      layer: "mid",
      motif: "cloud",
      x: 407,
      y: 39,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-156",
      layer: "near",
      motif: "windmill",
      x: 504,
      y: 80,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-157",
      layer: "mid",
      motif: "grass",
      x: 601,
      y: 121,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-158",
      layer: "far",
      motif: "gear",
      x: 698,
      y: 162,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-159",
      layer: "mid",
      motif: "vine",
      x: 795,
      y: 203,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-160",
      layer: "far",
      motif: "glassBerry",
      x: 892,
      y: 244,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-161",
      layer: "near",
      motif: "cloud",
      x: 989,
      y: 285,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-162",
      layer: "far",
      motif: "windmill",
      x: 1086,
      y: 326,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-163",
      layer: "mid",
      motif: "grass",
      x: 1183,
      y: 367,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-164",
      layer: "far",
      motif: "gear",
      x: 1280,
      y: 408,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-165",
      layer: "mid",
      motif: "vine",
      x: 1377,
      y: 449,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-166",
      layer: "near",
      motif: "glassBerry",
      x: 1474,
      y: 60,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-167",
      layer: "mid",
      motif: "cloud",
      x: 1571,
      y: 101,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-168",
      layer: "far",
      motif: "windmill",
      x: 1668,
      y: 142,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-169",
      layer: "mid",
      motif: "grass",
      x: 1765,
      y: 183,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-170",
      layer: "far",
      motif: "gear",
      x: 1862,
      y: 224,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-12-171",
      layer: "near",
      motif: "vine",
      x: 1959,
      y: 265,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-172",
      layer: "far",
      motif: "glassBerry",
      x: 2056,
      y: 306,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-12-173",
      layer: "mid",
      motif: "cloud",
      x: 2153,
      y: 347,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-12-174",
      layer: "far",
      motif: "windmill",
      x: 2250,
      y: 388,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-12-175",
      layer: "mid",
      motif: "grass",
      x: 2347,
      y: 429,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-12-176",
      layer: "near",
      motif: "gear",
      x: 2444,
      y: 40,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-12-177",
      layer: "mid",
      motif: "vine",
      x: 2541,
      y: 81,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-12-178",
      layer: "far",
      motif: "glassBerry",
      x: 2638,
      y: 122,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-12-179",
      layer: "mid",
      motif: "cloud",
      x: 2735,
      y: 163,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-12-180",
      layer: "far",
      motif: "windmill",
      x: 2832,
      y: 204,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-12",
    x: 4736,
    y: 448,
    nextLevelId: "level-13"
  }
};
