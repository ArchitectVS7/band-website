# 🛠️ Underground Metal Website - Complete User Manual

*A comprehensive guide to managing and editing your underground metal website*

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Admin Access & Security](#admin-access--security)
3. [Theme Management](#theme-management)
4. [Content Editing](#content-editing)
5. [Image Management](#image-management)
6. [Music & Release Management](#music--release-management)
7. [Community Features](#community-features)
8. [Merchandise Management](#merchandise-management)
9. [Advanced Features](#advanced-features)
10. [Troubleshooting](#troubleshooting)
11. [Recommended Next Steps](#recommended-next-steps)

---

## Getting Started

### First Time Setup

1. **Access Your Website**
   - Open your browser and navigate to your website URL
   - The site loads with the default "atmospheric" theme

2. **Initial Admin Setup**
   - Look for the small gear icon (⚙️) in the bottom-right corner
   - Click it to open the Admin Panel
   - Default password: `underground666` (⚠️ **CHANGE THIS IMMEDIATELY**)

3. **Quick Orientation**
   - **Top-right corner**: Theme switcher (3 underground themes)
   - **Bottom-right corner**: Admin panel access
   - **All text content**: Clickable when in edit mode

---

## Admin Access & Security

### 🔐 Accessing Admin Mode

1. **Login Process**
   ```
   Step 1: Click the gear icon (⚙️) in bottom-right corner
   Step 2: Enter admin password (default: underground666)
   Step 3: Click "Login" button
   ```

2. **Admin Panel Features**
   - **Edit Mode Toggle**: Enable/disable content editing
   - **Theme Selector**: Switch between 3 underground themes
   - **Password Change**: Update admin password
   - **Clear Data**: Reset all customizations

### 🛡️ Security Best Practices

1. **Change Default Password**
   ```
   Step 1: Access Admin Panel
   Step 2: Click "Change Password" button
   Step 3: Enter new secure password
   Step 4: Confirm password change
   ```

2. **Password Requirements**
   - Minimum 8 characters
   - Use combination of letters, numbers, symbols
   - Avoid personal information
   - Don't use "password" or "123456"

3. **Important Security Notes**
   - All data is stored locally in your browser
   - No server-side storage in current version
   - Changes are browser-specific
   - Export/import features coming in future updates

---

## Theme Management

### 🎨 Three Underground Themes

#### 1. **Atmospheric** (Default)
- **Background**: Pure black (#000000)
- **Text**: White (#FFFFFF)
- **Accent**: Dark red (#8B0000)
- **Fonts**: Cinzel headers, Inter body text
- **Best for**: Atmospheric black metal, post-metal, doom

#### 2. **Raw** 
- **Background**: Charcoal (#1a1a1a)
- **Text**: Off-white (#f5f5f5)
- **Accent**: Weathered gold (#b8860b)
- **Fonts**: Creepster headers, Oswald body text
- **Best for**: Raw black metal, old-school death metal

#### 3. **Modern**
- **Background**: Dark slate (#2f2f2f)
- **Text**: Crisp white (#ffffff)
- **Accent**: Electric blue (#4169e1)
- **Fonts**: Orbitron headers, Source Sans Pro body text
- **Best for**: Technical death metal, progressive metal

### 🔄 Switching Themes

**Method 1: Theme Switcher (Top-right)**
```
Step 1: Look for theme switcher in top-right corner
Step 2: Click on desired theme name
Step 3: Theme changes immediately
Step 4: Selection is saved automatically
```

**Method 2: Admin Panel**
```
Step 1: Access Admin Panel (gear icon)
Step 2: Find theme selector dropdown
Step 3: Select desired theme
Step 4: Theme applies instantly
```

### 🎯 Theme Persistence

- Themes are saved to your browser's localStorage
- Your selection persists across browser sessions
- Each visitor can choose their preferred theme
- Changes are instant with no page reload

---

## Content Editing

### ✏️ Inline Text Editing

**Enabling Edit Mode**
```
Step 1: Access Admin Panel
Step 2: Toggle "Edit Mode" switch to ON
Step 3: Yellow border appears around editable content
```

**Editing Text Content**
```
Step 1: Click on any text with yellow border
Step 2: Text becomes editable input field
Step 3: Type your new content
Step 4: Press ENTER to save
Step 5: Press ESC to cancel without saving
```

### 📝 Editable Content Areas

#### **Header Section**
- **Band Name**: Click the main logo/title
- **Navigation Menu**: Menu items (currently fixed)

#### **Hero Section**
- **Band Name**: Main title text
- **Tagline**: Subtitle/description text
- **Album Title**: Featured release name
- **Album Description**: Release description
- **Button Text**: CTA button labels

#### **About Section**
- **Section Title**: "FROM THE UNDERGROUND"
- **Band Biography**: Main description paragraph
- **Member Names**: Individual band member names
- **Member Roles**: Each member's role/instrument

#### **Music Section**
- **Section Title**: "Our Music"
- **Release Information**: Album/demo details
- **Track Listings**: Individual song titles

#### **Community Section**
- **Section Title**: Community heading
- **Description Text**: Community guidelines
- **Archive Items**: User-submitted content

#### **Contact Section**
- **Section Title**: "Summon the Coven"
- **Description**: Contact information text
- **Form Labels**: Contact form field labels

### 🎭 Content Guidelines

**Underground Authenticity**
- Use underground-appropriate language
- Avoid mainstream commercial terms
- Emphasize community over commerce
- Reference underground culture and values

**Tone & Voice**
- Authentic, not corporate
- Passionate about the music
- Respectful of underground traditions
- Direct communication style

---

## Image Management

### 🖼️ Current Image System

**Background Images**
- Hero section background (currently stock photo)
- About section member placeholders
- Music section album artwork
- Community archive submissions

### 📸 Changing Images

**⚠️ Current Limitation**
- Images are currently hardcoded in components
- Inline image editing not yet implemented
- Manual code changes required

**Temporary Solution**
1. **Replace Image URLs**
   - Find image URLs in component files
   - Replace with your own hosted images
   - Ensure proper dimensions and formats

2. **Recommended Image Specifications**
   - **Hero Background**: 1920x1080 minimum
   - **Album Artwork**: 500x500 square
   - **Member Photos**: 300x400 portrait
   - **Archive Items**: Various sizes supported

**Future Enhancement**
- Drag-and-drop image replacement
- Image optimization and WebP conversion
- Gallery management interface
- Bulk image upload capabilities

---

## Music & Release Management

### 🎵 Adding New Releases

**Current Process (Manual)**
1. **Access Mock Data**
   - Edit `src/utils/mockData.ts` file
   - Add new release objects

2. **Release Object Structure**
   ```typescript
   {
     id: 'unique-id',
     title: 'Album Title',
     type: 'album' | 'demo' | 'single',
     releaseDate: '2024-01-01',
     coverArt: 'https://image-url.jpg',
     tracks: ['Track 1', 'Track 2', 'Track 3'],
     streamingLinks: {
       bandcamp: 'https://bandcamp-url',
       spotify: 'https://spotify-url',
       youtube: 'https://youtube-url'
     }
   }
   ```

### 🎧 Streaming Platform Priority

**Underground-First Approach**
1. **Bandcamp** (Primary - Underground focus)
2. **Bandcamp** (Secondary links)
3. **YouTube** (Community access)
4. **Spotify/Apple Music** (Mainstream reach)

**Link Management**
- Bandcamp links appear first
- Underground platforms prioritized
- Mainstream platforms secondary
- External link icons for user clarity

### 🎼 Track Listing Management

**Adding Tracks**
- Edit track arrays in release objects
- Maintain proper track ordering
- Include accurate song titles
- Consider track numbering for CDs/vinyl

---

## Community Features

### 🏛️ Community Archive

**Purpose**
- Fan-contributed rare content
- Demo trading simulation
- Historical documentation
- Community engagement hub

**Content Types**
- **Demos**: Rare recordings and unreleased tracks
- **Photos**: Show photos, backstage, historical images
- **Flyers**: Concert flyers, promotional materials
- **Recordings**: Live recordings, interviews, rarities

### 📋 Managing Archive Submissions

**Submission Process**
1. **Fan Submits Content**
   - Uses community archive interface
   - Provides description and metadata
   - Submits for community review

2. **Moderation (Manual)**
   - Review submissions for authenticity
   - Verify underground scene relevance
   - Approve or reject content

**Content Guidelines**
- Must be underground metal related
- Respect copyright and fair use
- No mainstream commercial content
- Encourage rare and historical items

### 🤝 Community Engagement

**Features**
- Fan location mapping
- Demo trading references
- Behind-the-scenes content
- Direct band communication

**Moderation Best Practices**
- Maintain underground authenticity
- Encourage quality over quantity
- Foster genuine community interaction
- Respect underground scene values

---

## Merchandise Management

### 🛍️ Current Merchandise System

**Shopping Cart Features**
- Add/remove items
- Quantity management
- Price calculation
- Checkout simulation

**Product Categories**
- **Apparel**: T-shirts, hoodies, patches
- **Music**: Vinyl, CDs, cassettes
- **Accessories**: Pins, stickers, posters
- **Limited Editions**: Special releases

### 💰 Managing Products

**Product Structure**
```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  price: 25.00,
  image: 'product-image-url',
  category: 'apparel' | 'music' | 'accessories',
  description: 'Product description',
  inStock: true,
  variants: ['Size S', 'Size M', 'Size L']
}
```

**Underground Merchandise Guidelines**
- Authentic underground aesthetic
- Quality over quantity
- Limited edition items
- Support underground economy

---

## Advanced Features

### 🔧 Admin Panel Advanced Options

**Data Management**
- **Export Settings**: Backup customizations
- **Import Settings**: Restore from backup
- **Clear All Data**: Reset to defaults
- **Theme Export**: Share theme configurations

**Development Features**
- **Debug Mode**: Show component boundaries
- **Performance Monitor**: Track loading times
- **Accessibility Checker**: Verify compliance

### 🎯 Analytics & Monitoring

**Current Limitations**
- No analytics integration yet
- No user tracking
- Local storage only

**Future Enhancements**
- Google Analytics integration
- User behavior tracking
- Performance monitoring
- Error reporting

### 📱 Mobile Optimization

**Current Features**
- Fully responsive design
- Touch-friendly admin interface
- Mobile-optimized navigation
- Swipe gestures for galleries

**Best Practices**
- Test on actual mobile devices
- Verify touch targets are large enough
- Check text readability
- Ensure fast loading times

---

## Troubleshooting

### 🚨 Common Issues

#### **Admin Panel Won't Open**
**Symptoms**: Clicking gear icon does nothing
**Solutions**:
1. Check browser console for errors
2. Refresh page and try again
3. Clear browser cache
4. Ensure JavaScript is enabled

#### **Changes Don't Save**
**Symptoms**: Edits disappear after refresh
**Solutions**:
1. Verify localStorage is enabled
2. Check browser storage limits
3. Ensure edit mode is enabled
4. Try different browser

#### **Theme Won't Change**
**Symptoms**: Theme stays the same
**Solutions**:
1. Check theme switcher functionality
2. Clear browser cache
3. Verify CSS is loading properly
4. Try hard refresh (Ctrl+F5)

#### **Content Appears Broken**
**Symptoms**: Layout issues or missing content
**Solutions**:
1. Check browser compatibility
2. Verify CSS is loading
3. Clear browser cache
4. Try incognito/private browsing mode

### 🔍 Debugging Steps

1. **Check Browser Console**
   - Press F12 to open developer tools
   - Look for error messages
   - Check console for JavaScript errors

2. **Verify Local Storage**
   - Open developer tools
   - Go to Application tab
   - Check Local Storage entries
   - Clear if corrupted

3. **Test in Different Browser**
   - Try Chrome, Firefox, Safari
   - Check if issue persists
   - Verify cross-browser compatibility

### 📞 Getting Help

**Self-Help Resources**
1. Check this user manual
2. Review browser console errors
3. Try clearing browser cache
4. Test in incognito mode

**Documentation Resources**
- **README.md**: Project overview
- **src/docs/**: Technical documentation
- **Component files**: Code comments and structure

---

## Recommended Next Steps

### 🚀 Immediate Actions (Week 1)

1. **Security Setup**
   - [ ] Change default admin password
   - [ ] Test admin functionality
   - [ ] Verify theme switching works

2. **Content Customization**
   - [ ] Update band name throughout site
   - [ ] Replace placeholder text with your content
   - [ ] Customize navigation menu items
   - [ ] Update about section with band info

3. **Visual Customization**
   - [ ] Choose primary theme variant
   - [ ] Replace hero background image
   - [ ] Add band member photos
   - [ ] Update logo/branding elements

### 🎨 Content Development (Week 2-3)

4. **Music Section**
   - [ ] Add your actual releases
   - [ ] Update streaming platform links
   - [ ] Add proper album artwork
   - [ ] Include accurate track listings

5. **Community Setup**
   - [ ] Establish community guidelines
   - [ ] Set up moderation process
   - [ ] Add initial archive content
   - [ ] Create submission workflows

6. **Contact & Communication**
   - [ ] Update contact information
   - [ ] Test contact form functionality
   - [ ] Set up email notifications
   - [ ] Configure inquiry routing

### 🔧 Technical Enhancements (Month 2)

7. **Backend Integration**
   - [ ] Set up database for content storage
   - [ ] Implement user authentication
   - [ ] Add server-side content management
   - [ ] Create backup and restore systems

8. **Enhanced Features**
   - [ ] Add image upload functionality
   - [ ] Implement advanced analytics
   - [ ] Create email newsletter system
   - [ ] Add social media integration

9. **Performance Optimization**
   - [ ] Implement image optimization
   - [ ] Add caching strategies
   - [ ] Optimize loading times
   - [ ] Configure CDN for assets

### 📈 Growth & Scaling (Month 3+)

10. **Advanced Community Features**
    - [ ] User accounts and profiles
    - [ ] Fan forums and discussions
    - [ ] Live chat during events
    - [ ] Virtual listening parties

11. **E-commerce Enhancement**
    - [ ] Payment processing integration
    - [ ] Inventory management
    - [ ] Order tracking system
    - [ ] Customer service tools

12. **Mobile App Development**
    - [ ] Evaluate user metrics (10k+ MAU)
    - [ ] Plan mobile app features
    - [ ] Develop MVP mobile version
    - [ ] Launch beta testing program

### 🎯 Long-term Vision (Year 1)

13. **Platform Expansion**
    - [ ] Multi-band support
    - [ ] Underground network integration
    - [ ] International scene support
    - [ ] Advanced content management

14. **Technical Evolution**
    - [ ] Progressive Web App features
    - [ ] Real-time collaboration tools
    - [ ] Advanced search functionality
    - [ ] AI-powered content suggestions

15. **Community Growth**
    - [ ] Ambassador program
    - [ ] Underground venue partnerships
    - [ ] Label collaboration features
    - [ ] Event management tools

---

## 📋 Checklist for Go-Live

### Pre-Launch Checklist

**Security & Access**
- [ ] Admin password changed from default
- [ ] Access control tested and verified
- [ ] Backup of all customizations created
- [ ] Security best practices documented

**Content & Branding**
- [ ] All placeholder text replaced
- [ ] Band information updated throughout
- [ ] Images replaced with band assets
- [ ] Contact information verified

**Functionality Testing**
- [ ] All links tested and working
- [ ] Contact form sends properly
- [ ] Admin panel fully functional
- [ ] Theme switching works correctly
- [ ] Mobile responsiveness verified

**Performance & Compliance**
- [ ] Site loads quickly on all devices
- [ ] Accessibility standards met
- [ ] Cross-browser compatibility verified
- [ ] SEO basics implemented

### Post-Launch Monitoring

**Week 1**
- [ ] Monitor for user feedback
- [ ] Check for technical issues
- [ ] Verify all features working
- [ ] Document any needed fixes

**Month 1**
- [ ] Analyze user behavior
- [ ] Gather community feedback
- [ ] Plan next feature releases
- [ ] Optimize based on usage patterns

**Ongoing**
- [ ] Regular security updates
- [ ] Content freshness maintenance
- [ ] Community engagement activities
- [ ] Performance monitoring

---

## 🤘 Final Notes

This underground metal website platform is designed to grow with your band and community. The current version provides a solid foundation with room for extensive customization and enhancement.

**Remember the Underground Values:**
- Authenticity over visibility
- Community over commerce
- Quality over quantity
- Direct engagement over corporate mediation

**Stay True to the Underground** 🔥

---

*For technical support, consult the README.md file and documentation in the src/docs/ folder.* 