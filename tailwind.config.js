/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        bg: '#050508',
        fg: '#f0ece3',
        accent: '#ff4d00',
        accent2: '#00e5ff',
        accent3: '#ffe600',
        card: '#0d0d18',
        muted: '#3a3a4a',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'rotate-slow-reverse': 'rotateSlowReverse 12s linear infinite',
        'scroll-line': 'scrollLine 2s linear infinite',
        'fade-up': 'fadeUp 0.8s forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-20px) rotate(8deg)' } },
        gridMove: { from: { transform: 'translateY(0)' }, to: { transform: 'translateY(60px)' } },
        rotateSlow: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        rotateSlowReverse: { from: { transform: 'translate(-50%,-50%) rotate(0deg)' }, to: { transform: 'translate(-50%,-50%) rotate(-360deg)' } },
        scrollLine: { from: { left: '-100%' }, to: { left: '100%' } },
        fadeUp: { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
      },
    },
  },
  plugins: [],
}
