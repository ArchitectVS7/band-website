UNDERGROUND METAL PLATFORM - COMPLETE DEPLOYMENT GUIDE
1. CRITICAL HUMAN ACTIONS BEFORE DEPLOYMENT
CHANGE ADMIN PASSWORD (SECURITY CRITICAL):

Open src/contexts/AdminContext.tsx
Find line: password === 'underground666'
Change to: password === 'YOUR_SECURE_PASSWORD'
Save file and store password securely
CREATE ENVIRONMENT FILE: Create .env file in root directory:

REACT_APP_ADMIN_PASSWORD=your_password_here
REACT_APP_SITE_NAME=CRIMSON THRONE
REACT_APP_CONTACT_EMAIL=contact@yourband.com
CONTENT REVIEW CHECKLIST:

[ ] Review all band member names and roles
[ ] Verify band biography accuracy
[ ] Check all social media links
[ ] Confirm tour dates are current
[ ] Verify merchandise information
[ ] Review Community Archive guidelines
2. DEVELOPMENT ENVIRONMENT SETUP
PREREQUISITES:

Node.js v16 or higher
npm v7 or higher
Git
Code editor (VS Code recommended)
LAUNCH DEV VERSION:

git clone [your-repo-url]
cd underground-metal-platform
npm install
npm start
The site opens at http://localhost:3000

DEVELOPMENT COMMANDS:

npm start - Start development server
npm test - Run tests
npm run build - Build for production
npx tsc --noEmit - Check TypeScript errors
npx eslint src --ext .ts,.tsx - Run linter
3. ADMIN PANEL USER MANUAL
ACCESSING ADMIN PANEL:

Click shield icon (🛡️) in bottom-left corner
Enter admin password
Press Enter or click OK
THEME SWITCHING:

Click "Theme" button in admin panel
Select from three options:
Atmospheric: Black/red gothic theme
Raw: Charcoal/gold underground theme
Modern: Slate/blue cyber theme
EDIT MODE:

Click "Edit Mode" to toggle
Click any text to edit inline
Press Enter to save changes
Press Escape to cancel
Changes save to localStorage
EDITABLE ELEMENTS:

Band name and tagline
Section headings and descriptions
Band member names and roles
Album/tour information
Contact details
4. MANUAL CODE EDITING (BACKUP METHOD)
BAND INFORMATION: File: src/utils/migrationHelper.ts

const legacyContent = {
  'hero-band-name': 'YOUR BAND NAME',
  'hero-tagline': 'Your Tagline',
  'member-1-name': 'MEMBER NAME',
  'member-1-role': 'Instrument',
};
NAVIGATION LABELS: File: src/components/Header.tsx

const navItems = [
  { href: '#about', label: 'COVEN' },
  { href: '#music', label: 'SOUNDS' },
];
SOCIAL MEDIA LINKS: File: src/components/Footer.tsx

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/yourband', label: 'Facebook' },
];
IMAGES:

Hero Background: src/components/HeroSection.tsx
Band Photos: src/components/AboutSection.tsx
Replace image URLs in the components
5. TESTING PROCEDURES
FUNCTIONALITY TESTS:

[ ] Admin login with correct/incorrect passwords
[ ] All 3 themes load correctly
[ ] Edit mode saves content
[ ] Navigation scrolls to sections
[ ] Mobile hamburger menu works
[ ] Content persists after refresh
BROWSER TESTING:

[ ] Chrome (latest)
[ ] Firefox (latest)
[ ] Safari (Mac)
[ ] Edge (latest)
[ ] Mobile Safari (iOS)
[ ] Chrome Mobile (Android)
PERFORMANCE TESTING:

Open Chrome DevTools (F12)
Go to Lighthouse tab
Run audit
Target scores: >90 for all metrics
RESPONSIVE TESTING: Test viewports:

iPhone SE (375×667)
iPhone 12 Pro (390×844)
iPad (768×1024)
Desktop (1920×1080)
6. DREAMHOST DEPLOYMENT
BUILD PRODUCTION:

npm run build
DREAMHOST FTP CONNECTION:

Host: ftp.dreamhost.com
Username: your_ftp_username
Password: your_ftp_password
Port: 22 (SFTP) or 21 (FTP)
UPLOAD PROCESS:

Connect via FTP client (FileZilla)
Navigate to /home/username/yourdomain.com/
Delete old files (backup first!)
Upload contents of build folder
Do NOT upload the build folder itself
CREATE .HTACCESS FILE: Create in root directory with this content:

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
POST-DEPLOYMENT:

Visit your domain
Test all functionality
Verify HTTPS works
Check all themes load
Test admin panel
Verify mobile responsiveness
TROUBLESHOOTING:

White screen: Check .htaccess exists
404 errors: Verify all files uploaded
Slow loading: Enable DreamHost caching
Admin not working: Clear browser localStorage
QUICK COMMANDS REFERENCE
Development:

npm start          # Start dev server
npm test           # Run tests
npm run build      # Build production
Troubleshooting:

rm -rf node_modules && npm install  # Reinstall deps
npm cache clean --force              # Clear npm cache
lsof -ti:3000 | xargs kill -9      # Kill port 3000 (Mac/Linux)
Support:

DreamHost: support.dreamhost.com
Emergency: Keep backup of previous build
You can copy this content and save it as DEPLOYMENT-GUIDE.md or any format you prefer. This guide covers all the essential steps for deploying and managing your underground metal platform.
