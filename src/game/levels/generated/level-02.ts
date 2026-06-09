import type { LevelDefinition } from "../schema";

export const LEVEL_02: LevelDefinition = {
  id: "level-02",
  index: 1,
  title: "Brassroot Verge 02",
  chapter: "Brassroot Verge",
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
    "...............................###...........................####..........................#####.........................######...........................",
    "..........................=======.......................===...........................====..........................=====.................................",
    ".....................######........................#######.......................###...........................####..........................#####........",
    "................#####.........................######........................#######.......................###...........................####..............",
    "...........====..........................=====.........................======........................=======.......................===....................",
    "....................................####..W.......................#####.......W.................######............W...........#######.....................",
    ".................................S...................................S...................................S................................................",
    "...P....................W...................................W...................................W...................................W...............G.....",
    "...............S...................................S...................................S...................................S..............................",
    "^################^...#############^..##############^....############^...#############^..##############^....############^...#############^################^",
    "##################.^.##############^.###############.^.^#############^.^##############.^###############^.^.#############.^.###############################"
  ],
  enemies: [
    {
      id: "enemy-2-1",
      kind: "acorn",
      x: 448,
      y: 448,
      patrolMin: 353,
      patrolMax: 568,
      speed: 56,
      phase: 1
    },
    {
      id: "enemy-2-2",
      kind: "lantern",
      x: 778,
      y: 416,
      patrolMin: 665,
      patrolMax: 920,
      speed: 68,
      phase: 4
    },
    {
      id: "enemy-2-3",
      kind: "charger",
      x: 1108,
      y: 384,
      patrolMin: 977,
      patrolMax: 1272,
      speed: 80,
      phase: 7
    },
    {
      id: "enemy-2-4",
      kind: "spiker",
      x: 1438,
      y: 352,
      patrolMin: 1289,
      patrolMax: 1624,
      speed: 92,
      phase: 10
    },
    {
      id: "enemy-2-5",
      kind: "turret",
      x: 1768,
      y: 320,
      patrolMin: 1673,
      patrolMax: 1976,
      speed: 104,
      phase: 13
    },
    {
      id: "enemy-2-6",
      kind: "beetle",
      x: 2098,
      y: 448,
      patrolMin: 1985,
      patrolMax: 2218,
      speed: 44,
      phase: 16
    },
    {
      id: "enemy-2-7",
      kind: "acorn",
      x: 2428,
      y: 416,
      patrolMin: 2297,
      patrolMax: 2570,
      speed: 56,
      phase: 19
    },
    {
      id: "enemy-2-8",
      kind: "lantern",
      x: 2758,
      y: 384,
      patrolMin: 2609,
      patrolMax: 2922,
      speed: 68,
      phase: 22
    },
    {
      id: "enemy-2-9",
      kind: "charger",
      x: 3088,
      y: 352,
      patrolMin: 2993,
      patrolMax: 3274,
      speed: 80,
      phase: 25
    },
    {
      id: "enemy-2-10",
      kind: "spiker",
      x: 3418,
      y: 320,
      patrolMin: 3305,
      patrolMax: 3626,
      speed: 92,
      phase: 28
    },
    {
      id: "enemy-2-11",
      kind: "turret",
      x: 3748,
      y: 448,
      patrolMin: 3617,
      patrolMax: 3868,
      speed: 104,
      phase: 31
    },
    {
      id: "enemy-2-12",
      kind: "beetle",
      x: 4078,
      y: 416,
      patrolMin: 3929,
      patrolMax: 4220,
      speed: 44,
      phase: 34
    },
    {
      id: "enemy-2-13",
      kind: "acorn",
      x: 4408,
      y: 384,
      patrolMin: 4313,
      patrolMax: 4572,
      speed: 56,
      phase: 37
    }
  ],
  collectibles: [
    {
      id: "collectible-2-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 192,
      y: 151
    },
    {
      id: "collectible-2-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 262,
      y: 204
    },
    {
      id: "collectible-2-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 332,
      y: 224
    },
    {
      id: "collectible-2-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 402,
      y: 277
    },
    {
      id: "collectible-2-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 472,
      y: 330
    },
    {
      id: "collectible-2-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 542,
      y: 350
    },
    {
      id: "collectible-2-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 612,
      y: 403
    },
    {
      id: "collectible-2-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 682,
      y: 162
    },
    {
      id: "collectible-2-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 752,
      y: 182
    },
    {
      id: "collectible-2-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 822,
      y: 235
    },
    {
      id: "collectible-2-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 892,
      y: 288
    },
    {
      id: "collectible-2-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 962,
      y: 308
    },
    {
      id: "collectible-2-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1032,
      y: 361
    },
    {
      id: "collectible-2-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1102,
      y: 414
    },
    {
      id: "collectible-2-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1172,
      y: 140
    },
    {
      id: "collectible-2-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1242,
      y: 193
    },
    {
      id: "collectible-2-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1312,
      y: 246
    },
    {
      id: "collectible-2-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1382,
      y: 266
    },
    {
      id: "collectible-2-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1452,
      y: 319
    },
    {
      id: "collectible-2-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1522,
      y: 372
    },
    {
      id: "collectible-2-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1592,
      y: 392
    },
    {
      id: "collectible-2-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1662,
      y: 151
    },
    {
      id: "collectible-2-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1732,
      y: 204
    },
    {
      id: "collectible-2-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1802,
      y: 224
    },
    {
      id: "collectible-2-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1872,
      y: 277
    },
    {
      id: "collectible-2-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1942,
      y: 330
    },
    {
      id: "collectible-2-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2012,
      y: 350
    },
    {
      id: "collectible-2-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2082,
      y: 403
    },
    {
      id: "collectible-2-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2152,
      y: 162
    },
    {
      id: "collectible-2-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2222,
      y: 182
    },
    {
      id: "collectible-2-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2292,
      y: 235
    },
    {
      id: "collectible-2-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2362,
      y: 288
    },
    {
      id: "collectible-2-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2432,
      y: 308
    },
    {
      id: "collectible-2-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2502,
      y: 361
    },
    {
      id: "collectible-2-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2572,
      y: 414
    },
    {
      id: "collectible-2-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2642,
      y: 140
    },
    {
      id: "collectible-2-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2712,
      y: 193
    },
    {
      id: "collectible-2-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2782,
      y: 246
    },
    {
      id: "collectible-2-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2852,
      y: 266
    },
    {
      id: "collectible-2-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2922,
      y: 319
    },
    {
      id: "collectible-2-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2992,
      y: 372
    },
    {
      id: "collectible-2-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3062,
      y: 392
    },
    {
      id: "collectible-2-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3132,
      y: 151
    },
    {
      id: "collectible-2-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3202,
      y: 204
    },
    {
      id: "collectible-2-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3272,
      y: 224
    },
    {
      id: "collectible-2-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3342,
      y: 277
    },
    {
      id: "collectible-2-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3412,
      y: 330
    },
    {
      id: "collectible-2-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3482,
      y: 350
    },
    {
      id: "collectible-2-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3552,
      y: 403
    },
    {
      id: "collectible-2-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3622,
      y: 162
    },
    {
      id: "collectible-2-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3692,
      y: 182
    },
    {
      id: "collectible-2-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3762,
      y: 235
    },
    {
      id: "collectible-2-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3832,
      y: 288
    },
    {
      id: "collectible-2-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3902,
      y: 308
    },
    {
      id: "collectible-2-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3972,
      y: 361
    },
    {
      id: "collectible-2-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4042,
      y: 414
    },
    {
      id: "collectible-2-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4112,
      y: 140
    },
    {
      id: "collectible-2-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4182,
      y: 193
    },
    {
      id: "collectible-2-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4252,
      y: 246
    },
    {
      id: "collectible-2-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4322,
      y: 266
    },
    {
      id: "collectible-2-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4392,
      y: 319
    },
    {
      id: "collectible-2-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4462,
      y: 372
    },
    {
      id: "collectible-2-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4532,
      y: 392
    },
    {
      id: "collectible-2-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4602,
      y: 151
    },
    {
      id: "collectible-2-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4672,
      y: 204
    },
    {
      id: "collectible-2-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4742,
      y: 224
    }
  ],
  powerups: [
    {
      id: "powerup-2-1",
      kind: "springBoots",
      durationMs: 4800,
      x: 530,
      y: 130
    },
    {
      id: "powerup-2-2",
      kind: "starburst",
      durationMs: 5700,
      x: 1360,
      y: 182
    },
    {
      id: "powerup-2-3",
      kind: "gliderLeaf",
      durationMs: 6600,
      x: 2190,
      y: 234
    },
    {
      id: "powerup-2-4",
      kind: "shield",
      durationMs: 7500,
      x: 3020,
      y: 286
    },
    {
      id: "powerup-2-5",
      kind: "springBoots",
      durationMs: 4800,
      x: 3850,
      y: 338
    },
    {
      id: "powerup-2-6",
      kind: "starburst",
      durationMs: 5700,
      x: 4680,
      y: 130
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-2-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 0.1
    },
    {
      id: "moving-platform-2-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 0.7999999999999999
    },
    {
      id: "moving-platform-2-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 1.5
    },
    {
      id: "moving-platform-2-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 2.1999999999999997
    },
    {
      id: "moving-platform-2-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 2.9
    },
    {
      id: "moving-platform-2-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 3.6
    },
    {
      id: "moving-platform-2-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 4.299999999999999
    },
    {
      id: "moving-platform-2-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 4.999999999999999
    }
  ],
  hazards: [
    {
      id: "hazard-2-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 1
    },
    {
      id: "hazard-2-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 2
    },
    {
      id: "hazard-2-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 3
    },
    {
      id: "hazard-2-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 4
    },
    {
      id: "hazard-2-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 5
    },
    {
      id: "hazard-2-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 6
    },
    {
      id: "hazard-2-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 7
    },
    {
      id: "hazard-2-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 8
    },
    {
      id: "hazard-2-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 9
    },
    {
      id: "hazard-2-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 10
    },
    {
      id: "hazard-2-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 11
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-2-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-2-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-2-1",
      x: 674,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-2-2",
      x: 1444,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-2-3",
      x: 2214,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-2-4",
      x: 2984,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-2-5",
      x: 3754,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-2-6",
      x: 4524,
      y: 384,
      power: 1.46
    }
  ],
  windZones: [
    {
      id: "wind-2-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-2-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-2-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-2-4",
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
      id: "decor-2-1",
      layer: "near",
      motif: "vine",
      x: 23,
      y: 45,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-2",
      layer: "far",
      motif: "glassBerry",
      x: 120,
      y: 86,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-3",
      layer: "mid",
      motif: "cloud",
      x: 217,
      y: 127,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-4",
      layer: "far",
      motif: "windmill",
      x: 314,
      y: 168,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-5",
      layer: "mid",
      motif: "grass",
      x: 411,
      y: 209,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-6",
      layer: "near",
      motif: "gear",
      x: 508,
      y: 250,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-7",
      layer: "mid",
      motif: "vine",
      x: 605,
      y: 291,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-8",
      layer: "far",
      motif: "glassBerry",
      x: 702,
      y: 332,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-9",
      layer: "mid",
      motif: "cloud",
      x: 799,
      y: 373,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-10",
      layer: "far",
      motif: "windmill",
      x: 896,
      y: 414,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-11",
      layer: "near",
      motif: "grass",
      x: 993,
      y: 455,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-12",
      layer: "far",
      motif: "gear",
      x: 1090,
      y: 66,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-13",
      layer: "mid",
      motif: "vine",
      x: 1187,
      y: 107,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-14",
      layer: "far",
      motif: "glassBerry",
      x: 1284,
      y: 148,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-15",
      layer: "mid",
      motif: "cloud",
      x: 1381,
      y: 189,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-16",
      layer: "near",
      motif: "windmill",
      x: 1478,
      y: 230,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-17",
      layer: "mid",
      motif: "grass",
      x: 1575,
      y: 271,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-18",
      layer: "far",
      motif: "gear",
      x: 1672,
      y: 312,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-19",
      layer: "mid",
      motif: "vine",
      x: 1769,
      y: 353,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-20",
      layer: "far",
      motif: "glassBerry",
      x: 1866,
      y: 394,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-21",
      layer: "near",
      motif: "cloud",
      x: 1963,
      y: 435,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-22",
      layer: "far",
      motif: "windmill",
      x: 2060,
      y: 46,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-23",
      layer: "mid",
      motif: "grass",
      x: 2157,
      y: 87,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-24",
      layer: "far",
      motif: "gear",
      x: 2254,
      y: 128,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-25",
      layer: "mid",
      motif: "vine",
      x: 2351,
      y: 169,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-26",
      layer: "near",
      motif: "glassBerry",
      x: 2448,
      y: 210,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-27",
      layer: "mid",
      motif: "cloud",
      x: 2545,
      y: 251,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-28",
      layer: "far",
      motif: "windmill",
      x: 2642,
      y: 292,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-29",
      layer: "mid",
      motif: "grass",
      x: 2739,
      y: 333,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-30",
      layer: "far",
      motif: "gear",
      x: 2836,
      y: 374,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-31",
      layer: "near",
      motif: "vine",
      x: 2933,
      y: 415,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-32",
      layer: "far",
      motif: "glassBerry",
      x: 3030,
      y: 456,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-33",
      layer: "mid",
      motif: "cloud",
      x: 3127,
      y: 67,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-34",
      layer: "far",
      motif: "windmill",
      x: 3224,
      y: 108,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-35",
      layer: "mid",
      motif: "grass",
      x: 3321,
      y: 149,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-36",
      layer: "near",
      motif: "gear",
      x: 3418,
      y: 190,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-37",
      layer: "mid",
      motif: "vine",
      x: 3515,
      y: 231,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-38",
      layer: "far",
      motif: "glassBerry",
      x: 3612,
      y: 272,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-39",
      layer: "mid",
      motif: "cloud",
      x: 3709,
      y: 313,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-40",
      layer: "far",
      motif: "windmill",
      x: 3806,
      y: 354,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-41",
      layer: "near",
      motif: "grass",
      x: 3903,
      y: 395,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-42",
      layer: "far",
      motif: "gear",
      x: 4000,
      y: 436,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-43",
      layer: "mid",
      motif: "vine",
      x: 4097,
      y: 47,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-44",
      layer: "far",
      motif: "glassBerry",
      x: 4194,
      y: 88,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-45",
      layer: "mid",
      motif: "cloud",
      x: 4291,
      y: 129,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-46",
      layer: "near",
      motif: "windmill",
      x: 4388,
      y: 170,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-47",
      layer: "mid",
      motif: "grass",
      x: 4485,
      y: 211,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-48",
      layer: "far",
      motif: "gear",
      x: 4582,
      y: 252,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-49",
      layer: "mid",
      motif: "vine",
      x: 4679,
      y: 293,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-50",
      layer: "far",
      motif: "glassBerry",
      x: 4776,
      y: 334,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-51",
      layer: "near",
      motif: "cloud",
      x: 4873,
      y: 375,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-52",
      layer: "far",
      motif: "windmill",
      x: 42,
      y: 416,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-53",
      layer: "mid",
      motif: "grass",
      x: 139,
      y: 457,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-54",
      layer: "far",
      motif: "gear",
      x: 236,
      y: 68,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-55",
      layer: "mid",
      motif: "vine",
      x: 333,
      y: 109,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-56",
      layer: "near",
      motif: "glassBerry",
      x: 430,
      y: 150,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-57",
      layer: "mid",
      motif: "cloud",
      x: 527,
      y: 191,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-58",
      layer: "far",
      motif: "windmill",
      x: 624,
      y: 232,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-59",
      layer: "mid",
      motif: "grass",
      x: 721,
      y: 273,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-60",
      layer: "far",
      motif: "gear",
      x: 818,
      y: 314,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-61",
      layer: "near",
      motif: "vine",
      x: 915,
      y: 355,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-62",
      layer: "far",
      motif: "glassBerry",
      x: 1012,
      y: 396,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-63",
      layer: "mid",
      motif: "cloud",
      x: 1109,
      y: 437,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-64",
      layer: "far",
      motif: "windmill",
      x: 1206,
      y: 48,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-65",
      layer: "mid",
      motif: "grass",
      x: 1303,
      y: 89,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-66",
      layer: "near",
      motif: "gear",
      x: 1400,
      y: 130,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-67",
      layer: "mid",
      motif: "vine",
      x: 1497,
      y: 171,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-68",
      layer: "far",
      motif: "glassBerry",
      x: 1594,
      y: 212,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-69",
      layer: "mid",
      motif: "cloud",
      x: 1691,
      y: 253,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-70",
      layer: "far",
      motif: "windmill",
      x: 1788,
      y: 294,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-71",
      layer: "near",
      motif: "grass",
      x: 1885,
      y: 335,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-72",
      layer: "far",
      motif: "gear",
      x: 1982,
      y: 376,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-73",
      layer: "mid",
      motif: "vine",
      x: 2079,
      y: 417,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-74",
      layer: "far",
      motif: "glassBerry",
      x: 2176,
      y: 458,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-75",
      layer: "mid",
      motif: "cloud",
      x: 2273,
      y: 69,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-76",
      layer: "near",
      motif: "windmill",
      x: 2370,
      y: 110,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-77",
      layer: "mid",
      motif: "grass",
      x: 2467,
      y: 151,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-78",
      layer: "far",
      motif: "gear",
      x: 2564,
      y: 192,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-79",
      layer: "mid",
      motif: "vine",
      x: 2661,
      y: 233,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-80",
      layer: "far",
      motif: "glassBerry",
      x: 2758,
      y: 274,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-81",
      layer: "near",
      motif: "cloud",
      x: 2855,
      y: 315,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-82",
      layer: "far",
      motif: "windmill",
      x: 2952,
      y: 356,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-83",
      layer: "mid",
      motif: "grass",
      x: 3049,
      y: 397,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-84",
      layer: "far",
      motif: "gear",
      x: 3146,
      y: 438,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-85",
      layer: "mid",
      motif: "vine",
      x: 3243,
      y: 49,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-86",
      layer: "near",
      motif: "glassBerry",
      x: 3340,
      y: 90,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-87",
      layer: "mid",
      motif: "cloud",
      x: 3437,
      y: 131,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-88",
      layer: "far",
      motif: "windmill",
      x: 3534,
      y: 172,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-89",
      layer: "mid",
      motif: "grass",
      x: 3631,
      y: 213,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-90",
      layer: "far",
      motif: "gear",
      x: 3728,
      y: 254,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-91",
      layer: "near",
      motif: "vine",
      x: 3825,
      y: 295,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-92",
      layer: "far",
      motif: "glassBerry",
      x: 3922,
      y: 336,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-93",
      layer: "mid",
      motif: "cloud",
      x: 4019,
      y: 377,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-94",
      layer: "far",
      motif: "windmill",
      x: 4116,
      y: 418,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-95",
      layer: "mid",
      motif: "grass",
      x: 4213,
      y: 459,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-96",
      layer: "near",
      motif: "gear",
      x: 4310,
      y: 70,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-97",
      layer: "mid",
      motif: "vine",
      x: 4407,
      y: 111,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-98",
      layer: "far",
      motif: "glassBerry",
      x: 4504,
      y: 152,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-99",
      layer: "mid",
      motif: "cloud",
      x: 4601,
      y: 193,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-100",
      layer: "far",
      motif: "windmill",
      x: 4698,
      y: 234,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-101",
      layer: "near",
      motif: "grass",
      x: 4795,
      y: 275,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-102",
      layer: "far",
      motif: "gear",
      x: 4892,
      y: 316,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-103",
      layer: "mid",
      motif: "vine",
      x: 61,
      y: 357,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-104",
      layer: "far",
      motif: "glassBerry",
      x: 158,
      y: 398,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-105",
      layer: "mid",
      motif: "cloud",
      x: 255,
      y: 439,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-106",
      layer: "near",
      motif: "windmill",
      x: 352,
      y: 50,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-107",
      layer: "mid",
      motif: "grass",
      x: 449,
      y: 91,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-108",
      layer: "far",
      motif: "gear",
      x: 546,
      y: 132,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-109",
      layer: "mid",
      motif: "vine",
      x: 643,
      y: 173,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-110",
      layer: "far",
      motif: "glassBerry",
      x: 740,
      y: 214,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-111",
      layer: "near",
      motif: "cloud",
      x: 837,
      y: 255,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-112",
      layer: "far",
      motif: "windmill",
      x: 934,
      y: 296,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-113",
      layer: "mid",
      motif: "grass",
      x: 1031,
      y: 337,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-114",
      layer: "far",
      motif: "gear",
      x: 1128,
      y: 378,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-115",
      layer: "mid",
      motif: "vine",
      x: 1225,
      y: 419,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-116",
      layer: "near",
      motif: "glassBerry",
      x: 1322,
      y: 460,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-117",
      layer: "mid",
      motif: "cloud",
      x: 1419,
      y: 71,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-118",
      layer: "far",
      motif: "windmill",
      x: 1516,
      y: 112,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-119",
      layer: "mid",
      motif: "grass",
      x: 1613,
      y: 153,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-120",
      layer: "far",
      motif: "gear",
      x: 1710,
      y: 194,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-121",
      layer: "near",
      motif: "vine",
      x: 1807,
      y: 235,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-122",
      layer: "far",
      motif: "glassBerry",
      x: 1904,
      y: 276,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-123",
      layer: "mid",
      motif: "cloud",
      x: 2001,
      y: 317,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-124",
      layer: "far",
      motif: "windmill",
      x: 2098,
      y: 358,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-125",
      layer: "mid",
      motif: "grass",
      x: 2195,
      y: 399,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-126",
      layer: "near",
      motif: "gear",
      x: 2292,
      y: 440,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-127",
      layer: "mid",
      motif: "vine",
      x: 2389,
      y: 51,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-128",
      layer: "far",
      motif: "glassBerry",
      x: 2486,
      y: 92,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-129",
      layer: "mid",
      motif: "cloud",
      x: 2583,
      y: 133,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-130",
      layer: "far",
      motif: "windmill",
      x: 2680,
      y: 174,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-131",
      layer: "near",
      motif: "grass",
      x: 2777,
      y: 215,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-132",
      layer: "far",
      motif: "gear",
      x: 2874,
      y: 256,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-133",
      layer: "mid",
      motif: "vine",
      x: 2971,
      y: 297,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-134",
      layer: "far",
      motif: "glassBerry",
      x: 3068,
      y: 338,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-135",
      layer: "mid",
      motif: "cloud",
      x: 3165,
      y: 379,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-136",
      layer: "near",
      motif: "windmill",
      x: 3262,
      y: 420,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-137",
      layer: "mid",
      motif: "grass",
      x: 3359,
      y: 461,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-138",
      layer: "far",
      motif: "gear",
      x: 3456,
      y: 72,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-139",
      layer: "mid",
      motif: "vine",
      x: 3553,
      y: 113,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-140",
      layer: "far",
      motif: "glassBerry",
      x: 3650,
      y: 154,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-141",
      layer: "near",
      motif: "cloud",
      x: 3747,
      y: 195,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-142",
      layer: "far",
      motif: "windmill",
      x: 3844,
      y: 236,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-143",
      layer: "mid",
      motif: "grass",
      x: 3941,
      y: 277,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-144",
      layer: "far",
      motif: "gear",
      x: 4038,
      y: 318,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-145",
      layer: "mid",
      motif: "vine",
      x: 4135,
      y: 359,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-146",
      layer: "near",
      motif: "glassBerry",
      x: 4232,
      y: 400,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-147",
      layer: "mid",
      motif: "cloud",
      x: 4329,
      y: 441,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-148",
      layer: "far",
      motif: "windmill",
      x: 4426,
      y: 52,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-149",
      layer: "mid",
      motif: "grass",
      x: 4523,
      y: 93,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-150",
      layer: "far",
      motif: "gear",
      x: 4620,
      y: 134,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-151",
      layer: "near",
      motif: "vine",
      x: 4717,
      y: 175,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-152",
      layer: "far",
      motif: "glassBerry",
      x: 4814,
      y: 216,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-153",
      layer: "mid",
      motif: "cloud",
      x: 4911,
      y: 257,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-154",
      layer: "far",
      motif: "windmill",
      x: 80,
      y: 298,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-155",
      layer: "mid",
      motif: "grass",
      x: 177,
      y: 339,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-156",
      layer: "near",
      motif: "gear",
      x: 274,
      y: 380,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-157",
      layer: "mid",
      motif: "vine",
      x: 371,
      y: 421,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-158",
      layer: "far",
      motif: "glassBerry",
      x: 468,
      y: 32,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-159",
      layer: "mid",
      motif: "cloud",
      x: 565,
      y: 73,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-160",
      layer: "far",
      motif: "windmill",
      x: 662,
      y: 114,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-161",
      layer: "near",
      motif: "grass",
      x: 759,
      y: 155,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-162",
      layer: "far",
      motif: "gear",
      x: 856,
      y: 196,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-163",
      layer: "mid",
      motif: "vine",
      x: 953,
      y: 237,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-164",
      layer: "far",
      motif: "glassBerry",
      x: 1050,
      y: 278,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-165",
      layer: "mid",
      motif: "cloud",
      x: 1147,
      y: 319,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-166",
      layer: "near",
      motif: "windmill",
      x: 1244,
      y: 360,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-167",
      layer: "mid",
      motif: "grass",
      x: 1341,
      y: 401,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-168",
      layer: "far",
      motif: "gear",
      x: 1438,
      y: 442,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-169",
      layer: "mid",
      motif: "vine",
      x: 1535,
      y: 53,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-170",
      layer: "far",
      motif: "glassBerry",
      x: 1632,
      y: 94,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-2-171",
      layer: "near",
      motif: "cloud",
      x: 1729,
      y: 135,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-172",
      layer: "far",
      motif: "windmill",
      x: 1826,
      y: 176,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-2-173",
      layer: "mid",
      motif: "grass",
      x: 1923,
      y: 217,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-2-174",
      layer: "far",
      motif: "gear",
      x: 2020,
      y: 258,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-2-175",
      layer: "mid",
      motif: "vine",
      x: 2117,
      y: 299,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-2-176",
      layer: "near",
      motif: "glassBerry",
      x: 2214,
      y: 340,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-2-177",
      layer: "mid",
      motif: "cloud",
      x: 2311,
      y: 381,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-2-178",
      layer: "far",
      motif: "windmill",
      x: 2408,
      y: 422,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-2-179",
      layer: "mid",
      motif: "grass",
      x: 2505,
      y: 33,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-2-180",
      layer: "far",
      motif: "gear",
      x: 2602,
      y: 74,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-2",
    x: 4736,
    y: 448,
    nextLevelId: "level-03"
  }
};
