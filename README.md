# playwright-agentIA

End-to-end automated test suite for [Codemify](https://codemify.com), an online QA engineering training platform.
This project combines **Playwright** for test automation and **Claude Code** with an AI agent to automatically generate test plan documentation to Jira and Confluence.
---

## Table of Contents
1. [Prerequisites](#1-prerequisites)
2. [Project Setup](#2-project-setup)
3. [Running Playwright Tests](#3-running-playwright-tests)
4. [Installing Claude Code](#4-installing-claude-code)
5. [Atlassian MCP Configuration](#5-atlassian-mcp-configuration)
6. [Project Structure](#6-project-structure)
7. [Playwright Configuration](#7-playwright-configuration)
---

## 1. Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher
- An [Atlassian](https://www.atlassian.com/) account with access to Jira and Confluence
- An [Anthropic](https://www.anthropic.com/) account for Claude Code
---

## 2. Project Setup

### Clone the repository
```bash
git clone <repo-url>
cd playwright-agentIA
```

### Install dependencies
```bash
npm install
```

### Install Playwright browsers

```bash
npx playwright install
```
---

## 3. Running Playwright Tests

### All tests
```bash
npx playwright test
```

### A specific test file
```bash
npx playwright test tests/header/navigation-menu.spec.ts
```

### Via npm scripts
```bash
# Navigation menu tests
npm run test:nav-menu

# Navigation links tests
npm run test:nav-links
```

### View the HTML report
After running the tests, an HTML report is generated automatically.

```bash
npx playwright show-report
```
---

## 4. Installing Claude Code
Claude Code is Anthropic's official CLI. It is installed via npm.

### Linux
```bash
npm install -g @anthropic-ai/claude-code
```

Verify the installation:
```bash
claude --version
```
Launch Claude Code inside the project:
```bash
cd playwright-agentIA
claude
```

### Windows

On Windows, use **PowerShell** or **Git Bash**:

```bash
npm install -g @anthropic-ai/claude-code
```

> If the npm global directory is not in your PATH, add `%APPDATA%\npm` to your system environment variables.

Verify the installation:

```bash
claude --version
```

Launch Claude Code:

```bash
cd playwright-agentIA
claude
```

> **Recommendation**: On Windows, using WSL2 (Windows Subsystem for Linux) is recommended for better compatibility.

### Authentication

On first launch, Claude Code will prompt for an Anthropic API key. You can also export it in your shell before starting Claude:

```bash
# Linux / macOS
export ANTHROPIC_API_KEY=sk-ant-...

# Windows (PowerShell)
$env:ANTHROPIC_API_KEY="sk-ant-..."
```

---

## 5. Atlassian MCP Configuration

The Atlassian MCP (Model Context Protocol) allows Claude Code to create Jira tickets and Confluence pages directly from the terminal.

### Add the Atlassian MCP server

```bash
claude mcp add --transport http atlassian https://mcp.atlassian.com/v1/mcp
```

### Generate an Atlassian API token

1. Go to [https://id.atlassian.com/manage-profile/security/api-tokens](https://id.atlassian.com/manage-profile/security/api-tokens)
2. Click **Create API token**
3. Copy the generated token

### Configure the MCP in Claude Code
Add the MCP configuration to `~/.claude/settings.json` (global) or `.claude/settings.json` at the project root (local):

```json
{
  "mcpServers": {
    "atlassian": {
      "command": "mcp-server-atlassian",
      "env": {
        "ATLASSIAN_SITE_NAME": "your-site",
        "ATLASSIAN_USER_EMAIL": "your@email.com",
        "ATLASSIAN_API_TOKEN": "your-api-token"
      }
    }
  }
}
```

### Verify the connection
Inside Claude Code, type `/mcp` to list available servers and their connection status.

### Project MCP permissions
The `.claude/settings.local.json` file defines the MCP permissions allowed for this project:

```json
{
  "permissions": {
    "allow": [
      "mcp__atlassian__getVisibleJiraProjects",
      "mcp__atlassian__createJiraIssue",
      "mcp__atlassian__getConfluenceSpaces",
      "mcp__atlassian__createConfluencePage"
    ]
  }
}
```
---

## 6. Project Structure
```
playwright-agentIA/
├── .claude/
│   ├── agents/
│   │   └── playwright-documentation.md     # AI agent definition
│   ├── agent-memory/
│   │   └── playwright-documentation/       # Agent persistent memory
│   └── settings.local.json                 # Project MCP permissions
├── tests/
│   ├── header/
│   │   ├── navigation-menu.spec.ts         # Main navigation menu
│   │   ├── navigation-links.spec.ts        # Navigation links
│   │   ├── qa-courses-submenu.spec.ts      # QA Courses submenu
│   │   ├── ai-courses-submenu.spec.ts      # AI Courses submenu
│   │   ├── mobile-menu-toggle.spec.ts      # Mobile menu
│   │   ├── skip-to-main-content.spec.ts    # Accessibility
│   │   ├── intro-week-link.spec.ts         # Intro Week link
│   │   └── offers-submenu.spec.ts          # Offers submenu
│   ├── hero/
│   │   ├── hero-content.spec.ts            # Hero section content
│   │   ├── promotional-offer.spec.ts       # Promotional offer
│   │   ├── secure-spot-button.spec.ts      # Secure Spot button
│   │   └── start-here-button.spec.ts       # Start Here button
│   ├── courses/
│   │   └── courses-display.spec.ts         # Courses display
│   └── seed.spec.ts                        # Seed file
├── playwright.config.ts                    # Playwright configuration
└── package.json
```

---

## 7. Playwright Configuration

Configuration is located in [playwright.config.ts](playwright.config.ts).

| Option | Value |
|--------|-------|
| Browser | Chromium (Desktop Chrome) |
| Parallelism | Enabled |
| Reporter | HTML |
| Traces | Enabled on first retry |
| Retries | 2 (CI only) |
| Workers | 1 (CI), auto locally |
