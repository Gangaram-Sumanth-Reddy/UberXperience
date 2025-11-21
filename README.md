# UberMapUI

A pure frontend-only Uber-like ride booking interface with integrated map view.

## Features

- Clean, minimalist design matching Uber's interface
- Two-column layout: booking form on the left, map view on the right
- Header with navigation, language selector, and user profile
- Pickup and dropoff location inputs
- Google Maps integration showing Bengaluru, India
- Responsive design with Tailwind CSS

## Setup

1. Install dependencies:
```bash
npm install
```

2. (Optional) Get a Mapbox access token for better performance:
   - Go to [Mapbox](https://account.mapbox.com/)
   - Sign up for a free account
   - Copy your default public token
   - Create a `.env` file in the root directory
   - Add: `VITE_MAPBOX_TOKEN=your_token_here`
   - Note: The app works with a default public token, but getting your own is recommended

4. Run the development server:
```bash
npm run dev
```

5. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Mapbox GL (react-map-gl)

