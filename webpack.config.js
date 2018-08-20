const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');




const webpack = require('webpack');

module.exports = {
    entry:"./src/main.js",
    output:{
        filename:"js/[name].js",
        path:path.resolve(__dirname,"dist"),
    },
    devServer:{
        contentBase:"./dist"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(png|jpe?j|gif|svg)(\?.*)?$/,
                loader:'url-loader',
                options:{
                    limit:10000,
                    name:'img/[name].[ext]?[hash]'
                }
            },
            {
                test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader:'url-loader',
                options:{
                    limit:10000,
                    name:'fonts/[name].[ext]?[hash]'
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        'css': [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                        ],
                        'less':[
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            'less-loader'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            title:'vue project',
            template:'./index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                warnings: false
              }
            },
            sourceMap: true
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve:{
        extensions:['.js','.vue','.json'],
        alias:{
            'vue$':'vue/dist/vue.esm.js',
            '@':path.resolve(__dirname,'./src')
        }
    },
    devtool: '#eval-source-map'
}