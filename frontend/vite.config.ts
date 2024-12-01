// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Optionally specify which polyfills to include
      include: ['crypto', 'buffer', 'stream'],
      // Whether to polyfill specific globals
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
  ],
  resolve: {
    alias: {
      // Add any necessary path aliases here
      '@': '/src',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Enable more precise source map generation
      sourcemap: true,
      // Define specific Node.js globals
      define: {
        global: 'globalThis',
      },
    },
  },
});