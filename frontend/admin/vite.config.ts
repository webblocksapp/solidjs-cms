import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    solidPlugin(),
    tsconfigPaths({ projects: ['./tsconfig.json', '../shared/tsconfig.json'] }),
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
