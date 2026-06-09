import type { LevelDefinition } from "../schema";

export const LEVEL_24: LevelDefinition = {
  id: "level-24",
  index: 23,
  title: "Moonlit Gearway 03",
  chapter: "Moonlit Gearway",
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
    ".............======........................=======.......................===...........................====..........................=====................",
    "......................................######........................#######.......................###...........................####......................",
    ".................................#####.........................######........................#######.......................###............................",
    "............................====..........................=====.........................======........................=======.............................",
    ".......................###...........................####..........................#####.........................######........................###........",
    "..................#######.....................W.###...........................####W.........................#####.....W...................######..........",
    ".....................................S...................................S...................................S............................................",
    "...P........................W...................................W...................................W...................................W...........G.....",
    "...................S...................................S...................................S...................................S..........................",
    "^################^....###########....###########....###########....#^#########....###^#######....#####^#####....#######^###....#########^################^",
    "##################.^.^###########^.^.###########.^.^###########^.^.###########.^.^###########^.^.###########.^.^###########^.^.###########################"
  ],
  enemies: [
    {
      id: "enemy-24-1",
      kind: "turret",
      x: 504,
      y: 448,
      patrolMin: 409,
      patrolMax: 624,
      speed: 104,
      phase: 23
    },
    {
      id: "enemy-24-2",
      kind: "beetle",
      x: 834,
      y: 416,
      patrolMin: 721,
      patrolMax: 976,
      speed: 44,
      phase: 26
    },
    {
      id: "enemy-24-3",
      kind: "acorn",
      x: 1164,
      y: 384,
      patrolMin: 1033,
      patrolMax: 1328,
      speed: 56,
      phase: 29
    },
    {
      id: "enemy-24-4",
      kind: "lantern",
      x: 1494,
      y: 352,
      patrolMin: 1345,
      patrolMax: 1680,
      speed: 68,
      phase: 32
    },
    {
      id: "enemy-24-5",
      kind: "charger",
      x: 1824,
      y: 320,
      patrolMin: 1729,
      patrolMax: 2032,
      speed: 80,
      phase: 35
    },
    {
      id: "enemy-24-6",
      kind: "spiker",
      x: 2154,
      y: 448,
      patrolMin: 2041,
      patrolMax: 2274,
      speed: 92,
      phase: 38
    },
    {
      id: "enemy-24-7",
      kind: "turret",
      x: 2484,
      y: 416,
      patrolMin: 2353,
      patrolMax: 2626,
      speed: 104,
      phase: 41
    },
    {
      id: "enemy-24-8",
      kind: "beetle",
      x: 2814,
      y: 384,
      patrolMin: 2665,
      patrolMax: 2978,
      speed: 44,
      phase: 44
    },
    {
      id: "enemy-24-9",
      kind: "acorn",
      x: 3144,
      y: 352,
      patrolMin: 3049,
      patrolMax: 3330,
      speed: 56,
      phase: 47
    },
    {
      id: "enemy-24-10",
      kind: "lantern",
      x: 3474,
      y: 320,
      patrolMin: 3361,
      patrolMax: 3682,
      speed: 68,
      phase: 50
    },
    {
      id: "enemy-24-11",
      kind: "charger",
      x: 3804,
      y: 448,
      patrolMin: 3673,
      patrolMax: 3924,
      speed: 80,
      phase: 53
    },
    {
      id: "enemy-24-12",
      kind: "spiker",
      x: 4134,
      y: 416,
      patrolMin: 3985,
      patrolMax: 4276,
      speed: 92,
      phase: 56
    },
    {
      id: "enemy-24-13",
      kind: "turret",
      x: 4464,
      y: 384,
      patrolMin: 4369,
      patrolMax: 4628,
      speed: 104,
      phase: 59
    },
    {
      id: "enemy-24-14",
      kind: "beetle",
      x: 4794,
      y: 352,
      patrolMin: 4681,
      patrolMax: 4748,
      speed: 44,
      phase: 62
    },
    {
      id: "enemy-24-15",
      kind: "acorn",
      x: 5124,
      y: 320,
      patrolMin: 4993,
      patrolMax: 4748,
      speed: 56,
      phase: 65
    },
    {
      id: "enemy-24-16",
      kind: "lantern",
      x: 5454,
      y: 448,
      patrolMin: 5305,
      patrolMax: 4748,
      speed: 68,
      phase: 68
    },
    {
      id: "enemy-24-17",
      kind: "charger",
      x: 5784,
      y: 416,
      patrolMin: 5689,
      patrolMax: 4748,
      speed: 80,
      phase: 71
    },
    {
      id: "enemy-24-18",
      kind: "spiker",
      x: 6114,
      y: 384,
      patrolMin: 6001,
      patrolMax: 4748,
      speed: 92,
      phase: 74
    },
    {
      id: "enemy-24-19",
      kind: "turret",
      x: 6444,
      y: 352,
      patrolMin: 6313,
      patrolMax: 4748,
      speed: 104,
      phase: 77
    }
  ],
  collectibles: [
    {
      id: "collectible-24-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 216,
      y: 162
    },
    {
      id: "collectible-24-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 286,
      y: 182
    },
    {
      id: "collectible-24-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 356,
      y: 235
    },
    {
      id: "collectible-24-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 426,
      y: 288
    },
    {
      id: "collectible-24-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 496,
      y: 308
    },
    {
      id: "collectible-24-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 566,
      y: 361
    },
    {
      id: "collectible-24-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 636,
      y: 414
    },
    {
      id: "collectible-24-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 706,
      y: 140
    },
    {
      id: "collectible-24-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 776,
      y: 193
    },
    {
      id: "collectible-24-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 846,
      y: 246
    },
    {
      id: "collectible-24-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 916,
      y: 266
    },
    {
      id: "collectible-24-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 986,
      y: 319
    },
    {
      id: "collectible-24-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1056,
      y: 372
    },
    {
      id: "collectible-24-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1126,
      y: 392
    },
    {
      id: "collectible-24-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1196,
      y: 151
    },
    {
      id: "collectible-24-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1266,
      y: 204
    },
    {
      id: "collectible-24-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1336,
      y: 224
    },
    {
      id: "collectible-24-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1406,
      y: 277
    },
    {
      id: "collectible-24-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1476,
      y: 330
    },
    {
      id: "collectible-24-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1546,
      y: 350
    },
    {
      id: "collectible-24-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1616,
      y: 403
    },
    {
      id: "collectible-24-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1686,
      y: 162
    },
    {
      id: "collectible-24-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1756,
      y: 182
    },
    {
      id: "collectible-24-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1826,
      y: 235
    },
    {
      id: "collectible-24-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1896,
      y: 288
    },
    {
      id: "collectible-24-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1966,
      y: 308
    },
    {
      id: "collectible-24-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2036,
      y: 361
    },
    {
      id: "collectible-24-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2106,
      y: 414
    },
    {
      id: "collectible-24-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2176,
      y: 140
    },
    {
      id: "collectible-24-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2246,
      y: 193
    },
    {
      id: "collectible-24-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2316,
      y: 246
    },
    {
      id: "collectible-24-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2386,
      y: 266
    },
    {
      id: "collectible-24-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2456,
      y: 319
    },
    {
      id: "collectible-24-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2526,
      y: 372
    },
    {
      id: "collectible-24-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2596,
      y: 392
    },
    {
      id: "collectible-24-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2666,
      y: 151
    },
    {
      id: "collectible-24-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2736,
      y: 204
    },
    {
      id: "collectible-24-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2806,
      y: 224
    },
    {
      id: "collectible-24-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2876,
      y: 277
    },
    {
      id: "collectible-24-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2946,
      y: 330
    },
    {
      id: "collectible-24-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3016,
      y: 350
    },
    {
      id: "collectible-24-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3086,
      y: 403
    },
    {
      id: "collectible-24-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3156,
      y: 162
    },
    {
      id: "collectible-24-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3226,
      y: 182
    },
    {
      id: "collectible-24-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3296,
      y: 235
    },
    {
      id: "collectible-24-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3366,
      y: 288
    },
    {
      id: "collectible-24-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3436,
      y: 308
    },
    {
      id: "collectible-24-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3506,
      y: 361
    },
    {
      id: "collectible-24-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3576,
      y: 414
    },
    {
      id: "collectible-24-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3646,
      y: 140
    },
    {
      id: "collectible-24-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3716,
      y: 193
    },
    {
      id: "collectible-24-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3786,
      y: 246
    },
    {
      id: "collectible-24-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3856,
      y: 266
    },
    {
      id: "collectible-24-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3926,
      y: 319
    },
    {
      id: "collectible-24-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3996,
      y: 372
    },
    {
      id: "collectible-24-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4066,
      y: 392
    },
    {
      id: "collectible-24-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4136,
      y: 151
    },
    {
      id: "collectible-24-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4206,
      y: 204
    },
    {
      id: "collectible-24-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4276,
      y: 224
    },
    {
      id: "collectible-24-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4346,
      y: 277
    },
    {
      id: "collectible-24-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4416,
      y: 330
    },
    {
      id: "collectible-24-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4486,
      y: 350
    },
    {
      id: "collectible-24-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4556,
      y: 403
    },
    {
      id: "collectible-24-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4626,
      y: 162
    },
    {
      id: "collectible-24-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4696,
      y: 182
    },
    {
      id: "collectible-24-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4766,
      y: 235
    },
    {
      id: "collectible-24-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4836,
      y: 288
    },
    {
      id: "collectible-24-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4906,
      y: 308
    },
    {
      id: "collectible-24-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4976,
      y: 361
    },
    {
      id: "collectible-24-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5046,
      y: 414
    },
    {
      id: "collectible-24-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5116,
      y: 140
    },
    {
      id: "collectible-24-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5186,
      y: 193
    },
    {
      id: "collectible-24-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5256,
      y: 246
    },
    {
      id: "collectible-24-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5326,
      y: 266
    },
    {
      id: "collectible-24-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5396,
      y: 319
    },
    {
      id: "collectible-24-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5466,
      y: 372
    },
    {
      id: "collectible-24-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5536,
      y: 392
    },
    {
      id: "collectible-24-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5606,
      y: 151
    },
    {
      id: "collectible-24-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5676,
      y: 204
    },
    {
      id: "collectible-24-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5746,
      y: 224
    },
    {
      id: "collectible-24-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5816,
      y: 277
    },
    {
      id: "collectible-24-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5886,
      y: 330
    }
  ],
  powerups: [
    {
      id: "powerup-24-1",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 650,
      y: 130
    },
    {
      id: "powerup-24-2",
      kind: "shield",
      durationMs: 5700,
      x: 1480,
      y: 182
    },
    {
      id: "powerup-24-3",
      kind: "springBoots",
      durationMs: 6600,
      x: 2310,
      y: 234
    },
    {
      id: "powerup-24-4",
      kind: "starburst",
      durationMs: 7500,
      x: 3140,
      y: 286
    },
    {
      id: "powerup-24-5",
      kind: "gliderLeaf",
      durationMs: 4800,
      x: 3970,
      y: 338
    },
    {
      id: "powerup-24-6",
      kind: "shield",
      durationMs: 5700,
      x: 4800,
      y: 130
    },
    {
      id: "powerup-24-7",
      kind: "springBoots",
      durationMs: 6600,
      x: 5630,
      y: 182
    },
    {
      id: "powerup-24-8",
      kind: "starburst",
      durationMs: 7500,
      x: 6460,
      y: 234
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-24-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 2.3000000000000003
    },
    {
      id: "moving-platform-24-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 3
    },
    {
      id: "moving-platform-24-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 3.7
    },
    {
      id: "moving-platform-24-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 4.4
    },
    {
      id: "moving-platform-24-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 5.1
    },
    {
      id: "moving-platform-24-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 5.800000000000001
    },
    {
      id: "moving-platform-24-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 6.5
    },
    {
      id: "moving-platform-24-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 7.199999999999999
    },
    {
      id: "moving-platform-24-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 7.9
    },
    {
      id: "moving-platform-24-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 8.6
    }
  ],
  hazards: [
    {
      id: "hazard-24-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 23
    },
    {
      id: "hazard-24-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 24
    },
    {
      id: "hazard-24-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 25
    },
    {
      id: "hazard-24-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 26
    },
    {
      id: "hazard-24-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 27
    },
    {
      id: "hazard-24-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 28
    },
    {
      id: "hazard-24-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 29
    },
    {
      id: "hazard-24-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 30
    },
    {
      id: "hazard-24-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 31
    },
    {
      id: "hazard-24-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 32
    },
    {
      id: "hazard-24-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 33
    },
    {
      id: "hazard-24-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 34
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-24-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-24-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-24-1",
      x: 708,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-24-2",
      x: 1478,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-24-3",
      x: 2248,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-24-4",
      x: 3018,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-24-5",
      x: 3788,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-24-6",
      x: 4558,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-24-7",
      x: 5328,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-24-8",
      x: 6098,
      y: 384,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-24-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-24-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-24-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-24-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-24-5",
      x: 4660,
      y: 180,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-24-6",
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
      id: "decor-24-1",
      layer: "near",
      motif: "grass",
      x: 529,
      y: 331,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-2",
      layer: "far",
      motif: "gear",
      x: 626,
      y: 372,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-3",
      layer: "mid",
      motif: "vine",
      x: 723,
      y: 413,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-4",
      layer: "far",
      motif: "glassBerry",
      x: 820,
      y: 454,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-5",
      layer: "mid",
      motif: "cloud",
      x: 917,
      y: 65,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-6",
      layer: "near",
      motif: "windmill",
      x: 1014,
      y: 106,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-7",
      layer: "mid",
      motif: "grass",
      x: 1111,
      y: 147,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-8",
      layer: "far",
      motif: "gear",
      x: 1208,
      y: 188,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-9",
      layer: "mid",
      motif: "vine",
      x: 1305,
      y: 229,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-10",
      layer: "far",
      motif: "glassBerry",
      x: 1402,
      y: 270,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-11",
      layer: "near",
      motif: "cloud",
      x: 1499,
      y: 311,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-12",
      layer: "far",
      motif: "windmill",
      x: 1596,
      y: 352,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-13",
      layer: "mid",
      motif: "grass",
      x: 1693,
      y: 393,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-14",
      layer: "far",
      motif: "gear",
      x: 1790,
      y: 434,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-15",
      layer: "mid",
      motif: "vine",
      x: 1887,
      y: 45,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-16",
      layer: "near",
      motif: "glassBerry",
      x: 1984,
      y: 86,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-17",
      layer: "mid",
      motif: "cloud",
      x: 2081,
      y: 127,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-18",
      layer: "far",
      motif: "windmill",
      x: 2178,
      y: 168,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-19",
      layer: "mid",
      motif: "grass",
      x: 2275,
      y: 209,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-20",
      layer: "far",
      motif: "gear",
      x: 2372,
      y: 250,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-21",
      layer: "near",
      motif: "vine",
      x: 2469,
      y: 291,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-22",
      layer: "far",
      motif: "glassBerry",
      x: 2566,
      y: 332,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-23",
      layer: "mid",
      motif: "cloud",
      x: 2663,
      y: 373,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-24",
      layer: "far",
      motif: "windmill",
      x: 2760,
      y: 414,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-25",
      layer: "mid",
      motif: "grass",
      x: 2857,
      y: 455,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-26",
      layer: "near",
      motif: "gear",
      x: 2954,
      y: 66,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-27",
      layer: "mid",
      motif: "vine",
      x: 3051,
      y: 107,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-28",
      layer: "far",
      motif: "glassBerry",
      x: 3148,
      y: 148,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-29",
      layer: "mid",
      motif: "cloud",
      x: 3245,
      y: 189,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-30",
      layer: "far",
      motif: "windmill",
      x: 3342,
      y: 230,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-31",
      layer: "near",
      motif: "grass",
      x: 3439,
      y: 271,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-32",
      layer: "far",
      motif: "gear",
      x: 3536,
      y: 312,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-33",
      layer: "mid",
      motif: "vine",
      x: 3633,
      y: 353,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-34",
      layer: "far",
      motif: "glassBerry",
      x: 3730,
      y: 394,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-35",
      layer: "mid",
      motif: "cloud",
      x: 3827,
      y: 435,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-36",
      layer: "near",
      motif: "windmill",
      x: 3924,
      y: 46,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-37",
      layer: "mid",
      motif: "grass",
      x: 4021,
      y: 87,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-38",
      layer: "far",
      motif: "gear",
      x: 4118,
      y: 128,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-39",
      layer: "mid",
      motif: "vine",
      x: 4215,
      y: 169,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-40",
      layer: "far",
      motif: "glassBerry",
      x: 4312,
      y: 210,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-41",
      layer: "near",
      motif: "cloud",
      x: 4409,
      y: 251,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-42",
      layer: "far",
      motif: "windmill",
      x: 4506,
      y: 292,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-43",
      layer: "mid",
      motif: "grass",
      x: 4603,
      y: 333,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-44",
      layer: "far",
      motif: "gear",
      x: 4700,
      y: 374,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-45",
      layer: "mid",
      motif: "vine",
      x: 4797,
      y: 415,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-46",
      layer: "near",
      motif: "glassBerry",
      x: 4894,
      y: 456,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-47",
      layer: "mid",
      motif: "cloud",
      x: 63,
      y: 67,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-48",
      layer: "far",
      motif: "windmill",
      x: 160,
      y: 108,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-49",
      layer: "mid",
      motif: "grass",
      x: 257,
      y: 149,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-50",
      layer: "far",
      motif: "gear",
      x: 354,
      y: 190,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-51",
      layer: "near",
      motif: "vine",
      x: 451,
      y: 231,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-52",
      layer: "far",
      motif: "glassBerry",
      x: 548,
      y: 272,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-53",
      layer: "mid",
      motif: "cloud",
      x: 645,
      y: 313,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-54",
      layer: "far",
      motif: "windmill",
      x: 742,
      y: 354,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-55",
      layer: "mid",
      motif: "grass",
      x: 839,
      y: 395,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-56",
      layer: "near",
      motif: "gear",
      x: 936,
      y: 436,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-57",
      layer: "mid",
      motif: "vine",
      x: 1033,
      y: 47,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-58",
      layer: "far",
      motif: "glassBerry",
      x: 1130,
      y: 88,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-59",
      layer: "mid",
      motif: "cloud",
      x: 1227,
      y: 129,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-60",
      layer: "far",
      motif: "windmill",
      x: 1324,
      y: 170,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-61",
      layer: "near",
      motif: "grass",
      x: 1421,
      y: 211,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-62",
      layer: "far",
      motif: "gear",
      x: 1518,
      y: 252,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-63",
      layer: "mid",
      motif: "vine",
      x: 1615,
      y: 293,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-64",
      layer: "far",
      motif: "glassBerry",
      x: 1712,
      y: 334,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-65",
      layer: "mid",
      motif: "cloud",
      x: 1809,
      y: 375,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-66",
      layer: "near",
      motif: "windmill",
      x: 1906,
      y: 416,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-67",
      layer: "mid",
      motif: "grass",
      x: 2003,
      y: 457,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-68",
      layer: "far",
      motif: "gear",
      x: 2100,
      y: 68,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-69",
      layer: "mid",
      motif: "vine",
      x: 2197,
      y: 109,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-70",
      layer: "far",
      motif: "glassBerry",
      x: 2294,
      y: 150,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-71",
      layer: "near",
      motif: "cloud",
      x: 2391,
      y: 191,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-72",
      layer: "far",
      motif: "windmill",
      x: 2488,
      y: 232,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-73",
      layer: "mid",
      motif: "grass",
      x: 2585,
      y: 273,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-74",
      layer: "far",
      motif: "gear",
      x: 2682,
      y: 314,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-75",
      layer: "mid",
      motif: "vine",
      x: 2779,
      y: 355,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-76",
      layer: "near",
      motif: "glassBerry",
      x: 2876,
      y: 396,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-77",
      layer: "mid",
      motif: "cloud",
      x: 2973,
      y: 437,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-78",
      layer: "far",
      motif: "windmill",
      x: 3070,
      y: 48,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-79",
      layer: "mid",
      motif: "grass",
      x: 3167,
      y: 89,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-80",
      layer: "far",
      motif: "gear",
      x: 3264,
      y: 130,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-81",
      layer: "near",
      motif: "vine",
      x: 3361,
      y: 171,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-82",
      layer: "far",
      motif: "glassBerry",
      x: 3458,
      y: 212,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-83",
      layer: "mid",
      motif: "cloud",
      x: 3555,
      y: 253,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-84",
      layer: "far",
      motif: "windmill",
      x: 3652,
      y: 294,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-85",
      layer: "mid",
      motif: "grass",
      x: 3749,
      y: 335,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-86",
      layer: "near",
      motif: "gear",
      x: 3846,
      y: 376,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-87",
      layer: "mid",
      motif: "vine",
      x: 3943,
      y: 417,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-88",
      layer: "far",
      motif: "glassBerry",
      x: 4040,
      y: 458,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-89",
      layer: "mid",
      motif: "cloud",
      x: 4137,
      y: 69,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-90",
      layer: "far",
      motif: "windmill",
      x: 4234,
      y: 110,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-91",
      layer: "near",
      motif: "grass",
      x: 4331,
      y: 151,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-92",
      layer: "far",
      motif: "gear",
      x: 4428,
      y: 192,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-93",
      layer: "mid",
      motif: "vine",
      x: 4525,
      y: 233,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-94",
      layer: "far",
      motif: "glassBerry",
      x: 4622,
      y: 274,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-95",
      layer: "mid",
      motif: "cloud",
      x: 4719,
      y: 315,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-96",
      layer: "near",
      motif: "windmill",
      x: 4816,
      y: 356,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-97",
      layer: "mid",
      motif: "grass",
      x: 4913,
      y: 397,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-98",
      layer: "far",
      motif: "gear",
      x: 82,
      y: 438,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-99",
      layer: "mid",
      motif: "vine",
      x: 179,
      y: 49,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-100",
      layer: "far",
      motif: "glassBerry",
      x: 276,
      y: 90,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-101",
      layer: "near",
      motif: "cloud",
      x: 373,
      y: 131,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-102",
      layer: "far",
      motif: "windmill",
      x: 470,
      y: 172,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-103",
      layer: "mid",
      motif: "grass",
      x: 567,
      y: 213,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-104",
      layer: "far",
      motif: "gear",
      x: 664,
      y: 254,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-105",
      layer: "mid",
      motif: "vine",
      x: 761,
      y: 295,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-106",
      layer: "near",
      motif: "glassBerry",
      x: 858,
      y: 336,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-107",
      layer: "mid",
      motif: "cloud",
      x: 955,
      y: 377,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-108",
      layer: "far",
      motif: "windmill",
      x: 1052,
      y: 418,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-109",
      layer: "mid",
      motif: "grass",
      x: 1149,
      y: 459,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-110",
      layer: "far",
      motif: "gear",
      x: 1246,
      y: 70,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-111",
      layer: "near",
      motif: "vine",
      x: 1343,
      y: 111,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-112",
      layer: "far",
      motif: "glassBerry",
      x: 1440,
      y: 152,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-113",
      layer: "mid",
      motif: "cloud",
      x: 1537,
      y: 193,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-114",
      layer: "far",
      motif: "windmill",
      x: 1634,
      y: 234,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-115",
      layer: "mid",
      motif: "grass",
      x: 1731,
      y: 275,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-116",
      layer: "near",
      motif: "gear",
      x: 1828,
      y: 316,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-117",
      layer: "mid",
      motif: "vine",
      x: 1925,
      y: 357,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-118",
      layer: "far",
      motif: "glassBerry",
      x: 2022,
      y: 398,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-119",
      layer: "mid",
      motif: "cloud",
      x: 2119,
      y: 439,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-120",
      layer: "far",
      motif: "windmill",
      x: 2216,
      y: 50,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-121",
      layer: "near",
      motif: "grass",
      x: 2313,
      y: 91,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-122",
      layer: "far",
      motif: "gear",
      x: 2410,
      y: 132,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-123",
      layer: "mid",
      motif: "vine",
      x: 2507,
      y: 173,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-124",
      layer: "far",
      motif: "glassBerry",
      x: 2604,
      y: 214,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-125",
      layer: "mid",
      motif: "cloud",
      x: 2701,
      y: 255,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-126",
      layer: "near",
      motif: "windmill",
      x: 2798,
      y: 296,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-127",
      layer: "mid",
      motif: "grass",
      x: 2895,
      y: 337,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-128",
      layer: "far",
      motif: "gear",
      x: 2992,
      y: 378,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-129",
      layer: "mid",
      motif: "vine",
      x: 3089,
      y: 419,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-130",
      layer: "far",
      motif: "glassBerry",
      x: 3186,
      y: 460,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-131",
      layer: "near",
      motif: "cloud",
      x: 3283,
      y: 71,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-132",
      layer: "far",
      motif: "windmill",
      x: 3380,
      y: 112,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-133",
      layer: "mid",
      motif: "grass",
      x: 3477,
      y: 153,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-134",
      layer: "far",
      motif: "gear",
      x: 3574,
      y: 194,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-135",
      layer: "mid",
      motif: "vine",
      x: 3671,
      y: 235,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-136",
      layer: "near",
      motif: "glassBerry",
      x: 3768,
      y: 276,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-137",
      layer: "mid",
      motif: "cloud",
      x: 3865,
      y: 317,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-138",
      layer: "far",
      motif: "windmill",
      x: 3962,
      y: 358,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-139",
      layer: "mid",
      motif: "grass",
      x: 4059,
      y: 399,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-140",
      layer: "far",
      motif: "gear",
      x: 4156,
      y: 440,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-141",
      layer: "near",
      motif: "vine",
      x: 4253,
      y: 51,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-142",
      layer: "far",
      motif: "glassBerry",
      x: 4350,
      y: 92,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-143",
      layer: "mid",
      motif: "cloud",
      x: 4447,
      y: 133,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-144",
      layer: "far",
      motif: "windmill",
      x: 4544,
      y: 174,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-145",
      layer: "mid",
      motif: "grass",
      x: 4641,
      y: 215,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-146",
      layer: "near",
      motif: "gear",
      x: 4738,
      y: 256,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-147",
      layer: "mid",
      motif: "vine",
      x: 4835,
      y: 297,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-148",
      layer: "far",
      motif: "glassBerry",
      x: 4,
      y: 338,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-149",
      layer: "mid",
      motif: "cloud",
      x: 101,
      y: 379,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-150",
      layer: "far",
      motif: "windmill",
      x: 198,
      y: 420,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-151",
      layer: "near",
      motif: "grass",
      x: 295,
      y: 461,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-152",
      layer: "far",
      motif: "gear",
      x: 392,
      y: 72,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-153",
      layer: "mid",
      motif: "vine",
      x: 489,
      y: 113,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-154",
      layer: "far",
      motif: "glassBerry",
      x: 586,
      y: 154,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-155",
      layer: "mid",
      motif: "cloud",
      x: 683,
      y: 195,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-156",
      layer: "near",
      motif: "windmill",
      x: 780,
      y: 236,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-157",
      layer: "mid",
      motif: "grass",
      x: 877,
      y: 277,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-158",
      layer: "far",
      motif: "gear",
      x: 974,
      y: 318,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-159",
      layer: "mid",
      motif: "vine",
      x: 1071,
      y: 359,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-160",
      layer: "far",
      motif: "glassBerry",
      x: 1168,
      y: 400,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-161",
      layer: "near",
      motif: "cloud",
      x: 1265,
      y: 441,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-162",
      layer: "far",
      motif: "windmill",
      x: 1362,
      y: 52,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-163",
      layer: "mid",
      motif: "grass",
      x: 1459,
      y: 93,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-164",
      layer: "far",
      motif: "gear",
      x: 1556,
      y: 134,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-165",
      layer: "mid",
      motif: "vine",
      x: 1653,
      y: 175,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-166",
      layer: "near",
      motif: "glassBerry",
      x: 1750,
      y: 216,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-167",
      layer: "mid",
      motif: "cloud",
      x: 1847,
      y: 257,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-168",
      layer: "far",
      motif: "windmill",
      x: 1944,
      y: 298,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-169",
      layer: "mid",
      motif: "grass",
      x: 2041,
      y: 339,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-170",
      layer: "far",
      motif: "gear",
      x: 2138,
      y: 380,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-24-171",
      layer: "near",
      motif: "vine",
      x: 2235,
      y: 421,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-172",
      layer: "far",
      motif: "glassBerry",
      x: 2332,
      y: 32,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-24-173",
      layer: "mid",
      motif: "cloud",
      x: 2429,
      y: 73,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-24-174",
      layer: "far",
      motif: "windmill",
      x: 2526,
      y: 114,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-24-175",
      layer: "mid",
      motif: "grass",
      x: 2623,
      y: 155,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-24-176",
      layer: "near",
      motif: "gear",
      x: 2720,
      y: 196,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-24-177",
      layer: "mid",
      motif: "vine",
      x: 2817,
      y: 237,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-24-178",
      layer: "far",
      motif: "glassBerry",
      x: 2914,
      y: 278,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-24-179",
      layer: "mid",
      motif: "cloud",
      x: 3011,
      y: 319,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-24-180",
      layer: "far",
      motif: "windmill",
      x: 3108,
      y: 360,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-24",
    x: 4736,
    y: 448,
    nextLevelId: "level-25"
  }
};
