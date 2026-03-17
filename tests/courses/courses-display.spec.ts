// spec: specs/codemify_homepage_test_plan.md
// seed: tests/seed.spec.ts

import { test, expect, Page } from "@playwright/test";

/**
 * Page Object for Courses Section
 * Encapsulates all interactions and verifications for the courses section
 */
class CoursesPage {
  constructor(private page: Page) {}

  /**
   * Get the "Our courses" section heading
   */
  getCoursesHeading() {
    return this.page.getByRole("heading", { name: "Our courses" });
  }

  /**
   * Get the Manual QA course title
   */
  getManualQACourseTitle() {
    return this.page.getByText("Manual QA", { exact: true });
  }

  /**
   * Get the Manual QA course description
   */
  getManualQACourseDescription() {
    return this.page.getByText(
      "The tester use their hands to open up websites and visually verify they work as expected.",
    );
  }

  /**
   * Get the Manual QA "Learn more" button
   */
  getManualQALearnMoreButton() {
    // "Learn more" buttons are <a> elements with role="button"
    return this.page.locator('a[role="button"]:has-text("Learn more")').first();
  }

  /**
   * Get the Automation QA course title
   */
  getAutomationQACourseTitle() {
    return this.page.getByText("Automation QA", { exact: true });
  }

  /**
   * Get the Automation QA course description
   */
  getAutomationQACourseDescription() {
    return this.page.getByText(
      "QA Engineers write code and use tools to automate manual tests like a pro.",
    );
  }

  /**
   * Get the Automation QA "Learn more" button
   */
  getAutomationQALearnMoreButton() {
    // Get the second "Learn more" button (Automation QA)
    return this.page.locator('a[role="button"]:has-text("Learn more")').last();
  }

  /**
   * Scroll to the courses section
   */
  async scrollToCoursesSection() {
    await this.page.evaluate(() => {
      const heading = Array.from(document.querySelectorAll("*")).find((el) =>
        el.textContent?.includes("Our courses"),
      );
      if (heading) {
        heading.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  /**
   * Verify that the courses section heading is visible
   */
  async verifyCoursesHeadingVisible() {
    await expect(this.getCoursesHeading()).toBeVisible();
  }

  /**
   * Verify that the Manual QA course card is displayed with all required elements
   */
  async verifyManualQACourseCardDisplayed() {
    await expect(this.getManualQACourseTitle()).toBeVisible();
    await expect(this.getManualQACourseDescription()).toBeVisible();
    await expect(this.getManualQALearnMoreButton()).toBeVisible();
  }

  /**
   * Verify that the Automation QA course card is displayed with all required elements
   */
  async verifyAutomationQACourseCardDisplayed() {
    await expect(this.getAutomationQACourseTitle()).toBeVisible();
    await expect(this.getAutomationQACourseDescription()).toBeVisible();
    await expect(this.getAutomationQALearnMoreButton()).toBeVisible();
  }
}

test.describe("Courses Section", () => {
  test("Courses section displays both course cards", async ({ page }) => {
    // Navigate to the Codemify homepage
    await page.goto("https://codemify.com/");

    const coursesPage = new CoursesPage(page);

    // 1. Scroll to the 'Our courses' section
    await coursesPage.scrollToCoursesSection();

    // expect: The section heading 'Our courses' is visible
    await coursesPage.verifyCoursesHeadingVisible();

    // expect: Manual QA course card is displayed with title, description, and 'Learn more' button
    await coursesPage.verifyManualQACourseCardDisplayed();

    // expect: Automation QA course card is displayed with title, description, and 'Learn more' button
    await coursesPage.verifyAutomationQACourseCardDisplayed();
  });
});
