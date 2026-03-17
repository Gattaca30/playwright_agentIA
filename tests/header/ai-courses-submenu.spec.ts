// spec: specs/codemify_homepage_test_plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Header Navigation and Mobile Menu", () => {
  test("AI Courses submenu appears when clicked", async ({ page }) => {
    // Navigate to the Codemify homepage
    await page.goto("https://codemify.com/");

    // Click on 'AI Courses' link in the header
    await page.getByRole("link", { name: "AI Courses" }).click();

    // Verify a submenu or navigation to AI Courses section appears
    await expect(page.getByRole("menu")).toBeVisible();

    // Verify the submenu contains expected items
    await expect(
      page.getByRole("menuitem", { name: "Schedule" }),
    ).toBeVisible();
    await expect(
      page.getByRole("menuitem", { name: "Machine Learning" }),
    ).toBeVisible();
    await expect(
      page.getByRole("menuitem", { name: "Deep Learning" }),
    ).toBeVisible();
    await expect(
      page.getByRole("menuitem", { name: "AI Engineering" }),
    ).toBeVisible();

    // Verify the URL changes to include #submenu:MLcourses
    await expect(page).toHaveURL(/.*#submenu:MLcourses/);
  });
});
