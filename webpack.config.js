// This file tells the IDE how to resolve paths
// Keep in sync with webpack.config.js
const path = require('path');

module.exports = {
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
}