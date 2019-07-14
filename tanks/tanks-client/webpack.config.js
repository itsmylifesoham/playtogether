var path = require('path');

module.exports = {
    entry: "./src/app.ts",
    devtool: "source-map",
    output: {
        filename: "tanks-bundle.js",
        path: path.resolve(__dirname, 'scripts/app')
    },
    resolve: {
        extensions: [".ts"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            }            
        ]
    }
};