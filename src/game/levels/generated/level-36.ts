import type { LevelDefinition } from "../schema";

export const LEVEL_36: LevelDefinition = {
  id: "level-36",
  index: 35,
  title: "The Warden's Crown 01",
  chapter: "The Warden's Crown",
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
    ".............===...........................====..........................=====.........................======........................=======..............",
    "......................................###...........................####..........................#####.........................######....................",
    ".................................#######.......................###...........................####..........................#####..........................",
    "............................======........................=======.......................===...........................====................................",
    ".......................#####.........................######........................#######.......................###...........................###........",
    "..................####........................W.#####.........................####W#........................#######...W...................###.............",
    ".....................................S...................................S...................................S............................................",
    "...P........................W...................................W...................................W...................................W...........G.....",
    "...................S...................................S...................................S...................................S..........................",
    "^################^....############^#....###########^##....##########^###....#########^####....########^#####....#######^######....######^################^",
    "##################.^.^##############.^.^##############.^.^##############.^.^##############.^.^##############.^.^##############.^.^########################"
  ],
  enemies: [
    {
      id: "enemy-36-1",
      kind: "turret",
      x: 420,
      y: 448,
      patrolMin: 325,
      patrolMax: 540,
      speed: 104,
      phase: 35
    },
    {
      id: "enemy-36-2",
      kind: "beetle",
      x: 750,
      y: 416,
      patrolMin: 637,
      patrolMax: 892,
      speed: 44,
      phase: 38
    },
    {
      id: "enemy-36-3",
      kind: "acorn",
      x: 1080,
      y: 384,
      patrolMin: 949,
      patrolMax: 1244,
      speed: 56,
      phase: 41
    },
    {
      id: "enemy-36-4",
      kind: "lantern",
      x: 1410,
      y: 352,
      patrolMin: 1261,
      patrolMax: 1596,
      speed: 68,
      phase: 44
    },
    {
      id: "enemy-36-5",
      kind: "charger",
      x: 1740,
      y: 320,
      patrolMin: 1645,
      patrolMax: 1948,
      speed: 80,
      phase: 47
    },
    {
      id: "enemy-36-6",
      kind: "spiker",
      x: 2070,
      y: 448,
      patrolMin: 1957,
      patrolMax: 2190,
      speed: 92,
      phase: 50
    },
    {
      id: "enemy-36-7",
      kind: "turret",
      x: 2400,
      y: 416,
      patrolMin: 2269,
      patrolMax: 2542,
      speed: 104,
      phase: 53
    },
    {
      id: "enemy-36-8",
      kind: "beetle",
      x: 2730,
      y: 384,
      patrolMin: 2581,
      patrolMax: 2894,
      speed: 44,
      phase: 56
    },
    {
      id: "enemy-36-9",
      kind: "acorn",
      x: 3060,
      y: 352,
      patrolMin: 2965,
      patrolMax: 3246,
      speed: 56,
      phase: 59
    },
    {
      id: "enemy-36-10",
      kind: "lantern",
      x: 3390,
      y: 320,
      patrolMin: 3277,
      patrolMax: 3598,
      speed: 68,
      phase: 62
    },
    {
      id: "enemy-36-11",
      kind: "charger",
      x: 3720,
      y: 448,
      patrolMin: 3589,
      patrolMax: 3840,
      speed: 80,
      phase: 65
    },
    {
      id: "enemy-36-12",
      kind: "spiker",
      x: 4050,
      y: 416,
      patrolMin: 3901,
      patrolMax: 4192,
      speed: 92,
      phase: 68
    },
    {
      id: "enemy-36-13",
      kind: "turret",
      x: 4380,
      y: 384,
      patrolMin: 4285,
      patrolMax: 4544,
      speed: 104,
      phase: 71
    },
    {
      id: "enemy-36-14",
      kind: "beetle",
      x: 4710,
      y: 352,
      patrolMin: 4597,
      patrolMax: 4748,
      speed: 44,
      phase: 74
    },
    {
      id: "enemy-36-15",
      kind: "acorn",
      x: 5040,
      y: 320,
      patrolMin: 4909,
      patrolMax: 4748,
      speed: 56,
      phase: 77
    }
  ],
  collectibles: [
    {
      id: "collectible-36-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 216,
      y: 162
    },
    {
      id: "collectible-36-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 286,
      y: 182
    },
    {
      id: "collectible-36-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 356,
      y: 235
    },
    {
      id: "collectible-36-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 426,
      y: 288
    },
    {
      id: "collectible-36-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 496,
      y: 308
    },
    {
      id: "collectible-36-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 566,
      y: 361
    },
    {
      id: "collectible-36-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 636,
      y: 414
    },
    {
      id: "collectible-36-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 706,
      y: 140
    },
    {
      id: "collectible-36-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 776,
      y: 193
    },
    {
      id: "collectible-36-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 846,
      y: 246
    },
    {
      id: "collectible-36-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 916,
      y: 266
    },
    {
      id: "collectible-36-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 986,
      y: 319
    },
    {
      id: "collectible-36-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1056,
      y: 372
    },
    {
      id: "collectible-36-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1126,
      y: 392
    },
    {
      id: "collectible-36-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1196,
      y: 151
    },
    {
      id: "collectible-36-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1266,
      y: 204
    },
    {
      id: "collectible-36-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1336,
      y: 224
    },
    {
      id: "collectible-36-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1406,
      y: 277
    },
    {
      id: "collectible-36-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1476,
      y: 330
    },
    {
      id: "collectible-36-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1546,
      y: 350
    },
    {
      id: "collectible-36-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1616,
      y: 403
    },
    {
      id: "collectible-36-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1686,
      y: 162
    },
    {
      id: "collectible-36-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1756,
      y: 182
    },
    {
      id: "collectible-36-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1826,
      y: 235
    },
    {
      id: "collectible-36-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1896,
      y: 288
    },
    {
      id: "collectible-36-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1966,
      y: 308
    },
    {
      id: "collectible-36-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2036,
      y: 361
    },
    {
      id: "collectible-36-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2106,
      y: 414
    },
    {
      id: "collectible-36-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2176,
      y: 140
    },
    {
      id: "collectible-36-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2246,
      y: 193
    },
    {
      id: "collectible-36-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2316,
      y: 246
    },
    {
      id: "collectible-36-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2386,
      y: 266
    },
    {
      id: "collectible-36-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2456,
      y: 319
    },
    {
      id: "collectible-36-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2526,
      y: 372
    },
    {
      id: "collectible-36-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2596,
      y: 392
    },
    {
      id: "collectible-36-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2666,
      y: 151
    },
    {
      id: "collectible-36-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2736,
      y: 204
    },
    {
      id: "collectible-36-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2806,
      y: 224
    },
    {
      id: "collectible-36-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2876,
      y: 277
    },
    {
      id: "collectible-36-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2946,
      y: 330
    },
    {
      id: "collectible-36-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3016,
      y: 350
    },
    {
      id: "collectible-36-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3086,
      y: 403
    },
    {
      id: "collectible-36-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3156,
      y: 162
    },
    {
      id: "collectible-36-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3226,
      y: 182
    },
    {
      id: "collectible-36-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3296,
      y: 235
    },
    {
      id: "collectible-36-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3366,
      y: 288
    },
    {
      id: "collectible-36-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3436,
      y: 308
    },
    {
      id: "collectible-36-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3506,
      y: 361
    },
    {
      id: "collectible-36-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3576,
      y: 414
    },
    {
      id: "collectible-36-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3646,
      y: 140
    },
    {
      id: "collectible-36-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3716,
      y: 193
    },
    {
      id: "collectible-36-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3786,
      y: 246
    },
    {
      id: "collectible-36-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3856,
      y: 266
    },
    {
      id: "collectible-36-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3926,
      y: 319
    },
    {
      id: "collectible-36-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3996,
      y: 372
    },
    {
      id: "collectible-36-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4066,
      y: 392
    },
    {
      id: "collectible-36-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4136,
      y: 151
    },
    {
      id: "collectible-36-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4206,
      y: 204
    },
    {
      id: "collectible-36-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4276,
      y: 224
    },
    {
      id: "collectible-36-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4346,
      y: 277
    },
    {
      id: "collectible-36-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4416,
      y: 330
    },
    {
      id: "collectible-36-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4486,
      y: 350
    },
    {
      id: "collectible-36-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4556,
      y: 403
    },
    {
      id: "collectible-36-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4626,
      y: 162
    },
    {
      id: "collectible-36-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4696,
      y: 182
    },
    {
      id: "collectible-36-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4766,
      y: 235
    },
    {
      id: "collectible-36-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4836,
      y: 288
    },
    {
      id: "collectible-36-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4906,
      y: 308
    },
    {
      id: "collectible-36-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4976,
      y: 361
    },
    {
      id: "collectible-36-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5046,
      y: 414
    },
    {
      id: "collectible-36-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5116,
      y: 140
    },
    {
      id: "collectible-36-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5186,
      y: 193
    },
    {
      id: "collectible-36-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5256,
      y: 246
    },
    {
      id: "collectible-36-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5326,
      y: 266
    },
    {
      id: "collectible-36-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5396,
      y: 319
    },
    {
      id: "collectible-36-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5466,
      y: 372
    },
    {
      id: "collectible-36-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5536,
      y: 392
    },
    {
      id: "collectible-36-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5606,
      y: 151
    },
    {
      id: "collectible-36-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5676,
      y: 204
    },
    {
      id: "collectible-36-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5746,
      y: 224
    },
    {
      id: "collectible-36-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5816,
      y: 277
    },
    {
      id: "collectible-36-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5886,
      y: 330
    },
    {
      id: "collectible-36-83",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5956,
      y: 350
    },
    {
      id: "collectible-36-84",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6026,
      y: 403
    },
    {
      id: "collectible-36-85",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6096,
      y: 162
    },
    {
      id: "collectible-36-86",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 6166,
      y: 182
    },
    {
      id: "collectible-36-87",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6236,
      y: 235
    },
    {
      id: "collectible-36-88",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6306,
      y: 288
    },
    {
      id: "collectible-36-89",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6376,
      y: 308
    },
    {
      id: "collectible-36-90",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6446,
      y: 361
    },
    {
      id: "collectible-36-91",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6516,
      y: 414
    },
    {
      id: "collectible-36-92",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6586,
      y: 140
    },
    {
      id: "collectible-36-93",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6656,
      y: 193
    },
    {
      id: "collectible-36-94",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 6726,
      y: 246
    }
  ],
  powerups: [
    {
      id: "powerup-36-1",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 650,
      y: 130
    },
    {
      id: "powerup-36-2",
      kind: "shield",
      durationMs: 5700,
      x: 1480,
      y: 182
    },
    {
      id: "powerup-36-3",
      kind: "springBoots",
      durationMs: 6600,
      x: 2310,
      y: 234
    },
    {
      id: "powerup-36-4",
      kind: "starburst",
      durationMs: 7500,
      x: 3140,
      y: 286
    },
    {
      id: "powerup-36-5",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 3970,
      y: 338
    },
    {
      id: "powerup-36-6",
      kind: "shield",
      durationMs: 5700,
      x: 4800,
      y: 130
    },
    {
      id: "powerup-36-7",
      kind: "springBoots",
      durationMs: 6600,
      x: 5630,
      y: 182
    },
    {
      id: "powerup-36-8",
      kind: "starburst",
      durationMs: 7500,
      x: 6460,
      y: 234
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-36-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 3.5
    },
    {
      id: "moving-platform-36-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 4.2
    },
    {
      id: "moving-platform-36-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 4.9
    },
    {
      id: "moving-platform-36-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 5.6
    },
    {
      id: "moving-platform-36-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 6.3
    },
    {
      id: "moving-platform-36-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 7
    },
    {
      id: "moving-platform-36-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 7.699999999999999
    }
  ],
  hazards: [
    {
      id: "hazard-36-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 35
    },
    {
      id: "hazard-36-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 36
    },
    {
      id: "hazard-36-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 37
    },
    {
      id: "hazard-36-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 38
    },
    {
      id: "hazard-36-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 39
    },
    {
      id: "hazard-36-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 40
    },
    {
      id: "hazard-36-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 41
    },
    {
      id: "hazard-36-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 42
    },
    {
      id: "hazard-36-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 43
    },
    {
      id: "hazard-36-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 44
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-36-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-36-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-36-1",
      x: 708,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-36-2",
      x: 1478,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-36-3",
      x: 2248,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-36-4",
      x: 3018,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-36-5",
      x: 3788,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-36-6",
      x: 4558,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-36-7",
      x: 5328,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-36-8",
      x: 6098,
      y: 384,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-36-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-36-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-36-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-36-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-36-5",
      x: 4660,
      y: 180,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-36-6",
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
      id: "decor-36-1",
      layer: "near",
      motif: "grass",
      x: 805,
      y: 57,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-2",
      layer: "far",
      motif: "gear",
      x: 902,
      y: 98,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-3",
      layer: "mid",
      motif: "vine",
      x: 999,
      y: 139,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-4",
      layer: "far",
      motif: "glassBerry",
      x: 1096,
      y: 180,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-5",
      layer: "mid",
      motif: "cloud",
      x: 1193,
      y: 221,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-6",
      layer: "near",
      motif: "windmill",
      x: 1290,
      y: 262,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-7",
      layer: "mid",
      motif: "grass",
      x: 1387,
      y: 303,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-8",
      layer: "far",
      motif: "gear",
      x: 1484,
      y: 344,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-9",
      layer: "mid",
      motif: "vine",
      x: 1581,
      y: 385,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-10",
      layer: "far",
      motif: "glassBerry",
      x: 1678,
      y: 426,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-11",
      layer: "near",
      motif: "cloud",
      x: 1775,
      y: 37,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-12",
      layer: "far",
      motif: "windmill",
      x: 1872,
      y: 78,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-13",
      layer: "mid",
      motif: "grass",
      x: 1969,
      y: 119,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-14",
      layer: "far",
      motif: "gear",
      x: 2066,
      y: 160,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-15",
      layer: "mid",
      motif: "vine",
      x: 2163,
      y: 201,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-16",
      layer: "near",
      motif: "glassBerry",
      x: 2260,
      y: 242,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-17",
      layer: "mid",
      motif: "cloud",
      x: 2357,
      y: 283,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-18",
      layer: "far",
      motif: "windmill",
      x: 2454,
      y: 324,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-19",
      layer: "mid",
      motif: "grass",
      x: 2551,
      y: 365,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-20",
      layer: "far",
      motif: "gear",
      x: 2648,
      y: 406,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-21",
      layer: "near",
      motif: "vine",
      x: 2745,
      y: 447,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-22",
      layer: "far",
      motif: "glassBerry",
      x: 2842,
      y: 58,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-23",
      layer: "mid",
      motif: "cloud",
      x: 2939,
      y: 99,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-24",
      layer: "far",
      motif: "windmill",
      x: 3036,
      y: 140,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-25",
      layer: "mid",
      motif: "grass",
      x: 3133,
      y: 181,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-26",
      layer: "near",
      motif: "gear",
      x: 3230,
      y: 222,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-27",
      layer: "mid",
      motif: "vine",
      x: 3327,
      y: 263,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-28",
      layer: "far",
      motif: "glassBerry",
      x: 3424,
      y: 304,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-29",
      layer: "mid",
      motif: "cloud",
      x: 3521,
      y: 345,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-30",
      layer: "far",
      motif: "windmill",
      x: 3618,
      y: 386,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-31",
      layer: "near",
      motif: "grass",
      x: 3715,
      y: 427,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-32",
      layer: "far",
      motif: "gear",
      x: 3812,
      y: 38,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-33",
      layer: "mid",
      motif: "vine",
      x: 3909,
      y: 79,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-34",
      layer: "far",
      motif: "glassBerry",
      x: 4006,
      y: 120,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-35",
      layer: "mid",
      motif: "cloud",
      x: 4103,
      y: 161,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-36",
      layer: "near",
      motif: "windmill",
      x: 4200,
      y: 202,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-37",
      layer: "mid",
      motif: "grass",
      x: 4297,
      y: 243,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-38",
      layer: "far",
      motif: "gear",
      x: 4394,
      y: 284,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-39",
      layer: "mid",
      motif: "vine",
      x: 4491,
      y: 325,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-40",
      layer: "far",
      motif: "glassBerry",
      x: 4588,
      y: 366,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-41",
      layer: "near",
      motif: "cloud",
      x: 4685,
      y: 407,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-42",
      layer: "far",
      motif: "windmill",
      x: 4782,
      y: 448,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-43",
      layer: "mid",
      motif: "grass",
      x: 4879,
      y: 59,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-44",
      layer: "far",
      motif: "gear",
      x: 48,
      y: 100,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-45",
      layer: "mid",
      motif: "vine",
      x: 145,
      y: 141,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-46",
      layer: "near",
      motif: "glassBerry",
      x: 242,
      y: 182,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-47",
      layer: "mid",
      motif: "cloud",
      x: 339,
      y: 223,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-48",
      layer: "far",
      motif: "windmill",
      x: 436,
      y: 264,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-49",
      layer: "mid",
      motif: "grass",
      x: 533,
      y: 305,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-50",
      layer: "far",
      motif: "gear",
      x: 630,
      y: 346,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-51",
      layer: "near",
      motif: "vine",
      x: 727,
      y: 387,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-52",
      layer: "far",
      motif: "glassBerry",
      x: 824,
      y: 428,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-53",
      layer: "mid",
      motif: "cloud",
      x: 921,
      y: 39,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-54",
      layer: "far",
      motif: "windmill",
      x: 1018,
      y: 80,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-55",
      layer: "mid",
      motif: "grass",
      x: 1115,
      y: 121,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-56",
      layer: "near",
      motif: "gear",
      x: 1212,
      y: 162,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-57",
      layer: "mid",
      motif: "vine",
      x: 1309,
      y: 203,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-58",
      layer: "far",
      motif: "glassBerry",
      x: 1406,
      y: 244,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-59",
      layer: "mid",
      motif: "cloud",
      x: 1503,
      y: 285,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-60",
      layer: "far",
      motif: "windmill",
      x: 1600,
      y: 326,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-61",
      layer: "near",
      motif: "grass",
      x: 1697,
      y: 367,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-62",
      layer: "far",
      motif: "gear",
      x: 1794,
      y: 408,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-63",
      layer: "mid",
      motif: "vine",
      x: 1891,
      y: 449,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-64",
      layer: "far",
      motif: "glassBerry",
      x: 1988,
      y: 60,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-65",
      layer: "mid",
      motif: "cloud",
      x: 2085,
      y: 101,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-66",
      layer: "near",
      motif: "windmill",
      x: 2182,
      y: 142,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-67",
      layer: "mid",
      motif: "grass",
      x: 2279,
      y: 183,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-68",
      layer: "far",
      motif: "gear",
      x: 2376,
      y: 224,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-69",
      layer: "mid",
      motif: "vine",
      x: 2473,
      y: 265,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-70",
      layer: "far",
      motif: "glassBerry",
      x: 2570,
      y: 306,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-71",
      layer: "near",
      motif: "cloud",
      x: 2667,
      y: 347,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-72",
      layer: "far",
      motif: "windmill",
      x: 2764,
      y: 388,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-73",
      layer: "mid",
      motif: "grass",
      x: 2861,
      y: 429,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-74",
      layer: "far",
      motif: "gear",
      x: 2958,
      y: 40,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-75",
      layer: "mid",
      motif: "vine",
      x: 3055,
      y: 81,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-76",
      layer: "near",
      motif: "glassBerry",
      x: 3152,
      y: 122,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-77",
      layer: "mid",
      motif: "cloud",
      x: 3249,
      y: 163,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-78",
      layer: "far",
      motif: "windmill",
      x: 3346,
      y: 204,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-79",
      layer: "mid",
      motif: "grass",
      x: 3443,
      y: 245,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-80",
      layer: "far",
      motif: "gear",
      x: 3540,
      y: 286,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-81",
      layer: "near",
      motif: "vine",
      x: 3637,
      y: 327,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-82",
      layer: "far",
      motif: "glassBerry",
      x: 3734,
      y: 368,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-83",
      layer: "mid",
      motif: "cloud",
      x: 3831,
      y: 409,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-84",
      layer: "far",
      motif: "windmill",
      x: 3928,
      y: 450,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-85",
      layer: "mid",
      motif: "grass",
      x: 4025,
      y: 61,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-86",
      layer: "near",
      motif: "gear",
      x: 4122,
      y: 102,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-87",
      layer: "mid",
      motif: "vine",
      x: 4219,
      y: 143,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-88",
      layer: "far",
      motif: "glassBerry",
      x: 4316,
      y: 184,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-89",
      layer: "mid",
      motif: "cloud",
      x: 4413,
      y: 225,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-90",
      layer: "far",
      motif: "windmill",
      x: 4510,
      y: 266,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-91",
      layer: "near",
      motif: "grass",
      x: 4607,
      y: 307,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-92",
      layer: "far",
      motif: "gear",
      x: 4704,
      y: 348,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-93",
      layer: "mid",
      motif: "vine",
      x: 4801,
      y: 389,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-94",
      layer: "far",
      motif: "glassBerry",
      x: 4898,
      y: 430,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-95",
      layer: "mid",
      motif: "cloud",
      x: 67,
      y: 41,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-96",
      layer: "near",
      motif: "windmill",
      x: 164,
      y: 82,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-97",
      layer: "mid",
      motif: "grass",
      x: 261,
      y: 123,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-98",
      layer: "far",
      motif: "gear",
      x: 358,
      y: 164,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-99",
      layer: "mid",
      motif: "vine",
      x: 455,
      y: 205,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-100",
      layer: "far",
      motif: "glassBerry",
      x: 552,
      y: 246,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-101",
      layer: "near",
      motif: "cloud",
      x: 649,
      y: 287,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-102",
      layer: "far",
      motif: "windmill",
      x: 746,
      y: 328,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-103",
      layer: "mid",
      motif: "grass",
      x: 843,
      y: 369,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-104",
      layer: "far",
      motif: "gear",
      x: 940,
      y: 410,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-105",
      layer: "mid",
      motif: "vine",
      x: 1037,
      y: 451,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-106",
      layer: "near",
      motif: "glassBerry",
      x: 1134,
      y: 62,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-107",
      layer: "mid",
      motif: "cloud",
      x: 1231,
      y: 103,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-108",
      layer: "far",
      motif: "windmill",
      x: 1328,
      y: 144,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-109",
      layer: "mid",
      motif: "grass",
      x: 1425,
      y: 185,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-110",
      layer: "far",
      motif: "gear",
      x: 1522,
      y: 226,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-111",
      layer: "near",
      motif: "vine",
      x: 1619,
      y: 267,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-112",
      layer: "far",
      motif: "glassBerry",
      x: 1716,
      y: 308,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-113",
      layer: "mid",
      motif: "cloud",
      x: 1813,
      y: 349,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-114",
      layer: "far",
      motif: "windmill",
      x: 1910,
      y: 390,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-115",
      layer: "mid",
      motif: "grass",
      x: 2007,
      y: 431,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-116",
      layer: "near",
      motif: "gear",
      x: 2104,
      y: 42,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-117",
      layer: "mid",
      motif: "vine",
      x: 2201,
      y: 83,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-118",
      layer: "far",
      motif: "glassBerry",
      x: 2298,
      y: 124,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-119",
      layer: "mid",
      motif: "cloud",
      x: 2395,
      y: 165,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-120",
      layer: "far",
      motif: "windmill",
      x: 2492,
      y: 206,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-121",
      layer: "near",
      motif: "grass",
      x: 2589,
      y: 247,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-122",
      layer: "far",
      motif: "gear",
      x: 2686,
      y: 288,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-123",
      layer: "mid",
      motif: "vine",
      x: 2783,
      y: 329,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-124",
      layer: "far",
      motif: "glassBerry",
      x: 2880,
      y: 370,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-125",
      layer: "mid",
      motif: "cloud",
      x: 2977,
      y: 411,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-126",
      layer: "near",
      motif: "windmill",
      x: 3074,
      y: 452,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-127",
      layer: "mid",
      motif: "grass",
      x: 3171,
      y: 63,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-128",
      layer: "far",
      motif: "gear",
      x: 3268,
      y: 104,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-129",
      layer: "mid",
      motif: "vine",
      x: 3365,
      y: 145,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-130",
      layer: "far",
      motif: "glassBerry",
      x: 3462,
      y: 186,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-131",
      layer: "near",
      motif: "cloud",
      x: 3559,
      y: 227,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-132",
      layer: "far",
      motif: "windmill",
      x: 3656,
      y: 268,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-133",
      layer: "mid",
      motif: "grass",
      x: 3753,
      y: 309,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-134",
      layer: "far",
      motif: "gear",
      x: 3850,
      y: 350,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-135",
      layer: "mid",
      motif: "vine",
      x: 3947,
      y: 391,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-136",
      layer: "near",
      motif: "glassBerry",
      x: 4044,
      y: 432,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-137",
      layer: "mid",
      motif: "cloud",
      x: 4141,
      y: 43,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-138",
      layer: "far",
      motif: "windmill",
      x: 4238,
      y: 84,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-139",
      layer: "mid",
      motif: "grass",
      x: 4335,
      y: 125,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-140",
      layer: "far",
      motif: "gear",
      x: 4432,
      y: 166,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-141",
      layer: "near",
      motif: "vine",
      x: 4529,
      y: 207,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-142",
      layer: "far",
      motif: "glassBerry",
      x: 4626,
      y: 248,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-143",
      layer: "mid",
      motif: "cloud",
      x: 4723,
      y: 289,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-144",
      layer: "far",
      motif: "windmill",
      x: 4820,
      y: 330,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-145",
      layer: "mid",
      motif: "grass",
      x: 4917,
      y: 371,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-146",
      layer: "near",
      motif: "gear",
      x: 86,
      y: 412,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-147",
      layer: "mid",
      motif: "vine",
      x: 183,
      y: 453,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-148",
      layer: "far",
      motif: "glassBerry",
      x: 280,
      y: 64,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-149",
      layer: "mid",
      motif: "cloud",
      x: 377,
      y: 105,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-150",
      layer: "far",
      motif: "windmill",
      x: 474,
      y: 146,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-151",
      layer: "near",
      motif: "grass",
      x: 571,
      y: 187,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-152",
      layer: "far",
      motif: "gear",
      x: 668,
      y: 228,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-153",
      layer: "mid",
      motif: "vine",
      x: 765,
      y: 269,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-154",
      layer: "far",
      motif: "glassBerry",
      x: 862,
      y: 310,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-155",
      layer: "mid",
      motif: "cloud",
      x: 959,
      y: 351,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-156",
      layer: "near",
      motif: "windmill",
      x: 1056,
      y: 392,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-157",
      layer: "mid",
      motif: "grass",
      x: 1153,
      y: 433,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-158",
      layer: "far",
      motif: "gear",
      x: 1250,
      y: 44,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-159",
      layer: "mid",
      motif: "vine",
      x: 1347,
      y: 85,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-160",
      layer: "far",
      motif: "glassBerry",
      x: 1444,
      y: 126,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-161",
      layer: "near",
      motif: "cloud",
      x: 1541,
      y: 167,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-162",
      layer: "far",
      motif: "windmill",
      x: 1638,
      y: 208,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-163",
      layer: "mid",
      motif: "grass",
      x: 1735,
      y: 249,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-164",
      layer: "far",
      motif: "gear",
      x: 1832,
      y: 290,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-165",
      layer: "mid",
      motif: "vine",
      x: 1929,
      y: 331,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-166",
      layer: "near",
      motif: "glassBerry",
      x: 2026,
      y: 372,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-167",
      layer: "mid",
      motif: "cloud",
      x: 2123,
      y: 413,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-168",
      layer: "far",
      motif: "windmill",
      x: 2220,
      y: 454,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-169",
      layer: "mid",
      motif: "grass",
      x: 2317,
      y: 65,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-170",
      layer: "far",
      motif: "gear",
      x: 2414,
      y: 106,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-36-171",
      layer: "near",
      motif: "vine",
      x: 2511,
      y: 147,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-172",
      layer: "far",
      motif: "glassBerry",
      x: 2608,
      y: 188,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-36-173",
      layer: "mid",
      motif: "cloud",
      x: 2705,
      y: 229,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-36-174",
      layer: "far",
      motif: "windmill",
      x: 2802,
      y: 270,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-36-175",
      layer: "mid",
      motif: "grass",
      x: 2899,
      y: 311,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-36-176",
      layer: "near",
      motif: "gear",
      x: 2996,
      y: 352,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-36-177",
      layer: "mid",
      motif: "vine",
      x: 3093,
      y: 393,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-36-178",
      layer: "far",
      motif: "glassBerry",
      x: 3190,
      y: 434,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-36-179",
      layer: "mid",
      motif: "cloud",
      x: 3287,
      y: 45,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-36-180",
      layer: "far",
      motif: "windmill",
      x: 3384,
      y: 86,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-36",
    x: 4736,
    y: 448,
    nextLevelId: "level-37"
  }
};
