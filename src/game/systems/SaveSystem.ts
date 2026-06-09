import { GAME_CONFIG } from "../config/gameConfig";

export const SAVE_VERSION = 2;

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export interface CheckpointSave {
  levelId: string;
  checkpointId: string;
  x: number;
  y: number;
  score: number;
  elapsedMs: number;
  savedAt: string;
}

export interface SaveStats {
  sessions: number;
  playTimeSeconds: number;
  deaths: number;
  totalGlimmers: number;
  totalHiddenSeeds: number;
}

export interface SaveData {
  version: number;
  unlockedLevel: number;
  bestTimes: Record<string, number>;
  collectedHiddenSeeds: Record<string, boolean>;
  totalScore: number;
  updatedAt: string;
  checkpoints: Record<string, CheckpointSave>;
  stats: SaveStats;
}

export type InputMode = "auto" | "keyboard" | "gamepad";
export type Difficulty = "story" | "normal" | "expert";

export interface KeyBindings {
  left: string;
  right: string;
  jump: string;
  crouch: string;
  interact: string;
  dash: string;
  pause: string;
}

export interface GameSettings {
  volume: number;
  reduceShake: boolean;
  assistMode: boolean;
  showSoundCues: boolean;
  masterVolume: number;
  musicVolume: number;
  sfxVolume: number;
  muted: boolean;
  fullscreen: boolean;
  reducedMotion: boolean;
  highContrast: boolean;
  screenShake: boolean;
  showTimer: boolean;
  inputMode: InputMode;
  difficulty: Difficulty;
  keyBindings: KeyBindings;
}

export const DEFAULT_KEY_BINDINGS: KeyBindings = {
  left: "ArrowLeft",
  right: "ArrowRight",
  jump: "Space",
  crouch: "ArrowDown",
  interact: "KeyE",
  dash: "ShiftLeft",
  pause: "Escape",
};

export const DEFAULT_SAVE: SaveData = {
  version: SAVE_VERSION,
  unlockedLevel: 0,
  bestTimes: {},
  collectedHiddenSeeds: {},
  totalScore: 0,
  updatedAt: new Date(0).toISOString(),
  checkpoints: {},
  stats: {
    sessions: 0,
    playTimeSeconds: 0,
    deaths: 0,
    totalGlimmers: 0,
    totalHiddenSeeds: 0,
  },
};

export const DEFAULT_SETTINGS: GameSettings = {
  volume: 0.42,
  reduceShake: false,
  assistMode: false,
  showSoundCues: true,
  masterVolume: 0.82,
  musicVolume: 0.5,
  sfxVolume: 0.78,
  muted: false,
  fullscreen: false,
  reducedMotion: false,
  highContrast: false,
  screenShake: true,
  showTimer: true,
  inputMode: "auto",
  difficulty: "normal",
  keyBindings: DEFAULT_KEY_BINDINGS,
};

export interface SaveSystemOptions {
  storage?: StorageLike;
  saveKey?: string;
  settingsKey?: string;
  now?: () => Date;
}

export class MemoryStorage implements StorageLike {
  private readonly values = new Map<string, string>();

  getItem(key: string): string | null {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.values.set(key, value);
  }

  removeItem(key: string): void {
    this.values.delete(key);
  }

  clear(): void {
    this.values.clear();
  }
}

export class SaveSystem {
  private readonly storage: StorageLike;
  private readonly saveKey: string;
  private readonly settingsKey: string;
  private readonly now: () => Date;

  constructor(options: SaveSystemOptions = {}) {
    this.storage = options.storage ?? getStorage();
    this.saveKey = options.saveKey ?? GAME_CONFIG.saveKey;
    this.settingsKey = options.settingsKey ?? GAME_CONFIG.settingsKey;
    this.now = options.now ?? (() => new Date());
  }

  loadSave(): SaveData {
    return sanitizeSave(readJson(this.storage, this.saveKey, DEFAULT_SAVE));
  }

  save(data: SaveData): void {
    writeJson(this.storage, this.saveKey, {
      ...sanitizeSave(data),
      updatedAt: this.now().toISOString(),
    });
  }

  loadSettings(): GameSettings {
    return sanitizeSettings(readJson(this.storage, this.settingsKey, DEFAULT_SETTINGS));
  }

  saveSettings(settings: GameSettings): void {
    writeJson(this.storage, this.settingsKey, sanitizeSettings(settings));
  }

  updateSettings(settings: Partial<GameSettings>): GameSettings {
    const next = sanitizeSettings({ ...this.loadSettings(), ...settings });
    this.saveSettings(next);
    return next;
  }

  resetSettings(): GameSettings {
    this.saveSettings(DEFAULT_SETTINGS);
    return this.loadSettings();
  }

