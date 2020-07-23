module.exports = {
    mode: 'development',
    entry: './app/main.js',
    output: {
        filename: 'main.js',
        path: `${__dirname}/public`,
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
            },
        ],
    },
    node: {
        __dirname: false,
        __filename: false,
    },
};
