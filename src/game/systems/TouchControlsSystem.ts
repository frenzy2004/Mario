import Phaser from "phaser";
import type { InputDeviceState, InputSystem } from "./InputSystem";

export type TouchControlsMode = "auto" | "on" | "off";

export const TOUCH_CONTROLS_SETTING_KEY = "clockwork-canopy-touch-controls-v1";
export const FIRST_PLAY_ONBOARDING_KEY = "clockwork-canopy-onboarding-seen-v1";

const TOUCH_CONTROL_MODES: readonly TouchControlsMode[] = ["auto", "on", "off"];
const TOUCH_BUTTON_DEPTH = 2500;

const EMPTY_TOUCH_STATE: InputDeviceState = {
  left: false,
  right: false,
  up: false,
  down: false,
  jump: false,
  run: false,
  action: false,
  pause: false,
};

type TouchButtonKey = "left" | "right" | "jump" | "run";

interface TouchButton {
  key: TouchButtonKey;
  shape: Phaser.GameObjects.Arc;
  baseAlpha: number;
  pointers: Set<number>;
}

export interface TouchControlsSystemOptions {
  preference?: TouchControlsMode;
}

export function loadTouchControlsMode(): TouchControlsMode {
  const value = getStorage()?.getItem(TOUCH_CONTROLS_SETTING_KEY);
  return isTouchControlsMode(value) ? value : "auto";
}

export function saveTouchControlsMode(mode: TouchControlsMode): TouchControlsMode {
  const nextMode = isTouchControlsMode(mode) ? mode : "auto";
  try {
    getStorage()?.setItem(TOUCH_CONTROLS_SETTING_KEY, nextMode);
  } catch {
    // Touch control mode should not block the settings screen.
  }
  return nextMode;
}

export function nextTouchControlsMode(mode: TouchControlsMode): TouchControlsMode {
  const index = TOUCH_CONTROL_MODES.indexOf(mode);
  return TOUCH_CONTROL_MODES[(index + 1) % TOUCH_CONTROL_MODES.length] ?? "auto";
}

export function formatTouchControlsMode(mode: TouchControlsMode): string {
  if (mode === "on") {
    return "On";
  }
  if (mode === "off") {
    return "Off";
  }
  return "Auto";
}

export function shouldShowTouchControls(mode: TouchControlsMode = loadTouchControlsMode()): boolean {
  if (mode === "on") {
    return true;
  }
  if (mode === "off") {
    return false;
  }
  return hasCoarsePointer();
}

export function hasSeenFirstPlayOnboarding(): boolean {
  return getStorage()?.getItem(FIRST_PLAY_ONBOARDING_KEY) === "seen";
}

export function markFirstPlayOnboardingSeen(): void {
  try {
    getStorage()?.setItem(FIRST_PLAY_ONBOARDING_KEY, "seen");
  } catch {
    // Onboarding should be dismissible even when storage is unavailable.
  }
}

export class TouchControlsSystem {
  private readonly state: InputDeviceState = { ...EMPTY_TOUCH_STATE };
  private readonly buttons: TouchButton[] = [];
  private readonly inputSystem?: InputSystem;
  private readonly visible: boolean;
  private container?: Phaser.GameObjects.Container;

