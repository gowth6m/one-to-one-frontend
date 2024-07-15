import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  console.info(`*** Running in ${mode} mode ***`);

  return {
    plugins: [
      react(),
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
        },
        overlay: {
          initialIsOpen: false,
        },
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
      proxy: isDev && {
        '/api': {
          target: 'http://localhost:8070',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/api'),
        },
      },
    },
    build: {
      outDir: 'out',
    },
    base: '/',
  };
});
