var path  = require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css!postcss" },	
        ]
    }
};
