/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#223047',
        mist: '#f8fbfd',
        line: '#e8f0f7',
        skysoft: '#edf7ff',
        azure: '#8abfe8',
        blueprint: '#5f9fde',
        navy: '#2b557c',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(34, 48, 71, 0.06)',
        card: '0 12px 32px rgba(34, 48, 71, 0.05)',
      },
    },
  },
  plugins: [],
}
