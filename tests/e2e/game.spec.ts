import { expect, test } from "@playwright/test";
import { bootGame, collectConsoleErrors, expectNonBlankCanvas } from "../setup";

test("game boots, renders a nonblank canvas, and responds to input", async ({ page }) => {
  const errors = collectConsoleErrors(page);

  await bootGame(page);
  await expect(page).toHaveTitle(/Clockwork Canopy/);
  await page.keyboard.press("Space");
  await page.waitForTimeout(700);
  await expectNonBlankCanvas(page);
  await page.keyboard.down("ArrowRight");
  await page.keyboard.press("Space");
  await page.waitForTimeout(250);
  await page.keyboard.up("ArrowRight");
  expect(errors).toEqual([]);
});
