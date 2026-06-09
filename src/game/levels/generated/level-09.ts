import type { LevelDefinition } from "../schema";

export const LEVEL_09: LevelDefinition = {
  id: "level-09",
  index: 8,
  title: "Glassberry Lift 02",
  chapter: "Glassberry Lift",
  columns: 154,
  rows: 18,
  timeLimit: 190,
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
    ".........................====..........................=====.........................======........................=======.......................=........",
    "....................###...........................####..........................#####.........................######........................######........",
    "...............#######.......................###...........................####..........................#####.........................######.............",
    "..........======........................=======.......................===...........................====..........................=====...................",
    "...................................######........................#######.......................###...........................####.........................",
    "..............................#####........W................######.............W..........#######..................W....###...............................",
    "..................................S...................................S...................................S...............................................",
    "...P.....................W...................................W...................................W...................................W..............G.....",
    "................S...................................S...................................S...................................S.............................",
    "^################^....###########....###########....###########....#^#########....###^#######....#####^#####....#######^###....#########^################^",
    "##################^.^.###########.^.^###########^.^.###########.^.^###########^.^.###########.^.^###########^.^.###########.^.^###########################"
  ],
  enemies: [
    {
      id: "enemy-9-1",
      kind: "lantern",
      x: 504,
      y: 448,
      patrolMin: 409,
      patrolMax: 624,
      speed: 68,
      phase: 8
    },
    {
      id: "enemy-9-2",
      kind: "charger",
      x: 834,
      y: 416,
      patrolMin: 721,
      patrolMax: 976,
      speed: 80,
      phase: 11
    },
    {
      id: "enemy-9-3",
      kind: "spiker",
      x: 1164,
      y: 384,
      patrolMin: 1033,
      patrolMax: 1328,
      speed: 92,
      phase: 14
    },
    {
      id: "enemy-9-4",
      kind: "turret",
      x: 1494,
      y: 352,
      patrolMin: 1345,
      patrolMax: 1680,
      speed: 104,
      phase: 17
    },
    {
      id: "enemy-9-5",
      kind: "beetle",
      x: 1824,
      y: 320,
      patrolMin: 1729,
      patrolMax: 2032,
      speed: 44,
      phase: 20
    },
    {
      id: "enemy-9-6",
      kind: "acorn",
      x: 2154,
      y: 448,
      patrolMin: 2041,
      patrolMax: 2274,
      speed: 56,
      phase: 23
    },
    {
      id: "enemy-9-7",
      kind: "lantern",
      x: 2484,
      y: 416,
      patrolMin: 2353,
      patrolMax: 2626,
      speed: 68,
      phase: 26
    },
    {
      id: "enemy-9-8",
      kind: "charger",
      x: 2814,
      y: 384,
      patrolMin: 2665,
      patrolMax: 2978,
      speed: 80,
      phase: 29
    },
    {
      id: "enemy-9-9",
      kind: "spiker",
      x: 3144,
      y: 352,
      patrolMin: 3049,
      patrolMax: 3330,
      speed: 92,
      phase: 32
    },
    {
      id: "enemy-9-10",
      kind: "turret",
      x: 3474,
      y: 320,
      patrolMin: 3361,
      patrolMax: 3682,
      speed: 104,
      phase: 35
    },
    {
      id: "enemy-9-11",
      kind: "beetle",
      x: 3804,
      y: 448,
      patrolMin: 3673,
      patrolMax: 3924,
      speed: 44,
      phase: 38
    },
    {
      id: "enemy-9-12",
      kind: "acorn",
      x: 4134,
      y: 416,
      patrolMin: 3985,
      patrolMax: 4276,
      speed: 56,
      phase: 41
    }
  ],
  collectibles: [
    {
      id: "collectible-9-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 180,
      y: 162
    },
    {
      id: "collectible-9-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 250,
      y: 182
    },
    {
      id: "collectible-9-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 320,
      y: 235
    },
    {
      id: "collectible-9-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 390,
      y: 288
    },
    {
      id: "collectible-9-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 460,
      y: 308
    },
    {
      id: "collectible-9-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 530,
      y: 361
    },
    {
      id: "collectible-9-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 600,
      y: 414
    },
    {
      id: "collectible-9-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 670,
      y: 140
    },
    {
      id: "collectible-9-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 740,
      y: 193
    },
    {
      id: "collectible-9-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 810,
      y: 246
    },
    {
      id: "collectible-9-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 880,
      y: 266
    },
    {
      id: "collectible-9-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 950,
      y: 319
    },
    {
      id: "collectible-9-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1020,
      y: 372
    },
    {
      id: "collectible-9-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1090,
      y: 392
    },
    {
      id: "collectible-9-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1160,
      y: 151
    },
    {
      id: "collectible-9-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1230,
      y: 204
    },
    {
      id: "collectible-9-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1300,
      y: 224
    },
    {
      id: "collectible-9-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1370,
      y: 277
    },
    {
      id: "collectible-9-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1440,
      y: 330
    },
    {
      id: "collectible-9-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1510,
      y: 350
    },
    {
      id: "collectible-9-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1580,
      y: 403
    },
    {
      id: "collectible-9-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1650,
      y: 162
    },
    {
      id: "collectible-9-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1720,
      y: 182
    },
    {
      id: "collectible-9-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1790,
      y: 235
    },
    {
      id: "collectible-9-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1860,
      y: 288
    },
    {
      id: "collectible-9-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1930,
      y: 308
    },
    {
      id: "collectible-9-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2000,
      y: 361
    },
    {
      id: "collectible-9-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2070,
      y: 414
    },
    {
      id: "collectible-9-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2140,
      y: 140
    },
    {
      id: "collectible-9-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2210,
      y: 193
    },
    {
      id: "collectible-9-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2280,
      y: 246
    },
    {
      id: "collectible-9-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2350,
      y: 266
    },
    {
      id: "collectible-9-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2420,
      y: 319
    },
    {
      id: "collectible-9-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2490,
      y: 372
    },
    {
      id: "collectible-9-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2560,
      y: 392
    },
    {
      id: "collectible-9-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2630,
      y: 151
    },
    {
      id: "collectible-9-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2700,
      y: 204
    },
    {
      id: "collectible-9-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2770,
      y: 224
    },
    {
      id: "collectible-9-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2840,
      y: 277
    },
    {
      id: "collectible-9-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2910,
      y: 330
    },
    {
      id: "collectible-9-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2980,
      y: 350
    },
    {
      id: "collectible-9-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3050,
      y: 403
    },
    {
      id: "collectible-9-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3120,
      y: 162
    },
    {
      id: "collectible-9-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3190,
      y: 182
    },
    {
      id: "collectible-9-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3260,
      y: 235
    },
    {
      id: "collectible-9-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3330,
      y: 288
    },
    {
      id: "collectible-9-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3400,
      y: 308
    },
    {
      id: "collectible-9-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3470,
      y: 361
    },
    {
      id: "collectible-9-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3540,
      y: 414
    },
    {
      id: "collectible-9-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3610,
      y: 140
    },
    {
      id: "collectible-9-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3680,
      y: 193
    },
    {
      id: "collectible-9-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3750,
      y: 246
    },
    {
      id: "collectible-9-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3820,
      y: 266
    },
    {
      id: "collectible-9-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3890,
      y: 319
    },
    {
      id: "collectible-9-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3960,
      y: 372
    },
    {
      id: "collectible-9-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4030,
      y: 392
    },
    {
      id: "collectible-9-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4100,
      y: 151
    },
    {
      id: "collectible-9-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4170,
      y: 204
    },
    {
      id: "collectible-9-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4240,
      y: 224
    },
    {
      id: "collectible-9-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4310,
      y: 277
    },
    {
      id: "collectible-9-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4380,
      y: 330
    },
    {
      id: "collectible-9-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4450,
      y: 350
    },
    {
      id: "collectible-9-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4520,
      y: 403
    },
    {
      id: "collectible-9-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4590,
      y: 162
    },
    {
      id: "collectible-9-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4660,
      y: 182
    },
    {
      id: "collectible-9-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4730,
      y: 235
    },
    {
      id: "collectible-9-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4800,
      y: 288
    },
    {
      id: "collectible-9-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4870,
      y: 308
    },
    {
      id: "collectible-9-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4940,
      y: 361
    },
    {
      id: "collectible-9-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5010,
      y: 414
    },
    {
      id: "collectible-9-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5080,
      y: 140
    },
    {
      id: "collectible-9-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5150,
      y: 193
    },
    {
      id: "collectible-9-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5220,
      y: 246
    },
    {
      id: "collectible-9-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5290,
      y: 266
    },
    {
      id: "collectible-9-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5360,
      y: 319
    },
    {
      id: "collectible-9-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5430,
      y: 372
    },
    {
      id: "collectible-9-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5500,
      y: 392
    },
    {
      id: "collectible-9-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5570,
      y: 151
    },
    {
      id: "collectible-9-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5640,
      y: 204
    },
    {
      id: "collectible-9-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5710,
      y: 224
    },
    {
      id: "collectible-9-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5780,
      y: 277
    },
    {
      id: "collectible-9-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5850,
      y: 330
    },
    {
      id: "collectible-9-83",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5920,
      y: 350
    },
    {
      id: "collectible-9-84",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5990,
      y: 403
    },
    {
      id: "collectible-9-85",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6060,
      y: 162
    },
    {
      id: "collectible-9-86",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 6130,
      y: 182
    },
    {
      id: "collectible-9-87",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6200,
      y: 235
    },
    {
      id: "collectible-9-88",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6270,
      y: 288
    },
    {
      id: "collectible-9-89",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6340,
      y: 308
    },
    {
      id: "collectible-9-90",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6410,
      y: 361
    },
    {
      id: "collectible-9-91",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6480,
      y: 414
    },
    {
      id: "collectible-9-92",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6550,
      y: 140
    },
    {
      id: "collectible-9-93",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6620,
      y: 193
    },
    {
      id: "collectible-9-94",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 6690,
      y: 246
    }
  ],
  powerups: [
    {
      id: "powerup-9-1",
      kind: "shield",
      durationMs: 4800,
      x: 560,
      y: 130
    },
    {
      id: "powerup-9-2",
      kind: "springBoots",
      durationMs: 5700,
      x: 1390,
      y: 182
    },
    {
      id: "powerup-9-3",
      kind: "starburst",
      durationMs: 6600,
      x: 2220,
      y: 234
    },
    {
      id: "powerup-9-4",
      kind: "gliderLeaf",
      durationMs: 7500,
      x: 3050,
      y: 286
    },
    {
      id: "powerup-9-5",
      kind: "shield",
      durationMs: 4800,
      x: 3880,
      y: 338
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-9-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 0.8
    },
    {
      id: "moving-platform-9-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 1.5
    },
    {
      id: "moving-platform-9-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 2.2
    },
    {
      id: "moving-platform-9-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 2.8999999999999995
    },
    {
      id: "moving-platform-9-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 3.5999999999999996
    },
    {
      id: "moving-platform-9-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 4.3
    },
    {
      id: "moving-platform-9-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 4.999999999999999
    },
    {
      id: "moving-platform-9-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 5.699999999999999
    },
    {
      id: "moving-platform-9-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 6.3999999999999995
    },
    {
      id: "moving-platform-9-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 7.1
    }
  ],
  hazards: [
    {
      id: "hazard-9-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 8
    },
    {
      id: "hazard-9-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 9
    },
    {
      id: "hazard-9-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 10
    },
    {
      id: "hazard-9-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 11
    },
    {
      id: "hazard-9-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 12
    },
    {
      id: "hazard-9-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 13
    },
    {
      id: "hazard-9-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 14
    },
    {
      id: "hazard-9-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 15
    },
    {
      id: "hazard-9-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 16
    },
    {
      id: "hazard-9-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 17
    },
    {
      id: "hazard-9-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 18
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-9-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-9-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-9-1",
      x: 708,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-9-2",
      x: 1478,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-9-3",
      x: 2248,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-9-4",
      x: 3018,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-9-5",
      x: 3788,
      y: 416,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-9-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    },
    {
      id: "wind-9-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -9.5
    },
    {
      id: "wind-9-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -9.5
    }
  ],
  decorations: [
    {
      id: "decor-9-1",
      layer: "near",
      motif: "glassBerry",
      x: 184,
      y: 136,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-2",
      layer: "far",
      motif: "cloud",
      x: 281,
      y: 177,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-3",
      layer: "mid",
      motif: "windmill",
      x: 378,
      y: 218,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-4",
      layer: "far",
      motif: "grass",
      x: 475,
      y: 259,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-5",
      layer: "mid",
      motif: "gear",
      x: 572,
      y: 300,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-6",
      layer: "near",
      motif: "vine",
      x: 669,
      y: 341,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-7",
      layer: "mid",
      motif: "glassBerry",
      x: 766,
      y: 382,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-8",
      layer: "far",
      motif: "cloud",
      x: 863,
      y: 423,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-9",
      layer: "mid",
      motif: "windmill",
      x: 960,
      y: 34,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-10",
      layer: "far",
      motif: "grass",
      x: 1057,
      y: 75,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-11",
      layer: "near",
      motif: "gear",
      x: 1154,
      y: 116,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-12",
      layer: "far",
      motif: "vine",
      x: 1251,
      y: 157,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-13",
      layer: "mid",
      motif: "glassBerry",
      x: 1348,
      y: 198,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-14",
      layer: "far",
      motif: "cloud",
      x: 1445,
      y: 239,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-15",
      layer: "mid",
      motif: "windmill",
      x: 1542,
      y: 280,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-16",
      layer: "near",
      motif: "grass",
      x: 1639,
      y: 321,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-17",
      layer: "mid",
      motif: "gear",
      x: 1736,
      y: 362,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-18",
      layer: "far",
      motif: "vine",
      x: 1833,
      y: 403,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-19",
      layer: "mid",
      motif: "glassBerry",
      x: 1930,
      y: 444,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-20",
      layer: "far",
      motif: "cloud",
      x: 2027,
      y: 55,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-21",
      layer: "near",
      motif: "windmill",
      x: 2124,
      y: 96,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-22",
      layer: "far",
      motif: "grass",
      x: 2221,
      y: 137,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-23",
      layer: "mid",
      motif: "gear",
      x: 2318,
      y: 178,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-24",
      layer: "far",
      motif: "vine",
      x: 2415,
      y: 219,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-25",
      layer: "mid",
      motif: "glassBerry",
      x: 2512,
      y: 260,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-26",
      layer: "near",
      motif: "cloud",
      x: 2609,
      y: 301,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-27",
      layer: "mid",
      motif: "windmill",
      x: 2706,
      y: 342,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-28",
      layer: "far",
      motif: "grass",
      x: 2803,
      y: 383,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-29",
      layer: "mid",
      motif: "gear",
      x: 2900,
      y: 424,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-30",
      layer: "far",
      motif: "vine",
      x: 2997,
      y: 35,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-31",
      layer: "near",
      motif: "glassBerry",
      x: 3094,
      y: 76,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-32",
      layer: "far",
      motif: "cloud",
      x: 3191,
      y: 117,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-33",
      layer: "mid",
      motif: "windmill",
      x: 3288,
      y: 158,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-34",
      layer: "far",
      motif: "grass",
      x: 3385,
      y: 199,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-35",
      layer: "mid",
      motif: "gear",
      x: 3482,
      y: 240,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-36",
      layer: "near",
      motif: "vine",
      x: 3579,
      y: 281,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-37",
      layer: "mid",
      motif: "glassBerry",
      x: 3676,
      y: 322,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-38",
      layer: "far",
      motif: "cloud",
      x: 3773,
      y: 363,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-39",
      layer: "mid",
      motif: "windmill",
      x: 3870,
      y: 404,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-40",
      layer: "far",
      motif: "grass",
      x: 3967,
      y: 445,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-41",
      layer: "near",
      motif: "gear",
      x: 4064,
      y: 56,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-42",
      layer: "far",
      motif: "vine",
      x: 4161,
      y: 97,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-43",
      layer: "mid",
      motif: "glassBerry",
      x: 4258,
      y: 138,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-44",
      layer: "far",
      motif: "cloud",
      x: 4355,
      y: 179,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-45",
      layer: "mid",
      motif: "windmill",
      x: 4452,
      y: 220,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-46",
      layer: "near",
      motif: "grass",
      x: 4549,
      y: 261,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-47",
      layer: "mid",
      motif: "gear",
      x: 4646,
      y: 302,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-48",
      layer: "far",
      motif: "vine",
      x: 4743,
      y: 343,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-49",
      layer: "mid",
      motif: "glassBerry",
      x: 4840,
      y: 384,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-50",
      layer: "far",
      motif: "cloud",
      x: 9,
      y: 425,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-51",
      layer: "near",
      motif: "windmill",
      x: 106,
      y: 36,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-52",
      layer: "far",
      motif: "grass",
      x: 203,
      y: 77,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-53",
      layer: "mid",
      motif: "gear",
      x: 300,
      y: 118,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-54",
      layer: "far",
      motif: "vine",
      x: 397,
      y: 159,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-55",
      layer: "mid",
      motif: "glassBerry",
      x: 494,
      y: 200,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-56",
      layer: "near",
      motif: "cloud",
      x: 591,
      y: 241,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-57",
      layer: "mid",
      motif: "windmill",
      x: 688,
      y: 282,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-58",
      layer: "far",
      motif: "grass",
      x: 785,
      y: 323,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-59",
      layer: "mid",
      motif: "gear",
      x: 882,
      y: 364,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-60",
      layer: "far",
      motif: "vine",
      x: 979,
      y: 405,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-61",
      layer: "near",
      motif: "glassBerry",
      x: 1076,
      y: 446,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-62",
      layer: "far",
      motif: "cloud",
      x: 1173,
      y: 57,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-63",
      layer: "mid",
      motif: "windmill",
      x: 1270,
      y: 98,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-64",
      layer: "far",
      motif: "grass",
      x: 1367,
      y: 139,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-65",
      layer: "mid",
      motif: "gear",
      x: 1464,
      y: 180,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-66",
      layer: "near",
      motif: "vine",
      x: 1561,
      y: 221,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-67",
      layer: "mid",
      motif: "glassBerry",
      x: 1658,
      y: 262,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-68",
      layer: "far",
      motif: "cloud",
      x: 1755,
      y: 303,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-69",
      layer: "mid",
      motif: "windmill",
      x: 1852,
      y: 344,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-70",
      layer: "far",
      motif: "grass",
      x: 1949,
      y: 385,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-71",
      layer: "near",
      motif: "gear",
      x: 2046,
      y: 426,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-72",
      layer: "far",
      motif: "vine",
      x: 2143,
      y: 37,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-73",
      layer: "mid",
      motif: "glassBerry",
      x: 2240,
      y: 78,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-74",
      layer: "far",
      motif: "cloud",
      x: 2337,
      y: 119,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-75",
      layer: "mid",
      motif: "windmill",
      x: 2434,
      y: 160,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-76",
      layer: "near",
      motif: "grass",
      x: 2531,
      y: 201,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-77",
      layer: "mid",
      motif: "gear",
      x: 2628,
      y: 242,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-78",
      layer: "far",
      motif: "vine",
      x: 2725,
      y: 283,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-79",
      layer: "mid",
      motif: "glassBerry",
      x: 2822,
      y: 324,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-80",
      layer: "far",
      motif: "cloud",
      x: 2919,
      y: 365,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-81",
      layer: "near",
      motif: "windmill",
      x: 3016,
      y: 406,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-82",
      layer: "far",
      motif: "grass",
      x: 3113,
      y: 447,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-83",
      layer: "mid",
      motif: "gear",
      x: 3210,
      y: 58,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-84",
      layer: "far",
      motif: "vine",
      x: 3307,
      y: 99,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-85",
      layer: "mid",
      motif: "glassBerry",
      x: 3404,
      y: 140,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-86",
      layer: "near",
      motif: "cloud",
      x: 3501,
      y: 181,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-87",
      layer: "mid",
      motif: "windmill",
      x: 3598,
      y: 222,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-88",
      layer: "far",
      motif: "grass",
      x: 3695,
      y: 263,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-89",
      layer: "mid",
      motif: "gear",
      x: 3792,
      y: 304,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-90",
      layer: "far",
      motif: "vine",
      x: 3889,
      y: 345,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-91",
      layer: "near",
      motif: "glassBerry",
      x: 3986,
      y: 386,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-92",
      layer: "far",
      motif: "cloud",
      x: 4083,
      y: 427,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-93",
      layer: "mid",
      motif: "windmill",
      x: 4180,
      y: 38,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-94",
      layer: "far",
      motif: "grass",
      x: 4277,
      y: 79,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-95",
      layer: "mid",
      motif: "gear",
      x: 4374,
      y: 120,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-96",
      layer: "near",
      motif: "vine",
      x: 4471,
      y: 161,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-97",
      layer: "mid",
      motif: "glassBerry",
      x: 4568,
      y: 202,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-98",
      layer: "far",
      motif: "cloud",
      x: 4665,
      y: 243,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-99",
      layer: "mid",
      motif: "windmill",
      x: 4762,
      y: 284,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-100",
      layer: "far",
      motif: "grass",
      x: 4859,
      y: 325,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-101",
      layer: "near",
      motif: "gear",
      x: 28,
      y: 366,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-102",
      layer: "far",
      motif: "vine",
      x: 125,
      y: 407,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-103",
      layer: "mid",
      motif: "glassBerry",
      x: 222,
      y: 448,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-104",
      layer: "far",
      motif: "cloud",
      x: 319,
      y: 59,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-105",
      layer: "mid",
      motif: "windmill",
      x: 416,
      y: 100,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-106",
      layer: "near",
      motif: "grass",
      x: 513,
      y: 141,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-107",
      layer: "mid",
      motif: "gear",
      x: 610,
      y: 182,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-108",
      layer: "far",
      motif: "vine",
      x: 707,
      y: 223,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-109",
      layer: "mid",
      motif: "glassBerry",
      x: 804,
      y: 264,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-110",
      layer: "far",
      motif: "cloud",
      x: 901,
      y: 305,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-111",
      layer: "near",
      motif: "windmill",
      x: 998,
      y: 346,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-112",
      layer: "far",
      motif: "grass",
      x: 1095,
      y: 387,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-113",
      layer: "mid",
      motif: "gear",
      x: 1192,
      y: 428,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-114",
      layer: "far",
      motif: "vine",
      x: 1289,
      y: 39,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-115",
      layer: "mid",
      motif: "glassBerry",
      x: 1386,
      y: 80,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-116",
      layer: "near",
      motif: "cloud",
      x: 1483,
      y: 121,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-117",
      layer: "mid",
      motif: "windmill",
      x: 1580,
      y: 162,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-118",
      layer: "far",
      motif: "grass",
      x: 1677,
      y: 203,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-119",
      layer: "mid",
      motif: "gear",
      x: 1774,
      y: 244,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-120",
      layer: "far",
      motif: "vine",
      x: 1871,
      y: 285,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-121",
      layer: "near",
      motif: "glassBerry",
      x: 1968,
      y: 326,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-122",
      layer: "far",
      motif: "cloud",
      x: 2065,
      y: 367,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-123",
      layer: "mid",
      motif: "windmill",
      x: 2162,
      y: 408,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-124",
      layer: "far",
      motif: "grass",
      x: 2259,
      y: 449,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-125",
      layer: "mid",
      motif: "gear",
      x: 2356,
      y: 60,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-126",
      layer: "near",
      motif: "vine",
      x: 2453,
      y: 101,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-127",
      layer: "mid",
      motif: "glassBerry",
      x: 2550,
      y: 142,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-128",
      layer: "far",
      motif: "cloud",
      x: 2647,
      y: 183,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-129",
      layer: "mid",
      motif: "windmill",
      x: 2744,
      y: 224,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-130",
      layer: "far",
      motif: "grass",
      x: 2841,
      y: 265,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-131",
      layer: "near",
      motif: "gear",
      x: 2938,
      y: 306,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-132",
      layer: "far",
      motif: "vine",
      x: 3035,
      y: 347,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-133",
      layer: "mid",
      motif: "glassBerry",
      x: 3132,
      y: 388,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-134",
      layer: "far",
      motif: "cloud",
      x: 3229,
      y: 429,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-135",
      layer: "mid",
      motif: "windmill",
      x: 3326,
      y: 40,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-136",
      layer: "near",
      motif: "grass",
      x: 3423,
      y: 81,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-137",
      layer: "mid",
      motif: "gear",
      x: 3520,
      y: 122,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-138",
      layer: "far",
      motif: "vine",
      x: 3617,
      y: 163,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-139",
      layer: "mid",
      motif: "glassBerry",
      x: 3714,
      y: 204,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-140",
      layer: "far",
      motif: "cloud",
      x: 3811,
      y: 245,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-141",
      layer: "near",
      motif: "windmill",
      x: 3908,
      y: 286,
      scale: 1,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-142",
      layer: "far",
      motif: "grass",
      x: 4005,
      y: 327,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-143",
      layer: "mid",
      motif: "gear",
      x: 4102,
      y: 368,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-144",
      layer: "far",
      motif: "vine",
      x: 4199,
      y: 409,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-145",
      layer: "mid",
      motif: "glassBerry",
      x: 4296,
      y: 450,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-146",
      layer: "near",
      motif: "cloud",
      x: 4393,
      y: 61,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-147",
      layer: "mid",
      motif: "windmill",
      x: 4490,
      y: 102,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-148",
      layer: "far",
      motif: "grass",
      x: 4587,
      y: 143,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-149",
      layer: "mid",
      motif: "gear",
      x: 4684,
      y: 184,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-150",
      layer: "far",
      motif: "vine",
      x: 4781,
      y: 225,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-151",
      layer: "near",
      motif: "glassBerry",
      x: 4878,
      y: 266,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-152",
      layer: "far",
      motif: "cloud",
      x: 47,
      y: 307,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-153",
      layer: "mid",
      motif: "windmill",
      x: 144,
      y: 348,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-154",
      layer: "far",
      motif: "grass",
      x: 241,
      y: 389,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-155",
      layer: "mid",
      motif: "gear",
      x: 338,
      y: 430,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-156",
      layer: "near",
      motif: "vine",
      x: 435,
      y: 41,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-157",
      layer: "mid",
      motif: "glassBerry",
      x: 532,
      y: 82,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-158",
      layer: "far",
      motif: "cloud",
      x: 629,
      y: 123,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-159",
      layer: "mid",
      motif: "windmill",
      x: 726,
      y: 164,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-160",
      layer: "far",
      motif: "grass",
      x: 823,
      y: 205,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-161",
      layer: "near",
      motif: "gear",
      x: 920,
      y: 246,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-162",
      layer: "far",
      motif: "vine",
      x: 1017,
      y: 287,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-163",
      layer: "mid",
      motif: "glassBerry",
      x: 1114,
      y: 328,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-164",
      layer: "far",
      motif: "cloud",
      x: 1211,
      y: 369,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-165",
      layer: "mid",
      motif: "windmill",
      x: 1308,
      y: 410,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-166",
      layer: "near",
      motif: "grass",
      x: 1405,
      y: 451,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-167",
      layer: "mid",
      motif: "gear",
      x: 1502,
      y: 62,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-168",
      layer: "far",
      motif: "vine",
      x: 1599,
      y: 103,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-169",
      layer: "mid",
      motif: "glassBerry",
      x: 1696,
      y: 144,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-170",
      layer: "far",
      motif: "cloud",
      x: 1793,
      y: 185,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-9-171",
      layer: "near",
      motif: "windmill",
      x: 1890,
      y: 226,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-172",
      layer: "far",
      motif: "grass",
      x: 1987,
      y: 267,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-9-173",
      layer: "mid",
      motif: "gear",
      x: 2084,
      y: 308,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-9-174",
      layer: "far",
      motif: "vine",
      x: 2181,
      y: 349,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-9-175",
      layer: "mid",
      motif: "glassBerry",
      x: 2278,
      y: 390,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-9-176",
      layer: "near",
      motif: "cloud",
      x: 2375,
      y: 431,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.82
    },
    {
      id: "decor-9-177",
      layer: "mid",
      motif: "windmill",
      x: 2472,
      y: 42,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-9-178",
      layer: "far",
      motif: "grass",
      x: 2569,
      y: 83,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-9-179",
      layer: "mid",
      motif: "gear",
      x: 2666,
      y: 124,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-9-180",
      layer: "far",
      motif: "vine",
      x: 2763,
      y: 165,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-9",
    x: 4736,
    y: 448,
    nextLevelId: "level-10"
  }
};
