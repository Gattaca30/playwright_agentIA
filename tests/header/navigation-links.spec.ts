// spec: specs/codemify_homepage_test_plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Header Navigation and Mobile Menu", () => {
  test("Navigation links navigate to correct pages", async ({ page }) => {
    // Navigate to the homepage
    await page.goto("https://codemify.com/");

    // 1. Click on 'About us' link
    await page
      .locator("#rec1797674941")
      .getByRole("link", { name: "About us" })
      .click();
    await new Promise((f) => setTimeout(f, 2 * 1000));

    // Verify: The page navigates to the About Us page (URL contains /about-us)
    expect(page.url()).toContain("/about-us");

    // 2. Navigate back to homepage and click 'Call Experts' link
    await page.keyboard.press("Alt+ArrowLeft");
    await new Promise((f) => setTimeout(f, 2 * 1000));

    await page
      .locator("#rec1471461071")
      .getByRole("link", { name: "Call Experts" })
      .click();
    await new Promise((f) => setTimeout(f, 2 * 1000));

    // Verify: The page navigates to the Call Experts page (URL contains /meeting_expert)
    expect(page.url()).toContain("/meeting_expert");

    // 3. Navigate back to homepage and click 'Reviews' link
    await page.goto("https://codemify.com/");
    await new Promise((f) => setTimeout(f, 2 * 1000));

    await page
      .locator("#rec1797674941")
      .getByRole("link", { name: "Reviews" })
      .click();
    await new Promise((f) => setTimeout(f, 2 * 1000));

    // Verify: The page navigates to the testimonials page (URL contains /testimonials)
    expect(page.url()).toContain("/testimonials");
  });
});
