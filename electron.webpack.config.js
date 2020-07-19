const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main/js/main.js',
    output: {
        filename: 'main.js',
        path: path.join(
            __dirname,
            'public'
        )
    },
    target: 'electron-main',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: true,
                },
            }
        ]
    },
    node: {
        __dirname: false,
        __filename: false
    }
};