import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/myReact/', 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // '@'를 'src'로 설정
      "@public/*": ["../public/*"],          // '@public'를 'public'로 설정
    },
  },
})
