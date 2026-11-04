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
        // Core 5 Approved Botanical Editorial Palette
        darkGreen: {
          DEFAULT: '#0A3323',
          deep: '#062217',
          surface: '#0E3E2B',
          card: '#114732',
          hover: '#15523A',
        },
        mossGreen: {
          DEFAULT: '#839958',
          hover: '#95AC66',
          dark: '#6F824A',
          subtle: 'rgba(131, 153, 88, 0.18)',
          border: 'rgba(131, 153, 88, 0.4)',
        },
        beige: {
          DEFAULT: '#F7F4D5',
          light: '#FBF9E6',
          soft: 'rgba(247, 244, 213, 0.85)',
          muted: 'rgba(247, 244, 213, 0.65)',
          subtle: 'rgba(247, 244, 213, 0.12)',
          border: 'rgba(247, 244, 213, 0.2)',
        },
        rosyBrown: {
          DEFAULT: '#D3968C',
          hover: '#E0A89F',
          subtle: 'rgba(211, 150, 140, 0.18)',
          border: 'rgba(211, 150, 140, 0.35)',
        },
        midnightGreen: {
          DEFAULT: '#105666',
          deep: '#0B3F4B',
          surface: '#156578',
          card: '#105666',
          hover: '#18748A',
          subtle: 'rgba(16, 86, 102, 0.3)',
          border: 'rgba(16, 86, 102, 0.5)',
        },

        // Semantic bindings mapped strictly to the 5 approved colours
        background: '#0A3323', // 1. Dark Green
        surface: {
          DEFAULT: '#0E3E2B', // Dark Green surface tone
          card: '#0E3E2B',
          elevated: '#105666', // 5. Midnight Green
          hover: '#134D36',
          midnight: '#105666',
          beige: '#F7F4D5',
        },
        border: {
          DEFAULT: 'rgba(247, 244, 213, 0.15)', // Beige border tint
          subtle: 'rgba(247, 244, 213, 0.08)',
          focus: '#839958', // Moss Green
          midnight: 'rgba(16, 86, 102, 0.5)',
          rosy: 'rgba(211, 150, 140, 0.35)',
        },
        text: {
          primary: '#F7F4D5', // 3. Beige
          secondary: 'rgba(247, 244, 213, 0.82)',
          muted: 'rgba(247, 244, 213, 0.6)',
          dark: '#0A3323', // For buttons on moss green / beige
        },
        accent: {
          DEFAULT: '#839958', // 2. Moss Green
          hover: '#95AC66',
          subtle: 'rgba(131, 153, 88, 0.2)',
          border: 'rgba(131, 153, 88, 0.4)',
        },
        accentAlt: {
          DEFAULT: '#D3968C', // 4. Rosy Brown
          hover: '#E0A89F',
          subtle: 'rgba(211, 150, 140, 0.2)',
          border: 'rgba(211, 150, 140, 0.4)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
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
        'moss-glow': '0 0 25px -5px rgba(131, 153, 88, 0.25)',
        'midnight-glow': '0 0 25px -5px rgba(16, 86, 102, 0.35)',
        'card-glow': '0 8px 30px -4px rgba(6, 34, 23, 0.6)',
      },
    },
  },
  plugins: [],
}
