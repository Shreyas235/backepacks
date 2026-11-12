// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// // base './' lets the built site run from public_html or any sub-folder on Hostinger
// export default defineConfig({ plugins: [react()], base: './' })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/backepacks/',
})
