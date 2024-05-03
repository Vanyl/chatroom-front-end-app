import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/chatroom-front-end-app/chatroom-app/',
  plugins: [react()],
})