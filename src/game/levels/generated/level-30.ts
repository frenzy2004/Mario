import type { LevelDefinition } from "../schema";

export const LEVEL_30: LevelDefinition = {
  id: "level-30",
  index: 29,
  title: "Aurora Conservatory 02",
  chapter: "Aurora Conservatory",
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
    "...........=======.......................===...........................====..........................=====.........................======.................",
    "....................................#######.......................###...........................####..........................#####.......................",
    "...............................######........................#######.......................###...........................####.............................",
    "..........................=====.........................======........................=======.......................===...................................",
    ".....................####..........................#####.........................######........................#######.......................###..........",
    "................###...........................W###..........................#####.W.......................######......W.................#######...........",
    ".....................................S...................................S...................................S............................................",
    "...P........................W...................................W...................................W...................................W...........G.....",
    "...................S...................................S...................................S...................................S..........................",
    "^################^....##########...###########..###^########....####^#####...########^##..############....##########...^##########..####^################^",
    "##################.^.^##########.^.###########.^############.^.^##########.^.###########.^############.^.^##########.^.###########.^######################"
  ],
  enemies: [
    {
      id: "enemy-30-1",
      kind: "turret",
      x: 532,
      y: 448,
      patrolMin: 437,
      patrolMax: 652,
      speed: 104,
      phase: 29
    },
    {
      id: "enemy-30-2",
      kind: "beetle",
      x: 862,
      y: 416,
      patrolMin: 749,
      patrolMax: 1004,
      speed: 44,
      phase: 32
    },
    {
      id: "enemy-30-3",
      kind: "acorn",
      x: 1192,
      y: 384,
      patrolMin: 1061,
      patrolMax: 1356,
      speed: 56,
      phase: 35
    },
    {
      id: "enemy-30-4",
      kind: "lantern",
      x: 1522,
      y: 352,
      patrolMin: 1373,
      patrolMax: 1708,
      speed: 68,
      phase: 38
    },
    {
      id: "enemy-30-5",
      kind: "charger",
      x: 1852,
      y: 320,
      patrolMin: 1757,
      patrolMax: 2060,
      speed: 80,
      phase: 41
    },
    {
      id: "enemy-30-6",
      kind: "spiker",
      x: 2182,
      y: 448,
      patrolMin: 2069,
      patrolMax: 2302,
      speed: 92,
      phase: 44
    },
    {
      id: "enemy-30-7",
      kind: "turret",
      x: 2512,
      y: 416,
      patrolMin: 2381,
      patrolMax: 2654,
      speed: 104,
      phase: 47
    },
    {
      id: "enemy-30-8",
      kind: "beetle",
      x: 2842,
      y: 384,
      patrolMin: 2693,
      patrolMax: 3006,
      speed: 44,
      phase: 50
    },
    {
      id: "enemy-30-9",
      kind: "acorn",
      x: 3172,
      y: 352,
      patrolMin: 3077,
      patrolMax: 3358,
      speed: 56,
      phase: 53
    },
    {
      id: "enemy-30-10",
      kind: "lantern",
      x: 3502,
      y: 320,
      patrolMin: 3389,
      patrolMax: 3710,
      speed: 68,
      phase: 56
    },
    {
      id: "enemy-30-11",
      kind: "charger",
      x: 3832,
      y: 448,
      patrolMin: 3701,
      patrolMax: 3952,
      speed: 80,
      phase: 59
    },
    {
      id: "enemy-30-12",
      kind: "spiker",
      x: 4162,
      y: 416,
      patrolMin: 4013,
      patrolMax: 4304,
      speed: 92,
      phase: 62
    },
    {
      id: "enemy-30-13",
      kind: "turret",
      x: 4492,
      y: 384,
      patrolMin: 4397,
      patrolMax: 4656,
      speed: 104,
      phase: 65
    },
    {
      id: "enemy-30-14",
      kind: "beetle",
      x: 4822,
      y: 352,
      patrolMin: 4709,
      patrolMax: 4748,
      speed: 44,
      phase: 68
    },
    {
      id: "enemy-30-15",
      kind: "acorn",
      x: 5152,
      y: 320,
      patrolMin: 5021,
      patrolMax: 4748,
      speed: 56,
      phase: 71
    },
    {
      id: "enemy-30-16",
      kind: "lantern",
      x: 5482,
      y: 448,
      patrolMin: 5333,
      patrolMax: 4748,
      speed: 68,
      phase: 74
    },
    {
      id: "enemy-30-17",
      kind: "charger",
      x: 5812,
      y: 416,
      patrolMin: 5717,
      patrolMax: 4748,
      speed: 80,
      phase: 77
    }
  ],
  collectibles: [
    {
      id: "collectible-30-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 192,
      y: 162
    },
    {
      id: "collectible-30-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 262,
      y: 182
    },
    {
      id: "collectible-30-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 332,
      y: 235
    },
    {
      id: "collectible-30-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 402,
      y: 288
    },
    {
      id: "collectible-30-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 472,
      y: 308
    },
    {
      id: "collectible-30-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 542,
      y: 361
    },
    {
      id: "collectible-30-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 612,
      y: 414
    },
    {
      id: "collectible-30-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 682,
      y: 140
    },
    {
      id: "collectible-30-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 752,
      y: 193
    },
    {
      id: "collectible-30-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 822,
      y: 246
    },
    {
      id: "collectible-30-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 892,
      y: 266
    },
    {
      id: "collectible-30-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 962,
      y: 319
    },
    {
      id: "collectible-30-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1032,
      y: 372
    },
    {
      id: "collectible-30-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1102,
      y: 392
    },
    {
      id: "collectible-30-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1172,
      y: 151
    },
    {
      id: "collectible-30-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1242,
      y: 204
    },
    {
      id: "collectible-30-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1312,
      y: 224
    },
    {
      id: "collectible-30-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1382,
      y: 277
    },
    {
      id: "collectible-30-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1452,
      y: 330
    },
    {
      id: "collectible-30-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1522,
      y: 350
    },
    {
      id: "collectible-30-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1592,
      y: 403
    },
    {
      id: "collectible-30-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1662,
      y: 162
    },
    {
      id: "collectible-30-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1732,
      y: 182
    },
    {
      id: "collectible-30-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1802,
      y: 235
    },
    {
      id: "collectible-30-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1872,
      y: 288
    },
    {
      id: "collectible-30-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1942,
      y: 308
    },
    {
      id: "collectible-30-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2012,
      y: 361
    },
    {
      id: "collectible-30-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2082,
      y: 414
    },
    {
      id: "collectible-30-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2152,
      y: 140
    },
    {
      id: "collectible-30-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2222,
      y: 193
    },
    {
      id: "collectible-30-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2292,
      y: 246
    },
    {
      id: "collectible-30-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2362,
      y: 266
    },
    {
      id: "collectible-30-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2432,
      y: 319
    },
    {
      id: "collectible-30-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2502,
      y: 372
    },
    {
      id: "collectible-30-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2572,
      y: 392
    },
    {
      id: "collectible-30-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2642,
      y: 151
    },
    {
      id: "collectible-30-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2712,
      y: 204
    },
    {
      id: "collectible-30-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2782,
      y: 224
    },
    {
      id: "collectible-30-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2852,
      y: 277
    },
    {
      id: "collectible-30-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2922,
      y: 330
    },
    {
      id: "collectible-30-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2992,
      y: 350
    },
    {
      id: "collectible-30-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3062,
      y: 403
    },
    {
      id: "collectible-30-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3132,
      y: 162
    },
    {
      id: "collectible-30-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3202,
      y: 182
    },
    {
      id: "collectible-30-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3272,
      y: 235
    },
    {
      id: "collectible-30-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3342,
      y: 288
    },
    {
      id: "collectible-30-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3412,
      y: 308
    },
    {
      id: "collectible-30-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3482,
      y: 361
    },
    {
      id: "collectible-30-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3552,
      y: 414
    },
    {
      id: "collectible-30-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3622,
      y: 140
    },
    {
      id: "collectible-30-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3692,
      y: 193
    },
    {
      id: "collectible-30-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3762,
      y: 246
    },
    {
      id: "collectible-30-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3832,
      y: 266
    },
    {
      id: "collectible-30-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3902,
      y: 319
    },
    {
      id: "collectible-30-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3972,
      y: 372
    },
    {
      id: "collectible-30-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4042,
      y: 392
    },
    {
      id: "collectible-30-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4112,
      y: 151
    },
    {
      id: "collectible-30-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4182,
      y: 204
    },
    {
      id: "collectible-30-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4252,
      y: 224
    },
    {
      id: "collectible-30-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4322,
      y: 277
    },
    {
      id: "collectible-30-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4392,
      y: 330
    },
    {
      id: "collectible-30-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4462,
      y: 350
    },
    {
      id: "collectible-30-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4532,
      y: 403
    },
    {
      id: "collectible-30-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4602,
      y: 162
    },
    {
      id: "collectible-30-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4672,
      y: 182
    },
    {
      id: "collectible-30-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4742,
      y: 235
    },
    {
      id: "collectible-30-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4812,
      y: 288
    },
    {
      id: "collectible-30-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4882,
      y: 308
    },
    {
      id: "collectible-30-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4952,
      y: 361
    },
    {
      id: "collectible-30-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5022,
      y: 414
    }
  ],
  powerups: [
    {
      id: "powerup-30-1",
      kind: "springBoots",
      durationMs: 4800,
      x: 650,
      y: 130
    },
    {
      id: "powerup-30-2",
      kind: "starburst",
      durationMs: 5700,
      x: 1480,
      y: 182
    },
    {
      id: "powerup-30-3",
      kind: "gliderLeaf",
      durationMs: 6600,
      x: 2310,
      y: 234
    },
    {
      id: "powerup-30-4",
      kind: "shield",
      durationMs: 7500,
      x: 3140,
      y: 286
    },
    {
      id: "powerup-30-5",
      kind: "springBoots",
      durationMs: 4800,
      x: 3970,
      y: 338
    },
    {
      id: "powerup-30-6",
      kind: "starburst",
      durationMs: 5700,
      x: 4800,
      y: 130
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-30-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 2.9000000000000004
    },
    {
      id: "moving-platform-30-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 3.6000000000000005
    },
    {
      id: "moving-platform-30-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 4.300000000000001
    },
    {
      id: "moving-platform-30-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 5
    },
    {
      id: "moving-platform-30-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 5.7
    },
    {
      id: "moving-platform-30-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 6.4
    },
    {
      id: "moving-platform-30-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 7.1
    },
    {
      id: "moving-platform-30-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 7.8
    },
    {
      id: "moving-platform-30-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 8.5
    },
    {
      id: "moving-platform-30-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 9.2
    },
    {
      id: "moving-platform-30-11",
      x: 6040,
      y: 250,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 9.9
    }
  ],
  hazards: [
    {
      id: "hazard-30-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 29
    },
    {
      id: "hazard-30-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 30
    },
    {
      id: "hazard-30-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 31
    },
    {
      id: "hazard-30-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 32
    },
    {
      id: "hazard-30-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 33
    },
    {
      id: "hazard-30-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 34
    },
    {
      id: "hazard-30-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 35
    },
    {
      id: "hazard-30-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 36
    },
    {
      id: "hazard-30-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 37
    },
    {
      id: "hazard-30-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 38
    },
    {
      id: "hazard-30-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 39
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-30-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-30-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-30-1",
      x: 708,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-30-2",
      x: 1478,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-30-3",
      x: 2248,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-30-4",
      x: 3018,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-30-5",
      x: 3788,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-30-6",
      x: 4558,
      y: 384,
      power: 1.46
    }
  ],
  windZones: [
    {
      id: "wind-30-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-30-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-30-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-30-4",
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
      id: "decor-30-1",
      layer: "near",
      motif: "grass",
      x: 667,
      y: 409,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-2",
      layer: "far",
      motif: "gear",
      x: 764,
      y: 450,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-3",
      layer: "mid",
      motif: "vine",
      x: 861,
      y: 61,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-4",
      layer: "far",
      motif: "glassBerry",
      x: 958,
      y: 102,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-5",
      layer: "mid",
      motif: "cloud",
      x: 1055,
      y: 143,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-6",
      layer: "near",
      motif: "windmill",
      x: 1152,
      y: 184,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-7",
      layer: "mid",
      motif: "grass",
      x: 1249,
      y: 225,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-8",
      layer: "far",
      motif: "gear",
      x: 1346,
      y: 266,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-9",
      layer: "mid",
      motif: "vine",
      x: 1443,
      y: 307,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-10",
      layer: "far",
      motif: "glassBerry",
      x: 1540,
      y: 348,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-11",
      layer: "near",
      motif: "cloud",
      x: 1637,
      y: 389,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-12",
      layer: "far",
      motif: "windmill",
      x: 1734,
      y: 430,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-13",
      layer: "mid",
      motif: "grass",
      x: 1831,
      y: 41,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-14",
      layer: "far",
      motif: "gear",
      x: 1928,
      y: 82,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-15",
      layer: "mid",
      motif: "vine",
      x: 2025,
      y: 123,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-16",
      layer: "near",
      motif: "glassBerry",
      x: 2122,
      y: 164,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-17",
      layer: "mid",
      motif: "cloud",
      x: 2219,
      y: 205,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-18",
      layer: "far",
      motif: "windmill",
      x: 2316,
      y: 246,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-19",
      layer: "mid",
      motif: "grass",
      x: 2413,
      y: 287,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-20",
      layer: "far",
      motif: "gear",
      x: 2510,
      y: 328,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-21",
      layer: "near",
      motif: "vine",
      x: 2607,
      y: 369,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-22",
      layer: "far",
      motif: "glassBerry",
      x: 2704,
      y: 410,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-23",
      layer: "mid",
      motif: "cloud",
      x: 2801,
      y: 451,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-24",
      layer: "far",
      motif: "windmill",
      x: 2898,
      y: 62,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-25",
      layer: "mid",
      motif: "grass",
      x: 2995,
      y: 103,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-26",
      layer: "near",
      motif: "gear",
      x: 3092,
      y: 144,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-27",
      layer: "mid",
      motif: "vine",
      x: 3189,
      y: 185,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-28",
      layer: "far",
      motif: "glassBerry",
      x: 3286,
      y: 226,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-29",
      layer: "mid",
      motif: "cloud",
      x: 3383,
      y: 267,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-30",
      layer: "far",
      motif: "windmill",
      x: 3480,
      y: 308,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-31",
      layer: "near",
      motif: "grass",
      x: 3577,
      y: 349,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-32",
      layer: "far",
      motif: "gear",
      x: 3674,
      y: 390,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-33",
      layer: "mid",
      motif: "vine",
      x: 3771,
      y: 431,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-34",
      layer: "far",
      motif: "glassBerry",
      x: 3868,
      y: 42,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-35",
      layer: "mid",
      motif: "cloud",
      x: 3965,
      y: 83,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-36",
      layer: "near",
      motif: "windmill",
      x: 4062,
      y: 124,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-37",
      layer: "mid",
      motif: "grass",
      x: 4159,
      y: 165,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-38",
      layer: "far",
      motif: "gear",
      x: 4256,
      y: 206,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-39",
      layer: "mid",
      motif: "vine",
      x: 4353,
      y: 247,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-40",
      layer: "far",
      motif: "glassBerry",
      x: 4450,
      y: 288,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-41",
      layer: "near",
      motif: "cloud",
      x: 4547,
      y: 329,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-42",
      layer: "far",
      motif: "windmill",
      x: 4644,
      y: 370,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-43",
      layer: "mid",
      motif: "grass",
      x: 4741,
      y: 411,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-44",
      layer: "far",
      motif: "gear",
      x: 4838,
      y: 452,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-45",
      layer: "mid",
      motif: "vine",
      x: 7,
      y: 63,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-46",
      layer: "near",
      motif: "glassBerry",
      x: 104,
      y: 104,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-47",
      layer: "mid",
      motif: "cloud",
      x: 201,
      y: 145,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-48",
      layer: "far",
      motif: "windmill",
      x: 298,
      y: 186,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-49",
      layer: "mid",
      motif: "grass",
      x: 395,
      y: 227,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-50",
      layer: "far",
      motif: "gear",
      x: 492,
      y: 268,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-51",
      layer: "near",
      motif: "vine",
      x: 589,
      y: 309,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-52",
      layer: "far",
      motif: "glassBerry",
      x: 686,
      y: 350,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-53",
      layer: "mid",
      motif: "cloud",
      x: 783,
      y: 391,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-54",
      layer: "far",
      motif: "windmill",
      x: 880,
      y: 432,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-55",
      layer: "mid",
      motif: "grass",
      x: 977,
      y: 43,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-56",
      layer: "near",
      motif: "gear",
      x: 1074,
      y: 84,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-57",
      layer: "mid",
      motif: "vine",
      x: 1171,
      y: 125,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-58",
      layer: "far",
      motif: "glassBerry",
      x: 1268,
      y: 166,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-59",
      layer: "mid",
      motif: "cloud",
      x: 1365,
      y: 207,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-60",
      layer: "far",
      motif: "windmill",
      x: 1462,
      y: 248,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-61",
      layer: "near",
      motif: "grass",
      x: 1559,
      y: 289,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-62",
      layer: "far",
      motif: "gear",
      x: 1656,
      y: 330,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-63",
      layer: "mid",
      motif: "vine",
      x: 1753,
      y: 371,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-64",
      layer: "far",
      motif: "glassBerry",
      x: 1850,
      y: 412,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-65",
      layer: "mid",
      motif: "cloud",
      x: 1947,
      y: 453,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-66",
      layer: "near",
      motif: "windmill",
      x: 2044,
      y: 64,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-67",
      layer: "mid",
      motif: "grass",
      x: 2141,
      y: 105,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-68",
      layer: "far",
      motif: "gear",
      x: 2238,
      y: 146,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-69",
      layer: "mid",
      motif: "vine",
      x: 2335,
      y: 187,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-70",
      layer: "far",
      motif: "glassBerry",
      x: 2432,
      y: 228,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-71",
      layer: "near",
      motif: "cloud",
      x: 2529,
      y: 269,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-72",
      layer: "far",
      motif: "windmill",
      x: 2626,
      y: 310,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-73",
      layer: "mid",
      motif: "grass",
      x: 2723,
      y: 351,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-74",
      layer: "far",
      motif: "gear",
      x: 2820,
      y: 392,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-75",
      layer: "mid",
      motif: "vine",
      x: 2917,
      y: 433,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-76",
      layer: "near",
      motif: "glassBerry",
      x: 3014,
      y: 44,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-77",
      layer: "mid",
      motif: "cloud",
      x: 3111,
      y: 85,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-78",
      layer: "far",
      motif: "windmill",
      x: 3208,
      y: 126,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-79",
      layer: "mid",
      motif: "grass",
      x: 3305,
      y: 167,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-80",
      layer: "far",
      motif: "gear",
      x: 3402,
      y: 208,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-81",
      layer: "near",
      motif: "vine",
      x: 3499,
      y: 249,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-82",
      layer: "far",
      motif: "glassBerry",
      x: 3596,
      y: 290,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-83",
      layer: "mid",
      motif: "cloud",
      x: 3693,
      y: 331,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-84",
      layer: "far",
      motif: "windmill",
      x: 3790,
      y: 372,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-85",
      layer: "mid",
      motif: "grass",
      x: 3887,
      y: 413,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-86",
      layer: "near",
      motif: "gear",
      x: 3984,
      y: 454,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-87",
      layer: "mid",
      motif: "vine",
      x: 4081,
      y: 65,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-88",
      layer: "far",
      motif: "glassBerry",
      x: 4178,
      y: 106,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-89",
      layer: "mid",
      motif: "cloud",
      x: 4275,
      y: 147,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-90",
      layer: "far",
      motif: "windmill",
      x: 4372,
      y: 188,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-91",
      layer: "near",
      motif: "grass",
      x: 4469,
      y: 229,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-92",
      layer: "far",
      motif: "gear",
      x: 4566,
      y: 270,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-93",
      layer: "mid",
      motif: "vine",
      x: 4663,
      y: 311,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-94",
      layer: "far",
      motif: "glassBerry",
      x: 4760,
      y: 352,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-95",
      layer: "mid",
      motif: "cloud",
      x: 4857,
      y: 393,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-96",
      layer: "near",
      motif: "windmill",
      x: 26,
      y: 434,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-97",
      layer: "mid",
      motif: "grass",
      x: 123,
      y: 45,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-98",
      layer: "far",
      motif: "gear",
      x: 220,
      y: 86,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-99",
      layer: "mid",
      motif: "vine",
      x: 317,
      y: 127,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-100",
      layer: "far",
      motif: "glassBerry",
      x: 414,
      y: 168,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-101",
      layer: "near",
      motif: "cloud",
      x: 511,
      y: 209,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-102",
      layer: "far",
      motif: "windmill",
      x: 608,
      y: 250,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-103",
      layer: "mid",
      motif: "grass",
      x: 705,
      y: 291,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-104",
      layer: "far",
      motif: "gear",
      x: 802,
      y: 332,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-105",
      layer: "mid",
      motif: "vine",
      x: 899,
      y: 373,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-106",
      layer: "near",
      motif: "glassBerry",
      x: 996,
      y: 414,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-107",
      layer: "mid",
      motif: "cloud",
      x: 1093,
      y: 455,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-108",
      layer: "far",
      motif: "windmill",
      x: 1190,
      y: 66,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-109",
      layer: "mid",
      motif: "grass",
      x: 1287,
      y: 107,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-110",
      layer: "far",
      motif: "gear",
      x: 1384,
      y: 148,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-111",
      layer: "near",
      motif: "vine",
      x: 1481,
      y: 189,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-112",
      layer: "far",
      motif: "glassBerry",
      x: 1578,
      y: 230,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-113",
      layer: "mid",
      motif: "cloud",
      x: 1675,
      y: 271,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-114",
      layer: "far",
      motif: "windmill",
      x: 1772,
      y: 312,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-115",
      layer: "mid",
      motif: "grass",
      x: 1869,
      y: 353,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-116",
      layer: "near",
      motif: "gear",
      x: 1966,
      y: 394,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-117",
      layer: "mid",
      motif: "vine",
      x: 2063,
      y: 435,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-118",
      layer: "far",
      motif: "glassBerry",
      x: 2160,
      y: 46,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-119",
      layer: "mid",
      motif: "cloud",
      x: 2257,
      y: 87,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-120",
      layer: "far",
      motif: "windmill",
      x: 2354,
      y: 128,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-121",
      layer: "near",
      motif: "grass",
      x: 2451,
      y: 169,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-122",
      layer: "far",
      motif: "gear",
      x: 2548,
      y: 210,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-123",
      layer: "mid",
      motif: "vine",
      x: 2645,
      y: 251,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-124",
      layer: "far",
      motif: "glassBerry",
      x: 2742,
      y: 292,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-125",
      layer: "mid",
      motif: "cloud",
      x: 2839,
      y: 333,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-126",
      layer: "near",
      motif: "windmill",
      x: 2936,
      y: 374,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-127",
      layer: "mid",
      motif: "grass",
      x: 3033,
      y: 415,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-128",
      layer: "far",
      motif: "gear",
      x: 3130,
      y: 456,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-129",
      layer: "mid",
      motif: "vine",
      x: 3227,
      y: 67,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-130",
      layer: "far",
      motif: "glassBerry",
      x: 3324,
      y: 108,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-131",
      layer: "near",
      motif: "cloud",
      x: 3421,
      y: 149,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-132",
      layer: "far",
      motif: "windmill",
      x: 3518,
      y: 190,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-133",
      layer: "mid",
      motif: "grass",
      x: 3615,
      y: 231,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-134",
      layer: "far",
      motif: "gear",
      x: 3712,
      y: 272,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-135",
      layer: "mid",
      motif: "vine",
      x: 3809,
      y: 313,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-136",
      layer: "near",
      motif: "glassBerry",
      x: 3906,
      y: 354,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-137",
      layer: "mid",
      motif: "cloud",
      x: 4003,
      y: 395,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-138",
      layer: "far",
      motif: "windmill",
      x: 4100,
      y: 436,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-139",
      layer: "mid",
      motif: "grass",
      x: 4197,
      y: 47,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-140",
      layer: "far",
      motif: "gear",
      x: 4294,
      y: 88,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-141",
      layer: "near",
      motif: "vine",
      x: 4391,
      y: 129,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-142",
      layer: "far",
      motif: "glassBerry",
      x: 4488,
      y: 170,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-143",
      layer: "mid",
      motif: "cloud",
      x: 4585,
      y: 211,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-144",
      layer: "far",
      motif: "windmill",
      x: 4682,
      y: 252,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-145",
      layer: "mid",
      motif: "grass",
      x: 4779,
      y: 293,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-146",
      layer: "near",
      motif: "gear",
      x: 4876,
      y: 334,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-147",
      layer: "mid",
      motif: "vine",
      x: 45,
      y: 375,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-148",
      layer: "far",
      motif: "glassBerry",
      x: 142,
      y: 416,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-149",
      layer: "mid",
      motif: "cloud",
      x: 239,
      y: 457,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-150",
      layer: "far",
      motif: "windmill",
      x: 336,
      y: 68,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-151",
      layer: "near",
      motif: "grass",
      x: 433,
      y: 109,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-152",
      layer: "far",
      motif: "gear",
      x: 530,
      y: 150,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-153",
      layer: "mid",
      motif: "vine",
      x: 627,
      y: 191,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-154",
      layer: "far",
      motif: "glassBerry",
      x: 724,
      y: 232,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-155",
      layer: "mid",
      motif: "cloud",
      x: 821,
      y: 273,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-156",
      layer: "near",
      motif: "windmill",
      x: 918,
      y: 314,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-157",
      layer: "mid",
      motif: "grass",
      x: 1015,
      y: 355,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-158",
      layer: "far",
      motif: "gear",
      x: 1112,
      y: 396,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-159",
      layer: "mid",
      motif: "vine",
      x: 1209,
      y: 437,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-160",
      layer: "far",
      motif: "glassBerry",
      x: 1306,
      y: 48,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-161",
      layer: "near",
      motif: "cloud",
      x: 1403,
      y: 89,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-162",
      layer: "far",
      motif: "windmill",
      x: 1500,
      y: 130,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-163",
      layer: "mid",
      motif: "grass",
      x: 1597,
      y: 171,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-164",
      layer: "far",
      motif: "gear",
      x: 1694,
      y: 212,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-165",
      layer: "mid",
      motif: "vine",
      x: 1791,
      y: 253,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-166",
      layer: "near",
      motif: "glassBerry",
      x: 1888,
      y: 294,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-167",
      layer: "mid",
      motif: "cloud",
      x: 1985,
      y: 335,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-168",
      layer: "far",
      motif: "windmill",
      x: 2082,
      y: 376,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-169",
      layer: "mid",
      motif: "grass",
      x: 2179,
      y: 417,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-170",
      layer: "far",
      motif: "gear",
      x: 2276,
      y: 458,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-30-171",
      layer: "near",
      motif: "vine",
      x: 2373,
      y: 69,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-172",
      layer: "far",
      motif: "glassBerry",
      x: 2470,
      y: 110,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-30-173",
      layer: "mid",
      motif: "cloud",
      x: 2567,
      y: 151,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-30-174",
      layer: "far",
      motif: "windmill",
      x: 2664,
      y: 192,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-30-175",
      layer: "mid",
      motif: "grass",
      x: 2761,
      y: 233,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-30-176",
      layer: "near",
      motif: "gear",
      x: 2858,
      y: 274,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-30-177",
      layer: "mid",
      motif: "vine",
      x: 2955,
      y: 315,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-30-178",
      layer: "far",
      motif: "glassBerry",
      x: 3052,
      y: 356,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-30-179",
      layer: "mid",
      motif: "cloud",
      x: 3149,
      y: 397,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-30-180",
      layer: "far",
      motif: "windmill",
      x: 3246,
      y: 438,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-30",
    x: 4736,
    y: 448,
    nextLevelId: "level-31"
  }
};
