// spec: specs/codemify_homepage_test_plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Header Navigation and Mobile Menu", () => {
  test("Try intro week link navigates correctly", async ({ page, context }) => {
    // Navigate to homepage
    await page.goto("https://codemify.com/");

    // 1. Click on 'Try intro week' link in the header
    const newPagePromise = context.waitForEvent("page");
    await page.locator('#rec1797674941').getByRole('link', { name: 'Try intro week' }).click();
    const newPage = await newPagePromise;

    // expect: The page navigates to the Intro Week page (URL contains /intro-week)
    await expect(newPage).toHaveURL(/\/intro-week/);
  });
});
