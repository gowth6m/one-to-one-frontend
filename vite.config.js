import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
export default defineConfig(function (_a) {
  var mode = _a.mode;
  console.info('*** Running in '.concat(mode, ' mode ***'));
  return {
    plugins: [
      react(),
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
        },
        overlay: false,
      }),
    ],
    resolve: {
      alias: {
        '@': '/src',
        src: '/src',
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    build: {
      outDir: 'dist',
    },
    base: '/',
  };
});
