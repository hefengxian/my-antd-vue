/**
 * Copyright © 2019-present, Knowlesys Ltd.
 * All rights reserved.
 *
 * @author: 𝑭𝒓𝒂𝒏𝒌 2020-12-01 16-12
 * @version 1.0
 */

const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => (/node_modules/.test(file) && !/\.vue\.js/.test(file))
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false,
                        }
                    }
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    'vue-style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false,
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.(jpeg|jpg|svg|png|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
        new HtmlWebpackPlugin({
            title: 'Vue Loader Test',
            template: './src/index.html',
        }),
        new VueLoaderPlugin(),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    }
}
