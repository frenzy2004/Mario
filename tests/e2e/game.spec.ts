import { expect, test } from "@playwright/test";
import {
  bootGame,
  collectConsoleErrors,
  expectCanvasFitsViewport,
  expectCanvasFrameChanges,
  expectNonBlankCanvas,
  expectSceneActive,
  expectTouchControlsVisible,
  seedGameSettings,
  seedTouchControlsMode,
  tapCanvasPoint,
} from "../setup";

test("game boots, renders a nonblank moving canvas, and responds to input without console errors", async ({
  page,
}) => {
  const errors = collectConsoleErrors(page);

  await bootGame(page);
  await expect(page).toHaveTitle(/Clockwork Canopy/);
  await expectCanvasFitsViewport(page);
  await expectSceneActive(page, "MenuScene");
  await page.keyboard.press("Space");
  await expectSceneActive(page, "PlayScene");
  await page.waitForTimeout(700);
  await expectNonBlankCanvas(page);
  await page.keyboard.down("ArrowRight");
  try {
    await page.keyboard.press("Space");
    await expectCanvasFrameChanges(page);
  } finally {
    await page.keyboard.up("ArrowRight");
  }
  expect(errors).toEqual([]);
});

test("world map opens from the menu and lazy-loads gameplay", async ({ page }) => {
  const errors = collectConsoleErrors(page);

  await bootGame(page);
  await expectSceneActive(page, "MenuScene");
  await page.keyboard.press("M");
  await expectSceneActive(page, "WorldMapScene");
  await page.keyboard.press("Enter");
  await expectSceneActive(page, "PlayScene");
  await expectNonBlankCanvas(page);

  expect(errors).toEqual([]);
});

test("map-launched level keeps map return state after pause restart", async ({ page }) => {
  const errors = collectConsoleErrors(page);

  await bootGame(page);
  await expectSceneActive(page, "MenuScene");
  await page.keyboard.press("Space");
  await expectSceneActive(page, "PlayScene");
  await page.evaluate(() => {
    type SceneController = {
      restart?: (data?: unknown) => void;
    };
    type SceneProbe = {
      scene?: SceneController;
    };
    type GameProbe = {
      scene?: { getScene?: (key: string) => unknown };
    };
    const game = (window as Window & { __clockworkCanopyGame?: GameProbe }).__clockworkCanopyGame;
    const playScene = game?.scene?.getScene?.("PlayScene") as SceneProbe | undefined;
    playScene?.scene?.restart?.({ levelIndex: 0, returnScene: "WorldMapScene" });
  });
  await expectSceneActive(page, "PlayScene");
  await expect
    .poll(() =>
      page.evaluate(() => {
        type GameProbe = {
          registry?: { get?: (key: string) => unknown };
        };
        return (window as Window & { __clockworkCanopyGame?: GameProbe }).__clockworkCanopyGame?.registry?.get?.(
          "currentReturnScene",
        );
      }),
    )
    .toBe("WorldMapScene");
  await page.keyboard.press("Escape");
  await expectSceneActive(page, "PauseScene");
  await page.keyboard.press("R");
  await expectSceneActive(page, "PlayScene");
  await expect
    .poll(() =>
      page.evaluate(() => {
        type GameProbe = {
          registry?: { get?: (key: string) => unknown };
        };
        return (window as Window & { __clockworkCanopyGame?: GameProbe }).__clockworkCanopyGame?.registry?.get?.(
          "currentReturnScene",
        );
      }),
    )
    .toBe("WorldMapScene");

  expect(errors).toEqual([]);
});

test.describe("mobile reduced-motion smoke", () => {
  test.use({
    hasTouch: true,
    isMobile: true,
    viewport: { width: 390, height: 844 },
  });

  test("boots in a mobile viewport with reduced-motion and touch settings without console errors", async ({
    page,
  }) => {
    const errors = collectConsoleErrors(page);

    await page.emulateMedia({ reducedMotion: "reduce" });
    await seedTouchControlsMode(page, "on");
    await seedGameSettings(page, {
      volume: 0,
      reduceShake: true,
      reducedMotion: true,
      motionLevel: "minimal",
      screenShake: false,
      touchControls: "on",
    });
    await bootGame(page);
    await expect(page.evaluate(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches)).resolves.toBe(
      true,
    );
    await expectCanvasFitsViewport(page);
    await expect
      .poll(
        () => page.locator("canvas").first().evaluate((canvas) => canvas.getBoundingClientRect().top),
        { message: "portrait mobile canvas should stay near the top edge" },
      )
      .toBeLessThanOrEqual(24);
    await expectNonBlankCanvas(page);

    await expectSceneActive(page, "MenuScene");
    await tapCanvasPoint(page, 480, 374);
    await expectSceneActive(page, "PlayScene");
    await expectTouchControlsVisible(page);

    expect(errors).toEqual([]);
  });
});
