import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css',
                'resources/scss/app.scss',
                'resources/fontawesome/scss/fontawesome.scss',
                'resources/fontawesome/scss/regular.scss',
                'resources/fontawesome/scss/solid.scss',
                'resources/fontawesome/scss/brands.scss',
                'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
