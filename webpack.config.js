// THIS IS FOR THE IDE TO KNOW HOW TO RESOLVE THE PATHS
const path = require('path');

module.exports = {
    resolve : {
        alias : {
            '@rebz.views' : path.join(__dirname, 'resources/js/views'),
            '@rebz.components' : path.join(__dirname, 'resources/js/components'),
            '@rebz.helpers' : path.join(__dirname, 'resources/js/mixins/helpers')
        }
    }
}