# 📁 Complete Next.js Folder Structure

venue-booking-app/
│
├── 📂 app/                              # Next.js App Router (Pages)
│   ├── 📄 layout.jsx                    # Root layout component
│   ├── 📄 page.jsx                      # Home page - Venue grid
│   ├── 📄 globals.css                   # Global CSS with Tailwind
│   │
│   └── 📂 venue/                        # Venue routes
│       └── 📂 [id]/                     # Dynamic route for venue ID
│           └── 📄 page.jsx              # Venue details page
│
├── 📂 components/                       # Reusable React Components
│   ├── 📄 Header.jsx                    # Top navigation header
│   ├── 📄 SearchBar.jsx                 # Search input with filters
│   ├── 📄 CategoryBar.jsx               # Scrollable sport categories
│   ├── 📄 VenueCard.jsx                 # Single venue card component
│   ├── 📄 VenueGrid.jsx                 # Grid layout for venue cards
│   ├── 📄 VenueInfo.jsx                 # Venue details info card
│   ├── 📄 VenueHero.jsx                 # Large hero image with overlay
│   └── 📄 VenueMap.jsx                  # Embedded Google Maps
│
├── 📂 data/                             # Static Data
│   └── 📄 venues.js                     # Venue & category data
│
├── 📂 public/                           # Static Assets (images, icons)
│   └── (Place your static files here)
│
├── 📂 lib/                              # Utility functions (optional)
│   └── (Helper functions if needed)
│
├── 📄 next.config.js                    # Next.js configuration
├── 📄 tailwind.config.js                # Tailwind CSS config
├── 📄 postcss.config.js                 # PostCSS config
├── 📄 jsconfig.json                     # Path aliases (@/ imports)
├── 📄 package.json                      # Dependencies & scripts
├── 📄 .gitignore                        # Git ignore file
└── 📄 README.md                         # Documentation

---

## 🎯 Route Structure

| URL                  | File Location                | Description           |
|----------------------|-----------------------------|-----------------------|
| `/`                  | `app/page.jsx`              | Home - Venue grid     |
| `/venue/1`           | `app/venue/[id]/page.jsx`   | Venue details (ID: 1) |
| `/venue/2`           | `app/venue/[id]/page.jsx`   | Venue details (ID: 2) |
| `/venue/[any-id]`    | `app/venue/[id]/page.jsx`   | Dynamic venue page    |

---

## 🔗 Component Flow

### Home Page Flow:
```
app/page.jsx (Home)
    ├── Header.jsx
    ├── SearchBar.jsx
    ├── CategoryBar.jsx
    └── VenueGrid.jsx
            └── VenueCard.jsx (multiple instances)
```

### Venue Details Page Flow:
```
app/venue/[id]/page.jsx (Details)
    ├── Header.jsx
    ├── VenueInfo.jsx
    ├── VenueHero.jsx
    └── VenueMap.jsx
```

---

## 📦 Import Pattern with Path Aliases

```javascript
// ✅ Using @/ alias (configured in jsconfig.json)
import Header from "@/components/Header";
import { venues } from "@/data/venues";

// ❌ Without alias (not recommended)
import Header from "../../../components/Header";
```

---

## 🚀 How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

---

## 📝 Key Files Explained

### 📄 app/page.jsx
- Main home page component
- Displays grid of all venues
- Handles search and filter state

### 📄 app/venue/[id]/page.jsx
- Dynamic route for individual venues
- Fetches venue by ID from data
- Shows detailed information

### 📄 components/VenueCard.jsx
- Reusable card component
- Links to venue details page
- Shows thumbnail, price, rating

### 📄 data/venues.js
- Central data source
- All venue information
- Sport categories

### 📄 jsconfig.json
- Enables @/ path alias
- Cleaner imports across app
