import path from 'path';
import react from '@vitejs/plugin-react-swc';
import viteSharp from 'vite-plugin-sharp';

import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    viteSharp({
      quality: 80,
      formats: ['webp', 'jpeg', 'png'],
    }),
  ],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
});
