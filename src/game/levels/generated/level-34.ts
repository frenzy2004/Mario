import type { LevelDefinition } from "../schema";

export const LEVEL_34: LevelDefinition = {
  id: "level-34",
  index: 33,
  title: "Aurora Conservatory 06",
  chapter: "Aurora Conservatory",
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
    ".....................###...........................####..........................#####.........................######........................#####........",
    "................#######.......................###...........................####..........................#####.........................######............",
    "...........======........................=======.......................===...........................====..........................=====..................",
    "....................................######........................#######.......................###...........................####........................",
    "...............................#####.........................######........................#######.......................###..............................",
    "..........................====..............W...........=====...................W.....======........................W======...............................",
    "...................................S...................................S...................................S..............................................",
    "...P......................W...................................W...................................W...................................W.............G.....",
    ".................S...................................S...................................S...................................S............................",
    "^################^..#############..#############..#^###########..###^#########..#####^#######..#######^#####..#########^###..###########^################^",
    "##################.^#############^.#############.^#############^.#############.^#############^.#############.^#############^.#############################"
  ],
  enemies: [
    {
      id: "enemy-34-1",
      kind: "charger",
      x: 504,
      y: 448,
      patrolMin: 409,
      patrolMax: 624,
      speed: 80,
      phase: 33
    },
    {
      id: "enemy-34-2",
      kind: "spiker",
      x: 834,
      y: 416,
      patrolMin: 721,
      patrolMax: 976,
      speed: 92,
      phase: 36
    },
    {
      id: "enemy-34-3",
      kind: "turret",
      x: 1164,
      y: 384,
      patrolMin: 1033,
      patrolMax: 1328,
      speed: 104,
      phase: 39
    },
    {
      id: "enemy-34-4",
      kind: "beetle",
      x: 1494,
      y: 352,
      patrolMin: 1345,
      patrolMax: 1680,
      speed: 44,
      phase: 42
    },
    {
      id: "enemy-34-5",
      kind: "acorn",
      x: 1824,
      y: 320,
      patrolMin: 1729,
      patrolMax: 2032,
      speed: 56,
      phase: 45
    },
    {
      id: "enemy-34-6",
      kind: "lantern",
      x: 2154,
      y: 448,
      patrolMin: 2041,
      patrolMax: 2274,
      speed: 68,
      phase: 48
    },
    {
      id: "enemy-34-7",
      kind: "charger",
      x: 2484,
      y: 416,
      patrolMin: 2353,
      patrolMax: 2626,
      speed: 80,
      phase: 51
    },
    {
      id: "enemy-34-8",
      kind: "spiker",
      x: 2814,
      y: 384,
      patrolMin: 2665,
      patrolMax: 2978,
      speed: 92,
      phase: 54
    },
    {
      id: "enemy-34-9",
      kind: "turret",
      x: 3144,
      y: 352,
      patrolMin: 3049,
      patrolMax: 3330,
      speed: 104,
      phase: 57
    },
    {
      id: "enemy-34-10",
      kind: "beetle",
      x: 3474,
      y: 320,
      patrolMin: 3361,
      patrolMax: 3682,
      speed: 44,
      phase: 60
    },
    {
      id: "enemy-34-11",
      kind: "acorn",
      x: 3804,
      y: 448,
      patrolMin: 3673,
      patrolMax: 3924,
      speed: 56,
      phase: 63
    },
    {
      id: "enemy-34-12",
      kind: "lantern",
      x: 4134,
      y: 416,
      patrolMin: 3985,
      patrolMax: 4276,
      speed: 68,
      phase: 66
    },
    {
      id: "enemy-34-13",
      kind: "charger",
      x: 4464,
      y: 384,
      patrolMin: 4369,
      patrolMax: 4628,
      speed: 80,
      phase: 69
    }
  ],
  collectibles: [
    {
      id: "collectible-34-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 192,
      y: 140
    },
    {
      id: "collectible-34-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 262,
      y: 193
    },
    {
      id: "collectible-34-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 332,
      y: 246
    },
    {
      id: "collectible-34-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 402,
      y: 266
    },
    {
      id: "collectible-34-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 472,
      y: 319
    },
    {
      id: "collectible-34-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 542,
      y: 372
    },
    {
      id: "collectible-34-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 612,
      y: 392
    },
    {
      id: "collectible-34-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 682,
      y: 151
    },
    {
      id: "collectible-34-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 752,
      y: 204
    },
    {
      id: "collectible-34-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 822,
      y: 224
    },
    {
      id: "collectible-34-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 892,
      y: 277
    },
    {
      id: "collectible-34-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 962,
      y: 330
    },
    {
      id: "collectible-34-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1032,
      y: 350
    },
    {
      id: "collectible-34-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1102,
      y: 403
    },
    {
      id: "collectible-34-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1172,
      y: 162
    },
    {
      id: "collectible-34-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1242,
      y: 182
    },
    {
      id: "collectible-34-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1312,
      y: 235
    },
    {
      id: "collectible-34-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1382,
      y: 288
    },
    {
      id: "collectible-34-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1452,
      y: 308
    },
    {
      id: "collectible-34-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1522,
      y: 361
    },
    {
      id: "collectible-34-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1592,
      y: 414
    },
    {
      id: "collectible-34-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1662,
      y: 140
    },
    {
      id: "collectible-34-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1732,
      y: 193
    },
    {
      id: "collectible-34-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1802,
      y: 246
    },
    {
      id: "collectible-34-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1872,
      y: 266
    },
    {
      id: "collectible-34-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1942,
      y: 319
    },
    {
      id: "collectible-34-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2012,
      y: 372
    },
    {
      id: "collectible-34-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2082,
      y: 392
    },
    {
      id: "collectible-34-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2152,
      y: 151
    },
    {
      id: "collectible-34-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2222,
      y: 204
    },
    {
      id: "collectible-34-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2292,
      y: 224
    },
    {
      id: "collectible-34-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2362,
      y: 277
    },
    {
      id: "collectible-34-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2432,
      y: 330
    },
    {
      id: "collectible-34-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2502,
      y: 350
    },
    {
      id: "collectible-34-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2572,
      y: 403
    },
    {
      id: "collectible-34-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2642,
      y: 162
    },
    {
      id: "collectible-34-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2712,
      y: 182
    },
    {
      id: "collectible-34-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2782,
      y: 235
    },
    {
      id: "collectible-34-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2852,
      y: 288
    },
    {
      id: "collectible-34-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2922,
      y: 308
    },
    {
      id: "collectible-34-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2992,
      y: 361
    },
    {
      id: "collectible-34-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3062,
      y: 414
    },
    {
      id: "collectible-34-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3132,
      y: 140
    },
    {
      id: "collectible-34-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3202,
      y: 193
    },
    {
      id: "collectible-34-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3272,
      y: 246
    },
    {
      id: "collectible-34-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3342,
      y: 266
    },
    {
      id: "collectible-34-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3412,
      y: 319
    },
    {
      id: "collectible-34-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3482,
      y: 372
    },
    {
      id: "collectible-34-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3552,
      y: 392
    },
    {
      id: "collectible-34-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3622,
      y: 151
    },
    {
      id: "collectible-34-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3692,
      y: 204
    },
    {
      id: "collectible-34-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3762,
      y: 224
    },
    {
      id: "collectible-34-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3832,
      y: 277
    },
    {
      id: "collectible-34-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3902,
      y: 330
    },
    {
      id: "collectible-34-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3972,
      y: 350
    },
    {
      id: "collectible-34-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4042,
      y: 403
    },
    {
      id: "collectible-34-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4112,
      y: 162
    },
    {
      id: "collectible-34-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4182,
      y: 182
    },
    {
      id: "collectible-34-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4252,
      y: 235
    },
    {
      id: "collectible-34-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4322,
      y: 288
    },
    {
      id: "collectible-34-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4392,
      y: 308
    },
    {
      id: "collectible-34-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4462,
      y: 361
    },
    {
      id: "collectible-34-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4532,
      y: 414
    },
    {
      id: "collectible-34-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4602,
      y: 140
    },
    {
      id: "collectible-34-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4672,
      y: 193
    },
    {
      id: "collectible-34-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4742,
      y: 246
    },
    {
      id: "collectible-34-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4812,
      y: 266
    },
    {
      id: "collectible-34-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4882,
      y: 319
    },
    {
      id: "collectible-34-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4952,
      y: 372
    },
    {
      id: "collectible-34-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5022,
      y: 392
    },
    {
      id: "collectible-34-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5092,
      y: 151
    },
    {
      id: "collectible-34-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5162,
      y: 204
    },
    {
      id: "collectible-34-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5232,
      y: 224
    },
    {
      id: "collectible-34-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5302,
      y: 277
    },
    {
      id: "collectible-34-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5372,
      y: 330
    },
    {
      id: "collectible-34-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5442,
      y: 350
    },
    {
      id: "collectible-34-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5512,
      y: 403
    },
    {
      id: "collectible-34-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5582,
      y: 162
    },
    {
      id: "collectible-34-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5652,
      y: 182
    },
    {
      id: "collectible-34-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5722,
      y: 235
    },
    {
      id: "collectible-34-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5792,
      y: 288
    },
    {
      id: "collectible-34-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5862,
      y: 308
    },
    {
      id: "collectible-34-83",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5932,
      y: 361
    },
    {
      id: "collectible-34-84",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6002,
      y: 414
    },
    {
      id: "collectible-34-85",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6072,
      y: 140
    },
    {
      id: "collectible-34-86",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 6142,
      y: 193
    }
  ],
  powerups: [
    {
      id: "powerup-34-1",
      kind: "springBoots",
      durationMs: 4800,
      x: 590,
      y: 130
    },
    {
      id: "powerup-34-2",
      kind: "starburst",
      durationMs: 5700,
      x: 1420,
      y: 182
    },
    {
      id: "powerup-34-3",
      kind: "gliderLeaf",
      durationMs: 6600,
      x: 2250,
      y: 234
    },
    {
      id: "powerup-34-4",
      kind: "shield",
      durationMs: 7500,
      x: 3080,
      y: 286
    },
    {
      id: "powerup-34-5",
      kind: "springBoots",
      durationMs: 4800,
      x: 3910,
      y: 338
    },
    {
      id: "powerup-34-6",
      kind: "starburst",
      durationMs: 5700,
      x: 4740,
      y: 130
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-34-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 3.3000000000000003
    },
    {
      id: "moving-platform-34-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 4
    },
    {
      id: "moving-platform-34-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 4.7
    },
    {
      id: "moving-platform-34-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 5.4
    },
    {
      id: "moving-platform-34-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 6.1
    },
    {
      id: "moving-platform-34-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 6.800000000000001
    },
    {
      id: "moving-platform-34-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 7.5
    },
    {
      id: "moving-platform-34-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 8.2
    },
    {
      id: "moving-platform-34-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 8.9
    },
    {
      id: "moving-platform-34-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 9.6
    }
  ],
  hazards: [
    {
      id: "hazard-34-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 33
    },
    {
      id: "hazard-34-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 34
    },
    {
      id: "hazard-34-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 35
    },
    {
      id: "hazard-34-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 36
    },
    {
      id: "hazard-34-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 37
    },
    {
      id: "hazard-34-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 38
    },
    {
      id: "hazard-34-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 39
    },
    {
      id: "hazard-34-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 40
    },
    {
      id: "hazard-34-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 41
    },
    {
      id: "hazard-34-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 42
    },
    {
      id: "hazard-34-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 43
    },
    {
      id: "hazard-34-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 44
    },
    {
      id: "hazard-34-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 45
    },
    {
      id: "hazard-34-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 46
    },
    {
      id: "hazard-34-15",
      kind: "thorn",
      x: 5660,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 47
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-34-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-34-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-34-1",
      x: 640,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-34-2",
      x: 1410,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-34-3",
      x: 2180,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-34-4",
      x: 2950,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-34-5",
      x: 3720,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-34-6",
      x: 4490,
      y: 384,
      power: 1.46
    }
  ],
  windZones: [
    {
      id: "wind-34-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-34-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-34-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-34-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    }
  ],
  decorations: [
    {
      id: "decor-34-1",
      layer: "near",
      motif: "cloud",
      x: 759,
      y: 461,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-2",
      layer: "far",
      motif: "windmill",
      x: 856,
      y: 72,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-3",
      layer: "mid",
      motif: "grass",
      x: 953,
      y: 113,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-4",
      layer: "far",
      motif: "gear",
      x: 1050,
      y: 154,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-5",
      layer: "mid",
      motif: "vine",
      x: 1147,
      y: 195,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-6",
      layer: "near",
      motif: "glassBerry",
      x: 1244,
      y: 236,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-7",
      layer: "mid",
      motif: "cloud",
      x: 1341,
      y: 277,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-8",
      layer: "far",
      motif: "windmill",
      x: 1438,
      y: 318,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-9",
      layer: "mid",
      motif: "grass",
      x: 1535,
      y: 359,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-10",
      layer: "far",
      motif: "gear",
      x: 1632,
      y: 400,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-11",
      layer: "near",
      motif: "vine",
      x: 1729,
      y: 441,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-12",
      layer: "far",
      motif: "glassBerry",
      x: 1826,
      y: 52,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-13",
      layer: "mid",
      motif: "cloud",
      x: 1923,
      y: 93,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-14",
      layer: "far",
      motif: "windmill",
      x: 2020,
      y: 134,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-15",
      layer: "mid",
      motif: "grass",
      x: 2117,
      y: 175,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-16",
      layer: "near",
      motif: "gear",
      x: 2214,
      y: 216,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-17",
      layer: "mid",
      motif: "vine",
      x: 2311,
      y: 257,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-18",
      layer: "far",
      motif: "glassBerry",
      x: 2408,
      y: 298,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-19",
      layer: "mid",
      motif: "cloud",
      x: 2505,
      y: 339,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-20",
      layer: "far",
      motif: "windmill",
      x: 2602,
      y: 380,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-21",
      layer: "near",
      motif: "grass",
      x: 2699,
      y: 421,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-22",
      layer: "far",
      motif: "gear",
      x: 2796,
      y: 32,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-23",
      layer: "mid",
      motif: "vine",
      x: 2893,
      y: 73,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-24",
      layer: "far",
      motif: "glassBerry",
      x: 2990,
      y: 114,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-25",
      layer: "mid",
      motif: "cloud",
      x: 3087,
      y: 155,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-26",
      layer: "near",
      motif: "windmill",
      x: 3184,
      y: 196,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-27",
      layer: "mid",
      motif: "grass",
      x: 3281,
      y: 237,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-28",
      layer: "far",
      motif: "gear",
      x: 3378,
      y: 278,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-29",
      layer: "mid",
      motif: "vine",
      x: 3475,
      y: 319,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-30",
      layer: "far",
      motif: "glassBerry",
      x: 3572,
      y: 360,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-31",
      layer: "near",
      motif: "cloud",
      x: 3669,
      y: 401,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-32",
      layer: "far",
      motif: "windmill",
      x: 3766,
      y: 442,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-33",
      layer: "mid",
      motif: "grass",
      x: 3863,
      y: 53,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-34",
      layer: "far",
      motif: "gear",
      x: 3960,
      y: 94,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-35",
      layer: "mid",
      motif: "vine",
      x: 4057,
      y: 135,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-36",
      layer: "near",
      motif: "glassBerry",
      x: 4154,
      y: 176,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-37",
      layer: "mid",
      motif: "cloud",
      x: 4251,
      y: 217,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-38",
      layer: "far",
      motif: "windmill",
      x: 4348,
      y: 258,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-39",
      layer: "mid",
      motif: "grass",
      x: 4445,
      y: 299,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-40",
      layer: "far",
      motif: "gear",
      x: 4542,
      y: 340,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-41",
      layer: "near",
      motif: "vine",
      x: 4639,
      y: 381,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-42",
      layer: "far",
      motif: "glassBerry",
      x: 4736,
      y: 422,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-43",
      layer: "mid",
      motif: "cloud",
      x: 4833,
      y: 33,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-44",
      layer: "far",
      motif: "windmill",
      x: 2,
      y: 74,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-45",
      layer: "mid",
      motif: "grass",
      x: 99,
      y: 115,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-46",
      layer: "near",
      motif: "gear",
      x: 196,
      y: 156,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-47",
      layer: "mid",
      motif: "vine",
      x: 293,
      y: 197,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-48",
      layer: "far",
      motif: "glassBerry",
      x: 390,
      y: 238,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-49",
      layer: "mid",
      motif: "cloud",
      x: 487,
      y: 279,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-50",
      layer: "far",
      motif: "windmill",
      x: 584,
      y: 320,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-51",
      layer: "near",
      motif: "grass",
      x: 681,
      y: 361,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-52",
      layer: "far",
      motif: "gear",
      x: 778,
      y: 402,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-53",
      layer: "mid",
      motif: "vine",
      x: 875,
      y: 443,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-54",
      layer: "far",
      motif: "glassBerry",
      x: 972,
      y: 54,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-55",
      layer: "mid",
      motif: "cloud",
      x: 1069,
      y: 95,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-56",
      layer: "near",
      motif: "windmill",
      x: 1166,
      y: 136,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-57",
      layer: "mid",
      motif: "grass",
      x: 1263,
      y: 177,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-58",
      layer: "far",
      motif: "gear",
      x: 1360,
      y: 218,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-59",
      layer: "mid",
      motif: "vine",
      x: 1457,
      y: 259,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-60",
      layer: "far",
      motif: "glassBerry",
      x: 1554,
      y: 300,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-61",
      layer: "near",
      motif: "cloud",
      x: 1651,
      y: 341,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-62",
      layer: "far",
      motif: "windmill",
      x: 1748,
      y: 382,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-63",
      layer: "mid",
      motif: "grass",
      x: 1845,
      y: 423,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-64",
      layer: "far",
      motif: "gear",
      x: 1942,
      y: 34,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-65",
      layer: "mid",
      motif: "vine",
      x: 2039,
      y: 75,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-66",
      layer: "near",
      motif: "glassBerry",
      x: 2136,
      y: 116,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-67",
      layer: "mid",
      motif: "cloud",
      x: 2233,
      y: 157,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-68",
      layer: "far",
      motif: "windmill",
      x: 2330,
      y: 198,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-69",
      layer: "mid",
      motif: "grass",
      x: 2427,
      y: 239,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-70",
      layer: "far",
      motif: "gear",
      x: 2524,
      y: 280,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-71",
      layer: "near",
      motif: "vine",
      x: 2621,
      y: 321,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-72",
      layer: "far",
      motif: "glassBerry",
      x: 2718,
      y: 362,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-73",
      layer: "mid",
      motif: "cloud",
      x: 2815,
      y: 403,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-74",
      layer: "far",
      motif: "windmill",
      x: 2912,
      y: 444,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-75",
      layer: "mid",
      motif: "grass",
      x: 3009,
      y: 55,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-76",
      layer: "near",
      motif: "gear",
      x: 3106,
      y: 96,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-77",
      layer: "mid",
      motif: "vine",
      x: 3203,
      y: 137,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-78",
      layer: "far",
      motif: "glassBerry",
      x: 3300,
      y: 178,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-79",
      layer: "mid",
      motif: "cloud",
      x: 3397,
      y: 219,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-80",
      layer: "far",
      motif: "windmill",
      x: 3494,
      y: 260,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-81",
      layer: "near",
      motif: "grass",
      x: 3591,
      y: 301,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-82",
      layer: "far",
      motif: "gear",
      x: 3688,
      y: 342,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-83",
      layer: "mid",
      motif: "vine",
      x: 3785,
      y: 383,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-84",
      layer: "far",
      motif: "glassBerry",
      x: 3882,
      y: 424,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-85",
      layer: "mid",
      motif: "cloud",
      x: 3979,
      y: 35,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-86",
      layer: "near",
      motif: "windmill",
      x: 4076,
      y: 76,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-87",
      layer: "mid",
      motif: "grass",
      x: 4173,
      y: 117,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-88",
      layer: "far",
      motif: "gear",
      x: 4270,
      y: 158,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-89",
      layer: "mid",
      motif: "vine",
      x: 4367,
      y: 199,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-90",
      layer: "far",
      motif: "glassBerry",
      x: 4464,
      y: 240,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-91",
      layer: "near",
      motif: "cloud",
      x: 4561,
      y: 281,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-92",
      layer: "far",
      motif: "windmill",
      x: 4658,
      y: 322,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-93",
      layer: "mid",
      motif: "grass",
      x: 4755,
      y: 363,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-94",
      layer: "far",
      motif: "gear",
      x: 4852,
      y: 404,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-95",
      layer: "mid",
      motif: "vine",
      x: 21,
      y: 445,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-96",
      layer: "near",
      motif: "glassBerry",
      x: 118,
      y: 56,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-97",
      layer: "mid",
      motif: "cloud",
      x: 215,
      y: 97,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-98",
      layer: "far",
      motif: "windmill",
      x: 312,
      y: 138,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-99",
      layer: "mid",
      motif: "grass",
      x: 409,
      y: 179,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-100",
      layer: "far",
      motif: "gear",
      x: 506,
      y: 220,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-101",
      layer: "near",
      motif: "vine",
      x: 603,
      y: 261,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-102",
      layer: "far",
      motif: "glassBerry",
      x: 700,
      y: 302,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-103",
      layer: "mid",
      motif: "cloud",
      x: 797,
      y: 343,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-104",
      layer: "far",
      motif: "windmill",
      x: 894,
      y: 384,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-105",
      layer: "mid",
      motif: "grass",
      x: 991,
      y: 425,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-106",
      layer: "near",
      motif: "gear",
      x: 1088,
      y: 36,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-107",
      layer: "mid",
      motif: "vine",
      x: 1185,
      y: 77,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-108",
      layer: "far",
      motif: "glassBerry",
      x: 1282,
      y: 118,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-109",
      layer: "mid",
      motif: "cloud",
      x: 1379,
      y: 159,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-110",
      layer: "far",
      motif: "windmill",
      x: 1476,
      y: 200,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-111",
      layer: "near",
      motif: "grass",
      x: 1573,
      y: 241,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-112",
      layer: "far",
      motif: "gear",
      x: 1670,
      y: 282,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-113",
      layer: "mid",
      motif: "vine",
      x: 1767,
      y: 323,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-114",
      layer: "far",
      motif: "glassBerry",
      x: 1864,
      y: 364,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-115",
      layer: "mid",
      motif: "cloud",
      x: 1961,
      y: 405,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-116",
      layer: "near",
      motif: "windmill",
      x: 2058,
      y: 446,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-117",
      layer: "mid",
      motif: "grass",
      x: 2155,
      y: 57,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-118",
      layer: "far",
      motif: "gear",
      x: 2252,
      y: 98,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-119",
      layer: "mid",
      motif: "vine",
      x: 2349,
      y: 139,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-120",
      layer: "far",
      motif: "glassBerry",
      x: 2446,
      y: 180,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-121",
      layer: "near",
      motif: "cloud",
      x: 2543,
      y: 221,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-122",
      layer: "far",
      motif: "windmill",
      x: 2640,
      y: 262,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-123",
      layer: "mid",
      motif: "grass",
      x: 2737,
      y: 303,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-124",
      layer: "far",
      motif: "gear",
      x: 2834,
      y: 344,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-125",
      layer: "mid",
      motif: "vine",
      x: 2931,
      y: 385,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-126",
      layer: "near",
      motif: "glassBerry",
      x: 3028,
      y: 426,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-127",
      layer: "mid",
      motif: "cloud",
      x: 3125,
      y: 37,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-128",
      layer: "far",
      motif: "windmill",
      x: 3222,
      y: 78,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-129",
      layer: "mid",
      motif: "grass",
      x: 3319,
      y: 119,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-130",
      layer: "far",
      motif: "gear",
      x: 3416,
      y: 160,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-131",
      layer: "near",
      motif: "vine",
      x: 3513,
      y: 201,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-132",
      layer: "far",
      motif: "glassBerry",
      x: 3610,
      y: 242,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-133",
      layer: "mid",
      motif: "cloud",
      x: 3707,
      y: 283,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-134",
      layer: "far",
      motif: "windmill",
      x: 3804,
      y: 324,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-135",
      layer: "mid",
      motif: "grass",
      x: 3901,
      y: 365,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-136",
      layer: "near",
      motif: "gear",
      x: 3998,
      y: 406,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-137",
      layer: "mid",
      motif: "vine",
      x: 4095,
      y: 447,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-138",
      layer: "far",
      motif: "glassBerry",
      x: 4192,
      y: 58,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-139",
      layer: "mid",
      motif: "cloud",
      x: 4289,
      y: 99,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-140",
      layer: "far",
      motif: "windmill",
      x: 4386,
      y: 140,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-141",
      layer: "near",
      motif: "grass",
      x: 4483,
      y: 181,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-142",
      layer: "far",
      motif: "gear",
      x: 4580,
      y: 222,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-143",
      layer: "mid",
      motif: "vine",
      x: 4677,
      y: 263,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-144",
      layer: "far",
      motif: "glassBerry",
      x: 4774,
      y: 304,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-145",
      layer: "mid",
      motif: "cloud",
      x: 4871,
      y: 345,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-146",
      layer: "near",
      motif: "windmill",
      x: 40,
      y: 386,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-147",
      layer: "mid",
      motif: "grass",
      x: 137,
      y: 427,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-148",
      layer: "far",
      motif: "gear",
      x: 234,
      y: 38,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-149",
      layer: "mid",
      motif: "vine",
      x: 331,
      y: 79,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-150",
      layer: "far",
      motif: "glassBerry",
      x: 428,
      y: 120,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-151",
      layer: "near",
      motif: "cloud",
      x: 525,
      y: 161,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-152",
      layer: "far",
      motif: "windmill",
      x: 622,
      y: 202,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-153",
      layer: "mid",
      motif: "grass",
      x: 719,
      y: 243,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-154",
      layer: "far",
      motif: "gear",
      x: 816,
      y: 284,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-155",
      layer: "mid",
      motif: "vine",
      x: 913,
      y: 325,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-156",
      layer: "near",
      motif: "glassBerry",
      x: 1010,
      y: 366,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-157",
      layer: "mid",
      motif: "cloud",
      x: 1107,
      y: 407,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-158",
      layer: "far",
      motif: "windmill",
      x: 1204,
      y: 448,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-159",
      layer: "mid",
      motif: "grass",
      x: 1301,
      y: 59,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-160",
      layer: "far",
      motif: "gear",
      x: 1398,
      y: 100,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-161",
      layer: "near",
      motif: "vine",
      x: 1495,
      y: 141,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-162",
      layer: "far",
      motif: "glassBerry",
      x: 1592,
      y: 182,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-163",
      layer: "mid",
      motif: "cloud",
      x: 1689,
      y: 223,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-164",
      layer: "far",
      motif: "windmill",
      x: 1786,
      y: 264,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-165",
      layer: "mid",
      motif: "grass",
      x: 1883,
      y: 305,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-166",
      layer: "near",
      motif: "gear",
      x: 1980,
      y: 346,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-167",
      layer: "mid",
      motif: "vine",
      x: 2077,
      y: 387,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-168",
      layer: "far",
      motif: "glassBerry",
      x: 2174,
      y: 428,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-169",
      layer: "mid",
      motif: "cloud",
      x: 2271,
      y: 39,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-170",
      layer: "far",
      motif: "windmill",
      x: 2368,
      y: 80,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-34-171",
      layer: "near",
      motif: "grass",
      x: 2465,
      y: 121,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-172",
      layer: "far",
      motif: "gear",
      x: 2562,
      y: 162,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-34-173",
      layer: "mid",
      motif: "vine",
      x: 2659,
      y: 203,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-34-174",
      layer: "far",
      motif: "glassBerry",
      x: 2756,
      y: 244,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-34-175",
      layer: "mid",
      motif: "cloud",
      x: 2853,
      y: 285,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-34-176",
      layer: "near",
      motif: "windmill",
      x: 2950,
      y: 326,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-34-177",
      layer: "mid",
      motif: "grass",
      x: 3047,
      y: 367,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-34-178",
      layer: "far",
      motif: "gear",
      x: 3144,
      y: 408,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-34-179",
      layer: "mid",
      motif: "vine",
      x: 3241,
      y: 449,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-34-180",
      layer: "far",
      motif: "glassBerry",
      x: 3338,
      y: 60,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-34",
    x: 4736,
    y: 448,
    nextLevelId: "level-35"
  }
};
