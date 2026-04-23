# Visa Days

**[Live App](https://yigitdurna.github.io/visa-days/)**

A privacy-focused PWA to track your days in the Schengen area under the 90/180-day rule.

## Features

- **90/180 Calculator**: Rolling window calculation with color-coded status indicator
- **Trip Management**: Add, edit, and delete trips via interactive calendar or manual entry
- **Regain Forecasting**: Shows when and how many days you'll regain
- **Ongoing Trip Support**: Calculates your latest legal exit date
- **Reference Date**: Check your status as of any past or future date
- **Import/Export**: JSON and CSV backup and restore
- **Validated Engine**: 5 official test cases verified on startup
- **Privacy First**: All data in localStorage. No servers, no tracking.
- **PWA**: Installable, works offline

## Usage

1. Open the app and view your remaining days
2. Add trips by selecting dates on the calendar or entering them manually
3. Leave the exit date blank for an ongoing trip
4. Export your data as JSON for backup

## Development

Single-file web app — no build step. Serve with any static server:

```bash
python3 -m http.server
```

## Disclaimer

For informational purposes only. Always verify your visa status with official immigration authorities.
