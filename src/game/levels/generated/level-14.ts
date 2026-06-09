import type { LevelDefinition } from "../schema";

export const LEVEL_14: LevelDefinition = {
  id: "level-14",
  index: 13,
  title: "Glassberry Lift 07",
  chapter: "Glassberry Lift",
  columns: 154,
  rows: 18,
  timeLimit: 280,
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
    "...............................#####.........................######........................#######.......................###..............................",
    "..........................====..........................=====.........................======........................=======...............................",
    ".....................###...........................####..........................#####.........................######........................#####........",
    "................#######.......................###...........................####..........................#####.........................######............",
    "...........======........................=======.......................===...........................====..........................=====..................",
    "....................................######W.......................#######.....W.................###...............W...........####........................",
    ".................................S...................................S...................................S................................................",
    "...P....................W...................................W...................................W...................................W...............G.....",
    "...............S...................................S...................................S...................................S..............................",
    "^################^...############...############...^###########...##^#########...####^#######...######^#####...########^###...##########^################^",
    "##################.^.############^.^############.^.############^.^############.^.############^.^############.^.############^.^############################"
  ],
  enemies: [
    {
      id: "enemy-14-1",
      kind: "acorn",
      x: 504,
      y: 448,
      patrolMin: 409,
      patrolMax: 624,
      speed: 56,
      phase: 13
    },
    {
      id: "enemy-14-2",
      kind: "lantern",
      x: 834,
      y: 416,
      patrolMin: 721,
      patrolMax: 976,
      speed: 68,
      phase: 16
    },
    {
      id: "enemy-14-3",
      kind: "charger",
      x: 1164,
      y: 384,
      patrolMin: 1033,
      patrolMax: 1328,
      speed: 80,
      phase: 19
    },
    {
      id: "enemy-14-4",
      kind: "spiker",
      x: 1494,
      y: 352,
      patrolMin: 1345,
      patrolMax: 1680,
      speed: 92,
      phase: 22
    },
    {
      id: "enemy-14-5",
      kind: "turret",
      x: 1824,
      y: 320,
      patrolMin: 1729,
      patrolMax: 2032,
      speed: 104,
      phase: 25
    },
    {
      id: "enemy-14-6",
      kind: "beetle",
      x: 2154,
      y: 448,
      patrolMin: 2041,
      patrolMax: 2274,
      speed: 44,
      phase: 28
    },
    {
      id: "enemy-14-7",
      kind: "acorn",
      x: 2484,
      y: 416,
      patrolMin: 2353,
      patrolMax: 2626,
      speed: 56,
      phase: 31
    },
    {
      id: "enemy-14-8",
      kind: "lantern",
      x: 2814,
      y: 384,
      patrolMin: 2665,
      patrolMax: 2978,
      speed: 68,
      phase: 34
    },
    {
      id: "enemy-14-9",
      kind: "charger",
      x: 3144,
      y: 352,
      patrolMin: 3049,
      patrolMax: 3330,
      speed: 80,
      phase: 37
    },
    {
      id: "enemy-14-10",
      kind: "spiker",
      x: 3474,
      y: 320,
      patrolMin: 3361,
      patrolMax: 3682,
      speed: 92,
      phase: 40
    },
    {
      id: "enemy-14-11",
      kind: "turret",
      x: 3804,
      y: 448,
      patrolMin: 3673,
      patrolMax: 3924,
      speed: 104,
      phase: 43
    },
    {
      id: "enemy-14-12",
      kind: "beetle",
      x: 4134,
      y: 416,
      patrolMin: 3985,
      patrolMax: 4276,
      speed: 44,
      phase: 46
    },
    {
      id: "enemy-14-13",
      kind: "acorn",
      x: 4464,
      y: 384,
      patrolMin: 4369,
      patrolMax: 4628,
      speed: 56,
      phase: 49
    },
    {
      id: "enemy-14-14",
      kind: "lantern",
      x: 4794,
      y: 352,
      patrolMin: 4681,
      patrolMax: 4748,
      speed: 68,
      phase: 52
    },
    {
      id: "enemy-14-15",
      kind: "charger",
      x: 5124,
      y: 320,
      patrolMin: 4993,
      patrolMax: 4748,
      speed: 80,
      phase: 55
    },
    {
      id: "enemy-14-16",
      kind: "spiker",
      x: 5454,
      y: 448,
      patrolMin: 5305,
      patrolMax: 4748,
      speed: 92,
      phase: 58
    },
    {
      id: "enemy-14-17",
      kind: "turret",
      x: 5784,
      y: 416,
      patrolMin: 5689,
      patrolMax: 4748,
      speed: 104,
      phase: 61
    }
  ],
  collectibles: [
    {
      id: "collectible-14-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 192,
      y: 151
    },
    {
      id: "collectible-14-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 262,
      y: 204
    },
    {
      id: "collectible-14-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 332,
      y: 224
    },
    {
      id: "collectible-14-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 402,
      y: 277
    },
    {
      id: "collectible-14-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 472,
      y: 330
    },
    {
      id: "collectible-14-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 542,
      y: 350
    },
    {
      id: "collectible-14-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 612,
      y: 403
    },
    {
      id: "collectible-14-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 682,
      y: 162
    },
    {
      id: "collectible-14-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 752,
      y: 182
    },
    {
      id: "collectible-14-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 822,
      y: 235
    },
    {
      id: "collectible-14-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 892,
      y: 288
    },
    {
      id: "collectible-14-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 962,
      y: 308
    },
    {
      id: "collectible-14-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1032,
      y: 361
    },
    {
      id: "collectible-14-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1102,
      y: 414
    },
    {
      id: "collectible-14-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1172,
      y: 140
    },
    {
      id: "collectible-14-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1242,
      y: 193
    },
    {
      id: "collectible-14-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1312,
      y: 246
    },
    {
      id: "collectible-14-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1382,
      y: 266
    },
    {
      id: "collectible-14-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1452,
      y: 319
    },
    {
      id: "collectible-14-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1522,
      y: 372
    },
    {
      id: "collectible-14-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1592,
      y: 392
    },
    {
      id: "collectible-14-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1662,
      y: 151
    },
    {
      id: "collectible-14-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1732,
      y: 204
    },
    {
      id: "collectible-14-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1802,
      y: 224
    },
    {
      id: "collectible-14-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1872,
      y: 277
    },
    {
      id: "collectible-14-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1942,
      y: 330
    },
    {
      id: "collectible-14-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2012,
      y: 350
    },
    {
      id: "collectible-14-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2082,
      y: 403
    },
    {
      id: "collectible-14-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2152,
      y: 162
    },
    {
      id: "collectible-14-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2222,
      y: 182
    },
    {
      id: "collectible-14-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2292,
      y: 235
    },
    {
      id: "collectible-14-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2362,
      y: 288
    },
    {
      id: "collectible-14-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2432,
      y: 308
    },
    {
      id: "collectible-14-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2502,
      y: 361
    },
    {
      id: "collectible-14-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2572,
      y: 414
    },
    {
      id: "collectible-14-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2642,
      y: 140
    },
    {
      id: "collectible-14-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2712,
      y: 193
    },
    {
      id: "collectible-14-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2782,
      y: 246
    },
    {
      id: "collectible-14-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2852,
      y: 266
    },
    {
      id: "collectible-14-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2922,
      y: 319
    },
    {
      id: "collectible-14-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2992,
      y: 372
    },
    {
      id: "collectible-14-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3062,
      y: 392
    },
    {
      id: "collectible-14-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3132,
      y: 151
    },
    {
      id: "collectible-14-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3202,
      y: 204
    },
    {
      id: "collectible-14-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3272,
      y: 224
    },
    {
      id: "collectible-14-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3342,
      y: 277
    },
    {
      id: "collectible-14-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3412,
      y: 330
    },
    {
      id: "collectible-14-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3482,
      y: 350
    },
    {
      id: "collectible-14-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3552,
      y: 403
    },
    {
      id: "collectible-14-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3622,
      y: 162
    },
    {
      id: "collectible-14-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3692,
      y: 182
    },
    {
      id: "collectible-14-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3762,
      y: 235
    },
    {
      id: "collectible-14-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3832,
      y: 288
    },
    {
      id: "collectible-14-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3902,
      y: 308
    },
    {
      id: "collectible-14-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3972,
      y: 361
    },
    {
      id: "collectible-14-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4042,
      y: 414
    },
    {
      id: "collectible-14-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4112,
      y: 140
    },
    {
      id: "collectible-14-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4182,
      y: 193
    },
    {
      id: "collectible-14-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4252,
      y: 246
    },
    {
      id: "collectible-14-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4322,
      y: 266
    },
    {
      id: "collectible-14-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4392,
      y: 319
    },
    {
      id: "collectible-14-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4462,
      y: 372
    },
    {
      id: "collectible-14-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4532,
      y: 392
    },
    {
      id: "collectible-14-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4602,
      y: 151
    },
    {
      id: "collectible-14-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4672,
      y: 204
    },
    {
      id: "collectible-14-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4742,
      y: 224
    },
    {
      id: "collectible-14-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4812,
      y: 277
    },
    {
      id: "collectible-14-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4882,
      y: 330
    },
    {
      id: "collectible-14-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4952,
      y: 350
    },
    {
      id: "collectible-14-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5022,
      y: 403
    },
    {
      id: "collectible-14-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5092,
      y: 162
    },
    {
      id: "collectible-14-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5162,
      y: 182
    },
    {
      id: "collectible-14-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5232,
      y: 235
    },
    {
      id: "collectible-14-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5302,
      y: 288
    },
    {
      id: "collectible-14-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5372,
      y: 308
    },
    {
      id: "collectible-14-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5442,
      y: 361
    },
    {
      id: "collectible-14-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5512,
      y: 414
    },
    {
      id: "collectible-14-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5582,
      y: 140
    }
  ],
  powerups: [
    {
      id: "powerup-14-1",
      kind: "springBoots",
      durationMs: 4800,
      x: 530,
      y: 130
    },
    {
      id: "powerup-14-2",
      kind: "starburst",
      durationMs: 5700,
      x: 1360,
      y: 182
    },
    {
      id: "powerup-14-3",
      kind: "gliderLeaf",
      durationMs: 6600,
      x: 2190,
      y: 234
    },
    {
      id: "powerup-14-4",
      kind: "shield",
      durationMs: 7500,
      x: 3020,
      y: 286
    },
    {
      id: "powerup-14-5",
      kind: "springBoots",
      durationMs: 4800,
      x: 3850,
      y: 338
    },
    {
      id: "powerup-14-6",
      kind: "starburst",
      durationMs: 5700,
      x: 4680,
      y: 130
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-14-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 1.3
    },
    {
      id: "moving-platform-14-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 2
    },
    {
      id: "moving-platform-14-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 2.7
    },
    {
      id: "moving-platform-14-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 3.3999999999999995
    },
    {
      id: "moving-platform-14-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 4.1
    },
    {
      id: "moving-platform-14-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 4.8
    },
    {
      id: "moving-platform-14-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 5.499999999999999
    },
    {
      id: "moving-platform-14-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 6.199999999999999
    },
    {
      id: "moving-platform-14-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 6.8999999999999995
    },
    {
      id: "moving-platform-14-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 7.6
    }
  ],
  hazards: [
    {
      id: "hazard-14-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 13
    },
    {
      id: "hazard-14-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 14
    },
    {
      id: "hazard-14-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 15
    },
    {
      id: "hazard-14-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 16
    },
    {
      id: "hazard-14-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 17
    },
    {
      id: "hazard-14-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 18
    },
    {
      id: "hazard-14-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 19
    },
    {
      id: "hazard-14-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 20
    },
    {
      id: "hazard-14-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 21
    },
    {
      id: "hazard-14-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 22
    },
    {
      id: "hazard-14-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 23
    },
    {
      id: "hazard-14-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 24
    },
    {
      id: "hazard-14-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 25
    },
    {
      id: "hazard-14-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 26
    },
    {
      id: "hazard-14-15",
      kind: "thorn",
      x: 5660,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 27
    },
    {
      id: "hazard-14-16",
      kind: "crushBlock",
      x: 6020,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 28
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-14-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-14-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-14-1",
      x: 674,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-14-2",
      x: 1444,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-14-3",
      x: 2214,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-14-4",
      x: 2984,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-14-5",
      x: 3754,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-14-6",
      x: 4524,
      y: 384,
      power: 1.46
    }
  ],
  windZones: [
    {
      id: "wind-14-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-14-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-14-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-14-4",
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
      id: "decor-14-1",
      layer: "near",
      motif: "vine",
      x: 299,
      y: 201,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-2",
      layer: "far",
      motif: "glassBerry",
      x: 396,
      y: 242,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-3",
      layer: "mid",
      motif: "cloud",
      x: 493,
      y: 283,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-4",
      layer: "far",
      motif: "windmill",
      x: 590,
      y: 324,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-5",
      layer: "mid",
      motif: "grass",
      x: 687,
      y: 365,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-6",
      layer: "near",
      motif: "gear",
      x: 784,
      y: 406,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-7",
      layer: "mid",
      motif: "vine",
      x: 881,
      y: 447,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-8",
      layer: "far",
      motif: "glassBerry",
      x: 978,
      y: 58,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-9",
      layer: "mid",
      motif: "cloud",
      x: 1075,
      y: 99,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-10",
      layer: "far",
      motif: "windmill",
      x: 1172,
      y: 140,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-11",
      layer: "near",
      motif: "grass",
      x: 1269,
      y: 181,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-12",
      layer: "far",
      motif: "gear",
      x: 1366,
      y: 222,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-13",
      layer: "mid",
      motif: "vine",
      x: 1463,
      y: 263,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-14",
      layer: "far",
      motif: "glassBerry",
      x: 1560,
      y: 304,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-15",
      layer: "mid",
      motif: "cloud",
      x: 1657,
      y: 345,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-16",
      layer: "near",
      motif: "windmill",
      x: 1754,
      y: 386,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-17",
      layer: "mid",
      motif: "grass",
      x: 1851,
      y: 427,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-18",
      layer: "far",
      motif: "gear",
      x: 1948,
      y: 38,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-19",
      layer: "mid",
      motif: "vine",
      x: 2045,
      y: 79,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-20",
      layer: "far",
      motif: "glassBerry",
      x: 2142,
      y: 120,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-21",
      layer: "near",
      motif: "cloud",
      x: 2239,
      y: 161,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-22",
      layer: "far",
      motif: "windmill",
      x: 2336,
      y: 202,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-23",
      layer: "mid",
      motif: "grass",
      x: 2433,
      y: 243,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-24",
      layer: "far",
      motif: "gear",
      x: 2530,
      y: 284,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-25",
      layer: "mid",
      motif: "vine",
      x: 2627,
      y: 325,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-26",
      layer: "near",
      motif: "glassBerry",
      x: 2724,
      y: 366,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-27",
      layer: "mid",
      motif: "cloud",
      x: 2821,
      y: 407,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-28",
      layer: "far",
      motif: "windmill",
      x: 2918,
      y: 448,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-29",
      layer: "mid",
      motif: "grass",
      x: 3015,
      y: 59,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-30",
      layer: "far",
      motif: "gear",
      x: 3112,
      y: 100,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-31",
      layer: "near",
      motif: "vine",
      x: 3209,
      y: 141,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-32",
      layer: "far",
      motif: "glassBerry",
      x: 3306,
      y: 182,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-33",
      layer: "mid",
      motif: "cloud",
      x: 3403,
      y: 223,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-34",
      layer: "far",
      motif: "windmill",
      x: 3500,
      y: 264,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-35",
      layer: "mid",
      motif: "grass",
      x: 3597,
      y: 305,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-36",
      layer: "near",
      motif: "gear",
      x: 3694,
      y: 346,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-37",
      layer: "mid",
      motif: "vine",
      x: 3791,
      y: 387,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-38",
      layer: "far",
      motif: "glassBerry",
      x: 3888,
      y: 428,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-39",
      layer: "mid",
      motif: "cloud",
      x: 3985,
      y: 39,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-40",
      layer: "far",
      motif: "windmill",
      x: 4082,
      y: 80,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-41",
      layer: "near",
      motif: "grass",
      x: 4179,
      y: 121,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-42",
      layer: "far",
      motif: "gear",
      x: 4276,
      y: 162,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-43",
      layer: "mid",
      motif: "vine",
      x: 4373,
      y: 203,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-44",
      layer: "far",
      motif: "glassBerry",
      x: 4470,
      y: 244,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-45",
      layer: "mid",
      motif: "cloud",
      x: 4567,
      y: 285,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-46",
      layer: "near",
      motif: "windmill",
      x: 4664,
      y: 326,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-47",
      layer: "mid",
      motif: "grass",
      x: 4761,
      y: 367,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-48",
      layer: "far",
      motif: "gear",
      x: 4858,
      y: 408,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-49",
      layer: "mid",
      motif: "vine",
      x: 27,
      y: 449,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-50",
      layer: "far",
      motif: "glassBerry",
      x: 124,
      y: 60,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-51",
      layer: "near",
      motif: "cloud",
      x: 221,
      y: 101,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-52",
      layer: "far",
      motif: "windmill",
      x: 318,
      y: 142,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-53",
      layer: "mid",
      motif: "grass",
      x: 415,
      y: 183,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-54",
      layer: "far",
      motif: "gear",
      x: 512,
      y: 224,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-55",
      layer: "mid",
      motif: "vine",
      x: 609,
      y: 265,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-56",
      layer: "near",
      motif: "glassBerry",
      x: 706,
      y: 306,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-57",
      layer: "mid",
      motif: "cloud",
      x: 803,
      y: 347,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-58",
      layer: "far",
      motif: "windmill",
      x: 900,
      y: 388,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-59",
      layer: "mid",
      motif: "grass",
      x: 997,
      y: 429,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-60",
      layer: "far",
      motif: "gear",
      x: 1094,
      y: 40,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-61",
      layer: "near",
      motif: "vine",
      x: 1191,
      y: 81,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-62",
      layer: "far",
      motif: "glassBerry",
      x: 1288,
      y: 122,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-63",
      layer: "mid",
      motif: "cloud",
      x: 1385,
      y: 163,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-64",
      layer: "far",
      motif: "windmill",
      x: 1482,
      y: 204,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-65",
      layer: "mid",
      motif: "grass",
      x: 1579,
      y: 245,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-66",
      layer: "near",
      motif: "gear",
      x: 1676,
      y: 286,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-67",
      layer: "mid",
      motif: "vine",
      x: 1773,
      y: 327,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-68",
      layer: "far",
      motif: "glassBerry",
      x: 1870,
      y: 368,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-69",
      layer: "mid",
      motif: "cloud",
      x: 1967,
      y: 409,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-70",
      layer: "far",
      motif: "windmill",
      x: 2064,
      y: 450,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-71",
      layer: "near",
      motif: "grass",
      x: 2161,
      y: 61,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-72",
      layer: "far",
      motif: "gear",
      x: 2258,
      y: 102,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-73",
      layer: "mid",
      motif: "vine",
      x: 2355,
      y: 143,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-74",
      layer: "far",
      motif: "glassBerry",
      x: 2452,
      y: 184,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-75",
      layer: "mid",
      motif: "cloud",
      x: 2549,
      y: 225,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-76",
      layer: "near",
      motif: "windmill",
      x: 2646,
      y: 266,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-77",
      layer: "mid",
      motif: "grass",
      x: 2743,
      y: 307,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-78",
      layer: "far",
      motif: "gear",
      x: 2840,
      y: 348,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-79",
      layer: "mid",
      motif: "vine",
      x: 2937,
      y: 389,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-80",
      layer: "far",
      motif: "glassBerry",
      x: 3034,
      y: 430,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-81",
      layer: "near",
      motif: "cloud",
      x: 3131,
      y: 41,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-82",
      layer: "far",
      motif: "windmill",
      x: 3228,
      y: 82,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-83",
      layer: "mid",
      motif: "grass",
      x: 3325,
      y: 123,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-84",
      layer: "far",
      motif: "gear",
      x: 3422,
      y: 164,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-85",
      layer: "mid",
      motif: "vine",
      x: 3519,
      y: 205,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-86",
      layer: "near",
      motif: "glassBerry",
      x: 3616,
      y: 246,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-87",
      layer: "mid",
      motif: "cloud",
      x: 3713,
      y: 287,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-88",
      layer: "far",
      motif: "windmill",
      x: 3810,
      y: 328,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-89",
      layer: "mid",
      motif: "grass",
      x: 3907,
      y: 369,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-90",
      layer: "far",
      motif: "gear",
      x: 4004,
      y: 410,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-91",
      layer: "near",
      motif: "vine",
      x: 4101,
      y: 451,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-92",
      layer: "far",
      motif: "glassBerry",
      x: 4198,
      y: 62,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-93",
      layer: "mid",
      motif: "cloud",
      x: 4295,
      y: 103,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-94",
      layer: "far",
      motif: "windmill",
      x: 4392,
      y: 144,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-95",
      layer: "mid",
      motif: "grass",
      x: 4489,
      y: 185,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-96",
      layer: "near",
      motif: "gear",
      x: 4586,
      y: 226,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-97",
      layer: "mid",
      motif: "vine",
      x: 4683,
      y: 267,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-98",
      layer: "far",
      motif: "glassBerry",
      x: 4780,
      y: 308,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-99",
      layer: "mid",
      motif: "cloud",
      x: 4877,
      y: 349,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-100",
      layer: "far",
      motif: "windmill",
      x: 46,
      y: 390,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-101",
      layer: "near",
      motif: "grass",
      x: 143,
      y: 431,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-102",
      layer: "far",
      motif: "gear",
      x: 240,
      y: 42,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-103",
      layer: "mid",
      motif: "vine",
      x: 337,
      y: 83,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-104",
      layer: "far",
      motif: "glassBerry",
      x: 434,
      y: 124,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-105",
      layer: "mid",
      motif: "cloud",
      x: 531,
      y: 165,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-106",
      layer: "near",
      motif: "windmill",
      x: 628,
      y: 206,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-107",
      layer: "mid",
      motif: "grass",
      x: 725,
      y: 247,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-108",
      layer: "far",
      motif: "gear",
      x: 822,
      y: 288,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-109",
      layer: "mid",
      motif: "vine",
      x: 919,
      y: 329,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-110",
      layer: "far",
      motif: "glassBerry",
      x: 1016,
      y: 370,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-111",
      layer: "near",
      motif: "cloud",
      x: 1113,
      y: 411,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-112",
      layer: "far",
      motif: "windmill",
      x: 1210,
      y: 452,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-113",
      layer: "mid",
      motif: "grass",
      x: 1307,
      y: 63,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-114",
      layer: "far",
      motif: "gear",
      x: 1404,
      y: 104,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-115",
      layer: "mid",
      motif: "vine",
      x: 1501,
      y: 145,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-116",
      layer: "near",
      motif: "glassBerry",
      x: 1598,
      y: 186,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-117",
      layer: "mid",
      motif: "cloud",
      x: 1695,
      y: 227,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-118",
      layer: "far",
      motif: "windmill",
      x: 1792,
      y: 268,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-119",
      layer: "mid",
      motif: "grass",
      x: 1889,
      y: 309,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-120",
      layer: "far",
      motif: "gear",
      x: 1986,
      y: 350,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-121",
      layer: "near",
      motif: "vine",
      x: 2083,
      y: 391,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-122",
      layer: "far",
      motif: "glassBerry",
      x: 2180,
      y: 432,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-123",
      layer: "mid",
      motif: "cloud",
      x: 2277,
      y: 43,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-124",
      layer: "far",
      motif: "windmill",
      x: 2374,
      y: 84,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-125",
      layer: "mid",
      motif: "grass",
      x: 2471,
      y: 125,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-126",
      layer: "near",
      motif: "gear",
      x: 2568,
      y: 166,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-127",
      layer: "mid",
      motif: "vine",
      x: 2665,
      y: 207,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-128",
      layer: "far",
      motif: "glassBerry",
      x: 2762,
      y: 248,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-129",
      layer: "mid",
      motif: "cloud",
      x: 2859,
      y: 289,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-130",
      layer: "far",
      motif: "windmill",
      x: 2956,
      y: 330,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-131",
      layer: "near",
      motif: "grass",
      x: 3053,
      y: 371,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-132",
      layer: "far",
      motif: "gear",
      x: 3150,
      y: 412,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-133",
      layer: "mid",
      motif: "vine",
      x: 3247,
      y: 453,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-134",
      layer: "far",
      motif: "glassBerry",
      x: 3344,
      y: 64,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-135",
      layer: "mid",
      motif: "cloud",
      x: 3441,
      y: 105,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-136",
      layer: "near",
      motif: "windmill",
      x: 3538,
      y: 146,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-137",
      layer: "mid",
      motif: "grass",
      x: 3635,
      y: 187,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-138",
      layer: "far",
      motif: "gear",
      x: 3732,
      y: 228,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-139",
      layer: "mid",
      motif: "vine",
      x: 3829,
      y: 269,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-140",
      layer: "far",
      motif: "glassBerry",
      x: 3926,
      y: 310,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-141",
      layer: "near",
      motif: "cloud",
      x: 4023,
      y: 351,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-142",
      layer: "far",
      motif: "windmill",
      x: 4120,
      y: 392,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-143",
      layer: "mid",
      motif: "grass",
      x: 4217,
      y: 433,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-144",
      layer: "far",
      motif: "gear",
      x: 4314,
      y: 44,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-145",
      layer: "mid",
      motif: "vine",
      x: 4411,
      y: 85,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-146",
      layer: "near",
      motif: "glassBerry",
      x: 4508,
      y: 126,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-147",
      layer: "mid",
      motif: "cloud",
      x: 4605,
      y: 167,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-148",
      layer: "far",
      motif: "windmill",
      x: 4702,
      y: 208,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-149",
      layer: "mid",
      motif: "grass",
      x: 4799,
      y: 249,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-150",
      layer: "far",
      motif: "gear",
      x: 4896,
      y: 290,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-151",
      layer: "near",
      motif: "vine",
      x: 65,
      y: 331,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-152",
      layer: "far",
      motif: "glassBerry",
      x: 162,
      y: 372,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-153",
      layer: "mid",
      motif: "cloud",
      x: 259,
      y: 413,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-154",
      layer: "far",
      motif: "windmill",
      x: 356,
      y: 454,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-155",
      layer: "mid",
      motif: "grass",
      x: 453,
      y: 65,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-156",
      layer: "near",
      motif: "gear",
      x: 550,
      y: 106,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-157",
      layer: "mid",
      motif: "vine",
      x: 647,
      y: 147,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-158",
      layer: "far",
      motif: "glassBerry",
      x: 744,
      y: 188,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-159",
      layer: "mid",
      motif: "cloud",
      x: 841,
      y: 229,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-160",
      layer: "far",
      motif: "windmill",
      x: 938,
      y: 270,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-161",
      layer: "near",
      motif: "grass",
      x: 1035,
      y: 311,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-162",
      layer: "far",
      motif: "gear",
      x: 1132,
      y: 352,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-163",
      layer: "mid",
      motif: "vine",
      x: 1229,
      y: 393,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-164",
      layer: "far",
      motif: "glassBerry",
      x: 1326,
      y: 434,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-165",
      layer: "mid",
      motif: "cloud",
      x: 1423,
      y: 45,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-166",
      layer: "near",
      motif: "windmill",
      x: 1520,
      y: 86,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-167",
      layer: "mid",
      motif: "grass",
      x: 1617,
      y: 127,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-168",
      layer: "far",
      motif: "gear",
      x: 1714,
      y: 168,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-169",
      layer: "mid",
      motif: "vine",
      x: 1811,
      y: 209,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-170",
      layer: "far",
      motif: "glassBerry",
      x: 1908,
      y: 250,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-14-171",
      layer: "near",
      motif: "cloud",
      x: 2005,
      y: 291,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-172",
      layer: "far",
      motif: "windmill",
      x: 2102,
      y: 332,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-14-173",
      layer: "mid",
      motif: "grass",
      x: 2199,
      y: 373,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-14-174",
      layer: "far",
      motif: "gear",
      x: 2296,
      y: 414,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-14-175",
      layer: "mid",
      motif: "vine",
      x: 2393,
      y: 455,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-14-176",
      layer: "near",
      motif: "glassBerry",
      x: 2490,
      y: 66,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-14-177",
      layer: "mid",
      motif: "cloud",
      x: 2587,
      y: 107,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-14-178",
      layer: "far",
      motif: "windmill",
      x: 2684,
      y: 148,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-14-179",
      layer: "mid",
      motif: "grass",
      x: 2781,
      y: 189,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-14-180",
      layer: "far",
      motif: "gear",
      x: 2878,
      y: 230,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-14",
    x: 4736,
    y: 448,
    nextLevelId: "level-15"
  }
};
