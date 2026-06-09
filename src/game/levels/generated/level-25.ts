import type { LevelDefinition } from "../schema";

export const LEVEL_25: LevelDefinition = {
  id: "level-25",
  index: 24,
  title: "Moonlit Gearway 04",
  chapter: "Moonlit Gearway",
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
    "...................................#######.......................###...........................####..........................#####........................",
    "..............................######........................#######.......................###...........................####..............................",
    ".........................=====.........................======........................=======.......................===...........................=........",
    "....................####..........................#####.........................######........................#######.......................###...........",
    "...............###...........................####..........................#####.........................######........................#######............",
    "..........=======.......................=W=...........................====...W......................=====........W................======..................",
    "................................S...................................S...................................S.................................................",
    "...P...................W...................................W...................................W...................................W................G.....",
    "..............S...................................S...................................S...................................S...............................",
    "^################^..############....##########...##^########..######^#####....#######^##...###########..############....##########...###^################^",
    "##################^.############^.^.##########^.^###########^.############^.^.##########^.^###########^.############^.^.##########^.^#####################"
  ],
  enemies: [
    {
      id: "enemy-25-1",
      kind: "beetle",
      x: 532,
      y: 448,
      patrolMin: 437,
      patrolMax: 652,
      speed: 44,
      phase: 24
    },
    {
      id: "enemy-25-2",
      kind: "acorn",
      x: 862,
      y: 416,
      patrolMin: 749,
      patrolMax: 1004,
      speed: 56,
      phase: 27
    },
    {
      id: "enemy-25-3",
      kind: "lantern",
      x: 1192,
      y: 384,
      patrolMin: 1061,
      patrolMax: 1356,
      speed: 68,
      phase: 30
    },
    {
      id: "enemy-25-4",
      kind: "charger",
      x: 1522,
      y: 352,
      patrolMin: 1373,
      patrolMax: 1708,
      speed: 80,
      phase: 33
    },
    {
      id: "enemy-25-5",
      kind: "spiker",
      x: 1852,
      y: 320,
      patrolMin: 1757,
      patrolMax: 2060,
      speed: 92,
      phase: 36
    },
    {
      id: "enemy-25-6",
      kind: "turret",
      x: 2182,
      y: 448,
      patrolMin: 2069,
      patrolMax: 2302,
      speed: 104,
      phase: 39
    },
    {
      id: "enemy-25-7",
      kind: "beetle",
      x: 2512,
      y: 416,
      patrolMin: 2381,
      patrolMax: 2654,
      speed: 44,
      phase: 42
    },
    {
      id: "enemy-25-8",
      kind: "acorn",
      x: 2842,
      y: 384,
      patrolMin: 2693,
      patrolMax: 3006,
      speed: 56,
      phase: 45
    },
    {
      id: "enemy-25-9",
      kind: "lantern",
      x: 3172,
      y: 352,
      patrolMin: 3077,
      patrolMax: 3358,
      speed: 68,
      phase: 48
    },
    {
      id: "enemy-25-10",
      kind: "charger",
      x: 3502,
      y: 320,
      patrolMin: 3389,
      patrolMax: 3710,
      speed: 80,
      phase: 51
    },
    {
      id: "enemy-25-11",
      kind: "spiker",
      x: 3832,
      y: 448,
      patrolMin: 3701,
      patrolMax: 3952,
      speed: 92,
      phase: 54
    },
    {
      id: "enemy-25-12",
      kind: "turret",
      x: 4162,
      y: 416,
      patrolMin: 4013,
      patrolMax: 4304,
      speed: 104,
      phase: 57
    }
  ],
  collectibles: [
    {
      id: "collectible-25-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 180,
      y: 140
    },
    {
      id: "collectible-25-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 250,
      y: 193
    },
    {
      id: "collectible-25-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 320,
      y: 246
    },
    {
      id: "collectible-25-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 390,
      y: 266
    },
    {
      id: "collectible-25-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 460,
      y: 319
    },
    {
      id: "collectible-25-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 530,
      y: 372
    },
    {
      id: "collectible-25-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 600,
      y: 392
    },
    {
      id: "collectible-25-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 670,
      y: 151
    },
    {
      id: "collectible-25-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 740,
      y: 204
    },
    {
      id: "collectible-25-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 810,
      y: 224
    },
    {
      id: "collectible-25-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 880,
      y: 277
    },
    {
      id: "collectible-25-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 950,
      y: 330
    },
    {
      id: "collectible-25-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1020,
      y: 350
    },
    {
      id: "collectible-25-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1090,
      y: 403
    },
    {
      id: "collectible-25-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1160,
      y: 162
    },
    {
      id: "collectible-25-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1230,
      y: 182
    },
    {
      id: "collectible-25-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1300,
      y: 235
    },
    {
      id: "collectible-25-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1370,
      y: 288
    },
    {
      id: "collectible-25-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1440,
      y: 308
    },
    {
      id: "collectible-25-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1510,
      y: 361
    },
    {
      id: "collectible-25-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1580,
      y: 414
    },
    {
      id: "collectible-25-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1650,
      y: 140
    },
    {
      id: "collectible-25-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1720,
      y: 193
    },
    {
      id: "collectible-25-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1790,
      y: 246
    },
    {
      id: "collectible-25-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1860,
      y: 266
    },
    {
      id: "collectible-25-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1930,
      y: 319
    },
    {
      id: "collectible-25-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2000,
      y: 372
    },
    {
      id: "collectible-25-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2070,
      y: 392
    },
    {
      id: "collectible-25-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2140,
      y: 151
    },
    {
      id: "collectible-25-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2210,
      y: 204
    },
    {
      id: "collectible-25-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2280,
      y: 224
    },
    {
      id: "collectible-25-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2350,
      y: 277
    },
    {
      id: "collectible-25-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2420,
      y: 330
    },
    {
      id: "collectible-25-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2490,
      y: 350
    },
    {
      id: "collectible-25-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2560,
      y: 403
    },
    {
      id: "collectible-25-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2630,
      y: 162
    },
    {
      id: "collectible-25-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2700,
      y: 182
    },
    {
      id: "collectible-25-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2770,
      y: 235
    },
    {
      id: "collectible-25-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2840,
      y: 288
    },
    {
      id: "collectible-25-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2910,
      y: 308
    },
    {
      id: "collectible-25-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2980,
      y: 361
    },
    {
      id: "collectible-25-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3050,
      y: 414
    },
    {
      id: "collectible-25-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3120,
      y: 140
    },
    {
      id: "collectible-25-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3190,
      y: 193
    },
    {
      id: "collectible-25-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3260,
      y: 246
    },
    {
      id: "collectible-25-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3330,
      y: 266
    },
    {
      id: "collectible-25-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3400,
      y: 319
    },
    {
      id: "collectible-25-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3470,
      y: 372
    },
    {
      id: "collectible-25-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3540,
      y: 392
    },
    {
      id: "collectible-25-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3610,
      y: 151
    },
    {
      id: "collectible-25-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3680,
      y: 204
    },
    {
      id: "collectible-25-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3750,
      y: 224
    },
    {
      id: "collectible-25-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3820,
      y: 277
    },
    {
      id: "collectible-25-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3890,
      y: 330
    },
    {
      id: "collectible-25-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3960,
      y: 350
    },
    {
      id: "collectible-25-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4030,
      y: 403
    },
    {
      id: "collectible-25-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4100,
      y: 162
    },
    {
      id: "collectible-25-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4170,
      y: 182
    },
    {
      id: "collectible-25-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4240,
      y: 235
    },
    {
      id: "collectible-25-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4310,
      y: 288
    },
    {
      id: "collectible-25-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4380,
      y: 308
    },
    {
      id: "collectible-25-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4450,
      y: 361
    },
    {
      id: "collectible-25-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4520,
      y: 414
    },
    {
      id: "collectible-25-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4590,
      y: 140
    },
    {
      id: "collectible-25-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4660,
      y: 193
    },
    {
      id: "collectible-25-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4730,
      y: 246
    },
    {
      id: "collectible-25-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4800,
      y: 266
    },
    {
      id: "collectible-25-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4870,
      y: 319
    },
    {
      id: "collectible-25-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4940,
      y: 372
    },
    {
      id: "collectible-25-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5010,
      y: 392
    },
    {
      id: "collectible-25-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5080,
      y: 151
    },
    {
      id: "collectible-25-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5150,
      y: 204
    },
    {
      id: "collectible-25-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5220,
      y: 224
    },
    {
      id: "collectible-25-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5290,
      y: 277
    },
    {
      id: "collectible-25-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5360,
      y: 330
    },
    {
      id: "collectible-25-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5430,
      y: 350
    },
    {
      id: "collectible-25-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5500,
      y: 403
    },
    {
      id: "collectible-25-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5570,
      y: 162
    },
    {
      id: "collectible-25-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5640,
      y: 182
    },
    {
      id: "collectible-25-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5710,
      y: 235
    },
    {
      id: "collectible-25-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5780,
      y: 288
    },
    {
      id: "collectible-25-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5850,
      y: 308
    },
    {
      id: "collectible-25-83",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5920,
      y: 361
    },
    {
      id: "collectible-25-84",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5990,
      y: 414
    },
    {
      id: "collectible-25-85",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6060,
      y: 140
    },
    {
      id: "collectible-25-86",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 6130,
      y: 193
    }
  ],
  powerups: [
    {
      id: "powerup-25-1",
      kind: "shield",
      durationMs: 4800,
      x: 500,
      y: 130
    },
    {
      id: "powerup-25-2",
      kind: "springBoots",
      durationMs: 5700,
      x: 1330,
      y: 182
    },
    {
      id: "powerup-25-3",
      kind: "starburst",
      durationMs: 6600,
      x: 2160,
      y: 234
    },
    {
      id: "powerup-25-4",
      kind: "gliderLeaf",
      durationMs: 7500,
      x: 2990,
      y: 286
    },
    {
      id: "powerup-25-5",
      kind: "shield",
      durationMs: 4800,
      x: 3820,
      y: 338
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-25-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 2.4000000000000004
    },
    {
      id: "moving-platform-25-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 3.1000000000000005
    },
    {
      id: "moving-platform-25-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 3.8000000000000003
    },
    {
      id: "moving-platform-25-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 4.5
    },
    {
      id: "moving-platform-25-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 5.2
    },
    {
      id: "moving-platform-25-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 5.9
    },
    {
      id: "moving-platform-25-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 6.6
    },
    {
      id: "moving-platform-25-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 7.3
    },
    {
      id: "moving-platform-25-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 8
    },
    {
      id: "moving-platform-25-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 8.7
    },
    {
      id: "moving-platform-25-11",
      x: 6040,
      y: 250,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 9.4
    }
  ],
  hazards: [
    {
      id: "hazard-25-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 24
    },
    {
      id: "hazard-25-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 25
    },
    {
      id: "hazard-25-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 26
    },
    {
      id: "hazard-25-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 27
    },
    {
      id: "hazard-25-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 28
    },
    {
      id: "hazard-25-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 29
    },
    {
      id: "hazard-25-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 30
    },
    {
      id: "hazard-25-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 31
    },
    {
      id: "hazard-25-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 32
    },
    {
      id: "hazard-25-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 33
    },
    {
      id: "hazard-25-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 34
    },
    {
      id: "hazard-25-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 35
    },
    {
      id: "hazard-25-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 36
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-25-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-25-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-25-1",
      x: 640,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-25-2",
      x: 1410,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-25-3",
      x: 2180,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-25-4",
      x: 2950,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-25-5",
      x: 3720,
      y: 416,
      power: 1.28
    }
  ],
  windZones: [
    {
      id: "wind-25-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-25-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-25-3",
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
      id: "decor-25-1",
      layer: "near",
      motif: "gear",
      x: 552,
      y: 344,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-2",
      layer: "far",
      motif: "vine",
      x: 649,
      y: 385,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-3",
      layer: "mid",
      motif: "glassBerry",
      x: 746,
      y: 426,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-4",
      layer: "far",
      motif: "cloud",
      x: 843,
      y: 37,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-5",
      layer: "mid",
      motif: "windmill",
      x: 940,
      y: 78,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-6",
      layer: "near",
      motif: "grass",
      x: 1037,
      y: 119,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-7",
      layer: "mid",
      motif: "gear",
      x: 1134,
      y: 160,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-8",
      layer: "far",
      motif: "vine",
      x: 1231,
      y: 201,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-9",
      layer: "mid",
      motif: "glassBerry",
      x: 1328,
      y: 242,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-10",
      layer: "far",
      motif: "cloud",
      x: 1425,
      y: 283,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-11",
      layer: "near",
      motif: "windmill",
      x: 1522,
      y: 324,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-12",
      layer: "far",
      motif: "grass",
      x: 1619,
      y: 365,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-13",
      layer: "mid",
      motif: "gear",
      x: 1716,
      y: 406,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-14",
      layer: "far",
      motif: "vine",
      x: 1813,
      y: 447,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-15",
      layer: "mid",
      motif: "glassBerry",
      x: 1910,
      y: 58,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-16",
      layer: "near",
      motif: "cloud",
      x: 2007,
      y: 99,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-17",
      layer: "mid",
      motif: "windmill",
      x: 2104,
      y: 140,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-18",
      layer: "far",
      motif: "grass",
      x: 2201,
      y: 181,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-19",
      layer: "mid",
      motif: "gear",
      x: 2298,
      y: 222,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-20",
      layer: "far",
      motif: "vine",
      x: 2395,
      y: 263,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-21",
      layer: "near",
      motif: "glassBerry",
      x: 2492,
      y: 304,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-22",
      layer: "far",
      motif: "cloud",
      x: 2589,
      y: 345,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-23",
      layer: "mid",
      motif: "windmill",
      x: 2686,
      y: 386,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-24",
      layer: "far",
      motif: "grass",
      x: 2783,
      y: 427,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-25",
      layer: "mid",
      motif: "gear",
      x: 2880,
      y: 38,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-26",
      layer: "near",
      motif: "vine",
      x: 2977,
      y: 79,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-27",
      layer: "mid",
      motif: "glassBerry",
      x: 3074,
      y: 120,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-28",
      layer: "far",
      motif: "cloud",
      x: 3171,
      y: 161,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-29",
      layer: "mid",
      motif: "windmill",
      x: 3268,
      y: 202,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-30",
      layer: "far",
      motif: "grass",
      x: 3365,
      y: 243,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-31",
      layer: "near",
      motif: "gear",
      x: 3462,
      y: 284,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-32",
      layer: "far",
      motif: "vine",
      x: 3559,
      y: 325,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-33",
      layer: "mid",
      motif: "glassBerry",
      x: 3656,
      y: 366,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-34",
      layer: "far",
      motif: "cloud",
      x: 3753,
      y: 407,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-35",
      layer: "mid",
      motif: "windmill",
      x: 3850,
      y: 448,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-36",
      layer: "near",
      motif: "grass",
      x: 3947,
      y: 59,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-37",
      layer: "mid",
      motif: "gear",
      x: 4044,
      y: 100,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-38",
      layer: "far",
      motif: "vine",
      x: 4141,
      y: 141,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-39",
      layer: "mid",
      motif: "glassBerry",
      x: 4238,
      y: 182,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-40",
      layer: "far",
      motif: "cloud",
      x: 4335,
      y: 223,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-41",
      layer: "near",
      motif: "windmill",
      x: 4432,
      y: 264,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-42",
      layer: "far",
      motif: "grass",
      x: 4529,
      y: 305,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-43",
      layer: "mid",
      motif: "gear",
      x: 4626,
      y: 346,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-44",
      layer: "far",
      motif: "vine",
      x: 4723,
      y: 387,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-45",
      layer: "mid",
      motif: "glassBerry",
      x: 4820,
      y: 428,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-46",
      layer: "near",
      motif: "cloud",
      x: 4917,
      y: 39,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-47",
      layer: "mid",
      motif: "windmill",
      x: 86,
      y: 80,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-48",
      layer: "far",
      motif: "grass",
      x: 183,
      y: 121,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-49",
      layer: "mid",
      motif: "gear",
      x: 280,
      y: 162,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-50",
      layer: "far",
      motif: "vine",
      x: 377,
      y: 203,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-51",
      layer: "near",
      motif: "glassBerry",
      x: 474,
      y: 244,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-52",
      layer: "far",
      motif: "cloud",
      x: 571,
      y: 285,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-53",
      layer: "mid",
      motif: "windmill",
      x: 668,
      y: 326,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-54",
      layer: "far",
      motif: "grass",
      x: 765,
      y: 367,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-55",
      layer: "mid",
      motif: "gear",
      x: 862,
      y: 408,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-56",
      layer: "near",
      motif: "vine",
      x: 959,
      y: 449,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-57",
      layer: "mid",
      motif: "glassBerry",
      x: 1056,
      y: 60,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-58",
      layer: "far",
      motif: "cloud",
      x: 1153,
      y: 101,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-59",
      layer: "mid",
      motif: "windmill",
      x: 1250,
      y: 142,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-60",
      layer: "far",
      motif: "grass",
      x: 1347,
      y: 183,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-61",
      layer: "near",
      motif: "gear",
      x: 1444,
      y: 224,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-62",
      layer: "far",
      motif: "vine",
      x: 1541,
      y: 265,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-63",
      layer: "mid",
      motif: "glassBerry",
      x: 1638,
      y: 306,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-64",
      layer: "far",
      motif: "cloud",
      x: 1735,
      y: 347,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-65",
      layer: "mid",
      motif: "windmill",
      x: 1832,
      y: 388,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-66",
      layer: "near",
      motif: "grass",
      x: 1929,
      y: 429,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-67",
      layer: "mid",
      motif: "gear",
      x: 2026,
      y: 40,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-68",
      layer: "far",
      motif: "vine",
      x: 2123,
      y: 81,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-69",
      layer: "mid",
      motif: "glassBerry",
      x: 2220,
      y: 122,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-70",
      layer: "far",
      motif: "cloud",
      x: 2317,
      y: 163,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-71",
      layer: "near",
      motif: "windmill",
      x: 2414,
      y: 204,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-72",
      layer: "far",
      motif: "grass",
      x: 2511,
      y: 245,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-73",
      layer: "mid",
      motif: "gear",
      x: 2608,
      y: 286,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-74",
      layer: "far",
      motif: "vine",
      x: 2705,
      y: 327,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-75",
      layer: "mid",
      motif: "glassBerry",
      x: 2802,
      y: 368,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-76",
      layer: "near",
      motif: "cloud",
      x: 2899,
      y: 409,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-77",
      layer: "mid",
      motif: "windmill",
      x: 2996,
      y: 450,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-78",
      layer: "far",
      motif: "grass",
      x: 3093,
      y: 61,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-79",
      layer: "mid",
      motif: "gear",
      x: 3190,
      y: 102,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-80",
      layer: "far",
      motif: "vine",
      x: 3287,
      y: 143,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-81",
      layer: "near",
      motif: "glassBerry",
      x: 3384,
      y: 184,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-82",
      layer: "far",
      motif: "cloud",
      x: 3481,
      y: 225,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-83",
      layer: "mid",
      motif: "windmill",
      x: 3578,
      y: 266,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-84",
      layer: "far",
      motif: "grass",
      x: 3675,
      y: 307,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-85",
      layer: "mid",
      motif: "gear",
      x: 3772,
      y: 348,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-86",
      layer: "near",
      motif: "vine",
      x: 3869,
      y: 389,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-87",
      layer: "mid",
      motif: "glassBerry",
      x: 3966,
      y: 430,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-88",
      layer: "far",
      motif: "cloud",
      x: 4063,
      y: 41,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-89",
      layer: "mid",
      motif: "windmill",
      x: 4160,
      y: 82,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-90",
      layer: "far",
      motif: "grass",
      x: 4257,
      y: 123,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-91",
      layer: "near",
      motif: "gear",
      x: 4354,
      y: 164,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-92",
      layer: "far",
      motif: "vine",
      x: 4451,
      y: 205,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-93",
      layer: "mid",
      motif: "glassBerry",
      x: 4548,
      y: 246,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-94",
      layer: "far",
      motif: "cloud",
      x: 4645,
      y: 287,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-95",
      layer: "mid",
      motif: "windmill",
      x: 4742,
      y: 328,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-96",
      layer: "near",
      motif: "grass",
      x: 4839,
      y: 369,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-97",
      layer: "mid",
      motif: "gear",
      x: 8,
      y: 410,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-98",
      layer: "far",
      motif: "vine",
      x: 105,
      y: 451,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-99",
      layer: "mid",
      motif: "glassBerry",
      x: 202,
      y: 62,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-100",
      layer: "far",
      motif: "cloud",
      x: 299,
      y: 103,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-101",
      layer: "near",
      motif: "windmill",
      x: 396,
      y: 144,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-102",
      layer: "far",
      motif: "grass",
      x: 493,
      y: 185,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-103",
      layer: "mid",
      motif: "gear",
      x: 590,
      y: 226,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-104",
      layer: "far",
      motif: "vine",
      x: 687,
      y: 267,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-105",
      layer: "mid",
      motif: "glassBerry",
      x: 784,
      y: 308,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-106",
      layer: "near",
      motif: "cloud",
      x: 881,
      y: 349,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-107",
      layer: "mid",
      motif: "windmill",
      x: 978,
      y: 390,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-108",
      layer: "far",
      motif: "grass",
      x: 1075,
      y: 431,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-109",
      layer: "mid",
      motif: "gear",
      x: 1172,
      y: 42,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-110",
      layer: "far",
      motif: "vine",
      x: 1269,
      y: 83,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-111",
      layer: "near",
      motif: "glassBerry",
      x: 1366,
      y: 124,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-112",
      layer: "far",
      motif: "cloud",
      x: 1463,
      y: 165,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-113",
      layer: "mid",
      motif: "windmill",
      x: 1560,
      y: 206,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-114",
      layer: "far",
      motif: "grass",
      x: 1657,
      y: 247,
      scale: 1,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-115",
      layer: "mid",
      motif: "gear",
      x: 1754,
      y: 288,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-116",
      layer: "near",
      motif: "vine",
      x: 1851,
      y: 329,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-117",
      layer: "mid",
      motif: "glassBerry",
      x: 1948,
      y: 370,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-118",
      layer: "far",
      motif: "cloud",
      x: 2045,
      y: 411,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-119",
      layer: "mid",
      motif: "windmill",
      x: 2142,
      y: 452,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-120",
      layer: "far",
      motif: "grass",
      x: 2239,
      y: 63,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-121",
      layer: "near",
      motif: "gear",
      x: 2336,
      y: 104,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-122",
      layer: "far",
      motif: "vine",
      x: 2433,
      y: 145,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-123",
      layer: "mid",
      motif: "glassBerry",
      x: 2530,
      y: 186,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-124",
      layer: "far",
      motif: "cloud",
      x: 2627,
      y: 227,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-125",
      layer: "mid",
      motif: "windmill",
      x: 2724,
      y: 268,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-126",
      layer: "near",
      motif: "grass",
      x: 2821,
      y: 309,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-127",
      layer: "mid",
      motif: "gear",
      x: 2918,
      y: 350,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-128",
      layer: "far",
      motif: "vine",
      x: 3015,
      y: 391,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-129",
      layer: "mid",
      motif: "glassBerry",
      x: 3112,
      y: 432,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-130",
      layer: "far",
      motif: "cloud",
      x: 3209,
      y: 43,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-131",
      layer: "near",
      motif: "windmill",
      x: 3306,
      y: 84,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-132",
      layer: "far",
      motif: "grass",
      x: 3403,
      y: 125,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-133",
      layer: "mid",
      motif: "gear",
      x: 3500,
      y: 166,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-134",
      layer: "far",
      motif: "vine",
      x: 3597,
      y: 207,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-135",
      layer: "mid",
      motif: "glassBerry",
      x: 3694,
      y: 248,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-136",
      layer: "near",
      motif: "cloud",
      x: 3791,
      y: 289,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-137",
      layer: "mid",
      motif: "windmill",
      x: 3888,
      y: 330,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-138",
      layer: "far",
      motif: "grass",
      x: 3985,
      y: 371,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-139",
      layer: "mid",
      motif: "gear",
      x: 4082,
      y: 412,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-140",
      layer: "far",
      motif: "vine",
      x: 4179,
      y: 453,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-141",
      layer: "near",
      motif: "glassBerry",
      x: 4276,
      y: 64,
      scale: 1,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-142",
      layer: "far",
      motif: "cloud",
      x: 4373,
      y: 105,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-143",
      layer: "mid",
      motif: "windmill",
      x: 4470,
      y: 146,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-144",
      layer: "far",
      motif: "grass",
      x: 4567,
      y: 187,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-145",
      layer: "mid",
      motif: "gear",
      x: 4664,
      y: 228,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-146",
      layer: "near",
      motif: "vine",
      x: 4761,
      y: 269,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-147",
      layer: "mid",
      motif: "glassBerry",
      x: 4858,
      y: 310,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-148",
      layer: "far",
      motif: "cloud",
      x: 27,
      y: 351,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-149",
      layer: "mid",
      motif: "windmill",
      x: 124,
      y: 392,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-150",
      layer: "far",
      motif: "grass",
      x: 221,
      y: 433,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-151",
      layer: "near",
      motif: "gear",
      x: 318,
      y: 44,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-152",
      layer: "far",
      motif: "vine",
      x: 415,
      y: 85,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-153",
      layer: "mid",
      motif: "glassBerry",
      x: 512,
      y: 126,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-154",
      layer: "far",
      motif: "cloud",
      x: 609,
      y: 167,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-155",
      layer: "mid",
      motif: "windmill",
      x: 706,
      y: 208,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-156",
      layer: "near",
      motif: "grass",
      x: 803,
      y: 249,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-157",
      layer: "mid",
      motif: "gear",
      x: 900,
      y: 290,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-158",
      layer: "far",
      motif: "vine",
      x: 997,
      y: 331,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-159",
      layer: "mid",
      motif: "glassBerry",
      x: 1094,
      y: 372,
      scale: 1,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-160",
      layer: "far",
      motif: "cloud",
      x: 1191,
      y: 413,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-161",
      layer: "near",
      motif: "windmill",
      x: 1288,
      y: 454,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-162",
      layer: "far",
      motif: "grass",
      x: 1385,
      y: 65,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-163",
      layer: "mid",
      motif: "gear",
      x: 1482,
      y: 106,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-164",
      layer: "far",
      motif: "vine",
      x: 1579,
      y: 147,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-165",
      layer: "mid",
      motif: "glassBerry",
      x: 1676,
      y: 188,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-166",
      layer: "near",
      motif: "cloud",
      x: 1773,
      y: 229,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-167",
      layer: "mid",
      motif: "windmill",
      x: 1870,
      y: 270,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-168",
      layer: "far",
      motif: "grass",
      x: 1967,
      y: 311,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-169",
      layer: "mid",
      motif: "gear",
      x: 2064,
      y: 352,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-170",
      layer: "far",
      motif: "vine",
      x: 2161,
      y: 393,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-25-171",
      layer: "near",
      motif: "glassBerry",
      x: 2258,
      y: 434,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-172",
      layer: "far",
      motif: "cloud",
      x: 2355,
      y: 45,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-25-173",
      layer: "mid",
      motif: "windmill",
      x: 2452,
      y: 86,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-25-174",
      layer: "far",
      motif: "grass",
      x: 2549,
      y: 127,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.18
    },
    {
      id: "decor-25-175",
      layer: "mid",
      motif: "gear",
      x: 2646,
      y: 168,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-25-176",
      layer: "near",
      motif: "vine",
      x: 2743,
      y: 209,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.82
    },
    {
      id: "decor-25-177",
      layer: "mid",
      motif: "glassBerry",
      x: 2840,
      y: 250,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-25-178",
      layer: "far",
      motif: "cloud",
      x: 2937,
      y: 291,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-25-179",
      layer: "mid",
      motif: "windmill",
      x: 3034,
      y: 332,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.42
    },
    {
      id: "decor-25-180",
      layer: "far",
      motif: "grass",
      x: 3131,
      y: 373,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-25",
    x: 4736,
    y: 448,
    nextLevelId: "level-26"
  }
};
