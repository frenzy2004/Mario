import { WORLD_CONFIG } from "../config/world";
import type { CollectibleKind } from "../levels/schema";

export interface ScoreState {
  score: number;
  glimmers: number;
  hiddenSeeds: number;
  enemiesDefeated: number;
  deaths: number;
  cogs: number;
  relics: string[];
  lives: number;
  health: number;
  combo: number;
  multiplier: number;
  elapsedMs: number;
  levelId: string;
  parTimeMs: number;
  checkpoints: string[];
  finished: boolean;
}

export type ScoreReason =
  | "collectible"
  | "large-cog"
  | "hidden-seed"
  | "relic"
  | "enemy"
  | "boss"
  | "spring"
  | "checkpoint"
  | "time-bonus"
  | "damage"
  | "death"
  | "manual";

export interface ScoringRules {
  glimmer: number;
  largeCog: number;
  hiddenSeed: number;
  relic: number;
  enemy: number;
  boss: number;
  spring: number;
  checkpoint: number;
  damagePenalty: number;
  deathPenalty: number;
  comboWindowMs: number;
  maxMultiplier: number;
  timeBonusMultiplier: number;
}

export interface ScoreEvent {
  reason: ScoreReason;
  delta: number;
  state: ScoreState;
}

export interface LevelSummary {
  levelId: string;
  score: number;
  glimmers: number;
  hiddenSeeds: number;
  relics: string[];
  elapsedMs: number;
  timeBonus: number;
  livesRemaining: number;
}

export const DEFAULT_SCORING_RULES: ScoringRules = {
  glimmer: WORLD_CONFIG.gemScore,
  largeCog: WORLD_CONFIG.hiddenCogScore,
  hiddenSeed: WORLD_CONFIG.hiddenCogScore * 2,
  relic: 500,
  enemy: WORLD_CONFIG.enemyScore,
  boss: WORLD_CONFIG.bossScore,
  spring: 15,
  checkpoint: WORLD_CONFIG.checkpointScore,
  damagePenalty: 75,
  deathPenalty: 300,
  comboWindowMs: 2400,
  maxMultiplier: 5,
  timeBonusMultiplier: WORLD_CONFIG.timeBonusMultiplier,
};

export function createScoreState(levelId = "level-01"): ScoreState {
  return {
    score: 0,
    glimmers: 0,
    hiddenSeeds: 0,
    enemiesDefeated: 0,
    deaths: 0,
    cogs: 0,
    relics: [],
    lives: 3,
    health: 3,
    combo: 0,
    multiplier: 1,
    elapsedMs: 0,
    levelId,
    parTimeMs: 120000,
    checkpoints: [],
    finished: false,
  };
}

export function collectibleScore(kind: CollectibleKind): number {
  switch (kind) {
    case "largeCog":
      return WORLD_CONFIG.hiddenCogScore;
    case "hiddenSeed":
      return WORLD_CONFIG.hiddenCogScore * 2;
    case "glimmer":
    default:
      return WORLD_CONFIG.gemScore;
  }
}

export function addCollectibleScore(state: ScoreState, kind: CollectibleKind): ScoreState {
  return {
    ...state,
    score: state.score + collectibleScore(kind),
    glimmers: state.glimmers + (kind === "glimmer" ? 1 : 0),
    hiddenSeeds: state.hiddenSeeds + (kind === "hiddenSeed" ? 1 : 0),
    cogs: state.cogs + (kind === "largeCog" ? 1 : 0),
  };
}

export function addEnemyScore(state: ScoreState, boss = false): ScoreState {
  return {
    ...state,
    score: state.score + (boss ? WORLD_CONFIG.bossScore : WORLD_CONFIG.enemyScore),
    enemiesDefeated: state.enemiesDefeated + 1,
  };
}

export function addCompletionBonus(state: ScoreState, secondsRemaining: number): ScoreState {
  return {
    ...state,
    score: state.score + Math.max(0, Math.floor(secondsRemaining * WORLD_CONFIG.timeBonusMultiplier)),
    finished: true,
  };
}

export class ScoringSystem {
  private readonly rules: ScoringRules;
  private readonly listeners = new Set<(event: ScoreEvent) => void>();
  private comboTimerMs = 0;
  private state: ScoreState;

  constructor(rules: Partial<ScoringRules> = {}) {
    this.rules = { ...DEFAULT_SCORING_RULES, ...rules };
    this.state = createScoreState();
  }

