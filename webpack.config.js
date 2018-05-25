const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/style/index.scss',
    output :{
        path: __dirname + '/dist/js',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /\/node_modules\//,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: true }
                        }
                    ]
                })
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                exclude: /\/node_modules\//,
                use: [{
                    loader: 'url-loader',
                }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../fonts/'
                    }
                }]
            },
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.scss'],
    },
    plugins: [
        new ExtractTextPlugin('../css/main.css'),
    ],
    watch: true,
};