import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D47A1',
          dark: '#083480',
          light: '#1565C0',
          lighter: '#1E88E5',
        },
        accent: {
          DEFAULT: '#D32F2F',
          dark: '#B71C1C',
          light: '#E53935',
          lighter: '#EF5350',
        },
        dark: {
          DEFAULT: '#0B0F1A',
          100: '#131929',
          200: '#1C2333',
          300: '#2A3344',
        },
        brand: {
          slate: '#64748B',
          'slate-light': '#94A3B8',
          'slate-lighter': '#CBD5E1',
          offwhite: '#F1F5F9',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['DM Serif Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        'glow-blue': '0 0 24px rgba(13,71,161,0.3)',
        'glow-red': '0 0 24px rgba(211,47,47,0.2)',
        'glow-blue-lg': '0 0 48px rgba(13,71,161,0.45)',
        'glow-red-lg': '0 0 48px rgba(211,47,47,0.4)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #083480, #0D47A1, #1565C0)',
        'gradient-hero': 'linear-gradient(135deg, #0B0F1A 0%, #0D47A1 100%)',
        'gradient-red': 'linear-gradient(135deg, #B71C1C, #D32F2F, #E53935)',
        'gradient-blue-red': 'linear-gradient(135deg, #0D47A1 0%, #D32F2F 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0B0F1A, #131929)',
        'gradient-glass': 'linear-gradient(135deg, rgba(13,71,161,0.1), rgba(211,47,47,0.05))',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'out-custom': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

export default config
