# Schengen Tracker

A privacy-focused Progressive Web App (PWA) to help you track your days in the Schengen area according to the 90/180-day rule.

## Features

- **Smart Tracking**: Automatically calculates your used days and remaining allowance based on the rolling 180-day window.
- **Regain Logic**: Tells you exactly when and how many days you will regain availability in the future.
- **Privacy First**: All data is stored locally on your device. No servers, no tracking.
- **Offline Capable**: Works fully offline once loaded. Installable as an app on your home screen.
- **Data Management**: Import and export your trip data (JSON for backup, CSV for analysis).
- **iOS Design**: Clean, dark-mode interface designed to feel native on iOS.

## How to Use

1. **Add a Trip**:
   - Tap the **Calendar** to select your entry date.
   - Tap again to select your exit date (or leave it open for ongoing trips).
   - Click **Add Trip**.

2. **Check Status**:
   - The top card shows your **Days Remaining**.
   - If you are nearing or over the limit, it will tell you when you can re-enter.

3. **Manage Data**:
   - Scroll down to the **Data Management** section.
   - **Export**: Save your data as JSON or CSV.
   - **Import**: Restore data from a JSON file.

## Installation

### iOS (iPhone/iPad)
1. Open the site in **Safari**.
2. Tap the **Share** button (square with arrow up).
3. Scroll down and tap **Add to Home Screen**.

### Android
1. Open the site in **Chrome**.
2. Tap the menu (three dots).
3. Tap **Install App** or **Add to Home Screen**.

## Development

This is a single-file web app (`index.html`) with no build process required.

- `index.html`: Contains all HTML, CSS, and JavaScript.
- `manifest.json`: PWA metadata.
- `sw.js`: Service Worker for offline support.
- `icon.png`: App icon.

To test locally, serve the directory with a static file server:
```bash
python3 -m http.server
```
Then open `http://localhost:8000` in your browser.
