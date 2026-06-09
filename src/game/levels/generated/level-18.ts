import type { LevelDefinition } from "../schema";

export const LEVEL_18: LevelDefinition = {
  id: "level-18",
  index: 17,
  title: "Windmill Tangle 04",
  chapter: "Windmill Tangle",
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
    "...........=====.........................======........................=======.......................===...........................====...................",
    "....................................#####.........................######........................#######.......................###.........................",
    "...............................####..........................#####.........................######........................#######..........................",
    "..........................===...........................====..........................=====.........................======................................",
    ".....................#######.......................###...........................####..........................#####.........................#####........",
    "................######........................W######.......................###...W.......................####........W.................#####.............",
    ".....................................S...................................S...................................S............................................",
    "...P........................W...................................W...................................W...................................W...........G.....",
    "...................S...................................S...................................S...................................S..........................",
    "^################^....############..##############...#############....############..#^############...#^###########....#^##########..####^################^",
    "##################.^.^############.^##############.^.#############.^.^############.^##############.^.#############.^.^############.^######################"
  ],
  enemies: [
    {
      id: "enemy-18-1",
      kind: "turret",
      x: 476,
      y: 448,
      patrolMin: 381,
      patrolMax: 596,
      speed: 104,
      phase: 17
    },
    {
      id: "enemy-18-2",
      kind: "beetle",
      x: 806,
      y: 416,
      patrolMin: 693,
      patrolMax: 948,
      speed: 44,
      phase: 20
    },
    {
      id: "enemy-18-3",
      kind: "acorn",
      x: 1136,
      y: 384,
      patrolMin: 1005,
      patrolMax: 1300,
      speed: 56,
      phase: 23
    },
    {
      id: "enemy-18-4",
      kind: "lantern",
      x: 1466,
      y: 352,
      patrolMin: 1317,
      patrolMax: 1652,
      speed: 68,
      phase: 26
    },
    {
      id: "enemy-18-5",
      kind: "charger",
      x: 1796,
      y: 320,
      patrolMin: 1701,
      patrolMax: 2004,
      speed: 80,
      phase: 29
    },
    {
      id: "enemy-18-6",
      kind: "spiker",
      x: 2126,
      y: 448,
      patrolMin: 2013,
      patrolMax: 2246,
      speed: 92,
      phase: 32
    },
    {
      id: "enemy-18-7",
      kind: "turret",
      x: 2456,
      y: 416,
      patrolMin: 2325,
      patrolMax: 2598,
      speed: 104,
      phase: 35
    },
    {
      id: "enemy-18-8",
      kind: "beetle",
      x: 2786,
      y: 384,
      patrolMin: 2637,
      patrolMax: 2950,
      speed: 44,
      phase: 38
    },
    {
      id: "enemy-18-9",
      kind: "acorn",
      x: 3116,
      y: 352,
      patrolMin: 3021,
      patrolMax: 3302,
      speed: 56,
      phase: 41
    },
    {
      id: "enemy-18-10",
      kind: "lantern",
      x: 3446,
      y: 320,
      patrolMin: 3333,
      patrolMax: 3654,
      speed: 68,
      phase: 44
    },
    {
      id: "enemy-18-11",
      kind: "charger",
      x: 3776,
      y: 448,
      patrolMin: 3645,
      patrolMax: 3896,
      speed: 80,
      phase: 47
    },
    {
      id: "enemy-18-12",
      kind: "spiker",
      x: 4106,
      y: 416,
      patrolMin: 3957,
      patrolMax: 4248,
      speed: 92,
      phase: 50
    },
    {
      id: "enemy-18-13",
      kind: "turret",
      x: 4436,
      y: 384,
      patrolMin: 4341,
      patrolMax: 4600,
      speed: 104,
      phase: 53
    }
  ],
  collectibles: [
    {
      id: "collectible-18-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 192,
      y: 162
    },
    {
      id: "collectible-18-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 262,
      y: 182
    },
    {
      id: "collectible-18-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 332,
      y: 235
    },
    {
      id: "collectible-18-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 402,
      y: 288
    },
    {
      id: "collectible-18-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 472,
      y: 308
    },
    {
      id: "collectible-18-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 542,
      y: 361
    },
    {
      id: "collectible-18-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 612,
      y: 414
    },
    {
      id: "collectible-18-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 682,
      y: 140
    },
    {
      id: "collectible-18-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 752,
      y: 193
    },
    {
      id: "collectible-18-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 822,
      y: 246
    },
    {
      id: "collectible-18-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 892,
      y: 266
    },
    {
      id: "collectible-18-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 962,
      y: 319
    },
    {
      id: "collectible-18-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1032,
      y: 372
    },
    {
      id: "collectible-18-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1102,
      y: 392
    },
    {
      id: "collectible-18-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1172,
      y: 151
    },
    {
      id: "collectible-18-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1242,
      y: 204
    },
    {
      id: "collectible-18-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1312,
      y: 224
    },
    {
      id: "collectible-18-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1382,
      y: 277
    },
    {
      id: "collectible-18-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1452,
      y: 330
    },
    {
      id: "collectible-18-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1522,
      y: 350
    },
    {
      id: "collectible-18-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1592,
      y: 403
    },
    {
      id: "collectible-18-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1662,
      y: 162
    },
    {
      id: "collectible-18-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1732,
      y: 182
    },
    {
      id: "collectible-18-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1802,
      y: 235
    },
    {
      id: "collectible-18-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1872,
      y: 288
    },
    {
      id: "collectible-18-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1942,
      y: 308
    },
    {
      id: "collectible-18-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2012,
      y: 361
    },
    {
      id: "collectible-18-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2082,
      y: 414
    },
    {
      id: "collectible-18-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2152,
      y: 140
    },
    {
      id: "collectible-18-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2222,
      y: 193
    },
    {
      id: "collectible-18-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2292,
      y: 246
    },
    {
      id: "collectible-18-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2362,
      y: 266
    },
    {
      id: "collectible-18-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2432,
      y: 319
    },
    {
      id: "collectible-18-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2502,
      y: 372
    },
    {
      id: "collectible-18-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2572,
      y: 392
    },
    {
      id: "collectible-18-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2642,
      y: 151
    },
    {
      id: "collectible-18-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2712,
      y: 204
    },
    {
      id: "collectible-18-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2782,
      y: 224
    },
    {
      id: "collectible-18-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2852,
      y: 277
    },
    {
      id: "collectible-18-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2922,
      y: 330
    },
    {
      id: "collectible-18-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2992,
      y: 350
    },
    {
      id: "collectible-18-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3062,
      y: 403
    },
    {
      id: "collectible-18-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3132,
      y: 162
    },
    {
      id: "collectible-18-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3202,
      y: 182
    },
    {
      id: "collectible-18-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3272,
      y: 235
    },
    {
      id: "collectible-18-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3342,
      y: 288
    },
    {
      id: "collectible-18-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3412,
      y: 308
    },
    {
      id: "collectible-18-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3482,
      y: 361
    },
    {
      id: "collectible-18-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3552,
      y: 414
    },
    {
      id: "collectible-18-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3622,
      y: 140
    },
    {
      id: "collectible-18-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3692,
      y: 193
    },
    {
      id: "collectible-18-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3762,
      y: 246
    },
    {
      id: "collectible-18-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3832,
      y: 266
    },
    {
      id: "collectible-18-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3902,
      y: 319
    },
    {
      id: "collectible-18-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3972,
      y: 372
    },
    {
      id: "collectible-18-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4042,
      y: 392
    },
    {
      id: "collectible-18-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4112,
      y: 151
    },
    {
      id: "collectible-18-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4182,
      y: 204
    },
    {
      id: "collectible-18-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4252,
      y: 224
    },
    {
      id: "collectible-18-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4322,
      y: 277
    },
    {
      id: "collectible-18-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4392,
      y: 330
    },
    {
      id: "collectible-18-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4462,
      y: 350
    },
    {
      id: "collectible-18-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4532,
      y: 403
    },
    {
      id: "collectible-18-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4602,
      y: 162
    },
    {
      id: "collectible-18-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4672,
      y: 182
    },
    {
      id: "collectible-18-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4742,
      y: 235
    },
    {
      id: "collectible-18-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4812,
      y: 288
    },
    {
      id: "collectible-18-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4882,
      y: 308
    },
    {
      id: "collectible-18-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4952,
      y: 361
    },
    {
      id: "collectible-18-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5022,
      y: 414
    },
    {
      id: "collectible-18-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5092,
      y: 140
    },
    {
      id: "collectible-18-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5162,
      y: 193
    },
    {
      id: "collectible-18-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5232,
      y: 246
    },
    {
      id: "collectible-18-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5302,
      y: 266
    },
    {
      id: "collectible-18-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5372,
      y: 319
    },
    {
      id: "collectible-18-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5442,
      y: 372
    },
    {
      id: "collectible-18-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5512,
      y: 392
    },
    {
      id: "collectible-18-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5582,
      y: 151
    },
    {
      id: "collectible-18-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5652,
      y: 204
    },
    {
      id: "collectible-18-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5722,
      y: 224
    },
    {
      id: "collectible-18-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5792,
      y: 277
    },
    {
      id: "collectible-18-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5862,
      y: 330
    },
    {
      id: "collectible-18-83",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5932,
      y: 350
    },
    {
      id: "collectible-18-84",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6002,
      y: 403
    },
    {
      id: "collectible-18-85",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6072,
      y: 162
    },
    {
      id: "collectible-18-86",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 6142,
      y: 182
    },
    {
      id: "collectible-18-87",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6212,
      y: 235
    },
    {
      id: "collectible-18-88",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6282,
      y: 288
    },
    {
      id: "collectible-18-89",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6352,
      y: 308
    },
    {
      id: "collectible-18-90",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6422,
      y: 361
    },
    {
      id: "collectible-18-91",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6492,
      y: 414
    },
    {
      id: "collectible-18-92",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6562,
      y: 140
    },
    {
      id: "collectible-18-93",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6632,
      y: 193
    },
    {
      id: "collectible-18-94",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 6702,
      y: 246
    }
  ],
  powerups: [
    {
      id: "powerup-18-1",
      kind: "springBoots",
      durationMs: 4800,
      x: 650,
      y: 130
    },
    {
      id: "powerup-18-2",
      kind: "starburst",
      durationMs: 5700,
      x: 1480,
      y: 182
    },
    {
      id: "powerup-18-3",
      kind: "gliderLeaf",
      durationMs: 6600,
      x: 2310,
      y: 234
    },
    {
      id: "powerup-18-4",
      kind: "shield",
      durationMs: 7500,
      x: 3140,
      y: 286
    },
    {
      id: "powerup-18-5",
      kind: "springBoots",
      durationMs: 4800,
      x: 3970,
      y: 338
    },
    {
      id: "powerup-18-6",
      kind: "starburst",
      durationMs: 5700,
      x: 4800,
      y: 130
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-18-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 1.7000000000000002
    },
    {
      id: "moving-platform-18-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 2.4000000000000004
    },
    {
      id: "moving-platform-18-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 3.1
    },
    {
      id: "moving-platform-18-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 3.8
    },
    {
      id: "moving-platform-18-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 4.5
    },
    {
      id: "moving-platform-18-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 5.2
    },
    {
      id: "moving-platform-18-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 5.8999999999999995
    },
    {
      id: "moving-platform-18-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 6.6
    },
    {
      id: "moving-platform-18-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 7.3
    }
  ],
  hazards: [
    {
      id: "hazard-18-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 17
    },
    {
      id: "hazard-18-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 18
    },
    {
      id: "hazard-18-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 19
    },
    {
      id: "hazard-18-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 20
    },
    {
      id: "hazard-18-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 21
    },
    {
      id: "hazard-18-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 22
    },
    {
      id: "hazard-18-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 23
    },
    {
      id: "hazard-18-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 24
    },
    {
      id: "hazard-18-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 25
    },
    {
      id: "hazard-18-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 26
    },
    {
      id: "hazard-18-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 27
    },
    {
      id: "hazard-18-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 28
    },
    {
      id: "hazard-18-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 29
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-18-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-18-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-18-1",
      x: 708,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-18-2",
      x: 1478,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-18-3",
      x: 2248,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-18-4",
      x: 3018,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-18-5",
      x: 3788,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-18-6",
      x: 4558,
      y: 384,
      power: 1.46
    }
  ],
  windZones: [
    {
      id: "wind-18-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-18-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-18-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-18-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    }
  ],
  decorations: [
    {
      id: "decor-18-1",
      layer: "near",
      motif: "grass",
      x: 391,
      y: 253,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-2",
      layer: "far",
      motif: "gear",
      x: 488,
      y: 294,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-3",
      layer: "mid",
      motif: "vine",
      x: 585,
      y: 335,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-4",
      layer: "far",
      motif: "glassBerry",
      x: 682,
      y: 376,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-5",
      layer: "mid",
      motif: "cloud",
      x: 779,
      y: 417,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-6",
      layer: "near",
      motif: "windmill",
      x: 876,
      y: 458,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-7",
      layer: "mid",
      motif: "grass",
      x: 973,
      y: 69,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-8",
      layer: "far",
      motif: "gear",
      x: 1070,
      y: 110,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-9",
      layer: "mid",
      motif: "vine",
      x: 1167,
      y: 151,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-10",
      layer: "far",
      motif: "glassBerry",
      x: 1264,
      y: 192,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-11",
      layer: "near",
      motif: "cloud",
      x: 1361,
      y: 233,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-12",
      layer: "far",
      motif: "windmill",
      x: 1458,
      y: 274,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-13",
      layer: "mid",
      motif: "grass",
      x: 1555,
      y: 315,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-14",
      layer: "far",
      motif: "gear",
      x: 1652,
      y: 356,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-15",
      layer: "mid",
      motif: "vine",
      x: 1749,
      y: 397,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-16",
      layer: "near",
      motif: "glassBerry",
      x: 1846,
      y: 438,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-17",
      layer: "mid",
      motif: "cloud",
      x: 1943,
      y: 49,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-18",
      layer: "far",
      motif: "windmill",
      x: 2040,
      y: 90,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-19",
      layer: "mid",
      motif: "grass",
      x: 2137,
      y: 131,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-20",
      layer: "far",
      motif: "gear",
      x: 2234,
      y: 172,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-21",
      layer: "near",
      motif: "vine",
      x: 2331,
      y: 213,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-22",
      layer: "far",
      motif: "glassBerry",
      x: 2428,
      y: 254,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-23",
      layer: "mid",
      motif: "cloud",
      x: 2525,
      y: 295,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-24",
      layer: "far",
      motif: "windmill",
      x: 2622,
      y: 336,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-25",
      layer: "mid",
      motif: "grass",
      x: 2719,
      y: 377,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-26",
      layer: "near",
      motif: "gear",
      x: 2816,
      y: 418,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-27",
      layer: "mid",
      motif: "vine",
      x: 2913,
      y: 459,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-28",
      layer: "far",
      motif: "glassBerry",
      x: 3010,
      y: 70,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-29",
      layer: "mid",
      motif: "cloud",
      x: 3107,
      y: 111,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-30",
      layer: "far",
      motif: "windmill",
      x: 3204,
      y: 152,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-31",
      layer: "near",
      motif: "grass",
      x: 3301,
      y: 193,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-32",
      layer: "far",
      motif: "gear",
      x: 3398,
      y: 234,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-33",
      layer: "mid",
      motif: "vine",
      x: 3495,
      y: 275,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-34",
      layer: "far",
      motif: "glassBerry",
      x: 3592,
      y: 316,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-35",
      layer: "mid",
      motif: "cloud",
      x: 3689,
      y: 357,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-36",
      layer: "near",
      motif: "windmill",
      x: 3786,
      y: 398,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-37",
      layer: "mid",
      motif: "grass",
      x: 3883,
      y: 439,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-38",
      layer: "far",
      motif: "gear",
      x: 3980,
      y: 50,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-39",
      layer: "mid",
      motif: "vine",
      x: 4077,
      y: 91,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-40",
      layer: "far",
      motif: "glassBerry",
      x: 4174,
      y: 132,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-41",
      layer: "near",
      motif: "cloud",
      x: 4271,
      y: 173,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-42",
      layer: "far",
      motif: "windmill",
      x: 4368,
      y: 214,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-43",
      layer: "mid",
      motif: "grass",
      x: 4465,
      y: 255,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-44",
      layer: "far",
      motif: "gear",
      x: 4562,
      y: 296,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-45",
      layer: "mid",
      motif: "vine",
      x: 4659,
      y: 337,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-46",
      layer: "near",
      motif: "glassBerry",
      x: 4756,
      y: 378,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-47",
      layer: "mid",
      motif: "cloud",
      x: 4853,
      y: 419,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-48",
      layer: "far",
      motif: "windmill",
      x: 22,
      y: 460,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-49",
      layer: "mid",
      motif: "grass",
      x: 119,
      y: 71,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-50",
      layer: "far",
      motif: "gear",
      x: 216,
      y: 112,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-51",
      layer: "near",
      motif: "vine",
      x: 313,
      y: 153,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-52",
      layer: "far",
      motif: "glassBerry",
      x: 410,
      y: 194,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-53",
      layer: "mid",
      motif: "cloud",
      x: 507,
      y: 235,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-54",
      layer: "far",
      motif: "windmill",
      x: 604,
      y: 276,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-55",
      layer: "mid",
      motif: "grass",
      x: 701,
      y: 317,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-56",
      layer: "near",
      motif: "gear",
      x: 798,
      y: 358,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-57",
      layer: "mid",
      motif: "vine",
      x: 895,
      y: 399,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-58",
      layer: "far",
      motif: "glassBerry",
      x: 992,
      y: 440,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-59",
      layer: "mid",
      motif: "cloud",
      x: 1089,
      y: 51,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-60",
      layer: "far",
      motif: "windmill",
      x: 1186,
      y: 92,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-61",
      layer: "near",
      motif: "grass",
      x: 1283,
      y: 133,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-62",
      layer: "far",
      motif: "gear",
      x: 1380,
      y: 174,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-63",
      layer: "mid",
      motif: "vine",
      x: 1477,
      y: 215,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-64",
      layer: "far",
      motif: "glassBerry",
      x: 1574,
      y: 256,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-65",
      layer: "mid",
      motif: "cloud",
      x: 1671,
      y: 297,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-66",
      layer: "near",
      motif: "windmill",
      x: 1768,
      y: 338,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-67",
      layer: "mid",
      motif: "grass",
      x: 1865,
      y: 379,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-68",
      layer: "far",
      motif: "gear",
      x: 1962,
      y: 420,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-69",
      layer: "mid",
      motif: "vine",
      x: 2059,
      y: 461,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-70",
      layer: "far",
      motif: "glassBerry",
      x: 2156,
      y: 72,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-71",
      layer: "near",
      motif: "cloud",
      x: 2253,
      y: 113,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-72",
      layer: "far",
      motif: "windmill",
      x: 2350,
      y: 154,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-73",
      layer: "mid",
      motif: "grass",
      x: 2447,
      y: 195,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-74",
      layer: "far",
      motif: "gear",
      x: 2544,
      y: 236,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-75",
      layer: "mid",
      motif: "vine",
      x: 2641,
      y: 277,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-76",
      layer: "near",
      motif: "glassBerry",
      x: 2738,
      y: 318,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-77",
      layer: "mid",
      motif: "cloud",
      x: 2835,
      y: 359,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-78",
      layer: "far",
      motif: "windmill",
      x: 2932,
      y: 400,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-79",
      layer: "mid",
      motif: "grass",
      x: 3029,
      y: 441,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-80",
      layer: "far",
      motif: "gear",
      x: 3126,
      y: 52,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-81",
      layer: "near",
      motif: "vine",
      x: 3223,
      y: 93,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-82",
      layer: "far",
      motif: "glassBerry",
      x: 3320,
      y: 134,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-83",
      layer: "mid",
      motif: "cloud",
      x: 3417,
      y: 175,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-84",
      layer: "far",
      motif: "windmill",
      x: 3514,
      y: 216,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-85",
      layer: "mid",
      motif: "grass",
      x: 3611,
      y: 257,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-86",
      layer: "near",
      motif: "gear",
      x: 3708,
      y: 298,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-87",
      layer: "mid",
      motif: "vine",
      x: 3805,
      y: 339,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-88",
      layer: "far",
      motif: "glassBerry",
      x: 3902,
      y: 380,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-89",
      layer: "mid",
      motif: "cloud",
      x: 3999,
      y: 421,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-90",
      layer: "far",
      motif: "windmill",
      x: 4096,
      y: 32,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-91",
      layer: "near",
      motif: "grass",
      x: 4193,
      y: 73,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-92",
      layer: "far",
      motif: "gear",
      x: 4290,
      y: 114,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-93",
      layer: "mid",
      motif: "vine",
      x: 4387,
      y: 155,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-94",
      layer: "far",
      motif: "glassBerry",
      x: 4484,
      y: 196,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-95",
      layer: "mid",
      motif: "cloud",
      x: 4581,
      y: 237,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-96",
      layer: "near",
      motif: "windmill",
      x: 4678,
      y: 278,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-97",
      layer: "mid",
      motif: "grass",
      x: 4775,
      y: 319,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-98",
      layer: "far",
      motif: "gear",
      x: 4872,
      y: 360,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-99",
      layer: "mid",
      motif: "vine",
      x: 41,
      y: 401,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-100",
      layer: "far",
      motif: "glassBerry",
      x: 138,
      y: 442,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-101",
      layer: "near",
      motif: "cloud",
      x: 235,
      y: 53,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-102",
      layer: "far",
      motif: "windmill",
      x: 332,
      y: 94,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-103",
      layer: "mid",
      motif: "grass",
      x: 429,
      y: 135,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-104",
      layer: "far",
      motif: "gear",
      x: 526,
      y: 176,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-105",
      layer: "mid",
      motif: "vine",
      x: 623,
      y: 217,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-106",
      layer: "near",
      motif: "glassBerry",
      x: 720,
      y: 258,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-107",
      layer: "mid",
      motif: "cloud",
      x: 817,
      y: 299,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-108",
      layer: "far",
      motif: "windmill",
      x: 914,
      y: 340,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-109",
      layer: "mid",
      motif: "grass",
      x: 1011,
      y: 381,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-110",
      layer: "far",
      motif: "gear",
      x: 1108,
      y: 422,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-111",
      layer: "near",
      motif: "vine",
      x: 1205,
      y: 33,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-112",
      layer: "far",
      motif: "glassBerry",
      x: 1302,
      y: 74,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-113",
      layer: "mid",
      motif: "cloud",
      x: 1399,
      y: 115,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-114",
      layer: "far",
      motif: "windmill",
      x: 1496,
      y: 156,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-115",
      layer: "mid",
      motif: "grass",
      x: 1593,
      y: 197,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-116",
      layer: "near",
      motif: "gear",
      x: 1690,
      y: 238,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-117",
      layer: "mid",
      motif: "vine",
      x: 1787,
      y: 279,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-118",
      layer: "far",
      motif: "glassBerry",
      x: 1884,
      y: 320,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-119",
      layer: "mid",
      motif: "cloud",
      x: 1981,
      y: 361,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-120",
      layer: "far",
      motif: "windmill",
      x: 2078,
      y: 402,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-121",
      layer: "near",
      motif: "grass",
      x: 2175,
      y: 443,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-122",
      layer: "far",
      motif: "gear",
      x: 2272,
      y: 54,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-123",
      layer: "mid",
      motif: "vine",
      x: 2369,
      y: 95,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-124",
      layer: "far",
      motif: "glassBerry",
      x: 2466,
      y: 136,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-125",
      layer: "mid",
      motif: "cloud",
      x: 2563,
      y: 177,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-126",
      layer: "near",
      motif: "windmill",
      x: 2660,
      y: 218,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-127",
      layer: "mid",
      motif: "grass",
      x: 2757,
      y: 259,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-128",
      layer: "far",
      motif: "gear",
      x: 2854,
      y: 300,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-129",
      layer: "mid",
      motif: "vine",
      x: 2951,
      y: 341,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-130",
      layer: "far",
      motif: "glassBerry",
      x: 3048,
      y: 382,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-131",
      layer: "near",
      motif: "cloud",
      x: 3145,
      y: 423,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-132",
      layer: "far",
      motif: "windmill",
      x: 3242,
      y: 34,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-133",
      layer: "mid",
      motif: "grass",
      x: 3339,
      y: 75,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-134",
      layer: "far",
      motif: "gear",
      x: 3436,
      y: 116,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-135",
      layer: "mid",
      motif: "vine",
      x: 3533,
      y: 157,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-136",
      layer: "near",
      motif: "glassBerry",
      x: 3630,
      y: 198,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-137",
      layer: "mid",
      motif: "cloud",
      x: 3727,
      y: 239,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-138",
      layer: "far",
      motif: "windmill",
      x: 3824,
      y: 280,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-139",
      layer: "mid",
      motif: "grass",
      x: 3921,
      y: 321,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-140",
      layer: "far",
      motif: "gear",
      x: 4018,
      y: 362,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-141",
      layer: "near",
      motif: "vine",
      x: 4115,
      y: 403,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-142",
      layer: "far",
      motif: "glassBerry",
      x: 4212,
      y: 444,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-143",
      layer: "mid",
      motif: "cloud",
      x: 4309,
      y: 55,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-144",
      layer: "far",
      motif: "windmill",
      x: 4406,
      y: 96,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-145",
      layer: "mid",
      motif: "grass",
      x: 4503,
      y: 137,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-146",
      layer: "near",
      motif: "gear",
      x: 4600,
      y: 178,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-147",
      layer: "mid",
      motif: "vine",
      x: 4697,
      y: 219,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-148",
      layer: "far",
      motif: "glassBerry",
      x: 4794,
      y: 260,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-149",
      layer: "mid",
      motif: "cloud",
      x: 4891,
      y: 301,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-150",
      layer: "far",
      motif: "windmill",
      x: 60,
      y: 342,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-151",
      layer: "near",
      motif: "grass",
      x: 157,
      y: 383,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-152",
      layer: "far",
      motif: "gear",
      x: 254,
      y: 424,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-153",
      layer: "mid",
      motif: "vine",
      x: 351,
      y: 35,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-154",
      layer: "far",
      motif: "glassBerry",
      x: 448,
      y: 76,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-155",
      layer: "mid",
      motif: "cloud",
      x: 545,
      y: 117,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-156",
      layer: "near",
      motif: "windmill",
      x: 642,
      y: 158,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-157",
      layer: "mid",
      motif: "grass",
      x: 739,
      y: 199,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-158",
      layer: "far",
      motif: "gear",
      x: 836,
      y: 240,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-159",
      layer: "mid",
      motif: "vine",
      x: 933,
      y: 281,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-160",
      layer: "far",
      motif: "glassBerry",
      x: 1030,
      y: 322,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-161",
      layer: "near",
      motif: "cloud",
      x: 1127,
      y: 363,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-162",
      layer: "far",
      motif: "windmill",
      x: 1224,
      y: 404,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-163",
      layer: "mid",
      motif: "grass",
      x: 1321,
      y: 445,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-164",
      layer: "far",
      motif: "gear",
      x: 1418,
      y: 56,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-165",
      layer: "mid",
      motif: "vine",
      x: 1515,
      y: 97,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-166",
      layer: "near",
      motif: "glassBerry",
      x: 1612,
      y: 138,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-167",
      layer: "mid",
      motif: "cloud",
      x: 1709,
      y: 179,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-168",
      layer: "far",
      motif: "windmill",
      x: 1806,
      y: 220,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-169",
      layer: "mid",
      motif: "grass",
      x: 1903,
      y: 261,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-170",
      layer: "far",
      motif: "gear",
      x: 2000,
      y: 302,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-18-171",
      layer: "near",
      motif: "vine",
      x: 2097,
      y: 343,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-172",
      layer: "far",
      motif: "glassBerry",
      x: 2194,
      y: 384,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-18-173",
      layer: "mid",
      motif: "cloud",
      x: 2291,
      y: 425,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-18-174",
      layer: "far",
      motif: "windmill",
      x: 2388,
      y: 36,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-18-175",
      layer: "mid",
      motif: "grass",
      x: 2485,
      y: 77,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-18-176",
      layer: "near",
      motif: "gear",
      x: 2582,
      y: 118,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-18-177",
      layer: "mid",
      motif: "vine",
      x: 2679,
      y: 159,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-18-178",
      layer: "far",
      motif: "glassBerry",
      x: 2776,
      y: 200,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-18-179",
      layer: "mid",
      motif: "cloud",
      x: 2873,
      y: 241,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-18-180",
      layer: "far",
      motif: "windmill",
      x: 2970,
      y: 282,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-18",
    x: 4736,
    y: 448,
    nextLevelId: "level-19"
  }
};
