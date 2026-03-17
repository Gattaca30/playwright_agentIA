---
name: Codemify Project Context
description: Application under test details, test project structure, and team conventions for the Codemify Playwright test suite
type: project
---

## Application

- **Name**: Codemify
- **URL**: https://codemify.com
- **Type**: Online QA engineering course platform
- **Access**: Publicly accessible (no auth required for homepage tests)

## Test Suite Structure

- **Test files location**: `tests/`
- **Seed file**: `tests/seed.spec.ts`
- **Header tests**: `tests/header/navigation-menu.spec.ts`
- **Navigation link tests**: `tests/header/navigation-links.spec.ts`
- **QA Courses submenu tests**: `tests/header/qa-courses-submenu.spec.ts`
- **AI Courses submenu tests**: `tests/header/ai-courses-submenu.spec.ts`

## Test Plan Sections Documented

| Section | Title | Jira Key | Date |
|---------|-------|----------|------|
| 1.1 | Navigation menu displays all expected menu items | TEST-1 | 2026-03-13 |
| 1.2 | Les liens de navigation redirigent vers les bonnes pages | TEST-2 | 2026-03-13 |
| 1.3 | Le sous-menu QA Courses s'affiche au clic | TEST-3 | 2026-03-13 |
| 1.4 | Le sous-menu AI Courses s'affiche au clic | TEST-5 | 2026-03-16 |

## Naming Conventions

- Test case IDs follow the pattern: TC-[section number] (e.g., TC-1.1)
- Jira summary format: `[TC-X.X] <descriptive title>`
- Confluence page title format: `[Feature Name] — Documentation des Tests Playwright TC-X.X — YYYY-MM-DD`

## Why: This is the project being built out as a Playwright test automation suite for a QA course platform. Test documentation is being created section by section.
## How to apply: When new test plan sections arrive, continue the TC-X.X numbering, use the TEST Jira project, and append new rows to the sections table above.
