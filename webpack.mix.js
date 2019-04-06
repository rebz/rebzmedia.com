require('dotenv').config({
    path: __dirname + '/.env'
});

let env = process.env

const mix = require('laravel-mix')

mix.setPublicPath('public/')
    .js('resources/js/app.js', 'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/css/app.css')
    .autoload({
        axios: "axios",
        nprogress: "nprogress",
        vue: "Vue"
    })
    .extract([
        "axios",
        "nprogress",
        "vue",
        "vue-router",
        "vuex"
    ])
    .webpackConfig({
        resolve : {
            alias : {
                '@': path.join(__dirname, 'resources/js'),
                '@api' : path.join(__dirname, 'resources/js/api'),
                '@classes' : path.join(__dirname, 'resources/js/classes'),
                '@components' : path.join(__dirname, 'resources/js/components'),
                '@config' : path.join(__dirname, 'resources/js/config'),
                '@directives' : path.join(__dirname, 'resources/js/directives'),
                '@helpers': path.join(__dirname, 'resources/js/helpers'),
                '@mixins' : path.join(__dirname, 'resources/js/mixins'),
                '@models' : path.join(__dirname, 'resources/js/models'),
                '@router' : path.join(__dirname, 'resources/js/router'),
                '@store': path.join(__dirname, 'resources/js/store'),
                '@views' : path.join(__dirname, 'resources/js/views')
            }
        }
    })

if (mix.inProduction()) {
    mix.sourceMaps(false)
        .version()
        .disableNotifications()
} else {
    mix.sourceMaps(true)
        .browserSync({
            open: 'external',
            host: env.APP_DOMAIN,
            proxy: env.APP_DOMAIN,
            files: [
                "public/**/*.html",
                "public/js/**/*.js",
                "public/css/**/*.css"
            ]
        })
}