  constructor(
    private readonly scene: Phaser.Scene,
    inputSystemOrMode?: InputSystem | TouchControlsMode,
    options: TouchControlsSystemOptions = {},
  ) {
    this.inputSystem = isInputSystem(inputSystemOrMode) ? inputSystemOrMode : undefined;
    const mode = options.preference ?? (isTouchControlsMode(inputSystemOrMode) ? inputSystemOrMode : loadTouchControlsMode());
    this.visible = shouldShowTouchControls(mode);
    if (this.visible) {
      this.create();
    }
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.syncInput);
  }

  isVisible(): boolean {
    return this.visible;
  }

  read(): InputDeviceState {
    return { ...this.state };
  }

  destroy(): void {
    this.scene.input.off(Phaser.Input.Events.POINTER_UP_OUTSIDE, this.releasePointer);
    this.scene.input.off(Phaser.Input.Events.GAME_OUT, this.reset);
    this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.syncInput);
    this.reset();
    this.inputSystem?.setKeyboardState({ ...EMPTY_TOUCH_STATE });
    this.container?.destroy();
    this.container = undefined;
    this.buttons.length = 0;
  }

  syncInput = (): void => {
    this.inputSystem?.setKeyboardState(this.read());
  };

  private create(): void {
    const missingPointers = Math.max(0, 4 - this.scene.input.manager.pointersTotal);
    if (missingPointers > 0) {
      this.scene.input.addPointer(missingPointers);
    }

    this.container = this.scene.add.container(0, 0).setScrollFactor(0).setDepth(TOUCH_BUTTON_DEPTH);
    this.scene.input.on(Phaser.Input.Events.POINTER_UP_OUTSIDE, this.releasePointer);
    this.scene.input.on(Phaser.Input.Events.GAME_OUT, this.reset);

    this.addPadBacker(120, 454, 188, 92);
    this.addButton("left", "<", 72, 454, 68, 0x0f766e, 0.48);
    this.addButton("right", ">", 168, 454, 68, 0x0f766e, 0.48);
    this.addButton("run", "DASH", 748, 462, 70, 0xb45309, 0.48);
    this.addButton("jump", "JUMP", 858, 432, 82, 0x1d4ed8, 0.52);
  }

  private addPadBacker(x: number, y: number, width: number, height: number): void {
    const backer = this.scene.add
      .rectangle(x, y, width, height, 0x020617, 0.22)
      .setStrokeStyle(1, 0xf8fafc, 0.16)
      .setScrollFactor(0);
    this.container?.add(backer);
  }

  private addButton(
    key: TouchButtonKey,
    label: string,
    x: number,
    y: number,
    size: number,
    fillColor: number,
    alpha: number,
  ): void {
    const shape = this.scene.add
      .circle(x, y, size / 2, fillColor, alpha)
      .setStrokeStyle(2, 0xf8fafc, 0.58)
      .setScrollFactor(0);
    const text = this.scene.add
      .text(x, y, label, {
        fontFamily: "system-ui",
        fontSize: key === "left" || key === "right" ? "31px" : "14px",
        fontStyle: "700",
        color: "#f8fafc",
        stroke: "#07131e",
        strokeThickness: 4,
      })
      .setOrigin(0.5)
      .setScrollFactor(0);
    const zone = this.scene.add.zone(x, y, size, size).setScrollFactor(0).setInteractive({ useHandCursor: true });
    const button: TouchButton = {
      key,
      shape,
      baseAlpha: alpha,
      pointers: new Set<number>(),
    };

    zone.on("pointerdown", (pointer: Phaser.Input.Pointer) => this.setPressed(button, pointer, true));
    zone.on("pointerup", (pointer: Phaser.Input.Pointer) => this.setPressed(button, pointer, false));
    zone.on("pointerout", (pointer: Phaser.Input.Pointer) => this.setPressed(button, pointer, false));
    zone.on("pointerover", (pointer: Phaser.Input.Pointer) => {
      if (pointer.isDown) {
        this.setPressed(button, pointer, true);
      }
    });

    this.buttons.push(button);
    this.container?.add([shape, text, zone]);
  }

  private setPressed(button: TouchButton, pointer: Phaser.Input.Pointer, pressed: boolean): void {
    const pointerKey = pointer.pointerId || pointer.identifier || pointer.id;
    if (pressed) {
      button.pointers.add(pointerKey);
    } else {
      button.pointers.delete(pointerKey);
    }
    this.syncButton(button);
  }

  private syncButton(button: TouchButton): void {
    const pressed = button.pointers.size > 0;
    this.state[button.key] = pressed;
    button.shape.setAlpha(pressed ? 0.78 : button.baseAlpha).setScale(pressed ? 1.05 : 1);
  }

  private readonly releasePointer = (pointer: Phaser.Input.Pointer): void => {
    for (const button of this.buttons) {
      this.setPressed(button, pointer, false);
    }
  };

  private readonly reset = (): void => {
    Object.assign(this.state, EMPTY_TOUCH_STATE);
    for (const button of this.buttons) {
      button.pointers.clear();
      this.syncButton(button);
    }
  };
}

function isTouchControlsMode(value: unknown): value is TouchControlsMode {
  return typeof value === "string" && TOUCH_CONTROL_MODES.includes(value as TouchControlsMode);
}

function isInputSystem(value: unknown): value is InputSystem {
  return typeof value === "object" && value !== null && typeof (value as { setKeyboardState?: unknown }).setKeyboardState === "function";
}

function hasCoarsePointer(): boolean {
  return Boolean(globalThis.matchMedia?.("(pointer: coarse)").matches || (globalThis.navigator?.maxTouchPoints ?? 0) > 0);
}

function getStorage(): Storage | undefined {
  try {
    return globalThis.localStorage;
  } catch {
    return undefined;
  }
}
