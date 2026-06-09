import Phaser from "phaser";

export type InputSource = "keyboard" | "gamepad" | "mixed" | "none";

export interface InputDeviceState {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
  jump: boolean;
  run: boolean;
  action: boolean;
  pause: boolean;
}

export interface InputSnapshot {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
  horizontal: number;
  vertical: number;
  jump: boolean;
  jumpHeld: boolean;
  jumpPressed: boolean;
  jumpReleased: boolean;
  runHeld: boolean;
  dash: boolean;
  dashPressed: boolean;
  actionHeld: boolean;
  actionPressed: boolean;
  pausePressed: boolean;
  confirmPressed: boolean;
  source: InputSource;
  timestamp: number;
  raw: {
    keyboard: InputDeviceState;
    gamepad: InputDeviceState & {
      horizontal: number;
      vertical: number;
      connected: boolean;
    };
  };
}

export interface ManualGamepadState {
  connected?: boolean;
  horizontal?: number;
  vertical?: number;
  buttons?: Partial<Pick<InputDeviceState, "jump" | "run" | "action" | "pause">>;
}

export interface InputSystemOptions {
  deadZone?: number;
  now?: () => number;
}

type AxisLike = number | { value?: number; getValue?: () => number };
type ButtonLike = { pressed?: boolean; value?: number };
type PadLike = {
  connected?: boolean;
  axes?: ArrayLike<AxisLike>;
  buttons?: ArrayLike<ButtonLike>;
  left?: boolean;
  right?: boolean;
  up?: boolean;
  down?: boolean;
  A?: boolean;
  B?: boolean;
  X?: boolean;
  Y?: boolean;
  start?: boolean;
  getAxisValue?: (index: number) => number;
  isButtonDown?: (index: number) => boolean;
};

const EMPTY_DEVICE_STATE: InputDeviceState = {
  left: false,
  right: false,
  up: false,
  down: false,
  jump: false,
  run: false,
  action: false,
  pause: false,
};

export class InputSystem {
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
  private keys: Partial<Record<string, Phaser.Input.Keyboard.Key>> = {};
  private previousJump = false;
  private previousDash = false;
  private previousAction = false;
  private previousPause = false;
  private readonly deadZone: number;
  private readonly now: () => number;
  private manualKeyboard: InputDeviceState = { ...EMPTY_DEVICE_STATE };
  private manualGamepad: Required<ManualGamepadState> = {
    connected: false,
    horizontal: 0,
    vertical: 0,
    buttons: {},
  };

  constructor(
    private readonly scene?: Phaser.Scene,
    options: InputSystemOptions = {},
  ) {
    this.deadZone = options.deadZone ?? 0.25;
    this.now = options.now ?? (() => this.scene?.time.now ?? performance.now());

    if (!scene) {
      return;
    }

    if (!scene.input.keyboard) {
      throw new Error("Keyboard input is required for Clockwork Canopy.");
    }

    this.cursors = scene.input.keyboard.createCursorKeys();
    this.keys = scene.input.keyboard.addKeys({
      w: Phaser.Input.Keyboard.KeyCodes.W,
      a: Phaser.Input.Keyboard.KeyCodes.A,
      s: Phaser.Input.Keyboard.KeyCodes.S,
      d: Phaser.Input.Keyboard.KeyCodes.D,
      space: Phaser.Input.Keyboard.KeyCodes.SPACE,
      shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
      x: Phaser.Input.Keyboard.KeyCodes.X,
      z: Phaser.Input.Keyboard.KeyCodes.Z,
      c: Phaser.Input.Keyboard.KeyCodes.C,
      enter: Phaser.Input.Keyboard.KeyCodes.ENTER,
      esc: Phaser.Input.Keyboard.KeyCodes.ESC,
      p: Phaser.Input.Keyboard.KeyCodes.P,
    }) as Record<string, Phaser.Input.Keyboard.Key>;
  }

  read(timestamp = this.now()): InputSnapshot {
    const keyboard = this.readKeyboard();
    const gamepad = this.readGamepad();
    const horizontal = clampAxis(axisFromDigital(keyboard.left, keyboard.right) + gamepad.horizontal);
    const vertical = clampAxis(axisFromDigital(keyboard.up, keyboard.down) + gamepad.vertical);
    const left = keyboard.left || gamepad.left || horizontal < -this.deadZone;
    const right = keyboard.right || gamepad.right || horizontal > this.deadZone;
    const up = keyboard.up || gamepad.up || vertical < -this.deadZone;
    const down = keyboard.down || gamepad.down || vertical > this.deadZone;
    const jump = keyboard.jump || gamepad.jump || up;
    const runHeld = keyboard.run || gamepad.run;
    const actionHeld = keyboard.action || gamepad.action;
    const pauseHeld = keyboard.pause || gamepad.pause;
    const confirmHeld = jump || actionHeld;
    const pausePressed = this.justDown("esc") || this.justDown("p") || (pauseHeld && !this.previousPause);
    const confirmPressed =
      this.justDown("space") || this.justDown("enter") || (confirmHeld && !this.previousAction);

    const snapshot: InputSnapshot = {
      left,
      right,
      up,
      down,
      horizontal,
      vertical,
      jump,
      jumpHeld: jump,
      jumpPressed: jump && !this.previousJump,
      jumpReleased: !jump && this.previousJump,
      runHeld,
      dash: runHeld,
      dashPressed: runHeld && !this.previousDash,
      actionHeld,
      actionPressed: actionHeld && !this.previousAction,
      pausePressed,
      confirmPressed,
      source: resolveSource(hasAnyInput(keyboard), gamepad.connected && hasAnyGamepadInput(gamepad)),
      timestamp,
      raw: {
        keyboard,
        gamepad,
      },
    };

    this.previousJump = jump;
    this.previousDash = runHeld;
    this.previousAction = confirmHeld;
    this.previousPause = pauseHeld;
    return snapshot;
  }

