import type { LevelDefinition } from "../schema";

export const LEVEL_16: LevelDefinition = {
  id: "level-16",
  index: 15,
  title: "Windmill Tangle 02",
  chapter: "Windmill Tangle",
  columns: 154,
  rows: 18,
  timeLimit: 316,
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
    ".......................#####.........................######........................#######.......................###...........................###........",
    "..................####..........................#####.........................######........................#######.......................###.............",
    ".............===...........................====..........................=====.........................======........................=======..............",
    "......................................###...........................####..........................#####.........................######....................",
    ".................................#######.......................###...........................####..........................#####..........................",
    "............................======..........W.............=======...............W.......===.........................W.====................................",
    "...................................S...................................S...................................S..............................................",
    "...P......................W...................................W...................................W...................................W.............G.....",
    ".................S...................................S...................................S...................................S............................",
    "^################^..##############^#..#############^##..############^###..###########^####..##########^#####..#########^######..########^################^",
    "##################.^################.^################.^################.^################.^################.^################.^##########################"
  ],
  enemies: [
    {
      id: "enemy-16-1",
      kind: "charger",
      x: 420,
      y: 448,
      patrolMin: 325,
      patrolMax: 540,
      speed: 80,
      phase: 15
    },
    {
      id: "enemy-16-2",
      kind: "spiker",
      x: 750,
      y: 416,
      patrolMin: 637,
      patrolMax: 892,
      speed: 92,
      phase: 18
    },
    {
      id: "enemy-16-3",
      kind: "turret",
      x: 1080,
      y: 384,
      patrolMin: 949,
      patrolMax: 1244,
      speed: 104,
      phase: 21
    },
    {
      id: "enemy-16-4",
      kind: "beetle",
      x: 1410,
      y: 352,
      patrolMin: 1261,
      patrolMax: 1596,
      speed: 44,
      phase: 24
    },
    {
      id: "enemy-16-5",
      kind: "acorn",
      x: 1740,
      y: 320,
      patrolMin: 1645,
      patrolMax: 1948,
      speed: 56,
      phase: 27
    },
    {
      id: "enemy-16-6",
      kind: "lantern",
      x: 2070,
      y: 448,
      patrolMin: 1957,
      patrolMax: 2190,
      speed: 68,
      phase: 30
    },
    {
      id: "enemy-16-7",
      kind: "charger",
      x: 2400,
      y: 416,
      patrolMin: 2269,
      patrolMax: 2542,
      speed: 80,
      phase: 33
    },
    {
      id: "enemy-16-8",
      kind: "spiker",
      x: 2730,
      y: 384,
      patrolMin: 2581,
      patrolMax: 2894,
      speed: 92,
      phase: 36
    },
    {
      id: "enemy-16-9",
      kind: "turret",
      x: 3060,
      y: 352,
      patrolMin: 2965,
      patrolMax: 3246,
      speed: 104,
      phase: 39
    },
    {
      id: "enemy-16-10",
      kind: "beetle",
      x: 3390,
      y: 320,
      patrolMin: 3277,
      patrolMax: 3598,
      speed: 44,
      phase: 42
    },
    {
      id: "enemy-16-11",
      kind: "acorn",
      x: 3720,
      y: 448,
      patrolMin: 3589,
      patrolMax: 3840,
      speed: 56,
      phase: 45
    },
    {
      id: "enemy-16-12",
      kind: "lantern",
      x: 4050,
      y: 416,
      patrolMin: 3901,
      patrolMax: 4192,
      speed: 68,
      phase: 48
    },
    {
      id: "enemy-16-13",
      kind: "charger",
      x: 4380,
      y: 384,
      patrolMin: 4285,
      patrolMax: 4544,
      speed: 80,
      phase: 51
    },
    {
      id: "enemy-16-14",
      kind: "spiker",
      x: 4710,
      y: 352,
      patrolMin: 4597,
      patrolMax: 4748,
      speed: 92,
      phase: 54
    },
    {
      id: "enemy-16-15",
      kind: "turret",
      x: 5040,
      y: 320,
      patrolMin: 4909,
      patrolMax: 4748,
      speed: 104,
      phase: 57
    },
    {
      id: "enemy-16-16",
      kind: "beetle",
      x: 5370,
      y: 448,
      patrolMin: 5221,
      patrolMax: 4748,
      speed: 44,
      phase: 60
    },
    {
      id: "enemy-16-17",
      kind: "acorn",
      x: 5700,
      y: 416,
      patrolMin: 5605,
      patrolMax: 4748,
      speed: 56,
      phase: 63
    },
    {
      id: "enemy-16-18",
      kind: "lantern",
      x: 6030,
      y: 384,
      patrolMin: 5917,
      patrolMax: 4748,
      speed: 68,
      phase: 66
    },
    {
      id: "enemy-16-19",
      kind: "charger",
      x: 6360,
      y: 352,
      patrolMin: 6229,
      patrolMax: 4748,
      speed: 80,
      phase: 69
    }
  ],
  collectibles: [
    {
      id: "collectible-16-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 216,
      y: 140
    },
    {
      id: "collectible-16-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 286,
      y: 193
    },
    {
      id: "collectible-16-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 356,
      y: 246
    },
    {
      id: "collectible-16-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 426,
      y: 266
    },
    {
      id: "collectible-16-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 496,
      y: 319
    },
    {
      id: "collectible-16-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 566,
      y: 372
    },
    {
      id: "collectible-16-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 636,
      y: 392
    },
    {
      id: "collectible-16-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 706,
      y: 151
    },
    {
      id: "collectible-16-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 776,
      y: 204
    },
    {
      id: "collectible-16-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 846,
      y: 224
    },
    {
      id: "collectible-16-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 916,
      y: 277
    },
    {
      id: "collectible-16-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 986,
      y: 330
    },
    {
      id: "collectible-16-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1056,
      y: 350
    },
    {
      id: "collectible-16-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1126,
      y: 403
    },
    {
      id: "collectible-16-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1196,
      y: 162
    },
    {
      id: "collectible-16-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1266,
      y: 182
    },
    {
      id: "collectible-16-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1336,
      y: 235
    },
    {
      id: "collectible-16-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1406,
      y: 288
    },
    {
      id: "collectible-16-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1476,
      y: 308
    },
    {
      id: "collectible-16-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1546,
      y: 361
    },
    {
      id: "collectible-16-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1616,
      y: 414
    },
    {
      id: "collectible-16-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1686,
      y: 140
    },
    {
      id: "collectible-16-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1756,
      y: 193
    },
    {
      id: "collectible-16-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1826,
      y: 246
    },
    {
      id: "collectible-16-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1896,
      y: 266
    },
    {
      id: "collectible-16-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1966,
      y: 319
    },
    {
      id: "collectible-16-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2036,
      y: 372
    },
    {
      id: "collectible-16-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2106,
      y: 392
    },
    {
      id: "collectible-16-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2176,
      y: 151
    },
    {
      id: "collectible-16-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2246,
      y: 204
    },
    {
      id: "collectible-16-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2316,
      y: 224
    },
    {
      id: "collectible-16-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2386,
      y: 277
    },
    {
      id: "collectible-16-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2456,
      y: 330
    },
    {
      id: "collectible-16-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2526,
      y: 350
    },
    {
      id: "collectible-16-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2596,
      y: 403
    },
    {
      id: "collectible-16-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2666,
      y: 162
    },
    {
      id: "collectible-16-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2736,
      y: 182
    },
    {
      id: "collectible-16-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2806,
      y: 235
    },
    {
      id: "collectible-16-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2876,
      y: 288
    },
    {
      id: "collectible-16-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2946,
      y: 308
    },
    {
      id: "collectible-16-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3016,
      y: 361
    },
    {
      id: "collectible-16-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3086,
      y: 414
    },
    {
      id: "collectible-16-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3156,
      y: 140
    },
    {
      id: "collectible-16-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3226,
      y: 193
    },
    {
      id: "collectible-16-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3296,
      y: 246
    },
    {
      id: "collectible-16-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3366,
      y: 266
    },
    {
      id: "collectible-16-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3436,
      y: 319
    },
    {
      id: "collectible-16-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3506,
      y: 372
    },
    {
      id: "collectible-16-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3576,
      y: 392
    },
    {
      id: "collectible-16-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3646,
      y: 151
    },
    {
      id: "collectible-16-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3716,
      y: 204
    },
    {
      id: "collectible-16-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3786,
      y: 224
    },
    {
      id: "collectible-16-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3856,
      y: 277
    },
    {
      id: "collectible-16-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3926,
      y: 330
    },
    {
      id: "collectible-16-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3996,
      y: 350
    },
    {
      id: "collectible-16-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4066,
      y: 403
    },
    {
      id: "collectible-16-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4136,
      y: 162
    },
    {
      id: "collectible-16-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4206,
      y: 182
    },
    {
      id: "collectible-16-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4276,
      y: 235
    },
    {
      id: "collectible-16-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4346,
      y: 288
    },
    {
      id: "collectible-16-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4416,
      y: 308
    },
    {
      id: "collectible-16-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4486,
      y: 361
    },
    {
      id: "collectible-16-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4556,
      y: 414
    },
    {
      id: "collectible-16-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4626,
      y: 140
    },
    {
      id: "collectible-16-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4696,
      y: 193
    },
    {
      id: "collectible-16-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4766,
      y: 246
    },
    {
      id: "collectible-16-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4836,
      y: 266
    },
    {
      id: "collectible-16-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4906,
      y: 319
    },
    {
      id: "collectible-16-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4976,
      y: 372
    },
    {
      id: "collectible-16-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5046,
      y: 392
    },
    {
      id: "collectible-16-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5116,
      y: 151
    },
    {
      id: "collectible-16-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5186,
      y: 204
    },
    {
      id: "collectible-16-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5256,
      y: 224
    },
    {
      id: "collectible-16-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5326,
      y: 277
    },
    {
      id: "collectible-16-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5396,
      y: 330
    },
    {
      id: "collectible-16-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5466,
      y: 350
    },
    {
      id: "collectible-16-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5536,
      y: 403
    },
    {
      id: "collectible-16-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5606,
      y: 162
    },
    {
      id: "collectible-16-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5676,
      y: 182
    },
    {
      id: "collectible-16-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5746,
      y: 235
    },
    {
      id: "collectible-16-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5816,
      y: 288
    },
    {
      id: "collectible-16-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5886,
      y: 308
    },
    {
      id: "collectible-16-83",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5956,
      y: 361
    },
    {
      id: "collectible-16-84",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6026,
      y: 414
    },
    {
      id: "collectible-16-85",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6096,
      y: 140
    },
    {
      id: "collectible-16-86",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 6166,
      y: 193
    }
  ],
  powerups: [
    {
      id: "powerup-16-1",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 590,
      y: 130
    },
    {
      id: "powerup-16-2",
      kind: "shield",
      durationMs: 5700,
      x: 1420,
      y: 182
    },
    {
      id: "powerup-16-3",
      kind: "springBoots",
      durationMs: 6600,
      x: 2250,
      y: 234
    },
    {
      id: "powerup-16-4",
      kind: "starburst",
      durationMs: 7500,
      x: 3080,
      y: 286
    },
    {
      id: "powerup-16-5",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 3910,
      y: 338
    },
    {
      id: "powerup-16-6",
      kind: "shield",
      durationMs: 5700,
      x: 4740,
      y: 130
    },
    {
      id: "powerup-16-7",
      kind: "springBoots",
      durationMs: 6600,
      x: 5570,
      y: 182
    },
    {
      id: "powerup-16-8",
      kind: "starburst",
      durationMs: 7500,
      x: 6400,
      y: 234
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-16-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 1.5
    },
    {
      id: "moving-platform-16-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 2.2
    },
    {
      id: "moving-platform-16-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 2.9
    },
    {
      id: "moving-platform-16-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 3.5999999999999996
    },
    {
      id: "moving-platform-16-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 4.3
    },
    {
      id: "moving-platform-16-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 5
    },
    {
      id: "moving-platform-16-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 5.699999999999999
    }
  ],
  hazards: [
    {
      id: "hazard-16-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 15
    },
    {
      id: "hazard-16-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 16
    },
    {
      id: "hazard-16-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 17
    },
    {
      id: "hazard-16-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 18
    },
    {
      id: "hazard-16-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 19
    },
    {
      id: "hazard-16-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 20
    },
    {
      id: "hazard-16-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 21
    },
    {
      id: "hazard-16-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 22
    },
    {
      id: "hazard-16-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 23
    },
    {
      id: "hazard-16-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 24
    },
    {
      id: "hazard-16-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 25
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-16-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-16-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-16-1",
      x: 640,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-16-2",
      x: 1410,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-16-3",
      x: 2180,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-16-4",
      x: 2950,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-16-5",
      x: 3720,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-16-6",
      x: 4490,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-16-7",
      x: 5260,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-16-8",
      x: 6030,
      y: 384,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-16-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-16-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-16-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-16-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-16-5",
      x: 4660,
      y: 180,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-16-6",
      x: 5620,
      y: 240,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    }
  ],
  decorations: [
    {
      id: "decor-16-1",
      layer: "near",
      motif: "cloud",
      x: 345,
      y: 227,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-2",
      layer: "far",
      motif: "windmill",
      x: 442,
      y: 268,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-3",
      layer: "mid",
      motif: "grass",
      x: 539,
      y: 309,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-4",
      layer: "far",
      motif: "gear",
      x: 636,
      y: 350,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-5",
      layer: "mid",
      motif: "vine",
      x: 733,
      y: 391,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-6",
      layer: "near",
      motif: "glassBerry",
      x: 830,
      y: 432,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-7",
      layer: "mid",
      motif: "cloud",
      x: 927,
      y: 43,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-8",
      layer: "far",
      motif: "windmill",
      x: 1024,
      y: 84,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-9",
      layer: "mid",
      motif: "grass",
      x: 1121,
      y: 125,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-10",
      layer: "far",
      motif: "gear",
      x: 1218,
      y: 166,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-11",
      layer: "near",
      motif: "vine",
      x: 1315,
      y: 207,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-12",
      layer: "far",
      motif: "glassBerry",
      x: 1412,
      y: 248,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-13",
      layer: "mid",
      motif: "cloud",
      x: 1509,
      y: 289,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-14",
      layer: "far",
      motif: "windmill",
      x: 1606,
      y: 330,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-15",
      layer: "mid",
      motif: "grass",
      x: 1703,
      y: 371,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-16",
      layer: "near",
      motif: "gear",
      x: 1800,
      y: 412,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-17",
      layer: "mid",
      motif: "vine",
      x: 1897,
      y: 453,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-18",
      layer: "far",
      motif: "glassBerry",
      x: 1994,
      y: 64,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-19",
      layer: "mid",
      motif: "cloud",
      x: 2091,
      y: 105,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-20",
      layer: "far",
      motif: "windmill",
      x: 2188,
      y: 146,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-21",
      layer: "near",
      motif: "grass",
      x: 2285,
      y: 187,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-22",
      layer: "far",
      motif: "gear",
      x: 2382,
      y: 228,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-23",
      layer: "mid",
      motif: "vine",
      x: 2479,
      y: 269,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-24",
      layer: "far",
      motif: "glassBerry",
      x: 2576,
      y: 310,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-25",
      layer: "mid",
      motif: "cloud",
      x: 2673,
      y: 351,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-26",
      layer: "near",
      motif: "windmill",
      x: 2770,
      y: 392,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-27",
      layer: "mid",
      motif: "grass",
      x: 2867,
      y: 433,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-28",
      layer: "far",
      motif: "gear",
      x: 2964,
      y: 44,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-29",
      layer: "mid",
      motif: "vine",
      x: 3061,
      y: 85,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-30",
      layer: "far",
      motif: "glassBerry",
      x: 3158,
      y: 126,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-31",
      layer: "near",
      motif: "cloud",
      x: 3255,
      y: 167,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-32",
      layer: "far",
      motif: "windmill",
      x: 3352,
      y: 208,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-33",
      layer: "mid",
      motif: "grass",
      x: 3449,
      y: 249,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-34",
      layer: "far",
      motif: "gear",
      x: 3546,
      y: 290,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-35",
      layer: "mid",
      motif: "vine",
      x: 3643,
      y: 331,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-36",
      layer: "near",
      motif: "glassBerry",
      x: 3740,
      y: 372,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-37",
      layer: "mid",
      motif: "cloud",
      x: 3837,
      y: 413,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-38",
      layer: "far",
      motif: "windmill",
      x: 3934,
      y: 454,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-39",
      layer: "mid",
      motif: "grass",
      x: 4031,
      y: 65,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-40",
      layer: "far",
      motif: "gear",
      x: 4128,
      y: 106,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-41",
      layer: "near",
      motif: "vine",
      x: 4225,
      y: 147,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-42",
      layer: "far",
      motif: "glassBerry",
      x: 4322,
      y: 188,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-43",
      layer: "mid",
      motif: "cloud",
      x: 4419,
      y: 229,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-44",
      layer: "far",
      motif: "windmill",
      x: 4516,
      y: 270,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-45",
      layer: "mid",
      motif: "grass",
      x: 4613,
      y: 311,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-46",
      layer: "near",
      motif: "gear",
      x: 4710,
      y: 352,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-47",
      layer: "mid",
      motif: "vine",
      x: 4807,
      y: 393,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-48",
      layer: "far",
      motif: "glassBerry",
      x: 4904,
      y: 434,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-49",
      layer: "mid",
      motif: "cloud",
      x: 73,
      y: 45,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-50",
      layer: "far",
      motif: "windmill",
      x: 170,
      y: 86,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-51",
      layer: "near",
      motif: "grass",
      x: 267,
      y: 127,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-52",
      layer: "far",
      motif: "gear",
      x: 364,
      y: 168,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-53",
      layer: "mid",
      motif: "vine",
      x: 461,
      y: 209,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-54",
      layer: "far",
      motif: "glassBerry",
      x: 558,
      y: 250,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-55",
      layer: "mid",
      motif: "cloud",
      x: 655,
      y: 291,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-56",
      layer: "near",
      motif: "windmill",
      x: 752,
      y: 332,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-57",
      layer: "mid",
      motif: "grass",
      x: 849,
      y: 373,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-58",
      layer: "far",
      motif: "gear",
      x: 946,
      y: 414,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-59",
      layer: "mid",
      motif: "vine",
      x: 1043,
      y: 455,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-60",
      layer: "far",
      motif: "glassBerry",
      x: 1140,
      y: 66,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-61",
      layer: "near",
      motif: "cloud",
      x: 1237,
      y: 107,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-62",
      layer: "far",
      motif: "windmill",
      x: 1334,
      y: 148,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-63",
      layer: "mid",
      motif: "grass",
      x: 1431,
      y: 189,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-64",
      layer: "far",
      motif: "gear",
      x: 1528,
      y: 230,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-65",
      layer: "mid",
      motif: "vine",
      x: 1625,
      y: 271,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-66",
      layer: "near",
      motif: "glassBerry",
      x: 1722,
      y: 312,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-67",
      layer: "mid",
      motif: "cloud",
      x: 1819,
      y: 353,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-68",
      layer: "far",
      motif: "windmill",
      x: 1916,
      y: 394,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-69",
      layer: "mid",
      motif: "grass",
      x: 2013,
      y: 435,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-70",
      layer: "far",
      motif: "gear",
      x: 2110,
      y: 46,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-71",
      layer: "near",
      motif: "vine",
      x: 2207,
      y: 87,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-72",
      layer: "far",
      motif: "glassBerry",
      x: 2304,
      y: 128,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-73",
      layer: "mid",
      motif: "cloud",
      x: 2401,
      y: 169,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-74",
      layer: "far",
      motif: "windmill",
      x: 2498,
      y: 210,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-75",
      layer: "mid",
      motif: "grass",
      x: 2595,
      y: 251,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-76",
      layer: "near",
      motif: "gear",
      x: 2692,
      y: 292,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-77",
      layer: "mid",
      motif: "vine",
      x: 2789,
      y: 333,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-78",
      layer: "far",
      motif: "glassBerry",
      x: 2886,
      y: 374,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-79",
      layer: "mid",
      motif: "cloud",
      x: 2983,
      y: 415,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-80",
      layer: "far",
      motif: "windmill",
      x: 3080,
      y: 456,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-81",
      layer: "near",
      motif: "grass",
      x: 3177,
      y: 67,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-82",
      layer: "far",
      motif: "gear",
      x: 3274,
      y: 108,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-83",
      layer: "mid",
      motif: "vine",
      x: 3371,
      y: 149,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-84",
      layer: "far",
      motif: "glassBerry",
      x: 3468,
      y: 190,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-85",
      layer: "mid",
      motif: "cloud",
      x: 3565,
      y: 231,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-86",
      layer: "near",
      motif: "windmill",
      x: 3662,
      y: 272,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-87",
      layer: "mid",
      motif: "grass",
      x: 3759,
      y: 313,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-88",
      layer: "far",
      motif: "gear",
      x: 3856,
      y: 354,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-89",
      layer: "mid",
      motif: "vine",
      x: 3953,
      y: 395,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-90",
      layer: "far",
      motif: "glassBerry",
      x: 4050,
      y: 436,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-91",
      layer: "near",
      motif: "cloud",
      x: 4147,
      y: 47,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-92",
      layer: "far",
      motif: "windmill",
      x: 4244,
      y: 88,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-93",
      layer: "mid",
      motif: "grass",
      x: 4341,
      y: 129,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-94",
      layer: "far",
      motif: "gear",
      x: 4438,
      y: 170,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-95",
      layer: "mid",
      motif: "vine",
      x: 4535,
      y: 211,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-96",
      layer: "near",
      motif: "glassBerry",
      x: 4632,
      y: 252,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-97",
      layer: "mid",
      motif: "cloud",
      x: 4729,
      y: 293,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-98",
      layer: "far",
      motif: "windmill",
      x: 4826,
      y: 334,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-99",
      layer: "mid",
      motif: "grass",
      x: 4923,
      y: 375,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-100",
      layer: "far",
      motif: "gear",
      x: 92,
      y: 416,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-101",
      layer: "near",
      motif: "vine",
      x: 189,
      y: 457,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-102",
      layer: "far",
      motif: "glassBerry",
      x: 286,
      y: 68,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-103",
      layer: "mid",
      motif: "cloud",
      x: 383,
      y: 109,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-104",
      layer: "far",
      motif: "windmill",
      x: 480,
      y: 150,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-105",
      layer: "mid",
      motif: "grass",
      x: 577,
      y: 191,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-106",
      layer: "near",
      motif: "gear",
      x: 674,
      y: 232,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-107",
      layer: "mid",
      motif: "vine",
      x: 771,
      y: 273,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-108",
      layer: "far",
      motif: "glassBerry",
      x: 868,
      y: 314,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-109",
      layer: "mid",
      motif: "cloud",
      x: 965,
      y: 355,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-110",
      layer: "far",
      motif: "windmill",
      x: 1062,
      y: 396,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-111",
      layer: "near",
      motif: "grass",
      x: 1159,
      y: 437,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-112",
      layer: "far",
      motif: "gear",
      x: 1256,
      y: 48,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-113",
      layer: "mid",
      motif: "vine",
      x: 1353,
      y: 89,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-114",
      layer: "far",
      motif: "glassBerry",
      x: 1450,
      y: 130,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-115",
      layer: "mid",
      motif: "cloud",
      x: 1547,
      y: 171,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-116",
      layer: "near",
      motif: "windmill",
      x: 1644,
      y: 212,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-117",
      layer: "mid",
      motif: "grass",
      x: 1741,
      y: 253,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-118",
      layer: "far",
      motif: "gear",
      x: 1838,
      y: 294,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-119",
      layer: "mid",
      motif: "vine",
      x: 1935,
      y: 335,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-120",
      layer: "far",
      motif: "glassBerry",
      x: 2032,
      y: 376,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-121",
      layer: "near",
      motif: "cloud",
      x: 2129,
      y: 417,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-122",
      layer: "far",
      motif: "windmill",
      x: 2226,
      y: 458,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-123",
      layer: "mid",
      motif: "grass",
      x: 2323,
      y: 69,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-124",
      layer: "far",
      motif: "gear",
      x: 2420,
      y: 110,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-125",
      layer: "mid",
      motif: "vine",
      x: 2517,
      y: 151,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-126",
      layer: "near",
      motif: "glassBerry",
      x: 2614,
      y: 192,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-127",
      layer: "mid",
      motif: "cloud",
      x: 2711,
      y: 233,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-128",
      layer: "far",
      motif: "windmill",
      x: 2808,
      y: 274,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-129",
      layer: "mid",
      motif: "grass",
      x: 2905,
      y: 315,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-130",
      layer: "far",
      motif: "gear",
      x: 3002,
      y: 356,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-131",
      layer: "near",
      motif: "vine",
      x: 3099,
      y: 397,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-132",
      layer: "far",
      motif: "glassBerry",
      x: 3196,
      y: 438,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-133",
      layer: "mid",
      motif: "cloud",
      x: 3293,
      y: 49,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-134",
      layer: "far",
      motif: "windmill",
      x: 3390,
      y: 90,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-135",
      layer: "mid",
      motif: "grass",
      x: 3487,
      y: 131,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-136",
      layer: "near",
      motif: "gear",
      x: 3584,
      y: 172,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-137",
      layer: "mid",
      motif: "vine",
      x: 3681,
      y: 213,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-138",
      layer: "far",
      motif: "glassBerry",
      x: 3778,
      y: 254,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-139",
      layer: "mid",
      motif: "cloud",
      x: 3875,
      y: 295,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-140",
      layer: "far",
      motif: "windmill",
      x: 3972,
      y: 336,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-141",
      layer: "near",
      motif: "grass",
      x: 4069,
      y: 377,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-142",
      layer: "far",
      motif: "gear",
      x: 4166,
      y: 418,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-143",
      layer: "mid",
      motif: "vine",
      x: 4263,
      y: 459,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-144",
      layer: "far",
      motif: "glassBerry",
      x: 4360,
      y: 70,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-145",
      layer: "mid",
      motif: "cloud",
      x: 4457,
      y: 111,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-146",
      layer: "near",
      motif: "windmill",
      x: 4554,
      y: 152,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-147",
      layer: "mid",
      motif: "grass",
      x: 4651,
      y: 193,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-148",
      layer: "far",
      motif: "gear",
      x: 4748,
      y: 234,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-149",
      layer: "mid",
      motif: "vine",
      x: 4845,
      y: 275,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-150",
      layer: "far",
      motif: "glassBerry",
      x: 14,
      y: 316,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-151",
      layer: "near",
      motif: "cloud",
      x: 111,
      y: 357,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-152",
      layer: "far",
      motif: "windmill",
      x: 208,
      y: 398,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-153",
      layer: "mid",
      motif: "grass",
      x: 305,
      y: 439,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-154",
      layer: "far",
      motif: "gear",
      x: 402,
      y: 50,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-155",
      layer: "mid",
      motif: "vine",
      x: 499,
      y: 91,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-156",
      layer: "near",
      motif: "glassBerry",
      x: 596,
      y: 132,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-157",
      layer: "mid",
      motif: "cloud",
      x: 693,
      y: 173,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-158",
      layer: "far",
      motif: "windmill",
      x: 790,
      y: 214,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-159",
      layer: "mid",
      motif: "grass",
      x: 887,
      y: 255,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-160",
      layer: "far",
      motif: "gear",
      x: 984,
      y: 296,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-161",
      layer: "near",
      motif: "vine",
      x: 1081,
      y: 337,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-162",
      layer: "far",
      motif: "glassBerry",
      x: 1178,
      y: 378,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-163",
      layer: "mid",
      motif: "cloud",
      x: 1275,
      y: 419,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-164",
      layer: "far",
      motif: "windmill",
      x: 1372,
      y: 460,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-165",
      layer: "mid",
      motif: "grass",
      x: 1469,
      y: 71,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-166",
      layer: "near",
      motif: "gear",
      x: 1566,
      y: 112,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-167",
      layer: "mid",
      motif: "vine",
      x: 1663,
      y: 153,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-168",
      layer: "far",
      motif: "glassBerry",
      x: 1760,
      y: 194,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-169",
      layer: "mid",
      motif: "cloud",
      x: 1857,
      y: 235,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-170",
      layer: "far",
      motif: "windmill",
      x: 1954,
      y: 276,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-16-171",
      layer: "near",
      motif: "grass",
      x: 2051,
      y: 317,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-172",
      layer: "far",
      motif: "gear",
      x: 2148,
      y: 358,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-16-173",
      layer: "mid",
      motif: "vine",
      x: 2245,
      y: 399,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-16-174",
      layer: "far",
      motif: "glassBerry",
      x: 2342,
      y: 440,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-16-175",
      layer: "mid",
      motif: "cloud",
      x: 2439,
      y: 51,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-16-176",
      layer: "near",
      motif: "windmill",
      x: 2536,
      y: 92,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-16-177",
      layer: "mid",
      motif: "grass",
      x: 2633,
      y: 133,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-16-178",
      layer: "far",
      motif: "gear",
      x: 2730,
      y: 174,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-16-179",
      layer: "mid",
      motif: "vine",
      x: 2827,
      y: 215,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-16-180",
      layer: "far",
      motif: "glassBerry",
      x: 2924,
      y: 256,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-16",
    x: 4736,
    y: 448,
    nextLevelId: "level-17"
  }
};
