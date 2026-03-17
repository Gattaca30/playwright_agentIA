// spec: specs/codemify_homepage_test_plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Hero Section and Call-to-Action Elements", () => {
  test("Start Here button in hero section navigates to correct section", async ({
    page,
  }) => {
    await page.goto("https://codemify.com/");

    // Scroll to the hero section and click the 'Start Here' button
    await page.getByRole("link", { name: "Start Here" }).click();

    // Verify: The page scrolls to or navigates to the #start section
    // Verify: The URL updates to include #start
    expect(page.url()).toContain("#start");
  });
});
