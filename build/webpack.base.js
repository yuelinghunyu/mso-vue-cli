const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports={
    devtool :"#source-map",
    entry:{
        app: './src/main.js'
    },
    output:{
        path:path.resolve(__dirname,'../dist/'),
    },
    resolve:{
        extensions:['.js','.vue','.json'],
        alias:{
            '@':path.resolve(__dirname,'../src'),
            'static':path.resolve(__dirname,'../static')
        }
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        {loader:'css-loader'},
                        {loader:'postcss-loader'}
                    ],
                    publicPath:'../'
                })
            },
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                use:[{
                    loader:'babel-loader'
                }]
            },
            {
                test:/\.(png|jpe?g|gif|svg)$/i,
                loader:'url-loader',
                options:{
                    limit:10000,
                    name: 'static/img/[name].[ext]?[hash]'
                }
            },
            {
                test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader:'url-loader',
                options:{
                    limit:10000,
                    name:'static/fonts/[name].[ext]?[hash]'
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
            },
            {
                test:/\.html$/,
                use:[{
                    loader:"html-loader",
                    options:{
                        minimize:true
                    }
                }]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename:path.join(__dirname,"../dist/index.html"),
            template:path.join(__dirname,"../index.html")
        }),
    ]
};