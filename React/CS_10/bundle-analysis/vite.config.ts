import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // 1. The React plugin (no need to nest it inside itself)
    react(), 
    
    // 2. The Visualizer plugin (placed in the main plugins array)
    visualizer({
      filename: 'bundle-report.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ],
})
