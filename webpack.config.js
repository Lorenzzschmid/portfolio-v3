//Here we put all our configuration, loaders and other build information
const path = require('path'); 

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'), 
        filename: 'bundle.js'
    }
}