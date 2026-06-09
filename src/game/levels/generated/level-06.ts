import type { LevelDefinition } from "../schema";

export const LEVEL_06: LevelDefinition = {
  id: "level-06",
  index: 5,
  title: "Brassroot Verge 06",
  chapter: "Brassroot Verge",
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
    "...........===...........................====..........................=====.........................======........................=======................",
    "....................................###...........................####..........................#####.........................######......................",
    "...............................#######.......................###...........................####..........................#####............................",
    "..........................======........................=======.......................===...........................====..................................",
    ".....................#####.........................######........................#######.......................###...........................####.........",
    "................####..........................W####.........................######W.......................#######.....W.................###...............",
    ".....................................S...................................S...................................S............................................",
    "...P........................W...................................W...................................W...................................W...........G.....",
    "...................S...................................S...................................S...................................S..........................",
    "^################^....############^#....###########^##....##########^###....#########^####....########^#####....#######^######....######^################^",
    "##################.^.^##############.^.^##############.^.^##############.^.^##############.^.^##############.^.^##############.^.^########################"
  ],
  enemies: [
    {
      id: "enemy-6-1",
      kind: "turret",
      x: 420,
      y: 448,
      patrolMin: 325,
      patrolMax: 540,
      speed: 104,
      phase: 5
    },
    {
      id: "enemy-6-2",
      kind: "beetle",
      x: 750,
      y: 416,
      patrolMin: 637,
      patrolMax: 892,
      speed: 44,
      phase: 8
    },
    {
      id: "enemy-6-3",
      kind: "acorn",
      x: 1080,
      y: 384,
      patrolMin: 949,
      patrolMax: 1244,
      speed: 56,
      phase: 11
    },
    {
      id: "enemy-6-4",
      kind: "lantern",
      x: 1410,
      y: 352,
      patrolMin: 1261,
      patrolMax: 1596,
      speed: 68,
      phase: 14
    },
    {
      id: "enemy-6-5",
      kind: "charger",
      x: 1740,
      y: 320,
      patrolMin: 1645,
      patrolMax: 1948,
      speed: 80,
      phase: 17
    },
    {
      id: "enemy-6-6",
      kind: "spiker",
      x: 2070,
      y: 448,
      patrolMin: 1957,
      patrolMax: 2190,
      speed: 92,
      phase: 20
    },
    {
      id: "enemy-6-7",
      kind: "turret",
      x: 2400,
      y: 416,
      patrolMin: 2269,
      patrolMax: 2542,
      speed: 104,
      phase: 23
    },
    {
      id: "enemy-6-8",
      kind: "beetle",
      x: 2730,
      y: 384,
      patrolMin: 2581,
      patrolMax: 2894,
      speed: 44,
      phase: 26
    },
    {
      id: "enemy-6-9",
      kind: "acorn",
      x: 3060,
      y: 352,
      patrolMin: 2965,
      patrolMax: 3246,
      speed: 56,
      phase: 29
    },
    {
      id: "enemy-6-10",
      kind: "lantern",
      x: 3390,
      y: 320,
      patrolMin: 3277,
      patrolMax: 3598,
      speed: 68,
      phase: 32
    },
    {
      id: "enemy-6-11",
      kind: "charger",
      x: 3720,
      y: 448,
      patrolMin: 3589,
      patrolMax: 3840,
      speed: 80,
      phase: 35
    },
    {
      id: "enemy-6-12",
      kind: "spiker",
      x: 4050,
      y: 416,
      patrolMin: 3901,
      patrolMax: 4192,
      speed: 92,
      phase: 38
    },
    {
      id: "enemy-6-13",
      kind: "turret",
      x: 4380,
      y: 384,
      patrolMin: 4285,
      patrolMax: 4544,
      speed: 104,
      phase: 41
    },
    {
      id: "enemy-6-14",
      kind: "beetle",
      x: 4710,
      y: 352,
      patrolMin: 4597,
      patrolMax: 4748,
      speed: 44,
      phase: 44
    },
    {
      id: "enemy-6-15",
      kind: "acorn",
      x: 5040,
      y: 320,
      patrolMin: 4909,
      patrolMax: 4748,
      speed: 56,
      phase: 47
    },
    {
      id: "enemy-6-16",
      kind: "lantern",
      x: 5370,
      y: 448,
      patrolMin: 5221,
      patrolMax: 4748,
      speed: 68,
      phase: 50
    },
    {
      id: "enemy-6-17",
      kind: "charger",
      x: 5700,
      y: 416,
      patrolMin: 5605,
      patrolMax: 4748,
      speed: 80,
      phase: 53
    }
  ],
  collectibles: [
    {
      id: "collectible-6-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 192,
      y: 162
    },
    {
      id: "collectible-6-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 262,
      y: 182
    },
    {
      id: "collectible-6-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 332,
      y: 235
    },
    {
      id: "collectible-6-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 402,
      y: 288
    },
    {
      id: "collectible-6-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 472,
      y: 308
    },
    {
      id: "collectible-6-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 542,
      y: 361
    },
    {
      id: "collectible-6-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 612,
      y: 414
    },
    {
      id: "collectible-6-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 682,
      y: 140
    },
    {
      id: "collectible-6-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 752,
      y: 193
    },
    {
      id: "collectible-6-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 822,
      y: 246
    },
    {
      id: "collectible-6-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 892,
      y: 266
    },
    {
      id: "collectible-6-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 962,
      y: 319
    },
    {
      id: "collectible-6-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1032,
      y: 372
    },
    {
      id: "collectible-6-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1102,
      y: 392
    },
    {
      id: "collectible-6-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1172,
      y: 151
    },
    {
      id: "collectible-6-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1242,
      y: 204
    },
    {
      id: "collectible-6-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1312,
      y: 224
    },
    {
      id: "collectible-6-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1382,
      y: 277
    },
    {
      id: "collectible-6-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1452,
      y: 330
    },
    {
      id: "collectible-6-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1522,
      y: 350
    },
    {
      id: "collectible-6-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1592,
      y: 403
    },
    {
      id: "collectible-6-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1662,
      y: 162
    },
    {
      id: "collectible-6-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1732,
      y: 182
    },
    {
      id: "collectible-6-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1802,
      y: 235
    },
    {
      id: "collectible-6-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1872,
      y: 288
    },
    {
      id: "collectible-6-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1942,
      y: 308
    },
    {
      id: "collectible-6-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2012,
      y: 361
    },
    {
      id: "collectible-6-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2082,
      y: 414
    },
    {
      id: "collectible-6-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2152,
      y: 140
    },
    {
      id: "collectible-6-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2222,
      y: 193
    },
    {
      id: "collectible-6-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2292,
      y: 246
    },
    {
      id: "collectible-6-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2362,
      y: 266
    },
    {
      id: "collectible-6-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2432,
      y: 319
    },
    {
      id: "collectible-6-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2502,
      y: 372
    },
    {
      id: "collectible-6-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2572,
      y: 392
    },
    {
      id: "collectible-6-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2642,
      y: 151
    },
    {
      id: "collectible-6-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2712,
      y: 204
    },
    {
      id: "collectible-6-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2782,
      y: 224
    },
    {
      id: "collectible-6-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2852,
      y: 277
    },
    {
      id: "collectible-6-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2922,
      y: 330
    },
    {
      id: "collectible-6-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2992,
      y: 350
    },
    {
      id: "collectible-6-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3062,
      y: 403
    },
    {
      id: "collectible-6-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3132,
      y: 162
    },
    {
      id: "collectible-6-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3202,
      y: 182
    },
    {
      id: "collectible-6-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3272,
      y: 235
    },
    {
      id: "collectible-6-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3342,
      y: 288
    },
    {
      id: "collectible-6-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3412,
      y: 308
    },
    {
      id: "collectible-6-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3482,
      y: 361
    },
    {
      id: "collectible-6-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3552,
      y: 414
    },
    {
      id: "collectible-6-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3622,
      y: 140
    },
    {
      id: "collectible-6-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3692,
      y: 193
    },
    {
      id: "collectible-6-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3762,
      y: 246
    },
    {
      id: "collectible-6-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3832,
      y: 266
    },
    {
      id: "collectible-6-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3902,
      y: 319
    },
    {
      id: "collectible-6-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3972,
      y: 372
    },
    {
      id: "collectible-6-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4042,
      y: 392
    },
    {
      id: "collectible-6-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4112,
      y: 151
    },
    {
      id: "collectible-6-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4182,
      y: 204
    },
    {
      id: "collectible-6-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4252,
      y: 224
    },
    {
      id: "collectible-6-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4322,
      y: 277
    },
    {
      id: "collectible-6-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4392,
      y: 330
    },
    {
      id: "collectible-6-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4462,
      y: 350
    },
    {
      id: "collectible-6-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4532,
      y: 403
    },
    {
      id: "collectible-6-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4602,
      y: 162
    },
    {
      id: "collectible-6-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4672,
      y: 182
    },
    {
      id: "collectible-6-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4742,
      y: 235
    },
    {
      id: "collectible-6-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4812,
      y: 288
    },
    {
      id: "collectible-6-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4882,
      y: 308
    },
    {
      id: "collectible-6-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4952,
      y: 361
    },
    {
      id: "collectible-6-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5022,
      y: 414
    },
    {
      id: "collectible-6-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5092,
      y: 140
    },
    {
      id: "collectible-6-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5162,
      y: 193
    },
    {
      id: "collectible-6-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5232,
      y: 246
    },
    {
      id: "collectible-6-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5302,
      y: 266
    },
    {
      id: "collectible-6-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5372,
      y: 319
    },
    {
      id: "collectible-6-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5442,
      y: 372
    },
    {
      id: "collectible-6-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5512,
      y: 392
    },
    {
      id: "collectible-6-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5582,
      y: 151
    },
    {
      id: "collectible-6-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5652,
      y: 204
    },
    {
      id: "collectible-6-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5722,
      y: 224
    },
    {
      id: "collectible-6-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5792,
      y: 277
    },
    {
      id: "collectible-6-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5862,
      y: 330
    }
  ],
  powerups: [
    {
      id: "powerup-6-1",
      kind: "springBoots",
      durationMs: 4800,
      x: 650,
      y: 130
    },
    {
      id: "powerup-6-2",
      kind: "starburst",
      durationMs: 5700,
      x: 1480,
      y: 182
    },
    {
      id: "powerup-6-3",
      kind: "gliderLeaf",
      durationMs: 6600,
      x: 2310,
      y: 234
    },
    {
      id: "powerup-6-4",
      kind: "shield",
      durationMs: 7500,
      x: 3140,
      y: 286
    },
    {
      id: "powerup-6-5",
      kind: "springBoots",
      durationMs: 4800,
      x: 3970,
      y: 338
    },
    {
      id: "powerup-6-6",
      kind: "starburst",
      durationMs: 5700,
      x: 4800,
      y: 130
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-6-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 0.5
    },
    {
      id: "moving-platform-6-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 1.2
    },
    {
      id: "moving-platform-6-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 1.9
    },
    {
      id: "moving-platform-6-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 2.5999999999999996
    },
    {
      id: "moving-platform-6-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 3.3
    },
    {
      id: "moving-platform-6-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 4
    },
    {
      id: "moving-platform-6-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 4.699999999999999
    }
  ],
  hazards: [
    {
      id: "hazard-6-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 5
    },
    {
      id: "hazard-6-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 6
    },
    {
      id: "hazard-6-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 7
    },
    {
      id: "hazard-6-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 8
    },
    {
      id: "hazard-6-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 9
    },
    {
      id: "hazard-6-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 10
    },
    {
      id: "hazard-6-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 11
    },
    {
      id: "hazard-6-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 12
    },
    {
      id: "hazard-6-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 13
    },
    {
      id: "hazard-6-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 14
    },
    {
      id: "hazard-6-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 15
    },
    {
      id: "hazard-6-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 16
    },
    {
      id: "hazard-6-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 17
    },
    {
      id: "hazard-6-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 18
    },
    {
      id: "hazard-6-15",
      kind: "thorn",
      x: 5660,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 19
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-6-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-6-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-6-1",
      x: 708,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-6-2",
      x: 1478,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-6-3",
      x: 2248,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-6-4",
      x: 3018,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-6-5",
      x: 3788,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-6-6",
      x: 4558,
      y: 384,
      power: 1.46
    }
  ],
  windZones: [
    {
      id: "wind-6-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-6-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-6-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-6-4",
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
      id: "decor-6-1",
      layer: "near",
      motif: "grass",
      x: 115,
      y: 97,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-2",
      layer: "far",
      motif: "gear",
      x: 212,
      y: 138,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-3",
      layer: "mid",
      motif: "vine",
      x: 309,
      y: 179,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-4",
      layer: "far",
      motif: "glassBerry",
      x: 406,
      y: 220,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-5",
      layer: "mid",
      motif: "cloud",
      x: 503,
      y: 261,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-6",
      layer: "near",
      motif: "windmill",
      x: 600,
      y: 302,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-7",
      layer: "mid",
      motif: "grass",
      x: 697,
      y: 343,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-8",
      layer: "far",
      motif: "gear",
      x: 794,
      y: 384,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-9",
      layer: "mid",
      motif: "vine",
      x: 891,
      y: 425,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-10",
      layer: "far",
      motif: "glassBerry",
      x: 988,
      y: 36,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-11",
      layer: "near",
      motif: "cloud",
      x: 1085,
      y: 77,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-12",
      layer: "far",
      motif: "windmill",
      x: 1182,
      y: 118,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-13",
      layer: "mid",
      motif: "grass",
      x: 1279,
      y: 159,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-14",
      layer: "far",
      motif: "gear",
      x: 1376,
      y: 200,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-15",
      layer: "mid",
      motif: "vine",
      x: 1473,
      y: 241,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-16",
      layer: "near",
      motif: "glassBerry",
      x: 1570,
      y: 282,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-17",
      layer: "mid",
      motif: "cloud",
      x: 1667,
      y: 323,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-18",
      layer: "far",
      motif: "windmill",
      x: 1764,
      y: 364,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-19",
      layer: "mid",
      motif: "grass",
      x: 1861,
      y: 405,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-20",
      layer: "far",
      motif: "gear",
      x: 1958,
      y: 446,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-21",
      layer: "near",
      motif: "vine",
      x: 2055,
      y: 57,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-22",
      layer: "far",
      motif: "glassBerry",
      x: 2152,
      y: 98,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-23",
      layer: "mid",
      motif: "cloud",
      x: 2249,
      y: 139,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-24",
      layer: "far",
      motif: "windmill",
      x: 2346,
      y: 180,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-25",
      layer: "mid",
      motif: "grass",
      x: 2443,
      y: 221,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-26",
      layer: "near",
      motif: "gear",
      x: 2540,
      y: 262,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-27",
      layer: "mid",
      motif: "vine",
      x: 2637,
      y: 303,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-28",
      layer: "far",
      motif: "glassBerry",
      x: 2734,
      y: 344,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-29",
      layer: "mid",
      motif: "cloud",
      x: 2831,
      y: 385,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-30",
      layer: "far",
      motif: "windmill",
      x: 2928,
      y: 426,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-31",
      layer: "near",
      motif: "grass",
      x: 3025,
      y: 37,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-32",
      layer: "far",
      motif: "gear",
      x: 3122,
      y: 78,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-33",
      layer: "mid",
      motif: "vine",
      x: 3219,
      y: 119,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-34",
      layer: "far",
      motif: "glassBerry",
      x: 3316,
      y: 160,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-35",
      layer: "mid",
      motif: "cloud",
      x: 3413,
      y: 201,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-36",
      layer: "near",
      motif: "windmill",
      x: 3510,
      y: 242,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-37",
      layer: "mid",
      motif: "grass",
      x: 3607,
      y: 283,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-38",
      layer: "far",
      motif: "gear",
      x: 3704,
      y: 324,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-39",
      layer: "mid",
      motif: "vine",
      x: 3801,
      y: 365,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-40",
      layer: "far",
      motif: "glassBerry",
      x: 3898,
      y: 406,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-41",
      layer: "near",
      motif: "cloud",
      x: 3995,
      y: 447,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-42",
      layer: "far",
      motif: "windmill",
      x: 4092,
      y: 58,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-43",
      layer: "mid",
      motif: "grass",
      x: 4189,
      y: 99,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-44",
      layer: "far",
      motif: "gear",
      x: 4286,
      y: 140,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-45",
      layer: "mid",
      motif: "vine",
      x: 4383,
      y: 181,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-46",
      layer: "near",
      motif: "glassBerry",
      x: 4480,
      y: 222,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-47",
      layer: "mid",
      motif: "cloud",
      x: 4577,
      y: 263,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-48",
      layer: "far",
      motif: "windmill",
      x: 4674,
      y: 304,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-49",
      layer: "mid",
      motif: "grass",
      x: 4771,
      y: 345,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-50",
      layer: "far",
      motif: "gear",
      x: 4868,
      y: 386,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-51",
      layer: "near",
      motif: "vine",
      x: 37,
      y: 427,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-52",
      layer: "far",
      motif: "glassBerry",
      x: 134,
      y: 38,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-53",
      layer: "mid",
      motif: "cloud",
      x: 231,
      y: 79,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-54",
      layer: "far",
      motif: "windmill",
      x: 328,
      y: 120,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-55",
      layer: "mid",
      motif: "grass",
      x: 425,
      y: 161,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-56",
      layer: "near",
      motif: "gear",
      x: 522,
      y: 202,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-57",
      layer: "mid",
      motif: "vine",
      x: 619,
      y: 243,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-58",
      layer: "far",
      motif: "glassBerry",
      x: 716,
      y: 284,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-59",
      layer: "mid",
      motif: "cloud",
      x: 813,
      y: 325,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-60",
      layer: "far",
      motif: "windmill",
      x: 910,
      y: 366,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-61",
      layer: "near",
      motif: "grass",
      x: 1007,
      y: 407,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-62",
      layer: "far",
      motif: "gear",
      x: 1104,
      y: 448,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-63",
      layer: "mid",
      motif: "vine",
      x: 1201,
      y: 59,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-64",
      layer: "far",
      motif: "glassBerry",
      x: 1298,
      y: 100,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-65",
      layer: "mid",
      motif: "cloud",
      x: 1395,
      y: 141,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-66",
      layer: "near",
      motif: "windmill",
      x: 1492,
      y: 182,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-67",
      layer: "mid",
      motif: "grass",
      x: 1589,
      y: 223,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-68",
      layer: "far",
      motif: "gear",
      x: 1686,
      y: 264,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-69",
      layer: "mid",
      motif: "vine",
      x: 1783,
      y: 305,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-70",
      layer: "far",
      motif: "glassBerry",
      x: 1880,
      y: 346,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-71",
      layer: "near",
      motif: "cloud",
      x: 1977,
      y: 387,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-72",
      layer: "far",
      motif: "windmill",
      x: 2074,
      y: 428,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-73",
      layer: "mid",
      motif: "grass",
      x: 2171,
      y: 39,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-74",
      layer: "far",
      motif: "gear",
      x: 2268,
      y: 80,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-75",
      layer: "mid",
      motif: "vine",
      x: 2365,
      y: 121,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-76",
      layer: "near",
      motif: "glassBerry",
      x: 2462,
      y: 162,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-77",
      layer: "mid",
      motif: "cloud",
      x: 2559,
      y: 203,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-78",
      layer: "far",
      motif: "windmill",
      x: 2656,
      y: 244,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-79",
      layer: "mid",
      motif: "grass",
      x: 2753,
      y: 285,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-80",
      layer: "far",
      motif: "gear",
      x: 2850,
      y: 326,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-81",
      layer: "near",
      motif: "vine",
      x: 2947,
      y: 367,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-82",
      layer: "far",
      motif: "glassBerry",
      x: 3044,
      y: 408,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-83",
      layer: "mid",
      motif: "cloud",
      x: 3141,
      y: 449,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-84",
      layer: "far",
      motif: "windmill",
      x: 3238,
      y: 60,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-85",
      layer: "mid",
      motif: "grass",
      x: 3335,
      y: 101,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-86",
      layer: "near",
      motif: "gear",
      x: 3432,
      y: 142,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-87",
      layer: "mid",
      motif: "vine",
      x: 3529,
      y: 183,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-88",
      layer: "far",
      motif: "glassBerry",
      x: 3626,
      y: 224,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-89",
      layer: "mid",
      motif: "cloud",
      x: 3723,
      y: 265,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-90",
      layer: "far",
      motif: "windmill",
      x: 3820,
      y: 306,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-91",
      layer: "near",
      motif: "grass",
      x: 3917,
      y: 347,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-92",
      layer: "far",
      motif: "gear",
      x: 4014,
      y: 388,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-93",
      layer: "mid",
      motif: "vine",
      x: 4111,
      y: 429,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-94",
      layer: "far",
      motif: "glassBerry",
      x: 4208,
      y: 40,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-95",
      layer: "mid",
      motif: "cloud",
      x: 4305,
      y: 81,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-96",
      layer: "near",
      motif: "windmill",
      x: 4402,
      y: 122,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-97",
      layer: "mid",
      motif: "grass",
      x: 4499,
      y: 163,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-98",
      layer: "far",
      motif: "gear",
      x: 4596,
      y: 204,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-99",
      layer: "mid",
      motif: "vine",
      x: 4693,
      y: 245,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-100",
      layer: "far",
      motif: "glassBerry",
      x: 4790,
      y: 286,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-101",
      layer: "near",
      motif: "cloud",
      x: 4887,
      y: 327,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-102",
      layer: "far",
      motif: "windmill",
      x: 56,
      y: 368,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-103",
      layer: "mid",
      motif: "grass",
      x: 153,
      y: 409,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-104",
      layer: "far",
      motif: "gear",
      x: 250,
      y: 450,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-105",
      layer: "mid",
      motif: "vine",
      x: 347,
      y: 61,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-106",
      layer: "near",
      motif: "glassBerry",
      x: 444,
      y: 102,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-107",
      layer: "mid",
      motif: "cloud",
      x: 541,
      y: 143,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-108",
      layer: "far",
      motif: "windmill",
      x: 638,
      y: 184,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-109",
      layer: "mid",
      motif: "grass",
      x: 735,
      y: 225,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-110",
      layer: "far",
      motif: "gear",
      x: 832,
      y: 266,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-111",
      layer: "near",
      motif: "vine",
      x: 929,
      y: 307,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-112",
      layer: "far",
      motif: "glassBerry",
      x: 1026,
      y: 348,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-113",
      layer: "mid",
      motif: "cloud",
      x: 1123,
      y: 389,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-114",
      layer: "far",
      motif: "windmill",
      x: 1220,
      y: 430,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-115",
      layer: "mid",
      motif: "grass",
      x: 1317,
      y: 41,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-116",
      layer: "near",
      motif: "gear",
      x: 1414,
      y: 82,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-117",
      layer: "mid",
      motif: "vine",
      x: 1511,
      y: 123,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-118",
      layer: "far",
      motif: "glassBerry",
      x: 1608,
      y: 164,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-119",
      layer: "mid",
      motif: "cloud",
      x: 1705,
      y: 205,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-120",
      layer: "far",
      motif: "windmill",
      x: 1802,
      y: 246,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-121",
      layer: "near",
      motif: "grass",
      x: 1899,
      y: 287,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-122",
      layer: "far",
      motif: "gear",
      x: 1996,
      y: 328,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-123",
      layer: "mid",
      motif: "vine",
      x: 2093,
      y: 369,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-124",
      layer: "far",
      motif: "glassBerry",
      x: 2190,
      y: 410,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-125",
      layer: "mid",
      motif: "cloud",
      x: 2287,
      y: 451,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-126",
      layer: "near",
      motif: "windmill",
      x: 2384,
      y: 62,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-127",
      layer: "mid",
      motif: "grass",
      x: 2481,
      y: 103,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-128",
      layer: "far",
      motif: "gear",
      x: 2578,
      y: 144,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-129",
      layer: "mid",
      motif: "vine",
      x: 2675,
      y: 185,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-130",
      layer: "far",
      motif: "glassBerry",
      x: 2772,
      y: 226,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-131",
      layer: "near",
      motif: "cloud",
      x: 2869,
      y: 267,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-132",
      layer: "far",
      motif: "windmill",
      x: 2966,
      y: 308,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-133",
      layer: "mid",
      motif: "grass",
      x: 3063,
      y: 349,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-134",
      layer: "far",
      motif: "gear",
      x: 3160,
      y: 390,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-135",
      layer: "mid",
      motif: "vine",
      x: 3257,
      y: 431,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-136",
      layer: "near",
      motif: "glassBerry",
      x: 3354,
      y: 42,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-137",
      layer: "mid",
      motif: "cloud",
      x: 3451,
      y: 83,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-138",
      layer: "far",
      motif: "windmill",
      x: 3548,
      y: 124,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-139",
      layer: "mid",
      motif: "grass",
      x: 3645,
      y: 165,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-140",
      layer: "far",
      motif: "gear",
      x: 3742,
      y: 206,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-141",
      layer: "near",
      motif: "vine",
      x: 3839,
      y: 247,
      scale: 1,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-142",
      layer: "far",
      motif: "glassBerry",
      x: 3936,
      y: 288,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-143",
      layer: "mid",
      motif: "cloud",
      x: 4033,
      y: 329,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-144",
      layer: "far",
      motif: "windmill",
      x: 4130,
      y: 370,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-145",
      layer: "mid",
      motif: "grass",
      x: 4227,
      y: 411,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-146",
      layer: "near",
      motif: "gear",
      x: 4324,
      y: 452,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-147",
      layer: "mid",
      motif: "vine",
      x: 4421,
      y: 63,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-148",
      layer: "far",
      motif: "glassBerry",
      x: 4518,
      y: 104,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-149",
      layer: "mid",
      motif: "cloud",
      x: 4615,
      y: 145,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-150",
      layer: "far",
      motif: "windmill",
      x: 4712,
      y: 186,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-151",
      layer: "near",
      motif: "grass",
      x: 4809,
      y: 227,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-152",
      layer: "far",
      motif: "gear",
      x: 4906,
      y: 268,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-153",
      layer: "mid",
      motif: "vine",
      x: 75,
      y: 309,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-154",
      layer: "far",
      motif: "glassBerry",
      x: 172,
      y: 350,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-155",
      layer: "mid",
      motif: "cloud",
      x: 269,
      y: 391,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-156",
      layer: "near",
      motif: "windmill",
      x: 366,
      y: 432,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-157",
      layer: "mid",
      motif: "grass",
      x: 463,
      y: 43,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-158",
      layer: "far",
      motif: "gear",
      x: 560,
      y: 84,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-159",
      layer: "mid",
      motif: "vine",
      x: 657,
      y: 125,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-160",
      layer: "far",
      motif: "glassBerry",
      x: 754,
      y: 166,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-161",
      layer: "near",
      motif: "cloud",
      x: 851,
      y: 207,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-162",
      layer: "far",
      motif: "windmill",
      x: 948,
      y: 248,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-163",
      layer: "mid",
      motif: "grass",
      x: 1045,
      y: 289,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-164",
      layer: "far",
      motif: "gear",
      x: 1142,
      y: 330,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-165",
      layer: "mid",
      motif: "vine",
      x: 1239,
      y: 371,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-166",
      layer: "near",
      motif: "glassBerry",
      x: 1336,
      y: 412,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-167",
      layer: "mid",
      motif: "cloud",
      x: 1433,
      y: 453,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-168",
      layer: "far",
      motif: "windmill",
      x: 1530,
      y: 64,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-169",
      layer: "mid",
      motif: "grass",
      x: 1627,
      y: 105,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-170",
      layer: "far",
      motif: "gear",
      x: 1724,
      y: 146,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-6-171",
      layer: "near",
      motif: "vine",
      x: 1821,
      y: 187,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-172",
      layer: "far",
      motif: "glassBerry",
      x: 1918,
      y: 228,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-6-173",
      layer: "mid",
      motif: "cloud",
      x: 2015,
      y: 269,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-6-174",
      layer: "far",
      motif: "windmill",
      x: 2112,
      y: 310,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-6-175",
      layer: "mid",
      motif: "grass",
      x: 2209,
      y: 351,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-6-176",
      layer: "near",
      motif: "gear",
      x: 2306,
      y: 392,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.82
    },
    {
      id: "decor-6-177",
      layer: "mid",
      motif: "vine",
      x: 2403,
      y: 433,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-6-178",
      layer: "far",
      motif: "glassBerry",
      x: 2500,
      y: 44,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-6-179",
      layer: "mid",
      motif: "cloud",
      x: 2597,
      y: 85,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-6-180",
      layer: "far",
      motif: "windmill",
      x: 2694,
      y: 126,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-6",
    x: 4736,
    y: 448,
    nextLevelId: "level-07"
  }
};
