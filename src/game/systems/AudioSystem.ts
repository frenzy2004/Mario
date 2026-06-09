import Phaser from "phaser";
import {
  MUSIC_PATTERNS,
  SFX_DEFINITIONS,
  type MusicKey,
  type MusicPattern,
  type SfxKey,
} from "../config/audio";
import type { GameSettings } from "./SaveSystem";

export { AUDIO_PROVENANCE, MUSIC_PATTERNS, SFX_DEFINITIONS } from "../config/audio";
export type { CueName, MusicKey, SfxKey } from "../config/audio";

export interface AudioSettings {
  masterVolume: number;
  musicVolume: number;
  sfxVolume: number;
  muted: boolean;
}

export interface AudioSystemOptions {
  audioContextFactory?: () => AudioContext | null;
}

const DEFAULT_AUDIO_SETTINGS: AudioSettings = {
  masterVolume: 0.82,
  musicVolume: 0.5,
  sfxVolume: 0.78,
  muted: false,
};

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
