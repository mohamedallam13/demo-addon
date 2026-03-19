# Demo Addon — Google Docs Add-on

A minimal proof-of-concept Google Docs Add-on demonstrating how to register a custom menu and render a sidebar using the Apps Script HTML Service.

![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=flat&logo=google&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-Google%20Docs-blue)

---

## Overview

This project is a reference scaffold for building Google Docs Add-ons with Apps Script. It covers:

- Registering a custom menu via `onOpen()`
- Serving an HTML sidebar using `HtmlService`
- Two-way communication between the sidebar and server-side GAS functions via `google.script.run`

---

## Features

- Custom menu entry injected into Google Docs on open
- HTML sidebar served from `Sidebar.html`
- Client-to-server calls via `google.script.run`

---

## Tech Stack

| Layer    | Technology              |
|----------|-------------------------|
| Platform | Google Apps Script      |
| UI       | HTML5, CSS3, JavaScript |
| Host App | Google Docs             |
| Deploy   | clasp CLI               |

---

## Project Structure

```
demo-addon/
├── README.md
├── AGENT.md
├── .gitignore
└── src/
    ├── appsscript.json   # GAS manifest — add-on scopes
    ├── Code.js           # Server-side: onOpen(), showSidebar()
    └── Sidebar.html      # Sidebar UI
```

---

## Getting Started

### Prerequisites

- A Google account with Google Apps Script access
- [clasp](https://github.com/google/clasp) installed globally

```bash
npm install -g @google/clasp
clasp login
```

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedallam13/demo-addon.git
   cd demo-addon
   ```

2. Create and link an Apps Script project:
   ```bash
   clasp create --type docs --title "Demo Addon" --rootDir src
   ```

3. Push source files:
   ```bash
   clasp push
   ```

---

## Deployment

1. In the Apps Script editor, go to **Deploy > Test deployments**
2. Select **Google Docs** as the host application
3. Open a Google Doc — the custom menu will appear after reload

---

## Author

**Mohamed Allam** — [GitHub](https://github.com/mohamedallam13) · [Email](mailto:mohamedallam.tu@gmail.com)
