import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'your-username' and 'your-repo-name'
const repoName = 'ClimbAndCash';

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
})
