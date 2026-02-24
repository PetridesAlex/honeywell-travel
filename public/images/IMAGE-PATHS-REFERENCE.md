# Image paths reference (where images are used)

All paths are relative to `public/`. The app loads them as `/images/...`.

## Constandinopole (Istanbul)
- **instanbul-hero.webp** – Hero on package pages: Constantinople (id 26), Istanbul Asia Minor (id 31)
- **instanbul-hotel.webp** – Hotel cards: Constantinople, Istanbul Asia Minor, Istanbul Cappadocia, Pontus Istanbul
- **instanbul-castle-sea.webp** – Price thumb: Istanbul Asia Minor (id 31)

## Balcans-countries (Balkans / Bucharest)
- **balcans-hero.webp** – Hero: Bucharest & Transylvania (id 22)
- **balcans-city.webp** – Price thumb: Bucharest & Transylvania (id 22)

## How to see the images
1. Run the app from project root: `npm run dev`
2. Open the correct package detail page (e.g. `/packages/26/details` for Constantinople, `/packages/22/details` for Bucharest)
3. Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

If images still don’t show, check the browser Network tab for 404s on `/images/...` and confirm the file exists under `public/images/...` with the same path and spelling (case-sensitive on some systems).
