/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        charcoal: '#161616',
        offwhite: '#F5F2EE',
        sand: '#C4AA87',
        stone: '#7A6E63',
        'stone-light': '#A89D92',
        'warm-white': '#FAF8F5',
      },
      fontFamily: {
        display: ['var(--font-barlow-condensed)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      letterSpacing: {
        'widest-2': '0.25em',
        'widest-3': '0.35em',
      },
      lineHeight: {
        'tightest': '0.88',
        'tight-2': '0.92',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
};
