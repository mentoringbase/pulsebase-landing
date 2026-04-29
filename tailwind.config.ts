import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // MentoringBase Brand - Moss Green Premium (compartilhado com site-mentoring)
        brand: {
          DEFAULT: '#3D6B42',
          light: '#4A7D50',
          dark: '#2F5333',
        },
        accent: {
          DEFAULT: '#24D8B4',
          light: '#3EEDC9',
          dark: '#1CB89A',
        },
        surface: {
          DEFAULT: '#18181B',
          light: '#27272A',
        },
        border: '#2A2A2A',
        muted: '#9EA3A8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
