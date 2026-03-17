// spec: specs/codemify_homepage_test_plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Hero Section and Call-to-Action Elements", () => {
  test("Promotional offer section displays correct information", async ({
    page,
  }) => {
    await page.goto("https://codemify.com/");

    // Locate the promotional offer section with the new group start date
    // Verify: The section displays 'New group starts January 31st'
    await expect(
      page.getByText("New group starts January 31st")
    ).toBeVisible();

    // Verify: The 'Secure your spot' button with discount messaging is visible
    await expect(
      page.getByRole("link", { name: "Secure your spot" })
    ).toBeVisible();

    await expect(
      page.getByText("Hurry up to secure your spot with a discount!")
    ).toBeVisible();
  });
});
