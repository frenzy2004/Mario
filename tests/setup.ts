import { expect, type Page } from "@playwright/test";

export type ConsoleIssue = {
  location: string;
  text: string;
  type: string;
};

type CanvasSample = {
  coloredPixels: number;
  height: number;
  nonTransparentPixels: number;
  readError?: string;
  uniqueColors: number;
  width: number;
};

const SETTINGS_KEY = "clockwork-canopy-settings-v1";
const TOUCH_CONTROLS_KEY = "clockwork-canopy-touch-controls-v1";
const GAME_WIDTH = 960;
const GAME_HEIGHT = 540;

export function collectConsoleErrors(page: Page) {
  const issues: ConsoleIssue[] = [];

  page.on("console", (message) => {
    if (message.type() !== "error") {
      return;
    }

    const location = message.location();
    issues.push({
      location: `${location.url}:${location.lineNumber}:${location.columnNumber}`,
      text: message.text(),
      type: message.type(),
    });
  });

  page.on("pageerror", (error) => {
    issues.push({
      location: error.stack ?? "unknown",
      text: error.message,
      type: "pageerror",
    });
  });

  return issues;
}

export async function bootGame(page: Page) {
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");
  await expect(page.locator("canvas")).toHaveCount(1, { timeout: 15_000 });
  await expect(page.locator("canvas")).toBeVisible();
}

export async function seedGameSettings(page: Page, settings: Record<string, unknown>) {
  await page.addInitScript(
    ([key, value]) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [SETTINGS_KEY, settings] as const,
  );
}

export async function seedTouchControlsMode(page: Page, mode: "auto" | "on" | "off") {
  await page.addInitScript(
    ([key, value]) => {
      window.localStorage.setItem(key, value);
    },
    [TOUCH_CONTROLS_KEY, mode] as const,
  );
}

export async function expectTouchControlsVisible(page: Page) {
  await expect
    .poll(
      async () =>
        page.evaluate(() => {
          type SceneProbe = {
            scene?: { isActive?: () => boolean };
            touchControls?: { isVisible?: () => boolean };
          };
          type GameProbe = {
            scene?: { getScene?: (key: string) => unknown };
          };
          const game = (window as Window & { __clockworkCanopyGame?: GameProbe }).__clockworkCanopyGame;
          const scene = game?.scene?.getScene?.("PlayScene") as SceneProbe | undefined;
          const active = scene?.scene?.isActive?.() ?? false;
          const visible = scene?.touchControls?.isVisible?.() ?? false;

          return active && visible ? "ready" : JSON.stringify({ active, visible });
        }),
      {
        message: "touch controls should be visible after touch-started gameplay",
        timeout: 15_000,
      },
    )
    .toBe("ready");
}

export async function expectSceneActive(page: Page, sceneKey: string) {
  await expect
    .poll(
      async () =>
        page.evaluate((key) => {
          type SceneProbe = {
            scene?: { isActive?: () => boolean };
          };
          type GameProbe = {
            scene?: { getScene?: (key: string) => unknown };
          };
          const game = (window as Window & { __clockworkCanopyGame?: GameProbe }).__clockworkCanopyGame;
          const scene = game?.scene?.getScene?.(key) as SceneProbe | undefined;

          return scene?.scene?.isActive?.() ? "ready" : "waiting";
        }, sceneKey),
      {
        message: `${sceneKey} should be active`,
        timeout: 15_000,
      },
    )
    .toBe("ready");
}

export async function tapCanvasPoint(page: Page, x: number, y: number) {
  const box = await page.locator("canvas").first().boundingBox();
  expect(box).not.toBeNull();

  await page.touchscreen.tap(
    box!.x + (x / GAME_WIDTH) * box!.width,
    box!.y + (y / GAME_HEIGHT) * box!.height,
  );
}

