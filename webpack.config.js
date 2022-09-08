const path = require('path');
const webpack = require('webpack');

const clientConfig = {
    entry: './src/client/index.tsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'client.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [
                    /node_modules/,
                    /__tests__/
                ],
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isClient__: true
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    watch: true
}

const serverConfig = {
    entry: './src/server/index.tsx',
    target: 'node',
    output: {
        path: __dirname,
        filename: 'server.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [
                    /node_modules/,
                    /__tests__/
                ],
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isClient__: false
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    watch: true
}

module.exports = [
    clientConfig,
    serverConfig
]