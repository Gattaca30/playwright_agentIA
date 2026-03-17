// spec: specs/codemify_homepage_test_plan.md
// test: Navigation menu displays all expected menu items

import { test, expect } from "@playwright/test";

test.describe("Header Navigation and Mobile Menu", () => {
  test("Navigation menu displays all expected menu items", async ({ page }) => {
    // Navigate to the Codemify homepage
    await page.goto("https://codemify.com/");

    // Verify all navigation menu items are displayed in the header banner
    const headerNav = page.getByRole("banner").first();
    await expect(
      headerNav.getByRole("link", { name: "About us" }).first(),
    ).toBeVisible();
    await expect(
      headerNav.getByRole("link", { name: "QA Courses" }).first(),
    ).toBeVisible();
    await expect(
      headerNav.getByRole("link", { name: "Call Experts" }).first(),
    ).toBeVisible();
    await expect(
      headerNav.getByRole("link", { name: "AI Courses" }).first(),
    ).toBeVisible();
    await expect(
      headerNav.getByRole("link", { name: "Offers" }).first(),
    ).toBeVisible();
    await expect(
      headerNav.getByRole("link", { name: "Reviews" }).first(),
    ).toBeVisible();
    await expect(
      headerNav.getByRole("link", { name: "Try intro week" }).first(),
    ).toBeVisible();

    // Verify the Codemify logo link is visible in the header
    const logoLink = page.locator("a[href='/']").first();
    await expect(logoLink).toBeVisible();
  });
});
