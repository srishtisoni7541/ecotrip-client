import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    rollupOptions: {
      // Force use of JS version, not native
      external: ['@rollup/rollup-linux-x64-gnu']
    }
  }
})
