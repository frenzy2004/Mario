import type { LevelDefinition } from "../schema";

export const LEVEL_38: LevelDefinition = {
  id: "level-38",
  index: 37,
  title: "The Warden's Crown 03",
  chapter: "The Warden's Crown",
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
    "...............................####..........................#####.........................######........................#######..........................",
    "..........................===...........................====..........................=====.........................======................................",
    ".....................#######.......................###...........................####..........................#####.........................#####........",
    "................######........................#######.......................###...........................####..........................#####.............",
    "...........=====.........................======........................=======.......................===...........................====...................",
    "....................................#####.W.......................######......W.................#######...........W...........###.........................",
    ".................................S...................................S...................................S................................................",
    "...P....................W...................................W...................................W...................................W...............G.....",
    "...............S...................................S...................................S...................................S..............................",
    "^################^...#############....############..##############...#############....############..##^###########...##^##########....##^################^",
    "##################.^.#############.^.^############.^##############.^.#############.^.^############.^##############.^.#############.^.^####################"
  ],
  enemies: [
    {
      id: "enemy-38-1",
      kind: "acorn",
      x: 476,
      y: 448,
      patrolMin: 381,
      patrolMax: 596,
      speed: 56,
      phase: 37
    },
    {
      id: "enemy-38-2",
      kind: "lantern",
      x: 806,
      y: 416,
      patrolMin: 693,
      patrolMax: 948,
      speed: 68,
      phase: 40
    },
    {
      id: "enemy-38-3",
      kind: "charger",
      x: 1136,
      y: 384,
      patrolMin: 1005,
      patrolMax: 1300,
      speed: 80,
      phase: 43
    },
    {
      id: "enemy-38-4",
      kind: "spiker",
      x: 1466,
      y: 352,
      patrolMin: 1317,
      patrolMax: 1652,
      speed: 92,
      phase: 46
    },
    {
      id: "enemy-38-5",
      kind: "turret",
      x: 1796,
      y: 320,
      patrolMin: 1701,
      patrolMax: 2004,
      speed: 104,
      phase: 49
    },
    {
      id: "enemy-38-6",
      kind: "beetle",
      x: 2126,
      y: 448,
      patrolMin: 2013,
      patrolMax: 2246,
      speed: 44,
      phase: 52
    },
    {
      id: "enemy-38-7",
      kind: "acorn",
      x: 2456,
      y: 416,
      patrolMin: 2325,
      patrolMax: 2598,
      speed: 56,
      phase: 55
    },
    {
      id: "enemy-38-8",
      kind: "lantern",
      x: 2786,
      y: 384,
      patrolMin: 2637,
      patrolMax: 2950,
      speed: 68,
      phase: 58
    },
    {
      id: "enemy-38-9",
      kind: "charger",
      x: 3116,
      y: 352,
      patrolMin: 3021,
      patrolMax: 3302,
      speed: 80,
      phase: 61
    },
    {
      id: "enemy-38-10",
      kind: "spiker",
      x: 3446,
      y: 320,
      patrolMin: 3333,
      patrolMax: 3654,
      speed: 92,
      phase: 64
    },
    {
      id: "enemy-38-11",
      kind: "turret",
      x: 3776,
      y: 448,
      patrolMin: 3645,
      patrolMax: 3896,
      speed: 104,
      phase: 67
    },
    {
      id: "enemy-38-12",
      kind: "beetle",
      x: 4106,
      y: 416,
      patrolMin: 3957,
      patrolMax: 4248,
      speed: 44,
      phase: 70
    },
    {
      id: "enemy-38-13",
      kind: "acorn",
      x: 4436,
      y: 384,
      patrolMin: 4341,
      patrolMax: 4600,
      speed: 56,
      phase: 73
    },
    {
      id: "enemy-38-14",
      kind: "lantern",
      x: 4766,
      y: 352,
      patrolMin: 4653,
      patrolMax: 4748,
      speed: 68,
      phase: 76
    },
    {
      id: "enemy-38-15",
      kind: "charger",
      x: 5096,
      y: 320,
      patrolMin: 4965,
      patrolMax: 4748,
      speed: 80,
      phase: 79
    },
    {
      id: "enemy-38-16",
      kind: "spiker",
      x: 5426,
      y: 448,
      patrolMin: 5277,
      patrolMax: 4748,
      speed: 92,
      phase: 82
    },
    {
      id: "enemy-38-17",
      kind: "turret",
      x: 5756,
      y: 416,
      patrolMin: 5661,
      patrolMax: 4748,
      speed: 104,
      phase: 85
    }
  ],
  collectibles: [
    {
      id: "collectible-38-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 192,
      y: 151
    },
    {
      id: "collectible-38-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 262,
      y: 204
    },
    {
      id: "collectible-38-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 332,
      y: 224
    },
    {
      id: "collectible-38-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 402,
      y: 277
    },
    {
      id: "collectible-38-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 472,
      y: 330
    },
    {
      id: "collectible-38-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 542,
      y: 350
    },
    {
      id: "collectible-38-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 612,
      y: 403
    },
    {
      id: "collectible-38-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 682,
      y: 162
    },
    {
      id: "collectible-38-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 752,
      y: 182
    },
    {
      id: "collectible-38-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 822,
      y: 235
    },
    {
      id: "collectible-38-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 892,
      y: 288
    },
    {
      id: "collectible-38-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 962,
      y: 308
    },
    {
      id: "collectible-38-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1032,
      y: 361
    },
    {
      id: "collectible-38-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1102,
      y: 414
    },
    {
      id: "collectible-38-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1172,
      y: 140
    },
    {
      id: "collectible-38-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1242,
      y: 193
    },
    {
      id: "collectible-38-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1312,
      y: 246
    },
    {
      id: "collectible-38-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1382,
      y: 266
    },
    {
      id: "collectible-38-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1452,
      y: 319
    },
    {
      id: "collectible-38-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1522,
      y: 372
    },
    {
      id: "collectible-38-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1592,
      y: 392
    },
    {
      id: "collectible-38-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1662,
      y: 151
    },
    {
      id: "collectible-38-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1732,
      y: 204
    },
    {
      id: "collectible-38-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1802,
      y: 224
    },
    {
      id: "collectible-38-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1872,
      y: 277
    },
    {
      id: "collectible-38-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1942,
      y: 330
    },
    {
      id: "collectible-38-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2012,
      y: 350
    },
    {
      id: "collectible-38-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2082,
      y: 403
    },
    {
      id: "collectible-38-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2152,
      y: 162
    },
    {
      id: "collectible-38-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2222,
      y: 182
    },
    {
      id: "collectible-38-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2292,
      y: 235
    },
    {
      id: "collectible-38-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2362,
      y: 288
    },
    {
      id: "collectible-38-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2432,
      y: 308
    },
    {
      id: "collectible-38-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2502,
      y: 361
    },
    {
      id: "collectible-38-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2572,
      y: 414
    },
    {
      id: "collectible-38-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2642,
      y: 140
    },
    {
      id: "collectible-38-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2712,
      y: 193
    },
    {
      id: "collectible-38-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2782,
      y: 246
    },
    {
      id: "collectible-38-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2852,
      y: 266
    },
    {
      id: "collectible-38-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2922,
      y: 319
    },
    {
      id: "collectible-38-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2992,
      y: 372
    },
    {
      id: "collectible-38-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3062,
      y: 392
    },
    {
      id: "collectible-38-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3132,
      y: 151
    },
    {
      id: "collectible-38-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3202,
      y: 204
    },
    {
      id: "collectible-38-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3272,
      y: 224
    },
    {
      id: "collectible-38-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3342,
      y: 277
    },
    {
      id: "collectible-38-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3412,
      y: 330
    },
    {
      id: "collectible-38-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3482,
      y: 350
    },
    {
      id: "collectible-38-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3552,
      y: 403
    },
    {
      id: "collectible-38-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3622,
      y: 162
    },
    {
      id: "collectible-38-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3692,
      y: 182
    },
    {
      id: "collectible-38-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3762,
      y: 235
    },
    {
      id: "collectible-38-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3832,
      y: 288
    },
    {
      id: "collectible-38-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3902,
      y: 308
    },
    {
      id: "collectible-38-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3972,
      y: 361
    },
    {
      id: "collectible-38-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4042,
      y: 414
    },
    {
      id: "collectible-38-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4112,
      y: 140
    },
    {
      id: "collectible-38-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4182,
      y: 193
    },
    {
      id: "collectible-38-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4252,
      y: 246
    },
    {
      id: "collectible-38-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4322,
      y: 266
    },
    {
      id: "collectible-38-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4392,
      y: 319
    },
    {
      id: "collectible-38-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4462,
      y: 372
    },
    {
      id: "collectible-38-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4532,
      y: 392
    },
    {
      id: "collectible-38-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4602,
      y: 151
    },
    {
      id: "collectible-38-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4672,
      y: 204
    },
    {
      id: "collectible-38-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4742,
      y: 224
    }
  ],
  powerups: [
    {
      id: "powerup-38-1",
      kind: "springBoots",
      durationMs: 4800,
      x: 530,
      y: 130
    },
    {
      id: "powerup-38-2",
      kind: "starburst",
      durationMs: 5700,
      x: 1360,
      y: 182
    },
    {
      id: "powerup-38-3",
      kind: "gliderLeaf",
      durationMs: 6600,
      x: 2190,
      y: 234
    },
    {
      id: "powerup-38-4",
      kind: "shield",
      durationMs: 7500,
      x: 3020,
      y: 286
    },
    {
      id: "powerup-38-5",
      kind: "springBoots",
      durationMs: 4800,
      x: 3850,
      y: 338
    },
    {
      id: "powerup-38-6",
      kind: "starburst",
      durationMs: 5700,
      x: 4680,
      y: 130
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-38-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 3.7
    },
    {
      id: "moving-platform-38-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 4.4
    },
    {
      id: "moving-platform-38-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 5.1
    },
    {
      id: "moving-platform-38-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 5.8
    },
    {
      id: "moving-platform-38-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 6.5
    },
    {
      id: "moving-platform-38-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 7.2
    },
    {
      id: "moving-platform-38-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 7.8999999999999995
    },
    {
      id: "moving-platform-38-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 8.6
    },
    {
      id: "moving-platform-38-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 9.3
    }
  ],
  hazards: [
    {
      id: "hazard-38-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 37
    },
    {
      id: "hazard-38-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 38
    },
    {
      id: "hazard-38-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 39
    },
    {
      id: "hazard-38-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 40
    },
    {
      id: "hazard-38-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 41
    },
    {
      id: "hazard-38-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 42
    },
    {
      id: "hazard-38-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 43
    },
    {
      id: "hazard-38-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 44
    },
    {
      id: "hazard-38-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 45
    },
    {
      id: "hazard-38-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 46
    },
    {
      id: "hazard-38-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 47
    },
    {
      id: "hazard-38-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 48
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-38-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-38-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-38-1",
      x: 674,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-38-2",
      x: 1444,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-38-3",
      x: 2214,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-38-4",
      x: 2984,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-38-5",
      x: 3754,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-38-6",
      x: 4524,
      y: 384,
      power: 1.46
    }
  ],
  windZones: [
    {
      id: "wind-38-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-38-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-38-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-38-4",
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
      id: "decor-38-1",
      layer: "near",
      motif: "vine",
      x: 851,
      y: 83,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-2",
      layer: "far",
      motif: "glassBerry",
      x: 948,
      y: 124,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-3",
      layer: "mid",
      motif: "cloud",
      x: 1045,
      y: 165,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-4",
      layer: "far",
      motif: "windmill",
      x: 1142,
      y: 206,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-5",
      layer: "mid",
      motif: "grass",
      x: 1239,
      y: 247,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-6",
      layer: "near",
      motif: "gear",
      x: 1336,
      y: 288,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-7",
      layer: "mid",
      motif: "vine",
      x: 1433,
      y: 329,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-8",
      layer: "far",
      motif: "glassBerry",
      x: 1530,
      y: 370,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-9",
      layer: "mid",
      motif: "cloud",
      x: 1627,
      y: 411,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-10",
      layer: "far",
      motif: "windmill",
      x: 1724,
      y: 452,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-11",
      layer: "near",
      motif: "grass",
      x: 1821,
      y: 63,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-12",
      layer: "far",
      motif: "gear",
      x: 1918,
      y: 104,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-13",
      layer: "mid",
      motif: "vine",
      x: 2015,
      y: 145,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-14",
      layer: "far",
      motif: "glassBerry",
      x: 2112,
      y: 186,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-15",
      layer: "mid",
      motif: "cloud",
      x: 2209,
      y: 227,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-16",
      layer: "near",
      motif: "windmill",
      x: 2306,
      y: 268,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-17",
      layer: "mid",
      motif: "grass",
      x: 2403,
      y: 309,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-18",
      layer: "far",
      motif: "gear",
      x: 2500,
      y: 350,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-19",
      layer: "mid",
      motif: "vine",
      x: 2597,
      y: 391,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-20",
      layer: "far",
      motif: "glassBerry",
      x: 2694,
      y: 432,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-21",
      layer: "near",
      motif: "cloud",
      x: 2791,
      y: 43,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-22",
      layer: "far",
      motif: "windmill",
      x: 2888,
      y: 84,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-23",
      layer: "mid",
      motif: "grass",
      x: 2985,
      y: 125,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-24",
      layer: "far",
      motif: "gear",
      x: 3082,
      y: 166,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-25",
      layer: "mid",
      motif: "vine",
      x: 3179,
      y: 207,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-26",
      layer: "near",
      motif: "glassBerry",
      x: 3276,
      y: 248,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-27",
      layer: "mid",
      motif: "cloud",
      x: 3373,
      y: 289,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-28",
      layer: "far",
      motif: "windmill",
      x: 3470,
      y: 330,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-29",
      layer: "mid",
      motif: "grass",
      x: 3567,
      y: 371,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-30",
      layer: "far",
      motif: "gear",
      x: 3664,
      y: 412,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-31",
      layer: "near",
      motif: "vine",
      x: 3761,
      y: 453,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-32",
      layer: "far",
      motif: "glassBerry",
      x: 3858,
      y: 64,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-33",
      layer: "mid",
      motif: "cloud",
      x: 3955,
      y: 105,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-34",
      layer: "far",
      motif: "windmill",
      x: 4052,
      y: 146,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-35",
      layer: "mid",
      motif: "grass",
      x: 4149,
      y: 187,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-36",
      layer: "near",
      motif: "gear",
      x: 4246,
      y: 228,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-37",
      layer: "mid",
      motif: "vine",
      x: 4343,
      y: 269,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-38",
      layer: "far",
      motif: "glassBerry",
      x: 4440,
      y: 310,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-39",
      layer: "mid",
      motif: "cloud",
      x: 4537,
      y: 351,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-40",
      layer: "far",
      motif: "windmill",
      x: 4634,
      y: 392,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-41",
      layer: "near",
      motif: "grass",
      x: 4731,
      y: 433,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-42",
      layer: "far",
      motif: "gear",
      x: 4828,
      y: 44,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-43",
      layer: "mid",
      motif: "vine",
      x: 4925,
      y: 85,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-44",
      layer: "far",
      motif: "glassBerry",
      x: 94,
      y: 126,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-45",
      layer: "mid",
      motif: "cloud",
      x: 191,
      y: 167,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-46",
      layer: "near",
      motif: "windmill",
      x: 288,
      y: 208,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-47",
      layer: "mid",
      motif: "grass",
      x: 385,
      y: 249,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-48",
      layer: "far",
      motif: "gear",
      x: 482,
      y: 290,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-49",
      layer: "mid",
      motif: "vine",
      x: 579,
      y: 331,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-50",
      layer: "far",
      motif: "glassBerry",
      x: 676,
      y: 372,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-51",
      layer: "near",
      motif: "cloud",
      x: 773,
      y: 413,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-52",
      layer: "far",
      motif: "windmill",
      x: 870,
      y: 454,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-53",
      layer: "mid",
      motif: "grass",
      x: 967,
      y: 65,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-54",
      layer: "far",
      motif: "gear",
      x: 1064,
      y: 106,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-55",
      layer: "mid",
      motif: "vine",
      x: 1161,
      y: 147,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-56",
      layer: "near",
      motif: "glassBerry",
      x: 1258,
      y: 188,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-57",
      layer: "mid",
      motif: "cloud",
      x: 1355,
      y: 229,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-58",
      layer: "far",
      motif: "windmill",
      x: 1452,
      y: 270,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-59",
      layer: "mid",
      motif: "grass",
      x: 1549,
      y: 311,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-60",
      layer: "far",
      motif: "gear",
      x: 1646,
      y: 352,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-61",
      layer: "near",
      motif: "vine",
      x: 1743,
      y: 393,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-62",
      layer: "far",
      motif: "glassBerry",
      x: 1840,
      y: 434,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-63",
      layer: "mid",
      motif: "cloud",
      x: 1937,
      y: 45,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-64",
      layer: "far",
      motif: "windmill",
      x: 2034,
      y: 86,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-65",
      layer: "mid",
      motif: "grass",
      x: 2131,
      y: 127,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-66",
      layer: "near",
      motif: "gear",
      x: 2228,
      y: 168,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-67",
      layer: "mid",
      motif: "vine",
      x: 2325,
      y: 209,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-68",
      layer: "far",
      motif: "glassBerry",
      x: 2422,
      y: 250,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-69",
      layer: "mid",
      motif: "cloud",
      x: 2519,
      y: 291,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-70",
      layer: "far",
      motif: "windmill",
      x: 2616,
      y: 332,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-71",
      layer: "near",
      motif: "grass",
      x: 2713,
      y: 373,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-72",
      layer: "far",
      motif: "gear",
      x: 2810,
      y: 414,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-73",
      layer: "mid",
      motif: "vine",
      x: 2907,
      y: 455,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-74",
      layer: "far",
      motif: "glassBerry",
      x: 3004,
      y: 66,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-75",
      layer: "mid",
      motif: "cloud",
      x: 3101,
      y: 107,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-76",
      layer: "near",
      motif: "windmill",
      x: 3198,
      y: 148,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-77",
      layer: "mid",
      motif: "grass",
      x: 3295,
      y: 189,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-78",
      layer: "far",
      motif: "gear",
      x: 3392,
      y: 230,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-79",
      layer: "mid",
      motif: "vine",
      x: 3489,
      y: 271,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-80",
      layer: "far",
      motif: "glassBerry",
      x: 3586,
      y: 312,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-81",
      layer: "near",
      motif: "cloud",
      x: 3683,
      y: 353,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-82",
      layer: "far",
      motif: "windmill",
      x: 3780,
      y: 394,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-83",
      layer: "mid",
      motif: "grass",
      x: 3877,
      y: 435,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-84",
      layer: "far",
      motif: "gear",
      x: 3974,
      y: 46,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-85",
      layer: "mid",
      motif: "vine",
      x: 4071,
      y: 87,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-86",
      layer: "near",
      motif: "glassBerry",
      x: 4168,
      y: 128,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-87",
      layer: "mid",
      motif: "cloud",
      x: 4265,
      y: 169,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-88",
      layer: "far",
      motif: "windmill",
      x: 4362,
      y: 210,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-89",
      layer: "mid",
      motif: "grass",
      x: 4459,
      y: 251,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-90",
      layer: "far",
      motif: "gear",
      x: 4556,
      y: 292,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-91",
      layer: "near",
      motif: "vine",
      x: 4653,
      y: 333,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-92",
      layer: "far",
      motif: "glassBerry",
      x: 4750,
      y: 374,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-93",
      layer: "mid",
      motif: "cloud",
      x: 4847,
      y: 415,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-94",
      layer: "far",
      motif: "windmill",
      x: 16,
      y: 456,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-95",
      layer: "mid",
      motif: "grass",
      x: 113,
      y: 67,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-96",
      layer: "near",
      motif: "gear",
      x: 210,
      y: 108,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-97",
      layer: "mid",
      motif: "vine",
      x: 307,
      y: 149,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-98",
      layer: "far",
      motif: "glassBerry",
      x: 404,
      y: 190,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-99",
      layer: "mid",
      motif: "cloud",
      x: 501,
      y: 231,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-100",
      layer: "far",
      motif: "windmill",
      x: 598,
      y: 272,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-101",
      layer: "near",
      motif: "grass",
      x: 695,
      y: 313,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-102",
      layer: "far",
      motif: "gear",
      x: 792,
      y: 354,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-103",
      layer: "mid",
      motif: "vine",
      x: 889,
      y: 395,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-104",
      layer: "far",
      motif: "glassBerry",
      x: 986,
      y: 436,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-105",
      layer: "mid",
      motif: "cloud",
      x: 1083,
      y: 47,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-106",
      layer: "near",
      motif: "windmill",
      x: 1180,
      y: 88,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-107",
      layer: "mid",
      motif: "grass",
      x: 1277,
      y: 129,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-108",
      layer: "far",
      motif: "gear",
      x: 1374,
      y: 170,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-109",
      layer: "mid",
      motif: "vine",
      x: 1471,
      y: 211,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-110",
      layer: "far",
      motif: "glassBerry",
      x: 1568,
      y: 252,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-111",
      layer: "near",
      motif: "cloud",
      x: 1665,
      y: 293,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-112",
      layer: "far",
      motif: "windmill",
      x: 1762,
      y: 334,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-113",
      layer: "mid",
      motif: "grass",
      x: 1859,
      y: 375,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-114",
      layer: "far",
      motif: "gear",
      x: 1956,
      y: 416,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-115",
      layer: "mid",
      motif: "vine",
      x: 2053,
      y: 457,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-116",
      layer: "near",
      motif: "glassBerry",
      x: 2150,
      y: 68,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-117",
      layer: "mid",
      motif: "cloud",
      x: 2247,
      y: 109,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-118",
      layer: "far",
      motif: "windmill",
      x: 2344,
      y: 150,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-119",
      layer: "mid",
      motif: "grass",
      x: 2441,
      y: 191,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-120",
      layer: "far",
      motif: "gear",
      x: 2538,
      y: 232,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-121",
      layer: "near",
      motif: "vine",
      x: 2635,
      y: 273,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-122",
      layer: "far",
      motif: "glassBerry",
      x: 2732,
      y: 314,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-123",
      layer: "mid",
      motif: "cloud",
      x: 2829,
      y: 355,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-124",
      layer: "far",
      motif: "windmill",
      x: 2926,
      y: 396,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-125",
      layer: "mid",
      motif: "grass",
      x: 3023,
      y: 437,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-126",
      layer: "near",
      motif: "gear",
      x: 3120,
      y: 48,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-127",
      layer: "mid",
      motif: "vine",
      x: 3217,
      y: 89,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-128",
      layer: "far",
      motif: "glassBerry",
      x: 3314,
      y: 130,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-129",
      layer: "mid",
      motif: "cloud",
      x: 3411,
      y: 171,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-130",
      layer: "far",
      motif: "windmill",
      x: 3508,
      y: 212,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-131",
      layer: "near",
      motif: "grass",
      x: 3605,
      y: 253,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-132",
      layer: "far",
      motif: "gear",
      x: 3702,
      y: 294,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-133",
      layer: "mid",
      motif: "vine",
      x: 3799,
      y: 335,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-134",
      layer: "far",
      motif: "glassBerry",
      x: 3896,
      y: 376,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-135",
      layer: "mid",
      motif: "cloud",
      x: 3993,
      y: 417,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-136",
      layer: "near",
      motif: "windmill",
      x: 4090,
      y: 458,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-137",
      layer: "mid",
      motif: "grass",
      x: 4187,
      y: 69,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-138",
      layer: "far",
      motif: "gear",
      x: 4284,
      y: 110,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-139",
      layer: "mid",
      motif: "vine",
      x: 4381,
      y: 151,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-140",
      layer: "far",
      motif: "glassBerry",
      x: 4478,
      y: 192,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-141",
      layer: "near",
      motif: "cloud",
      x: 4575,
      y: 233,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-142",
      layer: "far",
      motif: "windmill",
      x: 4672,
      y: 274,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-143",
      layer: "mid",
      motif: "grass",
      x: 4769,
      y: 315,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-144",
      layer: "far",
      motif: "gear",
      x: 4866,
      y: 356,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-145",
      layer: "mid",
      motif: "vine",
      x: 35,
      y: 397,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-146",
      layer: "near",
      motif: "glassBerry",
      x: 132,
      y: 438,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-147",
      layer: "mid",
      motif: "cloud",
      x: 229,
      y: 49,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-148",
      layer: "far",
      motif: "windmill",
      x: 326,
      y: 90,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-149",
      layer: "mid",
      motif: "grass",
      x: 423,
      y: 131,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-150",
      layer: "far",
      motif: "gear",
      x: 520,
      y: 172,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-151",
      layer: "near",
      motif: "vine",
      x: 617,
      y: 213,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-152",
      layer: "far",
      motif: "glassBerry",
      x: 714,
      y: 254,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-153",
      layer: "mid",
      motif: "cloud",
      x: 811,
      y: 295,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-154",
      layer: "far",
      motif: "windmill",
      x: 908,
      y: 336,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-155",
      layer: "mid",
      motif: "grass",
      x: 1005,
      y: 377,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-156",
      layer: "near",
      motif: "gear",
      x: 1102,
      y: 418,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-157",
      layer: "mid",
      motif: "vine",
      x: 1199,
      y: 459,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-158",
      layer: "far",
      motif: "glassBerry",
      x: 1296,
      y: 70,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-159",
      layer: "mid",
      motif: "cloud",
      x: 1393,
      y: 111,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-160",
      layer: "far",
      motif: "windmill",
      x: 1490,
      y: 152,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-161",
      layer: "near",
      motif: "grass",
      x: 1587,
      y: 193,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-162",
      layer: "far",
      motif: "gear",
      x: 1684,
      y: 234,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-163",
      layer: "mid",
      motif: "vine",
      x: 1781,
      y: 275,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-164",
      layer: "far",
      motif: "glassBerry",
      x: 1878,
      y: 316,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-165",
      layer: "mid",
      motif: "cloud",
      x: 1975,
      y: 357,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-166",
      layer: "near",
      motif: "windmill",
      x: 2072,
      y: 398,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-167",
      layer: "mid",
      motif: "grass",
      x: 2169,
      y: 439,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-168",
      layer: "far",
      motif: "gear",
      x: 2266,
      y: 50,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-169",
      layer: "mid",
      motif: "vine",
      x: 2363,
      y: 91,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-170",
      layer: "far",
      motif: "glassBerry",
      x: 2460,
      y: 132,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-38-171",
      layer: "near",
      motif: "cloud",
      x: 2557,
      y: 173,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-172",
      layer: "far",
      motif: "windmill",
      x: 2654,
      y: 214,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-38-173",
      layer: "mid",
      motif: "grass",
      x: 2751,
      y: 255,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-38-174",
      layer: "far",
      motif: "gear",
      x: 2848,
      y: 296,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-38-175",
      layer: "mid",
      motif: "vine",
      x: 2945,
      y: 337,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-38-176",
      layer: "near",
      motif: "glassBerry",
      x: 3042,
      y: 378,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-38-177",
      layer: "mid",
      motif: "cloud",
      x: 3139,
      y: 419,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-38-178",
      layer: "far",
      motif: "windmill",
      x: 3236,
      y: 460,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-38-179",
      layer: "mid",
      motif: "grass",
      x: 3333,
      y: 71,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-38-180",
      layer: "far",
      motif: "gear",
      x: 3430,
      y: 112,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-38",
    x: 4736,
    y: 448,
    nextLevelId: "level-39"
  }
};
