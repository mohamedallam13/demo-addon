# AGENT.md — demo-addon

## Purpose
A demo Google Docs Add-on. Minimal proof-of-concept showing how to register a sidebar in a Docs add-on.

## Structure
```
demo-addon/
├── README.md
├── AGENT.md
├── .gitignore
└── src/
    ├── appsscript.json   ← GAS manifest (add-on scopes, menu entries)
    ├── Code.js           ← server-side entry point
    └── Sidebar.html      ← sidebar UI
```

## Key Facts
- **Platform:** Google Apps Script, Docs Add-on
- **Entry point:** `Code.js` — registers menu and serves sidebar
- **No external dependencies**
- **Deploy via:** clasp + Apps Script editor

## Development Notes
- All source files live under `src/` and must be pushed with clasp from that directory
- `appsscript.json` must stay inside `src/` for clasp to pick it up
