'use strict'
process.env.NODE_ENV = 'development'

const path=require('path');
const webpack=require('webpack');
const merge = require('webpack-merge');
const baseConfig = require("./webpack.base");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig,{
    mode: 'development',
    module:{
        rules:[
            {
                test:/\.(sass|scss)$/,
                use:['style-loader','css-loader','sass-loader']
            },
        ]
    },
    output:{
        filename:"static/js/[name].js",
        chunkFilename:'static/js/[name].js'
    },
    devServer:{
        inline: true,
        hot: true,
        overlay: {
          warnings: true,
          errors: true
        },
        progress: true,
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new OptimizeCSSAssetsPlugin({}), // css 压缩
        new MiniCssExtractPlugin({
            filename:"static/css/[name].css"
        }),
    ]
});