import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        includeData: '@import ~styles/global.scss'
      }
    }
  },
  resolve: {
    alias: {
      "~images": "src/assets/images",
      "~styles": "src/assets/styles"
    }
  }
})
