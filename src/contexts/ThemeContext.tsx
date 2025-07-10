import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeVariant = 'atmospheric' | 'raw' | 'modern';

interface ThemeConfig {
  variant: ThemeVariant;
  colors: {
    background: string;
    text: string;
    accent: string;
    secondary: string;
  };
  typography: {
    headerFont: string;
    bodyFont: string;
  };
}

const themes: Record<ThemeVariant, ThemeConfig> = {
  atmospheric: {
    variant: 'atmospheric',
    colors: {
      background: '#000000',
      text: '#FFFFFF',
      accent: '#8B0000',
      secondary: '#1a1a1a',
    },
    typography: {
      headerFont: 'Cinzel',
      bodyFont: 'Inter',
    },
  },
  raw: {
    variant: 'raw',
    colors: {
      background: '#1a1a1a',
      text: '#f5f5f5',
      accent: '#b8860b',
      secondary: '#2d2d2d',
    },
    typography: {
      headerFont: 'Creepster',
      bodyFont: 'Oswald',
    },
  },
  modern: {
    variant: 'modern',
    colors: {
      background: '#2f2f2f',
      text: '#ffffff',
      accent: '#4169e1',
      secondary: '#4a4a4a',
    },
    typography: {
      headerFont: 'Orbitron',
      bodyFont: 'Source Sans Pro',
    },
  },
};

interface ThemeContextType {
  currentTheme: ThemeConfig;
  setTheme: (variant: ThemeVariant) => void;
  availableThemes: ThemeVariant[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentVariant, setCurrentVariant] = useState<ThemeVariant>('atmospheric');

  useEffect(() => {
    const saved = localStorage.getItem('underground-theme') as ThemeVariant;
    if (saved && themes[saved]) {
      setCurrentVariant(saved);
    }
  }, []);

  const setTheme = (variant: ThemeVariant) => {
    setCurrentVariant(variant);
    localStorage.setItem('underground-theme', variant);
    
    // Apply CSS custom properties to document root
    const theme = themes[variant];
    const root = document.documentElement;
    root.style.setProperty('--bg-primary', theme.colors.background);
    root.style.setProperty('--text-primary', theme.colors.text);
    root.style.setProperty('--accent-primary', theme.colors.accent);
    root.style.setProperty('--bg-secondary', theme.colors.secondary);
    root.style.setProperty('--header-font', theme.typography.headerFont);
    root.style.setProperty('--body-font', theme.typography.bodyFont);
  };

  useEffect(() => {
    setTheme(currentVariant);
  }, [currentVariant]);

  return (
    <ThemeContext.Provider 
      value={{
        currentTheme: themes[currentVariant],
        setTheme,
        availableThemes: Object.keys(themes) as ThemeVariant[],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};