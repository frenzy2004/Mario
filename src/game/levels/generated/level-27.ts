import type { LevelDefinition } from "../schema";

export const LEVEL_27: LevelDefinition = {
  id: "level-27",
  index: 26,
  title: "Moonlit Gearway 06",
  chapter: "Moonlit Gearway",
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
    "...........................=======.......................===...........................====..........................=====................................",
    "......................######........................#######.......................###...........................####..........................####........",
    ".................#####.........................######........................#######.......................###...........................####.............",
    "............====..........................=====.........................======........................=======.......................===...................",
    ".....................................####..........................#####.........................######........................#######....................",
    "................................###........W..................####.............W............#####..................W......######..........................",
    "..................................S...................................S...................................S...............................................",
    "...P.....................W...................................W...................................W...................................W..............G.....",
    "................S...................................S...................................S...................................S.............................",
    "^################^....############^...#############^..##############^....############^...#############^..##############^....############^################^",
    "##################^.^.#############.^.##############^.###############.^.^#############^.^##############.^###############^.^.##############################"
  ],
  enemies: [
    {
      id: "enemy-27-1",
      kind: "lantern",
      x: 448,
      y: 448,
      patrolMin: 353,
      patrolMax: 568,
      speed: 68,
      phase: 26
    },
    {
      id: "enemy-27-2",
      kind: "charger",
      x: 778,
      y: 416,
      patrolMin: 665,
      patrolMax: 920,
      speed: 80,
      phase: 29
    },
    {
      id: "enemy-27-3",
      kind: "spiker",
      x: 1108,
      y: 384,
      patrolMin: 977,
      patrolMax: 1272,
      speed: 92,
      phase: 32
    },
    {
      id: "enemy-27-4",
      kind: "turret",
      x: 1438,
      y: 352,
      patrolMin: 1289,
      patrolMax: 1624,
      speed: 104,
      phase: 35
    },
    {
      id: "enemy-27-5",
      kind: "beetle",
      x: 1768,
      y: 320,
      patrolMin: 1673,
      patrolMax: 1976,
      speed: 44,
      phase: 38
    },
    {
      id: "enemy-27-6",
      kind: "acorn",
      x: 2098,
      y: 448,
      patrolMin: 1985,
      patrolMax: 2218,
      speed: 56,
      phase: 41
    },
    {
      id: "enemy-27-7",
      kind: "lantern",
      x: 2428,
      y: 416,
      patrolMin: 2297,
      patrolMax: 2570,
      speed: 68,
      phase: 44
    },
    {
      id: "enemy-27-8",
      kind: "charger",
      x: 2758,
      y: 384,
      patrolMin: 2609,
      patrolMax: 2922,
      speed: 80,
      phase: 47
    },
    {
      id: "enemy-27-9",
      kind: "spiker",
      x: 3088,
      y: 352,
      patrolMin: 2993,
      patrolMax: 3274,
      speed: 92,
      phase: 50
    },
    {
      id: "enemy-27-10",
      kind: "turret",
      x: 3418,
      y: 320,
      patrolMin: 3305,
      patrolMax: 3626,
      speed: 104,
      phase: 53
    },
    {
      id: "enemy-27-11",
      kind: "beetle",
      x: 3748,
      y: 448,
      patrolMin: 3617,
      patrolMax: 3868,
      speed: 44,
      phase: 56
    },
    {
      id: "enemy-27-12",
      kind: "acorn",
      x: 4078,
      y: 416,
      patrolMin: 3929,
      patrolMax: 4220,
      speed: 56,
      phase: 59
    },
    {
      id: "enemy-27-13",
      kind: "lantern",
      x: 4408,
      y: 384,
      patrolMin: 4313,
      patrolMax: 4572,
      speed: 68,
      phase: 62
    },
    {
      id: "enemy-27-14",
      kind: "charger",
      x: 4738,
      y: 352,
      patrolMin: 4625,
      patrolMax: 4748,
      speed: 80,
      phase: 65
    }
  ],
  collectibles: [
    {
      id: "collectible-27-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 204,
      y: 162
    },
    {
      id: "collectible-27-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 274,
      y: 182
    },
    {
      id: "collectible-27-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 344,
      y: 235
    },
    {
      id: "collectible-27-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 414,
      y: 288
    },
    {
      id: "collectible-27-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 484,
      y: 308
    },
    {
      id: "collectible-27-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 554,
      y: 361
    },
    {
      id: "collectible-27-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 624,
      y: 414
    },
    {
      id: "collectible-27-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 694,
      y: 140
    },
    {
      id: "collectible-27-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 764,
      y: 193
    },
    {
      id: "collectible-27-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 834,
      y: 246
    },
    {
      id: "collectible-27-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 904,
      y: 266
    },
    {
      id: "collectible-27-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 974,
      y: 319
    },
    {
      id: "collectible-27-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1044,
      y: 372
    },
    {
      id: "collectible-27-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1114,
      y: 392
    },
    {
      id: "collectible-27-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1184,
      y: 151
    },
    {
      id: "collectible-27-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1254,
      y: 204
    },
    {
      id: "collectible-27-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1324,
      y: 224
    },
    {
      id: "collectible-27-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1394,
      y: 277
    },
    {
      id: "collectible-27-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1464,
      y: 330
    },
    {
      id: "collectible-27-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1534,
      y: 350
    },
    {
      id: "collectible-27-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1604,
      y: 403
    },
    {
      id: "collectible-27-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1674,
      y: 162
    },
    {
      id: "collectible-27-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1744,
      y: 182
    },
    {
      id: "collectible-27-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1814,
      y: 235
    },
    {
      id: "collectible-27-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1884,
      y: 288
    },
    {
      id: "collectible-27-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1954,
      y: 308
    },
    {
      id: "collectible-27-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2024,
      y: 361
    },
    {
      id: "collectible-27-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2094,
      y: 414
    },
    {
      id: "collectible-27-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2164,
      y: 140
    },
    {
      id: "collectible-27-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2234,
      y: 193
    },
    {
      id: "collectible-27-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2304,
      y: 246
    },
    {
      id: "collectible-27-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2374,
      y: 266
    },
    {
      id: "collectible-27-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2444,
      y: 319
    },
    {
      id: "collectible-27-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2514,
      y: 372
    },
    {
      id: "collectible-27-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2584,
      y: 392
    },
    {
      id: "collectible-27-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2654,
      y: 151
    },
    {
      id: "collectible-27-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2724,
      y: 204
    },
    {
      id: "collectible-27-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2794,
      y: 224
    },
    {
      id: "collectible-27-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2864,
      y: 277
    },
    {
      id: "collectible-27-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2934,
      y: 330
    },
    {
      id: "collectible-27-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3004,
      y: 350
    },
    {
      id: "collectible-27-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3074,
      y: 403
    },
    {
      id: "collectible-27-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3144,
      y: 162
    },
    {
      id: "collectible-27-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3214,
      y: 182
    },
    {
      id: "collectible-27-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3284,
      y: 235
    },
    {
      id: "collectible-27-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3354,
      y: 288
    },
    {
      id: "collectible-27-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3424,
      y: 308
    },
    {
      id: "collectible-27-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3494,
      y: 361
    },
    {
      id: "collectible-27-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3564,
      y: 414
    },
    {
      id: "collectible-27-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3634,
      y: 140
    },
    {
      id: "collectible-27-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3704,
      y: 193
    },
    {
      id: "collectible-27-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3774,
      y: 246
    },
    {
      id: "collectible-27-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3844,
      y: 266
    },
    {
      id: "collectible-27-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3914,
      y: 319
    },
    {
      id: "collectible-27-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3984,
      y: 372
    },
    {
      id: "collectible-27-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4054,
      y: 392
    },
    {
      id: "collectible-27-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4124,
      y: 151
    },
    {
      id: "collectible-27-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4194,
      y: 204
    },
    {
      id: "collectible-27-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4264,
      y: 224
    },
    {
      id: "collectible-27-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4334,
      y: 277
    },
    {
      id: "collectible-27-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4404,
      y: 330
    },
    {
      id: "collectible-27-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4474,
      y: 350
    },
    {
      id: "collectible-27-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4544,
      y: 403
    },
    {
      id: "collectible-27-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4614,
      y: 162
    },
    {
      id: "collectible-27-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4684,
      y: 182
    },
    {
      id: "collectible-27-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4754,
      y: 235
    },
    {
      id: "collectible-27-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4824,
      y: 288
    },
    {
      id: "collectible-27-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4894,
      y: 308
    },
    {
      id: "collectible-27-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4964,
      y: 361
    },
    {
      id: "collectible-27-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5034,
      y: 414
    },
    {
      id: "collectible-27-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5104,
      y: 140
    },
    {
      id: "collectible-27-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5174,
      y: 193
    },
    {
      id: "collectible-27-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5244,
      y: 246
    },
    {
      id: "collectible-27-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5314,
      y: 266
    },
    {
      id: "collectible-27-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5384,
      y: 319
    },
    {
      id: "collectible-27-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5454,
      y: 372
    },
    {
      id: "collectible-27-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5524,
      y: 392
    },
    {
      id: "collectible-27-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5594,
      y: 151
    },
    {
      id: "collectible-27-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5664,
      y: 204
    },
    {
      id: "collectible-27-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5734,
      y: 224
    },
    {
      id: "collectible-27-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5804,
      y: 277
    },
    {
      id: "collectible-27-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5874,
      y: 330
    },
    {
      id: "collectible-27-83",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5944,
      y: 350
    },
    {
      id: "collectible-27-84",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6014,
      y: 403
    },
    {
      id: "collectible-27-85",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6084,
      y: 162
    },
    {
      id: "collectible-27-86",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 6154,
      y: 182
    },
    {
      id: "collectible-27-87",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6224,
      y: 235
    },
    {
      id: "collectible-27-88",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6294,
      y: 288
    },
    {
      id: "collectible-27-89",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6364,
      y: 308
    },
    {
      id: "collectible-27-90",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6434,
      y: 361
    },
    {
      id: "collectible-27-91",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6504,
      y: 414
    },
    {
      id: "collectible-27-92",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6574,
      y: 140
    },
    {
      id: "collectible-27-93",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6644,
      y: 193
    },
    {
      id: "collectible-27-94",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 6714,
      y: 246
    }
  ],
  powerups: [
    {
      id: "powerup-27-1",
      kind: "starburst",
      durationMs: 4800,
      x: 560,
      y: 130
    },
    {
      id: "powerup-27-2",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 1390,
      y: 182
    },
    {
      id: "powerup-27-3",
      kind: "shield",
      durationMs: 6600,
      x: 2220,
      y: 234
    },
    {
      id: "powerup-27-4",
      kind: "springBoots",
      durationMs: 7500,
      x: 3050,
      y: 286
    },
    {
      id: "powerup-27-5",
      kind: "starburst",
      durationMs: 4800,
      x: 3880,
      y: 338
    },
    {
      id: "powerup-27-6",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 4710,
      y: 130
    },
    {
      id: "powerup-27-7",
      kind: "shield",
      durationMs: 6600,
      x: 5540,
      y: 182
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-27-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 2.6
    },
    {
      id: "moving-platform-27-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 3.3
    },
    {
      id: "moving-platform-27-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 4
    },
    {
      id: "moving-platform-27-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 4.699999999999999
    },
    {
      id: "moving-platform-27-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 5.4
    },
    {
      id: "moving-platform-27-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 6.1
    },
    {
      id: "moving-platform-27-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 6.799999999999999
    },
    {
      id: "moving-platform-27-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 7.5
    }
  ],
  hazards: [
    {
      id: "hazard-27-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 26
    },
    {
      id: "hazard-27-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 27
    },
    {
      id: "hazard-27-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 28
    },
    {
      id: "hazard-27-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 29
    },
    {
      id: "hazard-27-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 30
    },
    {
      id: "hazard-27-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 31
    },
    {
      id: "hazard-27-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 32
    },
    {
      id: "hazard-27-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 33
    },
    {
      id: "hazard-27-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 34
    },
    {
      id: "hazard-27-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 35
    },
    {
      id: "hazard-27-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 36
    },
    {
      id: "hazard-27-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 37
    },
    {
      id: "hazard-27-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 38
    },
    {
      id: "hazard-27-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 39
    },
    {
      id: "hazard-27-15",
      kind: "thorn",
      x: 5660,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 40
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-27-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-27-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-27-1",
      x: 708,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-27-2",
      x: 1478,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-27-3",
      x: 2248,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-27-4",
      x: 3018,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-27-5",
      x: 3788,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-27-6",
      x: 4558,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-27-7",
      x: 5328,
      y: 416,
      power: 1.1
    }
  ],
  windZones: [
    {
      id: "wind-27-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-27-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-27-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-27-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-27-5",
      x: 4660,
      y: 180,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    }
  ],
  decorations: [
    {
      id: "decor-27-1",
      layer: "near",
      motif: "glassBerry",
      x: 598,
      y: 370,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-2",
      layer: "far",
      motif: "cloud",
      x: 695,
      y: 411,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-3",
      layer: "mid",
      motif: "windmill",
      x: 792,
      y: 452,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-4",
      layer: "far",
      motif: "grass",
      x: 889,
      y: 63,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-5",
      layer: "mid",
      motif: "gear",
      x: 986,
      y: 104,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-6",
      layer: "near",
      motif: "vine",
      x: 1083,
      y: 145,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-7",
      layer: "mid",
      motif: "glassBerry",
      x: 1180,
      y: 186,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-8",
      layer: "far",
      motif: "cloud",
      x: 1277,
      y: 227,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-9",
      layer: "mid",
      motif: "windmill",
      x: 1374,
      y: 268,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-10",
      layer: "far",
      motif: "grass",
      x: 1471,
      y: 309,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-11",
      layer: "near",
      motif: "gear",
      x: 1568,
      y: 350,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-12",
      layer: "far",
      motif: "vine",
      x: 1665,
      y: 391,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-13",
      layer: "mid",
      motif: "glassBerry",
      x: 1762,
      y: 432,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-14",
      layer: "far",
      motif: "cloud",
      x: 1859,
      y: 43,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-15",
      layer: "mid",
      motif: "windmill",
      x: 1956,
      y: 84,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-16",
      layer: "near",
      motif: "grass",
      x: 2053,
      y: 125,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-17",
      layer: "mid",
      motif: "gear",
      x: 2150,
      y: 166,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-18",
      layer: "far",
      motif: "vine",
      x: 2247,
      y: 207,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-19",
      layer: "mid",
      motif: "glassBerry",
      x: 2344,
      y: 248,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-20",
      layer: "far",
      motif: "cloud",
      x: 2441,
      y: 289,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-21",
      layer: "near",
      motif: "windmill",
      x: 2538,
      y: 330,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-22",
      layer: "far",
      motif: "grass",
      x: 2635,
      y: 371,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-23",
      layer: "mid",
      motif: "gear",
      x: 2732,
      y: 412,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-24",
      layer: "far",
      motif: "vine",
      x: 2829,
      y: 453,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-25",
      layer: "mid",
      motif: "glassBerry",
      x: 2926,
      y: 64,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-26",
      layer: "near",
      motif: "cloud",
      x: 3023,
      y: 105,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-27",
      layer: "mid",
      motif: "windmill",
      x: 3120,
      y: 146,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-28",
      layer: "far",
      motif: "grass",
      x: 3217,
      y: 187,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-29",
      layer: "mid",
      motif: "gear",
      x: 3314,
      y: 228,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-30",
      layer: "far",
      motif: "vine",
      x: 3411,
      y: 269,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-31",
      layer: "near",
      motif: "glassBerry",
      x: 3508,
      y: 310,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-32",
      layer: "far",
      motif: "cloud",
      x: 3605,
      y: 351,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-33",
      layer: "mid",
      motif: "windmill",
      x: 3702,
      y: 392,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-34",
      layer: "far",
      motif: "grass",
      x: 3799,
      y: 433,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-35",
      layer: "mid",
      motif: "gear",
      x: 3896,
      y: 44,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-36",
      layer: "near",
      motif: "vine",
      x: 3993,
      y: 85,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-37",
      layer: "mid",
      motif: "glassBerry",
      x: 4090,
      y: 126,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-38",
      layer: "far",
      motif: "cloud",
      x: 4187,
      y: 167,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-39",
      layer: "mid",
      motif: "windmill",
      x: 4284,
      y: 208,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-40",
      layer: "far",
      motif: "grass",
      x: 4381,
      y: 249,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-41",
      layer: "near",
      motif: "gear",
      x: 4478,
      y: 290,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-42",
      layer: "far",
      motif: "vine",
      x: 4575,
      y: 331,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-43",
      layer: "mid",
      motif: "glassBerry",
      x: 4672,
      y: 372,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-44",
      layer: "far",
      motif: "cloud",
      x: 4769,
      y: 413,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-45",
      layer: "mid",
      motif: "windmill",
      x: 4866,
      y: 454,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-46",
      layer: "near",
      motif: "grass",
      x: 35,
      y: 65,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-47",
      layer: "mid",
      motif: "gear",
      x: 132,
      y: 106,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-48",
      layer: "far",
      motif: "vine",
      x: 229,
      y: 147,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-49",
      layer: "mid",
      motif: "glassBerry",
      x: 326,
      y: 188,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-50",
      layer: "far",
      motif: "cloud",
      x: 423,
      y: 229,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-51",
      layer: "near",
      motif: "windmill",
      x: 520,
      y: 270,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-52",
      layer: "far",
      motif: "grass",
      x: 617,
      y: 311,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-53",
      layer: "mid",
      motif: "gear",
      x: 714,
      y: 352,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-54",
      layer: "far",
      motif: "vine",
      x: 811,
      y: 393,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-55",
      layer: "mid",
      motif: "glassBerry",
      x: 908,
      y: 434,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-56",
      layer: "near",
      motif: "cloud",
      x: 1005,
      y: 45,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-57",
      layer: "mid",
      motif: "windmill",
      x: 1102,
      y: 86,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-58",
      layer: "far",
      motif: "grass",
      x: 1199,
      y: 127,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-59",
      layer: "mid",
      motif: "gear",
      x: 1296,
      y: 168,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-60",
      layer: "far",
      motif: "vine",
      x: 1393,
      y: 209,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-61",
      layer: "near",
      motif: "glassBerry",
      x: 1490,
      y: 250,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-62",
      layer: "far",
      motif: "cloud",
      x: 1587,
      y: 291,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-63",
      layer: "mid",
      motif: "windmill",
      x: 1684,
      y: 332,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-64",
      layer: "far",
      motif: "grass",
      x: 1781,
      y: 373,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-65",
      layer: "mid",
      motif: "gear",
      x: 1878,
      y: 414,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-66",
      layer: "near",
      motif: "vine",
      x: 1975,
      y: 455,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-67",
      layer: "mid",
      motif: "glassBerry",
      x: 2072,
      y: 66,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-68",
      layer: "far",
      motif: "cloud",
      x: 2169,
      y: 107,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-69",
      layer: "mid",
      motif: "windmill",
      x: 2266,
      y: 148,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-70",
      layer: "far",
      motif: "grass",
      x: 2363,
      y: 189,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-71",
      layer: "near",
      motif: "gear",
      x: 2460,
      y: 230,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-72",
      layer: "far",
      motif: "vine",
      x: 2557,
      y: 271,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-73",
      layer: "mid",
      motif: "glassBerry",
      x: 2654,
      y: 312,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-74",
      layer: "far",
      motif: "cloud",
      x: 2751,
      y: 353,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-75",
      layer: "mid",
      motif: "windmill",
      x: 2848,
      y: 394,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-76",
      layer: "near",
      motif: "grass",
      x: 2945,
      y: 435,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-77",
      layer: "mid",
      motif: "gear",
      x: 3042,
      y: 46,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-78",
      layer: "far",
      motif: "vine",
      x: 3139,
      y: 87,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-79",
      layer: "mid",
      motif: "glassBerry",
      x: 3236,
      y: 128,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-80",
      layer: "far",
      motif: "cloud",
      x: 3333,
      y: 169,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-81",
      layer: "near",
      motif: "windmill",
      x: 3430,
      y: 210,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-82",
      layer: "far",
      motif: "grass",
      x: 3527,
      y: 251,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-83",
      layer: "mid",
      motif: "gear",
      x: 3624,
      y: 292,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-84",
      layer: "far",
      motif: "vine",
      x: 3721,
      y: 333,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-85",
      layer: "mid",
      motif: "glassBerry",
      x: 3818,
      y: 374,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-86",
      layer: "near",
      motif: "cloud",
      x: 3915,
      y: 415,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-87",
      layer: "mid",
      motif: "windmill",
      x: 4012,
      y: 456,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-88",
      layer: "far",
      motif: "grass",
      x: 4109,
      y: 67,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-89",
      layer: "mid",
      motif: "gear",
      x: 4206,
      y: 108,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-90",
      layer: "far",
      motif: "vine",
      x: 4303,
      y: 149,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-91",
      layer: "near",
      motif: "glassBerry",
      x: 4400,
      y: 190,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-92",
      layer: "far",
      motif: "cloud",
      x: 4497,
      y: 231,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-93",
      layer: "mid",
      motif: "windmill",
      x: 4594,
      y: 272,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-94",
      layer: "far",
      motif: "grass",
      x: 4691,
      y: 313,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-95",
      layer: "mid",
      motif: "gear",
      x: 4788,
      y: 354,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-96",
      layer: "near",
      motif: "vine",
      x: 4885,
      y: 395,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-97",
      layer: "mid",
      motif: "glassBerry",
      x: 54,
      y: 436,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-98",
      layer: "far",
      motif: "cloud",
      x: 151,
      y: 47,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-99",
      layer: "mid",
      motif: "windmill",
      x: 248,
      y: 88,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-100",
      layer: "far",
      motif: "grass",
      x: 345,
      y: 129,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-101",
      layer: "near",
      motif: "gear",
      x: 442,
      y: 170,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-102",
      layer: "far",
      motif: "vine",
      x: 539,
      y: 211,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-103",
      layer: "mid",
      motif: "glassBerry",
      x: 636,
      y: 252,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-104",
      layer: "far",
      motif: "cloud",
      x: 733,
      y: 293,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-105",
      layer: "mid",
      motif: "windmill",
      x: 830,
      y: 334,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-106",
      layer: "near",
      motif: "grass",
      x: 927,
      y: 375,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-107",
      layer: "mid",
      motif: "gear",
      x: 1024,
      y: 416,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-108",
      layer: "far",
      motif: "vine",
      x: 1121,
      y: 457,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-109",
      layer: "mid",
      motif: "glassBerry",
      x: 1218,
      y: 68,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-110",
      layer: "far",
      motif: "cloud",
      x: 1315,
      y: 109,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-111",
      layer: "near",
      motif: "windmill",
      x: 1412,
      y: 150,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-112",
      layer: "far",
      motif: "grass",
      x: 1509,
      y: 191,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-113",
      layer: "mid",
      motif: "gear",
      x: 1606,
      y: 232,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-114",
      layer: "far",
      motif: "vine",
      x: 1703,
      y: 273,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-115",
      layer: "mid",
      motif: "glassBerry",
      x: 1800,
      y: 314,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-116",
      layer: "near",
      motif: "cloud",
      x: 1897,
      y: 355,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-117",
      layer: "mid",
      motif: "windmill",
      x: 1994,
      y: 396,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-118",
      layer: "far",
      motif: "grass",
      x: 2091,
      y: 437,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-119",
      layer: "mid",
      motif: "gear",
      x: 2188,
      y: 48,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-120",
      layer: "far",
      motif: "vine",
      x: 2285,
      y: 89,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-121",
      layer: "near",
      motif: "glassBerry",
      x: 2382,
      y: 130,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-122",
      layer: "far",
      motif: "cloud",
      x: 2479,
      y: 171,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-123",
      layer: "mid",
      motif: "windmill",
      x: 2576,
      y: 212,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-124",
      layer: "far",
      motif: "grass",
      x: 2673,
      y: 253,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-125",
      layer: "mid",
      motif: "gear",
      x: 2770,
      y: 294,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-126",
      layer: "near",
      motif: "vine",
      x: 2867,
      y: 335,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-127",
      layer: "mid",
      motif: "glassBerry",
      x: 2964,
      y: 376,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-128",
      layer: "far",
      motif: "cloud",
      x: 3061,
      y: 417,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-129",
      layer: "mid",
      motif: "windmill",
      x: 3158,
      y: 458,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-130",
      layer: "far",
      motif: "grass",
      x: 3255,
      y: 69,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-131",
      layer: "near",
      motif: "gear",
      x: 3352,
      y: 110,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-132",
      layer: "far",
      motif: "vine",
      x: 3449,
      y: 151,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-133",
      layer: "mid",
      motif: "glassBerry",
      x: 3546,
      y: 192,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-134",
      layer: "far",
      motif: "cloud",
      x: 3643,
      y: 233,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-135",
      layer: "mid",
      motif: "windmill",
      x: 3740,
      y: 274,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-136",
      layer: "near",
      motif: "grass",
      x: 3837,
      y: 315,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-137",
      layer: "mid",
      motif: "gear",
      x: 3934,
      y: 356,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-138",
      layer: "far",
      motif: "vine",
      x: 4031,
      y: 397,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-139",
      layer: "mid",
      motif: "glassBerry",
      x: 4128,
      y: 438,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-140",
      layer: "far",
      motif: "cloud",
      x: 4225,
      y: 49,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-141",
      layer: "near",
      motif: "windmill",
      x: 4322,
      y: 90,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-142",
      layer: "far",
      motif: "grass",
      x: 4419,
      y: 131,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-143",
      layer: "mid",
      motif: "gear",
      x: 4516,
      y: 172,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-144",
      layer: "far",
      motif: "vine",
      x: 4613,
      y: 213,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-145",
      layer: "mid",
      motif: "glassBerry",
      x: 4710,
      y: 254,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-146",
      layer: "near",
      motif: "cloud",
      x: 4807,
      y: 295,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-147",
      layer: "mid",
      motif: "windmill",
      x: 4904,
      y: 336,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-148",
      layer: "far",
      motif: "grass",
      x: 73,
      y: 377,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-149",
      layer: "mid",
      motif: "gear",
      x: 170,
      y: 418,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-150",
      layer: "far",
      motif: "vine",
      x: 267,
      y: 459,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-151",
      layer: "near",
      motif: "glassBerry",
      x: 364,
      y: 70,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-152",
      layer: "far",
      motif: "cloud",
      x: 461,
      y: 111,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-153",
      layer: "mid",
      motif: "windmill",
      x: 558,
      y: 152,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-154",
      layer: "far",
      motif: "grass",
      x: 655,
      y: 193,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-155",
      layer: "mid",
      motif: "gear",
      x: 752,
      y: 234,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-156",
      layer: "near",
      motif: "vine",
      x: 849,
      y: 275,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-157",
      layer: "mid",
      motif: "glassBerry",
      x: 946,
      y: 316,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-158",
      layer: "far",
      motif: "cloud",
      x: 1043,
      y: 357,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-159",
      layer: "mid",
      motif: "windmill",
      x: 1140,
      y: 398,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-160",
      layer: "far",
      motif: "grass",
      x: 1237,
      y: 439,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-161",
      layer: "near",
      motif: "gear",
      x: 1334,
      y: 50,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-162",
      layer: "far",
      motif: "vine",
      x: 1431,
      y: 91,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-163",
      layer: "mid",
      motif: "glassBerry",
      x: 1528,
      y: 132,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-164",
      layer: "far",
      motif: "cloud",
      x: 1625,
      y: 173,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-165",
      layer: "mid",
      motif: "windmill",
      x: 1722,
      y: 214,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-166",
      layer: "near",
      motif: "grass",
      x: 1819,
      y: 255,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-167",
      layer: "mid",
      motif: "gear",
      x: 1916,
      y: 296,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-168",
      layer: "far",
      motif: "vine",
      x: 2013,
      y: 337,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-169",
      layer: "mid",
      motif: "glassBerry",
      x: 2110,
      y: 378,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-170",
      layer: "far",
      motif: "cloud",
      x: 2207,
      y: 419,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-27-171",
      layer: "near",
      motif: "windmill",
      x: 2304,
      y: 460,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-172",
      layer: "far",
      motif: "grass",
      x: 2401,
      y: 71,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-27-173",
      layer: "mid",
      motif: "gear",
      x: 2498,
      y: 112,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-27-174",
      layer: "far",
      motif: "vine",
      x: 2595,
      y: 153,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-27-175",
      layer: "mid",
      motif: "glassBerry",
      x: 2692,
      y: 194,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-27-176",
      layer: "near",
      motif: "cloud",
      x: 2789,
      y: 235,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-27-177",
      layer: "mid",
      motif: "windmill",
      x: 2886,
      y: 276,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-27-178",
      layer: "far",
      motif: "grass",
      x: 2983,
      y: 317,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-27-179",
      layer: "mid",
      motif: "gear",
      x: 3080,
      y: 358,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-27-180",
      layer: "far",
      motif: "vine",
      x: 3177,
      y: 399,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-27",
    x: 4736,
    y: 448,
    nextLevelId: "level-28"
  }
};
