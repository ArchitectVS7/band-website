# 🕯️ Underground Metal Platform

A production-ready, underground metal community platform. Built for authenticity, fan engagement, and non-commercial values. Features inline admin editing, three underground theme variants, and a unique Community Archive for rare content.

---

## ⚡️ Key Features

- **Three Underground Theme Variants:** Atmospheric, Raw, Modern (switchable, persistent)
- **Admin Inline Editing:** Secure, password-protected admin system for real-time content updates
- **Community Archive:** Fan-driven archive for rare demos, flyers, photos, and recordings
- **Mobile-First Design:** Fully responsive, touch-friendly admin and navigation
- **Performance Optimized:** Fast load times, small bundle, Lighthouse >90
- **Accessibility:** WCAG AA compliance, keyboard navigation, screen reader support
- **Underground Aesthetic:** No mainstream patterns, authentic underground metal design

---

## 🛠️ Tech Stack

- **React 19 + TypeScript**
- **Tailwind CSS 3.4** (underground custom theming)
- **React Context API** (theme, admin, cart)
- **LocalStorage** (content, admin, theme persistence)
- **Jest + React Testing Library** (unit tests)

---

## 📦 Project Structure

```
underground-metal-platform/
├── public/
├── src/
│   ├── components/         # All UI components (Hero, Archive, AdminPanel, etc)
│   ├── contexts/           # ThemeContext, AdminContext, CartContext
│   ├── utils/              # migrationHelper, testingChecklist, mockData
│   ├── docs/               # Design docs, audit reports, guidelines
│   ├── App.tsx             # Main app entry
│   └── index.css           # Global and theme CSS
├── tailwind.config.js
├── package.json
└── README.md
```

---

## � Getting Started

### Prerequisites
- **Node.js** v16+
- **npm** v7+

### Quick Start
```bash
git clone <repository-url>
cd underground-metal-platform
npm install
npm start
```
Visit [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
```

---

## 🛡️ Admin System Usage

- **Login:** Click the admin icon, enter the admin password (default: `underground666` — CHANGE BEFORE DEPLOYMENT)
- **Edit Mode:** Toggle edit mode to enable inline editing on all content
- **Inline Editing:** Click any editable text to update, press Enter to save or Esc to cancel
- **Theme Switching:** Use the theme switcher in the admin panel or main UI
- **Persistence:** All edits and theme choices are saved to localStorage

> **Security Note:** Update the default admin password in production. See `src/contexts/AdminContext.tsx`.

---

## 🏴‍☠️ Community Archive

- **Fan Submissions:** Fans can upload rare demos, photos, flyers, and recordings
- **Moderation:** All submissions are verified for authenticity (see Community Guidelines)
- **Filtering:** Archive items can be filtered by type
- **Attribution:** Contributor and date info displayed for each item

---

## 🎨 Theme System

- **Variants:** Atmospheric (black/red), Raw (charcoal/gold), Modern (slate/blue)
- **Switching:** Use the theme switcher to toggle between variants
- **Persistence:** Theme choice is saved and restored automatically
- **Typography:** Each theme uses unique underground fonts (Cinzel, Creepster, Orbitron, etc)

---

## 📋 Customization & Content Management

- **All content is editable inline via the admin system**
- **No need to edit mockData or code for content updates**
- **Band info, releases, tour dates, and archive items are managed through the UI**
- **Theme and style can be extended in `tailwind.config.js` and `index.css`**

---

## 📝 Community Guidelines & Admin Docs

- **Admin Guide:** See `src/docs/phase-7-code-audit.md` for admin usage and system overview
- **Community Guidelines:** See `src/docs/phase-7-code-audit.md` for underground archive rules and moderation policies
- **Performance & Compliance:** See audit docs for metrics and accessibility verification

---

## 📈 Post-Deployment & Monitoring

- **Performance:** Optimized for fast load and small bundle size
- **Accessibility:** All interactive elements are keyboard and screen reader accessible
- **Monitoring:** Set up analytics and error tracking as needed (see audit doc recommendations)
- **Backup:** Always create a backup of the previous site before go-live

---

## ⚠️ Human Actions Required Before Go-Live

1. **Change the default admin password**
2. **Review all migrated content for underground authenticity**
3. **Establish moderation policies for the Community Archive**
4. **Verify hosting supports localStorage and new features**
5. **Create a backup of the existing site**

---

## 🤘 Contributing

- Fork and create feature branches for new underground features
- Follow TypeScript and React best practices
- Ensure all new code is accessible and mobile-friendly
- Update documentation for any new features

---

## 📄 License

MIT License. See LICENSE file for details.

---

**Built for the underground metal community. No compromise. No commercialism. Only authenticity.**
