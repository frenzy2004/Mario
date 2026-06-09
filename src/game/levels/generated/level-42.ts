import type { LevelDefinition } from "../schema";

export const LEVEL_42: LevelDefinition = {
  id: "level-42",
  index: 41,
  title: "The Warden's Crown 07",
  chapter: "The Warden's Crown",
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
    "...........====..........................=====.........................======........................=======.......................===....................",
    "....................................####..........................#####.........................######........................#######.....................",
    "...............................###...........................####..........................#####.........................######...........................",
    "..........................=======.......................===...........................====..........................=====.................................",
    ".....................######........................#######.......................###...........................####..........................#####........",
    "................#####.........................W#####........................######W.......................###.........W.................####..............",
    ".....................................S...................................S...................................S............................................",
    "...P........................W...................................W...................................W...................................W...........G.....",
    "...................S...................................S...................................S...................................S..........................",
    "^################^....############^...#############^..##############^....############^...#############^..##############^....############^################^",
    "##################.^.^#############^.^##############.^###############^.^.#############.^.##############^.###############.^.^##############################"
  ],
  enemies: [
    {
      id: "enemy-42-1",
      kind: "turret",
      x: 448,
      y: 448,
      patrolMin: 353,
      patrolMax: 568,
      speed: 104,
      phase: 41
    },
    {
      id: "enemy-42-2",
      kind: "beetle",
      x: 778,
      y: 416,
      patrolMin: 665,
      patrolMax: 920,
      speed: 44,
      phase: 44
    },
    {
      id: "enemy-42-3",
      kind: "acorn",
      x: 1108,
      y: 384,
      patrolMin: 977,
      patrolMax: 1272,
      speed: 56,
      phase: 47
    },
    {
      id: "enemy-42-4",
      kind: "lantern",
      x: 1438,
      y: 352,
      patrolMin: 1289,
      patrolMax: 1624,
      speed: 68,
      phase: 50
    },
    {
      id: "enemy-42-5",
      kind: "charger",
      x: 1768,
      y: 320,
      patrolMin: 1673,
      patrolMax: 1976,
      speed: 80,
      phase: 53
    },
    {
      id: "enemy-42-6",
      kind: "spiker",
      x: 2098,
      y: 448,
      patrolMin: 1985,
      patrolMax: 2218,
      speed: 92,
      phase: 56
    },
    {
      id: "enemy-42-7",
      kind: "turret",
      x: 2428,
      y: 416,
      patrolMin: 2297,
      patrolMax: 2570,
      speed: 104,
      phase: 59
    },
    {
      id: "enemy-42-8",
      kind: "beetle",
      x: 2758,
      y: 384,
      patrolMin: 2609,
      patrolMax: 2922,
      speed: 44,
      phase: 62
    },
    {
      id: "enemy-42-9",
      kind: "acorn",
      x: 3088,
      y: 352,
      patrolMin: 2993,
      patrolMax: 3274,
      speed: 56,
      phase: 65
    },
    {
      id: "enemy-42-10",
      kind: "lantern",
      x: 3418,
      y: 320,
      patrolMin: 3305,
      patrolMax: 3626,
      speed: 68,
      phase: 68
    },
    {
      id: "enemy-42-11",
      kind: "charger",
      x: 3748,
      y: 448,
      patrolMin: 3617,
      patrolMax: 3868,
      speed: 80,
      phase: 71
    },
    {
      id: "enemy-42-12",
      kind: "spiker",
      x: 4078,
      y: 416,
      patrolMin: 3929,
      patrolMax: 4220,
      speed: 92,
      phase: 74
    },
    {
      id: "enemy-42-13",
      kind: "turret",
      x: 4408,
      y: 384,
      patrolMin: 4313,
      patrolMax: 4572,
      speed: 104,
      phase: 77
    }
  ],
  collectibles: [
    {
      id: "collectible-42-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 192,
      y: 162
    },
    {
      id: "collectible-42-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 262,
      y: 182
    },
    {
      id: "collectible-42-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 332,
      y: 235
    },
    {
      id: "collectible-42-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 402,
      y: 288
    },
    {
      id: "collectible-42-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 472,
      y: 308
    },
    {
      id: "collectible-42-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 542,
      y: 361
    },
    {
      id: "collectible-42-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 612,
      y: 414
    },
    {
      id: "collectible-42-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 682,
      y: 140
    },
    {
      id: "collectible-42-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 752,
      y: 193
    },
    {
      id: "collectible-42-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 822,
      y: 246
    },
    {
      id: "collectible-42-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 892,
      y: 266
    },
    {
      id: "collectible-42-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 962,
      y: 319
    },
    {
      id: "collectible-42-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1032,
      y: 372
    },
    {
      id: "collectible-42-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1102,
      y: 392
    },
    {
      id: "collectible-42-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1172,
      y: 151
    },
    {
      id: "collectible-42-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1242,
      y: 204
    },
    {
      id: "collectible-42-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1312,
      y: 224
    },
    {
      id: "collectible-42-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1382,
      y: 277
    },
    {
      id: "collectible-42-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1452,
      y: 330
    },
    {
      id: "collectible-42-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1522,
      y: 350
    },
    {
      id: "collectible-42-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1592,
      y: 403
    },
    {
      id: "collectible-42-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1662,
      y: 162
    },
    {
      id: "collectible-42-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1732,
      y: 182
    },
    {
      id: "collectible-42-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1802,
      y: 235
    },
    {
      id: "collectible-42-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1872,
      y: 288
    },
    {
      id: "collectible-42-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1942,
      y: 308
    },
    {
      id: "collectible-42-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2012,
      y: 361
    },
    {
      id: "collectible-42-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2082,
      y: 414
    },
    {
      id: "collectible-42-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2152,
      y: 140
    },
    {
      id: "collectible-42-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2222,
      y: 193
    },
    {
      id: "collectible-42-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2292,
      y: 246
    },
    {
      id: "collectible-42-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2362,
      y: 266
    },
    {
      id: "collectible-42-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2432,
      y: 319
    },
    {
      id: "collectible-42-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2502,
      y: 372
    },
    {
      id: "collectible-42-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2572,
      y: 392
    },
    {
      id: "collectible-42-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2642,
      y: 151
    },
    {
      id: "collectible-42-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2712,
      y: 204
    },
    {
      id: "collectible-42-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2782,
      y: 224
    },
    {
      id: "collectible-42-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2852,
      y: 277
    },
    {
      id: "collectible-42-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2922,
      y: 330
    },
    {
      id: "collectible-42-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2992,
      y: 350
    },
    {
      id: "collectible-42-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3062,
      y: 403
    },
    {
      id: "collectible-42-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3132,
      y: 162
    },
    {
      id: "collectible-42-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3202,
      y: 182
    },
    {
      id: "collectible-42-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3272,
      y: 235
    },
    {
      id: "collectible-42-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3342,
      y: 288
    },
    {
      id: "collectible-42-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3412,
      y: 308
    },
    {
      id: "collectible-42-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3482,
      y: 361
    },
    {
      id: "collectible-42-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3552,
      y: 414
    },
    {
      id: "collectible-42-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3622,
      y: 140
    },
    {
      id: "collectible-42-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3692,
      y: 193
    },
    {
      id: "collectible-42-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3762,
      y: 246
    },
    {
      id: "collectible-42-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3832,
      y: 266
    },
    {
      id: "collectible-42-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3902,
      y: 319
    },
    {
      id: "collectible-42-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3972,
      y: 372
    },
    {
      id: "collectible-42-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4042,
      y: 392
    },
    {
      id: "collectible-42-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4112,
      y: 151
    },
    {
      id: "collectible-42-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4182,
      y: 204
    },
    {
      id: "collectible-42-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4252,
      y: 224
    },
    {
      id: "collectible-42-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4322,
      y: 277
    },
    {
      id: "collectible-42-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4392,
      y: 330
    },
    {
      id: "collectible-42-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4462,
      y: 350
    },
    {
      id: "collectible-42-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4532,
      y: 403
    },
    {
      id: "collectible-42-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4602,
      y: 162
    },
    {
      id: "collectible-42-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4672,
      y: 182
    },
    {
      id: "collectible-42-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4742,
      y: 235
    },
    {
      id: "collectible-42-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4812,
      y: 288
    },
    {
      id: "collectible-42-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4882,
      y: 308
    },
    {
      id: "collectible-42-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4952,
      y: 361
    },
    {
      id: "collectible-42-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5022,
      y: 414
    },
    {
      id: "collectible-42-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5092,
      y: 140
    },
    {
      id: "collectible-42-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5162,
      y: 193
    },
    {
      id: "collectible-42-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5232,
      y: 246
    },
    {
      id: "collectible-42-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5302,
      y: 266
    },
    {
      id: "collectible-42-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5372,
      y: 319
    },
    {
      id: "collectible-42-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5442,
      y: 372
    },
    {
      id: "collectible-42-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5512,
      y: 392
    },
    {
      id: "collectible-42-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5582,
      y: 151
    },
    {
      id: "collectible-42-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5652,
      y: 204
    },
    {
      id: "collectible-42-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5722,
      y: 224
    },
    {
      id: "collectible-42-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5792,
      y: 277
    },
    {
      id: "collectible-42-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5862,
      y: 330
    }
  ],
  powerups: [
    {
      id: "powerup-42-1",
      kind: "springBoots",
      durationMs: 4800,
      x: 650,
      y: 130
    },
    {
      id: "powerup-42-2",
      kind: "starburst",
      durationMs: 5700,
      x: 1480,
      y: 182
    },
    {
      id: "powerup-42-3",
      kind: "gliderLeaf",
      durationMs: 6600,
      x: 2310,
      y: 234
    },
    {
      id: "powerup-42-4",
      kind: "shield",
      durationMs: 7500,
      x: 3140,
      y: 286
    },
    {
      id: "powerup-42-5",
      kind: "springBoots",
      durationMs: 4800,
      x: 3970,
      y: 338
    },
    {
      id: "powerup-42-6",
      kind: "starburst",
      durationMs: 5700,
      x: 4800,
      y: 130
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-42-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 4.1000000000000005
    },
    {
      id: "moving-platform-42-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 4.800000000000001
    },
    {
      id: "moving-platform-42-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 5.5
    },
    {
      id: "moving-platform-42-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 6.2
    },
    {
      id: "moving-platform-42-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 6.9
    },
    {
      id: "moving-platform-42-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 7.6000000000000005
    },
    {
      id: "moving-platform-42-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 8.3
    },
    {
      id: "moving-platform-42-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 9
    }
  ],
  hazards: [
    {
      id: "hazard-42-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 41
    },
    {
      id: "hazard-42-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 42
    },
    {
      id: "hazard-42-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 43
    },
    {
      id: "hazard-42-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 44
    },
    {
      id: "hazard-42-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 45
    },
    {
      id: "hazard-42-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 46
    },
    {
      id: "hazard-42-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 47
    },
    {
      id: "hazard-42-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 48
    },
    {
      id: "hazard-42-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 49
    },
    {
      id: "hazard-42-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 50
    },
    {
      id: "hazard-42-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 51
    },
    {
      id: "hazard-42-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 52
    },
    {
      id: "hazard-42-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 53
    },
    {
      id: "hazard-42-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 54
    },
    {
      id: "hazard-42-15",
      kind: "thorn",
      x: 5660,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 55
    },
    {
      id: "hazard-42-16",
      kind: "crushBlock",
      x: 6020,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 56
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-42-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-42-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-42-1",
      x: 708,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-42-2",
      x: 1478,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-42-3",
      x: 2248,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-42-4",
      x: 3018,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-42-5",
      x: 3788,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-42-6",
      x: 4558,
      y: 384,
      power: 1.46
    }
  ],
  windZones: [
    {
      id: "wind-42-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-42-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-42-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-42-4",
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
      id: "decor-42-1",
      layer: "near",
      motif: "grass",
      x: 943,
      y: 135,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-2",
      layer: "far",
      motif: "gear",
      x: 1040,
      y: 176,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-3",
      layer: "mid",
      motif: "vine",
      x: 1137,
      y: 217,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-4",
      layer: "far",
      motif: "glassBerry",
      x: 1234,
      y: 258,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-5",
      layer: "mid",
      motif: "cloud",
      x: 1331,
      y: 299,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-6",
      layer: "near",
      motif: "windmill",
      x: 1428,
      y: 340,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-7",
      layer: "mid",
      motif: "grass",
      x: 1525,
      y: 381,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-8",
      layer: "far",
      motif: "gear",
      x: 1622,
      y: 422,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-9",
      layer: "mid",
      motif: "vine",
      x: 1719,
      y: 33,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-10",
      layer: "far",
      motif: "glassBerry",
      x: 1816,
      y: 74,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-11",
      layer: "near",
      motif: "cloud",
      x: 1913,
      y: 115,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-12",
      layer: "far",
      motif: "windmill",
      x: 2010,
      y: 156,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-13",
      layer: "mid",
      motif: "grass",
      x: 2107,
      y: 197,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-14",
      layer: "far",
      motif: "gear",
      x: 2204,
      y: 238,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-15",
      layer: "mid",
      motif: "vine",
      x: 2301,
      y: 279,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-16",
      layer: "near",
      motif: "glassBerry",
      x: 2398,
      y: 320,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-17",
      layer: "mid",
      motif: "cloud",
      x: 2495,
      y: 361,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-18",
      layer: "far",
      motif: "windmill",
      x: 2592,
      y: 402,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-19",
      layer: "mid",
      motif: "grass",
      x: 2689,
      y: 443,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-20",
      layer: "far",
      motif: "gear",
      x: 2786,
      y: 54,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-21",
      layer: "near",
      motif: "vine",
      x: 2883,
      y: 95,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-22",
      layer: "far",
      motif: "glassBerry",
      x: 2980,
      y: 136,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-23",
      layer: "mid",
      motif: "cloud",
      x: 3077,
      y: 177,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-24",
      layer: "far",
      motif: "windmill",
      x: 3174,
      y: 218,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-25",
      layer: "mid",
      motif: "grass",
      x: 3271,
      y: 259,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-26",
      layer: "near",
      motif: "gear",
      x: 3368,
      y: 300,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-27",
      layer: "mid",
      motif: "vine",
      x: 3465,
      y: 341,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-28",
      layer: "far",
      motif: "glassBerry",
      x: 3562,
      y: 382,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-29",
      layer: "mid",
      motif: "cloud",
      x: 3659,
      y: 423,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-30",
      layer: "far",
      motif: "windmill",
      x: 3756,
      y: 34,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-31",
      layer: "near",
      motif: "grass",
      x: 3853,
      y: 75,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-32",
      layer: "far",
      motif: "gear",
      x: 3950,
      y: 116,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-33",
      layer: "mid",
      motif: "vine",
      x: 4047,
      y: 157,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-34",
      layer: "far",
      motif: "glassBerry",
      x: 4144,
      y: 198,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-35",
      layer: "mid",
      motif: "cloud",
      x: 4241,
      y: 239,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-36",
      layer: "near",
      motif: "windmill",
      x: 4338,
      y: 280,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-37",
      layer: "mid",
      motif: "grass",
      x: 4435,
      y: 321,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-38",
      layer: "far",
      motif: "gear",
      x: 4532,
      y: 362,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-39",
      layer: "mid",
      motif: "vine",
      x: 4629,
      y: 403,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-40",
      layer: "far",
      motif: "glassBerry",
      x: 4726,
      y: 444,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-41",
      layer: "near",
      motif: "cloud",
      x: 4823,
      y: 55,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-42",
      layer: "far",
      motif: "windmill",
      x: 4920,
      y: 96,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-43",
      layer: "mid",
      motif: "grass",
      x: 89,
      y: 137,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-44",
      layer: "far",
      motif: "gear",
      x: 186,
      y: 178,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-45",
      layer: "mid",
      motif: "vine",
      x: 283,
      y: 219,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-46",
      layer: "near",
      motif: "glassBerry",
      x: 380,
      y: 260,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-47",
      layer: "mid",
      motif: "cloud",
      x: 477,
      y: 301,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-48",
      layer: "far",
      motif: "windmill",
      x: 574,
      y: 342,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-49",
      layer: "mid",
      motif: "grass",
      x: 671,
      y: 383,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-50",
      layer: "far",
      motif: "gear",
      x: 768,
      y: 424,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-51",
      layer: "near",
      motif: "vine",
      x: 865,
      y: 35,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-52",
      layer: "far",
      motif: "glassBerry",
      x: 962,
      y: 76,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-53",
      layer: "mid",
      motif: "cloud",
      x: 1059,
      y: 117,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-54",
      layer: "far",
      motif: "windmill",
      x: 1156,
      y: 158,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-55",
      layer: "mid",
      motif: "grass",
      x: 1253,
      y: 199,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-56",
      layer: "near",
      motif: "gear",
      x: 1350,
      y: 240,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-57",
      layer: "mid",
      motif: "vine",
      x: 1447,
      y: 281,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-58",
      layer: "far",
      motif: "glassBerry",
      x: 1544,
      y: 322,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-59",
      layer: "mid",
      motif: "cloud",
      x: 1641,
      y: 363,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-60",
      layer: "far",
      motif: "windmill",
      x: 1738,
      y: 404,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-61",
      layer: "near",
      motif: "grass",
      x: 1835,
      y: 445,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-62",
      layer: "far",
      motif: "gear",
      x: 1932,
      y: 56,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-63",
      layer: "mid",
      motif: "vine",
      x: 2029,
      y: 97,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-64",
      layer: "far",
      motif: "glassBerry",
      x: 2126,
      y: 138,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-65",
      layer: "mid",
      motif: "cloud",
      x: 2223,
      y: 179,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-66",
      layer: "near",
      motif: "windmill",
      x: 2320,
      y: 220,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-67",
      layer: "mid",
      motif: "grass",
      x: 2417,
      y: 261,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-68",
      layer: "far",
      motif: "gear",
      x: 2514,
      y: 302,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-69",
      layer: "mid",
      motif: "vine",
      x: 2611,
      y: 343,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-70",
      layer: "far",
      motif: "glassBerry",
      x: 2708,
      y: 384,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-71",
      layer: "near",
      motif: "cloud",
      x: 2805,
      y: 425,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-72",
      layer: "far",
      motif: "windmill",
      x: 2902,
      y: 36,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-73",
      layer: "mid",
      motif: "grass",
      x: 2999,
      y: 77,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-74",
      layer: "far",
      motif: "gear",
      x: 3096,
      y: 118,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-75",
      layer: "mid",
      motif: "vine",
      x: 3193,
      y: 159,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-76",
      layer: "near",
      motif: "glassBerry",
      x: 3290,
      y: 200,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-77",
      layer: "mid",
      motif: "cloud",
      x: 3387,
      y: 241,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-78",
      layer: "far",
      motif: "windmill",
      x: 3484,
      y: 282,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-79",
      layer: "mid",
      motif: "grass",
      x: 3581,
      y: 323,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-80",
      layer: "far",
      motif: "gear",
      x: 3678,
      y: 364,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-81",
      layer: "near",
      motif: "vine",
      x: 3775,
      y: 405,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-82",
      layer: "far",
      motif: "glassBerry",
      x: 3872,
      y: 446,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-83",
      layer: "mid",
      motif: "cloud",
      x: 3969,
      y: 57,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-84",
      layer: "far",
      motif: "windmill",
      x: 4066,
      y: 98,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-85",
      layer: "mid",
      motif: "grass",
      x: 4163,
      y: 139,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-86",
      layer: "near",
      motif: "gear",
      x: 4260,
      y: 180,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-87",
      layer: "mid",
      motif: "vine",
      x: 4357,
      y: 221,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-88",
      layer: "far",
      motif: "glassBerry",
      x: 4454,
      y: 262,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-89",
      layer: "mid",
      motif: "cloud",
      x: 4551,
      y: 303,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-90",
      layer: "far",
      motif: "windmill",
      x: 4648,
      y: 344,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-91",
      layer: "near",
      motif: "grass",
      x: 4745,
      y: 385,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-92",
      layer: "far",
      motif: "gear",
      x: 4842,
      y: 426,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-93",
      layer: "mid",
      motif: "vine",
      x: 11,
      y: 37,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-94",
      layer: "far",
      motif: "glassBerry",
      x: 108,
      y: 78,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-95",
      layer: "mid",
      motif: "cloud",
      x: 205,
      y: 119,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-96",
      layer: "near",
      motif: "windmill",
      x: 302,
      y: 160,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-97",
      layer: "mid",
      motif: "grass",
      x: 399,
      y: 201,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-98",
      layer: "far",
      motif: "gear",
      x: 496,
      y: 242,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-99",
      layer: "mid",
      motif: "vine",
      x: 593,
      y: 283,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-100",
      layer: "far",
      motif: "glassBerry",
      x: 690,
      y: 324,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-101",
      layer: "near",
      motif: "cloud",
      x: 787,
      y: 365,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-102",
      layer: "far",
      motif: "windmill",
      x: 884,
      y: 406,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-103",
      layer: "mid",
      motif: "grass",
      x: 981,
      y: 447,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-104",
      layer: "far",
      motif: "gear",
      x: 1078,
      y: 58,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-105",
      layer: "mid",
      motif: "vine",
      x: 1175,
      y: 99,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-106",
      layer: "near",
      motif: "glassBerry",
      x: 1272,
      y: 140,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-107",
      layer: "mid",
      motif: "cloud",
      x: 1369,
      y: 181,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-108",
      layer: "far",
      motif: "windmill",
      x: 1466,
      y: 222,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-109",
      layer: "mid",
      motif: "grass",
      x: 1563,
      y: 263,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-110",
      layer: "far",
      motif: "gear",
      x: 1660,
      y: 304,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-111",
      layer: "near",
      motif: "vine",
      x: 1757,
      y: 345,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-112",
      layer: "far",
      motif: "glassBerry",
      x: 1854,
      y: 386,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-113",
      layer: "mid",
      motif: "cloud",
      x: 1951,
      y: 427,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-114",
      layer: "far",
      motif: "windmill",
      x: 2048,
      y: 38,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-115",
      layer: "mid",
      motif: "grass",
      x: 2145,
      y: 79,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-116",
      layer: "near",
      motif: "gear",
      x: 2242,
      y: 120,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-117",
      layer: "mid",
      motif: "vine",
      x: 2339,
      y: 161,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-118",
      layer: "far",
      motif: "glassBerry",
      x: 2436,
      y: 202,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-119",
      layer: "mid",
      motif: "cloud",
      x: 2533,
      y: 243,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-120",
      layer: "far",
      motif: "windmill",
      x: 2630,
      y: 284,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-121",
      layer: "near",
      motif: "grass",
      x: 2727,
      y: 325,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-122",
      layer: "far",
      motif: "gear",
      x: 2824,
      y: 366,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-123",
      layer: "mid",
      motif: "vine",
      x: 2921,
      y: 407,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-124",
      layer: "far",
      motif: "glassBerry",
      x: 3018,
      y: 448,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-125",
      layer: "mid",
      motif: "cloud",
      x: 3115,
      y: 59,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-126",
      layer: "near",
      motif: "windmill",
      x: 3212,
      y: 100,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-127",
      layer: "mid",
      motif: "grass",
      x: 3309,
      y: 141,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-128",
      layer: "far",
      motif: "gear",
      x: 3406,
      y: 182,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-129",
      layer: "mid",
      motif: "vine",
      x: 3503,
      y: 223,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-130",
      layer: "far",
      motif: "glassBerry",
      x: 3600,
      y: 264,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-131",
      layer: "near",
      motif: "cloud",
      x: 3697,
      y: 305,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-132",
      layer: "far",
      motif: "windmill",
      x: 3794,
      y: 346,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-133",
      layer: "mid",
      motif: "grass",
      x: 3891,
      y: 387,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-134",
      layer: "far",
      motif: "gear",
      x: 3988,
      y: 428,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-135",
      layer: "mid",
      motif: "vine",
      x: 4085,
      y: 39,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-136",
      layer: "near",
      motif: "glassBerry",
      x: 4182,
      y: 80,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-137",
      layer: "mid",
      motif: "cloud",
      x: 4279,
      y: 121,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-138",
      layer: "far",
      motif: "windmill",
      x: 4376,
      y: 162,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-139",
      layer: "mid",
      motif: "grass",
      x: 4473,
      y: 203,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-140",
      layer: "far",
      motif: "gear",
      x: 4570,
      y: 244,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-141",
      layer: "near",
      motif: "vine",
      x: 4667,
      y: 285,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-142",
      layer: "far",
      motif: "glassBerry",
      x: 4764,
      y: 326,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-143",
      layer: "mid",
      motif: "cloud",
      x: 4861,
      y: 367,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-144",
      layer: "far",
      motif: "windmill",
      x: 30,
      y: 408,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-145",
      layer: "mid",
      motif: "grass",
      x: 127,
      y: 449,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-146",
      layer: "near",
      motif: "gear",
      x: 224,
      y: 60,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-147",
      layer: "mid",
      motif: "vine",
      x: 321,
      y: 101,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-148",
      layer: "far",
      motif: "glassBerry",
      x: 418,
      y: 142,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-149",
      layer: "mid",
      motif: "cloud",
      x: 515,
      y: 183,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-150",
      layer: "far",
      motif: "windmill",
      x: 612,
      y: 224,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-151",
      layer: "near",
      motif: "grass",
      x: 709,
      y: 265,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-152",
      layer: "far",
      motif: "gear",
      x: 806,
      y: 306,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-153",
      layer: "mid",
      motif: "vine",
      x: 903,
      y: 347,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-154",
      layer: "far",
      motif: "glassBerry",
      x: 1000,
      y: 388,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-155",
      layer: "mid",
      motif: "cloud",
      x: 1097,
      y: 429,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-156",
      layer: "near",
      motif: "windmill",
      x: 1194,
      y: 40,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-157",
      layer: "mid",
      motif: "grass",
      x: 1291,
      y: 81,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-158",
      layer: "far",
      motif: "gear",
      x: 1388,
      y: 122,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-159",
      layer: "mid",
      motif: "vine",
      x: 1485,
      y: 163,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-160",
      layer: "far",
      motif: "glassBerry",
      x: 1582,
      y: 204,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-161",
      layer: "near",
      motif: "cloud",
      x: 1679,
      y: 245,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-162",
      layer: "far",
      motif: "windmill",
      x: 1776,
      y: 286,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-163",
      layer: "mid",
      motif: "grass",
      x: 1873,
      y: 327,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-164",
      layer: "far",
      motif: "gear",
      x: 1970,
      y: 368,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-165",
      layer: "mid",
      motif: "vine",
      x: 2067,
      y: 409,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-166",
      layer: "near",
      motif: "glassBerry",
      x: 2164,
      y: 450,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-167",
      layer: "mid",
      motif: "cloud",
      x: 2261,
      y: 61,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-168",
      layer: "far",
      motif: "windmill",
      x: 2358,
      y: 102,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-169",
      layer: "mid",
      motif: "grass",
      x: 2455,
      y: 143,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-170",
      layer: "far",
      motif: "gear",
      x: 2552,
      y: 184,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-42-171",
      layer: "near",
      motif: "vine",
      x: 2649,
      y: 225,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-172",
      layer: "far",
      motif: "glassBerry",
      x: 2746,
      y: 266,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-42-173",
      layer: "mid",
      motif: "cloud",
      x: 2843,
      y: 307,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-42-174",
      layer: "far",
      motif: "windmill",
      x: 2940,
      y: 348,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-42-175",
      layer: "mid",
      motif: "grass",
      x: 3037,
      y: 389,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-42-176",
      layer: "near",
      motif: "gear",
      x: 3134,
      y: 430,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-42-177",
      layer: "mid",
      motif: "vine",
      x: 3231,
      y: 41,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-42-178",
      layer: "far",
      motif: "glassBerry",
      x: 3328,
      y: 82,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-42-179",
      layer: "mid",
      motif: "cloud",
      x: 3425,
      y: 123,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-42-180",
      layer: "far",
      motif: "windmill",
      x: 3522,
      y: 164,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-42",
    x: 4736,
    y: 448,
    nextLevelId: "final-crown"
  }
};
