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
