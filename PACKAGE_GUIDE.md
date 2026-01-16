# 📦 Travel Package Management Guide

## How to Add a Travel Package

### Step 1: Navigate to Add Package Page
- Click on **"+ Add Package"** in the navigation menu, OR
- Go directly to `/add-package` in your browser

### Step 2: Fill in the Package Details

#### Required Fields:
- **Package Title**: The name of your travel package (e.g., "Amazing New York City Break")
- **Destination**: Select from:
  - Africa
  - America
  - Asia
  - Europe
  - Greece
  - Middle East
- **Category**: Select from:
  - Autumn Packages
  - Christmas Packages
  - City Breaks
  - Cruises
  - Easter Packages
  - Exotic Destinations
  - Exotic Packages
  - Green Monday
  - Group Travel
  - Mary Special Trips
  - SPORTS EVENTS & CONCERTS
  - Summer Packages
  - Winter Packages
- **Price**: Enter the price in euros (e.g., 1299)
- **Duration**: Enter the duration (e.g., "5 days", "1 week")

#### Optional Fields:
- **Description**: A detailed description of the package
- **Icon/Emoji**: Choose an emoji to represent the package
- **Featured Package**: Check this box to mark as featured

### Step 3: Submit
- Click **"Add Package"** button
- The package will be added and you'll be redirected to the packages page filtered by your selected category and destination

## Example: Adding a Package to America Category

1. Go to `/add-package`
2. Fill in:
   - **Title**: "Grand Canyon Adventure"
   - **Destination**: Select "America"
   - **Category**: Select "Exotic Packages" (or any category you want)
   - **Price**: 1999
   - **Duration**: "7 days"
   - **Description**: "Explore the majestic Grand Canyon and surrounding areas"
3. Click "Add Package"
4. The package will appear when you:
   - Search with Destination = "America"
   - Search with Category = "Exotic Packages"
   - Or view all packages

## How Packages are Filtered

### Search Section (Homepage)
- Users can select a **Category** and **Destination** from dropdowns
- Clicking "Search" takes them to `/packages` with filters applied
- Packages matching both filters are displayed

### Packages Page
- Shows all packages by default
- Has filter dropdowns at the top
- Filters update results in real-time
- Shows count of matching packages

## Package Data Structure

Each package has:
```javascript
{
  id: 1,                    // Auto-generated
  title: "Package Name",
  destination: "America",    // Must match dropdown options
  category: "City Breaks",   // Must match dropdown options
  price: 1299,              // Number
  duration: "5 days",       // String
  description: "...",        // Optional
  image: "✈️",              // Emoji/icon
  featured: false           // Boolean
}
```

## Where Packages are Stored

Currently, packages are stored in:
- **File**: `src/data/packages.js`
- This is a simple JavaScript array
- For production, you'll want to:
  - Connect to a database (MongoDB, PostgreSQL, etc.)
  - Create API endpoints
  - Add authentication for adding packages

## Viewing Packages

### All Packages
- Navigate to `/packages` to see all packages
- Use filters to narrow down results

### Package Details
- Click on any package card to view full details
- URL format: `/packages/:id`
- Shows full information and booking options

## Tips

1. **Consistent Naming**: Use consistent naming for categories and destinations
2. **Descriptions**: Add detailed descriptions to help customers
3. **Featured Packages**: Mark your best packages as "featured"
4. **Images**: Currently using emojis, but you can replace with actual images later
5. **Pricing**: Always enter prices as numbers (no currency symbols)

## Future Enhancements

Consider adding:
- Image upload functionality
- Rich text editor for descriptions
- Multiple images per package
- Package editing/deletion
- Package duplication
- Bulk import from CSV
- Integration with booking system
- Price variations (per person, per room, etc.)






