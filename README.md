# Hide Ignored Member Replies - Hypixel Forums

A browser extension and userscript that enhances your Hypixel Forums experience by hiding posts of ignored members even more.

## Features

- **Hide "Show Ignored" Buttons**: Removes the "Show ignored content" buttons to prevent you from impulsively clicking them
- **Hide Quoted Content**: Optional setting to hide posts that contain quotes from ignored members
- **Multi-Platform**: Available as Chrome extension, ~~Firefox extension~~ (broken), and userscript

## Installation Methods

Choose the installation method that works best for your browser:

### 🔵 Userscript (Recommended)

Works with Tampermonkey, Greasemonkey, or Violentmonkey:

1. Install a userscript manager:
   - **Chrome/Edge**: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - **Firefox**: [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
   - **Safari**: [Tampermonkey](https://apps.apple.com/us/app/tampermonkey/id1482490089)

2. Install the userscript:
   - Open the `userscript/hypixel-hide-ignored.user.js` file
   - Copy the contents
   - Create a new script in your userscript manager
   - Paste the code and save

**Settings**: Right-click on the userscript manager icon → "Hide Ignored Member Replies - Hypixel Forums" → "Toggle: Hide posts with quotes from ignored members"

### 🟢 Chrome Extension

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Toggle **"Developer mode"** in the top-right corner
4. Click **"Load unpacked"** button
5. Select the `chrome` folder from this repository
6. The extension icon will appear in your toolbar

**Settings**: Click the extension icon to access settings

### ~~🟠 Firefox Extension~~ (Currently Broken)

**⚠️ Note**: The Firefox extension is currently not working properly. Please use the userscript method for Firefox instead.

1. Download or clone this repository
2. Open Firefox and navigate to `about:debugging`
3. Click **"This Firefox"** in the sidebar
4. Click **"Load Temporary Add-on"**
5. Navigate to the `firefox` folder and select `manifest.json`
6. The extension will be loaded temporarily

**Settings**: Click the extension icon to access settings

## Usage

### Basic Functionality
All versions work automatically once installed:
- Hide all posts from members you've ignored on Hypixel Forums
- Remove "Show ignored content" buttons

### Settings
- **Hide posts with quotes from ignored members**: When enabled (default), posts containing quotes from ignored users will also be hidden

# Note: This is an unofficial tool and is not affiliated with or endorsed by Hypixel Studios.