  update(timestamp = this.now()): InputSnapshot {
    return this.read(timestamp);
  }

  setKeyboardState(state: Partial<InputDeviceState>): void {
    this.manualKeyboard = {
      ...this.manualKeyboard,
      ...state,
    };
  }

  setGamepadState(state: ManualGamepadState): void {
    this.manualGamepad = {
      connected: state.connected ?? this.manualGamepad.connected,
      horizontal: state.horizontal ?? this.manualGamepad.horizontal,
      vertical: state.vertical ?? this.manualGamepad.vertical,
      buttons: {
        ...this.manualGamepad.buttons,
        ...state.buttons,
      },
    };
  }

  clearManualInput(): void {
    this.manualKeyboard = { ...EMPTY_DEVICE_STATE };
    this.manualGamepad = {
      connected: false,
      horizontal: 0,
      vertical: 0,
      buttons: {},
    };
  }

  private readKeyboard(): InputDeviceState {
    return mergeDeviceState(
      {
        left: Boolean(this.cursors?.left.isDown || this.keys.a?.isDown),
        right: Boolean(this.cursors?.right.isDown || this.keys.d?.isDown),
        up: Boolean(this.cursors?.up.isDown || this.keys.w?.isDown),
        down: Boolean(this.cursors?.down.isDown || this.keys.s?.isDown),
        jump: Boolean(this.cursors?.up.isDown || this.keys.w?.isDown || this.keys.space?.isDown || this.keys.z?.isDown),
        run: Boolean(this.keys.shift?.isDown || this.keys.x?.isDown),
        action: Boolean(this.keys.c?.isDown || this.keys.enter?.isDown),
        pause: Boolean(this.keys.esc?.isDown || this.keys.p?.isDown),
      },
      this.manualKeyboard,
    );
  }

  private readGamepad(): InputSnapshot["raw"]["gamepad"] {
    const pad = this.scene?.input.gamepad?.getPad(0) as PadLike | undefined;
    const axisX = applyDeadZone(readAxis(pad, 0) + this.manualGamepad.horizontal, this.deadZone);
    const axisY = applyDeadZone(readAxis(pad, 1) + this.manualGamepad.vertical, this.deadZone);
    const left = Boolean(pad?.left || isButtonDown(pad, 14) || axisX < -this.deadZone);
    const right = Boolean(pad?.right || isButtonDown(pad, 15) || axisX > this.deadZone);
    const up = Boolean(pad?.up || isButtonDown(pad, 12) || axisY < -this.deadZone);
    const down = Boolean(pad?.down || isButtonDown(pad, 13) || axisY > this.deadZone);
    const buttons = this.manualGamepad.buttons;

    return {
      left,
      right,
      up,
      down,
      jump: Boolean(buttons.jump || pad?.A || isButtonDown(pad, 0)),
      run: Boolean(buttons.run || pad?.X || isButtonDown(pad, 2)),
      action: Boolean(buttons.action || pad?.B || pad?.Y || isButtonDown(pad, 1) || isButtonDown(pad, 3)),
      pause: Boolean(buttons.pause || pad?.start || isButtonDown(pad, 9)),
      horizontal: axisX || axisFromDigital(left, right),
      vertical: axisY || axisFromDigital(up, down),
      connected: Boolean(this.manualGamepad.connected || pad?.connected),
    };
  }

  private justDown(keyName: string): boolean {
    const key = this.keys[keyName];
    return Boolean(key && Phaser.Input.Keyboard.JustDown(key));
  }
}

function mergeDeviceState(a: InputDeviceState, b: InputDeviceState): InputDeviceState {
  return {
    left: a.left || b.left,
    right: a.right || b.right,
    up: a.up || b.up,
    down: a.down || b.down,
    jump: a.jump || b.jump,
    run: a.run || b.run,
    action: a.action || b.action,
    pause: a.pause || b.pause,
  };
}

function axisFromDigital(negative: boolean, positive: boolean): number {
  if (negative === positive) {
    return 0;
  }
  return positive ? 1 : -1;
}

function readAxis(pad: PadLike | undefined, index: number): number {
  if (pad?.getAxisValue) {
    return pad.getAxisValue(index);
  }
  const axis = pad?.axes?.[index];
  if (typeof axis === "number") {
    return axis;
  }
  return axis?.getValue?.() ?? axis?.value ?? 0;
}

function isButtonDown(pad: PadLike | undefined, index: number): boolean {
  return Boolean(pad?.isButtonDown?.(index) || pad?.buttons?.[index]?.pressed || (pad?.buttons?.[index]?.value ?? 0) > 0.5);
}

function applyDeadZone(value: number, deadZone: number): number {
  return Math.abs(value) < deadZone ? 0 : clampAxis(value);
}

function clampAxis(value: number): number {
  return Math.max(-1, Math.min(1, value));
}

function hasAnyInput(input: InputDeviceState): boolean {
  return input.left || input.right || input.up || input.down || input.jump || input.run || input.action || input.pause;
}

function hasAnyGamepadInput(input: InputSnapshot["raw"]["gamepad"]): boolean {
  return hasAnyInput(input) || Math.abs(input.horizontal) > 0 || Math.abs(input.vertical) > 0;
}

function resolveSource(keyboardActive: boolean, gamepadActive: boolean): InputSource {
  if (keyboardActive && gamepadActive) {
    return "mixed";
  }
  if (keyboardActive) {
    return "keyboard";
  }
  if (gamepadActive) {
    return "gamepad";
  }
  return "none";
}
