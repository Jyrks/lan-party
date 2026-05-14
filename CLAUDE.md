# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static HTML/CSS/JavaScript countdown timer for a LAN party event. Three files,
no build process:
- `index.html` — markup for the countdown (a "Space Mission Control" HUD)
- `style.css` — all styling
- `script.js` — the countdown logic

## Event Configuration

The event date/time is the `TARGET` constant in `script.js` (top of file):
```javascript
const TARGET = new Date('2026-10-10T12:00:00+03:00');
```
The human-readable date is also shown in `index.html` inside the `.t8-window`
"LAUNCH WINDOW" line. When changing the event, update both.

## Design System

The design is a sci-fi mission-control HUD:
- Background: deep space `#03060d` with a radial glow and a starfield (`.t8-stars`)
- Primary accent: cyan `#5fc8ff`; "go"/positive accent: green `#2bff88`; alert: `#ff5a5a`
- Font: `'Chakra Petch'` (loaded via `@import` in `style.css`)
- Layout: a bordered `.t8-hud` panel containing a topbar, an animated orbit
  graphic, the `T-MINUS` readout (4 `.t8-seg` cells), the launch-window line,
  and a telemetry footer
- Animations: `t8spin` (orbit rings + satellite), `t8blink` (the REC indicator)

The countdown cells use `data-field="days|hours|minutes|seconds"` — `script.js`
finds these by attribute, so markup and script stay decoupled. The
countdown-finished message lives in the `[data-ended]` element and is revealed
by the `.t8-root.is-ended` class, which `script.js` toggles.

## Testing

- Open `index.html` directly in a browser — no server needed.
- To test the "countdown ended" state, temporarily set `TARGET` in `script.js`
  to a past date, or add the `is-ended` class to `.t8-root` in DevTools.

## Deployment

Static site — host anywhere (GitHub Pages, Netlify, etc.). No build step. The
`CNAME` file configures the GitHub Pages custom domain.
