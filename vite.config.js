import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ganti ini sesuai nama repo kamu
const repoName = 'Fourteendecy'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // penting biar link asset bener
})
