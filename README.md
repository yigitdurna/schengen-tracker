# Schengen Tracker

A privacy-focused Progressive Web App (PWA) to help you track your days in the Schengen area according to the 90/180-day rule.

## Features

- **Smart Tracking**: Automatically calculates your used days and remaining allowance based on the rolling 180-day window.
- **Dashboard & Trips**: Switch between a main dashboard and a detailed list of your trips.
- **Regain Logic**: Tells you exactly when and how many days you will regain availability in the future.
- **Ongoing Trip Support**: If you are currently traveling, the app calculates the exact date you must exit to stay within the limit.
- **Edit Functionality**: Easily edit dates or names of existing trips.
- **Privacy First**: All data is stored locally on your device. No servers, no tracking.
- **Offline Capable**: Works fully offline once loaded. Installable as an app on your home screen.
- **Data Management**: Import and export your trip data (JSON for backup, CSV for analysis).
- **iOS Design**: Clean, dark-mode interface designed to feel native on iOS.

## How to Use

1. **Dashboard**:
   - **Status**: Check your "Days Remaining" and see when you will regain days.
   - **Add Trip**: Tap dates on the calendar or enter them manually.
   - **Ongoing Trips**: If you don't enter an exit date, the app shows you the "Must Exit By" date.

2. **Trips Tab**:
   - View a list of all your past and current trips.
   - **Edit**: Tap "Edit" to modify a trip's details.
   - **Delete**: Remove trips you no longer need.

3. **Manage Data**:
   - **Export**: Save your data as JSON (backup) or CSV (spreadsheet).
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
