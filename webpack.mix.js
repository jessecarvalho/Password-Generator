const mix = require('laravel-mix');


mix.styles([
    'resources/views/site/css/style.css'
], 'public/site/css/style.css')
    .styles([
        'node_modules/bootstrap/dist/css/bootstrap.css'
    ], 'public/site/css/bootstrap.css')
    .scripts([
        'resources/views/site/js/script.js'
    ], 'public/site/js/script.js')
    .scripts([
        'node_modules/jquery/dist/jquery.js'
    ], 'public/site/jquery.js')
    .scripts([
        'node_modules/bootstrap/dist/js/bootstrap.js'
    ], 'public/site/bootstrap.js')


.version();

