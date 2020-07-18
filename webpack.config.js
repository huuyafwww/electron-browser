const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main/js/main.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'public')
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

module.exports = {
    mode: 'development',
    entry: './src/renderer/js/app.js',
    output: {
        filename: 'renderer.js',
        path: path.join(__dirname, 'public')
    },
    target: 'electron-renderer',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/react'
                        ]
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
