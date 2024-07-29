import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ghPages from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [
    react(),
    ghPages({
      // This is the branch where your gh-pages site is built
      branch: 'gh-pages',
      // Your repository name
      repo: 'https://github.com/theminent/Lyriks.git',
    })
  ],
  base: '/Lyriks/',
})