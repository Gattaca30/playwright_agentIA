// spec: codemify_homepage_test_plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Header Navigation and Mobile Menu", () => {
  test("QA Courses dropdown/submenu appears when clicked", async ({ page }) => {
    // Navigate to homepage
    await page.goto("https://codemify.com/");

    // 1. Click on 'QA Courses' link in the header
    await page.getByRole("link", { name: "QA Courses" }).click();

    // Verify: A submenu or navigation to QA Courses section appears
    const qaCoursesMenu = page.getByRole("menuitem");
    await expect(qaCoursesMenu.first()).toBeVisible();

    // Verify: The submenu contains expected course options
    await expect(
      page.getByRole("menuitem", { name: "Schedule" }),
    ).toBeVisible();
    await expect(
      page.getByRole("menuitem", { name: "Manual QA Course" }),
    ).toBeVisible();
    await expect(
      page.getByRole("menuitem", { name: "Automation QA Course" }),
    ).toBeVisible();
    await expect(
      page.getByRole("menuitem", { name: "Master QA (Both)" }),
    ).toBeVisible();

    // Verify: The URL changes to include #submenu:QAcourses
    await expect(page).toHaveURL("https://codemify.com/#submenu:QAcourses");
  });
});
