let path = require ('path');
let ExtractTextPlugin = require ('extract-text-webpack-plugin');

let clientSrcPath = path.resolve (__dirname, 'frontend');
let serverSrcPath = path.resolve (__dirname, 'src/main/resources/static');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: clientSrcPath + '/index.jsx',

    output: {
        path: serverSrcPath,
        filename: 'bundle.js'
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            hash: true
        })
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: {
                    loader: 'url-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};