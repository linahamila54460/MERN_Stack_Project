import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,                 // listen on 0.0.0.0 (needed in containers)
    port: 5173,                 // same port used in Service/Ingress
    allowedHosts: ["mern.local"]// allow requests with Host: mern.local
  }
})
