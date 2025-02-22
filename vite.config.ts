import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // Updated to match your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
