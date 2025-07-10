import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeSwitcher: React.FC = () => {
  const { currentTheme, setTheme, availableThemes } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50 bg-bg-secondary border border-accent-primary rounded-metal p-4">
      <h3 className="underground-heading-secondary text-sm mb-2">Theme</h3>
      <div className="space-y-2">
        {availableThemes.map((theme) => (
          <button
            key={theme}
            onClick={() => setTheme(theme)}
            className={`w-full text-left px-3 py-2 rounded text-sm transition-all duration-200 ${
              currentTheme.variant === theme
                ? 'bg-accent-primary text-text-primary'
                : 'bg-transparent text-text-primary hover:bg-accent-primary hover:bg-opacity-20'
            }`}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};