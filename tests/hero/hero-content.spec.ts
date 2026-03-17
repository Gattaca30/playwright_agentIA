// spec: specs/codemify_homepage_test_plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Hero Section and Call-to-Action Elements", () => {
  test("Hero section displays correct content", async ({ page }) => {
    await page.goto("https://codemify.com/");

    // Observe the hero section at the top of the page
    // Verify: The hero section displays the heading 'START A NEW CAREER IN TECH'
    await expect(page.getByText("START A NEW CAREER IN TECH")).toBeVisible();

    // Verify: The description text is visible explaining the course benefits
    await expect(
      page.getByText(
        "Work on real-world projects in manual & automation testing, learn from QA industry experts with 10+ years of experience, and go through up to 136 rounds of interview preparation throughout the course."
      )
    ).toBeVisible();

    // Verify: A hero image is displayed
    const heroImage = page.locator("img").first();
    await expect(heroImage).toBeVisible();
  });
});
