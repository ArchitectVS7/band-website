/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Underground theme colors using CSS custom properties
        'bg-primary': 'var(--bg-primary)',
        'text-primary': 'var(--text-primary)',
        'accent-primary': 'var(--accent-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        // Legacy colors for backward compatibility
        primary: {
          accent: '#E63946',
          secondary: '#F1C40F',
          neutral: '#1A1A1A',
          dark: '#0D0D0D',
          light: '#FFFFFF',
          gray: '#CCCCCC',
        }
      },
      fontFamily: {
        // Underground theme fonts
        'atmospheric-header': ['Cinzel', 'serif'],
        'atmospheric-body': ['Inter', 'sans-serif'],
        'raw-header': ['Creepster', 'cursive'],
        'raw-body': ['Oswald', 'sans-serif'],
        'modern-header': ['Orbitron', 'sans-serif'],
        'modern-body': ['Source Sans Pro', 'sans-serif'],
        // Legacy fonts
        'bebas': ['Bebas Neue', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'metal': '4px',
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'underground-pulse': 'underground-pulse 2s ease-in-out infinite',
        'underground-slide-up': 'underground-slide-up 0.6s ease-out',
        'underground-fade-in': 'underground-fade-in 0.4s ease-out',
        'underground-glow': 'underground-glow 2s ease-in-out infinite',
        'underground-breathe': 'underground-breathe 4s ease-in-out infinite',
        'underground-shimmer': 'underground-shimmer 2s linear infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'underground-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'underground-slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'underground-fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'underground-glow': {
          '0%, 100%': { boxShadow: '0 0 5px var(--accent-primary)' },
          '50%': { boxShadow: '0 0 20px var(--accent-primary), 0 0 30px var(--accent-primary)' },
        },
        'underground-breathe': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'underground-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        'underground': '10px',
      },
      boxShadow: {
        'underground': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'underground-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        'underground-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)',
        'underground-glow': '0 0 20px var(--accent-primary)',
      },
      transitionProperty: {
        'underground': 'all',
      },
      transitionDuration: {
        'underground': '300ms',
      },
      transitionTimingFunction: {
        'underground': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        'underground-modal': '1000',
        'underground-overlay': '999',
        'underground-dropdown': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}