import Phaser from "phaser";
import type { GameSettings } from "./SaveSystem";

export type CueName =
  | "jump"
  | "land"
  | "collect"
  | "hurt"
  | "dash"
  | "checkpoint"
  | "powerup"
  | "enemy"
  | "goal"
  | "boss";

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

export interface AudioSettings {
  masterVolume: number;
  musicVolume: number;
  sfxVolume: number;
  muted: boolean;
}

export interface AudioSystemOptions {
  audioContextFactory?: () => AudioContext | null;
}

interface ToneStep {
  frequency: number;
  endFrequency?: number;
  delay: number;
  duration: number;
  volume: number;
  waveform: OscillatorType;
}

interface SfxDefinition {
  description: string;
  steps: ToneStep[];
}

interface MusicPattern {
  intervalMs: number;
  notes: number[];
  bassEvery: number;
}

const DEFAULT_AUDIO_SETTINGS: AudioSettings = {
  masterVolume: 0.82,
  musicVolume: 0.5,
  sfxVolume: 0.78,
  muted: false,
};

export const SFX_DEFINITIONS: Record<SfxKey, SfxDefinition> = {
  jump: { description: "Rising square jump chirp.", steps: [{ frequency: 440, endFrequency: 620, delay: 0, duration: 0.08, volume: 0.24, waveform: "square" }] },
  land: { description: "Short triangle landing thud.", steps: [{ frequency: 170, endFrequency: 96, delay: 0, duration: 0.07, volume: 0.2, waveform: "triangle" }] },
  collect: { description: "Three-note collectible sparkle.", steps: sequence([760, 980, 1240], "square", 0.12) },
  hurt: { description: "Falling saw damage tone.", steps: sequence([280, 190], "sawtooth", 0.18) },
  dash: { description: "Fast two-note dash snap.", steps: sequence([260, 520], "square", 0.14) },
  checkpoint: { description: "Major checkpoint confirmation.", steps: sequence([440, 660, 880], "triangle", 0.14) },
  powerup: { description: "Four-note powerup lift.", steps: sequence([540, 810, 1080, 1440], "square", 0.12) },
  enemy: { description: "Descending enemy defeat pluck.", steps: sequence([300, 220, 160], "triangle", 0.16) },
  goal: { description: "Original level finish flourish.", steps: sequence([520, 760, 980, 1320], "square", 0.14) },
  boss: { description: "Low boss cue motif.", steps: sequence([180, 260, 340], "sawtooth", 0.14) },
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

export class AudioSystem {
  private readonly audioContextFactory: () => AudioContext | null;
  private context?: AudioContext;
  private master?: GainNode;
  private music?: GainNode;
  private sfx?: GainNode;
  private musicTimer?: Phaser.Time.TimerEvent;
  private intervalId?: number;
  private enabled = true;
  private settings: AudioSettings = { ...DEFAULT_AUDIO_SETTINGS };
  private musicStep = 0;

  constructor(private readonly scene?: Phaser.Scene, options: AudioSystemOptions = {}) {
    this.audioContextFactory = options.audioContextFactory ?? createAudioContext;
    if (scene) {
      for (const cue of ["jump", "land", "collect", "hurt", "dash", "checkpoint", "powerup", "enemy", "goal", "boss"] as const) {
        scene.events.on(`audio:${cue}`, () => this.play(cue));
      }
      scene.events.once(Phaser.Scenes.Events.SHUTDOWN, () => this.destroy());
    }
  }

  static isSupported(): boolean {
    return Boolean((globalThis as AudioGlobal).AudioContext ?? (globalThis as AudioGlobal).webkitAudioContext);
  }

  unlock(): void {
    if (this.context) {
      void this.context.resume();
      return;
    }
    const context = this.audioContextFactory();
    if (!context) {
      this.enabled = false;
      return;
    }
    this.context = context;
    this.master = context.createGain();
    this.music = context.createGain();
    this.sfx = context.createGain();
    this.music.connect(this.master);
    this.sfx.connect(this.master);
    this.master.connect(context.destination);
    this.applyGainSettings();
  }

  setVolume(volume: number): void {
    const clamped = clamp01(volume);
    this.settings = {
      ...this.settings,
      masterVolume: clamped,
      musicVolume: clamped,
      sfxVolume: clamped,
    };
    this.applyGainSettings();
  }

  setSettings(settings: Partial<AudioSettings>): AudioSettings {
    this.settings = normalizeAudioSettings({ ...this.settings, ...settings });
    this.applyGainSettings();
    if (this.settings.muted) {
      this.stopMusic();
    }
    return this.getSettings();
  }

  applyGameSettings(settings: Partial<GameSettings>): AudioSettings {
    return this.setSettings({
      masterVolume: settings.masterVolume ?? settings.volume,
      musicVolume: settings.musicVolume ?? settings.volume,
      sfxVolume: settings.sfxVolume ?? settings.volume,
      muted: settings.muted,
    });
  }

  getSettings(): AudioSettings {
    return { ...this.settings };
  }

  play(cue: SfxKey): boolean {
    return this.playSfx(cue);
  }

  playSfx(cue: SfxKey, volumeScale = 1): boolean {
    if (!this.enabled || this.settings.muted) {
      return false;
    }
    this.unlock();
    if (!this.context || !this.sfx) {
      return false;
    }
    for (const step of SFX_DEFINITIONS[cue].steps) {
      this.tone(step.frequency, step.duration, step.delay, step.waveform, step.volume * volumeScale, step.endFrequency, this.sfx);
    }
    return true;
  }

  startMusic(key: MusicKey = "canopyTheme"): void {
    if (this.settings.muted || this.musicTimer || this.intervalId !== undefined) {
      return;
    }
    this.unlock();
    const pattern = MUSIC_PATTERNS[key];
    this.musicStep = 0;
    const tick = () => this.playMusicStep(pattern);
    if (this.scene) {
      this.musicTimer = this.scene.time.addEvent({ delay: pattern.intervalMs, loop: true, callback: tick });
    } else {
      this.intervalId = globalThis.setInterval(tick, pattern.intervalMs);
    }
  }

  stopMusic(): void {
    this.musicTimer?.remove(false);
    this.musicTimer = undefined;
    if (this.intervalId !== undefined) {
      globalThis.clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  destroy(): void {
    this.stopMusic();
    this.master?.disconnect();
    this.music?.disconnect();
    this.sfx?.disconnect();
    this.master = undefined;
    this.music = undefined;
    this.sfx = undefined;
  }

  private playMusicStep(pattern: MusicPattern): void {
    if (!this.enabled || !this.context || !this.music) {
      return;
    }
    const note = pattern.notes[this.musicStep % pattern.notes.length] ?? 220;
    this.tone(note, 0.035, 0, "triangle", 0.18 * this.settings.musicVolume, undefined, this.music);
    if (this.musicStep % pattern.bassEvery === 0) {
      this.tone(note / 2, 0.055, 0, "sine", 0.14 * this.settings.musicVolume, undefined, this.music);
    }
    this.musicStep += 1;
  }

  private tone(
    frequency: number,
    duration: number,
    delay: number,
    type: OscillatorType,
    gainScale: number,
    endFrequency: number | undefined,
    destination: GainNode,
  ): void {
    if (!this.context) {
      return;
    }
    const now = this.context.currentTime + delay;
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(40, endFrequency ?? frequency * 0.94), now + duration);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, gainScale), now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    oscillator.connect(gain);
    gain.connect(destination);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.02);
  }

  private applyGainSettings(): void {
    if (!this.master || !this.music || !this.sfx) {
      return;
    }
    this.master.gain.value = this.settings.muted ? 0 : this.settings.masterVolume;
    this.music.gain.value = this.settings.musicVolume;
    this.sfx.gain.value = this.settings.sfxVolume;
  }
}