  onChange(listener: (event: ScoreEvent) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  startLevel(levelId: string, lives = 3, health = 3, parTimeMs = 120000): ScoreState {
    this.comboTimerMs = 0;
    this.state = { ...createScoreState(levelId), lives, health, parTimeMs };
    this.emit("manual", 0);
    return this.getState();
  }

  getState(): ScoreState {
    return cloneState(this.state);
  }

  update(deltaMs: number): ScoreState {
    if (this.state.finished) {
      return this.getState();
    }
    const delta = Math.max(0, deltaMs);
    this.state.elapsedMs += delta;
    if (this.comboTimerMs > 0) {
      this.comboTimerMs = Math.max(0, this.comboTimerMs - delta);
      if (this.comboTimerMs === 0) {
        this.state.combo = 0;
        this.state.multiplier = 1;
        this.emit("manual", 0);
      }
    }
    return this.getState();
  }

  collect(kind: CollectibleKind): ScoreState {
    const before = this.state.score;
    this.state = addCollectibleScore(this.state, kind);
    this.bumpCombo();
    this.state.score += (this.state.multiplier - 1) * collectibleScore(kind);
    this.emit(kind === "hiddenSeed" ? "hidden-seed" : kind === "largeCog" ? "large-cog" : "collectible", this.state.score - before);
    return this.getState();
  }

  collectRelic(relicId: string): ScoreState {
    if (!this.state.relics.includes(relicId)) {
      this.state.relics.push(relicId);
      this.addScore("relic", this.rules.relic, true);
    }
    return this.getState();
  }

  defeatEnemy(boss = false): ScoreState {
    const before = this.state.score;
    this.state = addEnemyScore(this.state, boss);
    this.bumpCombo();
    this.state.score += (this.state.multiplier - 1) * (boss ? this.rules.boss : this.rules.enemy);
    this.emit(boss ? "boss" : "enemy", this.state.score - before);
    return this.getState();
  }

  triggerSpring(): ScoreState {
    return this.addScore("spring", this.rules.spring, true);
  }

  reachCheckpoint(checkpointId: string): ScoreState {
    if (!this.state.checkpoints.includes(checkpointId)) {
      this.state.checkpoints.push(checkpointId);
      this.addScore("checkpoint", this.rules.checkpoint, false);
    }
    return this.getState();
  }

  takeDamage(amount = 1): ScoreState {
    const damage = Math.max(1, Math.floor(amount));
    this.state.health = Math.max(0, this.state.health - damage);
    this.state.combo = 0;
    this.state.multiplier = 1;
    this.comboTimerMs = 0;
    const penalty = this.rules.damagePenalty * damage;
    this.state.score = Math.max(0, this.state.score - penalty);
    this.emit("damage", -penalty);
    return this.getState();
  }

  loseLife(): ScoreState {
    this.state.lives = Math.max(0, this.state.lives - 1);
    this.state.deaths += 1;
    this.state.health = 3;
    this.state.combo = 0;
    this.state.multiplier = 1;
    this.comboTimerMs = 0;
    this.state.score = Math.max(0, this.state.score - this.rules.deathPenalty);
    this.emit("death", -this.rules.deathPenalty);
    return this.getState();
  }

  finishLevel(): LevelSummary {
    const secondsRemaining = Math.max(0, Math.floor((this.state.parTimeMs - this.state.elapsedMs) / 1000));
    const timeBonus = Math.max(0, Math.floor(secondsRemaining * this.rules.timeBonusMultiplier));
    if (!this.state.finished) {
      this.state.score += timeBonus;
      this.state.finished = true;
      this.emit("time-bonus", timeBonus);
    }
    return {
      levelId: this.state.levelId,
      score: this.state.score,
      glimmers: this.state.glimmers,
      hiddenSeeds: this.state.hiddenSeeds,
      relics: [...this.state.relics],
      elapsedMs: this.state.elapsedMs,
      timeBonus,
      livesRemaining: this.state.lives,
    };
  }

  writeToRegistry(registry: { set(key: string, value: unknown): void }): void {
    registry.set("score", this.state.score);
    registry.set("glimmers", this.state.glimmers);
    registry.set("hiddenSeeds", this.state.hiddenSeeds);
    registry.set("lives", this.state.lives);
    registry.set("health", this.state.health);
    registry.set("combo", this.state.combo);
    registry.set("multiplier", this.state.multiplier);
    registry.set("elapsedMs", this.state.elapsedMs);
    registry.set("relics", [...this.state.relics]);
  }

  private addScore(reason: ScoreReason, points: number, useCombo: boolean): ScoreState {
    const multiplier = useCombo ? this.bumpCombo() : 1;
    const delta = Math.floor(points * multiplier);
    this.state.score = Math.max(0, this.state.score + delta);
    this.emit(reason, delta);
    return this.getState();
  }

  private bumpCombo(): number {
    this.comboTimerMs = this.rules.comboWindowMs;
    this.state.combo += 1;
    this.state.multiplier = Math.min(this.rules.maxMultiplier, 1 + Math.floor(this.state.combo / 4));
    return this.state.multiplier;
  }

  private emit(reason: ScoreReason, delta: number): void {
    this.listeners.forEach((listener) => listener({ reason, delta, state: this.getState() }));
  }
}

function cloneState(state: ScoreState): ScoreState {
  return {
    ...state,
    relics: [...state.relics],
    checkpoints: [...state.checkpoints],
  };
}
