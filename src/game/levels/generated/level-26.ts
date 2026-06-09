import type { LevelDefinition } from "../schema";

export const LEVEL_26: LevelDefinition = {
  id: "level-26",
  index: 25,
  title: "Moonlit Gearway 05",
  chapter: "Moonlit Gearway",
  columns: 154,
  rows: 18,
  timeLimit: 208,
  palette: {
    skyTop: 1920728,
    skyBottom: 9684477,
    ground: 3560212,
    groundAccent: 15381256,
    brass: 15381256,
    leaves: 8702998,
    hazard: 16347926,
    glow: 16708551
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
    "...............................#######.......................###...........................####..........................#####............................",
    "..........................======........................=======.......................===...........................====..................................",
    ".....................#####.........................######........................#######.......................###...........................####.........",
    "................####..........................#####.........................######........................#######.......................###...............",
    "...........===...........................====..........................=====.........................======........................=======................",
    "....................................###...W.......................####........W.................#####.............W...........######......................",
    ".................................S...................................S...................................S................................................",
    "...P....................W...................................W...................................W...................................W...............G.....",
    "...............S...................................S...................................S...................................S..............................",
    "^################^...#############^#...############^##...###########^###...##########^####...#########^#####...########^######...#######^################^",
    "##################.^.###############.^.###############.^.###############.^.###############.^.###############.^.###############.^.#########################"
  ],
  enemies: [
    {
      id: "enemy-26-1",
      kind: "acorn",
      x: 420,
      y: 448,
      patrolMin: 325,
      patrolMax: 540,
      speed: 56,
      phase: 25
    },
    {
      id: "enemy-26-2",
      kind: "lantern",
      x: 750,
      y: 416,
      patrolMin: 637,
      patrolMax: 892,
      speed: 68,
      phase: 28
    },
    {
      id: "enemy-26-3",
      kind: "charger",
      x: 1080,
      y: 384,
      patrolMin: 949,
      patrolMax: 1244,
      speed: 80,
      phase: 31
    },
    {
      id: "enemy-26-4",
      kind: "spiker",
      x: 1410,
      y: 352,
      patrolMin: 1261,
      patrolMax: 1596,
      speed: 92,
      phase: 34
    },
    {
      id: "enemy-26-5",
      kind: "turret",
      x: 1740,
      y: 320,
      patrolMin: 1645,
      patrolMax: 1948,
      speed: 104,
      phase: 37
    },
    {
      id: "enemy-26-6",
      kind: "beetle",
      x: 2070,
      y: 448,
      patrolMin: 1957,
      patrolMax: 2190,
      speed: 44,
      phase: 40
    },
    {
      id: "enemy-26-7",
      kind: "acorn",
      x: 2400,
      y: 416,
      patrolMin: 2269,
      patrolMax: 2542,
      speed: 56,
      phase: 43
    },
    {
      id: "enemy-26-8",
      kind: "lantern",
      x: 2730,
      y: 384,
      patrolMin: 2581,
      patrolMax: 2894,
      speed: 68,
      phase: 46
    },
    {
      id: "enemy-26-9",
      kind: "charger",
      x: 3060,
      y: 352,
      patrolMin: 2965,
      patrolMax: 3246,
      speed: 80,
      phase: 49
    },
    {
      id: "enemy-26-10",
      kind: "spiker",
      x: 3390,
      y: 320,
      patrolMin: 3277,
      patrolMax: 3598,
      speed: 92,
      phase: 52
    },
    {
      id: "enemy-26-11",
      kind: "turret",
      x: 3720,
      y: 448,
      patrolMin: 3589,
      patrolMax: 3840,
      speed: 104,
      phase: 55
    },
    {
      id: "enemy-26-12",
      kind: "beetle",
      x: 4050,
      y: 416,
      patrolMin: 3901,
      patrolMax: 4192,
      speed: 44,
      phase: 58
    },
    {
      id: "enemy-26-13",
      kind: "acorn",
      x: 4380,
      y: 384,
      patrolMin: 4285,
      patrolMax: 4544,
      speed: 56,
      phase: 61
    }
  ],
  collectibles: [
    {
      id: "collectible-26-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 192,
      y: 151
    },
    {
      id: "collectible-26-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 262,
      y: 204
    },
    {
      id: "collectible-26-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 332,
      y: 224
    },
    {
      id: "collectible-26-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 402,
      y: 277
    },
    {
      id: "collectible-26-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 472,
      y: 330
    },
    {
      id: "collectible-26-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 542,
      y: 350
    },
    {
      id: "collectible-26-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 612,
      y: 403
    },
    {
      id: "collectible-26-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 682,
      y: 162
    },
    {
      id: "collectible-26-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 752,
      y: 182
    },
    {
      id: "collectible-26-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 822,
      y: 235
    },
    {
      id: "collectible-26-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 892,
      y: 288
    },
    {
      id: "collectible-26-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 962,
      y: 308
    },
    {
      id: "collectible-26-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1032,
      y: 361
    },
    {
      id: "collectible-26-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1102,
      y: 414
    },
    {
      id: "collectible-26-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1172,
      y: 140
    },
    {
      id: "collectible-26-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1242,
      y: 193
    },
    {
      id: "collectible-26-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1312,
      y: 246
    },
    {
      id: "collectible-26-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1382,
      y: 266
    },
    {
      id: "collectible-26-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1452,
      y: 319
    },
    {
      id: "collectible-26-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1522,
      y: 372
    },
    {
      id: "collectible-26-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1592,
      y: 392
    },
    {
      id: "collectible-26-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1662,
      y: 151
    },
    {
      id: "collectible-26-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1732,
      y: 204
    },
    {
      id: "collectible-26-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1802,
      y: 224
    },
    {
      id: "collectible-26-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1872,
      y: 277
    },
    {
      id: "collectible-26-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1942,
      y: 330
    },
    {
      id: "collectible-26-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2012,
      y: 350
    },
    {
      id: "collectible-26-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2082,
      y: 403
    },
    {
      id: "collectible-26-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2152,
      y: 162
    },
    {
      id: "collectible-26-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2222,
      y: 182
    },
    {
      id: "collectible-26-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2292,
      y: 235
    },
    {
      id: "collectible-26-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2362,
      y: 288
    },
    {
      id: "collectible-26-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2432,
      y: 308
    },
    {
      id: "collectible-26-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2502,
      y: 361
    },
    {
      id: "collectible-26-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2572,
      y: 414
    },
    {
      id: "collectible-26-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2642,
      y: 140
    },
    {
      id: "collectible-26-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2712,
      y: 193
    },
    {
      id: "collectible-26-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2782,
      y: 246
    },
    {
      id: "collectible-26-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2852,
      y: 266
    },
    {
      id: "collectible-26-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2922,
      y: 319
    },
    {
      id: "collectible-26-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2992,
      y: 372
    },
    {
      id: "collectible-26-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3062,
      y: 392
    },
    {
      id: "collectible-26-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3132,
      y: 151
    },
    {
      id: "collectible-26-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3202,
      y: 204
    },
    {
      id: "collectible-26-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3272,
      y: 224
    },
    {
      id: "collectible-26-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3342,
      y: 277
    },
    {
      id: "collectible-26-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3412,
      y: 330
    },
    {
      id: "collectible-26-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3482,
      y: 350
    },
    {
      id: "collectible-26-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3552,
      y: 403
    },
    {
      id: "collectible-26-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3622,
      y: 162
    },
    {
      id: "collectible-26-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3692,
      y: 182
    },
    {
      id: "collectible-26-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3762,
      y: 235
    },
    {
      id: "collectible-26-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3832,
      y: 288
    },
    {
      id: "collectible-26-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3902,
      y: 308
    },
    {
      id: "collectible-26-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3972,
      y: 361
    },
    {
      id: "collectible-26-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4042,
      y: 414
    },
    {
      id: "collectible-26-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4112,
      y: 140
    },
    {
      id: "collectible-26-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4182,
      y: 193
    },
    {
      id: "collectible-26-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4252,
      y: 246
    },
    {
      id: "collectible-26-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4322,
      y: 266
    },
    {
      id: "collectible-26-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4392,
      y: 319
    },
    {
      id: "collectible-26-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4462,
      y: 372
    },
    {
      id: "collectible-26-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4532,
      y: 392
    },
    {
      id: "collectible-26-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4602,
      y: 151
    },
    {
      id: "collectible-26-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4672,
      y: 204
    },
    {
      id: "collectible-26-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4742,
      y: 224
    },
    {
      id: "collectible-26-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4812,
      y: 277
    },
    {
      id: "collectible-26-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4882,
      y: 330
    },
    {
      id: "collectible-26-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4952,
      y: 350
    },
    {
      id: "collectible-26-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5022,
      y: 403
    },
    {
      id: "collectible-26-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5092,
      y: 162
    },
    {
      id: "collectible-26-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5162,
      y: 182
    },
    {
      id: "collectible-26-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5232,
      y: 235
    },
    {
      id: "collectible-26-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5302,
      y: 288
    },
    {
      id: "collectible-26-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5372,
      y: 308
    },
    {
      id: "collectible-26-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5442,
      y: 361
    },
    {
      id: "collectible-26-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5512,
      y: 414
    },
    {
      id: "collectible-26-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5582,
      y: 140
    },
    {
      id: "collectible-26-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5652,
      y: 193
    },
    {
      id: "collectible-26-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5722,
      y: 246
    },
    {
      id: "collectible-26-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5792,
      y: 266
    },
    {
      id: "collectible-26-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5862,
      y: 319
    },
    {
      id: "collectible-26-83",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5932,
      y: 372
    },
    {
      id: "collectible-26-84",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6002,
      y: 392
    },
    {
      id: "collectible-26-85",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6072,
      y: 151
    },
    {
      id: "collectible-26-86",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 6142,
      y: 204
    },
    {
      id: "collectible-26-87",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6212,
      y: 224
    },
    {
      id: "collectible-26-88",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6282,
      y: 277
    },
    {
      id: "collectible-26-89",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6352,
      y: 330
    },
    {
      id: "collectible-26-90",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6422,
      y: 350
    }
  ],
  powerups: [
    {
      id: "powerup-26-1",
      kind: "springBoots",
      durationMs: 4800,
      x: 530,
      y: 130
    },
    {
      id: "powerup-26-2",
      kind: "starburst",
      durationMs: 5700,
      x: 1360,
      y: 182
    },
    {
      id: "powerup-26-3",
      kind: "gliderLeaf",
      durationMs: 6600,
      x: 2190,
      y: 234
    },
    {
      id: "powerup-26-4",
      kind: "shield",
      durationMs: 7500,
      x: 3020,
      y: 286
    },
    {
      id: "powerup-26-5",
      kind: "springBoots",
      durationMs: 4800,
      x: 3850,
      y: 338
    },
    {
      id: "powerup-26-6",
      kind: "starburst",
      durationMs: 5700,
      x: 4680,
      y: 130
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-26-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 2.5
    },
    {
      id: "moving-platform-26-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 3.2
    },
    {
      id: "moving-platform-26-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 3.9
    },
    {
      id: "moving-platform-26-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 4.6
    },
    {
      id: "moving-platform-26-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 5.3
    },
    {
      id: "moving-platform-26-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 6
    },
    {
      id: "moving-platform-26-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 6.699999999999999
    }
  ],
  hazards: [
    {
      id: "hazard-26-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 25
    },
    {
      id: "hazard-26-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 26
    },
    {
      id: "hazard-26-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 27
    },
    {
      id: "hazard-26-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 28
    },
    {
      id: "hazard-26-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 29
    },
    {
      id: "hazard-26-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 30
    },
    {
      id: "hazard-26-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 31
    },
    {
      id: "hazard-26-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 32
    },
    {
      id: "hazard-26-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 33
    },
    {
      id: "hazard-26-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 34
    },
    {
      id: "hazard-26-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 35
    },
    {
      id: "hazard-26-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 36
    },
    {
      id: "hazard-26-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 37
    },
    {
      id: "hazard-26-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 38
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-26-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-26-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-26-1",
      x: 674,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-26-2",
      x: 1444,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-26-3",
      x: 2214,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-26-4",
      x: 2984,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-26-5",
      x: 3754,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-26-6",
      x: 4524,
      y: 384,
      power: 1.46
    }
  ],
  windZones: [
    {
      id: "wind-26-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-26-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-26-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-26-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    }
  ],
  decorations: [
    {
      id: "decor-26-1",
      layer: "near",
      motif: "vine",
      x: 575,
      y: 357,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-2",
      layer: "far",
      motif: "glassBerry",
      x: 672,
      y: 398,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-3",
      layer: "mid",
      motif: "cloud",
      x: 769,
      y: 439,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-4",
      layer: "far",
      motif: "windmill",
      x: 866,
      y: 50,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-5",
      layer: "mid",
      motif: "grass",
      x: 963,
      y: 91,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-6",
      layer: "near",
      motif: "gear",
      x: 1060,
      y: 132,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-7",
      layer: "mid",
      motif: "vine",
      x: 1157,
      y: 173,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-8",
      layer: "far",
      motif: "glassBerry",
      x: 1254,
      y: 214,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-9",
      layer: "mid",
      motif: "cloud",
      x: 1351,
      y: 255,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-10",
      layer: "far",
      motif: "windmill",
      x: 1448,
      y: 296,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-11",
      layer: "near",
      motif: "grass",
      x: 1545,
      y: 337,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-12",
      layer: "far",
      motif: "gear",
      x: 1642,
      y: 378,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-13",
      layer: "mid",
      motif: "vine",
      x: 1739,
      y: 419,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-14",
      layer: "far",
      motif: "glassBerry",
      x: 1836,
      y: 460,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-15",
      layer: "mid",
      motif: "cloud",
      x: 1933,
      y: 71,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-16",
      layer: "near",
      motif: "windmill",
      x: 2030,
      y: 112,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-17",
      layer: "mid",
      motif: "grass",
      x: 2127,
      y: 153,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-18",
      layer: "far",
      motif: "gear",
      x: 2224,
      y: 194,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-19",
      layer: "mid",
      motif: "vine",
      x: 2321,
      y: 235,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-20",
      layer: "far",
      motif: "glassBerry",
      x: 2418,
      y: 276,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-21",
      layer: "near",
      motif: "cloud",
      x: 2515,
      y: 317,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-22",
      layer: "far",
      motif: "windmill",
      x: 2612,
      y: 358,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-23",
      layer: "mid",
      motif: "grass",
      x: 2709,
      y: 399,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-24",
      layer: "far",
      motif: "gear",
      x: 2806,
      y: 440,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-25",
      layer: "mid",
      motif: "vine",
      x: 2903,
      y: 51,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-26",
      layer: "near",
      motif: "glassBerry",
      x: 3000,
      y: 92,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-27",
      layer: "mid",
      motif: "cloud",
      x: 3097,
      y: 133,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-28",
      layer: "far",
      motif: "windmill",
      x: 3194,
      y: 174,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-29",
      layer: "mid",
      motif: "grass",
      x: 3291,
      y: 215,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-30",
      layer: "far",
      motif: "gear",
      x: 3388,
      y: 256,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-31",
      layer: "near",
      motif: "vine",
      x: 3485,
      y: 297,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-32",
      layer: "far",
      motif: "glassBerry",
      x: 3582,
      y: 338,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-33",
      layer: "mid",
      motif: "cloud",
      x: 3679,
      y: 379,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-34",
      layer: "far",
      motif: "windmill",
      x: 3776,
      y: 420,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-35",
      layer: "mid",
      motif: "grass",
      x: 3873,
      y: 461,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-36",
      layer: "near",
      motif: "gear",
      x: 3970,
      y: 72,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-37",
      layer: "mid",
      motif: "vine",
      x: 4067,
      y: 113,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-38",
      layer: "far",
      motif: "glassBerry",
      x: 4164,
      y: 154,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-39",
      layer: "mid",
      motif: "cloud",
      x: 4261,
      y: 195,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-40",
      layer: "far",
      motif: "windmill",
      x: 4358,
      y: 236,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-41",
      layer: "near",
      motif: "grass",
      x: 4455,
      y: 277,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-42",
      layer: "far",
      motif: "gear",
      x: 4552,
      y: 318,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-43",
      layer: "mid",
      motif: "vine",
      x: 4649,
      y: 359,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-44",
      layer: "far",
      motif: "glassBerry",
      x: 4746,
      y: 400,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-45",
      layer: "mid",
      motif: "cloud",
      x: 4843,
      y: 441,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-46",
      layer: "near",
      motif: "windmill",
      x: 12,
      y: 52,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-47",
      layer: "mid",
      motif: "grass",
      x: 109,
      y: 93,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-48",
      layer: "far",
      motif: "gear",
      x: 206,
      y: 134,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-49",
      layer: "mid",
      motif: "vine",
      x: 303,
      y: 175,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-50",
      layer: "far",
      motif: "glassBerry",
      x: 400,
      y: 216,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-51",
      layer: "near",
      motif: "cloud",
      x: 497,
      y: 257,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-52",
      layer: "far",
      motif: "windmill",
      x: 594,
      y: 298,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-53",
      layer: "mid",
      motif: "grass",
      x: 691,
      y: 339,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-54",
      layer: "far",
      motif: "gear",
      x: 788,
      y: 380,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-55",
      layer: "mid",
      motif: "vine",
      x: 885,
      y: 421,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-56",
      layer: "near",
      motif: "glassBerry",
      x: 982,
      y: 32,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-57",
      layer: "mid",
      motif: "cloud",
      x: 1079,
      y: 73,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-58",
      layer: "far",
      motif: "windmill",
      x: 1176,
      y: 114,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-59",
      layer: "mid",
      motif: "grass",
      x: 1273,
      y: 155,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-60",
      layer: "far",
      motif: "gear",
      x: 1370,
      y: 196,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-61",
      layer: "near",
      motif: "vine",
      x: 1467,
      y: 237,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-62",
      layer: "far",
      motif: "glassBerry",
      x: 1564,
      y: 278,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-63",
      layer: "mid",
      motif: "cloud",
      x: 1661,
      y: 319,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-64",
      layer: "far",
      motif: "windmill",
      x: 1758,
      y: 360,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-65",
      layer: "mid",
      motif: "grass",
      x: 1855,
      y: 401,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-66",
      layer: "near",
      motif: "gear",
      x: 1952,
      y: 442,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-67",
      layer: "mid",
      motif: "vine",
      x: 2049,
      y: 53,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-68",
      layer: "far",
      motif: "glassBerry",
      x: 2146,
      y: 94,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-69",
      layer: "mid",
      motif: "cloud",
      x: 2243,
      y: 135,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-70",
      layer: "far",
      motif: "windmill",
      x: 2340,
      y: 176,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-71",
      layer: "near",
      motif: "grass",
      x: 2437,
      y: 217,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-72",
      layer: "far",
      motif: "gear",
      x: 2534,
      y: 258,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-73",
      layer: "mid",
      motif: "vine",
      x: 2631,
      y: 299,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-74",
      layer: "far",
      motif: "glassBerry",
      x: 2728,
      y: 340,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-75",
      layer: "mid",
      motif: "cloud",
      x: 2825,
      y: 381,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-76",
      layer: "near",
      motif: "windmill",
      x: 2922,
      y: 422,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-77",
      layer: "mid",
      motif: "grass",
      x: 3019,
      y: 33,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-78",
      layer: "far",
      motif: "gear",
      x: 3116,
      y: 74,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-79",
      layer: "mid",
      motif: "vine",
      x: 3213,
      y: 115,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-80",
      layer: "far",
      motif: "glassBerry",
      x: 3310,
      y: 156,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-81",
      layer: "near",
      motif: "cloud",
      x: 3407,
      y: 197,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-82",
      layer: "far",
      motif: "windmill",
      x: 3504,
      y: 238,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-83",
      layer: "mid",
      motif: "grass",
      x: 3601,
      y: 279,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-84",
      layer: "far",
      motif: "gear",
      x: 3698,
      y: 320,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-85",
      layer: "mid",
      motif: "vine",
      x: 3795,
      y: 361,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-86",
      layer: "near",
      motif: "glassBerry",
      x: 3892,
      y: 402,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-87",
      layer: "mid",
      motif: "cloud",
      x: 3989,
      y: 443,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-88",
      layer: "far",
      motif: "windmill",
      x: 4086,
      y: 54,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-89",
      layer: "mid",
      motif: "grass",
      x: 4183,
      y: 95,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-90",
      layer: "far",
      motif: "gear",
      x: 4280,
      y: 136,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-91",
      layer: "near",
      motif: "vine",
      x: 4377,
      y: 177,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-92",
      layer: "far",
      motif: "glassBerry",
      x: 4474,
      y: 218,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-93",
      layer: "mid",
      motif: "cloud",
      x: 4571,
      y: 259,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-94",
      layer: "far",
      motif: "windmill",
      x: 4668,
      y: 300,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-95",
      layer: "mid",
      motif: "grass",
      x: 4765,
      y: 341,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-96",
      layer: "near",
      motif: "gear",
      x: 4862,
      y: 382,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-97",
      layer: "mid",
      motif: "vine",
      x: 31,
      y: 423,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-98",
      layer: "far",
      motif: "glassBerry",
      x: 128,
      y: 34,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-99",
      layer: "mid",
      motif: "cloud",
      x: 225,
      y: 75,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-100",
      layer: "far",
      motif: "windmill",
      x: 322,
      y: 116,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-101",
      layer: "near",
      motif: "grass",
      x: 419,
      y: 157,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-102",
      layer: "far",
      motif: "gear",
      x: 516,
      y: 198,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-103",
      layer: "mid",
      motif: "vine",
      x: 613,
      y: 239,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-104",
      layer: "far",
      motif: "glassBerry",
      x: 710,
      y: 280,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-105",
      layer: "mid",
      motif: "cloud",
      x: 807,
      y: 321,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-106",
      layer: "near",
      motif: "windmill",
      x: 904,
      y: 362,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-107",
      layer: "mid",
      motif: "grass",
      x: 1001,
      y: 403,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-108",
      layer: "far",
      motif: "gear",
      x: 1098,
      y: 444,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-109",
      layer: "mid",
      motif: "vine",
      x: 1195,
      y: 55,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-110",
      layer: "far",
      motif: "glassBerry",
      x: 1292,
      y: 96,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-111",
      layer: "near",
      motif: "cloud",
      x: 1389,
      y: 137,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-112",
      layer: "far",
      motif: "windmill",
      x: 1486,
      y: 178,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-113",
      layer: "mid",
      motif: "grass",
      x: 1583,
      y: 219,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-114",
      layer: "far",
      motif: "gear",
      x: 1680,
      y: 260,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-115",
      layer: "mid",
      motif: "vine",
      x: 1777,
      y: 301,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-116",
      layer: "near",
      motif: "glassBerry",
      x: 1874,
      y: 342,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-117",
      layer: "mid",
      motif: "cloud",
      x: 1971,
      y: 383,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-118",
      layer: "far",
      motif: "windmill",
      x: 2068,
      y: 424,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-119",
      layer: "mid",
      motif: "grass",
      x: 2165,
      y: 35,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-120",
      layer: "far",
      motif: "gear",
      x: 2262,
      y: 76,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-121",
      layer: "near",
      motif: "vine",
      x: 2359,
      y: 117,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-122",
      layer: "far",
      motif: "glassBerry",
      x: 2456,
      y: 158,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-123",
      layer: "mid",
      motif: "cloud",
      x: 2553,
      y: 199,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-124",
      layer: "far",
      motif: "windmill",
      x: 2650,
      y: 240,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-125",
      layer: "mid",
      motif: "grass",
      x: 2747,
      y: 281,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-126",
      layer: "near",
      motif: "gear",
      x: 2844,
      y: 322,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-127",
      layer: "mid",
      motif: "vine",
      x: 2941,
      y: 363,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-128",
      layer: "far",
      motif: "glassBerry",
      x: 3038,
      y: 404,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-129",
      layer: "mid",
      motif: "cloud",
      x: 3135,
      y: 445,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-130",
      layer: "far",
      motif: "windmill",
      x: 3232,
      y: 56,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-131",
      layer: "near",
      motif: "grass",
      x: 3329,
      y: 97,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-132",
      layer: "far",
      motif: "gear",
      x: 3426,
      y: 138,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-133",
      layer: "mid",
      motif: "vine",
      x: 3523,
      y: 179,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-134",
      layer: "far",
      motif: "glassBerry",
      x: 3620,
      y: 220,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-135",
      layer: "mid",
      motif: "cloud",
      x: 3717,
      y: 261,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-136",
      layer: "near",
      motif: "windmill",
      x: 3814,
      y: 302,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-137",
      layer: "mid",
      motif: "grass",
      x: 3911,
      y: 343,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-138",
      layer: "far",
      motif: "gear",
      x: 4008,
      y: 384,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-139",
      layer: "mid",
      motif: "vine",
      x: 4105,
      y: 425,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-140",
      layer: "far",
      motif: "glassBerry",
      x: 4202,
      y: 36,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-141",
      layer: "near",
      motif: "cloud",
      x: 4299,
      y: 77,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-142",
      layer: "far",
      motif: "windmill",
      x: 4396,
      y: 118,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-143",
      layer: "mid",
      motif: "grass",
      x: 4493,
      y: 159,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-144",
      layer: "far",
      motif: "gear",
      x: 4590,
      y: 200,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-145",
      layer: "mid",
      motif: "vine",
      x: 4687,
      y: 241,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-146",
      layer: "near",
      motif: "glassBerry",
      x: 4784,
      y: 282,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-147",
      layer: "mid",
      motif: "cloud",
      x: 4881,
      y: 323,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-148",
      layer: "far",
      motif: "windmill",
      x: 50,
      y: 364,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-149",
      layer: "mid",
      motif: "grass",
      x: 147,
      y: 405,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-150",
      layer: "far",
      motif: "gear",
      x: 244,
      y: 446,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-151",
      layer: "near",
      motif: "vine",
      x: 341,
      y: 57,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-152",
      layer: "far",
      motif: "glassBerry",
      x: 438,
      y: 98,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-153",
      layer: "mid",
      motif: "cloud",
      x: 535,
      y: 139,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-154",
      layer: "far",
      motif: "windmill",
      x: 632,
      y: 180,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-155",
      layer: "mid",
      motif: "grass",
      x: 729,
      y: 221,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-156",
      layer: "near",
      motif: "gear",
      x: 826,
      y: 262,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-157",
      layer: "mid",
      motif: "vine",
      x: 923,
      y: 303,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-158",
      layer: "far",
      motif: "glassBerry",
      x: 1020,
      y: 344,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-159",
      layer: "mid",
      motif: "cloud",
      x: 1117,
      y: 385,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-160",
      layer: "far",
      motif: "windmill",
      x: 1214,
      y: 426,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-161",
      layer: "near",
      motif: "grass",
      x: 1311,
      y: 37,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-162",
      layer: "far",
      motif: "gear",
      x: 1408,
      y: 78,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-163",
      layer: "mid",
      motif: "vine",
      x: 1505,
      y: 119,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-164",
      layer: "far",
      motif: "glassBerry",
      x: 1602,
      y: 160,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-165",
      layer: "mid",
      motif: "cloud",
      x: 1699,
      y: 201,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-166",
      layer: "near",
      motif: "windmill",
      x: 1796,
      y: 242,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-167",
      layer: "mid",
      motif: "grass",
      x: 1893,
      y: 283,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-168",
      layer: "far",
      motif: "gear",
      x: 1990,
      y: 324,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-169",
      layer: "mid",
      motif: "vine",
      x: 2087,
      y: 365,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-170",
      layer: "far",
      motif: "glassBerry",
      x: 2184,
      y: 406,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-26-171",
      layer: "near",
      motif: "cloud",
      x: 2281,
      y: 447,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-172",
      layer: "far",
      motif: "windmill",
      x: 2378,
      y: 58,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-26-173",
      layer: "mid",
      motif: "grass",
      x: 2475,
      y: 99,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-26-174",
      layer: "far",
      motif: "gear",
      x: 2572,
      y: 140,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-26-175",
      layer: "mid",
      motif: "vine",
      x: 2669,
      y: 181,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-26-176",
      layer: "near",
      motif: "glassBerry",
      x: 2766,
      y: 222,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-26-177",
      layer: "mid",
      motif: "cloud",
      x: 2863,
      y: 263,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-26-178",
      layer: "far",
      motif: "windmill",
      x: 2960,
      y: 304,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-26-179",
      layer: "mid",
      motif: "grass",
      x: 3057,
      y: 345,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-26-180",
      layer: "far",
      motif: "gear",
      x: 3154,
      y: 386,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-26",
    x: 4736,
    y: 448,
    nextLevelId: "level-27"
  }
};
