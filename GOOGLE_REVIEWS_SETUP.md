# Google Reviews API Setup Guide

This guide explains how to connect the TestimonialsSection to fetch real Google Reviews from Google Places API.

## Current Implementation

The component currently uses a local pool of reviews and automatically rotates 2 reviews every 4 seconds. The Google Places API integration is ready but commented out.

## Setup Steps

### 1. Get Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key
   - (Recommended) Restrict the API key to only allow Places API

### 2. Get Your Place ID

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for "Honeywell Travel Cyprus"
3. Click on your business listing
4. In the URL or business details, find the Place ID (it looks like: `ChIJ...`)
5. Alternatively, use the [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)

### 3. Update Environment Variables

Create a `.env` file in the project root:

```env
REACT_APP_GOOGLE_PLACES_API_KEY=your_api_key_here
REACT_APP_GOOGLE_PLACE_ID=your_place_id_here
```

### 4. Enable API in Component

In `src/components/TestimonialsSection.jsx`, uncomment the API fetch code:

```javascript
useEffect(() => {
  const PLACE_ID = process.env.REACT_APP_GOOGLE_PLACE_ID
  const API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY
  
  if (PLACE_ID && API_KEY) {
    fetchGoogleReviews(PLACE_ID, API_KEY).then(fetchedReviews => {
      if (fetchedReviews.length > 0) {
        setReviews(fetchedReviews)
      } else {
        setReviews(allReviews) // Fallback to local reviews
      }
      setIsLoading(false)
    })
  } else {
    // Use local reviews if API not configured
    setReviews(allReviews)
    setIsLoading(false)
  }
}, [])
```

### 5. Install Dependencies (if needed)

The component uses native `fetch`, so no additional packages are required.

## Features

- **Auto-rotation**: Shows 2 reviews at a time, rotates every 4 seconds
- **Smooth transitions**: Fade in/out animations
- **Fallback**: Uses local reviews if API fails or is not configured
- **Loading state**: Shows loading message while fetching
- **Responsive**: Works on all screen sizes

## API Costs

Google Places API has usage-based pricing:
- **Basic Data**: Free tier includes $200/month credit
- **Reviews**: Included in basic data requests
- Check [Google Cloud Pricing](https://cloud.google.com/maps-platform/pricing) for details

## Security Notes

1. **Never commit API keys** to version control
2. **Use environment variables** for API keys
3. **Restrict API keys** to specific domains/IPs in Google Cloud Console
4. **Consider using a backend proxy** to hide API keys from frontend

## Backend Proxy (Recommended)

For production, consider creating a backend endpoint to fetch reviews:

```javascript
// Backend endpoint: /api/google-reviews
app.get('/api/google-reviews', async (req, res) => {
  const placeId = process.env.GOOGLE_PLACE_ID
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`
  )
  
  const data = await response.json()
  res.json(data.result.reviews)
})
```

Then update the frontend to call your backend:

```javascript
const response = await fetch('/api/google-reviews')
const reviews = await response.json()
```

## Testing

1. Test with local reviews first
2. Verify API key works in browser console
3. Check network tab for API responses
4. Test rotation timing (4 seconds)
5. Verify responsive design on mobile

## Troubleshooting

- **CORS errors**: Use backend proxy instead of direct API calls
- **No reviews showing**: Check Place ID is correct
- **API quota exceeded**: Check usage in Google Cloud Console
- **Reviews not rotating**: Check browser console for errors


