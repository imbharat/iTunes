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
                exclude: /node_modules/,
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
    }
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
                exclude: /node_modules/,
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
    }
}

module.exports = [
    clientConfig,
    serverConfig
]