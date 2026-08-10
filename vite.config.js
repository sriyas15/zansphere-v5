import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import pages from 'vite-plugin-pages';
import sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    pages(),
    sitemap({
      hostname: 'https://zansphere.com',
    }),
  ],
  server: {
    allowedHosts: [
      '6237-2409-40f4-112e-c158-6402-fb35-6803-5d99.ngrok-free.app'
    ],
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Your backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
