export type CueName =
  | "jump"
  | "land"
  | "collect"
  | "hurt"
  | "dash"
  | "checkpoint"
  | "powerup"
  | "enemy"
  | "enemyTell"
  | "enemyHit"
  | "enemyDefeat"
  | "goal"
  | "boss"
  | "bossTelegraph"
  | "bossHit"
  | "bossPhase"
  | "bossDefeat";

export type SfxKey =
  | CueName
  | "cog"
  | "relic"
  | "spring"
  | "pause"
  | "unpause"
  | "menuMove"
  | "menuSelect"
  | "menuBack"
  | "clockTick"
  | "gearTurn"
  | "levelComplete"
  | "gameOver";

export type MusicKey = "menuTheme" | "canopyTheme" | "pauseLoop";

export interface ToneStep {
  frequency: number;
  endFrequency?: number;
  delay: number;
  duration: number;
  volume: number;
  waveform: OscillatorType;
}

export interface SfxDefinition {
  description: string;
  steps: ToneStep[];
}

export interface MusicPattern {
  intervalMs: number;
  notes: number[];
  bassEvery: number;
}

export const SFX_DEFINITIONS: Record<SfxKey, SfxDefinition> = {
  jump: {
    description: "Layered leaf-spring jump chirp.",
    steps: [
      { frequency: 360, endFrequency: 640, delay: 0, duration: 0.085, volume: 0.22, waveform: "triangle" },
      { frequency: 920, endFrequency: 1240, delay: 0.032, duration: 0.045, volume: 0.11, waveform: "square" },
    ],
  },
  land: {
    description: "Grounded boot thud with a tiny gear tick.",
    steps: [
      { frequency: 176, endFrequency: 92, delay: 0, duration: 0.075, volume: 0.2, waveform: "triangle" },
      { frequency: 620, endFrequency: 420, delay: 0.026, duration: 0.035, volume: 0.08, waveform: "square" },
    ],
  },
  collect: { description: "Three-note collectible sparkle.", steps: sequence([760, 980, 1240], "square", 0.12) },
  hurt: { description: "Falling saw damage tone with a brief glassy bite.", steps: sequence([320, 240, 172], "sawtooth", 0.16) },
  dash: {
    description: "Fast clockwork leaf dash streak.",
    steps: [
      { frequency: 190, endFrequency: 760, delay: 0, duration: 0.045, volume: 0.16, waveform: "sawtooth" },
      { frequency: 520, endFrequency: 1040, delay: 0.018, duration: 0.052, volume: 0.13, waveform: "square" },
      { frequency: 1560, endFrequency: 980, delay: 0.052, duration: 0.038, volume: 0.07, waveform: "triangle" },
    ],
  },
  checkpoint: { description: "Major checkpoint confirmation.", steps: sequence([440, 660, 880], "triangle", 0.14) },
  powerup: { description: "Four-note powerup lift.", steps: sequence([540, 810, 1080, 1440], "square", 0.12) },
  enemy: { description: "Legacy alias for enemy defeat pluck.", steps: sequence([300, 220, 160], "triangle", 0.16) },
  enemyTell: {
    description: "Short enemy warning tick before a readable attack.",
    steps: [
      { frequency: 780, endFrequency: 520, delay: 0, duration: 0.04, volume: 0.08, waveform: "square" },
      { frequency: 980, endFrequency: 720, delay: 0.048, duration: 0.035, volume: 0.06, waveform: "triangle" },
    ],
  },
  enemyHit: {
    description: "Bright enemy flinch chirp.",
    steps: [
      { frequency: 620, endFrequency: 820, delay: 0, duration: 0.042, volume: 0.12, waveform: "triangle" },
      { frequency: 420, endFrequency: 300, delay: 0.026, duration: 0.052, volume: 0.08, waveform: "square" },
    ],
  },
  enemyDefeat: { description: "Descending enemy defeat pluck with leaf tail.", steps: sequence([300, 220, 160], "triangle", 0.16) },
  goal: { description: "Original level finish flourish.", steps: sequence([520, 760, 980, 1320], "square", 0.14) },
  boss: { description: "Legacy alias for low boss cue motif.", steps: sequence([180, 260, 340], "sawtooth", 0.14) },
  bossTelegraph: {
    description: "Low gear warning before a boss attack.",
    steps: [
      { frequency: 155, endFrequency: 210, delay: 0, duration: 0.08, volume: 0.15, waveform: "sawtooth" },
      { frequency: 420, endFrequency: 360, delay: 0.045, duration: 0.055, volume: 0.08, waveform: "square" },
    ],
  },
  bossHit: {
    description: "Heavy boss armor hit with a brass snap.",
    steps: [
      { frequency: 260, endFrequency: 180, delay: 0, duration: 0.07, volume: 0.16, waveform: "triangle" },
      { frequency: 920, endFrequency: 520, delay: 0.018, duration: 0.045, volume: 0.07, waveform: "square" },
    ],
  },
  bossPhase: {
    description: "Boss phase surge with rising machine pressure.",
    steps: [
      { frequency: 130, endFrequency: 260, delay: 0, duration: 0.11, volume: 0.17, waveform: "sawtooth" },
      { frequency: 330, endFrequency: 660, delay: 0.066, duration: 0.09, volume: 0.11, waveform: "triangle" },
      { frequency: 990, endFrequency: 1320, delay: 0.125, duration: 0.05, volume: 0.07, waveform: "square" },
    ],
  },
  bossDefeat: { description: "Boss defeat collapse and victory rise.", steps: sequence([174.61, 130.81, 392, 523.25, 783.99], "triangle", 0.13) },
  cog: { description: "Alias for collectible cog sparkle.", steps: sequence([760, 980, 1240], "square", 0.12) },
  relic: { description: "Warm relic arpeggio.", steps: sequence([523.25, 659.25, 987.77], "triangle", 0.15) },
  spring: { description: "Elastic spring arpeggio.", steps: sequence([392, 523.25, 783.99], "square", 0.14) },
  pause: { description: "Soft descending pause cue.", steps: sequence([659.25, 440], "triangle", 0.1) },
  unpause: { description: "Soft rising resume cue.", steps: sequence([440, 659.25], "triangle", 0.1) },
  menuMove: { description: "Dry clock tick menu move.", steps: [{ frequency: 1200, endFrequency: 780, delay: 0, duration: 0.03, volume: 0.08, waveform: "square" }] },
  menuSelect: { description: "Bright menu select ping.", steps: sequence([784, 1174.66], "triangle", 0.1) },
  menuBack: { description: "Muted menu back blip.", steps: [{ frequency: 230, endFrequency: 175, delay: 0, duration: 0.08, volume: 0.1, waveform: "triangle" }] },
  clockTick: { description: "Tiny metronome tick.", steps: [{ frequency: 1500, endFrequency: 900, delay: 0, duration: 0.025, volume: 0.06, waveform: "square" }] },
  gearTurn: { description: "Stepped gear movement tone.", steps: sequence([146.83, 174.61, 220], "sawtooth", 0.11) },
  levelComplete: { description: "Alias for original goal flourish.", steps: sequence([520, 760, 980, 1320], "square", 0.14) },
  gameOver: { description: "Slow falling game over cue.", steps: sequence([440, 349.23, 261.63], "sine", 0.14) },
};

export const MUSIC_PATTERNS: Record<MusicKey, MusicPattern> = {
  menuTheme: { intervalMs: 230, notes: [220, 277, 330, 440, 330, 277, 247, 196], bassEvery: 4 },
  canopyTheme: { intervalMs: 150, notes: [196, 247, 294, 330, 392, 330, 294, 247, 220, 277, 330, 370, 440, 370, 330, 277], bassEvery: 4 },
  pauseLoop: { intervalMs: 420, notes: [220, 330, 247, 330], bassEvery: 2 },
};

export const AUDIO_PROVENANCE = {
  source: "Runtime WebAudio oscillator synthesis",
  license: "Original project content",
  notes: "No external samples, copyrighted melodies, or third-party sound files are used.",
} as const;

function sequence(frequencies: number[], waveform: OscillatorType, volume: number): ToneStep[] {
  return frequencies.map((frequency, index) => ({
    frequency,
    delay: index * 0.055,
    duration: 0.045 + index * 0.012,
    volume,
    waveform,
  }));
}
