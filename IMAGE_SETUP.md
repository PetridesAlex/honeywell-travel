# Image Carousel Setup Guide

## How to Add Your Images

1. **Create the images folder** (if it doesn't exist):
   - Navigate to the `public` folder in your project
   - Create a folder named `images`

2. **Add your images**:
   - Place your 4 images in the `public/images/` folder
   - Name them as follows:
     - `iceland-waterfall.jpg` (or .png) - The Iceland waterfall image
     - `thailand-boat.jpg` (or .png) - The Thai longtail boat image
     - `sydney-harbour.jpg` (or .png) - The Sydney Harbour image
     - `coastal-town.jpg` (or .png) - The coastal town image

3. **Image Requirements**:
   - Recommended size: 1920x1080px or larger
   - Format: JPG or PNG
   - Optimize images for web (use tools like TinyPNG or ImageOptim)

4. **Update Image Paths** (if you use different names):
   - Open `src/components/ImageCarousel.jsx`
   - Update the `image` property in each object in the `images` array

## Current Image Configuration

The carousel is set up with these 4 images:

1. **Iceland Waterfall** - Seljalandsfoss, Iceland
2. **Thailand Boat** - Thai longtail boat in turquoise waters
3. **Sydney Harbour** - Sydney Harbour Bridge at dusk
4. **Coastal Town** - Mediterranean coastal town at sunset

## Customization

You can customize:
- **Titles**: Change the `title` property
- **Subtitles**: Change the `subtitle` property  
- **Locations**: Change the `location` property
- **Auto-rotate speed**: Change `5000` (5 seconds) in the `useEffect` hook
- **Add more images**: Add more objects to the `images` array

## Example

```javascript
const images = [
  {
    id: 1,
    image: '/images/iceland-waterfall.jpg',
    title: 'Your Custom Title',
    subtitle: 'Your Custom Subtitle',
    location: 'Iceland'
  },
  // ... more images
]
```




