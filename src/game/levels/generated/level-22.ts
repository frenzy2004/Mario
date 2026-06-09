import type { LevelDefinition } from "../schema";

export const LEVEL_22: LevelDefinition = {
  id: "level-22",
  index: 21,
  title: "Moonlit Gearway 01",
  chapter: "Moonlit Gearway",
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
    ".....................######........................#######.......................###...........................####..........................#####........",
    "................#####.........................######........................#######.......................###...........................####..............",
    "...........====..........................=====.........................======........................=======.......................===....................",
    "....................................####..........................#####.........................######........................#######.....................",
    "...............................###...........................####..........................#####.........................######...........................",
    "..........................=======...........W...........===.....................W.....====..........................W====.................................",
    "...................................S...................................S...................................S..............................................",
    "...P......................W...................................W...................................W...................................W.............G.....",
    ".................S...................................S...................................S...................................S............................",
    "^################^..##############^....############^...#############^..##############^....############^...#############^..##############^################^",
    "##################.^###############^.^.#############.^.##############^.###############.^.^#############^.^##############.^################################"
  ],
  enemies: [
    {
      id: "enemy-22-1",
      kind: "charger",
      x: 448,
      y: 448,
      patrolMin: 353,
      patrolMax: 568,
      speed: 80,
      phase: 21
    },
    {
      id: "enemy-22-2",
      kind: "spiker",
      x: 778,
      y: 416,
      patrolMin: 665,
      patrolMax: 920,
      speed: 92,
      phase: 24
    },
    {
      id: "enemy-22-3",
      kind: "turret",
      x: 1108,
      y: 384,
      patrolMin: 977,
      patrolMax: 1272,
      speed: 104,
      phase: 27
    },
    {
      id: "enemy-22-4",
      kind: "beetle",
      x: 1438,
      y: 352,
      patrolMin: 1289,
      patrolMax: 1624,
      speed: 44,
      phase: 30
    },
    {
      id: "enemy-22-5",
      kind: "acorn",
      x: 1768,
      y: 320,
      patrolMin: 1673,
      patrolMax: 1976,
      speed: 56,
      phase: 33
    },
    {
      id: "enemy-22-6",
      kind: "lantern",
      x: 2098,
      y: 448,
      patrolMin: 1985,
      patrolMax: 2218,
      speed: 68,
      phase: 36
    },
    {
      id: "enemy-22-7",
      kind: "charger",
      x: 2428,
      y: 416,
      patrolMin: 2297,
      patrolMax: 2570,
      speed: 80,
      phase: 39
    },
    {
      id: "enemy-22-8",
      kind: "spiker",
      x: 2758,
      y: 384,
      patrolMin: 2609,
      patrolMax: 2922,
      speed: 92,
      phase: 42
    },
    {
      id: "enemy-22-9",
      kind: "turret",
      x: 3088,
      y: 352,
      patrolMin: 2993,
      patrolMax: 3274,
      speed: 104,
      phase: 45
    },
    {
      id: "enemy-22-10",
      kind: "beetle",
      x: 3418,
      y: 320,
      patrolMin: 3305,
      patrolMax: 3626,
      speed: 44,
      phase: 48
    },
    {
      id: "enemy-22-11",
      kind: "acorn",
      x: 3748,
      y: 448,
      patrolMin: 3617,
      patrolMax: 3868,
      speed: 56,
      phase: 51
    },
    {
      id: "enemy-22-12",
      kind: "lantern",
      x: 4078,
      y: 416,
      patrolMin: 3929,
      patrolMax: 4220,
      speed: 68,
      phase: 54
    },
    {
      id: "enemy-22-13",
      kind: "charger",
      x: 4408,
      y: 384,
      patrolMin: 4313,
      patrolMax: 4572,
      speed: 80,
      phase: 57
    },
    {
      id: "enemy-22-14",
      kind: "spiker",
      x: 4738,
      y: 352,
      patrolMin: 4625,
      patrolMax: 4748,
      speed: 92,
      phase: 60
    },
    {
      id: "enemy-22-15",
      kind: "turret",
      x: 5068,
      y: 320,
      patrolMin: 4937,
      patrolMax: 4748,
      speed: 104,
      phase: 63
    },
    {
      id: "enemy-22-16",
      kind: "beetle",
      x: 5398,
      y: 448,
      patrolMin: 5249,
      patrolMax: 4748,
      speed: 44,
      phase: 66
    },
    {
      id: "enemy-22-17",
      kind: "acorn",
      x: 5728,
      y: 416,
      patrolMin: 5633,
      patrolMax: 4748,
      speed: 56,
      phase: 69
    }
  ],
  collectibles: [
    {
      id: "collectible-22-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 192,
      y: 140
    },
    {
      id: "collectible-22-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 262,
      y: 193
    },
    {
      id: "collectible-22-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 332,
      y: 246
    },
    {
      id: "collectible-22-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 402,
      y: 266
    },
    {
      id: "collectible-22-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 472,
      y: 319
    },
    {
      id: "collectible-22-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 542,
      y: 372
    },
    {
      id: "collectible-22-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 612,
      y: 392
    },
    {
      id: "collectible-22-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 682,
      y: 151
    },
    {
      id: "collectible-22-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 752,
      y: 204
    },
    {
      id: "collectible-22-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 822,
      y: 224
    },
    {
      id: "collectible-22-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 892,
      y: 277
    },
    {
      id: "collectible-22-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 962,
      y: 330
    },
    {
      id: "collectible-22-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1032,
      y: 350
    },
    {
      id: "collectible-22-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1102,
      y: 403
    },
    {
      id: "collectible-22-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1172,
      y: 162
    },
    {
      id: "collectible-22-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1242,
      y: 182
    },
    {
      id: "collectible-22-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1312,
      y: 235
    },
    {
      id: "collectible-22-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1382,
      y: 288
    },
    {
      id: "collectible-22-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1452,
      y: 308
    },
    {
      id: "collectible-22-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1522,
      y: 361
    },
    {
      id: "collectible-22-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1592,
      y: 414
    },
    {
      id: "collectible-22-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1662,
      y: 140
    },
    {
      id: "collectible-22-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1732,
      y: 193
    },
    {
      id: "collectible-22-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1802,
      y: 246
    },
    {
      id: "collectible-22-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1872,
      y: 266
    },
    {
      id: "collectible-22-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1942,
      y: 319
    },
    {
      id: "collectible-22-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2012,
      y: 372
    },
    {
      id: "collectible-22-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2082,
      y: 392
    },
    {
      id: "collectible-22-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2152,
      y: 151
    },
    {
      id: "collectible-22-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2222,
      y: 204
    },
    {
      id: "collectible-22-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2292,
      y: 224
    },
    {
      id: "collectible-22-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2362,
      y: 277
    },
    {
      id: "collectible-22-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2432,
      y: 330
    },
    {
      id: "collectible-22-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2502,
      y: 350
    },
    {
      id: "collectible-22-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2572,
      y: 403
    },
    {
      id: "collectible-22-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2642,
      y: 162
    },
    {
      id: "collectible-22-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2712,
      y: 182
    },
    {
      id: "collectible-22-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2782,
      y: 235
    },
    {
      id: "collectible-22-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2852,
      y: 288
    },
    {
      id: "collectible-22-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2922,
      y: 308
    },
    {
      id: "collectible-22-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2992,
      y: 361
    },
    {
      id: "collectible-22-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3062,
      y: 414
    },
    {
      id: "collectible-22-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3132,
      y: 140
    },
    {
      id: "collectible-22-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3202,
      y: 193
    },
    {
      id: "collectible-22-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3272,
      y: 246
    },
    {
      id: "collectible-22-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3342,
      y: 266
    },
    {
      id: "collectible-22-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3412,
      y: 319
    },
    {
      id: "collectible-22-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3482,
      y: 372
    },
    {
      id: "collectible-22-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3552,
      y: 392
    },
    {
      id: "collectible-22-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3622,
      y: 151
    },
    {
      id: "collectible-22-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3692,
      y: 204
    },
    {
      id: "collectible-22-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3762,
      y: 224
    },
    {
      id: "collectible-22-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3832,
      y: 277
    },
    {
      id: "collectible-22-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3902,
      y: 330
    },
    {
      id: "collectible-22-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3972,
      y: 350
    },
    {
      id: "collectible-22-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4042,
      y: 403
    },
    {
      id: "collectible-22-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4112,
      y: 162
    },
    {
      id: "collectible-22-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4182,
      y: 182
    },
    {
      id: "collectible-22-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4252,
      y: 235
    },
    {
      id: "collectible-22-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4322,
      y: 288
    },
    {
      id: "collectible-22-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4392,
      y: 308
    },
    {
      id: "collectible-22-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4462,
      y: 361
    },
    {
      id: "collectible-22-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4532,
      y: 414
    },
    {
      id: "collectible-22-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4602,
      y: 140
    },
    {
      id: "collectible-22-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4672,
      y: 193
    },
    {
      id: "collectible-22-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4742,
      y: 246
    },
    {
      id: "collectible-22-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4812,
      y: 266
    },
    {
      id: "collectible-22-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4882,
      y: 319
    },
    {
      id: "collectible-22-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4952,
      y: 372
    },
    {
      id: "collectible-22-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5022,
      y: 392
    },
    {
      id: "collectible-22-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5092,
      y: 151
    },
    {
      id: "collectible-22-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5162,
      y: 204
    },
    {
      id: "collectible-22-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5232,
      y: 224
    },
    {
      id: "collectible-22-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5302,
      y: 277
    }
  ],
  powerups: [
    {
      id: "powerup-22-1",
      kind: "springBoots",
      durationMs: 4800,
      x: 590,
      y: 130
    },
    {
      id: "powerup-22-2",
      kind: "starburst",
      durationMs: 5700,
      x: 1420,
      y: 182
    },
    {
      id: "powerup-22-3",
      kind: "gliderLeaf",
      durationMs: 6600,
      x: 2250,
      y: 234
    },
    {
      id: "powerup-22-4",
      kind: "shield",
      durationMs: 7500,
      x: 3080,
      y: 286
    },
    {
      id: "powerup-22-5",
      kind: "springBoots",
      durationMs: 4800,
      x: 3910,
      y: 338
    },
    {
      id: "powerup-22-6",
      kind: "starburst",
      durationMs: 5700,
      x: 4740,
      y: 130
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-22-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 2.1
    },
    {
      id: "moving-platform-22-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 2.8
    },
    {
      id: "moving-platform-22-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 3.5
    },
    {
      id: "moving-platform-22-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 4.199999999999999
    },
    {
      id: "moving-platform-22-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 4.9
    },
    {
      id: "moving-platform-22-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 5.6
    },
    {
      id: "moving-platform-22-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 6.299999999999999
    },
    {
      id: "moving-platform-22-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 7
    }
  ],
  hazards: [
    {
      id: "hazard-22-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 21
    },
    {
      id: "hazard-22-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 22
    },
    {
      id: "hazard-22-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 23
    },
    {
      id: "hazard-22-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 24
    },
    {
      id: "hazard-22-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 25
    },
    {
      id: "hazard-22-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 26
    },
    {
      id: "hazard-22-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 27
    },
    {
      id: "hazard-22-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 28
    },
    {
      id: "hazard-22-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 29
    },
    {
      id: "hazard-22-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 30
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-22-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-22-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-22-1",
      x: 640,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-22-2",
      x: 1410,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-22-3",
      x: 2180,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-22-4",
      x: 2950,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-22-5",
      x: 3720,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-22-6",
      x: 4490,
      y: 384,
      power: 1.46
    }
  ],
  windZones: [
    {
      id: "wind-22-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-22-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-22-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-22-4",
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
      id: "decor-22-1",
      layer: "near",
      motif: "cloud",
      x: 483,
      y: 305,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-2",
      layer: "far",
      motif: "windmill",
      x: 580,
      y: 346,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-3",
      layer: "mid",
      motif: "grass",
      x: 677,
      y: 387,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-4",
      layer: "far",
      motif: "gear",
      x: 774,
      y: 428,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-5",
      layer: "mid",
      motif: "vine",
      x: 871,
      y: 39,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-6",
      layer: "near",
      motif: "glassBerry",
      x: 968,
      y: 80,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-7",
      layer: "mid",
      motif: "cloud",
      x: 1065,
      y: 121,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-8",
      layer: "far",
      motif: "windmill",
      x: 1162,
      y: 162,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-9",
      layer: "mid",
      motif: "grass",
      x: 1259,
      y: 203,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-10",
      layer: "far",
      motif: "gear",
      x: 1356,
      y: 244,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-11",
      layer: "near",
      motif: "vine",
      x: 1453,
      y: 285,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-12",
      layer: "far",
      motif: "glassBerry",
      x: 1550,
      y: 326,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-13",
      layer: "mid",
      motif: "cloud",
      x: 1647,
      y: 367,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-14",
      layer: "far",
      motif: "windmill",
      x: 1744,
      y: 408,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-15",
      layer: "mid",
      motif: "grass",
      x: 1841,
      y: 449,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-16",
      layer: "near",
      motif: "gear",
      x: 1938,
      y: 60,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-17",
      layer: "mid",
      motif: "vine",
      x: 2035,
      y: 101,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-18",
      layer: "far",
      motif: "glassBerry",
      x: 2132,
      y: 142,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-19",
      layer: "mid",
      motif: "cloud",
      x: 2229,
      y: 183,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-20",
      layer: "far",
      motif: "windmill",
      x: 2326,
      y: 224,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-21",
      layer: "near",
      motif: "grass",
      x: 2423,
      y: 265,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-22",
      layer: "far",
      motif: "gear",
      x: 2520,
      y: 306,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-23",
      layer: "mid",
      motif: "vine",
      x: 2617,
      y: 347,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-24",
      layer: "far",
      motif: "glassBerry",
      x: 2714,
      y: 388,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-25",
      layer: "mid",
      motif: "cloud",
      x: 2811,
      y: 429,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-26",
      layer: "near",
      motif: "windmill",
      x: 2908,
      y: 40,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-27",
      layer: "mid",
      motif: "grass",
      x: 3005,
      y: 81,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-28",
      layer: "far",
      motif: "gear",
      x: 3102,
      y: 122,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-29",
      layer: "mid",
      motif: "vine",
      x: 3199,
      y: 163,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-30",
      layer: "far",
      motif: "glassBerry",
      x: 3296,
      y: 204,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-31",
      layer: "near",
      motif: "cloud",
      x: 3393,
      y: 245,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-32",
      layer: "far",
      motif: "windmill",
      x: 3490,
      y: 286,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-33",
      layer: "mid",
      motif: "grass",
      x: 3587,
      y: 327,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-34",
      layer: "far",
      motif: "gear",
      x: 3684,
      y: 368,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-35",
      layer: "mid",
      motif: "vine",
      x: 3781,
      y: 409,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-36",
      layer: "near",
      motif: "glassBerry",
      x: 3878,
      y: 450,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-37",
      layer: "mid",
      motif: "cloud",
      x: 3975,
      y: 61,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-38",
      layer: "far",
      motif: "windmill",
      x: 4072,
      y: 102,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-39",
      layer: "mid",
      motif: "grass",
      x: 4169,
      y: 143,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-40",
      layer: "far",
      motif: "gear",
      x: 4266,
      y: 184,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-41",
      layer: "near",
      motif: "vine",
      x: 4363,
      y: 225,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-42",
      layer: "far",
      motif: "glassBerry",
      x: 4460,
      y: 266,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-43",
      layer: "mid",
      motif: "cloud",
      x: 4557,
      y: 307,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-44",
      layer: "far",
      motif: "windmill",
      x: 4654,
      y: 348,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-45",
      layer: "mid",
      motif: "grass",
      x: 4751,
      y: 389,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-46",
      layer: "near",
      motif: "gear",
      x: 4848,
      y: 430,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-47",
      layer: "mid",
      motif: "vine",
      x: 17,
      y: 41,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-48",
      layer: "far",
      motif: "glassBerry",
      x: 114,
      y: 82,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-49",
      layer: "mid",
      motif: "cloud",
      x: 211,
      y: 123,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-50",
      layer: "far",
      motif: "windmill",
      x: 308,
      y: 164,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-51",
      layer: "near",
      motif: "grass",
      x: 405,
      y: 205,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-52",
      layer: "far",
      motif: "gear",
      x: 502,
      y: 246,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-53",
      layer: "mid",
      motif: "vine",
      x: 599,
      y: 287,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-54",
      layer: "far",
      motif: "glassBerry",
      x: 696,
      y: 328,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-55",
      layer: "mid",
      motif: "cloud",
      x: 793,
      y: 369,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-56",
      layer: "near",
      motif: "windmill",
      x: 890,
      y: 410,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-57",
      layer: "mid",
      motif: "grass",
      x: 987,
      y: 451,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-58",
      layer: "far",
      motif: "gear",
      x: 1084,
      y: 62,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-59",
      layer: "mid",
      motif: "vine",
      x: 1181,
      y: 103,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-60",
      layer: "far",
      motif: "glassBerry",
      x: 1278,
      y: 144,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-61",
      layer: "near",
      motif: "cloud",
      x: 1375,
      y: 185,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-62",
      layer: "far",
      motif: "windmill",
      x: 1472,
      y: 226,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-63",
      layer: "mid",
      motif: "grass",
      x: 1569,
      y: 267,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-64",
      layer: "far",
      motif: "gear",
      x: 1666,
      y: 308,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-65",
      layer: "mid",
      motif: "vine",
      x: 1763,
      y: 349,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-66",
      layer: "near",
      motif: "glassBerry",
      x: 1860,
      y: 390,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-67",
      layer: "mid",
      motif: "cloud",
      x: 1957,
      y: 431,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-68",
      layer: "far",
      motif: "windmill",
      x: 2054,
      y: 42,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-69",
      layer: "mid",
      motif: "grass",
      x: 2151,
      y: 83,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-70",
      layer: "far",
      motif: "gear",
      x: 2248,
      y: 124,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-71",
      layer: "near",
      motif: "vine",
      x: 2345,
      y: 165,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-72",
      layer: "far",
      motif: "glassBerry",
      x: 2442,
      y: 206,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-73",
      layer: "mid",
      motif: "cloud",
      x: 2539,
      y: 247,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-74",
      layer: "far",
      motif: "windmill",
      x: 2636,
      y: 288,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-75",
      layer: "mid",
      motif: "grass",
      x: 2733,
      y: 329,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-76",
      layer: "near",
      motif: "gear",
      x: 2830,
      y: 370,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-77",
      layer: "mid",
      motif: "vine",
      x: 2927,
      y: 411,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-78",
      layer: "far",
      motif: "glassBerry",
      x: 3024,
      y: 452,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-79",
      layer: "mid",
      motif: "cloud",
      x: 3121,
      y: 63,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-80",
      layer: "far",
      motif: "windmill",
      x: 3218,
      y: 104,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-81",
      layer: "near",
      motif: "grass",
      x: 3315,
      y: 145,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-82",
      layer: "far",
      motif: "gear",
      x: 3412,
      y: 186,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-83",
      layer: "mid",
      motif: "vine",
      x: 3509,
      y: 227,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-84",
      layer: "far",
      motif: "glassBerry",
      x: 3606,
      y: 268,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-85",
      layer: "mid",
      motif: "cloud",
      x: 3703,
      y: 309,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-86",
      layer: "near",
      motif: "windmill",
      x: 3800,
      y: 350,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-87",
      layer: "mid",
      motif: "grass",
      x: 3897,
      y: 391,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-88",
      layer: "far",
      motif: "gear",
      x: 3994,
      y: 432,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-89",
      layer: "mid",
      motif: "vine",
      x: 4091,
      y: 43,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-90",
      layer: "far",
      motif: "glassBerry",
      x: 4188,
      y: 84,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-91",
      layer: "near",
      motif: "cloud",
      x: 4285,
      y: 125,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-92",
      layer: "far",
      motif: "windmill",
      x: 4382,
      y: 166,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-93",
      layer: "mid",
      motif: "grass",
      x: 4479,
      y: 207,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-94",
      layer: "far",
      motif: "gear",
      x: 4576,
      y: 248,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-95",
      layer: "mid",
      motif: "vine",
      x: 4673,
      y: 289,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-96",
      layer: "near",
      motif: "glassBerry",
      x: 4770,
      y: 330,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-97",
      layer: "mid",
      motif: "cloud",
      x: 4867,
      y: 371,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-98",
      layer: "far",
      motif: "windmill",
      x: 36,
      y: 412,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-99",
      layer: "mid",
      motif: "grass",
      x: 133,
      y: 453,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-100",
      layer: "far",
      motif: "gear",
      x: 230,
      y: 64,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-101",
      layer: "near",
      motif: "vine",
      x: 327,
      y: 105,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-102",
      layer: "far",
      motif: "glassBerry",
      x: 424,
      y: 146,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-103",
      layer: "mid",
      motif: "cloud",
      x: 521,
      y: 187,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-104",
      layer: "far",
      motif: "windmill",
      x: 618,
      y: 228,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-105",
      layer: "mid",
      motif: "grass",
      x: 715,
      y: 269,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-106",
      layer: "near",
      motif: "gear",
      x: 812,
      y: 310,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-107",
      layer: "mid",
      motif: "vine",
      x: 909,
      y: 351,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-108",
      layer: "far",
      motif: "glassBerry",
      x: 1006,
      y: 392,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-109",
      layer: "mid",
      motif: "cloud",
      x: 1103,
      y: 433,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-110",
      layer: "far",
      motif: "windmill",
      x: 1200,
      y: 44,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-111",
      layer: "near",
      motif: "grass",
      x: 1297,
      y: 85,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-112",
      layer: "far",
      motif: "gear",
      x: 1394,
      y: 126,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-113",
      layer: "mid",
      motif: "vine",
      x: 1491,
      y: 167,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-114",
      layer: "far",
      motif: "glassBerry",
      x: 1588,
      y: 208,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-115",
      layer: "mid",
      motif: "cloud",
      x: 1685,
      y: 249,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-116",
      layer: "near",
      motif: "windmill",
      x: 1782,
      y: 290,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-117",
      layer: "mid",
      motif: "grass",
      x: 1879,
      y: 331,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-118",
      layer: "far",
      motif: "gear",
      x: 1976,
      y: 372,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-119",
      layer: "mid",
      motif: "vine",
      x: 2073,
      y: 413,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-120",
      layer: "far",
      motif: "glassBerry",
      x: 2170,
      y: 454,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-121",
      layer: "near",
      motif: "cloud",
      x: 2267,
      y: 65,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-122",
      layer: "far",
      motif: "windmill",
      x: 2364,
      y: 106,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-123",
      layer: "mid",
      motif: "grass",
      x: 2461,
      y: 147,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-124",
      layer: "far",
      motif: "gear",
      x: 2558,
      y: 188,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-125",
      layer: "mid",
      motif: "vine",
      x: 2655,
      y: 229,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-126",
      layer: "near",
      motif: "glassBerry",
      x: 2752,
      y: 270,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-127",
      layer: "mid",
      motif: "cloud",
      x: 2849,
      y: 311,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-128",
      layer: "far",
      motif: "windmill",
      x: 2946,
      y: 352,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-129",
      layer: "mid",
      motif: "grass",
      x: 3043,
      y: 393,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-130",
      layer: "far",
      motif: "gear",
      x: 3140,
      y: 434,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-131",
      layer: "near",
      motif: "vine",
      x: 3237,
      y: 45,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-132",
      layer: "far",
      motif: "glassBerry",
      x: 3334,
      y: 86,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-133",
      layer: "mid",
      motif: "cloud",
      x: 3431,
      y: 127,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-134",
      layer: "far",
      motif: "windmill",
      x: 3528,
      y: 168,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-135",
      layer: "mid",
      motif: "grass",
      x: 3625,
      y: 209,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-136",
      layer: "near",
      motif: "gear",
      x: 3722,
      y: 250,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-137",
      layer: "mid",
      motif: "vine",
      x: 3819,
      y: 291,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-138",
      layer: "far",
      motif: "glassBerry",
      x: 3916,
      y: 332,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-139",
      layer: "mid",
      motif: "cloud",
      x: 4013,
      y: 373,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-140",
      layer: "far",
      motif: "windmill",
      x: 4110,
      y: 414,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-141",
      layer: "near",
      motif: "grass",
      x: 4207,
      y: 455,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-142",
      layer: "far",
      motif: "gear",
      x: 4304,
      y: 66,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-143",
      layer: "mid",
      motif: "vine",
      x: 4401,
      y: 107,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-144",
      layer: "far",
      motif: "glassBerry",
      x: 4498,
      y: 148,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-145",
      layer: "mid",
      motif: "cloud",
      x: 4595,
      y: 189,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-146",
      layer: "near",
      motif: "windmill",
      x: 4692,
      y: 230,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-147",
      layer: "mid",
      motif: "grass",
      x: 4789,
      y: 271,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-148",
      layer: "far",
      motif: "gear",
      x: 4886,
      y: 312,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-149",
      layer: "mid",
      motif: "vine",
      x: 55,
      y: 353,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-150",
      layer: "far",
      motif: "glassBerry",
      x: 152,
      y: 394,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-151",
      layer: "near",
      motif: "cloud",
      x: 249,
      y: 435,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-152",
      layer: "far",
      motif: "windmill",
      x: 346,
      y: 46,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-153",
      layer: "mid",
      motif: "grass",
      x: 443,
      y: 87,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-154",
      layer: "far",
      motif: "gear",
      x: 540,
      y: 128,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-155",
      layer: "mid",
      motif: "vine",
      x: 637,
      y: 169,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-156",
      layer: "near",
      motif: "glassBerry",
      x: 734,
      y: 210,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-157",
      layer: "mid",
      motif: "cloud",
      x: 831,
      y: 251,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-158",
      layer: "far",
      motif: "windmill",
      x: 928,
      y: 292,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-159",
      layer: "mid",
      motif: "grass",
      x: 1025,
      y: 333,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-160",
      layer: "far",
      motif: "gear",
      x: 1122,
      y: 374,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-161",
      layer: "near",
      motif: "vine",
      x: 1219,
      y: 415,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-162",
      layer: "far",
      motif: "glassBerry",
      x: 1316,
      y: 456,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-163",
      layer: "mid",
      motif: "cloud",
      x: 1413,
      y: 67,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-164",
      layer: "far",
      motif: "windmill",
      x: 1510,
      y: 108,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-165",
      layer: "mid",
      motif: "grass",
      x: 1607,
      y: 149,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-166",
      layer: "near",
      motif: "gear",
      x: 1704,
      y: 190,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-167",
      layer: "mid",
      motif: "vine",
      x: 1801,
      y: 231,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-168",
      layer: "far",
      motif: "glassBerry",
      x: 1898,
      y: 272,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-169",
      layer: "mid",
      motif: "cloud",
      x: 1995,
      y: 313,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-170",
      layer: "far",
      motif: "windmill",
      x: 2092,
      y: 354,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-22-171",
      layer: "near",
      motif: "grass",
      x: 2189,
      y: 395,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-172",
      layer: "far",
      motif: "gear",
      x: 2286,
      y: 436,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-22-173",
      layer: "mid",
      motif: "vine",
      x: 2383,
      y: 47,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-22-174",
      layer: "far",
      motif: "glassBerry",
      x: 2480,
      y: 88,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-22-175",
      layer: "mid",
      motif: "cloud",
      x: 2577,
      y: 129,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-22-176",
      layer: "near",
      motif: "windmill",
      x: 2674,
      y: 170,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-22-177",
      layer: "mid",
      motif: "grass",
      x: 2771,
      y: 211,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-22-178",
      layer: "far",
      motif: "gear",
      x: 2868,
      y: 252,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-22-179",
      layer: "mid",
      motif: "vine",
      x: 2965,
      y: 293,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-22-180",
      layer: "far",
      motif: "glassBerry",
      x: 3062,
      y: 334,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-22",
    x: 4736,
    y: 448,
    nextLevelId: "level-23"
  }
};
