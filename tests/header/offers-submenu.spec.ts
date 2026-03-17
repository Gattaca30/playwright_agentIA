// spec: specs/codemify_homepage_test_plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Header Navigation and Mobile Menu", () => {
  test("Offers submenu appears when clicked", async ({ page }) => {
    // Navigate to the homepage
    await page.goto("https://codemify.com/");

    // 1. Click on 'Offers' link in the header
    await page.getByRole("link", { name: "Offers" }).click();

    // Verify: A submenu or navigation to Offers section appears
    await expect(page.getByRole("menu")).toBeVisible();
    await expect(
      page.getByRole("menuitem", { name: "Early Booking" }),
    ).toBeVisible();
    await expect(
      page.getByRole("menuitem", { name: "Affiliates" }),
    ).toBeVisible();
    await expect(
      page.getByRole("menuitem", { name: "Pre-Book your spot" }),
    ).toBeVisible();

    // Verify: The URL changes to include #submenu:offers
    await expect(page).toHaveURL(/#submenu:offers/);
  });
});
