/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#090B0A',
        surface: {
          DEFAULT: '#101411',
          card: '#141A16',
          elevated: '#1A221D',
          hover: '#1F2923',
        },
        border: {
          DEFAULT: '#252D28',
          subtle: '#1C231F',
          focus: '#3A473F',
        },
        text: {
          primary: '#F3F5F2',
          secondary: '#9BA69D',
          muted: '#68736A',
        },
        accent: {
          DEFAULT: '#B5F36A',
          hover: '#C4F685',
          subtle: 'rgba(181, 243, 106, 0.12)',
          border: 'rgba(181, 243, 106, 0.25)',
        },
        accentAlt: {
          DEFAULT: '#75D6A0',
          hover: '#8DE0B1',
          subtle: 'rgba(117, 214, 160, 0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'grid-spin': 'gridSpin 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      boxShadow: {
        'accent-glow': '0 0 25px -5px rgba(181, 243, 106, 0.2)',
        'card-glow': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
