import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to https://<user>.github.io/<repo-name>/ (a project site,
// not a user/root site), set base to '/<repo-name>/' below.
// If you deploy to https://<user>.github.io (a user/root site), leave it as './'.
export default defineConfig({
  plugins: [react()],
  base: './',
})
