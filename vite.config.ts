import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['framer-motion'],
    exclude: ['lucide-react', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
  },
  build: {
    rollupOptions: {
      external: ['framer-motion'],
    },
  },
});