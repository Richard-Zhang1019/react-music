import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
