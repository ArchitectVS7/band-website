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
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}