export async function expectCanvasFitsViewport(page: Page) {
  await expect
    .poll(
      async () =>
        page.locator("canvas").first().evaluate((canvas) => {
          const rect = canvas.getBoundingClientRect();
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
          const tolerance = 1;
          const fits =
            rect.width > 0 &&
            rect.height > 0 &&
            rect.left >= -tolerance &&
            rect.top >= -tolerance &&
            rect.right <= viewportWidth + tolerance &&
            rect.bottom <= viewportHeight + tolerance;

          return fits
            ? "ready"
            : JSON.stringify({
                bottom: rect.bottom,
                height: rect.height,
                left: rect.left,
                right: rect.right,
                top: rect.top,
                viewportHeight,
                viewportWidth,
                width: rect.width,
              });
        }),
      {
        message: "canvas should stay within the current viewport",
        timeout: 15_000,
      },
    )
    .toBe("ready");
}

export async function expectCanvasFrameChanges(page: Page) {
  const canvas = page.locator("canvas").first();
  const before = new Uint8Array(await canvas.screenshot());

  await expect
    .poll(
      async () => {
        await page.waitForTimeout(120);
        const after = new Uint8Array(await canvas.screenshot());
        const difference = countByteDifferences(before, after);
        return difference >= 64 ? "changed" : `${difference} byte differences`;
      },
      {
        message: "canvas pixels should change while gameplay input is held",
        timeout: 4_000,
      },
    )
    .toBe("changed");
}

export async function expectNonBlankCanvas(page: Page) {
  await expect
    .poll(
      async () => {
        const sample = await page.locator("canvas").first().evaluate(async (canvas) => {
          const element = canvas as HTMLCanvasElement;
          const width = element.width;
          const height = element.height;

          const emptySample: CanvasSample = {
            coloredPixels: 0,
            height,
            nonTransparentPixels: 0,
            uniqueColors: 0,
            width,
          };

          if (width < 64 || height < 64) {
            return emptySample;
          }

          await new Promise<void>((resolve) => {
            requestAnimationFrame(() => resolve());
          });

          const recordPixels = (pixels: Uint8ClampedArray | Uint8Array): CanvasSample => {
            const colors = new Set<string>();
            let coloredPixels = 0;
            let nonTransparentPixels = 0;
            const stride = Math.max(4, Math.floor(pixels.length / 4 / 256) * 4);

            for (let index = 0; index < pixels.length; index += stride) {
              const red = pixels[index] ?? 0;
              const green = pixels[index + 1] ?? 0;
              const blue = pixels[index + 2] ?? 0;
              const alpha = pixels[index + 3] ?? 0;

              if (alpha > 0) {
                nonTransparentPixels += 1;
              }

              if (alpha > 0 && red + green + blue > 0) {
                coloredPixels += 1;
              }

              colors.add(`${red},${green},${blue},${alpha}`);

              if (colors.size > 8 && nonTransparentPixels > 16 && coloredPixels > 0) {
                break;
              }
            }

            return {
              coloredPixels,
              height,
              nonTransparentPixels,
              uniqueColors: colors.size,
              width,
            };
          };

          try {
            const context2d = element.getContext("2d", { willReadFrequently: true });

            if (context2d) {
              return recordPixels(context2d.getImageData(0, 0, width, height).data);
            }
          } catch (error) {
            return { ...emptySample, readError: String(error) };
          }

          const gl =
            element.getContext("webgl2", { preserveDrawingBuffer: true }) ??
            element.getContext("webgl", { preserveDrawingBuffer: true });

          if (!gl) {
            return emptySample;
          }

          const pixels = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
          gl.readPixels(
            0,
            0,
            gl.drawingBufferWidth,
            gl.drawingBufferHeight,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            pixels,
          );

          return recordPixels(pixels);
        });

        return sample.width >= 64 &&
          sample.height >= 64 &&
          sample.nonTransparentPixels > 0 &&
          (sample.uniqueColors > 1 || sample.coloredPixels > 0) &&
          !sample.readError
          ? "ready"
          : JSON.stringify(sample);
      },
      {
        message: "canvas should have visible pixels after Phaser boots",
        timeout: 15_000,
      },
    )
    .toBe("ready");
}

function countByteDifferences(a: Uint8Array, b: Uint8Array): number {
  const length = Math.min(a.length, b.length);
  let differences = Math.abs(a.length - b.length);

  for (let index = 0; index < length; index += 1) {
    if (a[index] !== b[index]) {
      differences += 1;
    }
  }

  return differences;
}