  unlockLevel(index: number): SaveData {
    const save = this.loadSave();
    const nextSave = { ...save, unlockedLevel: Math.max(save.unlockedLevel, nonNegativeInt(index, 0)) };
    this.save(nextSave);
    return this.loadSave();
  }

  recordCompletion(levelId: string, levelIndex: number, elapsedMs: number, score: number): SaveData {
    const save = this.loadSave();
    const currentBest = save.bestTimes[levelId] ?? Number.POSITIVE_INFINITY;
    const nextSave: SaveData = {
      ...save,
      unlockedLevel: Math.max(save.unlockedLevel, nonNegativeInt(levelIndex, 0) + 1),
      totalScore: Math.max(save.totalScore, nonNegativeInt(score, 0)),
      bestTimes: {
        ...save.bestTimes,
        [levelId]: Math.min(currentBest, nonNegativeInt(elapsedMs, 0)),
      },
    };
    this.save(nextSave);
    return this.loadSave();
  }

  recordHiddenSeed(seedId: string): SaveData {
    const save = this.loadSave();
    const nextSave: SaveData = {
      ...save,
      collectedHiddenSeeds: { ...save.collectedHiddenSeeds, [seedId]: true },
      stats: {
        ...save.stats,
        totalHiddenSeeds: save.stats.totalHiddenSeeds + (save.collectedHiddenSeeds[seedId] ? 0 : 1),
      },
    };
    this.save(nextSave);
    return this.loadSave();
  }

  saveCheckpoint(checkpoint: Omit<CheckpointSave, "savedAt">): SaveData {
    const save = this.loadSave();
    const nextCheckpoint: CheckpointSave = {
      ...checkpoint,
      x: nonNegativeInt(checkpoint.x, 0),
      y: nonNegativeInt(checkpoint.y, 0),
      score: nonNegativeInt(checkpoint.score, 0),
      elapsedMs: nonNegativeInt(checkpoint.elapsedMs, 0),
      savedAt: this.now().toISOString(),
    };
    const nextSave: SaveData = {
      ...save,
      checkpoints: {
        ...save.checkpoints,
        [checkpoint.levelId]: nextCheckpoint,
      },
    };
    this.save(nextSave);
    return this.loadSave();
  }

  addSession(): SaveData {
    const save = this.loadSave();
    this.save({ ...save, stats: { ...save.stats, sessions: save.stats.sessions + 1 } });
    return this.loadSave();
  }

  clear(): void {
    this.storage.removeItem(this.saveKey);
    this.storage.removeItem(this.settingsKey);
  }
}

let sharedSaveSystem: SaveSystem | null = null;

export function getSharedSaveSystem(): SaveSystem {
  if (!sharedSaveSystem) {
    sharedSaveSystem = new SaveSystem();
  }
  return sharedSaveSystem;
}

export function sanitizeSave(value: unknown): SaveData {
  const record = isRecord(value) ? value : {};
  return {
    version: SAVE_VERSION,
    unlockedLevel: nonNegativeInt(record.unlockedLevel, DEFAULT_SAVE.unlockedLevel),
    bestTimes: numberRecord(record.bestTimes),
    collectedHiddenSeeds: booleanRecord(record.collectedHiddenSeeds),
    totalScore: nonNegativeInt(record.totalScore, DEFAULT_SAVE.totalScore),
    updatedAt: isDateString(record.updatedAt) ? record.updatedAt : DEFAULT_SAVE.updatedAt,
    checkpoints: checkpointRecord(record.checkpoints),
    stats: sanitizeStats(record.stats),
  };
}

export function sanitizeSettings(value: unknown): GameSettings {
  const record = isRecord(value) ? value : {};
  const legacyVolume = clamp01(record.volume, DEFAULT_SETTINGS.volume);
  const masterVolume = clamp01(record.masterVolume, legacyVolume);
  const reduceShake = bool(record.reduceShake, bool(record.reducedMotion, DEFAULT_SETTINGS.reduceShake));
  const screenShake = bool(record.screenShake, !reduceShake);

  return {
    volume: legacyVolume,
    reduceShake,
    assistMode: bool(record.assistMode, DEFAULT_SETTINGS.assistMode),
    showSoundCues: bool(record.showSoundCues, DEFAULT_SETTINGS.showSoundCues),
    masterVolume,
    musicVolume: clamp01(record.musicVolume, masterVolume),
    sfxVolume: clamp01(record.sfxVolume, masterVolume),
    muted: bool(record.muted, DEFAULT_SETTINGS.muted),
    fullscreen: bool(record.fullscreen, DEFAULT_SETTINGS.fullscreen),
    reducedMotion: bool(record.reducedMotion, reduceShake),
    highContrast: bool(record.highContrast, DEFAULT_SETTINGS.highContrast),
    screenShake,
    showTimer: bool(record.showTimer, DEFAULT_SETTINGS.showTimer),
    inputMode: enumValue(record.inputMode, ["auto", "keyboard", "gamepad"], DEFAULT_SETTINGS.inputMode),
    difficulty: enumValue(record.difficulty, ["story", "normal", "expert"], DEFAULT_SETTINGS.difficulty),
    keyBindings: sanitizeKeyBindings(record.keyBindings),
  };
}

