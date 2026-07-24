import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react({
      include: /\.(tsx|ts|jsx)$/,
      babel: {
        plugins: ['styled-components'],
        babelrc: false,
        configFile: false,
      },
    }),
    tailwindcss(),
    svgr({
      include: '**/*.svg?react',
      svgrOptions: {
        exportType: 'named',
        namedExport: 'ReactComponent',
        // Forward refs properly — avoids React's forwardRef dev warning.
        ref: true,
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    port: 3000,
    host: true,
  },
});
