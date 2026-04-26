/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Archivo'", "'Arial Black'", 'sans-serif'],
        body: ["'Inter Tight'", "'Helvetica Neue'", 'sans-serif'],
        mono: ["'JetBrains Mono'", "'Menlo'", 'monospace'],
        serif: ["'Fraunces'", 'Georgia', 'serif'],
      },
      colors: {
        ink: '#0A0A0A',
        paper: '#F7F5F0',
        pure: '#FFFFFF',
        shadow: '#1A1A1A',
        surface: '#0D1225',
        deep: '#0A0F29',
        stone: {
          900: '#141414',
          700: '#3A3A3A',
          500: '#6B6B6B',
          300: '#B8B6AF',
          100: '#E8E5DE',
          50: '#F0EDE6',
        },
        accent: {
          DEFAULT: '#ec4899',
          light: '#f9a8d4',
          dark: '#be185d',
          50: 'rgba(236,72,153,0.08)',
          100: 'rgba(236,72,153,0.15)',
        },
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '1.5' }],
        'sm': ['14px', { lineHeight: '1.5' }],
        'base': ['16px', { lineHeight: '1.55' }],
        'md': ['18px', { lineHeight: '1.55' }],
        'lg': ['21px', { lineHeight: '1.5' }],
        'xl': ['28px', { lineHeight: '1.2' }],
        '2xl': ['36px', { lineHeight: '1.1' }],
        '3xl': ['48px', { lineHeight: '0.95' }],
        '4xl': ['64px', { lineHeight: '0.92' }],
        '5xl': ['88px', { lineHeight: '0.88' }],
        '6xl': ['128px', { lineHeight: '0.86' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'container': '1360px',
      },
      borderRadius: {
        'pill': '999px',
      },
      letterSpacing: {
        'display': '-0.03em',
        'mono': '0.12em',
        'wide-mono': '0.14em',
      },
    },
  },
  plugins: [],
};
