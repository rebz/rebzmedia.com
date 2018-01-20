// THIS IS FOR THE IDE TO KNOW HOW TO RESOLVE THE PATHS
const path = require('path');

module.exports = {
    resolve : {
        alias : {
            '@drive.views' : path.join(__dirname, 'resources/js/views'),
            '@drive.components' : path.join(__dirname, 'resources/js/components'),
            '@drive.helpers' : path.join(__dirname, 'resources/js/mixins/helpers')
        }
    }
}