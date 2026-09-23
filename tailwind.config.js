/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#38BDF8',
          light: '#7DD3FC',
          soft: '#BAE6FD',
          verylight: '#E0F2FE',
          bg: '#F8FCFF',
          dark: '#0F172A',
          secondary: '#475569',
          white: '#FFFFFF',
          accent: '#60A5FA',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 45%, #7DD3FC 100%)',
        'cta-gradient': 'linear-gradient(135deg, #38BDF8 0%, #60A5FA 100%)',
        'card-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F8FCFF 100%)',
        'hero-gradient': 'linear-gradient(180deg, #F0F9FF 0%, #F8FCFF 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(56, 189, 248, 0.12), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(56, 189, 248, 0.16), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 25px rgba(56, 189, 248, 0.25)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
