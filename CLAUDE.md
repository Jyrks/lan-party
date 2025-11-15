# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML/CSS/JavaScript countdown timer for a LAN party event. The project consists of three files:
- `index.html` - Main HTML structure
- `style.css` - Styling with cyberpunk/gaming aesthetic (green glowing text, scanlines, glitch effects)
- `script.js` - Countdown logic and interactive effects

## Event Configuration

The LAN party date/time is configured in `script.js:4`:
```javascript
const targetDate = new Date('2025-12-13T12:00:00+02:00');
```

The event date is also displayed in `index.html:38`. When changing the event date, update both locations.

## Design System

The current design uses a cyberpunk/retro gaming aesthetic:
- Primary color: `#00ff41` (terminal green)
- Accent colors: `#ff00de` (magenta), `#00f0ff` (cyan)
- Font: `'Courier New', monospace`
- Effects: glitch animations, scanlines, glowing text shadows, pixel decorations

When updating the design, maintain consistency across:
1. Text shadows and glows (used for the title and countdown numbers)
2. Border and box-shadow colors on `.countdown-box` and `.container`
3. Animation timings (currently 2-3s for most effects)
4. The glitch effect on the title (uses `::before` and `::after` pseudo-elements)

## Testing

To test the countdown timer locally:
1. Open `index.html` in a web browser
2. To test the "countdown ended" state, temporarily modify `script.js:4` to set `targetDate` to a past date

## Deployment

This is a static site that can be hosted anywhere (GitHub Pages, Netlify, etc.). No build process is required.