let sharedAudioSystem: AudioSystem | null = null;

export function getSharedAudioSystem(): AudioSystem {
  if (!sharedAudioSystem) {
    sharedAudioSystem = new AudioSystem();
  }
  return sharedAudioSystem;
}

export function normalizeAudioSettings(settings: Partial<AudioSettings> = {}): AudioSettings {
  return {
    masterVolume: clamp01(settings.masterVolume ?? DEFAULT_AUDIO_SETTINGS.masterVolume),
    musicVolume: clamp01(settings.musicVolume ?? DEFAULT_AUDIO_SETTINGS.musicVolume),
    sfxVolume: clamp01(settings.sfxVolume ?? DEFAULT_AUDIO_SETTINGS.sfxVolume),
    muted: typeof settings.muted === "boolean" ? settings.muted : DEFAULT_AUDIO_SETTINGS.muted,
  };
}

function sequence(frequencies: number[], waveform: OscillatorType, volume: number): ToneStep[] {
  return frequencies.map((frequency, index) => ({
    frequency,
    delay: index * 0.055,
    duration: 0.045 + index * 0.012,
    volume,
    waveform,
  }));
}

function createAudioContext(): AudioContext | null {
  const Ctor = (globalThis as AudioGlobal).AudioContext ?? (globalThis as AudioGlobal).webkitAudioContext;
  return Ctor ? new Ctor() : null;
}

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, Number.isFinite(value) ? value : 0));
}

interface AudioGlobal {
  AudioContext?: typeof AudioContext;
  webkitAudioContext?: typeof AudioContext;
}
