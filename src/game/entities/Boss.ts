import Phaser from "phaser";

export type BossPhase = 1 | 2 | 3;
export type BossAttack = "gearVolley" | "rootStomp" | "steamSweep" | "dashWeave";
export type BossState = "idle" | BossAttack | "staggered" | "defeated";

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
    this.arcadeBody.setMaxVelocity(260, 800);

    if (this.anims.exists("boss-warden")) {
      this.play("boss-warden", true);
    }

    this.nextAttackAt = scene.time.now + 900;
  }

  get arcadeBody(): Phaser.Physics.Arcade.Body {
    return this.body as Phaser.Physics.Arcade.Body;
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

  hit(): boolean {
    return this.takeDamage(1);
  }

  takeDamage(amount: number): boolean {
    if (this.defeated || amount <= 0 || this.state === "dashWeave") {
      return false;
    }

    this.health = Math.max(0, this.health - amount);
    this.setTint(0xfef08a);
    this.scene.time.delayedCall(140, () => this.clearTint());
    this.scene.events.emit("boss:damaged", this, amount);

    if (this.health <= 0) {
      this.defeat();
      return true;
    }

    this.updatePhase();
    return false;
  }

  startAttack(attack: BossAttack, time = this.scene.time.now): BossAttackEvent {
    const phaseDefinition = BOSS_PHASES[this.phase];
    this.state = attack;
    this.lastAttack = attack;
    this.attackEndsAt = time + phaseDefinition.attackDurationMs;

    const event: BossAttackEvent = {
      attack,
      phase: this.phase,
      x: this.x,
      y: this.y,
      damage: phaseDefinition.contactDamage,
      startedAt: time,
      durationMs: phaseDefinition.attackDurationMs,
    };

    this.scene.events.emit("boss:attack", event, this);
    return event;
  }

  private finishAttack(time: number): void {
    const attack = this.state;
    this.state = attack === "rootStomp" ? "staggered" : "idle";
    this.nextAttackAt = time + BOSS_PHASES[this.phase].attackCooldownMs;
    if (this.state === "staggered") {
      this.attackEndsAt = time + 420;
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

  private defeat(): void {
    if (this.defeated) {
      return;
    }

    this.defeated = true;
    this.health = 0;
    this.state = "defeated";
    this.scene.events.emit("boss:defeated", this);
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
}
