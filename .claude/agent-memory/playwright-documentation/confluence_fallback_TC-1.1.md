---
name: Confluence Fallback — TC-1.1 Navigation Menu
description: Full Confluence-ready page content for TC-1.1, stored as fallback because Confluence is not activated on the Atlassian site
type: project
---

# Header Navigation and Mobile Menu — Playwright Test Documentation — 2026-03-13

## Overview

| Field | Value |
|-------|-------|
| Feature | Header Navigation and Mobile Menu |
| Test Suite | Section 1.1 — Navigation menu displays all expected menu items |
| Application | Codemify (https://codemify.com) |
| Framework | Playwright |
| Created Date | 2026-03-13 |
| Jira Reference | [TEST-1](https://fifalianaangela.atlassian.net/browse/TEST-1) |
| Status | Draft / Ready for Review |

---

## Scope

This test suite validates that the Codemify homepage header renders correctly. Specifically, it confirms that the Codemify logo is visible and that all expected top-level navigation menu items are displayed in the header. This is a smoke-level check executed on every build to catch regressions in the global navigation component.

---

## Test Environment

- **Browser(s)**: Chromium (default Playwright browser)
- **Base URL**: https://codemify.com
- **Environment**: Production (publicly accessible)
- **Viewport**: Standard desktop

---

## Preconditions

1. The Codemify application is accessible at https://codemify.com
2. No user authentication is required for this test
3. The test is run on a supported browser with a standard desktop viewport

---

## Test Cases

---

### Test Case TC-1.1: Navigation menu displays all expected menu items

**Objective**: Verify that the Codemify homepage header displays the Codemify logo and all expected navigation menu items.

**Preconditions**:
- The Codemify website is reachable at https://codemify.com
- No login is required

**Test Data**: None required. The test operates on the publicly accessible homepage.

**Steps**:

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Open a browser and navigate to https://codemify.com | The page loads successfully and the header section is visible on screen |
| 2 | Inspect the header navigation menu | All of the following menu items are displayed in the navigation bar: **About us**, **QA Courses**, **Call Experts**, **AI Courses**, **Offers**, **Reviews**, **Try intro week** |
| 3 | Inspect the header area for the site logo | The Codemify logo is visible in the header |

**Expected Result**: The homepage loads without errors, the header is visible, all 7 navigation menu items are present, and the Codemify logo is displayed.

**Tags / Labels**: `playwright`, `automated-test`, `header-navigation`, `smoke-test`

**Priority**: High

---

## Test Data

No specific test data is required for this test suite. All assertions target publicly visible UI elements on the Codemify homepage.

---

## Known Limitations / Out of Scope

- Mobile menu behavior is not covered in this section (covered in a separate test section)
- Link destinations for each menu item are not validated here
- Visual appearance (styling, colors, layout) is not asserted

---

## Test File Reference

| File | Purpose |
|------|---------|
| `tests/header/navigation-menu.spec.ts` | Main test specification for this suite |
| `tests/seed.spec.ts` | Seed/setup file used before test execution |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-13 | playwright-documentation agent | Initial creation |
