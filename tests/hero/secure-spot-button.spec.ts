// spec: specs/codemify_homepage_test_plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Hero Section and Call-to-Action Elements", () => {
  test("Secure your spot CTA button links to checkout", async ({ page }) => {
    await page.goto("https://codemify.com/");

    const secureSpotButton = page.getByRole("link", {
      name: "Secure your spot",
    });

    // Verify: The button links to the checkout page
    const checkoutUrl =
      "https://courses.codemify.com/offers/2oZhogLF/checkout";
    await expect(secureSpotButton).toHaveAttribute("href", checkoutUrl);

    // Find and click the 'Secure your spot' button in the promotional offer section
    const popupPromise = page.context().waitForEvent("page");
    await secureSpotButton.click();

    // Verify: A new tab/page opens or user is taken to the checkout page
    const newPage = await popupPromise;
    expect(newPage.url()).toBe(checkoutUrl);
    await newPage.close();
  });
});
