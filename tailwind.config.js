/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        // We are using CSS custom properties in index.css for the main theme colors,
        // but adding some tailwind specific aliases here if needed.
        warm: {
          50: '#fffdf7',
          100: '#fef9ef',
        },
        indigo: {
          50: '#eef2ff',
          900: '#312e81',
          950: '#1e1b4b',
        }
      },
    },
  },
  plugins: [],
}