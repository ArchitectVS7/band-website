# 🔥 Underground Metal Website Platform

A production-ready, underground metal community platform built with React and TypeScript. Designed for authenticity, fan engagement, and non-commercial values that define the underground metal scene.

## ✨ Key Features

### 🎨 **Three Underground Theme Variants**
- **Atmospheric**: Pure black aesthetic with dark red accents (Cinzel headers, Inter body)
- **Raw**: Charcoal background with weathered gold accents (Creepster headers, Oswald body)
- **Modern**: Professional dark slate with electric blue accents (Orbitron headers, Source Sans Pro body)

### 🛠️ **Admin Content Management**
- **Inline Editing**: Click any text element to edit directly on the page
- **Real-time Preview**: See changes instantly without page refresh
- **Persistent Storage**: All changes saved automatically to localStorage
- **Password Protection**: Secure admin access with customizable password

### 🎵 **Underground Music Features**
- **Bandcamp Integration**: Priority placement for underground streaming
- **Demo Archive**: Community-driven rare content collection
- **Release Management**: Complete discography with track listings
- **Streaming Platform Links**: Multi-platform music distribution

### 🛡️ **Community Features**
- **Community Archive**: Fan-contributed rare demos, photos, and recordings
- **Underground Merchandise**: Authentic band merchandise system
- **Direct Communication**: Band-to-fan contact forms with inquiry types
- **Mobile-First Design**: Fully responsive across all devices

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm 7+

### Installation
```bash
git clone [repository-url]
cd underground-metal-website
npm install
npm start
```

The site will open at `http://localhost:3000`

## 📁 Project Structure

```
underground-metal-website/
├── public/
│   ├── index.html              # Main HTML template
│   └── favicon.ico             # Site icon
├── src/
│   ├── components/             # React components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── HeroSection.tsx     # Main hero section
│   │   ├── AboutSection.tsx    # Band biography
│   │   ├── MusicSection.tsx    # Music releases
│   │   ├── CommunityArchive.tsx # Fan content archive
│   │   ├── AdminPanel.tsx      # Admin interface
│   │   ├── ThemeSwitcher.tsx   # Theme selection
│   │   └── EditableText.tsx    # Inline editing
│   ├── contexts/               # React contexts
│   │   ├── ThemeContext.tsx    # Theme management
│   │   ├── AdminContext.tsx    # Admin state
│   │   └── CartContext.tsx     # Shopping cart
│   ├── docs/                   # Documentation
│   │   ├── SRD-new-site        # System requirements
│   │   ├── Action-Plan.md      # Development roadmap
│   │   └── Conversion-Plan-Full.md # Migration guide
│   ├── types/                  # TypeScript definitions
│   ├── utils/                  # Utility functions
│   ├── App.tsx                 # Main application
│   └── index.css               # Global styles
├── tailwind.config.js          # Tailwind configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎯 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS with underground custom theme system
- **State Management**: React Context API
- **Storage**: localStorage for content persistence
- **Build**: Create React App
- **Testing**: Jest + React Testing Library

## 🔧 Development Commands

```bash
# Development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Type checking
npm run type-check

# Linting
npm run lint

# Code formatting
npm run format
```

## 📚 Documentation

- **[USER-MANUAL.md](./USER-MANUAL.md)** - Complete guide for editing content and managing the site
- **[src/docs/SRD-new-site](./src/docs/SRD-new-site)** - System requirements and design specifications
- **[src/docs/Action-Plan.md](./src/docs/Action-Plan.md)** - Development roadmap and progress tracking

## 🌟 Underground Design Philosophy

This platform respects underground metal values:
- **Authenticity over visibility**
- **Community over commerce**
- **Quality over quantity**
- **Direct fan engagement**
- **Resistance to mainstream pressures**

## 🔒 Security Notes

- Admin functionality uses localStorage (client-side only)
- No server-side data storage in current version
- All admin changes are local to the browser
- For production use, implement proper authentication

## 📖 Getting Help

1. Check the [User Manual](./USER-MANUAL.md) for editing instructions
2. Review the [Action Plan](./src/docs/Action-Plan.md) for development status
3. Consult the [SRD document](./src/docs/SRD-new-site) for design specifications

## 🎨 Theme Development

The site uses a sophisticated theme system with three variants. Each theme includes:
- Color palette (background, text, accent, secondary)
- Typography system (header and body fonts)
- CSS custom properties for dynamic switching
- Consistent component styling

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The build folder can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## 🔮 Roadmap

### Phase 1: Current (React SPA)
- ✅ Theme system implementation
- ✅ Admin content management
- ✅ Community features
- ✅ Mobile responsiveness

### Phase 2: Backend Integration
- User authentication
- Database integration
- Content versioning
- Email notifications

### Phase 3: Advanced Features
- E-commerce functionality
- Real-time community features
- Advanced analytics
- Progressive Web App capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🔥 Support

For support, questions, or underground metal solidarity:
- Check the documentation
- Review the code comments
- Follow underground metal development principles

---

*Built with passion for the underground metal community. Stay true to the underground.*
