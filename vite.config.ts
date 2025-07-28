import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // root: resolve(__dirname, 'src'),
  plugins: [react()],
  resolve: {
    alias: {
      '@bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
      '@bootstrapicons': resolve(__dirname, 'node_modules/bootstrap-icons'),
      '@facore': resolve(__dirname, 'node_modules/@fortawesome/fontawesome-svg-core'),
      '@fareicons': resolve(__dirname, 'node_modules/@fortawesome/free-regular-svg-icons'),
      '@fa': resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free')
    }
  },
})
