// spec: specs/codemify_homepage_test_plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Header Navigation and Mobile Menu", () => {
  test("Mobile menu toggle opens and closes", async ({ page }) => {
    // Navigate to the homepage
    await page.goto("https://codemify.com/");

    // Set viewport to mobile size to ensure mobile menu is visible
    await page.setViewportSize({ width: 375, height: 667 });

    // 1. Resize the browser to mobile view (or locate the mobile menu toggle button)
    // Verify the mobile menu toggle button becomes visible on smaller screens
    const menuToggle = page.locator('a[href="#menuopen"]');
    await expect(menuToggle).toBeVisible();

    // 2. Click on the mobile menu toggle button
    await menuToggle.click();

    // Wait for the mobile menu to open by checking for the overlay
    const mobileMenuOverlay = page.locator("div.t450__overlay");
    await expect(mobileMenuOverlay).toHaveClass(/t450__menu_show/);

    // Expect: A 'Close menu' button appears
    const closeMenuButton = page.getByRole("button", { name: "Close menu" });
    await expect(closeMenuButton).toBeVisible();

    // Expect: The mobile menu opens and displays all navigation items
    // Target the mobile menu using the nav with class t450__menu
    const mobileNav = page.locator("nav.t450__menu");

    // Check for main menu items (those with class t450__list_item)
    // All items are links (A elements), including those with empty hrefs
    await expect(
      mobileNav.locator('li.t450__list_item a[href="/about-us"]'),
    ).toBeVisible();
    await expect(
      mobileNav.locator("li.t450__list_item").filter({ hasText: "QA Courses" }),
    ).toBeVisible();
    await expect(
      mobileNav.locator("li.t450__list_item").filter({ hasText: "AI Courses" }),
    ).toBeVisible();
    await expect(
      mobileNav.locator('li.t450__list_item a[href="/meeting_expert"]'),
    ).toBeVisible();
    await expect(
      mobileNav.locator("li.t450__list_item").filter({ hasText: "Offers" }),
    ).toBeVisible();
    await expect(
      mobileNav.locator('li.t450__list_item a[href="/testimonials"]'),
    ).toBeVisible();

    // 3. Click on 'Close menu' button
    await closeMenuButton.click();

    // Expect: The mobile menu closes (overlay should not have t450__menu_show class)
    await expect(mobileMenuOverlay).not.toHaveClass(/t450__menu_show/);

    // Expect: The mobile menu toggle button remains visible
    await expect(menuToggle).toBeVisible();
  });
});
