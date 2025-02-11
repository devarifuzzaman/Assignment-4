import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      "/api": {
        target: "https://assignment-4-server-sage.vercel.app", //for backend live
        // target: "http://localhost:5000", //for localhost
        changeOrigin: true,
        secure: false,
      },
    },
  }
})
