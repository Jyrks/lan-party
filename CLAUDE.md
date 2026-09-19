# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static HTML/CSS/JavaScript countdown timer for a Smite 2 LAN party. Three
files, no build process:
- `index.html` — markup for the countdown
- `style.css` — all styling
- `script.js` — the countdown logic

## Event Configuration

The event date/time is the `TARGET` constant in `script.js` (top of file):
```javascript
const TARGET = new Date('2026-10-10T12:00:00+03:00');
```
The human-readable date is also shown in `index.html` in the `.s2-when`
paragraph. When changing the event, update both.

## Design System

The layout is built on the Conquest mid lane: a single diagonal running from the
Order base (lapis, lower left) to the Chaos base (ember, upper right), with the
countdown sitting on it and the flanks left as dark jungle. The diagonal is the
only decoration — everything else stays flat and quiet.

- Palette: `--ink` jungle ground, `--lapis` Order, `--gold` seam and digits,
  `--ember` Chaos, `--malachite` live state, `--limestone` text
- Type: `Big Shoulders Display` for digits and headlines, `Instrument Sans` for
  everything else (both loaded via `<link>` in `index.html`)
- Lane geometry: `.s2-lane-band` and `.s2-lane-seam`, both rotated by the
  `--lane-angle` custom property (steeper on narrow screens). The seam is masked
  out across the middle so the lane reads as passing behind the countdown.
- Motion: the four countdown slots lock in sequentially on load (`s2-lock`) and
  the lobby dot pulses (`s2-pulse`). Both are disabled under
  `prefers-reduced-motion`.

The countdown cells use `data-field="days|hours|minutes|seconds"` — `script.js`
finds these by attribute, so markup and script stay decoupled. The
countdown-finished message lives in the `[data-ended]` element and is revealed
by the `.s2-root.is-ended` class, which `script.js` toggles; that same class
swaps the rail from "Lobby open" to "Match live".

## Testing

- Open `index.html` directly in a browser — no server needed.
- To test the "countdown ended" state, temporarily set `TARGET` in `script.js`
  to a past date, or add the `is-ended` class to `.s2-root` in DevTools.

## Deployment

Static site — host anywhere (GitHub Pages, Netlify, etc.). No build step. The
`CNAME` file configures the GitHub Pages custom domain.
