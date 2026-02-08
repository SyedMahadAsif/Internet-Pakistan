# Sports Venue Booking Platform

A modern Next.js application for booking sports venues across Karachi, Pakistan.

## 📁 Folder Structure

```
venue-booking-app/
├── app/                          # Next.js App Router
│   ├── layout.jsx               # Root layout
│   ├── page.jsx                 # Home page (venue grid)
│   ├── globals.css              # Global styles
│   └── venue/
│       └── [id]/
│           └── page.jsx         # Dynamic venue details page
│
├── components/                   # React components
│   ├── Header.jsx               # Navigation header
│   ├── SearchBar.jsx            # Search and filters
│   ├── CategoryBar.jsx          # Sport category filter
│   ├── VenueCard.jsx            # Individual venue card
│   ├── VenueGrid.jsx            # Grid of venue cards
│   ├── VenueInfo.jsx            # Venue details card
│   ├── VenueHero.jsx            # Large venue image
│   └── VenueMap.jsx             # Embedded Google Maps
│
├── data/
│   └── venues.js                # Venue and category data
│
├── public/                       # Static assets
│
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── jsconfig.json                # Path aliases configuration
└── package.json                 # Dependencies

```

## 🚀 Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **Dynamic Routing**: Individual pages for each venue
- **Category Filtering**: Filter venues by sport type
- **Search Functionality**: Search by venue name, sport, or area
- **Google Maps Integration**: Embedded maps without API key required
- **WhatsApp Integration**: Direct booking via WhatsApp
- **Modern UI**: Dark theme with lime-400 accents

## 📱 Pages

### Home Page (`/`)
- Search bar with filters
- Sport category carousel
- Grid of all venues
- Click any venue to view details

### Venue Details (`/venue/[id]`)
- Large hero image
- Venue information card
- Price and rating display
- Contact information
- Embedded Google Maps
- WhatsApp booking button
- Back to home button

## 🛠️ Technologies

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library

## 📝 Component Breakdown

### Core Components

- **Header**: Logo, profile, and navigation
- **SearchBar**: Search input and location/date filters
- **CategoryBar**: Horizontal scroll of sport categories
- **VenueCard**: Displays venue thumbnail and basic info
- **VenueGrid**: Manages grid layout and filtering
- **VenueInfo**: Full venue details with booking options
- **VenueHero**: Large background image with overlay
- **VenueMap**: Google Maps embed (no API key needed)

### Data Structure

Venues include:
- Name, sport, area, price
- Rating, images, location coordinates
- Address, phone, opening hours
- Description

## 🎯 Key Features Explained

### Google Maps (No API Key)
Uses Google Maps embed URL format:
```
https://maps.google.com/maps?q=LAT,LNG&t=&z=15&ie=UTF8&iwloc=&output=embed
```

### Dynamic Routes
- Home: `/`
- Venue Details: `/venue/1`, `/venue/2`, etc.

### Path Aliases
Use `@/` prefix for imports:
```javascript
import Header from "@/components/Header";
import { venues } from "@/data/venues";
```

## 🔧 Customization

### Add New Venues
Edit `data/venues.js` and add venue objects with required fields.

### Change Theme
Modify Tailwind colors in `tailwind.config.js` or use color utilities in components.

### Add Categories
Update `categories` array in `data/venues.js`.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

Deploy to Vercel, Netlify, or any platform supporting Next.js:

```bash
# Vercel
vercel

# Netlify
netlify deploy --prod
```

---

Built with ⚡ by Internet Pakistan
