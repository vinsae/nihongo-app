import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // ganti ke '/nama-repo/' jika deploy ke GitHub Pages
})
