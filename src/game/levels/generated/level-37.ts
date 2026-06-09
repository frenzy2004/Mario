import type { LevelDefinition } from "../schema";

export const LEVEL_37: LevelDefinition = {
  id: "level-37",
  index: 36,
  title: "The Warden's Crown 02",
  chapter: "The Warden's Crown",
  columns: 154,
  rows: 18,
  timeLimit: 262,
  palette: {
    skyTop: 1013358,
    skyBottom: 8246268,
    ground: 2976596,
    groundAccent: 16498468,
    brass: 16498468,
    leaves: 2278750,
    hazard: 16478597,
    glow: 16707722
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
    "...................................####..........................#####.........................######........................#######......................",
    "..............................###...........................####..........................#####.........................######............................",
    ".........................=======.......................===...........................====..........................=====.........................=........",
    "....................######........................#######.......................###...........................####..........................#####.........",
    "...............#####.........................######........................#######.......................###...........................####...............",
    "..........====..........................=W===.........................======.W......................=======......W................===.....................",
    "................................S...................................S...................................S.................................................",
    "...P...................W...................................W...................................W...................................W................G.....",
    "..............S...................................S...................................S...................................S...............................",
    "^################^..##############^....############^...#############^..##############^....############^...#############^..##############^################^",
    "##################^.###############.^.^#############^.^##############.^###############^.^.#############.^.##############^.################################"
  ],
  enemies: [
    {
      id: "enemy-37-1",
      kind: "beetle",
      x: 448,
      y: 448,
      patrolMin: 353,
      patrolMax: 568,
      speed: 44,
      phase: 36
    },
    {
      id: "enemy-37-2",
      kind: "acorn",
      x: 778,
      y: 416,
      patrolMin: 665,
      patrolMax: 920,
      speed: 56,
      phase: 39
    },
    {
      id: "enemy-37-3",
      kind: "lantern",
      x: 1108,
      y: 384,
      patrolMin: 977,
      patrolMax: 1272,
      speed: 68,
      phase: 42
    },
    {
      id: "enemy-37-4",
      kind: "charger",
      x: 1438,
      y: 352,
      patrolMin: 1289,
      patrolMax: 1624,
      speed: 80,
      phase: 45
    },
    {
      id: "enemy-37-5",
      kind: "spiker",
      x: 1768,
      y: 320,
      patrolMin: 1673,
      patrolMax: 1976,
      speed: 92,
      phase: 48
    },
    {
      id: "enemy-37-6",
      kind: "turret",
      x: 2098,
      y: 448,
      patrolMin: 1985,
      patrolMax: 2218,
      speed: 104,
      phase: 51
    },
    {
      id: "enemy-37-7",
      kind: "beetle",
      x: 2428,
      y: 416,
      patrolMin: 2297,
      patrolMax: 2570,
      speed: 44,
      phase: 54
    },
    {
      id: "enemy-37-8",
      kind: "acorn",
      x: 2758,
      y: 384,
      patrolMin: 2609,
      patrolMax: 2922,
      speed: 56,
      phase: 57
    },
    {
      id: "enemy-37-9",
      kind: "lantern",
      x: 3088,
      y: 352,
      patrolMin: 2993,
      patrolMax: 3274,
      speed: 68,
      phase: 60
    },
    {
      id: "enemy-37-10",
      kind: "charger",
      x: 3418,
      y: 320,
      patrolMin: 3305,
      patrolMax: 3626,
      speed: 80,
      phase: 63
    },
    {
      id: "enemy-37-11",
      kind: "spiker",
      x: 3748,
      y: 448,
      patrolMin: 3617,
      patrolMax: 3868,
      speed: 92,
      phase: 66
    },
    {
      id: "enemy-37-12",
      kind: "turret",
      x: 4078,
      y: 416,
      patrolMin: 3929,
      patrolMax: 4220,
      speed: 104,
      phase: 69
    },
    {
      id: "enemy-37-13",
      kind: "beetle",
      x: 4408,
      y: 384,
      patrolMin: 4313,
      patrolMax: 4572,
      speed: 44,
      phase: 72
    },
    {
      id: "enemy-37-14",
      kind: "acorn",
      x: 4738,
      y: 352,
      patrolMin: 4625,
      patrolMax: 4748,
      speed: 56,
      phase: 75
    },
    {
      id: "enemy-37-15",
      kind: "lantern",
      x: 5068,
      y: 320,
      patrolMin: 4937,
      patrolMax: 4748,
      speed: 68,
      phase: 78
    },
    {
      id: "enemy-37-16",
      kind: "charger",
      x: 5398,
      y: 448,
      patrolMin: 5249,
      patrolMax: 4748,
      speed: 80,
      phase: 81
    }
  ],
  collectibles: [
    {
      id: "collectible-37-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 180,
      y: 140
    },
    {
      id: "collectible-37-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 250,
      y: 193
    },
    {
      id: "collectible-37-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 320,
      y: 246
    },
    {
      id: "collectible-37-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 390,
      y: 266
    },
    {
      id: "collectible-37-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 460,
      y: 319
    },
    {
      id: "collectible-37-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 530,
      y: 372
    },
    {
      id: "collectible-37-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 600,
      y: 392
    },
    {
      id: "collectible-37-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 670,
      y: 151
    },
    {
      id: "collectible-37-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 740,
      y: 204
    },
    {
      id: "collectible-37-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 810,
      y: 224
    },
    {
      id: "collectible-37-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 880,
      y: 277
    },
    {
      id: "collectible-37-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 950,
      y: 330
    },
    {
      id: "collectible-37-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1020,
      y: 350
    },
    {
      id: "collectible-37-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1090,
      y: 403
    },
    {
      id: "collectible-37-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1160,
      y: 162
    },
    {
      id: "collectible-37-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1230,
      y: 182
    },
    {
      id: "collectible-37-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1300,
      y: 235
    },
    {
      id: "collectible-37-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1370,
      y: 288
    },
    {
      id: "collectible-37-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1440,
      y: 308
    },
    {
      id: "collectible-37-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1510,
      y: 361
    },
    {
      id: "collectible-37-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1580,
      y: 414
    },
    {
      id: "collectible-37-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1650,
      y: 140
    },
    {
      id: "collectible-37-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1720,
      y: 193
    },
    {
      id: "collectible-37-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1790,
      y: 246
    },
    {
      id: "collectible-37-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1860,
      y: 266
    },
    {
      id: "collectible-37-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1930,
      y: 319
    },
    {
      id: "collectible-37-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2000,
      y: 372
    },
    {
      id: "collectible-37-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2070,
      y: 392
    },
    {
      id: "collectible-37-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2140,
      y: 151
    },
    {
      id: "collectible-37-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2210,
      y: 204
    },
    {
      id: "collectible-37-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2280,
      y: 224
    },
    {
      id: "collectible-37-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2350,
      y: 277
    },
    {
      id: "collectible-37-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2420,
      y: 330
    },
    {
      id: "collectible-37-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2490,
      y: 350
    },
    {
      id: "collectible-37-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2560,
      y: 403
    },
    {
      id: "collectible-37-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2630,
      y: 162
    },
    {
      id: "collectible-37-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2700,
      y: 182
    },
    {
      id: "collectible-37-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2770,
      y: 235
    },
    {
      id: "collectible-37-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2840,
      y: 288
    },
    {
      id: "collectible-37-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2910,
      y: 308
    },
    {
      id: "collectible-37-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2980,
      y: 361
    },
    {
      id: "collectible-37-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3050,
      y: 414
    },
    {
      id: "collectible-37-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3120,
      y: 140
    },
    {
      id: "collectible-37-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3190,
      y: 193
    },
    {
      id: "collectible-37-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3260,
      y: 246
    },
    {
      id: "collectible-37-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3330,
      y: 266
    },
    {
      id: "collectible-37-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3400,
      y: 319
    },
    {
      id: "collectible-37-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3470,
      y: 372
    },
    {
      id: "collectible-37-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3540,
      y: 392
    },
    {
      id: "collectible-37-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3610,
      y: 151
    },
    {
      id: "collectible-37-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3680,
      y: 204
    },
    {
      id: "collectible-37-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3750,
      y: 224
    },
    {
      id: "collectible-37-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3820,
      y: 277
    },
    {
      id: "collectible-37-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3890,
      y: 330
    },
    {
      id: "collectible-37-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3960,
      y: 350
    },
    {
      id: "collectible-37-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4030,
      y: 403
    },
    {
      id: "collectible-37-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4100,
      y: 162
    },
    {
      id: "collectible-37-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4170,
      y: 182
    },
    {
      id: "collectible-37-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4240,
      y: 235
    },
    {
      id: "collectible-37-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4310,
      y: 288
    },
    {
      id: "collectible-37-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4380,
      y: 308
    },
    {
      id: "collectible-37-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4450,
      y: 361
    }
  ],
  powerups: [
    {
      id: "powerup-37-1",
      kind: "shield",
      durationMs: 4800,
      x: 500,
      y: 130
    },
    {
      id: "powerup-37-2",
      kind: "springBoots",
      durationMs: 5700,
      x: 1330,
      y: 182
    },
    {
      id: "powerup-37-3",
      kind: "starburst",
      durationMs: 6600,
      x: 2160,
      y: 234
    },
    {
      id: "powerup-37-4",
      kind: "gliderLeaf",
      durationMs: 7500,
      x: 2990,
      y: 286
    },
    {
      id: "powerup-37-5",
      kind: "shield",
      durationMs: 4800,
      x: 3820,
      y: 338
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-37-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 3.6
    },
    {
      id: "moving-platform-37-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 4.3
    },
    {
      id: "moving-platform-37-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 5
    },
    {
      id: "moving-platform-37-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 5.699999999999999
    },
    {
      id: "moving-platform-37-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 6.4
    },
    {
      id: "moving-platform-37-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 7.1
    },
    {
      id: "moving-platform-37-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 7.799999999999999
    },
    {
      id: "moving-platform-37-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 8.5
    }
  ],
  hazards: [
    {
      id: "hazard-37-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 36
    },
    {
      id: "hazard-37-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 37
    },
    {
      id: "hazard-37-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 38
    },
    {
      id: "hazard-37-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 39
    },
    {
      id: "hazard-37-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 40
    },
    {
      id: "hazard-37-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 41
    },
    {
      id: "hazard-37-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 42
    },
    {
      id: "hazard-37-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 43
    },
    {
      id: "hazard-37-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 44
    },
    {
      id: "hazard-37-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 45
    },
    {
      id: "hazard-37-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 46
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-37-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-37-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-37-1",
      x: 640,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-37-2",
      x: 1410,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-37-3",
      x: 2180,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-37-4",
      x: 2950,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-37-5",
      x: 3720,
      y: 416,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-37-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-37-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-37-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    }
  ],
  decorations: [
    {
      id: "decor-37-1",
      layer: "near",
      motif: "gear",
      x: 828,
      y: 70,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-2",
      layer: "far",
      motif: "vine",
      x: 925,
      y: 111,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-3",
      layer: "mid",
      motif: "glassBerry",
      x: 1022,
      y: 152,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-4",
      layer: "far",
      motif: "cloud",
      x: 1119,
      y: 193,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-5",
      layer: "mid",
      motif: "windmill",
      x: 1216,
      y: 234,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-6",
      layer: "near",
      motif: "grass",
      x: 1313,
      y: 275,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-7",
      layer: "mid",
      motif: "gear",
      x: 1410,
      y: 316,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-8",
      layer: "far",
      motif: "vine",
      x: 1507,
      y: 357,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-9",
      layer: "mid",
      motif: "glassBerry",
      x: 1604,
      y: 398,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-10",
      layer: "far",
      motif: "cloud",
      x: 1701,
      y: 439,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-11",
      layer: "near",
      motif: "windmill",
      x: 1798,
      y: 50,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-12",
      layer: "far",
      motif: "grass",
      x: 1895,
      y: 91,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-13",
      layer: "mid",
      motif: "gear",
      x: 1992,
      y: 132,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-14",
      layer: "far",
      motif: "vine",
      x: 2089,
      y: 173,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-15",
      layer: "mid",
      motif: "glassBerry",
      x: 2186,
      y: 214,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-16",
      layer: "near",
      motif: "cloud",
      x: 2283,
      y: 255,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-17",
      layer: "mid",
      motif: "windmill",
      x: 2380,
      y: 296,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-18",
      layer: "far",
      motif: "grass",
      x: 2477,
      y: 337,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-19",
      layer: "mid",
      motif: "gear",
      x: 2574,
      y: 378,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-20",
      layer: "far",
      motif: "vine",
      x: 2671,
      y: 419,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-21",
      layer: "near",
      motif: "glassBerry",
      x: 2768,
      y: 460,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-22",
      layer: "far",
      motif: "cloud",
      x: 2865,
      y: 71,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-23",
      layer: "mid",
      motif: "windmill",
      x: 2962,
      y: 112,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-24",
      layer: "far",
      motif: "grass",
      x: 3059,
      y: 153,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-25",
      layer: "mid",
      motif: "gear",
      x: 3156,
      y: 194,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-26",
      layer: "near",
      motif: "vine",
      x: 3253,
      y: 235,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-27",
      layer: "mid",
      motif: "glassBerry",
      x: 3350,
      y: 276,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-28",
      layer: "far",
      motif: "cloud",
      x: 3447,
      y: 317,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-29",
      layer: "mid",
      motif: "windmill",
      x: 3544,
      y: 358,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-30",
      layer: "far",
      motif: "grass",
      x: 3641,
      y: 399,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-31",
      layer: "near",
      motif: "gear",
      x: 3738,
      y: 440,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-32",
      layer: "far",
      motif: "vine",
      x: 3835,
      y: 51,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-33",
      layer: "mid",
      motif: "glassBerry",
      x: 3932,
      y: 92,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-34",
      layer: "far",
      motif: "cloud",
      x: 4029,
      y: 133,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-35",
      layer: "mid",
      motif: "windmill",
      x: 4126,
      y: 174,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-36",
      layer: "near",
      motif: "grass",
      x: 4223,
      y: 215,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-37",
      layer: "mid",
      motif: "gear",
      x: 4320,
      y: 256,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-38",
      layer: "far",
      motif: "vine",
      x: 4417,
      y: 297,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-39",
      layer: "mid",
      motif: "glassBerry",
      x: 4514,
      y: 338,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-40",
      layer: "far",
      motif: "cloud",
      x: 4611,
      y: 379,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-41",
      layer: "near",
      motif: "windmill",
      x: 4708,
      y: 420,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-42",
      layer: "far",
      motif: "grass",
      x: 4805,
      y: 461,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-43",
      layer: "mid",
      motif: "gear",
      x: 4902,
      y: 72,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-44",
      layer: "far",
      motif: "vine",
      x: 71,
      y: 113,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-45",
      layer: "mid",
      motif: "glassBerry",
      x: 168,
      y: 154,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-46",
      layer: "near",
      motif: "cloud",
      x: 265,
      y: 195,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-47",
      layer: "mid",
      motif: "windmill",
      x: 362,
      y: 236,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-48",
      layer: "far",
      motif: "grass",
      x: 459,
      y: 277,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-49",
      layer: "mid",
      motif: "gear",
      x: 556,
      y: 318,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-50",
      layer: "far",
      motif: "vine",
      x: 653,
      y: 359,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-51",
      layer: "near",
      motif: "glassBerry",
      x: 750,
      y: 400,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-52",
      layer: "far",
      motif: "cloud",
      x: 847,
      y: 441,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-53",
      layer: "mid",
      motif: "windmill",
      x: 944,
      y: 52,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-54",
      layer: "far",
      motif: "grass",
      x: 1041,
      y: 93,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-55",
      layer: "mid",
      motif: "gear",
      x: 1138,
      y: 134,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-56",
      layer: "near",
      motif: "vine",
      x: 1235,
      y: 175,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-57",
      layer: "mid",
      motif: "glassBerry",
      x: 1332,
      y: 216,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-58",
      layer: "far",
      motif: "cloud",
      x: 1429,
      y: 257,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-59",
      layer: "mid",
      motif: "windmill",
      x: 1526,
      y: 298,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-60",
      layer: "far",
      motif: "grass",
      x: 1623,
      y: 339,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-61",
      layer: "near",
      motif: "gear",
      x: 1720,
      y: 380,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-62",
      layer: "far",
      motif: "vine",
      x: 1817,
      y: 421,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-63",
      layer: "mid",
      motif: "glassBerry",
      x: 1914,
      y: 32,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-64",
      layer: "far",
      motif: "cloud",
      x: 2011,
      y: 73,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-65",
      layer: "mid",
      motif: "windmill",
      x: 2108,
      y: 114,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-66",
      layer: "near",
      motif: "grass",
      x: 2205,
      y: 155,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-67",
      layer: "mid",
      motif: "gear",
      x: 2302,
      y: 196,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-68",
      layer: "far",
      motif: "vine",
      x: 2399,
      y: 237,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-69",
      layer: "mid",
      motif: "glassBerry",
      x: 2496,
      y: 278,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-70",
      layer: "far",
      motif: "cloud",
      x: 2593,
      y: 319,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-71",
      layer: "near",
      motif: "windmill",
      x: 2690,
      y: 360,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-72",
      layer: "far",
      motif: "grass",
      x: 2787,
      y: 401,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-73",
      layer: "mid",
      motif: "gear",
      x: 2884,
      y: 442,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-74",
      layer: "far",
      motif: "vine",
      x: 2981,
      y: 53,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-75",
      layer: "mid",
      motif: "glassBerry",
      x: 3078,
      y: 94,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-76",
      layer: "near",
      motif: "cloud",
      x: 3175,
      y: 135,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-77",
      layer: "mid",
      motif: "windmill",
      x: 3272,
      y: 176,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-78",
      layer: "far",
      motif: "grass",
      x: 3369,
      y: 217,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-79",
      layer: "mid",
      motif: "gear",
      x: 3466,
      y: 258,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-80",
      layer: "far",
      motif: "vine",
      x: 3563,
      y: 299,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-81",
      layer: "near",
      motif: "glassBerry",
      x: 3660,
      y: 340,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-82",
      layer: "far",
      motif: "cloud",
      x: 3757,
      y: 381,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-83",
      layer: "mid",
      motif: "windmill",
      x: 3854,
      y: 422,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-84",
      layer: "far",
      motif: "grass",
      x: 3951,
      y: 33,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-85",
      layer: "mid",
      motif: "gear",
      x: 4048,
      y: 74,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-86",
      layer: "near",
      motif: "vine",
      x: 4145,
      y: 115,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-87",
      layer: "mid",
      motif: "glassBerry",
      x: 4242,
      y: 156,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-88",
      layer: "far",
      motif: "cloud",
      x: 4339,
      y: 197,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-89",
      layer: "mid",
      motif: "windmill",
      x: 4436,
      y: 238,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-90",
      layer: "far",
      motif: "grass",
      x: 4533,
      y: 279,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-91",
      layer: "near",
      motif: "gear",
      x: 4630,
      y: 320,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-92",
      layer: "far",
      motif: "vine",
      x: 4727,
      y: 361,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-93",
      layer: "mid",
      motif: "glassBerry",
      x: 4824,
      y: 402,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-94",
      layer: "far",
      motif: "cloud",
      x: 4921,
      y: 443,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-95",
      layer: "mid",
      motif: "windmill",
      x: 90,
      y: 54,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-96",
      layer: "near",
      motif: "grass",
      x: 187,
      y: 95,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-97",
      layer: "mid",
      motif: "gear",
      x: 284,
      y: 136,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-98",
      layer: "far",
      motif: "vine",
      x: 381,
      y: 177,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-99",
      layer: "mid",
      motif: "glassBerry",
      x: 478,
      y: 218,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-100",
      layer: "far",
      motif: "cloud",
      x: 575,
      y: 259,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-101",
      layer: "near",
      motif: "windmill",
      x: 672,
      y: 300,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-102",
      layer: "far",
      motif: "grass",
      x: 769,
      y: 341,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-103",
      layer: "mid",
      motif: "gear",
      x: 866,
      y: 382,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-104",
      layer: "far",
      motif: "vine",
      x: 963,
      y: 423,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-105",
      layer: "mid",
      motif: "glassBerry",
      x: 1060,
      y: 34,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-106",
      layer: "near",
      motif: "cloud",
      x: 1157,
      y: 75,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-107",
      layer: "mid",
      motif: "windmill",
      x: 1254,
      y: 116,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-108",
      layer: "far",
      motif: "grass",
      x: 1351,
      y: 157,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-109",
      layer: "mid",
      motif: "gear",
      x: 1448,
      y: 198,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-110",
      layer: "far",
      motif: "vine",
      x: 1545,
      y: 239,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-111",
      layer: "near",
      motif: "glassBerry",
      x: 1642,
      y: 280,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-112",
      layer: "far",
      motif: "cloud",
      x: 1739,
      y: 321,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-113",
      layer: "mid",
      motif: "windmill",
      x: 1836,
      y: 362,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-114",
      layer: "far",
      motif: "grass",
      x: 1933,
      y: 403,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-115",
      layer: "mid",
      motif: "gear",
      x: 2030,
      y: 444,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-116",
      layer: "near",
      motif: "vine",
      x: 2127,
      y: 55,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-117",
      layer: "mid",
      motif: "glassBerry",
      x: 2224,
      y: 96,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-118",
      layer: "far",
      motif: "cloud",
      x: 2321,
      y: 137,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-119",
      layer: "mid",
      motif: "windmill",
      x: 2418,
      y: 178,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-120",
      layer: "far",
      motif: "grass",
      x: 2515,
      y: 219,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-121",
      layer: "near",
      motif: "gear",
      x: 2612,
      y: 260,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-122",
      layer: "far",
      motif: "vine",
      x: 2709,
      y: 301,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-123",
      layer: "mid",
      motif: "glassBerry",
      x: 2806,
      y: 342,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-124",
      layer: "far",
      motif: "cloud",
      x: 2903,
      y: 383,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-125",
      layer: "mid",
      motif: "windmill",
      x: 3000,
      y: 424,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-126",
      layer: "near",
      motif: "grass",
      x: 3097,
      y: 35,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-127",
      layer: "mid",
      motif: "gear",
      x: 3194,
      y: 76,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-128",
      layer: "far",
      motif: "vine",
      x: 3291,
      y: 117,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-129",
      layer: "mid",
      motif: "glassBerry",
      x: 3388,
      y: 158,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-130",
      layer: "far",
      motif: "cloud",
      x: 3485,
      y: 199,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-131",
      layer: "near",
      motif: "windmill",
      x: 3582,
      y: 240,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-132",
      layer: "far",
      motif: "grass",
      x: 3679,
      y: 281,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-133",
      layer: "mid",
      motif: "gear",
      x: 3776,
      y: 322,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-134",
      layer: "far",
      motif: "vine",
      x: 3873,
      y: 363,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-135",
      layer: "mid",
      motif: "glassBerry",
      x: 3970,
      y: 404,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-136",
      layer: "near",
      motif: "cloud",
      x: 4067,
      y: 445,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-137",
      layer: "mid",
      motif: "windmill",
      x: 4164,
      y: 56,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-138",
      layer: "far",
      motif: "grass",
      x: 4261,
      y: 97,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-139",
      layer: "mid",
      motif: "gear",
      x: 4358,
      y: 138,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-140",
      layer: "far",
      motif: "vine",
      x: 4455,
      y: 179,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-141",
      layer: "near",
      motif: "glassBerry",
      x: 4552,
      y: 220,
      scale: 1,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-142",
      layer: "far",
      motif: "cloud",
      x: 4649,
      y: 261,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-143",
      layer: "mid",
      motif: "windmill",
      x: 4746,
      y: 302,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-144",
      layer: "far",
      motif: "grass",
      x: 4843,
      y: 343,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-145",
      layer: "mid",
      motif: "gear",
      x: 12,
      y: 384,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-146",
      layer: "near",
      motif: "vine",
      x: 109,
      y: 425,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-147",
      layer: "mid",
      motif: "glassBerry",
      x: 206,
      y: 36,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-148",
      layer: "far",
      motif: "cloud",
      x: 303,
      y: 77,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-149",
      layer: "mid",
      motif: "windmill",
      x: 400,
      y: 118,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-150",
      layer: "far",
      motif: "grass",
      x: 497,
      y: 159,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-151",
      layer: "near",
      motif: "gear",
      x: 594,
      y: 200,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-152",
      layer: "far",
      motif: "vine",
      x: 691,
      y: 241,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-153",
      layer: "mid",
      motif: "glassBerry",
      x: 788,
      y: 282,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-154",
      layer: "far",
      motif: "cloud",
      x: 885,
      y: 323,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-155",
      layer: "mid",
      motif: "windmill",
      x: 982,
      y: 364,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-156",
      layer: "near",
      motif: "grass",
      x: 1079,
      y: 405,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-157",
      layer: "mid",
      motif: "gear",
      x: 1176,
      y: 446,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-158",
      layer: "far",
      motif: "vine",
      x: 1273,
      y: 57,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-159",
      layer: "mid",
      motif: "glassBerry",
      x: 1370,
      y: 98,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-160",
      layer: "far",
      motif: "cloud",
      x: 1467,
      y: 139,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-161",
      layer: "near",
      motif: "windmill",
      x: 1564,
      y: 180,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-162",
      layer: "far",
      motif: "grass",
      x: 1661,
      y: 221,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-163",
      layer: "mid",
      motif: "gear",
      x: 1758,
      y: 262,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-164",
      layer: "far",
      motif: "vine",
      x: 1855,
      y: 303,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-165",
      layer: "mid",
      motif: "glassBerry",
      x: 1952,
      y: 344,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-166",
      layer: "near",
      motif: "cloud",
      x: 2049,
      y: 385,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-167",
      layer: "mid",
      motif: "windmill",
      x: 2146,
      y: 426,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-168",
      layer: "far",
      motif: "grass",
      x: 2243,
      y: 37,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-169",
      layer: "mid",
      motif: "gear",
      x: 2340,
      y: 78,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-170",
      layer: "far",
      motif: "vine",
      x: 2437,
      y: 119,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-37-171",
      layer: "near",
      motif: "glassBerry",
      x: 2534,
      y: 160,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-172",
      layer: "far",
      motif: "cloud",
      x: 2631,
      y: 201,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-37-173",
      layer: "mid",
      motif: "windmill",
      x: 2728,
      y: 242,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-37-174",
      layer: "far",
      motif: "grass",
      x: 2825,
      y: 283,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-37-175",
      layer: "mid",
      motif: "gear",
      x: 2922,
      y: 324,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-37-176",
      layer: "near",
      motif: "vine",
      x: 3019,
      y: 365,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.82
    },
    {
      id: "decor-37-177",
      layer: "mid",
      motif: "glassBerry",
      x: 3116,
      y: 406,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-37-178",
      layer: "far",
      motif: "cloud",
      x: 3213,
      y: 447,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-37-179",
      layer: "mid",
      motif: "windmill",
      x: 3310,
      y: 58,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-37-180",
      layer: "far",
      motif: "grass",
      x: 3407,
      y: 99,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-37",
    x: 4736,
    y: 448,
    nextLevelId: "level-38"
  }
};
