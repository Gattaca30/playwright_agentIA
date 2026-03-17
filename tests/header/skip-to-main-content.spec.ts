// spec: specs/codemify_homepage_test_plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Header Navigation and Mobile Menu", () => {
  test("Skip to main content link works", async ({ page }) => {
    await page.goto("https://codemify.com/");

    // Press Tab to focus on the skip link, then press Enter
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");

    // Verify: The page scrolls to the main content area (element with id 't-main-content')
    expect(page.url()).toContain("#t-main-content");
  });
});
