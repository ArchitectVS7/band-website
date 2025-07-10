import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const UndergroundStylingDemo: React.FC = () => {
  const { currentTheme, setTheme, availableThemes } = useTheme();

  return (
    <div className="underground-section">
      <div className="underground-container">
        <h1 className="underground-heading-primary underground-responsive-heading mb-8">
          Underground Styling System Demo
        </h1>

        {/* Theme Switcher */}
        <div className="underground-card p-6 mb-8">
          <h2 className="underground-heading-secondary mb-4">Theme Variants</h2>
          <div className="flex flex-wrap gap-4">
            {availableThemes.map((theme) => (
              <button
                key={theme}
                onClick={() => setTheme(theme)}
                className={`underground-btn-${currentTheme.variant === theme ? 'primary' : 'secondary'}`}
              >
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </button>
            ))}
          </div>
          <p className="underground-text-caption mt-4">
            Current theme: {currentTheme.variant} - {currentTheme.typography.headerFont} / {currentTheme.typography.bodyFont}
          </p>
        </div>

        {/* Button Variants */}
        <div className="underground-card p-6 mb-8">
          <h2 className="underground-heading-secondary mb-4">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            <button className="underground-btn-primary">Primary Button</button>
            <button className="underground-btn-secondary">Secondary Button</button>
            <button className="underground-btn-danger">Danger Button</button>
            <button className="underground-btn-ghost">Ghost Button</button>
          </div>
        </div>

        {/* Typography System */}
        <div className="underground-card p-6 mb-8">
          <h2 className="underground-heading-secondary mb-4">Typography System</h2>
          <div className="space-y-4">
            <h1 className="underground-heading-primary underground-responsive-heading">
              Primary Heading
            </h1>
            <h2 className="underground-heading-secondary text-2xl">
              Secondary Heading
            </h2>
            <p className="underground-text-body underground-responsive-text">
              This is body text with proper line height and readability. The underground aesthetic 
              emphasizes clarity and authenticity over flashy design elements.
            </p>
            <p className="underground-text-caption">
              Caption text for additional information and context.
            </p>
            <p className="underground-text-accent">
              Accent text for highlighting important information.
            </p>
          </div>
        </div>

        {/* Form Elements */}
        <div className="underground-card p-6 mb-8">
          <h2 className="underground-heading-secondary mb-4">Form Elements</h2>
          <div className="space-y-4">
            <div className="underground-form-group">
              <label className="underground-form-label">Text Input</label>
              <input
                type="text"
                placeholder="Enter underground text..."
                className="underground-input w-full"
              />
            </div>
            <div className="underground-form-group">
              <label className="underground-form-label">Textarea</label>
              <textarea
                placeholder="Enter underground content..."
                className="underground-textarea w-full"
                rows={3}
              />
            </div>
            <div className="underground-form-group">
              <label className="underground-form-label">Select</label>
              <select className="underground-select w-full">
                <option>Atmospheric</option>
                <option>Raw</option>
                <option>Modern</option>
              </select>
            </div>
          </div>
        </div>

        {/* Badge System */}
        <div className="underground-card p-6 mb-8">
          <h2 className="underground-heading-secondary mb-4">Badge System</h2>
          <div className="flex flex-wrap gap-2">
            <span className="underground-badge underground-badge-primary">Primary</span>
            <span className="underground-badge underground-badge-secondary">Secondary</span>
            <span className="underground-badge underground-badge-success">Success</span>
            <span className="underground-badge underground-badge-warning">Warning</span>
            <span className="underground-badge underground-badge-danger">Danger</span>
          </div>
        </div>

        {/* List Styles */}
        <div className="underground-card p-6 mb-8">
          <h2 className="underground-heading-secondary mb-4">List Styles</h2>
          <div className="underground-list">
            <div className="underground-list-item">
              <span className="underground-text-accent">✓</span>
              <span className="underground-text-body">Atmospheric black metal aesthetic</span>
            </div>
            <div className="underground-list-item">
              <span className="underground-text-accent">✓</span>
              <span className="underground-text-body">Raw underground authenticity</span>
            </div>
            <div className="underground-list-item">
              <span className="underground-text-accent">✓</span>
              <span className="underground-text-body">Modern professional underground</span>
            </div>
          </div>
        </div>

        {/* Animation Examples */}
        <div className="underground-card p-6 mb-8">
          <h2 className="underground-heading-secondary mb-4">Animation Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="underground-card p-4 text-center underground-animate-pulse">
              <p className="underground-text-body">Pulse Animation</p>
            </div>
            <div className="underground-card p-4 text-center underground-animate-fade-in">
              <p className="underground-text-body">Fade In</p>
            </div>
            <div className="underground-card p-4 text-center underground-animate-slide-up">
              <p className="underground-text-body">Slide Up</p>
            </div>
            <div className="underground-card p-4 text-center underground-animate-glow">
              <p className="underground-text-body">Glow Effect</p>
            </div>
          </div>
        </div>

        {/* Loading States */}
        <div className="underground-card p-6 mb-8">
          <h2 className="underground-heading-secondary mb-4">Loading States</h2>
          <div className="space-y-4">
            <div className="underground-loading h-8 w-full"></div>
            <div className="space-y-2">
              <div className="underground-skeleton w-3/4"></div>
              <div className="underground-skeleton w-1/2"></div>
              <div className="underground-skeleton w-5/6"></div>
            </div>
          </div>
        </div>

        {/* Responsive Design */}
        <div className="underground-card p-6 mb-8">
          <h2 className="underground-heading-secondary mb-4">Responsive Design</h2>
          <div className="space-y-4">
            <h3 className="underground-responsive-heading underground-heading-secondary">
              Responsive Heading
            </h3>
            <p className="underground-responsive-text underground-text-body">
              This text adapts to different screen sizes while maintaining underground authenticity.
              The responsive utilities ensure optimal readability across all devices.
            </p>
          </div>
        </div>

        {/* Focus States */}
        <div className="underground-card p-6 mb-8">
          <h2 className="underground-heading-secondary mb-4">Focus States</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Focus me for accessibility..."
              className="underground-input underground-focus-ring w-full"
            />
            <button className="underground-btn-primary underground-focus-ring">
              Accessible Button
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="underground-divider"></div>

        {/* Theme Information */}
        <div className="underground-card p-6">
          <h2 className="underground-heading-secondary mb-4">Current Theme Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="underground-text-accent mb-2">Colors</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-6 h-6 rounded border"
                    style={{ backgroundColor: currentTheme.colors.background }}
                  ></div>
                  <span className="underground-text-caption">Background: {currentTheme.colors.background}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-6 h-6 rounded border"
                    style={{ backgroundColor: currentTheme.colors.text }}
                  ></div>
                  <span className="underground-text-caption">Text: {currentTheme.colors.text}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-6 h-6 rounded border"
                    style={{ backgroundColor: currentTheme.colors.accent }}
                  ></div>
                  <span className="underground-text-caption">Accent: {currentTheme.colors.accent}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="underground-text-accent mb-2">Typography</h3>
              <div className="space-y-2">
                <p className="underground-text-caption">
                  Header: {currentTheme.typography.headerFont}
                </p>
                <p className="underground-text-caption">
                  Body: {currentTheme.typography.bodyFont}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UndergroundStylingDemo;