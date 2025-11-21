# Schengen Tracker

A privacy-focused Progressive Web App (PWA) to help you track your days in the Schengen area according to the 90/180-day rule.

## Features

### Core Functionality
- **Smart Tracking**: Automatically calculates your used days and remaining allowance based on the rolling 180-day window
- **Visual Color Coding**: Days remaining display changes color dynamically:
  - 🟢 Green (60-90 days) - Plenty of time
  - 🟠 Orange (30-59 days) - Getting low
  - 🔴 Red (10-29 days) - Running low
  - 🔴 Dark Red (0-9 days) - Critical
- **Interactive Calendar**: Select dates directly on the calendar to add or edit trips
- **Regain Logic**: Shows exactly when and how many days you will regain in the future
- **Ongoing Trip Support**: Calculates the exact date you must exit to stay within the limit
- **Reference Date Selector**: Check your status as of any date, not just today

### Data Management
- **Import/Export**: Save and restore data in JSON or CSV format
- **Automatic Backup**: Creates backup before each modification
- **Audit Trail**: Complete history of all changes (viewable in console)
- **Trip Overlap Detection**: Warns if trips have conflicting dates
- **Data Validation**: Comprehensive date validation prevents invalid entries

### Compliance & Safety
- **Validated Calculations**: 5 official test cases run on startup to verify accuracy
- **Legal Disclaimer**: Clear warnings about informational use only
- **UTC Timezone Handling**: All dates processed in UTC to prevent timezone errors
- **Critical Bug Fixes**:
  - Only suggests legal re-entry dates (≤ 90 days usage)
  - Validates all dates (format, validity, leap years, month boundaries)
  - Enhanced error handling across all calculations

### Privacy & Performance
- **Privacy First**: All data stored locally on your device. No servers, no tracking
- **Offline Capable**: Works fully offline once loaded
- **Installable**: Add to home screen as a standalone app
- **Clean Design**: Modern interface with dark mode support

## How to Use

1. **Check Your Status**:
   - View "Days Remaining" with color-coded indicator
   - See when you'll regain days
   - Track ongoing trips with exit deadline

2. **Add Trips**:
   - Click dates on the calendar, or
   - Enter dates manually in YYYY-MM-DD format
   - Leave exit date blank for ongoing trips

3. **Edit Trips**:
   - Click "Edit" on any trip to modify dates
   - Click "Delete" to remove trips
   - All changes are backed up automatically

4. **Manage Data**:
   - **Export**: Save as JSON (backup) or CSV (spreadsheet)
   - **Import**: Restore from JSON file
   - **Clear All**: Remove all data (with confirmation)

5. **Review Status**:
   - Change reference date to check status on any day
   - View audit trail in browser console (`getAuditTrail()`)
   - Restore last backup if needed (`restoreFromBackup()`)

## Installation

### iOS (iPhone/iPad)
1. Open the site in **Safari**
2. Tap the **Share** button (square with arrow up)
3. Scroll down and tap **Add to Home Screen**

### Android
1. Open the site in **Chrome**
2. Tap the menu (three dots)
3. Tap **Install App** or **Add to Home Screen**

## Validation & Accuracy

The calculation engine is validated on startup with 5 official test cases:
- ✅ Simple 90-day continuous stay
- ✅ Split stays within limit
- ✅ Rolling window expiration
- ✅ Complex overlapping periods
- ✅ Ongoing trip calculations

Check browser console on load to see validation results.

## Console Commands

Advanced users can access additional features via browser console:

```javascript
// View audit trail (last 20 events)
getAuditTrail()

// View all audit events
getAuditTrail(100)

// Restore last backup
restoreFromBackup()

// Check for overlaps manually
detectOverlaps(trips)

// Re-run validation tests
validateCalculationEngine()

// Check timezone integrity
checkTimezoneIntegrity()
```

## Legal Disclaimer

**This tool is for informational purposes only** and does not constitute legal advice. Visa and immigration rules are subject to change without notice. Always verify your status with official immigration authorities, your embassy/consulate, or a qualified immigration lawyer.

**No Liability**: The developers assume no responsibility for overstays, denied entry, fines, or legal consequences resulting from use of this application. Border control decisions are final and binding.

## Development

This is a single-file web app with no build process required.

### File Structure
- `index.html`: All HTML, CSS, and JavaScript
- `manifest.json`: PWA metadata
- `sw.js`: Service Worker for offline support
- `icon.png`: App icon

### Local Development
Serve the directory with a static file server:

```bash
python3 -m http.server
```

Then open `http://localhost:8000` in your browser.

### Key Features Implemented
- Date validation with regex and UTC parsing
- Trip overlap detection
- Automatic backup system
- Comprehensive audit logging
- Official test case validation
- Dynamic color coding for visual feedback
- Timezone integrity checks

## Technical Details

- **Date Handling**: All dates stored and calculated in UTC
- **Calculation Method**: Rolling 180-day window, counting days inclusive
- **Storage**: localStorage for trips, backups, and audit trail
- **Validation**: 5 test cases based on European Commission guidelines
- **Backup**: Last backup stored automatically before each save
- **Audit**: Last 100 events tracked with timestamps

## Credits

Built with:
- [Flatpickr](https://flatpickr.js.org/) - Date picker
- Google Fonts (Crimson Pro, DM Sans)

---

**Version**: v8
**Last Updated**: November 2025
