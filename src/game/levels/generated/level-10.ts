import type { LevelDefinition } from "../schema";

export const LEVEL_10: LevelDefinition = {
  id: "level-10",
  index: 9,
  title: "Glassberry Lift 03",
  chapter: "Glassberry Lift",
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
    ".....................####..........................#####.........................######........................#######.......................###..........",
    "................###...........................####..........................#####.........................######........................#######...........",
    "...........=======.......................===...........................====..........................=====.........................======.................",
    "....................................#######.......................###...........................####..........................#####.......................",
    "...............................######........................#######.......................###...........................####.............................",
    "..........................=====.............W...........======..................W.....=======.......................W==...................................",
    "...................................S...................................S...................................S..............................................",
    "...P......................W...................................W...................................W...................................W.............G.....",
    ".................S...................................S...................................S...................................S............................",
    "^################^..############....##########...##^########..######^#####....#######^##...###########..############....##########...###^################^",
    "##################.^############.^.^##########.^.###########.^############.^.^##########.^.###########.^############.^.^##########.^.#####################"
  ],
  enemies: [
    {
      id: "enemy-10-1",
      kind: "charger",
      x: 532,
      y: 448,
      patrolMin: 437,
      patrolMax: 652,
      speed: 80,
      phase: 9
    },
    {
      id: "enemy-10-2",
      kind: "spiker",
      x: 862,
      y: 416,
      patrolMin: 749,
      patrolMax: 1004,
      speed: 92,
      phase: 12
    },
    {
      id: "enemy-10-3",
      kind: "turret",
      x: 1192,
      y: 384,
      patrolMin: 1061,
      patrolMax: 1356,
      speed: 104,
      phase: 15
    },
    {
      id: "enemy-10-4",
      kind: "beetle",
      x: 1522,
      y: 352,
      patrolMin: 1373,
      patrolMax: 1708,
      speed: 44,
      phase: 18
    },
    {
      id: "enemy-10-5",
      kind: "acorn",
      x: 1852,
      y: 320,
      patrolMin: 1757,
      patrolMax: 2060,
      speed: 56,
      phase: 21
    },
    {
      id: "enemy-10-6",
      kind: "lantern",
      x: 2182,
      y: 448,
      patrolMin: 2069,
      patrolMax: 2302,
      speed: 68,
      phase: 24
    },
    {
      id: "enemy-10-7",
      kind: "charger",
      x: 2512,
      y: 416,
      patrolMin: 2381,
      patrolMax: 2654,
      speed: 80,
      phase: 27
    },
    {
      id: "enemy-10-8",
      kind: "spiker",
      x: 2842,
      y: 384,
      patrolMin: 2693,
      patrolMax: 3006,
      speed: 92,
      phase: 30
    },
    {
      id: "enemy-10-9",
      kind: "turret",
      x: 3172,
      y: 352,
      patrolMin: 3077,
      patrolMax: 3358,
      speed: 104,
      phase: 33
    },
    {
      id: "enemy-10-10",
      kind: "beetle",
      x: 3502,
      y: 320,
      patrolMin: 3389,
      patrolMax: 3710,
      speed: 44,
      phase: 36
    },
    {
      id: "enemy-10-11",
      kind: "acorn",
      x: 3832,
      y: 448,
      patrolMin: 3701,
      patrolMax: 3952,
      speed: 56,
      phase: 39
    },
    {
      id: "enemy-10-12",
      kind: "lantern",
      x: 4162,
      y: 416,
      patrolMin: 4013,
      patrolMax: 4304,
      speed: 68,
      phase: 42
    },
    {
      id: "enemy-10-13",
      kind: "charger",
      x: 4492,
      y: 384,
      patrolMin: 4397,
      patrolMax: 4656,
      speed: 80,
      phase: 45
    }
  ],
  collectibles: [
    {
      id: "collectible-10-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 192,
      y: 140
    },
    {
      id: "collectible-10-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 262,
      y: 193
    },
    {
      id: "collectible-10-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 332,
      y: 246
    },
    {
      id: "collectible-10-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 402,
      y: 266
    },
    {
      id: "collectible-10-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 472,
      y: 319
    },
    {
      id: "collectible-10-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 542,
      y: 372
    },
    {
      id: "collectible-10-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 612,
      y: 392
    },
    {
      id: "collectible-10-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 682,
      y: 151
    },
    {
      id: "collectible-10-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 752,
      y: 204
    },
    {
      id: "collectible-10-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 822,
      y: 224
    },
    {
      id: "collectible-10-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 892,
      y: 277
    },
    {
      id: "collectible-10-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 962,
      y: 330
    },
    {
      id: "collectible-10-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1032,
      y: 350
    },
    {
      id: "collectible-10-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1102,
      y: 403
    },
    {
      id: "collectible-10-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1172,
      y: 162
    },
    {
      id: "collectible-10-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1242,
      y: 182
    },
    {
      id: "collectible-10-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1312,
      y: 235
    },
    {
      id: "collectible-10-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1382,
      y: 288
    },
    {
      id: "collectible-10-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1452,
      y: 308
    },
    {
      id: "collectible-10-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1522,
      y: 361
    },
    {
      id: "collectible-10-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1592,
      y: 414
    },
    {
      id: "collectible-10-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1662,
      y: 140
    },
    {
      id: "collectible-10-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1732,
      y: 193
    },
    {
      id: "collectible-10-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1802,
      y: 246
    },
    {
      id: "collectible-10-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1872,
      y: 266
    },
    {
      id: "collectible-10-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1942,
      y: 319
    },
    {
      id: "collectible-10-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2012,
      y: 372
    },
    {
      id: "collectible-10-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2082,
      y: 392
    },
    {
      id: "collectible-10-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2152,
      y: 151
    },
    {
      id: "collectible-10-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2222,
      y: 204
    },
    {
      id: "collectible-10-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2292,
      y: 224
    },
    {
      id: "collectible-10-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2362,
      y: 277
    },
    {
      id: "collectible-10-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2432,
      y: 330
    },
    {
      id: "collectible-10-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2502,
      y: 350
    },
    {
      id: "collectible-10-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2572,
      y: 403
    },
    {
      id: "collectible-10-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2642,
      y: 162
    },
    {
      id: "collectible-10-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2712,
      y: 182
    },
    {
      id: "collectible-10-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2782,
      y: 235
    },
    {
      id: "collectible-10-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2852,
      y: 288
    },
    {
      id: "collectible-10-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2922,
      y: 308
    },
    {
      id: "collectible-10-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2992,
      y: 361
    },
    {
      id: "collectible-10-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3062,
      y: 414
    },
    {
      id: "collectible-10-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3132,
      y: 140
    },
    {
      id: "collectible-10-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3202,
      y: 193
    },
    {
      id: "collectible-10-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3272,
      y: 246
    },
    {
      id: "collectible-10-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3342,
      y: 266
    },
    {
      id: "collectible-10-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3412,
      y: 319
    },
    {
      id: "collectible-10-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3482,
      y: 372
    },
    {
      id: "collectible-10-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3552,
      y: 392
    },
    {
      id: "collectible-10-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3622,
      y: 151
    },
    {
      id: "collectible-10-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3692,
      y: 204
    },
    {
      id: "collectible-10-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3762,
      y: 224
    },
    {
      id: "collectible-10-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3832,
      y: 277
    },
    {
      id: "collectible-10-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3902,
      y: 330
    },
    {
      id: "collectible-10-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3972,
      y: 350
    },
    {
      id: "collectible-10-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4042,
      y: 403
    },
    {
      id: "collectible-10-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4112,
      y: 162
    },
    {
      id: "collectible-10-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4182,
      y: 182
    },
    {
      id: "collectible-10-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4252,
      y: 235
    },
    {
      id: "collectible-10-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4322,
      y: 288
    },
    {
      id: "collectible-10-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4392,
      y: 308
    },
    {
      id: "collectible-10-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4462,
      y: 361
    }
  ],
  powerups: [
    {
      id: "powerup-10-1",
      kind: "springBoots",
      durationMs: 4800,
      x: 590,
      y: 130
    },
    {
      id: "powerup-10-2",
      kind: "starburst",
      durationMs: 5700,
      x: 1420,
      y: 182
    },
    {
      id: "powerup-10-3",
      kind: "gliderLeaf",
      durationMs: 6600,
      x: 2250,
      y: 234
    },
    {
      id: "powerup-10-4",
      kind: "shield",
      durationMs: 7500,
      x: 3080,
      y: 286
    },
    {
      id: "powerup-10-5",
      kind: "springBoots",
      durationMs: 4800,
      x: 3910,
      y: 338
    },
    {
      id: "powerup-10-6",
      kind: "starburst",
      durationMs: 5700,
      x: 4740,
      y: 130
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-10-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 0.9
    },
    {
      id: "moving-platform-10-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 1.6
    },
    {
      id: "moving-platform-10-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 2.3
    },
    {
      id: "moving-platform-10-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 2.9999999999999996
    },
    {
      id: "moving-platform-10-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 3.6999999999999997
    },
    {
      id: "moving-platform-10-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 4.4
    },
    {
      id: "moving-platform-10-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 5.1
    },
    {
      id: "moving-platform-10-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 5.8
    },
    {
      id: "moving-platform-10-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 6.5
    },
    {
      id: "moving-platform-10-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 7.2
    },
    {
      id: "moving-platform-10-11",
      x: 6040,
      y: 250,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 7.9
    }
  ],
  hazards: [
    {
      id: "hazard-10-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 9
    },
    {
      id: "hazard-10-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 10
    },
    {
      id: "hazard-10-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 11
    },
    {
      id: "hazard-10-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 12
    },
    {
      id: "hazard-10-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 13
    },
    {
      id: "hazard-10-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 14
    },
    {
      id: "hazard-10-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 15
    },
    {
      id: "hazard-10-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 16
    },
    {
      id: "hazard-10-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 17
    },
    {
      id: "hazard-10-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 18
    },
    {
      id: "hazard-10-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 19
    },
    {
      id: "hazard-10-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 20
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-10-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-10-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-10-1",
      x: 640,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-10-2",
      x: 1410,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-10-3",
      x: 2180,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-10-4",
      x: 2950,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-10-5",
      x: 3720,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-10-6",
      x: 4490,
      y: 384,
      power: 1.46
    }
  ],
  windZones: [
    {
      id: "wind-10-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-10-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-10-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-10-4",
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
      id: "decor-10-1",
      layer: "near",
      motif: "cloud",
      x: 207,
      y: 149,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-2",
      layer: "far",
      motif: "windmill",
      x: 304,
      y: 190,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-3",
      layer: "mid",
      motif: "grass",
      x: 401,
      y: 231,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-4",
      layer: "far",
      motif: "gear",
      x: 498,
      y: 272,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-5",
      layer: "mid",
      motif: "vine",
      x: 595,
      y: 313,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-6",
      layer: "near",
      motif: "glassBerry",
      x: 692,
      y: 354,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-7",
      layer: "mid",
      motif: "cloud",
      x: 789,
      y: 395,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-8",
      layer: "far",
      motif: "windmill",
      x: 886,
      y: 436,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-9",
      layer: "mid",
      motif: "grass",
      x: 983,
      y: 47,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-10",
      layer: "far",
      motif: "gear",
      x: 1080,
      y: 88,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-11",
      layer: "near",
      motif: "vine",
      x: 1177,
      y: 129,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-12",
      layer: "far",
      motif: "glassBerry",
      x: 1274,
      y: 170,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-13",
      layer: "mid",
      motif: "cloud",
      x: 1371,
      y: 211,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-14",
      layer: "far",
      motif: "windmill",
      x: 1468,
      y: 252,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-15",
      layer: "mid",
      motif: "grass",
      x: 1565,
      y: 293,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-16",
      layer: "near",
      motif: "gear",
      x: 1662,
      y: 334,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-17",
      layer: "mid",
      motif: "vine",
      x: 1759,
      y: 375,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-18",
      layer: "far",
      motif: "glassBerry",
      x: 1856,
      y: 416,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-19",
      layer: "mid",
      motif: "cloud",
      x: 1953,
      y: 457,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-20",
      layer: "far",
      motif: "windmill",
      x: 2050,
      y: 68,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-21",
      layer: "near",
      motif: "grass",
      x: 2147,
      y: 109,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-22",
      layer: "far",
      motif: "gear",
      x: 2244,
      y: 150,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-23",
      layer: "mid",
      motif: "vine",
      x: 2341,
      y: 191,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-24",
      layer: "far",
      motif: "glassBerry",
      x: 2438,
      y: 232,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-25",
      layer: "mid",
      motif: "cloud",
      x: 2535,
      y: 273,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-26",
      layer: "near",
      motif: "windmill",
      x: 2632,
      y: 314,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-27",
      layer: "mid",
      motif: "grass",
      x: 2729,
      y: 355,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-28",
      layer: "far",
      motif: "gear",
      x: 2826,
      y: 396,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-29",
      layer: "mid",
      motif: "vine",
      x: 2923,
      y: 437,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-30",
      layer: "far",
      motif: "glassBerry",
      x: 3020,
      y: 48,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-31",
      layer: "near",
      motif: "cloud",
      x: 3117,
      y: 89,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-32",
      layer: "far",
      motif: "windmill",
      x: 3214,
      y: 130,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-33",
      layer: "mid",
      motif: "grass",
      x: 3311,
      y: 171,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-34",
      layer: "far",
      motif: "gear",
      x: 3408,
      y: 212,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-35",
      layer: "mid",
      motif: "vine",
      x: 3505,
      y: 253,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-36",
      layer: "near",
      motif: "glassBerry",
      x: 3602,
      y: 294,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-37",
      layer: "mid",
      motif: "cloud",
      x: 3699,
      y: 335,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-38",
      layer: "far",
      motif: "windmill",
      x: 3796,
      y: 376,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-39",
      layer: "mid",
      motif: "grass",
      x: 3893,
      y: 417,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-40",
      layer: "far",
      motif: "gear",
      x: 3990,
      y: 458,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-41",
      layer: "near",
      motif: "vine",
      x: 4087,
      y: 69,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-42",
      layer: "far",
      motif: "glassBerry",
      x: 4184,
      y: 110,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-43",
      layer: "mid",
      motif: "cloud",
      x: 4281,
      y: 151,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-44",
      layer: "far",
      motif: "windmill",
      x: 4378,
      y: 192,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-45",
      layer: "mid",
      motif: "grass",
      x: 4475,
      y: 233,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-46",
      layer: "near",
      motif: "gear",
      x: 4572,
      y: 274,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-47",
      layer: "mid",
      motif: "vine",
      x: 4669,
      y: 315,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-48",
      layer: "far",
      motif: "glassBerry",
      x: 4766,
      y: 356,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-49",
      layer: "mid",
      motif: "cloud",
      x: 4863,
      y: 397,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-50",
      layer: "far",
      motif: "windmill",
      x: 32,
      y: 438,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-51",
      layer: "near",
      motif: "grass",
      x: 129,
      y: 49,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-52",
      layer: "far",
      motif: "gear",
      x: 226,
      y: 90,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-53",
      layer: "mid",
      motif: "vine",
      x: 323,
      y: 131,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-54",
      layer: "far",
      motif: "glassBerry",
      x: 420,
      y: 172,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-55",
      layer: "mid",
      motif: "cloud",
      x: 517,
      y: 213,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-56",
      layer: "near",
      motif: "windmill",
      x: 614,
      y: 254,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-57",
      layer: "mid",
      motif: "grass",
      x: 711,
      y: 295,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-58",
      layer: "far",
      motif: "gear",
      x: 808,
      y: 336,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-59",
      layer: "mid",
      motif: "vine",
      x: 905,
      y: 377,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-60",
      layer: "far",
      motif: "glassBerry",
      x: 1002,
      y: 418,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-61",
      layer: "near",
      motif: "cloud",
      x: 1099,
      y: 459,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-62",
      layer: "far",
      motif: "windmill",
      x: 1196,
      y: 70,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-63",
      layer: "mid",
      motif: "grass",
      x: 1293,
      y: 111,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-64",
      layer: "far",
      motif: "gear",
      x: 1390,
      y: 152,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-65",
      layer: "mid",
      motif: "vine",
      x: 1487,
      y: 193,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-66",
      layer: "near",
      motif: "glassBerry",
      x: 1584,
      y: 234,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-67",
      layer: "mid",
      motif: "cloud",
      x: 1681,
      y: 275,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-68",
      layer: "far",
      motif: "windmill",
      x: 1778,
      y: 316,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-69",
      layer: "mid",
      motif: "grass",
      x: 1875,
      y: 357,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-70",
      layer: "far",
      motif: "gear",
      x: 1972,
      y: 398,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-71",
      layer: "near",
      motif: "vine",
      x: 2069,
      y: 439,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-72",
      layer: "far",
      motif: "glassBerry",
      x: 2166,
      y: 50,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-73",
      layer: "mid",
      motif: "cloud",
      x: 2263,
      y: 91,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-74",
      layer: "far",
      motif: "windmill",
      x: 2360,
      y: 132,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-75",
      layer: "mid",
      motif: "grass",
      x: 2457,
      y: 173,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-76",
      layer: "near",
      motif: "gear",
      x: 2554,
      y: 214,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-77",
      layer: "mid",
      motif: "vine",
      x: 2651,
      y: 255,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-78",
      layer: "far",
      motif: "glassBerry",
      x: 2748,
      y: 296,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-79",
      layer: "mid",
      motif: "cloud",
      x: 2845,
      y: 337,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-80",
      layer: "far",
      motif: "windmill",
      x: 2942,
      y: 378,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-81",
      layer: "near",
      motif: "grass",
      x: 3039,
      y: 419,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-82",
      layer: "far",
      motif: "gear",
      x: 3136,
      y: 460,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-83",
      layer: "mid",
      motif: "vine",
      x: 3233,
      y: 71,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-84",
      layer: "far",
      motif: "glassBerry",
      x: 3330,
      y: 112,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-85",
      layer: "mid",
      motif: "cloud",
      x: 3427,
      y: 153,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-86",
      layer: "near",
      motif: "windmill",
      x: 3524,
      y: 194,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-87",
      layer: "mid",
      motif: "grass",
      x: 3621,
      y: 235,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-88",
      layer: "far",
      motif: "gear",
      x: 3718,
      y: 276,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-89",
      layer: "mid",
      motif: "vine",
      x: 3815,
      y: 317,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-90",
      layer: "far",
      motif: "glassBerry",
      x: 3912,
      y: 358,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-91",
      layer: "near",
      motif: "cloud",
      x: 4009,
      y: 399,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-92",
      layer: "far",
      motif: "windmill",
      x: 4106,
      y: 440,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-93",
      layer: "mid",
      motif: "grass",
      x: 4203,
      y: 51,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-94",
      layer: "far",
      motif: "gear",
      x: 4300,
      y: 92,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-95",
      layer: "mid",
      motif: "vine",
      x: 4397,
      y: 133,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-96",
      layer: "near",
      motif: "glassBerry",
      x: 4494,
      y: 174,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-97",
      layer: "mid",
      motif: "cloud",
      x: 4591,
      y: 215,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-98",
      layer: "far",
      motif: "windmill",
      x: 4688,
      y: 256,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-99",
      layer: "mid",
      motif: "grass",
      x: 4785,
      y: 297,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-100",
      layer: "far",
      motif: "gear",
      x: 4882,
      y: 338,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-101",
      layer: "near",
      motif: "vine",
      x: 51,
      y: 379,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-102",
      layer: "far",
      motif: "glassBerry",
      x: 148,
      y: 420,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-103",
      layer: "mid",
      motif: "cloud",
      x: 245,
      y: 461,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-104",
      layer: "far",
      motif: "windmill",
      x: 342,
      y: 72,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-105",
      layer: "mid",
      motif: "grass",
      x: 439,
      y: 113,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-106",
      layer: "near",
      motif: "gear",
      x: 536,
      y: 154,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-107",
      layer: "mid",
      motif: "vine",
      x: 633,
      y: 195,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-108",
      layer: "far",
      motif: "glassBerry",
      x: 730,
      y: 236,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-109",
      layer: "mid",
      motif: "cloud",
      x: 827,
      y: 277,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-110",
      layer: "far",
      motif: "windmill",
      x: 924,
      y: 318,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-111",
      layer: "near",
      motif: "grass",
      x: 1021,
      y: 359,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-112",
      layer: "far",
      motif: "gear",
      x: 1118,
      y: 400,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-113",
      layer: "mid",
      motif: "vine",
      x: 1215,
      y: 441,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-114",
      layer: "far",
      motif: "glassBerry",
      x: 1312,
      y: 52,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-115",
      layer: "mid",
      motif: "cloud",
      x: 1409,
      y: 93,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-116",
      layer: "near",
      motif: "windmill",
      x: 1506,
      y: 134,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-117",
      layer: "mid",
      motif: "grass",
      x: 1603,
      y: 175,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-118",
      layer: "far",
      motif: "gear",
      x: 1700,
      y: 216,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-119",
      layer: "mid",
      motif: "vine",
      x: 1797,
      y: 257,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-120",
      layer: "far",
      motif: "glassBerry",
      x: 1894,
      y: 298,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-121",
      layer: "near",
      motif: "cloud",
      x: 1991,
      y: 339,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-122",
      layer: "far",
      motif: "windmill",
      x: 2088,
      y: 380,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-123",
      layer: "mid",
      motif: "grass",
      x: 2185,
      y: 421,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-124",
      layer: "far",
      motif: "gear",
      x: 2282,
      y: 32,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-125",
      layer: "mid",
      motif: "vine",
      x: 2379,
      y: 73,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-126",
      layer: "near",
      motif: "glassBerry",
      x: 2476,
      y: 114,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-127",
      layer: "mid",
      motif: "cloud",
      x: 2573,
      y: 155,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-128",
      layer: "far",
      motif: "windmill",
      x: 2670,
      y: 196,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-129",
      layer: "mid",
      motif: "grass",
      x: 2767,
      y: 237,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-130",
      layer: "far",
      motif: "gear",
      x: 2864,
      y: 278,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-131",
      layer: "near",
      motif: "vine",
      x: 2961,
      y: 319,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-132",
      layer: "far",
      motif: "glassBerry",
      x: 3058,
      y: 360,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-133",
      layer: "mid",
      motif: "cloud",
      x: 3155,
      y: 401,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-134",
      layer: "far",
      motif: "windmill",
      x: 3252,
      y: 442,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-135",
      layer: "mid",
      motif: "grass",
      x: 3349,
      y: 53,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-136",
      layer: "near",
      motif: "gear",
      x: 3446,
      y: 94,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-137",
      layer: "mid",
      motif: "vine",
      x: 3543,
      y: 135,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-138",
      layer: "far",
      motif: "glassBerry",
      x: 3640,
      y: 176,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-139",
      layer: "mid",
      motif: "cloud",
      x: 3737,
      y: 217,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-140",
      layer: "far",
      motif: "windmill",
      x: 3834,
      y: 258,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-141",
      layer: "near",
      motif: "grass",
      x: 3931,
      y: 299,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-142",
      layer: "far",
      motif: "gear",
      x: 4028,
      y: 340,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-143",
      layer: "mid",
      motif: "vine",
      x: 4125,
      y: 381,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-144",
      layer: "far",
      motif: "glassBerry",
      x: 4222,
      y: 422,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-145",
      layer: "mid",
      motif: "cloud",
      x: 4319,
      y: 33,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-146",
      layer: "near",
      motif: "windmill",
      x: 4416,
      y: 74,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-147",
      layer: "mid",
      motif: "grass",
      x: 4513,
      y: 115,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-148",
      layer: "far",
      motif: "gear",
      x: 4610,
      y: 156,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-149",
      layer: "mid",
      motif: "vine",
      x: 4707,
      y: 197,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-150",
      layer: "far",
      motif: "glassBerry",
      x: 4804,
      y: 238,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-151",
      layer: "near",
      motif: "cloud",
      x: 4901,
      y: 279,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-152",
      layer: "far",
      motif: "windmill",
      x: 70,
      y: 320,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-153",
      layer: "mid",
      motif: "grass",
      x: 167,
      y: 361,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-154",
      layer: "far",
      motif: "gear",
      x: 264,
      y: 402,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-155",
      layer: "mid",
      motif: "vine",
      x: 361,
      y: 443,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-156",
      layer: "near",
      motif: "glassBerry",
      x: 458,
      y: 54,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-157",
      layer: "mid",
      motif: "cloud",
      x: 555,
      y: 95,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-158",
      layer: "far",
      motif: "windmill",
      x: 652,
      y: 136,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-159",
      layer: "mid",
      motif: "grass",
      x: 749,
      y: 177,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-160",
      layer: "far",
      motif: "gear",
      x: 846,
      y: 218,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-161",
      layer: "near",
      motif: "vine",
      x: 943,
      y: 259,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-162",
      layer: "far",
      motif: "glassBerry",
      x: 1040,
      y: 300,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-163",
      layer: "mid",
      motif: "cloud",
      x: 1137,
      y: 341,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-164",
      layer: "far",
      motif: "windmill",
      x: 1234,
      y: 382,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-165",
      layer: "mid",
      motif: "grass",
      x: 1331,
      y: 423,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-166",
      layer: "near",
      motif: "gear",
      x: 1428,
      y: 34,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-167",
      layer: "mid",
      motif: "vine",
      x: 1525,
      y: 75,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-168",
      layer: "far",
      motif: "glassBerry",
      x: 1622,
      y: 116,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-169",
      layer: "mid",
      motif: "cloud",
      x: 1719,
      y: 157,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-170",
      layer: "far",
      motif: "windmill",
      x: 1816,
      y: 198,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-10-171",
      layer: "near",
      motif: "grass",
      x: 1913,
      y: 239,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-172",
      layer: "far",
      motif: "gear",
      x: 2010,
      y: 280,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-10-173",
      layer: "mid",
      motif: "vine",
      x: 2107,
      y: 321,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-10-174",
      layer: "far",
      motif: "glassBerry",
      x: 2204,
      y: 362,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-10-175",
      layer: "mid",
      motif: "cloud",
      x: 2301,
      y: 403,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-10-176",
      layer: "near",
      motif: "windmill",
      x: 2398,
      y: 444,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-10-177",
      layer: "mid",
      motif: "grass",
      x: 2495,
      y: 55,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-10-178",
      layer: "far",
      motif: "gear",
      x: 2592,
      y: 96,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-10-179",
      layer: "mid",
      motif: "vine",
      x: 2689,
      y: 137,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-10-180",
      layer: "far",
      motif: "glassBerry",
      x: 2786,
      y: 178,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-10",
    x: 4736,
    y: 448,
    nextLevelId: "level-11"
  }
};
