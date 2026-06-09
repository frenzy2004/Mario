import type { LevelDefinition } from "../schema";

export const LEVEL_05: LevelDefinition = {
  id: "level-05",
  index: 4,
  title: "Brassroot Verge 05",
  chapter: "Brassroot Verge",
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
    "...............###...........................####..........................#####.........................######........................#######............",
    "..........=======.......................===...........................====..........................=====.........................======..................",
    "...................................#######.......................###...........................####..........................#####........................",
    "..............................######........................#######.......................###...........................####..............................",
    ".........................=====.........................======........................=======.......................===...........................=........",
    "....................####.....................W....#####.........................#W####........................#######W......................###...........",
    "....................................S...................................S...................................S.............................................",
    "...P.......................W...................................W...................................W...................................W............G.....",
    "..................S...................................S...................................S...................................S...........................",
    "^################^...###########..^###########....#^########...#####^#####..#########^##....##########...###########..#^##########....##^################^",
    "##################^.^###########^.############^.^.##########^.^###########^.############^.^.##########^.^###########^.############^.^.####################"
  ],
  enemies: [
    {
      id: "enemy-5-1",
      kind: "spiker",
      x: 532,
      y: 448,
      patrolMin: 437,
      patrolMax: 652,
      speed: 92,
      phase: 4
    },
    {
      id: "enemy-5-2",
      kind: "turret",
      x: 862,
      y: 416,
      patrolMin: 749,
      patrolMax: 1004,
      speed: 104,
      phase: 7
    },
    {
      id: "enemy-5-3",
      kind: "beetle",
      x: 1192,
      y: 384,
      patrolMin: 1061,
      patrolMax: 1356,
      speed: 44,
      phase: 10
    },
    {
      id: "enemy-5-4",
      kind: "acorn",
      x: 1522,
      y: 352,
      patrolMin: 1373,
      patrolMax: 1708,
      speed: 56,
      phase: 13
    },
    {
      id: "enemy-5-5",
      kind: "lantern",
      x: 1852,
      y: 320,
      patrolMin: 1757,
      patrolMax: 2060,
      speed: 68,
      phase: 16
    },
    {
      id: "enemy-5-6",
      kind: "charger",
      x: 2182,
      y: 448,
      patrolMin: 2069,
      patrolMax: 2302,
      speed: 80,
      phase: 19
    },
    {
      id: "enemy-5-7",
      kind: "spiker",
      x: 2512,
      y: 416,
      patrolMin: 2381,
      patrolMax: 2654,
      speed: 92,
      phase: 22
    },
    {
      id: "enemy-5-8",
      kind: "turret",
      x: 2842,
      y: 384,
      patrolMin: 2693,
      patrolMax: 3006,
      speed: 104,
      phase: 25
    },
    {
      id: "enemy-5-9",
      kind: "beetle",
      x: 3172,
      y: 352,
      patrolMin: 3077,
      patrolMax: 3358,
      speed: 44,
      phase: 28
    },
    {
      id: "enemy-5-10",
      kind: "acorn",
      x: 3502,
      y: 320,
      patrolMin: 3389,
      patrolMax: 3710,
      speed: 56,
      phase: 31
    },
    {
      id: "enemy-5-11",
      kind: "lantern",
      x: 3832,
      y: 448,
      patrolMin: 3701,
      patrolMax: 3952,
      speed: 68,
      phase: 34
    },
    {
      id: "enemy-5-12",
      kind: "charger",
      x: 4162,
      y: 416,
      patrolMin: 4013,
      patrolMax: 4304,
      speed: 80,
      phase: 37
    },
    {
      id: "enemy-5-13",
      kind: "spiker",
      x: 4492,
      y: 384,
      patrolMin: 4397,
      patrolMax: 4656,
      speed: 92,
      phase: 40
    },
    {
      id: "enemy-5-14",
      kind: "turret",
      x: 4822,
      y: 352,
      patrolMin: 4709,
      patrolMax: 4748,
      speed: 104,
      phase: 43
    },
    {
      id: "enemy-5-15",
      kind: "beetle",
      x: 5152,
      y: 320,
      patrolMin: 5021,
      patrolMax: 4748,
      speed: 44,
      phase: 46
    },
    {
      id: "enemy-5-16",
      kind: "acorn",
      x: 5482,
      y: 448,
      patrolMin: 5333,
      patrolMax: 4748,
      speed: 56,
      phase: 49
    }
  ],
  collectibles: [
    {
      id: "collectible-5-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 180,
      y: 151
    },
    {
      id: "collectible-5-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 250,
      y: 204
    },
    {
      id: "collectible-5-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 320,
      y: 224
    },
    {
      id: "collectible-5-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 390,
      y: 277
    },
    {
      id: "collectible-5-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 460,
      y: 330
    },
    {
      id: "collectible-5-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 530,
      y: 350
    },
    {
      id: "collectible-5-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 600,
      y: 403
    },
    {
      id: "collectible-5-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 670,
      y: 162
    },
    {
      id: "collectible-5-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 740,
      y: 182
    },
    {
      id: "collectible-5-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 810,
      y: 235
    },
    {
      id: "collectible-5-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 880,
      y: 288
    },
    {
      id: "collectible-5-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 950,
      y: 308
    },
    {
      id: "collectible-5-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1020,
      y: 361
    },
    {
      id: "collectible-5-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1090,
      y: 414
    },
    {
      id: "collectible-5-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1160,
      y: 140
    },
    {
      id: "collectible-5-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1230,
      y: 193
    },
    {
      id: "collectible-5-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1300,
      y: 246
    },
    {
      id: "collectible-5-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1370,
      y: 266
    },
    {
      id: "collectible-5-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1440,
      y: 319
    },
    {
      id: "collectible-5-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1510,
      y: 372
    },
    {
      id: "collectible-5-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1580,
      y: 392
    },
    {
      id: "collectible-5-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1650,
      y: 151
    },
    {
      id: "collectible-5-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1720,
      y: 204
    },
    {
      id: "collectible-5-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1790,
      y: 224
    },
    {
      id: "collectible-5-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1860,
      y: 277
    },
    {
      id: "collectible-5-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1930,
      y: 330
    },
    {
      id: "collectible-5-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2000,
      y: 350
    },
    {
      id: "collectible-5-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2070,
      y: 403
    },
    {
      id: "collectible-5-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2140,
      y: 162
    },
    {
      id: "collectible-5-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2210,
      y: 182
    },
    {
      id: "collectible-5-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2280,
      y: 235
    },
    {
      id: "collectible-5-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2350,
      y: 288
    },
    {
      id: "collectible-5-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2420,
      y: 308
    },
    {
      id: "collectible-5-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2490,
      y: 361
    },
    {
      id: "collectible-5-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2560,
      y: 414
    },
    {
      id: "collectible-5-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2630,
      y: 140
    },
    {
      id: "collectible-5-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2700,
      y: 193
    },
    {
      id: "collectible-5-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2770,
      y: 246
    },
    {
      id: "collectible-5-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2840,
      y: 266
    },
    {
      id: "collectible-5-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2910,
      y: 319
    },
    {
      id: "collectible-5-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2980,
      y: 372
    },
    {
      id: "collectible-5-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3050,
      y: 392
    },
    {
      id: "collectible-5-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3120,
      y: 151
    },
    {
      id: "collectible-5-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3190,
      y: 204
    },
    {
      id: "collectible-5-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3260,
      y: 224
    },
    {
      id: "collectible-5-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3330,
      y: 277
    },
    {
      id: "collectible-5-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3400,
      y: 330
    },
    {
      id: "collectible-5-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3470,
      y: 350
    },
    {
      id: "collectible-5-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3540,
      y: 403
    },
    {
      id: "collectible-5-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3610,
      y: 162
    },
    {
      id: "collectible-5-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3680,
      y: 182
    },
    {
      id: "collectible-5-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3750,
      y: 235
    },
    {
      id: "collectible-5-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3820,
      y: 288
    },
    {
      id: "collectible-5-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3890,
      y: 308
    },
    {
      id: "collectible-5-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3960,
      y: 361
    },
    {
      id: "collectible-5-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4030,
      y: 414
    },
    {
      id: "collectible-5-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4100,
      y: 140
    },
    {
      id: "collectible-5-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4170,
      y: 193
    },
    {
      id: "collectible-5-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4240,
      y: 246
    },
    {
      id: "collectible-5-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4310,
      y: 266
    },
    {
      id: "collectible-5-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4380,
      y: 319
    },
    {
      id: "collectible-5-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4450,
      y: 372
    },
    {
      id: "collectible-5-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4520,
      y: 392
    },
    {
      id: "collectible-5-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4590,
      y: 151
    },
    {
      id: "collectible-5-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4660,
      y: 204
    },
    {
      id: "collectible-5-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4730,
      y: 224
    },
    {
      id: "collectible-5-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4800,
      y: 277
    },
    {
      id: "collectible-5-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4870,
      y: 330
    },
    {
      id: "collectible-5-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4940,
      y: 350
    },
    {
      id: "collectible-5-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5010,
      y: 403
    },
    {
      id: "collectible-5-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5080,
      y: 162
    },
    {
      id: "collectible-5-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5150,
      y: 182
    },
    {
      id: "collectible-5-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5220,
      y: 235
    },
    {
      id: "collectible-5-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5290,
      y: 288
    },
    {
      id: "collectible-5-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5360,
      y: 308
    },
    {
      id: "collectible-5-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5430,
      y: 361
    },
    {
      id: "collectible-5-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5500,
      y: 414
    },
    {
      id: "collectible-5-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5570,
      y: 140
    }
  ],
  powerups: [
    {
      id: "powerup-5-1",
      kind: "shield",
      durationMs: 4800,
      x: 620,
      y: 130
    },
    {
      id: "powerup-5-2",
      kind: "springBoots",
      durationMs: 5700,
      x: 1450,
      y: 182
    },
    {
      id: "powerup-5-3",
      kind: "starburst",
      durationMs: 6600,
      x: 2280,
      y: 234
    },
    {
      id: "powerup-5-4",
      kind: "gliderLeaf",
      durationMs: 7500,
      x: 3110,
      y: 286
    },
    {
      id: "powerup-5-5",
      kind: "shield",
      durationMs: 4800,
      x: 3940,
      y: 338
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-5-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 0.4
    },
    {
      id: "moving-platform-5-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 1.1
    },
    {
      id: "moving-platform-5-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 1.7999999999999998
    },
    {
      id: "moving-platform-5-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 2.4999999999999996
    },
    {
      id: "moving-platform-5-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 3.1999999999999997
    },
    {
      id: "moving-platform-5-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 3.9
    },
    {
      id: "moving-platform-5-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 4.6
    },
    {
      id: "moving-platform-5-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 5.3
    },
    {
      id: "moving-platform-5-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 6
    },
    {
      id: "moving-platform-5-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 6.7
    },
    {
      id: "moving-platform-5-11",
      x: 6040,
      y: 250,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 7.4
    }
  ],
  hazards: [
    {
      id: "hazard-5-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 4
    },
    {
      id: "hazard-5-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 5
    },
    {
      id: "hazard-5-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 6
    },
    {
      id: "hazard-5-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 7
    },
    {
      id: "hazard-5-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 8
    },
    {
      id: "hazard-5-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 9
    },
    {
      id: "hazard-5-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 10
    },
    {
      id: "hazard-5-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 11
    },
    {
      id: "hazard-5-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 12
    },
    {
      id: "hazard-5-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 13
    },
    {
      id: "hazard-5-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 14
    },
    {
      id: "hazard-5-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 15
    },
    {
      id: "hazard-5-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 16
    },
    {
      id: "hazard-5-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 17
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-5-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-5-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-5-1",
      x: 674,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-5-2",
      x: 1444,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-5-3",
      x: 2214,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-5-4",
      x: 2984,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-5-5",
      x: 3754,
      y: 416,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-5-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    },
    {
      id: "wind-5-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -8.5
    },
    {
      id: "wind-5-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -8.5
    }
  ],
  decorations: [
    {
      id: "decor-5-1",
      layer: "near",
      motif: "windmill",
      x: 92,
      y: 84,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-2",
      layer: "far",
      motif: "grass",
      x: 189,
      y: 125,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-3",
      layer: "mid",
      motif: "gear",
      x: 286,
      y: 166,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-4",
      layer: "far",
      motif: "vine",
      x: 383,
      y: 207,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-5",
      layer: "mid",
      motif: "glassBerry",
      x: 480,
      y: 248,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-6",
      layer: "near",
      motif: "cloud",
      x: 577,
      y: 289,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-7",
      layer: "mid",
      motif: "windmill",
      x: 674,
      y: 330,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-8",
      layer: "far",
      motif: "grass",
      x: 771,
      y: 371,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-9",
      layer: "mid",
      motif: "gear",
      x: 868,
      y: 412,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-10",
      layer: "far",
      motif: "vine",
      x: 965,
      y: 453,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-11",
      layer: "near",
      motif: "glassBerry",
      x: 1062,
      y: 64,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-12",
      layer: "far",
      motif: "cloud",
      x: 1159,
      y: 105,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-13",
      layer: "mid",
      motif: "windmill",
      x: 1256,
      y: 146,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-14",
      layer: "far",
      motif: "grass",
      x: 1353,
      y: 187,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-15",
      layer: "mid",
      motif: "gear",
      x: 1450,
      y: 228,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-16",
      layer: "near",
      motif: "vine",
      x: 1547,
      y: 269,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-17",
      layer: "mid",
      motif: "glassBerry",
      x: 1644,
      y: 310,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-18",
      layer: "far",
      motif: "cloud",
      x: 1741,
      y: 351,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-19",
      layer: "mid",
      motif: "windmill",
      x: 1838,
      y: 392,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-20",
      layer: "far",
      motif: "grass",
      x: 1935,
      y: 433,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-21",
      layer: "near",
      motif: "gear",
      x: 2032,
      y: 44,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-22",
      layer: "far",
      motif: "vine",
      x: 2129,
      y: 85,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-23",
      layer: "mid",
      motif: "glassBerry",
      x: 2226,
      y: 126,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-24",
      layer: "far",
      motif: "cloud",
      x: 2323,
      y: 167,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-25",
      layer: "mid",
      motif: "windmill",
      x: 2420,
      y: 208,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-26",
      layer: "near",
      motif: "grass",
      x: 2517,
      y: 249,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-27",
      layer: "mid",
      motif: "gear",
      x: 2614,
      y: 290,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-28",
      layer: "far",
      motif: "vine",
      x: 2711,
      y: 331,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-29",
      layer: "mid",
      motif: "glassBerry",
      x: 2808,
      y: 372,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-30",
      layer: "far",
      motif: "cloud",
      x: 2905,
      y: 413,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-31",
      layer: "near",
      motif: "windmill",
      x: 3002,
      y: 454,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-32",
      layer: "far",
      motif: "grass",
      x: 3099,
      y: 65,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-33",
      layer: "mid",
      motif: "gear",
      x: 3196,
      y: 106,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-34",
      layer: "far",
      motif: "vine",
      x: 3293,
      y: 147,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-35",
      layer: "mid",
      motif: "glassBerry",
      x: 3390,
      y: 188,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-36",
      layer: "near",
      motif: "cloud",
      x: 3487,
      y: 229,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-37",
      layer: "mid",
      motif: "windmill",
      x: 3584,
      y: 270,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-38",
      layer: "far",
      motif: "grass",
      x: 3681,
      y: 311,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-39",
      layer: "mid",
      motif: "gear",
      x: 3778,
      y: 352,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-40",
      layer: "far",
      motif: "vine",
      x: 3875,
      y: 393,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-41",
      layer: "near",
      motif: "glassBerry",
      x: 3972,
      y: 434,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-42",
      layer: "far",
      motif: "cloud",
      x: 4069,
      y: 45,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-43",
      layer: "mid",
      motif: "windmill",
      x: 4166,
      y: 86,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-44",
      layer: "far",
      motif: "grass",
      x: 4263,
      y: 127,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-45",
      layer: "mid",
      motif: "gear",
      x: 4360,
      y: 168,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-46",
      layer: "near",
      motif: "vine",
      x: 4457,
      y: 209,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-47",
      layer: "mid",
      motif: "glassBerry",
      x: 4554,
      y: 250,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-48",
      layer: "far",
      motif: "cloud",
      x: 4651,
      y: 291,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-49",
      layer: "mid",
      motif: "windmill",
      x: 4748,
      y: 332,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-50",
      layer: "far",
      motif: "grass",
      x: 4845,
      y: 373,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-51",
      layer: "near",
      motif: "gear",
      x: 14,
      y: 414,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-52",
      layer: "far",
      motif: "vine",
      x: 111,
      y: 455,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-53",
      layer: "mid",
      motif: "glassBerry",
      x: 208,
      y: 66,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-54",
      layer: "far",
      motif: "cloud",
      x: 305,
      y: 107,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-55",
      layer: "mid",
      motif: "windmill",
      x: 402,
      y: 148,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-56",
      layer: "near",
      motif: "grass",
      x: 499,
      y: 189,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-57",
      layer: "mid",
      motif: "gear",
      x: 596,
      y: 230,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-58",
      layer: "far",
      motif: "vine",
      x: 693,
      y: 271,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-59",
      layer: "mid",
      motif: "glassBerry",
      x: 790,
      y: 312,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-60",
      layer: "far",
      motif: "cloud",
      x: 887,
      y: 353,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-61",
      layer: "near",
      motif: "windmill",
      x: 984,
      y: 394,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-62",
      layer: "far",
      motif: "grass",
      x: 1081,
      y: 435,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-63",
      layer: "mid",
      motif: "gear",
      x: 1178,
      y: 46,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-64",
      layer: "far",
      motif: "vine",
      x: 1275,
      y: 87,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-65",
      layer: "mid",
      motif: "glassBerry",
      x: 1372,
      y: 128,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-66",
      layer: "near",
      motif: "cloud",
      x: 1469,
      y: 169,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-67",
      layer: "mid",
      motif: "windmill",
      x: 1566,
      y: 210,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-68",
      layer: "far",
      motif: "grass",
      x: 1663,
      y: 251,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-69",
      layer: "mid",
      motif: "gear",
      x: 1760,
      y: 292,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-70",
      layer: "far",
      motif: "vine",
      x: 1857,
      y: 333,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-71",
      layer: "near",
      motif: "glassBerry",
      x: 1954,
      y: 374,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-72",
      layer: "far",
      motif: "cloud",
      x: 2051,
      y: 415,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-73",
      layer: "mid",
      motif: "windmill",
      x: 2148,
      y: 456,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-74",
      layer: "far",
      motif: "grass",
      x: 2245,
      y: 67,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-75",
      layer: "mid",
      motif: "gear",
      x: 2342,
      y: 108,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-76",
      layer: "near",
      motif: "vine",
      x: 2439,
      y: 149,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-77",
      layer: "mid",
      motif: "glassBerry",
      x: 2536,
      y: 190,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-78",
      layer: "far",
      motif: "cloud",
      x: 2633,
      y: 231,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-79",
      layer: "mid",
      motif: "windmill",
      x: 2730,
      y: 272,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-80",
      layer: "far",
      motif: "grass",
      x: 2827,
      y: 313,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-81",
      layer: "near",
      motif: "gear",
      x: 2924,
      y: 354,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-82",
      layer: "far",
      motif: "vine",
      x: 3021,
      y: 395,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-83",
      layer: "mid",
      motif: "glassBerry",
      x: 3118,
      y: 436,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-84",
      layer: "far",
      motif: "cloud",
      x: 3215,
      y: 47,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-85",
      layer: "mid",
      motif: "windmill",
      x: 3312,
      y: 88,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-86",
      layer: "near",
      motif: "grass",
      x: 3409,
      y: 129,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-87",
      layer: "mid",
      motif: "gear",
      x: 3506,
      y: 170,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-88",
      layer: "far",
      motif: "vine",
      x: 3603,
      y: 211,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-89",
      layer: "mid",
      motif: "glassBerry",
      x: 3700,
      y: 252,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-90",
      layer: "far",
      motif: "cloud",
      x: 3797,
      y: 293,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-91",
      layer: "near",
      motif: "windmill",
      x: 3894,
      y: 334,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-92",
      layer: "far",
      motif: "grass",
      x: 3991,
      y: 375,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-93",
      layer: "mid",
      motif: "gear",
      x: 4088,
      y: 416,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-94",
      layer: "far",
      motif: "vine",
      x: 4185,
      y: 457,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-95",
      layer: "mid",
      motif: "glassBerry",
      x: 4282,
      y: 68,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-96",
      layer: "near",
      motif: "cloud",
      x: 4379,
      y: 109,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-97",
      layer: "mid",
      motif: "windmill",
      x: 4476,
      y: 150,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-98",
      layer: "far",
      motif: "grass",
      x: 4573,
      y: 191,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-99",
      layer: "mid",
      motif: "gear",
      x: 4670,
      y: 232,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-100",
      layer: "far",
      motif: "vine",
      x: 4767,
      y: 273,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-101",
      layer: "near",
      motif: "glassBerry",
      x: 4864,
      y: 314,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-102",
      layer: "far",
      motif: "cloud",
      x: 33,
      y: 355,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-103",
      layer: "mid",
      motif: "windmill",
      x: 130,
      y: 396,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-104",
      layer: "far",
      motif: "grass",
      x: 227,
      y: 437,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-105",
      layer: "mid",
      motif: "gear",
      x: 324,
      y: 48,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-106",
      layer: "near",
      motif: "vine",
      x: 421,
      y: 89,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-107",
      layer: "mid",
      motif: "glassBerry",
      x: 518,
      y: 130,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-108",
      layer: "far",
      motif: "cloud",
      x: 615,
      y: 171,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-109",
      layer: "mid",
      motif: "windmill",
      x: 712,
      y: 212,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-110",
      layer: "far",
      motif: "grass",
      x: 809,
      y: 253,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-111",
      layer: "near",
      motif: "gear",
      x: 906,
      y: 294,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-112",
      layer: "far",
      motif: "vine",
      x: 1003,
      y: 335,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-113",
      layer: "mid",
      motif: "glassBerry",
      x: 1100,
      y: 376,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-114",
      layer: "far",
      motif: "cloud",
      x: 1197,
      y: 417,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-115",
      layer: "mid",
      motif: "windmill",
      x: 1294,
      y: 458,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-116",
      layer: "near",
      motif: "grass",
      x: 1391,
      y: 69,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-117",
      layer: "mid",
      motif: "gear",
      x: 1488,
      y: 110,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-118",
      layer: "far",
      motif: "vine",
      x: 1585,
      y: 151,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-119",
      layer: "mid",
      motif: "glassBerry",
      x: 1682,
      y: 192,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-120",
      layer: "far",
      motif: "cloud",
      x: 1779,
      y: 233,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-121",
      layer: "near",
      motif: "windmill",
      x: 1876,
      y: 274,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-122",
      layer: "far",
      motif: "grass",
      x: 1973,
      y: 315,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-123",
      layer: "mid",
      motif: "gear",
      x: 2070,
      y: 356,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-124",
      layer: "far",
      motif: "vine",
      x: 2167,
      y: 397,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-125",
      layer: "mid",
      motif: "glassBerry",
      x: 2264,
      y: 438,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-126",
      layer: "near",
      motif: "cloud",
      x: 2361,
      y: 49,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-127",
      layer: "mid",
      motif: "windmill",
      x: 2458,
      y: 90,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-128",
      layer: "far",
      motif: "grass",
      x: 2555,
      y: 131,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-129",
      layer: "mid",
      motif: "gear",
      x: 2652,
      y: 172,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-130",
      layer: "far",
      motif: "vine",
      x: 2749,
      y: 213,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-131",
      layer: "near",
      motif: "glassBerry",
      x: 2846,
      y: 254,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-132",
      layer: "far",
      motif: "cloud",
      x: 2943,
      y: 295,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-133",
      layer: "mid",
      motif: "windmill",
      x: 3040,
      y: 336,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-134",
      layer: "far",
      motif: "grass",
      x: 3137,
      y: 377,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-135",
      layer: "mid",
      motif: "gear",
      x: 3234,
      y: 418,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-136",
      layer: "near",
      motif: "vine",
      x: 3331,
      y: 459,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-137",
      layer: "mid",
      motif: "glassBerry",
      x: 3428,
      y: 70,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-138",
      layer: "far",
      motif: "cloud",
      x: 3525,
      y: 111,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-139",
      layer: "mid",
      motif: "windmill",
      x: 3622,
      y: 152,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-140",
      layer: "far",
      motif: "grass",
      x: 3719,
      y: 193,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-141",
      layer: "near",
      motif: "gear",
      x: 3816,
      y: 234,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-142",
      layer: "far",
      motif: "vine",
      x: 3913,
      y: 275,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-143",
      layer: "mid",
      motif: "glassBerry",
      x: 4010,
      y: 316,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-144",
      layer: "far",
      motif: "cloud",
      x: 4107,
      y: 357,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-145",
      layer: "mid",
      motif: "windmill",
      x: 4204,
      y: 398,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-146",
      layer: "near",
      motif: "grass",
      x: 4301,
      y: 439,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-147",
      layer: "mid",
      motif: "gear",
      x: 4398,
      y: 50,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-148",
      layer: "far",
      motif: "vine",
      x: 4495,
      y: 91,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-149",
      layer: "mid",
      motif: "glassBerry",
      x: 4592,
      y: 132,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-150",
      layer: "far",
      motif: "cloud",
      x: 4689,
      y: 173,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-151",
      layer: "near",
      motif: "windmill",
      x: 4786,
      y: 214,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-152",
      layer: "far",
      motif: "grass",
      x: 4883,
      y: 255,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-153",
      layer: "mid",
      motif: "gear",
      x: 52,
      y: 296,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-154",
      layer: "far",
      motif: "vine",
      x: 149,
      y: 337,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-155",
      layer: "mid",
      motif: "glassBerry",
      x: 246,
      y: 378,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-156",
      layer: "near",
      motif: "cloud",
      x: 343,
      y: 419,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-157",
      layer: "mid",
      motif: "windmill",
      x: 440,
      y: 460,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-158",
      layer: "far",
      motif: "grass",
      x: 537,
      y: 71,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-159",
      layer: "mid",
      motif: "gear",
      x: 634,
      y: 112,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-160",
      layer: "far",
      motif: "vine",
      x: 731,
      y: 153,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-161",
      layer: "near",
      motif: "glassBerry",
      x: 828,
      y: 194,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-162",
      layer: "far",
      motif: "cloud",
      x: 925,
      y: 235,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-163",
      layer: "mid",
      motif: "windmill",
      x: 1022,
      y: 276,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-164",
      layer: "far",
      motif: "grass",
      x: 1119,
      y: 317,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-165",
      layer: "mid",
      motif: "gear",
      x: 1216,
      y: 358,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-166",
      layer: "near",
      motif: "vine",
      x: 1313,
      y: 399,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-167",
      layer: "mid",
      motif: "glassBerry",
      x: 1410,
      y: 440,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-168",
      layer: "far",
      motif: "cloud",
      x: 1507,
      y: 51,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-169",
      layer: "mid",
      motif: "windmill",
      x: 1604,
      y: 92,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-170",
      layer: "far",
      motif: "grass",
      x: 1701,
      y: 133,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-5-171",
      layer: "near",
      motif: "gear",
      x: 1798,
      y: 174,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-172",
      layer: "far",
      motif: "vine",
      x: 1895,
      y: 215,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-5-173",
      layer: "mid",
      motif: "glassBerry",
      x: 1992,
      y: 256,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-5-174",
      layer: "far",
      motif: "cloud",
      x: 2089,
      y: 297,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-5-175",
      layer: "mid",
      motif: "windmill",
      x: 2186,
      y: 338,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-5-176",
      layer: "near",
      motif: "grass",
      x: 2283,
      y: 379,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-5-177",
      layer: "mid",
      motif: "gear",
      x: 2380,
      y: 420,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-5-178",
      layer: "far",
      motif: "vine",
      x: 2477,
      y: 461,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-5-179",
      layer: "mid",
      motif: "glassBerry",
      x: 2574,
      y: 72,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-5-180",
      layer: "far",
      motif: "cloud",
      x: 2671,
      y: 113,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-5",
    x: 4736,
    y: 448,
    nextLevelId: "level-06"
  }
};
