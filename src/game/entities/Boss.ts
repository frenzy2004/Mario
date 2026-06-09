import Phaser from "phaser";

export type BossPhase = 1 | 2 | 3;
export type BossAttack = "gearVolley" | "rootStomp" | "steamSweep" | "dashWeave";
export type BossState = "idle" | BossAttack | "staggered" | "defeated";
export type BossTelegraphKind = "gear-aim" | "root-compress" | "steam-draw" | "dash-coil" | "phase-surge";
export type BossMotionCueName = "spawn" | "telegraph" | "attack" | "phase" | "hit" | "stagger" | "defeat";

export interface BossPhaseDefinition {
  phase: BossPhase;
  minHealthRatio: number;
  speed: number;
  contactDamage: number;
  attackCooldownMs: number;
  attackDurationMs: number;
  attacks: BossAttack[];
}

export interface BossAttackEvent {
  attack: BossAttack;
  phase: BossPhase;
  x: number;
  y: number;
  damage: number;
  startedAt: number;
  durationMs: number;
  telegraph: BossAttackTelegraph;
}

export interface BossDamageHit {
  source?: unknown;
  sourceX?: number;
  knockback?: number;
}

export interface BossAttackTelegraph {
  attack: BossAttack;
  telegraph: BossTelegraphKind;
  durationMs: number;
  intensity: number;
  scaleX: number;
  scaleY: number;
  angle: number;
}

export interface BossPhaseTelegraph {
  phase: BossPhase;
  previousPhase: BossPhase;
  telegraph: "phase-surge";
  durationMs: number;
  intensity: number;
}

export interface BossMotionCueEvent {
  scope: "boss";
  cue: BossMotionCueName;
  bossId: "warden";
  phase: BossPhase;
  previousPhase?: BossPhase;
  attack?: BossAttack;
  telegraph?: BossTelegraphKind;
  x: number;
  y: number;
  direction: -1 | 1;
  health: number;
  maxHealth: number;
  damage?: number;
  at: number;
  durationMs: number;
  intensity: number;
  source?: unknown;
}

export const BOSS_PHASES: Record<BossPhase, BossPhaseDefinition> = {
  1: {
    phase: 1,
    minHealthRatio: 0.67,
    speed: 110,
    contactDamage: 1,
    attackCooldownMs: 1500,
    attackDurationMs: 760,
    attacks: ["gearVolley", "rootStomp"],
  },
  2: {
    phase: 2,
    minHealthRatio: 0.34,
    speed: 135,
    contactDamage: 2,
    attackCooldownMs: 1100,
    attackDurationMs: 920,
    attacks: ["gearVolley", "steamSweep", "dashWeave"],
  },
  3: {
    phase: 3,
    minHealthRatio: 0,
    speed: 165,
    contactDamage: 2,
    attackCooldownMs: 820,
    attackDurationMs: 1080,
    attacks: ["rootStomp", "steamSweep", "dashWeave"],
  },
};

export const BOSS_ATTACK_TELEGRAPHS: Record<BossAttack, BossAttackTelegraph> = {
  gearVolley: {
    attack: "gearVolley",
    telegraph: "gear-aim",
    durationMs: 320,
    intensity: 1,
    scaleX: 0.94,
    scaleY: 1.1,
    angle: -5,
  },
  rootStomp: {
    attack: "rootStomp",
    telegraph: "root-compress",
    durationMs: 420,
    intensity: 1.2,
    scaleX: 1.18,
    scaleY: 0.78,
    angle: 0,
  },
  steamSweep: {
    attack: "steamSweep",
    telegraph: "steam-draw",
    durationMs: 360,
    intensity: 1.1,
    scaleX: 0.9,
    scaleY: 1.06,
    angle: 6,
  },
  dashWeave: {
    attack: "dashWeave",
    telegraph: "dash-coil",
    durationMs: 280,
    intensity: 1.35,
    scaleX: 1.24,
    scaleY: 0.86,
    angle: 8,
  },
};

export function getBossPhase(health: number, maxHealth: number): BossPhase {
  const ratio = maxHealth <= 0 ? 0 : Phaser.Math.Clamp(health / maxHealth, 0, 1);
  if (ratio <= 0.34) {
    return 3;
  }
  if (ratio <= 0.67) {
    return 2;
  }
  return 1;
}

export function chooseBossAttack(phase: BossPhase, previous?: BossAttack, random = Math.random): BossAttack {
  const attacks = BOSS_PHASES[phase].attacks;
  let index = Math.floor(Phaser.Math.Clamp(random(), 0, 0.999999) * attacks.length);
  if (attacks.length > 1 && attacks[index] === previous) {
    index = (index + 1) % attacks.length;
  }
  return attacks[index]!;
}

export function getBossAttackTelegraph(attack: BossAttack, phase: BossPhase): BossAttackTelegraph {
  const base = BOSS_ATTACK_TELEGRAPHS[attack];
  const phaseDurationScale = phase === 3 ? 0.82 : phase === 2 ? 0.92 : 1;
  return {
    ...base,
    durationMs: Math.round(base.durationMs * phaseDurationScale),
    intensity: Number((base.intensity + (phase - 1) * 0.22).toFixed(2)),
  };
}

