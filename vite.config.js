import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all requests starting with '/api' to the backend API
      '/api': {
        target: 'http://localhost:8080', // Replace with your backend API URL
        secure: false, // Change to 'true' if using HTTPS
        changeOrigin: true
      }
    }
  }
})
