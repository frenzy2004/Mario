import type { LevelDefinition } from "../schema";

export const FINAL_CHALLENGE: LevelDefinition = {
  id: "final-crown",
  index: 42,
  title: "Final Challenge: Crown of Turning Leaves",
  chapter: "The Warden's Crown",
  columns: 154,
  rows: 18,
  timeLimit: 520,
  palette: {
    skyTop: 1249071,
    skyBottom: 4399467,
    ground: 2976596,
    groundAccent: 16096779,
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
    ".....................................#####.........................######........................#######.......................###........................",
    "................................####..........................#####.........................######........................#######.........................",
    "...........................===...........................====..........................=====.........................======...............................",
    "......................#######.......................###...........................####..........................#####.........................####........",
    ".................######........................#######.......................###...........................####..........................#####............",
    "............=====........................W======........................=====W=.......................===........W..................====..................",
    "................................S...................................S...................................S......=..=..=..=..=..=..=..=..=..=..=..=.........",
    "...P...................W...................................W...................................W...................................WB...............G.....",
    "..............S...................................S...................................S...................................S...............................",
    "^################^..#############..#############..#^###########..###^#########..#####^#######..#######^#####..#########^###..###########^################^",
    "##################^.#############.^#############^.#############.^#############^.#############.^#############^.#############.^#############################"
  ],
  enemies: [
    {
      id: "enemy-43-1",
      kind: "beetle",
      x: 476,
      y: 448,
      patrolMin: 381,
      patrolMax: 596,
      speed: 44,
      phase: 42
    },
    {
      id: "enemy-43-2",
      kind: "acorn",
      x: 806,
      y: 416,
      patrolMin: 693,
      patrolMax: 948,
      speed: 56,
      phase: 45
    },
    {
      id: "enemy-43-3",
      kind: "lantern",
      x: 1136,
      y: 384,
      patrolMin: 1005,
      patrolMax: 1300,
      speed: 68,
      phase: 48
    },
    {
      id: "enemy-43-4",
      kind: "charger",
      x: 1466,
      y: 352,
      patrolMin: 1317,
      patrolMax: 1652,
      speed: 80,
      phase: 51
    },
    {
      id: "enemy-43-5",
      kind: "spiker",
      x: 1796,
      y: 320,
      patrolMin: 1701,
      patrolMax: 2004,
      speed: 92,
      phase: 54
    },
    {
      id: "enemy-43-6",
      kind: "turret",
      x: 2126,
      y: 448,
      patrolMin: 2013,
      patrolMax: 2246,
      speed: 104,
      phase: 57
    },
    {
      id: "enemy-43-7",
      kind: "beetle",
      x: 2456,
      y: 416,
      patrolMin: 2325,
      patrolMax: 2598,
      speed: 44,
      phase: 60
    },
    {
      id: "enemy-43-8",
      kind: "acorn",
      x: 2786,
      y: 384,
      patrolMin: 2637,
      patrolMax: 2950,
      speed: 56,
      phase: 63
    },
    {
      id: "enemy-43-9",
      kind: "lantern",
      x: 3116,
      y: 352,
      patrolMin: 3021,
      patrolMax: 3302,
      speed: 68,
      phase: 66
    },
    {
      id: "enemy-43-10",
      kind: "charger",
      x: 3446,
      y: 320,
      patrolMin: 3333,
      patrolMax: 3654,
      speed: 80,
      phase: 69
    },
    {
      id: "enemy-43-11",
      kind: "spiker",
      x: 3776,
      y: 448,
      patrolMin: 3645,
      patrolMax: 3896,
      speed: 92,
      phase: 72
    },
    {
      id: "enemy-43-12",
      kind: "turret",
      x: 4106,
      y: 416,
      patrolMin: 3957,
      patrolMax: 4248,
      speed: 104,
      phase: 75
    },
    {
      id: "enemy-43-13",
      kind: "beetle",
      x: 4436,
      y: 384,
      patrolMin: 4341,
      patrolMax: 4600,
      speed: 44,
      phase: 78
    },
    {
      id: "enemy-43-14",
      kind: "acorn",
      x: 4766,
      y: 352,
      patrolMin: 4653,
      patrolMax: 4748,
      speed: 56,
      phase: 81
    },
    {
      id: "enemy-43-15",
      kind: "lantern",
      x: 5096,
      y: 320,
      patrolMin: 4965,
      patrolMax: 4748,
      speed: 68,
      phase: 84
    },
    {
      id: "enemy-43-16",
      kind: "charger",
      x: 5426,
      y: 448,
      patrolMin: 5277,
      patrolMax: 4748,
      speed: 80,
      phase: 87
    },
    {
      id: "enemy-43-17",
      kind: "spiker",
      x: 5756,
      y: 416,
      patrolMin: 5661,
      patrolMax: 4748,
      speed: 92,
      phase: 90
    },
    {
      id: "enemy-43-18",
      kind: "turret",
      x: 6086,
      y: 384,
      patrolMin: 5973,
      patrolMax: 4748,
      speed: 104,
      phase: 93
    },
    {
      id: "enemy-43-19",
      kind: "beetle",
      x: 6416,
      y: 352,
      patrolMin: 6285,
      patrolMax: 4748,
      speed: 44,
      phase: 96
    },
    {
      id: "enemy-43-20",
      kind: "acorn",
      x: 6746,
      y: 320,
      patrolMin: 6597,
      patrolMax: 4748,
      speed: 56,
      phase: 99
    },
    {
      id: "enemy-43-21",
      kind: "lantern",
      x: 7076,
      y: 448,
      patrolMin: 6981,
      patrolMax: 4748,
      speed: 68,
      phase: 102
    },
    {
      id: "enemy-43-22",
      kind: "charger",
      x: 7406,
      y: 416,
      patrolMin: 7293,
      patrolMax: 4748,
      speed: 80,
      phase: 105
    },
    {
      id: "enemy-43-23",
      kind: "spiker",
      x: 7736,
      y: 384,
      patrolMin: 7605,
      patrolMax: 4748,
      speed: 92,
      phase: 108
    },
    {
      id: "enemy-43-24",
      kind: "turret",
      x: 8066,
      y: 352,
      patrolMin: 7917,
      patrolMax: 4748,
      speed: 104,
      phase: 111
    },
    {
      id: "enemy-43-25",
      kind: "beetle",
      x: 8396,
      y: 320,
      patrolMin: 8301,
      patrolMax: 4748,
      speed: 44,
      phase: 114
    },
    {
      id: "enemy-43-26",
      kind: "acorn",
      x: 8726,
      y: 448,
      patrolMin: 8613,
      patrolMax: 4748,
      speed: 56,
      phase: 117
    },
    {
      id: "enemy-43-27",
      kind: "lantern",
      x: 9056,
      y: 416,
      patrolMin: 8925,
      patrolMax: 4748,
      speed: 68,
      phase: 120
    },
    {
      id: "enemy-43-28",
      kind: "charger",
      x: 9386,
      y: 384,
      patrolMin: 9237,
      patrolMax: 4748,
      speed: 80,
      phase: 123
    },
    {
      id: "enemy-43-29",
      kind: "spiker",
      x: 9716,
      y: 352,
      patrolMin: 9621,
      patrolMax: 4748,
      speed: 92,
      phase: 126
    },
    {
      id: "enemy-43-30",
      kind: "turret",
      x: 10046,
      y: 320,
      patrolMin: 9933,
      patrolMax: 4748,
      speed: 104,
      phase: 129
    },
    {
      id: "enemy-43-31",
      kind: "beetle",
      x: 10376,
      y: 448,
      patrolMin: 10245,
      patrolMax: 4748,
      speed: 44,
      phase: 132
    },
    {
      id: "enemy-43-32",
      kind: "acorn",
      x: 10706,
      y: 416,
      patrolMin: 10557,
      patrolMax: 4748,
      speed: 56,
      phase: 135
    },
    {
      id: "enemy-43-33",
      kind: "lantern",
      x: 11036,
      y: 384,
      patrolMin: 10941,
      patrolMax: 4748,
      speed: 68,
      phase: 138
    },
    {
      id: "enemy-43-34",
      kind: "charger",
      x: 11366,
      y: 352,
      patrolMin: 11253,
      patrolMax: 4748,
      speed: 80,
      phase: 141
    }
  ],
  collectibles: [
    {
      id: "collectible-43-1",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 204,
      y: 140
    },
    {
      id: "collectible-43-2",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 274,
      y: 193
    },
    {
      id: "collectible-43-3",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 344,
      y: 246
    },
    {
      id: "collectible-43-4",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 414,
      y: 266
    },
    {
      id: "collectible-43-5",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 484,
      y: 319
    },
    {
      id: "collectible-43-6",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 554,
      y: 372
    },
    {
      id: "collectible-43-7",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 624,
      y: 392
    },
    {
      id: "collectible-43-8",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 694,
      y: 151
    },
    {
      id: "collectible-43-9",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 764,
      y: 204
    },
    {
      id: "collectible-43-10",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 834,
      y: 224
    },
    {
      id: "collectible-43-11",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 904,
      y: 277
    },
    {
      id: "collectible-43-12",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 974,
      y: 330
    },
    {
      id: "collectible-43-13",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1044,
      y: 350
    },
    {
      id: "collectible-43-14",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1114,
      y: 403
    },
    {
      id: "collectible-43-15",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1184,
      y: 162
    },
    {
      id: "collectible-43-16",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1254,
      y: 182
    },
    {
      id: "collectible-43-17",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1324,
      y: 235
    },
    {
      id: "collectible-43-18",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 1394,
      y: 288
    },
    {
      id: "collectible-43-19",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1464,
      y: 308
    },
    {
      id: "collectible-43-20",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1534,
      y: 361
    },
    {
      id: "collectible-43-21",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1604,
      y: 414
    },
    {
      id: "collectible-43-22",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1674,
      y: 140
    },
    {
      id: "collectible-43-23",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1744,
      y: 193
    },
    {
      id: "collectible-43-24",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1814,
      y: 246
    },
    {
      id: "collectible-43-25",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1884,
      y: 266
    },
    {
      id: "collectible-43-26",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 1954,
      y: 319
    },
    {
      id: "collectible-43-27",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2024,
      y: 372
    },
    {
      id: "collectible-43-28",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2094,
      y: 392
    },
    {
      id: "collectible-43-29",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2164,
      y: 151
    },
    {
      id: "collectible-43-30",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2234,
      y: 204
    },
    {
      id: "collectible-43-31",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2304,
      y: 224
    },
    {
      id: "collectible-43-32",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 2374,
      y: 277
    },
    {
      id: "collectible-43-33",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2444,
      y: 330
    },
    {
      id: "collectible-43-34",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2514,
      y: 350
    },
    {
      id: "collectible-43-35",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 2584,
      y: 403
    },
    {
      id: "collectible-43-36",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2654,
      y: 162
    },
    {
      id: "collectible-43-37",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2724,
      y: 182
    },
    {
      id: "collectible-43-38",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2794,
      y: 235
    },
    {
      id: "collectible-43-39",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2864,
      y: 288
    },
    {
      id: "collectible-43-40",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 2934,
      y: 308
    },
    {
      id: "collectible-43-41",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3004,
      y: 361
    },
    {
      id: "collectible-43-42",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3074,
      y: 414
    },
    {
      id: "collectible-43-43",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3144,
      y: 140
    },
    {
      id: "collectible-43-44",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3214,
      y: 193
    },
    {
      id: "collectible-43-45",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3284,
      y: 246
    },
    {
      id: "collectible-43-46",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3354,
      y: 266
    },
    {
      id: "collectible-43-47",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3424,
      y: 319
    },
    {
      id: "collectible-43-48",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3494,
      y: 372
    },
    {
      id: "collectible-43-49",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3564,
      y: 392
    },
    {
      id: "collectible-43-50",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3634,
      y: 151
    },
    {
      id: "collectible-43-51",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3704,
      y: 204
    },
    {
      id: "collectible-43-52",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 3774,
      y: 224
    },
    {
      id: "collectible-43-53",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3844,
      y: 277
    },
    {
      id: "collectible-43-54",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3914,
      y: 330
    },
    {
      id: "collectible-43-55",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 3984,
      y: 350
    },
    {
      id: "collectible-43-56",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4054,
      y: 403
    },
    {
      id: "collectible-43-57",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4124,
      y: 162
    },
    {
      id: "collectible-43-58",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4194,
      y: 182
    },
    {
      id: "collectible-43-59",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4264,
      y: 235
    },
    {
      id: "collectible-43-60",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4334,
      y: 288
    },
    {
      id: "collectible-43-61",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4404,
      y: 308
    },
    {
      id: "collectible-43-62",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4474,
      y: 361
    },
    {
      id: "collectible-43-63",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 4544,
      y: 414
    },
    {
      id: "collectible-43-64",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4614,
      y: 140
    },
    {
      id: "collectible-43-65",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4684,
      y: 193
    },
    {
      id: "collectible-43-66",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4754,
      y: 246
    },
    {
      id: "collectible-43-67",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4824,
      y: 266
    },
    {
      id: "collectible-43-68",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 4894,
      y: 319
    },
    {
      id: "collectible-43-69",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 4964,
      y: 372
    },
    {
      id: "collectible-43-70",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5034,
      y: 392
    },
    {
      id: "collectible-43-71",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5104,
      y: 151
    },
    {
      id: "collectible-43-72",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5174,
      y: 204
    },
    {
      id: "collectible-43-73",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5244,
      y: 224
    },
    {
      id: "collectible-43-74",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5314,
      y: 277
    },
    {
      id: "collectible-43-75",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5384,
      y: 330
    },
    {
      id: "collectible-43-76",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5454,
      y: 350
    },
    {
      id: "collectible-43-77",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5524,
      y: 403
    },
    {
      id: "collectible-43-78",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5594,
      y: 162
    },
    {
      id: "collectible-43-79",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5664,
      y: 182
    },
    {
      id: "collectible-43-80",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5734,
      y: 235
    },
    {
      id: "collectible-43-81",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5804,
      y: 288
    },
    {
      id: "collectible-43-82",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5874,
      y: 308
    },
    {
      id: "collectible-43-83",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 5944,
      y: 361
    },
    {
      id: "collectible-43-84",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6014,
      y: 414
    },
    {
      id: "collectible-43-85",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6084,
      y: 140
    },
    {
      id: "collectible-43-86",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 6154,
      y: 193
    },
    {
      id: "collectible-43-87",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6224,
      y: 246
    },
    {
      id: "collectible-43-88",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6294,
      y: 266
    },
    {
      id: "collectible-43-89",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6364,
      y: 319
    },
    {
      id: "collectible-43-90",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6434,
      y: 372
    },
    {
      id: "collectible-43-91",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6504,
      y: 392
    },
    {
      id: "collectible-43-92",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6574,
      y: 151
    },
    {
      id: "collectible-43-93",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6644,
      y: 204
    },
    {
      id: "collectible-43-94",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 6714,
      y: 224
    },
    {
      id: "collectible-43-95",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6784,
      y: 277
    },
    {
      id: "collectible-43-96",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6854,
      y: 330
    },
    {
      id: "collectible-43-97",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6924,
      y: 350
    },
    {
      id: "collectible-43-98",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 6994,
      y: 403
    },
    {
      id: "collectible-43-99",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 7064,
      y: 162
    },
    {
      id: "collectible-43-100",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 7134,
      y: 182
    },
    {
      id: "collectible-43-101",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 7204,
      y: 235
    },
    {
      id: "collectible-43-102",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 7274,
      y: 288
    },
    {
      id: "collectible-43-103",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 7344,
      y: 308
    },
    {
      id: "collectible-43-104",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 7414,
      y: 361
    },
    {
      id: "collectible-43-105",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 7484,
      y: 414
    },
    {
      id: "collectible-43-106",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 7554,
      y: 140
    },
    {
      id: "collectible-43-107",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 7624,
      y: 193
    },
    {
      id: "collectible-43-108",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 7694,
      y: 246
    },
    {
      id: "collectible-43-109",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 7764,
      y: 266
    },
    {
      id: "collectible-43-110",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 7834,
      y: 319
    },
    {
      id: "collectible-43-111",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 7904,
      y: 372
    },
    {
      id: "collectible-43-112",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 7974,
      y: 392
    },
    {
      id: "collectible-43-113",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 8044,
      y: 151
    },
    {
      id: "collectible-43-114",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 8114,
      y: 204
    },
    {
      id: "collectible-43-115",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 8184,
      y: 224
    },
    {
      id: "collectible-43-116",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 8254,
      y: 277
    },
    {
      id: "collectible-43-117",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 8324,
      y: 330
    },
    {
      id: "collectible-43-118",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 8394,
      y: 350
    },
    {
      id: "collectible-43-119",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 8464,
      y: 403
    },
    {
      id: "collectible-43-120",
      kind: "largeCog",
      score: 1000,
      hidden: false,
      x: 8534,
      y: 162
    },
    {
      id: "collectible-43-121",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 8604,
      y: 182
    },
    {
      id: "collectible-43-122",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 8674,
      y: 235
    },
    {
      id: "collectible-43-123",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 8744,
      y: 288
    },
    {
      id: "collectible-43-124",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 8814,
      y: 308
    },
    {
      id: "collectible-43-125",
      kind: "hiddenSeed",
      score: 2000,
      hidden: true,
      x: 8884,
      y: 361
    },
    {
      id: "collectible-43-126",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 8954,
      y: 414
    },
    {
      id: "collectible-43-127",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 9024,
      y: 140
    },
    {
      id: "collectible-43-128",
      kind: "glimmer",
      score: 100,
      hidden: false,
      x: 9094,
      y: 193
    }
  ],
  powerups: [
    {
      id: "powerup-43-1",
      kind: "starburst",
      durationMs: 4800,
      x: 500,
      y: 130
    },
    {
      id: "powerup-43-2",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 1330,
      y: 182
    },
    {
      id: "powerup-43-3",
      kind: "shield",
      durationMs: 6600,
      x: 2160,
      y: 234
    },
    {
      id: "powerup-43-4",
      kind: "springBoots",
      durationMs: 7500,
      x: 2990,
      y: 286
    },
    {
      id: "powerup-43-5",
      kind: "starburst",
      durationMs: 4800,
      x: 3820,
      y: 338
    },
    {
      id: "powerup-43-6",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 4650,
      y: 130
    },
    {
      id: "powerup-43-7",
      kind: "shield",
      durationMs: 6600,
      x: 5480,
      y: 182
    },
    {
      id: "powerup-43-8",
      kind: "springBoots",
      durationMs: 7500,
      x: 6310,
      y: 234
    },
    {
      id: "powerup-43-9",
      kind: "starburst",
      durationMs: 4800,
      x: 7140,
      y: 286
    },
    {
      id: "powerup-43-10",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 7970,
      y: 338
    },
    {
      id: "powerup-43-11",
      kind: "shield",
      durationMs: 6600,
      x: 8800,
      y: 130
    },
    {
      id: "powerup-43-12",
      kind: "springBoots",
      durationMs: 7500,
      x: 9630,
      y: 182
    },
    {
      id: "powerup-43-13",
      kind: "starburst",
      durationMs: 4800,
      x: 10460,
      y: 234
    },
    {
      id: "powerup-43-14",
      kind: "gliderLeaf",
      durationMs: 5700,
      x: 11290,
      y: 286
    }
  ],
  movingPlatforms: [
    {
      id: "moving-platform-43-1",
      x: 740,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 4.2
    },
    {
      id: "moving-platform-43-2",
      x: 1270,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 4.9
    },
    {
      id: "moving-platform-43-3",
      x: 1800,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 5.6
    },
    {
      id: "moving-platform-43-4",
      x: 2330,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 6.3
    },
    {
      id: "moving-platform-43-5",
      x: 2860,
      y: 418,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 7
    },
    {
      id: "moving-platform-43-6",
      x: 3390,
      y: 250,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 7.7
    },
    {
      id: "moving-platform-43-7",
      x: 3920,
      y: 292,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 8.399999999999999
    },
    {
      id: "moving-platform-43-8",
      x: 4450,
      y: 334,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 9.1
    },
    {
      id: "moving-platform-43-9",
      x: 4980,
      y: 376,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 9.8
    },
    {
      id: "moving-platform-43-10",
      x: 5510,
      y: 418,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 10.5
    },
    {
      id: "moving-platform-43-11",
      x: 6040,
      y: 250,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 11.2
    },
    {
      id: "moving-platform-43-12",
      x: 6570,
      y: 292,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 11.899999999999999
    },
    {
      id: "moving-platform-43-13",
      x: 7100,
      y: 334,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 12.599999999999998
    },
    {
      id: "moving-platform-43-14",
      x: 7630,
      y: 376,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 13.3
    },
    {
      id: "moving-platform-43-15",
      x: 8160,
      y: 418,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.3900000000000001,
      phase: 14
    },
    {
      id: "moving-platform-43-16",
      x: 8690,
      y: 250,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 0.75,
      phase: 14.7
    },
    {
      id: "moving-platform-43-17",
      x: 9220,
      y: 292,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.91,
      phase: 15.399999999999999
    },
    {
      id: "moving-platform-43-18",
      x: 9750,
      y: 334,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 1.07,
      phase: 16.099999999999998
    },
    {
      id: "moving-platform-43-19",
      x: 10280,
      y: 376,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.23,
      phase: 16.8
    },
    {
      id: "moving-platform-43-20",
      x: 10810,
      y: 418,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.3900000000000001,
      phase: 17.5
    },
    {
      id: "moving-platform-43-21",
      x: 11340,
      y: 250,
      widthTiles: 2,
      travelX: 110,
      travelY: 24,
      speed: 0.75,
      phase: 18.2
    },
    {
      id: "moving-platform-43-22",
      x: 11870,
      y: 292,
      widthTiles: 3,
      travelX: 0,
      travelY: 86,
      speed: 0.91,
      phase: 18.9
    },
    {
      id: "moving-platform-43-23",
      x: 12400,
      y: 334,
      widthTiles: 4,
      travelX: 110,
      travelY: 24,
      speed: 1.07,
      phase: 19.599999999999998
    },
    {
      id: "moving-platform-43-24",
      x: 12930,
      y: 376,
      widthTiles: 5,
      travelX: 0,
      travelY: 86,
      speed: 1.23,
      phase: 20.299999999999997
    }
  ],
  hazards: [
    {
      id: "hazard-43-1",
      kind: "crushBlock",
      x: 620,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 42
    },
    {
      id: "hazard-43-2",
      kind: "thorn",
      x: 980,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 43
    },
    {
      id: "hazard-43-3",
      kind: "thorn",
      x: 1340,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 44
    },
    {
      id: "hazard-43-4",
      kind: "spark",
      x: 1700,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 45
    },
    {
      id: "hazard-43-5",
      kind: "thorn",
      x: 2060,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 46
    },
    {
      id: "hazard-43-6",
      kind: "crushBlock",
      x: 2420,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 47
    },
    {
      id: "hazard-43-7",
      kind: "spark",
      x: 2780,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 48
    },
    {
      id: "hazard-43-8",
      kind: "thorn",
      x: 3140,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 49
    },
    {
      id: "hazard-43-9",
      kind: "thorn",
      x: 3500,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 50
    },
    {
      id: "hazard-43-10",
      kind: "spark",
      x: 3860,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 51
    },
    {
      id: "hazard-43-11",
      kind: "crushBlock",
      x: 4220,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 52
    },
    {
      id: "hazard-43-12",
      kind: "thorn",
      x: 4580,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 53
    },
    {
      id: "hazard-43-13",
      kind: "spark",
      x: 4940,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 54
    },
    {
      id: "hazard-43-14",
      kind: "thorn",
      x: 5300,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 55
    },
    {
      id: "hazard-43-15",
      kind: "thorn",
      x: 5660,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 56
    },
    {
      id: "hazard-43-16",
      kind: "crushBlock",
      x: 6020,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 57
    },
    {
      id: "hazard-43-17",
      kind: "thorn",
      x: 6380,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 58
    },
    {
      id: "hazard-43-18",
      kind: "thorn",
      x: 6740,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 59
    },
    {
      id: "hazard-43-19",
      kind: "spark",
      x: 7100,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 60
    },
    {
      id: "hazard-43-20",
      kind: "thorn",
      x: 7460,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 61
    },
    {
      id: "hazard-43-21",
      kind: "crushBlock",
      x: 7820,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 62
    },
    {
      id: "hazard-43-22",
      kind: "spark",
      x: 8180,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 63
    },
    {
      id: "hazard-43-23",
      kind: "thorn",
      x: 8540,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 64
    },
    {
      id: "hazard-43-24",
      kind: "thorn",
      x: 8900,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 65
    },
    {
      id: "hazard-43-25",
      kind: "spark",
      x: 9260,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 66
    },
    {
      id: "hazard-43-26",
      kind: "crushBlock",
      x: 9620,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 67
    },
    {
      id: "hazard-43-27",
      kind: "thorn",
      x: 9980,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 68
    },
    {
      id: "hazard-43-28",
      kind: "spark",
      x: 10340,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 69
    },
    {
      id: "hazard-43-29",
      kind: "thorn",
      x: 10700,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 70
    },
    {
      id: "hazard-43-30",
      kind: "thorn",
      x: 11060,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 71
    },
    {
      id: "hazard-43-31",
      kind: "crushBlock",
      x: 11420,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 72
    },
    {
      id: "hazard-43-32",
      kind: "thorn",
      x: 11780,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 73
    },
    {
      id: "hazard-43-33",
      kind: "thorn",
      x: 12140,
      y: 412,
      width: 30,
      height: 26,
      damage: 1,
      phase: 74
    },
    {
      id: "hazard-43-34",
      kind: "spark",
      x: 12500,
      y: 480,
      width: 64,
      height: 26,
      damage: 1,
      phase: 75
    },
    {
      id: "hazard-43-35",
      kind: "thorn",
      x: 12860,
      y: 446,
      width: 30,
      height: 26,
      damage: 1,
      phase: 76
    },
    {
      id: "hazard-43-36",
      kind: "crushBlock",
      x: 13220,
      y: 412,
      width: 64,
      height: 26,
      damage: 1,
      phase: 77
    },
    {
      id: "hazard-43-37",
      kind: "spark",
      x: 13580,
      y: 480,
      width: 30,
      height: 26,
      damage: 1,
      phase: 78
    },
    {
      id: "hazard-43-38",
      kind: "thorn",
      x: 13940,
      y: 446,
      width: 64,
      height: 26,
      damage: 1,
      phase: 79
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-43-1",
      label: "Lower arbor",
      x: 1774,
      y: 448
    },
    {
      id: "checkpoint-43-2",
      label: "Upper arbor",
      x: 3055,
      y: 448
    }
  ],
  springs: [
    {
      id: "spring-43-1",
      x: 640,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-43-2",
      x: 1410,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-43-3",
      x: 2180,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-43-4",
      x: 2950,
      y: 384,
      power: 1.1
    },
    {
      id: "spring-43-5",
      x: 3720,
      y: 416,
      power: 1.28
    },
    {
      id: "spring-43-6",
      x: 4490,
      y: 384,
      power: 1.46
    },
    {
      id: "spring-43-7",
      x: 5260,
      y: 416,
      power: 1.1
    },
    {
      id: "spring-43-8",
      x: 6030,
      y: 384,
      power: 1.28
    },
    {
      id: "spring-43-9",
      x: 6800,
      y: 416,
      power: 1.46
    },
    {
      id: "spring-43-10",
      x: 7570,
      y: 384,
      power: 1.1
    }
  ],
  windZones: [
    {
      id: "wind-43-1",
      x: 820,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-43-2",
      x: 1780,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-43-3",
      x: 2740,
      y: 240,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-43-4",
      x: 3700,
      y: 120,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-43-5",
      x: 4660,
      y: 180,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-43-6",
      x: 5620,
      y: 240,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    },
    {
      id: "wind-43-7",
      x: 6580,
      y: 120,
      width: 160,
      height: 150,
      forceX: 2.1,
      forceY: -7.5
    },
    {
      id: "wind-43-8",
      x: 7540,
      y: 180,
      width: 160,
      height: 150,
      forceX: -1.4,
      forceY: -7.5
    }
  ],
  decorations: [
    {
      id: "decor-43-1",
      layer: "near",
      motif: "gear",
      x: 966,
      y: 148,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-2",
      layer: "far",
      motif: "vine",
      x: 1063,
      y: 189,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-3",
      layer: "mid",
      motif: "glassBerry",
      x: 1160,
      y: 230,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-4",
      layer: "far",
      motif: "cloud",
      x: 1257,
      y: 271,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-5",
      layer: "mid",
      motif: "windmill",
      x: 1354,
      y: 312,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-6",
      layer: "near",
      motif: "grass",
      x: 1451,
      y: 353,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-7",
      layer: "mid",
      motif: "gear",
      x: 1548,
      y: 394,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-8",
      layer: "far",
      motif: "vine",
      x: 1645,
      y: 435,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-9",
      layer: "mid",
      motif: "glassBerry",
      x: 1742,
      y: 46,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-10",
      layer: "far",
      motif: "cloud",
      x: 1839,
      y: 87,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-11",
      layer: "near",
      motif: "windmill",
      x: 1936,
      y: 128,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-12",
      layer: "far",
      motif: "grass",
      x: 2033,
      y: 169,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-13",
      layer: "mid",
      motif: "gear",
      x: 2130,
      y: 210,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-14",
      layer: "far",
      motif: "vine",
      x: 2227,
      y: 251,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-15",
      layer: "mid",
      motif: "glassBerry",
      x: 2324,
      y: 292,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-16",
      layer: "near",
      motif: "cloud",
      x: 2421,
      y: 333,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-17",
      layer: "mid",
      motif: "windmill",
      x: 2518,
      y: 374,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-18",
      layer: "far",
      motif: "grass",
      x: 2615,
      y: 415,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-19",
      layer: "mid",
      motif: "gear",
      x: 2712,
      y: 456,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-20",
      layer: "far",
      motif: "vine",
      x: 2809,
      y: 67,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-21",
      layer: "near",
      motif: "glassBerry",
      x: 2906,
      y: 108,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-22",
      layer: "far",
      motif: "cloud",
      x: 3003,
      y: 149,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-23",
      layer: "mid",
      motif: "windmill",
      x: 3100,
      y: 190,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-24",
      layer: "far",
      motif: "grass",
      x: 3197,
      y: 231,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-25",
      layer: "mid",
      motif: "gear",
      x: 3294,
      y: 272,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-26",
      layer: "near",
      motif: "vine",
      x: 3391,
      y: 313,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-27",
      layer: "mid",
      motif: "glassBerry",
      x: 3488,
      y: 354,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-28",
      layer: "far",
      motif: "cloud",
      x: 3585,
      y: 395,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-29",
      layer: "mid",
      motif: "windmill",
      x: 3682,
      y: 436,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-30",
      layer: "far",
      motif: "grass",
      x: 3779,
      y: 47,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-31",
      layer: "near",
      motif: "gear",
      x: 3876,
      y: 88,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-32",
      layer: "far",
      motif: "vine",
      x: 3973,
      y: 129,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-33",
      layer: "mid",
      motif: "glassBerry",
      x: 4070,
      y: 170,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-34",
      layer: "far",
      motif: "cloud",
      x: 4167,
      y: 211,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-35",
      layer: "mid",
      motif: "windmill",
      x: 4264,
      y: 252,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-36",
      layer: "near",
      motif: "grass",
      x: 4361,
      y: 293,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-37",
      layer: "mid",
      motif: "gear",
      x: 4458,
      y: 334,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-38",
      layer: "far",
      motif: "vine",
      x: 4555,
      y: 375,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-39",
      layer: "mid",
      motif: "glassBerry",
      x: 4652,
      y: 416,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-40",
      layer: "far",
      motif: "cloud",
      x: 4749,
      y: 457,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-41",
      layer: "near",
      motif: "windmill",
      x: 4846,
      y: 68,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-42",
      layer: "far",
      motif: "grass",
      x: 15,
      y: 109,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-43",
      layer: "mid",
      motif: "gear",
      x: 112,
      y: 150,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-44",
      layer: "far",
      motif: "vine",
      x: 209,
      y: 191,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-45",
      layer: "mid",
      motif: "glassBerry",
      x: 306,
      y: 232,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-46",
      layer: "near",
      motif: "cloud",
      x: 403,
      y: 273,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-47",
      layer: "mid",
      motif: "windmill",
      x: 500,
      y: 314,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-48",
      layer: "far",
      motif: "grass",
      x: 597,
      y: 355,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-49",
      layer: "mid",
      motif: "gear",
      x: 694,
      y: 396,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-50",
      layer: "far",
      motif: "vine",
      x: 791,
      y: 437,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-51",
      layer: "near",
      motif: "glassBerry",
      x: 888,
      y: 48,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-52",
      layer: "far",
      motif: "cloud",
      x: 985,
      y: 89,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-53",
      layer: "mid",
      motif: "windmill",
      x: 1082,
      y: 130,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-54",
      layer: "far",
      motif: "grass",
      x: 1179,
      y: 171,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-55",
      layer: "mid",
      motif: "gear",
      x: 1276,
      y: 212,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-56",
      layer: "near",
      motif: "vine",
      x: 1373,
      y: 253,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-57",
      layer: "mid",
      motif: "glassBerry",
      x: 1470,
      y: 294,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-58",
      layer: "far",
      motif: "cloud",
      x: 1567,
      y: 335,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-59",
      layer: "mid",
      motif: "windmill",
      x: 1664,
      y: 376,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-60",
      layer: "far",
      motif: "grass",
      x: 1761,
      y: 417,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-61",
      layer: "near",
      motif: "gear",
      x: 1858,
      y: 458,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-62",
      layer: "far",
      motif: "vine",
      x: 1955,
      y: 69,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-63",
      layer: "mid",
      motif: "glassBerry",
      x: 2052,
      y: 110,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-64",
      layer: "far",
      motif: "cloud",
      x: 2149,
      y: 151,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-65",
      layer: "mid",
      motif: "windmill",
      x: 2246,
      y: 192,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-66",
      layer: "near",
      motif: "grass",
      x: 2343,
      y: 233,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-67",
      layer: "mid",
      motif: "gear",
      x: 2440,
      y: 274,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-68",
      layer: "far",
      motif: "vine",
      x: 2537,
      y: 315,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-69",
      layer: "mid",
      motif: "glassBerry",
      x: 2634,
      y: 356,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-70",
      layer: "far",
      motif: "cloud",
      x: 2731,
      y: 397,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-71",
      layer: "near",
      motif: "windmill",
      x: 2828,
      y: 438,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-72",
      layer: "far",
      motif: "grass",
      x: 2925,
      y: 49,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-73",
      layer: "mid",
      motif: "gear",
      x: 3022,
      y: 90,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-74",
      layer: "far",
      motif: "vine",
      x: 3119,
      y: 131,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-75",
      layer: "mid",
      motif: "glassBerry",
      x: 3216,
      y: 172,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-76",
      layer: "near",
      motif: "cloud",
      x: 3313,
      y: 213,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-77",
      layer: "mid",
      motif: "windmill",
      x: 3410,
      y: 254,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-78",
      layer: "far",
      motif: "grass",
      x: 3507,
      y: 295,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-79",
      layer: "mid",
      motif: "gear",
      x: 3604,
      y: 336,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-80",
      layer: "far",
      motif: "vine",
      x: 3701,
      y: 377,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-81",
      layer: "near",
      motif: "glassBerry",
      x: 3798,
      y: 418,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-82",
      layer: "far",
      motif: "cloud",
      x: 3895,
      y: 459,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-83",
      layer: "mid",
      motif: "windmill",
      x: 3992,
      y: 70,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-84",
      layer: "far",
      motif: "grass",
      x: 4089,
      y: 111,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-85",
      layer: "mid",
      motif: "gear",
      x: 4186,
      y: 152,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-86",
      layer: "near",
      motif: "vine",
      x: 4283,
      y: 193,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-87",
      layer: "mid",
      motif: "glassBerry",
      x: 4380,
      y: 234,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-88",
      layer: "far",
      motif: "cloud",
      x: 4477,
      y: 275,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-89",
      layer: "mid",
      motif: "windmill",
      x: 4574,
      y: 316,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-90",
      layer: "far",
      motif: "grass",
      x: 4671,
      y: 357,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-91",
      layer: "near",
      motif: "gear",
      x: 4768,
      y: 398,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-92",
      layer: "far",
      motif: "vine",
      x: 4865,
      y: 439,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-93",
      layer: "mid",
      motif: "glassBerry",
      x: 34,
      y: 50,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-94",
      layer: "far",
      motif: "cloud",
      x: 131,
      y: 91,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-95",
      layer: "mid",
      motif: "windmill",
      x: 228,
      y: 132,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-96",
      layer: "near",
      motif: "grass",
      x: 325,
      y: 173,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-97",
      layer: "mid",
      motif: "gear",
      x: 422,
      y: 214,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-98",
      layer: "far",
      motif: "vine",
      x: 519,
      y: 255,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-99",
      layer: "mid",
      motif: "glassBerry",
      x: 616,
      y: 296,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-100",
      layer: "far",
      motif: "cloud",
      x: 713,
      y: 337,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-101",
      layer: "near",
      motif: "windmill",
      x: 810,
      y: 378,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-102",
      layer: "far",
      motif: "grass",
      x: 907,
      y: 419,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-103",
      layer: "mid",
      motif: "gear",
      x: 1004,
      y: 460,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-104",
      layer: "far",
      motif: "vine",
      x: 1101,
      y: 71,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-105",
      layer: "mid",
      motif: "glassBerry",
      x: 1198,
      y: 112,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-106",
      layer: "near",
      motif: "cloud",
      x: 1295,
      y: 153,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-107",
      layer: "mid",
      motif: "windmill",
      x: 1392,
      y: 194,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-108",
      layer: "far",
      motif: "grass",
      x: 1489,
      y: 235,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-109",
      layer: "mid",
      motif: "gear",
      x: 1586,
      y: 276,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-110",
      layer: "far",
      motif: "vine",
      x: 1683,
      y: 317,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-111",
      layer: "near",
      motif: "glassBerry",
      x: 1780,
      y: 358,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-112",
      layer: "far",
      motif: "cloud",
      x: 1877,
      y: 399,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-113",
      layer: "mid",
      motif: "windmill",
      x: 1974,
      y: 440,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-114",
      layer: "far",
      motif: "grass",
      x: 2071,
      y: 51,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-115",
      layer: "mid",
      motif: "gear",
      x: 2168,
      y: 92,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-116",
      layer: "near",
      motif: "vine",
      x: 2265,
      y: 133,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-117",
      layer: "mid",
      motif: "glassBerry",
      x: 2362,
      y: 174,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-118",
      layer: "far",
      motif: "cloud",
      x: 2459,
      y: 215,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-119",
      layer: "mid",
      motif: "windmill",
      x: 2556,
      y: 256,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-120",
      layer: "far",
      motif: "grass",
      x: 2653,
      y: 297,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-121",
      layer: "near",
      motif: "gear",
      x: 2750,
      y: 338,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-122",
      layer: "far",
      motif: "vine",
      x: 2847,
      y: 379,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-123",
      layer: "mid",
      motif: "glassBerry",
      x: 2944,
      y: 420,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-124",
      layer: "far",
      motif: "cloud",
      x: 3041,
      y: 461,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-125",
      layer: "mid",
      motif: "windmill",
      x: 3138,
      y: 72,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-126",
      layer: "near",
      motif: "grass",
      x: 3235,
      y: 113,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-127",
      layer: "mid",
      motif: "gear",
      x: 3332,
      y: 154,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-128",
      layer: "far",
      motif: "vine",
      x: 3429,
      y: 195,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-129",
      layer: "mid",
      motif: "glassBerry",
      x: 3526,
      y: 236,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-130",
      layer: "far",
      motif: "cloud",
      x: 3623,
      y: 277,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-131",
      layer: "near",
      motif: "windmill",
      x: 3720,
      y: 318,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-132",
      layer: "far",
      motif: "grass",
      x: 3817,
      y: 359,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-133",
      layer: "mid",
      motif: "gear",
      x: 3914,
      y: 400,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-134",
      layer: "far",
      motif: "vine",
      x: 4011,
      y: 441,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-135",
      layer: "mid",
      motif: "glassBerry",
      x: 4108,
      y: 52,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-136",
      layer: "near",
      motif: "cloud",
      x: 4205,
      y: 93,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-137",
      layer: "mid",
      motif: "windmill",
      x: 4302,
      y: 134,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-138",
      layer: "far",
      motif: "grass",
      x: 4399,
      y: 175,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-139",
      layer: "mid",
      motif: "gear",
      x: 4496,
      y: 216,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-140",
      layer: "far",
      motif: "vine",
      x: 4593,
      y: 257,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-141",
      layer: "near",
      motif: "glassBerry",
      x: 4690,
      y: 298,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-142",
      layer: "far",
      motif: "cloud",
      x: 4787,
      y: 339,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-143",
      layer: "mid",
      motif: "windmill",
      x: 4884,
      y: 380,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-144",
      layer: "far",
      motif: "grass",
      x: 53,
      y: 421,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-145",
      layer: "mid",
      motif: "gear",
      x: 150,
      y: 32,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-146",
      layer: "near",
      motif: "vine",
      x: 247,
      y: 73,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-147",
      layer: "mid",
      motif: "glassBerry",
      x: 344,
      y: 114,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-148",
      layer: "far",
      motif: "cloud",
      x: 441,
      y: 155,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-149",
      layer: "mid",
      motif: "windmill",
      x: 538,
      y: 196,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-150",
      layer: "far",
      motif: "grass",
      x: 635,
      y: 237,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-151",
      layer: "near",
      motif: "gear",
      x: 732,
      y: 278,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-152",
      layer: "far",
      motif: "vine",
      x: 829,
      y: 319,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-153",
      layer: "mid",
      motif: "glassBerry",
      x: 926,
      y: 360,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-154",
      layer: "far",
      motif: "cloud",
      x: 1023,
      y: 401,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-155",
      layer: "mid",
      motif: "windmill",
      x: 1120,
      y: 442,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-156",
      layer: "near",
      motif: "grass",
      x: 1217,
      y: 53,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-157",
      layer: "mid",
      motif: "gear",
      x: 1314,
      y: 94,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-158",
      layer: "far",
      motif: "vine",
      x: 1411,
      y: 135,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-159",
      layer: "mid",
      motif: "glassBerry",
      x: 1508,
      y: 176,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-160",
      layer: "far",
      motif: "cloud",
      x: 1605,
      y: 217,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-161",
      layer: "near",
      motif: "windmill",
      x: 1702,
      y: 258,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-162",
      layer: "far",
      motif: "grass",
      x: 1799,
      y: 299,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-163",
      layer: "mid",
      motif: "gear",
      x: 1896,
      y: 340,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-164",
      layer: "far",
      motif: "vine",
      x: 1993,
      y: 381,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-165",
      layer: "mid",
      motif: "glassBerry",
      x: 2090,
      y: 422,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-166",
      layer: "near",
      motif: "cloud",
      x: 2187,
      y: 33,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-167",
      layer: "mid",
      motif: "windmill",
      x: 2284,
      y: 74,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-168",
      layer: "far",
      motif: "grass",
      x: 2381,
      y: 115,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-169",
      layer: "mid",
      motif: "gear",
      x: 2478,
      y: 156,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-170",
      layer: "far",
      motif: "vine",
      x: 2575,
      y: 197,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-171",
      layer: "near",
      motif: "glassBerry",
      x: 2672,
      y: 238,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-172",
      layer: "far",
      motif: "cloud",
      x: 2769,
      y: 279,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-173",
      layer: "mid",
      motif: "windmill",
      x: 2866,
      y: 320,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-174",
      layer: "far",
      motif: "grass",
      x: 2963,
      y: 361,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-175",
      layer: "mid",
      motif: "gear",
      x: 3060,
      y: 402,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-176",
      layer: "near",
      motif: "vine",
      x: 3157,
      y: 443,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-177",
      layer: "mid",
      motif: "glassBerry",
      x: 3254,
      y: 54,
      scale: 1,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-178",
      layer: "far",
      motif: "cloud",
      x: 3351,
      y: 95,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-179",
      layer: "mid",
      motif: "windmill",
      x: 3448,
      y: 136,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-180",
      layer: "far",
      motif: "grass",
      x: 3545,
      y: 177,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-181",
      layer: "near",
      motif: "gear",
      x: 3642,
      y: 218,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-182",
      layer: "far",
      motif: "vine",
      x: 3739,
      y: 259,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-183",
      layer: "mid",
      motif: "glassBerry",
      x: 3836,
      y: 300,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-184",
      layer: "far",
      motif: "cloud",
      x: 3933,
      y: 341,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-185",
      layer: "mid",
      motif: "windmill",
      x: 4030,
      y: 382,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-186",
      layer: "near",
      motif: "grass",
      x: 4127,
      y: 423,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-187",
      layer: "mid",
      motif: "gear",
      x: 4224,
      y: 34,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-188",
      layer: "far",
      motif: "vine",
      x: 4321,
      y: 75,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-189",
      layer: "mid",
      motif: "glassBerry",
      x: 4418,
      y: 116,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-190",
      layer: "far",
      motif: "cloud",
      x: 4515,
      y: 157,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-191",
      layer: "near",
      motif: "windmill",
      x: 4612,
      y: 198,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-192",
      layer: "far",
      motif: "grass",
      x: 4709,
      y: 239,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-193",
      layer: "mid",
      motif: "gear",
      x: 4806,
      y: 280,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-194",
      layer: "far",
      motif: "vine",
      x: 4903,
      y: 321,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-195",
      layer: "mid",
      motif: "glassBerry",
      x: 72,
      y: 362,
      scale: 1,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-196",
      layer: "near",
      motif: "cloud",
      x: 169,
      y: 403,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-197",
      layer: "mid",
      motif: "windmill",
      x: 266,
      y: 444,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-198",
      layer: "far",
      motif: "grass",
      x: 363,
      y: 55,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-199",
      layer: "mid",
      motif: "gear",
      x: 460,
      y: 96,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-200",
      layer: "far",
      motif: "vine",
      x: 557,
      y: 137,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-201",
      layer: "near",
      motif: "glassBerry",
      x: 654,
      y: 178,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-202",
      layer: "far",
      motif: "cloud",
      x: 751,
      y: 219,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-203",
      layer: "mid",
      motif: "windmill",
      x: 848,
      y: 260,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-204",
      layer: "far",
      motif: "grass",
      x: 945,
      y: 301,
      scale: 1,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-205",
      layer: "mid",
      motif: "gear",
      x: 1042,
      y: 342,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-206",
      layer: "near",
      motif: "vine",
      x: 1139,
      y: 383,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-207",
      layer: "mid",
      motif: "glassBerry",
      x: 1236,
      y: 424,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-208",
      layer: "far",
      motif: "cloud",
      x: 1333,
      y: 35,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-209",
      layer: "mid",
      motif: "windmill",
      x: 1430,
      y: 76,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-210",
      layer: "far",
      motif: "grass",
      x: 1527,
      y: 117,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-211",
      layer: "near",
      motif: "gear",
      x: 1624,
      y: 158,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-212",
      layer: "far",
      motif: "vine",
      x: 1721,
      y: 199,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-213",
      layer: "mid",
      motif: "glassBerry",
      x: 1818,
      y: 240,
      scale: 1,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-214",
      layer: "far",
      motif: "cloud",
      x: 1915,
      y: 281,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-215",
      layer: "mid",
      motif: "windmill",
      x: 2012,
      y: 322,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-216",
      layer: "near",
      motif: "grass",
      x: 2109,
      y: 363,
      scale: 1.33,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-217",
      layer: "mid",
      motif: "gear",
      x: 2206,
      y: 404,
      scale: 0.45,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-218",
      layer: "far",
      motif: "vine",
      x: 2303,
      y: 445,
      scale: 0.56,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-219",
      layer: "mid",
      motif: "glassBerry",
      x: 2400,
      y: 56,
      scale: 0.67,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-220",
      layer: "far",
      motif: "cloud",
      x: 2497,
      y: 97,
      scale: 0.78,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-221",
      layer: "near",
      motif: "windmill",
      x: 2594,
      y: 138,
      scale: 0.89,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-222",
      layer: "far",
      motif: "grass",
      x: 2691,
      y: 179,
      scale: 1,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-223",
      layer: "mid",
      motif: "gear",
      x: 2788,
      y: 220,
      scale: 1.11,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-224",
      layer: "far",
      motif: "vine",
      x: 2885,
      y: 261,
      scale: 1.22,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-225",
      layer: "mid",
      motif: "glassBerry",
      x: 2982,
      y: 302,
      scale: 1.33,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-226",
      layer: "near",
      motif: "cloud",
      x: 3079,
      y: 343,
      scale: 0.45,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-227",
      layer: "mid",
      motif: "windmill",
      x: 3176,
      y: 384,
      scale: 0.56,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-228",
      layer: "far",
      motif: "grass",
      x: 3273,
      y: 425,
      scale: 0.67,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-229",
      layer: "mid",
      motif: "gear",
      x: 3370,
      y: 36,
      scale: 0.78,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-230",
      layer: "far",
      motif: "vine",
      x: 3467,
      y: 77,
      scale: 0.89,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-231",
      layer: "near",
      motif: "glassBerry",
      x: 3564,
      y: 118,
      scale: 1,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-232",
      layer: "far",
      motif: "cloud",
      x: 3661,
      y: 159,
      scale: 1.11,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-233",
      layer: "mid",
      motif: "windmill",
      x: 3758,
      y: 200,
      scale: 1.22,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-234",
      layer: "far",
      motif: "grass",
      x: 3855,
      y: 241,
      scale: 1.33,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-235",
      layer: "mid",
      motif: "gear",
      x: 3952,
      y: 282,
      scale: 0.45,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-236",
      layer: "near",
      motif: "vine",
      x: 4049,
      y: 323,
      scale: 0.56,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-237",
      layer: "mid",
      motif: "glassBerry",
      x: 4146,
      y: 364,
      scale: 0.67,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-238",
      layer: "far",
      motif: "cloud",
      x: 4243,
      y: 405,
      scale: 0.78,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-239",
      layer: "mid",
      motif: "windmill",
      x: 4340,
      y: 446,
      scale: 0.89,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-240",
      layer: "far",
      motif: "grass",
      x: 4437,
      y: 57,
      scale: 1,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-241",
      layer: "near",
      motif: "gear",
      x: 4534,
      y: 98,
      scale: 1.11,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-242",
      layer: "far",
      motif: "vine",
      x: 4631,
      y: 139,
      scale: 1.22,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-243",
      layer: "mid",
      motif: "glassBerry",
      x: 4728,
      y: 180,
      scale: 1.33,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-244",
      layer: "far",
      motif: "cloud",
      x: 4825,
      y: 221,
      scale: 0.45,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-245",
      layer: "mid",
      motif: "windmill",
      x: 4922,
      y: 262,
      scale: 0.56,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-246",
      layer: "near",
      motif: "grass",
      x: 91,
      y: 303,
      scale: 0.67,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-247",
      layer: "mid",
      motif: "gear",
      x: 188,
      y: 344,
      scale: 0.78,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-248",
      layer: "far",
      motif: "vine",
      x: 285,
      y: 385,
      scale: 0.89,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-249",
      layer: "mid",
      motif: "glassBerry",
      x: 382,
      y: 426,
      scale: 1,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-250",
      layer: "far",
      motif: "cloud",
      x: 479,
      y: 37,
      scale: 1.11,
      tint: 16096779,
      parallax: 0.18
    },
    {
      id: "decor-43-251",
      layer: "near",
      motif: "windmill",
      x: 576,
      y: 78,
      scale: 1.22,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-252",
      layer: "far",
      motif: "grass",
      x: 673,
      y: 119,
      scale: 1.33,
      tint: 16478597,
      parallax: 0.18
    },
    {
      id: "decor-43-253",
      layer: "mid",
      motif: "gear",
      x: 770,
      y: 160,
      scale: 0.45,
      tint: 10980346,
      parallax: 0.42
    },
    {
      id: "decor-43-254",
      layer: "far",
      motif: "vine",
      x: 867,
      y: 201,
      scale: 0.56,
      tint: 2278750,
      parallax: 0.18
    },
    {
      id: "decor-43-255",
      layer: "mid",
      motif: "glassBerry",
      x: 964,
      y: 242,
      scale: 0.67,
      tint: 16096779,
      parallax: 0.42
    },
    {
      id: "decor-43-256",
      layer: "near",
      motif: "cloud",
      x: 1061,
      y: 283,
      scale: 0.78,
      tint: 3718648,
      parallax: 0.82
    },
    {
      id: "decor-43-257",
      layer: "mid",
      motif: "windmill",
      x: 1158,
      y: 324,
      scale: 0.89,
      tint: 16478597,
      parallax: 0.42
    },
    {
      id: "decor-43-258",
      layer: "far",
      motif: "grass",
      x: 1255,
      y: 365,
      scale: 1,
      tint: 10980346,
      parallax: 0.18
    },
    {
      id: "decor-43-259",
      layer: "mid",
      motif: "gear",
      x: 1352,
      y: 406,
      scale: 1.11,
      tint: 2278750,
      parallax: 0.42
    },
    {
      id: "decor-43-260",
      layer: "far",
      motif: "vine",
      x: 1449,
      y: 447,
      scale: 1.22,
      tint: 16096779,
      parallax: 0.18
    }
  ],
  goal: {
    id: "goal-43",
    x: 4736,
    y: 448
  },
  boss: {
    id: "warden-of-turning-leaves",
    x: 4160,
    y: 448,
    health: 7,
    arenaLeft: 3584,
    arenaRight: 4640
  }
};
