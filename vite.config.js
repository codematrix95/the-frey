import { fileURLToPath } from 'url';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
    base: '/the-frey-build/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@scss': path.resolve(__dirname, 'src/scss'), // 👈 your SCSS folder
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
        },
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['import', 'slash-div', 'global-builtin'],
                quietDeps: true,
                additionalData: '',
                includePaths: [path.resolve(__dirname, 'src/scss')],
            },
        },
    },
    server: {
        host: 'localhost',
    },
    plugins: [react()],
});