function sanitizeKeyBindings(value: unknown): KeyBindings {
  const record = isRecord(value) ? value : {};
  return {
    left: text(record.left, DEFAULT_KEY_BINDINGS.left),
    right: text(record.right, DEFAULT_KEY_BINDINGS.right),
    jump: text(record.jump, DEFAULT_KEY_BINDINGS.jump),
    crouch: text(record.crouch, DEFAULT_KEY_BINDINGS.crouch),
    interact: text(record.interact, DEFAULT_KEY_BINDINGS.interact),
    dash: text(record.dash, DEFAULT_KEY_BINDINGS.dash),
    pause: text(record.pause, DEFAULT_KEY_BINDINGS.pause),
  };
}

function sanitizeStats(value: unknown): SaveStats {
  const record = isRecord(value) ? value : {};
  return {
    sessions: nonNegativeInt(record.sessions, DEFAULT_SAVE.stats.sessions),
    playTimeSeconds: nonNegativeInt(record.playTimeSeconds, DEFAULT_SAVE.stats.playTimeSeconds),
    deaths: nonNegativeInt(record.deaths, DEFAULT_SAVE.stats.deaths),
    totalGlimmers: nonNegativeInt(record.totalGlimmers, DEFAULT_SAVE.stats.totalGlimmers),
    totalHiddenSeeds: nonNegativeInt(record.totalHiddenSeeds, DEFAULT_SAVE.stats.totalHiddenSeeds),
  };
}

function checkpointRecord(value: unknown): Record<string, CheckpointSave> {
  if (!isRecord(value)) {
    return {};
  }
  return Object.entries(value).reduce<Record<string, CheckpointSave>>((result, [key, raw]) => {
    if (!isRecord(raw)) {
      return result;
    }
    result[key] = {
      levelId: text(raw.levelId, key),
      checkpointId: text(raw.checkpointId, "start"),
      x: nonNegativeInt(raw.x, 0),
      y: nonNegativeInt(raw.y, 0),
      score: nonNegativeInt(raw.score, 0),
      elapsedMs: nonNegativeInt(raw.elapsedMs, 0),
      savedAt: isDateString(raw.savedAt) ? raw.savedAt : DEFAULT_SAVE.updatedAt,
    };
    return result;
  }, {});
}

function readJson<T>(storage: StorageLike, key: string, fallback: T): T {
  try {
    const raw = storage.getItem(key);
    if (!raw) {
      return clone(fallback);
    }
    return { ...clone(fallback), ...JSON.parse(raw) } as T;
  } catch {
    return clone(fallback);
  }
}

function writeJson<T>(storage: StorageLike, key: string, value: T): void {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch {
    // Saving should never prevent play.
  }
}

function getStorage(): StorageLike {
  const candidate = (globalThis as unknown as { localStorage?: StorageLike }).localStorage;
  return candidate ?? new MemoryStorage();
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function numberRecord(value: unknown): Record<string, number> {
  if (!isRecord(value)) {
    return {};
  }
  return Object.fromEntries(Object.entries(value).map(([key, raw]) => [key, nonNegativeInt(raw, 0)]));
}

function booleanRecord(value: unknown): Record<string, boolean> {
  if (!isRecord(value)) {
    return {};
  }
  return Object.fromEntries(Object.entries(value).map(([key, raw]) => [key, Boolean(raw)]));
}

function nonNegativeInt(value: unknown, fallback: number): number {
  const number = typeof value === "number" && Number.isFinite(value) ? value : fallback;
  return Math.max(0, Math.floor(number));
}

function clamp01(value: unknown, fallback: number): number {
  const number = typeof value === "number" && Number.isFinite(value) ? value : fallback;
  return Math.min(1, Math.max(0, number));
}

function bool(value: unknown, fallback: boolean): boolean {
  return typeof value === "boolean" ? value : fallback;
}

function text(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim().length > 0 ? value : fallback;
}

function enumValue<T extends string>(value: unknown, allowed: readonly T[], fallback: T): T {
  return typeof value === "string" && allowed.includes(value as T) ? (value as T) : fallback;
}

function isDateString(value: unknown): value is string {
  return typeof value === "string" && !Number.isNaN(Date.parse(value));
}

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}
