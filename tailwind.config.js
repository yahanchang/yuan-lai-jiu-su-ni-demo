/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#172033',
        mist: '#f5f8fb',
        line: '#e5edf5',
        skysoft: '#dff1ff',
        azure: '#4f9edc',
        blueprint: '#0b67ff',
        navy: '#173b6c',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(23, 32, 51, 0.08)',
        card: '0 12px 32px rgba(23, 32, 51, 0.07)',
      },
    },
  },
  plugins: [],
}
