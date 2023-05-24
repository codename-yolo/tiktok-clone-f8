import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from "vite-plugin-svgr";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],

  css: {
    modules: {
      scopeBehaviour: "global",
      generateScopedName: 'custom__[hash:base64:5]',
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    }
  },
  server: {
    port: 3000
  }
})
