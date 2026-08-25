# QuickKeys 🔑

QuickKeys is a React Native (Expo) mobile app for browsing, searching, and posting property rental and sale listings — connecting people looking for a home with property owners across Lebanon.

> Where heart meets home!

## Features

- **Home** — Landing screen with quick navigation to search and post listing flows.
- **Search Listings** — Browse available properties with filters for location, category (For Rent / For Sale), property type, and price range.
- **Property Details** — View detailed information for a listing, including price, description, and a direct call/contact link.
- **Post a Listing** — Submit a new property listing (title, location, price, bedrooms).
- **About & Contact** — Information about QuickKeys and how to get in touch.

Navigation is handled via a drawer menu (`@react-navigation/drawer`) across all screens.

## Tech Stack

- [React Native](https://reactnative.dev/) `0.76.5`
- [Expo](https://expo.dev/) `~52.0.18`
- [React Navigation](https://reactnavigation.org/) (Drawer + Stack + Native)
- React `18.3.1`

## Project Structure

```
Quickkeys/
├── App.js                       # Root component & drawer navigator setup
├── index.js                     # Expo entry point
├── app.json                     # Expo app configuration
├── Home/
│   └── HomeScreen.js            # Landing screen
├── search/
│   └── searchlisting.js         # Search & filter listings
├── propertyDetails/
│   └── PropertyDetailsScreen.js # Listing detail view
├── postListing/
│   └── PostListingScreen.js     # New listing submission form
├── contact/
│   └── AboutContactScreen.js    # About & contact info
└── Images/                      # App logo & listing images
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (bundled with Node.js)
- [Expo Go](https://expo.dev/client) app on your phone, and/or Android Studio / Xcode for emulators

### Installation

```bash
git clone <repository-url>
cd Quickkeys
npm install
```

### Running the App

```bash
npm start        # Launch Expo dev server (scan QR code with Expo Go)
npm run android   # Run on Android emulator/device
npm run ios       # Run on iOS simulator/device
npm run web       # Run in a web browser
```

## Notes

- Listing data is currently mocked in-app (see `search/searchlisting.js`) — there is no backend integration yet, so posted listings are logged locally rather than persisted.
- [`Home/HomeScreen.js`](Home/HomeScreen.js) references the app logo via an absolute Windows file path; update this to a relative `require('../Images/quickkeyslogo.png')` if running on another machine.

## License

This project is private and intended for educational purposes (React Native course project).
