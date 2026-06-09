import type { LevelDefinition } from "../schema";

export const LEVEL_07: LevelDefinition = {
  id: "level-07",
  index: 6,
  title: "Brassroot Verge 07",
  chapter: "Brassroot Verge",
  columns: 154,
  rows: 18,
  timeLimit: 298,
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
    ".....................................####..........................#####.........................######........................#######....................",
    "................................###...........................####..........................#####.........................######..........................",
    "...........................=======.......................===...........................====..........................=====................................",
    "......................######........................#######.......................###...........................####..........................####........",
    ".................#####.........................######........................#######.......................###...........................####.............",
    "............====.........................W=====.........................=====W........................=======....W..................===...................",
    "................................S...................................S...................................S.................................................",
    "...P...................W...................................W...................................W...................................W................G.....",
    "..............S...................................S...................................S...................................S...............................",
    "^################^..##############^....############^...#############^..##############^....############^...#############^..##############^################^",
    "##################^.###############.^.^#############^.^##############.^###############^.^.#############.^.##############^.################################"
  ],
  enemies: [
    {
      id: "enemy-7-1",
      kind: "beetle",
      x: 448,
      y: 448,
      patrolMin: 353,
      patrolMax: 568,
      speed: 44,
      phase: 6
    },
    {
      id: "enemy-7-2",
      kind: "acorn",
      x: 778,
      y: 416,
      patrolMin: 665,
      patrolMax: 920,
      speed: 56,
      phase: 9
    },
    {
      id: "enemy-7-3",
      kind: "lantern",
      x: 1108,
      y: 384,
      patrolMin: 977,
      patrolMax: 1272,
      speed: 68,
      phase: 12
    },
    {
      id: "enemy-7-4",
      kind: "charger",
      x: 1438,
      y: 352,
      patrolMin: 1289,
      patrolMax: 1624,
      speed: 80,
      phase: 15
    },
    {
      id: "enemy-7-5",
      kind: "spiker",
      x: 1768,
      y: 320,
      patrolMin: 1673,
      patrolMax: 1976,
      speed: 92,
      phase: 18
    },
    {
      id: "enemy-7-6",
      kind: "turret",
      x: 2098,
      y: 448,
      patrolMin: 1985,
      patrolMax: 2218,
      speed: 104,
      phase: 21
    },
    {
      id: "enemy-7-7",
      kind: "beetle",
      x: 2428,
      y: 416,
      patrolMin: 2297,
      patrolMax: 2570,
      speed: 44,
      phase: 24
    },
    {
      id: "enemy-7-8",
      kind: "acorn",
      x: 2758,
      y: 384,
      patrolMin: 2609,
      patrolMax: 2922,
      speed: 56,
      phase: 27
    },
    {
      id: "enemy-7-9",
      kind: "lantern",
      x: 3088,
      y: 352,
      patrolMin: 2993,
      patrolMax: 3274,
      speed: 68,
      phase: 30
    },
    {
      id: "enemy-7-10",
      kind: "charger",
      x: 3418,
      y: 320,
      patrolMin: 3305,
      patrolMax: 3626,
      speed: 80,
      phase: 33
    },
    {
      id: "enemy-7-11",
      kind: "spiker",
      x: 3748,
      y: 448,
      patrolMin: 3617,
      patrolMax: 3868,
      speed: 92,
      phase: 36
    },
    {
      id: "enemy-7-12",
      kind: "turret",
      x: 4078,
      y: 416,
      patrolMin: 3929,
      patrolMax: 4220,
      speed: 104,
      phase: 39
    },
    {
      id: "enemy-7-13",
      kind: "beetle",
      x: 4408,
      y: 384,
      patrolMin: 4313,
      patrolMax: 4572,
      speed: 44,
      phase: 42
    },
    {
      id: "enemy-7-14",
      kind: "acorn",
      x: 4738,
      y: 352,
      patrolMin: 4625,
      patrolMax: 4748,
      speed: 56,
      phase: 45
    },
    {
      id: "enemy-7-15",
      kind: "lantern",
      x: 5068,
      y: 320,
      patrolMin: 4937,
      patrolMax: 4748,
      speed: 68,
      phase: 48
    },
    {
      id: "enemy-7-16",
      kind: "charger",
      x: 5398,
      y: 448,
      patrolMin: 5249,
      patrolMax: 4748,
      speed: 80,
      phase: 51
    },
    {
      id: "enemy-7-17",
      kind: "spiker",
      x: 5728,
      y: 416,
      patrolMin: 5633,
      patrolMax: 4748,
      speed: 92,
      phase: 54
    },
    {
      id: "enemy-7-18",
      kind: "turret",
      x: 6058,
      y: 384,
      patrolMin: 5945,
      patrolMax: 4748,
      speed: 104,
      phase: 57
    }
  ],
  collectibles: [
    {
      id: "collectible-7-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 204,
      y: 140
    },
    {
      id: "collectible-7-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 274,
      y: 193
    },
    {
      id: "collectible-7-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 344,
      y: 246
    },
    {
      id: "collectible-7-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 414,
      y: 266
    },
    {
      id: "collectible-7-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 484,
      y: 319
    },
    {
      id: "collectible-7-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 554,
      y: 372
    },
    {
      id: "collectible-7-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 624,
      y: 392
    },
    {
      id: "collectible-7-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 694,
      y: 151
    },
    {
      id: "collectible-7-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 764,
      y: 204
    },
    {
      id: "collectible-7-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 834,
      y: 224
    },
    {
      id: "collectible-7-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 904,
      y: 277
    },
    {
      id: "collectible-7-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 974,
      y: 330
    },
    {
      id: "collectible-7-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1044,
      y: 350
    },
    {
      id: "collectible-7-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1114,
      y: 403
    },
    {
      id: "collectible-7-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1184,
      y: 162
    },
    {
      id: "collectible-7-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1254,
      y: 182
    },
    {
      id: "collectible-7-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1324,
      y: 235
    },
    {
      id: "collectible-7-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1394,
      y: 288
    },
    {
      id: "collectible-7-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1464,
      y: 308
    },
    {
      id: "collectible-7-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1534,
      y: 361
    },
    {
      id: "collectible-7-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1604,
      y: 414
    },
    {
      id: "collectible-7-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1674,
      y: 140
    },
    {
      id: "collectible-7-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1744,
      y: 193
    },
    {
      id: "collectible-7-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1814,
      y: 246
    },
    {
      id: "collectible-7-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1884,
      y: 266
    },
    {
      id: "collectible-7-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1954,
      y: 319
    },
    {
      id: "collectible-7-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2024,
      y: 372
    },
    {
      id: "collectible-7-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2094,
      y: 392
    },
    {
      id: "collectible-7-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2164,
      y: 151
    },
    {
      id: "collectible-7-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2234,
      y: 204
    },
    {
      id: "collectible-7-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2304,
      y: 224
    },
    {
      id: "collectible-7-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2374,
      y: 277
    },
    {
      id: "collectible-7-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2444,
      y: 330
    },
    {
      id: "collectible-7-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2514,
      y: 350
    },
    {
      id: "collectible-7-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2584,
      y: 403
    },
    {
      id: "collectible-7-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2654,
      y: 162
    },
    {
      id: "collectible-7-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2724,
      y: 182
    },
    {
      id: "collectible-7-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2794,
      y: 235
    },
    {
      id: "collectible-7-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2864,
      y: 288
    },
    {
      id: "collectible-7-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2934,
      y: 308
    },
    {
      id: "collectible-7-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3004,
      y: 361
    },
    {
      id: "collectible-7-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3074,
      y: 414
    },
    {
      id: "collectible-7-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3144,
      y: 140
    },
    {
      id: "collectible-7-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3214,
      y: 193
    },
    {
      id: "collectible-7-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3284,
      y: 246
    },
    {
      id: "collectible-7-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3354,
      y: 266
    },
    {
      id: "collectible-7-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3424,
      y: 319
    },
    {
      id: "collectible-7-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3494,
      y: 372
    },
    {
      id: "collectible-7-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3564,
      y: 392
    },
    {
      id: "collectible-7-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3634,
      y: 151
    },
    {
      id: "collectible-7-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3704,
      y: 204
    },
    {
      id: "collectible-7-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3774,
      y: 224
    },
    {
      id: "collectible-7-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3844,
      y: 277
    },
    {
      id: "collectible-7-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3914,
      y: 330
    },
    {
      id: "collectible-7-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3984,
      y: 350
    },
    {
      id: "collectible-7-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4054,
      y: 403
    },
    {
      id: "collectible-7-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4124,
      y: 162
    },
    {
      id: "collectible-7-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4194,
      y: 182
    },
    {
      id: "collectible-7-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4264,
      y: 235
    },
    {
      id: "collectible-7-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4334,
      y: 288
    },
    {
      id: "collectible-7-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4404,
      y: 308
    },
    {
      id: "collectible-7-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4474,
      y: 361
    },
    {
      id: "collectible-7-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4544,
      y: 414
    },
    {
      id: "collectible-7-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4614,
      y: 140
    },
    {
      id: "collectible-7-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4684,
      y: 193
    },
    {
      id: "collectible-7-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4754,
      y: 246
    },
    {
      id: "collectible-7-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4824,
      y: 266
    },
    {
      id: "collectible-7-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4894,
      y: 319
    },
    {
      id: "collectible-7-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4964,
      y: 372
    },
    {
      id: "collectible-7-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5034,
      y: 392
    },
    {
      id: "collectible-7-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5104,
      y: 151
    },
    {
      id: "collectible-7-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5174,
      y: 204
    },
    {
      id: "collectible-7-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5244,
      y: 224
    },
    {
      id: "collectible-7-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5314,
      y: 277
    },
    {
      id: "collectible-7-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5384,
      y: 330
    },
    {
      id: "collectible-7-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5454,
      y: 350
    },
    {
      id: "collectible-7-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5524,
      y: 403
    },
    {
      id: "collectible-7-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5594,
      y: 162
    },
    {
      id: "collectible-7-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5664,
      y: 182
    },
    {
      id: "collectible-7-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5734,
      y: 235
    },
    {
      id: "collectible-7-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5804,
      y: 288
    },
    {
      id: "collectible-7-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5874,
      y: 308
    },
    {
      id: "collectible-7-83",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5944,
      y: 361
    },
    {
      id: "collectible-7-84",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6014,
      y: 414
    },
    {
      id: "collectible-7-85",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6084,
      y: 140
    },
    {
      id: "collectible-7-86",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 6154,
      y: 193
    }
  ],
  powerups: [
    {
      id: "powerup-7-1",
      kind: "starburst",
      durationMs: 4800,
      x: 500,
      y: 130
    },
    {
      id: "powerup-7-2",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 1330,
      y: 182
    },
    {
      id: "powerup-7-3",
      kind: "shield",
      durationMs: 6600,
      x: 2160,
      y: 234
    },
    {
      id: "powerup-7-4",
      kind: "springBoots",
      durationMs: 7500,
      x: 2990,
      y: 286
    },
    {
      id: "powerup-7-5",
      kind: "starburst",
      durationMs: 4800,
      x: 3820,
      y: 338
    },
    {
      id: "powerup-7-6",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 4650,
      y: 130
    },
    {
      id: "powerup-7-7",
      kind: "shield",
      durationMs: 6600,
      x: 5480,
      y: 182
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-7-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 0.6000000000000001
    },
    {
      id: "moving-platform-7-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 1.3
    },
    {
      id: "moving-platform-7-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 2
    },
    {
      id: "moving-platform-7-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 2.6999999999999997
    },
    {
      id: "moving-platform-7-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 3.4
    },
    {
      id: "moving-platform-7-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 4.1
    },
    {
      id: "moving-platform-7-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 4.799999999999999
    },
    {
      id: "moving-platform-7-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 5.5
    }
  ],
  hazards: [
    {
      id: "hazard-7-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 6
    },
    {
      id: "hazard-7-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 7
    },
    {
      id: "hazard-7-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 8
    },
    {
      id: "hazard-7-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 9
    },
    {
      id: "hazard-7-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 10
    },
    {
      id: "hazard-7-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 11
    },
    {
      id: "hazard-7-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 12
    },
    {
      id: "hazard-7-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 13
    },
    {
      id: "hazard-7-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 14
    },
    {
      id: "hazard-7-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 15
    },
    {
      id: "hazard-7-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 16
    },
    {
      id: "hazard-7-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 17
    },
    {
      id: "hazard-7-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 18
    },
    {
      id: "hazard-7-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 19
    },
    {
      id: "hazard-7-15",
      kind: "thorn",
      x: 5660,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 20
    },
    {
      id: "hazard-7-16",
      kind: "crushBlock",
      x: 6020,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 21
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-7-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-7-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-7-1",
      x: 640,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-7-2",
      x: 1410,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-7-3",
      x: 2180,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-7-4",
      x: 2950,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-7-5",
      x: 3720,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-7-6",
      x: 4490,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-7-7",
      x: 5260,
      y: 416,
      power: 1.1
    }
  ],
  windZones: [
    {
      id: "wind-7-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-7-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-7-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-7-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-7-5",
      x: 4660,
      y: 180,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    }
  ],
  decorations: [
    {
      id: "decor-7-1",
      layer: "near",
      motif: "gear",
      x: 138,
      y: 110,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-2",
      layer: "far",
      motif: "vine",
      x: 235,
      y: 151,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-3",
      layer: "mid",
      motif: "glassBerry",
      x: 332,
      y: 192,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-4",
      layer: "far",
      motif: "cloud",
      x: 429,
      y: 233,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-5",
      layer: "mid",
      motif: "windmill",
      x: 526,
      y: 274,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-6",
      layer: "near",
      motif: "grass",
      x: 623,
      y: 315,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-7",
      layer: "mid",
      motif: "gear",
      x: 720,
      y: 356,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-8",
      layer: "far",
      motif: "vine",
      x: 817,
      y: 397,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-9",
      layer: "mid",
      motif: "glassBerry",
      x: 914,
      y: 438,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-10",
      layer: "far",
      motif: "cloud",
      x: 1011,
      y: 49,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-11",
      layer: "near",
      motif: "windmill",
      x: 1108,
      y: 90,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-12",
      layer: "far",
      motif: "grass",
      x: 1205,
      y: 131,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-13",
      layer: "mid",
      motif: "gear",
      x: 1302,
      y: 172,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-14",
      layer: "far",
      motif: "vine",
      x: 1399,
      y: 213,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-15",
      layer: "mid",
      motif: "glassBerry",
      x: 1496,
      y: 254,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-16",
      layer: "near",
      motif: "cloud",
      x: 1593,
      y: 295,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-17",
      layer: "mid",
      motif: "windmill",
      x: 1690,
      y: 336,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-18",
      layer: "far",
      motif: "grass",
      x: 1787,
      y: 377,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-19",
      layer: "mid",
      motif: "gear",
      x: 1884,
      y: 418,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-20",
      layer: "far",
      motif: "vine",
      x: 1981,
      y: 459,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-21",
      layer: "near",
      motif: "glassBerry",
      x: 2078,
      y: 70,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-22",
      layer: "far",
      motif: "cloud",
      x: 2175,
      y: 111,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-23",
      layer: "mid",
      motif: "windmill",
      x: 2272,
      y: 152,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-24",
      layer: "far",
      motif: "grass",
      x: 2369,
      y: 193,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-25",
      layer: "mid",
      motif: "gear",
      x: 2466,
      y: 234,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-26",
      layer: "near",
      motif: "vine",
      x: 2563,
      y: 275,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-27",
      layer: "mid",
      motif: "glassBerry",
      x: 2660,
      y: 316,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-28",
      layer: "far",
      motif: "cloud",
      x: 2757,
      y: 357,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-29",
      layer: "mid",
      motif: "windmill",
      x: 2854,
      y: 398,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-30",
      layer: "far",
      motif: "grass",
      x: 2951,
      y: 439,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-31",
      layer: "near",
      motif: "gear",
      x: 3048,
      y: 50,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-32",
      layer: "far",
      motif: "vine",
      x: 3145,
      y: 91,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-33",
      layer: "mid",
      motif: "glassBerry",
      x: 3242,
      y: 132,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-34",
      layer: "far",
      motif: "cloud",
      x: 3339,
      y: 173,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-35",
      layer: "mid",
      motif: "windmill",
      x: 3436,
      y: 214,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-36",
      layer: "near",
      motif: "grass",
      x: 3533,
      y: 255,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-37",
      layer: "mid",
      motif: "gear",
      x: 3630,
      y: 296,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-38",
      layer: "far",
      motif: "vine",
      x: 3727,
      y: 337,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-39",
      layer: "mid",
      motif: "glassBerry",
      x: 3824,
      y: 378,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-40",
      layer: "far",
      motif: "cloud",
      x: 3921,
      y: 419,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-41",
      layer: "near",
      motif: "windmill",
      x: 4018,
      y: 460,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-42",
      layer: "far",
      motif: "grass",
      x: 4115,
      y: 71,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-43",
      layer: "mid",
      motif: "gear",
      x: 4212,
      y: 112,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-44",
      layer: "far",
      motif: "vine",
      x: 4309,
      y: 153,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-45",
      layer: "mid",
      motif: "glassBerry",
      x: 4406,
      y: 194,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-46",
      layer: "near",
      motif: "cloud",
      x: 4503,
      y: 235,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-47",
      layer: "mid",
      motif: "windmill",
      x: 4600,
      y: 276,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-48",
      layer: "far",
      motif: "grass",
      x: 4697,
      y: 317,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-49",
      layer: "mid",
      motif: "gear",
      x: 4794,
      y: 358,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-50",
      layer: "far",
      motif: "vine",
      x: 4891,
      y: 399,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-51",
      layer: "near",
      motif: "glassBerry",
      x: 60,
      y: 440,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-52",
      layer: "far",
      motif: "cloud",
      x: 157,
      y: 51,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-53",
      layer: "mid",
      motif: "windmill",
      x: 254,
      y: 92,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-54",
      layer: "far",
      motif: "grass",
      x: 351,
      y: 133,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-55",
      layer: "mid",
      motif: "gear",
      x: 448,
      y: 174,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-56",
      layer: "near",
      motif: "vine",
      x: 545,
      y: 215,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-57",
      layer: "mid",
      motif: "glassBerry",
      x: 642,
      y: 256,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-58",
      layer: "far",
      motif: "cloud",
      x: 739,
      y: 297,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-59",
      layer: "mid",
      motif: "windmill",
      x: 836,
      y: 338,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-60",
      layer: "far",
      motif: "grass",
      x: 933,
      y: 379,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-61",
      layer: "near",
      motif: "gear",
      x: 1030,
      y: 420,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-62",
      layer: "far",
      motif: "vine",
      x: 1127,
      y: 461,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-63",
      layer: "mid",
      motif: "glassBerry",
      x: 1224,
      y: 72,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-64",
      layer: "far",
      motif: "cloud",
      x: 1321,
      y: 113,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-65",
      layer: "mid",
      motif: "windmill",
      x: 1418,
      y: 154,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-66",
      layer: "near",
      motif: "grass",
      x: 1515,
      y: 195,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-67",
      layer: "mid",
      motif: "gear",
      x: 1612,
      y: 236,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-68",
      layer: "far",
      motif: "vine",
      x: 1709,
      y: 277,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-69",
      layer: "mid",
      motif: "glassBerry",
      x: 1806,
      y: 318,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-70",
      layer: "far",
      motif: "cloud",
      x: 1903,
      y: 359,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-71",
      layer: "near",
      motif: "windmill",
      x: 2000,
      y: 400,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-72",
      layer: "far",
      motif: "grass",
      x: 2097,
      y: 441,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-73",
      layer: "mid",
      motif: "gear",
      x: 2194,
      y: 52,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-74",
      layer: "far",
      motif: "vine",
      x: 2291,
      y: 93,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-75",
      layer: "mid",
      motif: "glassBerry",
      x: 2388,
      y: 134,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-76",
      layer: "near",
      motif: "cloud",
      x: 2485,
      y: 175,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-77",
      layer: "mid",
      motif: "windmill",
      x: 2582,
      y: 216,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-78",
      layer: "far",
      motif: "grass",
      x: 2679,
      y: 257,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-79",
      layer: "mid",
      motif: "gear",
      x: 2776,
      y: 298,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-80",
      layer: "far",
      motif: "vine",
      x: 2873,
      y: 339,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-81",
      layer: "near",
      motif: "glassBerry",
      x: 2970,
      y: 380,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-82",
      layer: "far",
      motif: "cloud",
      x: 3067,
      y: 421,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-83",
      layer: "mid",
      motif: "windmill",
      x: 3164,
      y: 32,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-84",
      layer: "far",
      motif: "grass",
      x: 3261,
      y: 73,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-85",
      layer: "mid",
      motif: "gear",
      x: 3358,
      y: 114,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-86",
      layer: "near",
      motif: "vine",
      x: 3455,
      y: 155,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-87",
      layer: "mid",
      motif: "glassBerry",
      x: 3552,
      y: 196,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-88",
      layer: "far",
      motif: "cloud",
      x: 3649,
      y: 237,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-89",
      layer: "mid",
      motif: "windmill",
      x: 3746,
      y: 278,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-90",
      layer: "far",
      motif: "grass",
      x: 3843,
      y: 319,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-91",
      layer: "near",
      motif: "gear",
      x: 3940,
      y: 360,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-92",
      layer: "far",
      motif: "vine",
      x: 4037,
      y: 401,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-93",
      layer: "mid",
      motif: "glassBerry",
      x: 4134,
      y: 442,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-94",
      layer: "far",
      motif: "cloud",
      x: 4231,
      y: 53,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-95",
      layer: "mid",
      motif: "windmill",
      x: 4328,
      y: 94,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-96",
      layer: "near",
      motif: "grass",
      x: 4425,
      y: 135,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-97",
      layer: "mid",
      motif: "gear",
      x: 4522,
      y: 176,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-98",
      layer: "far",
      motif: "vine",
      x: 4619,
      y: 217,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-99",
      layer: "mid",
      motif: "glassBerry",
      x: 4716,
      y: 258,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-100",
      layer: "far",
      motif: "cloud",
      x: 4813,
      y: 299,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-101",
      layer: "near",
      motif: "windmill",
      x: 4910,
      y: 340,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-102",
      layer: "far",
      motif: "grass",
      x: 79,
      y: 381,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-103",
      layer: "mid",
      motif: "gear",
      x: 176,
      y: 422,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-104",
      layer: "far",
      motif: "vine",
      x: 273,
      y: 33,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-105",
      layer: "mid",
      motif: "glassBerry",
      x: 370,
      y: 74,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-106",
      layer: "near",
      motif: "cloud",
      x: 467,
      y: 115,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-107",
      layer: "mid",
      motif: "windmill",
      x: 564,
      y: 156,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-108",
      layer: "far",
      motif: "grass",
      x: 661,
      y: 197,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-109",
      layer: "mid",
      motif: "gear",
      x: 758,
      y: 238,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-110",
      layer: "far",
      motif: "vine",
      x: 855,
      y: 279,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-111",
      layer: "near",
      motif: "glassBerry",
      x: 952,
      y: 320,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-112",
      layer: "far",
      motif: "cloud",
      x: 1049,
      y: 361,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-113",
      layer: "mid",
      motif: "windmill",
      x: 1146,
      y: 402,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-114",
      layer: "far",
      motif: "grass",
      x: 1243,
      y: 443,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-115",
      layer: "mid",
      motif: "gear",
      x: 1340,
      y: 54,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-116",
      layer: "near",
      motif: "vine",
      x: 1437,
      y: 95,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-117",
      layer: "mid",
      motif: "glassBerry",
      x: 1534,
      y: 136,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-118",
      layer: "far",
      motif: "cloud",
      x: 1631,
      y: 177,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-119",
      layer: "mid",
      motif: "windmill",
      x: 1728,
      y: 218,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-120",
      layer: "far",
      motif: "grass",
      x: 1825,
      y: 259,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-121",
      layer: "near",
      motif: "gear",
      x: 1922,
      y: 300,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-122",
      layer: "far",
      motif: "vine",
      x: 2019,
      y: 341,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-123",
      layer: "mid",
      motif: "glassBerry",
      x: 2116,
      y: 382,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-124",
      layer: "far",
      motif: "cloud",
      x: 2213,
      y: 423,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-125",
      layer: "mid",
      motif: "windmill",
      x: 2310,
      y: 34,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-126",
      layer: "near",
      motif: "grass",
      x: 2407,
      y: 75,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-127",
      layer: "mid",
      motif: "gear",
      x: 2504,
      y: 116,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-128",
      layer: "far",
      motif: "vine",
      x: 2601,
      y: 157,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-129",
      layer: "mid",
      motif: "glassBerry",
      x: 2698,
      y: 198,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-130",
      layer: "far",
      motif: "cloud",
      x: 2795,
      y: 239,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-131",
      layer: "near",
      motif: "windmill",
      x: 2892,
      y: 280,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-132",
      layer: "far",
      motif: "grass",
      x: 2989,
      y: 321,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-133",
      layer: "mid",
      motif: "gear",
      x: 3086,
      y: 362,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-134",
      layer: "far",
      motif: "vine",
      x: 3183,
      y: 403,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-135",
      layer: "mid",
      motif: "glassBerry",
      x: 3280,
      y: 444,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-136",
      layer: "near",
      motif: "cloud",
      x: 3377,
      y: 55,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-137",
      layer: "mid",
      motif: "windmill",
      x: 3474,
      y: 96,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-138",
      layer: "far",
      motif: "grass",
      x: 3571,
      y: 137,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-139",
      layer: "mid",
      motif: "gear",
      x: 3668,
      y: 178,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-140",
      layer: "far",
      motif: "vine",
      x: 3765,
      y: 219,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-141",
      layer: "near",
      motif: "glassBerry",
      x: 3862,
      y: 260,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-142",
      layer: "far",
      motif: "cloud",
      x: 3959,
      y: 301,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-143",
      layer: "mid",
      motif: "windmill",
      x: 4056,
      y: 342,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-144",
      layer: "far",
      motif: "grass",
      x: 4153,
      y: 383,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-145",
      layer: "mid",
      motif: "gear",
      x: 4250,
      y: 424,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-146",
      layer: "near",
      motif: "vine",
      x: 4347,
      y: 35,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-147",
      layer: "mid",
      motif: "glassBerry",
      x: 4444,
      y: 76,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-148",
      layer: "far",
      motif: "cloud",
      x: 4541,
      y: 117,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-149",
      layer: "mid",
      motif: "windmill",
      x: 4638,
      y: 158,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-150",
      layer: "far",
      motif: "grass",
      x: 4735,
      y: 199,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-151",
      layer: "near",
      motif: "gear",
      x: 4832,
      y: 240,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-152",
      layer: "far",
      motif: "vine",
      x: 1,
      y: 281,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-153",
      layer: "mid",
      motif: "glassBerry",
      x: 98,
      y: 322,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-154",
      layer: "far",
      motif: "cloud",
      x: 195,
      y: 363,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-155",
      layer: "mid",
      motif: "windmill",
      x: 292,
      y: 404,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-156",
      layer: "near",
      motif: "grass",
      x: 389,
      y: 445,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-157",
      layer: "mid",
      motif: "gear",
      x: 486,
      y: 56,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-158",
      layer: "far",
      motif: "vine",
      x: 583,
      y: 97,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-159",
      layer: "mid",
      motif: "glassBerry",
      x: 680,
      y: 138,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-160",
      layer: "far",
      motif: "cloud",
      x: 777,
      y: 179,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-161",
      layer: "near",
      motif: "windmill",
      x: 874,
      y: 220,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-162",
      layer: "far",
      motif: "grass",
      x: 971,
      y: 261,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-163",
      layer: "mid",
      motif: "gear",
      x: 1068,
      y: 302,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-164",
      layer: "far",
      motif: "vine",
      x: 1165,
      y: 343,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-165",
      layer: "mid",
      motif: "glassBerry",
      x: 1262,
      y: 384,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-166",
      layer: "near",
      motif: "cloud",
      x: 1359,
      y: 425,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-167",
      layer: "mid",
      motif: "windmill",
      x: 1456,
      y: 36,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-168",
      layer: "far",
      motif: "grass",
      x: 1553,
      y: 77,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-169",
      layer: "mid",
      motif: "gear",
      x: 1650,
      y: 118,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-170",
      layer: "far",
      motif: "vine",
      x: 1747,
      y: 159,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-7-171",
      layer: "near",
      motif: "glassBerry",
      x: 1844,
      y: 200,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-172",
      layer: "far",
      motif: "cloud",
      x: 1941,
      y: 241,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-7-173",
      layer: "mid",
      motif: "windmill",
      x: 2038,
      y: 282,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-7-174",
      layer: "far",
      motif: "grass",
      x: 2135,
      y: 323,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-7-175",
      layer: "mid",
      motif: "gear",
      x: 2232,
      y: 364,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-7-176",
      layer: "near",
      motif: "vine",
      x: 2329,
      y: 405,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-7-177",
      layer: "mid",
      motif: "glassBerry",
      x: 2426,
      y: 446,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-7-178",
      layer: "far",
      motif: "cloud",
      x: 2523,
      y: 57,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-7-179",
      layer: "mid",
      motif: "windmill",
      x: 2620,
      y: 98,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-7-180",
      layer: "far",
      motif: "grass",
      x: 2717,
      y: 139,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-7",
    x: 4736,
    y: 448,
    nextLevelId: "level-08"
  }
};
