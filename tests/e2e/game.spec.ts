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
    await expectNonBlankCanvas(page);

    await expectSceneActive(page, "MenuScene");
    await tapCanvasPoint(page, 480, 374);
    await expectSceneActive(page, "PlayScene");
    await expectTouchControlsVisible(page);

    expect(errors).toEqual([]);
  });
});
