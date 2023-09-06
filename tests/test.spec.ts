import { test, expect } from "@playwright/test";

test.describe.serial('Game Tests', () => {

  test("Verify game loads and has correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle('The Platform Platform Game');
  });

});