export function getBossPhaseTelegraph(phase: BossPhase, previousPhase: BossPhase): BossPhaseTelegraph {
  return {
    phase,
    previousPhase,
    telegraph: "phase-surge",
    durationMs: 380 + phase * 90,
    intensity: Number((1 + (phase - 1) * 0.35).toFixed(2)),
  };
}

export class Boss extends Phaser.Physics.Arcade.Sprite {
  readonly maxHealth: number;
  health: number;
  phase: BossPhase;
  state: BossState = "idle";
  contactDamage = 1;
  defeated = false;

  private direction = 1;
  private nextAttackAt = 0;
  private attackEndsAt = 0;
  private lastAttack?: BossAttack;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    health: number,
    private readonly arenaLeft: number,
    private readonly arenaRight: number,
  ) {
    super(scene, x, y, "boss-warden-0");
    this.health = health;
    this.maxHealth = Math.max(1, health);
    this.phase = getBossPhase(this.health, this.maxHealth);
    this.contactDamage = BOSS_PHASES[this.phase].contactDamage;

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setOrigin(0.5, 1);
    this.setDepth(19);
    this.setSize(68, 56);
    this.setOffset(14, 22);
    this.setData("bossName", "Warden of Turning Leaves");
    this.setData("bossPhase", this.phase);
    this.setData("motionCue", null);
    this.arcadeBody.setMaxVelocity(260, 800);

    if (this.anims.exists("boss-warden")) {
      this.play("boss-warden", true);
    }

    this.nextAttackAt = scene.time.now + 900;
  }

  get arcadeBody(): Phaser.Physics.Arcade.Body {
    return this.body as Phaser.Physics.Arcade.Body;
  }

  emitMotionCue(
    cue: BossMotionCueName,
    time = this.scene.time.now,
    options: Partial<
      Pick<
        BossMotionCueEvent,
        "previousPhase" | "attack" | "telegraph" | "damage" | "durationMs" | "intensity" | "source"
      >
    > = {},
  ): BossMotionCueEvent {
    const event: BossMotionCueEvent = {
      scope: "boss",
      cue,
      bossId: "warden",
      phase: this.phase,
      previousPhase: options.previousPhase,
      attack: options.attack,
      telegraph: options.telegraph,
      x: this.x,
      y: this.y,
      direction: this.direction < 0 ? -1 : 1,
      health: this.health,
      maxHealth: this.maxHealth,
      damage: options.damage,
      at: time,
      durationMs: options.durationMs ?? 0,
      intensity: options.intensity ?? 1,
      source: options.source,
    };
    this.setData("motionCue", event);
    this.scene.events.emit("boss:motion", event, this);
    this.scene.events.emit("motion:cue", event, this);
    return event;
  }

  updateBoss(time: number): void {
    if (!this.active || this.defeated) {
      return;
    }

    this.updatePhase();

    if (this.x < this.arenaLeft) {
      this.direction = 1;
    } else if (this.x > this.arenaRight) {
      this.direction = -1;
    }

    if (this.state !== "idle" && time >= this.attackEndsAt) {
      this.finishAttack(time);
    }

    if (this.state === "idle" && time >= this.nextAttackAt) {
      this.startAttack(chooseBossAttack(this.phase, this.lastAttack), time);
    }

    this.applyMovement(time);
    this.setFlipX(this.direction < 0);
  }

  hit(hit: BossDamageHit = {}): boolean {
    return this.takeDamage(1, hit);
  }

  takeDamage(amount: number, hit: BossDamageHit = {}): boolean {
    if (this.defeated || amount <= 0 || this.state === "dashWeave") {
      return false;
    }

    this.health = Math.max(0, this.health - amount);
    this.setTint(0xfef08a);
    this.scene.time.delayedCall(140, () => this.clearTint());

    let hitDirection: -1 | 1 = this.direction < 0 ? -1 : 1;
    if (typeof hit.sourceX === "number") {
      hitDirection = this.x < hit.sourceX ? -1 : 1;
      this.setVelocityX(hitDirection * (hit.knockback ?? 150));
    }

    const defeated = this.health <= 0;
    const cue = this.emitMotionCue("hit", this.scene.time.now, {
      durationMs: 190,
      intensity: Math.max(1, amount),
      source: hit.source,
    });
    if (!defeated) {
      this.playHitMotion(hitDirection);
    }
    this.scene.events.emit("boss:damaged", this, amount, hit, cue);

    if (defeated) {
      this.defeat(hit.source);
      return true;
    }

    this.updatePhase();
    return false;
  }

  startAttack(attack: BossAttack, time = this.scene.time.now): BossAttackEvent {
    const phaseDefinition = BOSS_PHASES[this.phase];
    const telegraph = getBossAttackTelegraph(attack, this.phase);
    this.state = attack;
    this.lastAttack = attack;
    this.attackEndsAt = time + phaseDefinition.attackDurationMs;

    const telegraphCue = this.emitMotionCue("telegraph", time, {
      attack,
      telegraph: telegraph.telegraph,
      damage: phaseDefinition.contactDamage,
      durationMs: telegraph.durationMs,
      intensity: telegraph.intensity,
    });
    this.scene.events.emit("boss:telegraph", telegraphCue, this);
    this.playTelegraphMotion(telegraph);

    const event: BossAttackEvent = {
      attack,
      phase: this.phase,
      x: this.x,
      y: this.y,
      damage: phaseDefinition.contactDamage,
      startedAt: time,
      durationMs: phaseDefinition.attackDurationMs,
      telegraph,
    };

    this.scene.events.emit("boss:attack", event, this);
    this.emitMotionCue("attack", time, {
      attack,
      telegraph: telegraph.telegraph,
      damage: phaseDefinition.contactDamage,
      durationMs: phaseDefinition.attackDurationMs,
      intensity: telegraph.intensity,
    });
    return event;
  }

  private finishAttack(time: number): void {
    const attack = this.state;
    this.state = attack === "rootStomp" ? "staggered" : "idle";
    this.nextAttackAt = time + BOSS_PHASES[this.phase].attackCooldownMs;
    if (this.state === "staggered") {
      this.attackEndsAt = time + 420;
      const cue = this.emitMotionCue("stagger", time, { durationMs: 420, intensity: 0.9 });
      this.scene.events.emit("boss:stagger", cue, this);
    }
  }

  private updatePhase(): void {
    const nextPhase = getBossPhase(this.health, this.maxHealth);
    if (nextPhase === this.phase) {
      return;
    }

    const previousPhase = this.phase;
    this.phase = nextPhase;
    this.contactDamage = BOSS_PHASES[this.phase].contactDamage;
    this.setData("bossPhase", this.phase);
    this.scene.events.emit("boss:phase", this.phase, previousPhase, this);
    const telegraph = getBossPhaseTelegraph(this.phase, previousPhase);
    const cue = this.emitMotionCue("phase", this.scene.time.now, {
      previousPhase,
      telegraph: telegraph.telegraph,
      durationMs: telegraph.durationMs,
      intensity: telegraph.intensity,
    });
    this.scene.events.emit("boss:phase-telegraph", cue, this);
    this.nextAttackAt = Math.max(this.nextAttackAt, this.scene.time.now + telegraph.durationMs);
    this.playPhaseMotion(telegraph);
  }

  private applyMovement(time: number): void {
    if (this.state === "staggered") {
      this.setVelocityX(0);
      if (time >= this.attackEndsAt) {
        this.state = "idle";
      }
      return;
    }

    if (this.state === "dashWeave") {
      this.setVelocityX(BOSS_PHASES[this.phase].speed * 1.8 * this.direction);
      return;
    }

    if (this.state === "rootStomp") {
      this.setVelocityX(0);
      if (this.arcadeBody.blocked.down) {
        this.setVelocityY(-420);
      }
      return;
    }

    if (this.state === "steamSweep") {
      this.setVelocityX(BOSS_PHASES[this.phase].speed * 0.45 * this.direction);
      return;
    }

    this.setVelocityX(BOSS_PHASES[this.phase].speed * this.direction);
  }

  private defeat(source?: unknown): void {
    if (this.defeated) {
      return;
    }

    this.defeated = true;
    this.health = 0;
    this.state = "defeated";
    this.scene.tweens.killTweensOf(this);
    const cue = this.emitMotionCue("defeat", this.scene.time.now, { durationMs: 520, intensity: 1.6, source });
    this.scene.events.emit("boss:defeated", this, cue);
    this.disableBody(true, false);
    this.scene.tweens.add({
      targets: this,
      alpha: 0,
      scale: 1.35,
      angle: 25,
      duration: 520,
      ease: "Back.easeIn",
      onComplete: () => this.destroy(),
    });
  }

  private playTelegraphMotion(telegraph: BossAttackTelegraph): void {
    this.scene.tweens.add({
      targets: this,
      scaleX: telegraph.scaleX,
      scaleY: telegraph.scaleY,
      angle: telegraph.angle * this.direction,
      yoyo: true,
      duration: Math.max(90, Math.floor(telegraph.durationMs / 2)),
      ease: "Sine.easeInOut",
      onComplete: () => {
        this.setScale(1);
        this.setAngle(0);
      },
    });
  }

  private playPhaseMotion(telegraph: BossPhaseTelegraph): void {
    this.scene.tweens.add({
      targets: this,
      scaleX: 1 + telegraph.intensity * 0.1,
      scaleY: 1 + telegraph.intensity * 0.04,
      angle: this.direction * 4,
      yoyo: true,
      repeat: 1,
      duration: Math.max(100, Math.floor(telegraph.durationMs / 4)),
      ease: "Back.easeOut",
      onComplete: () => {
        this.setScale(1);
        this.setAngle(0);
      },
    });
  }

  private playHitMotion(direction: -1 | 1): void {
    this.scene.tweens.add({
      targets: this,
      scaleX: 0.94,
      scaleY: 1.06,
      angle: -5 * direction,
      yoyo: true,
      duration: 80,
      ease: "Quad.easeOut",
      onComplete: () => {
        this.setScale(1);
        this.setAngle(0);
      },
    });
  }
}
