import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2022',
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'motion', test: /node_modules[\\/]motion/ },
            { name: 'lightbox', test: /node_modules[\\/]yet-another-react-lightbox/ },
            { name: 'vendor', test: /node_modules[\\/](react|react-dom|react-router)/ },
          ],
        },
      },
    },
  },
});
