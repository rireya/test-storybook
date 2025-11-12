import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

// Get all component files
const components = glob.sync('stories/**/*.tsx', {
  ignore: ['**/*.stories.tsx', '**/*.test.tsx']
});

// Create entry points for each component
const entries = components.reduce((acc, file) => {
  const name = file.replace('stories/', '').replace('.tsx', '');
  acc[name] = resolve(__dirname, file);
  return acc;
}, {} as Record<string, string>);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        ...entries
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'styles/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
