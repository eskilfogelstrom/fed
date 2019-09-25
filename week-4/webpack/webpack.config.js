const path = require('path');
const fs = require('fs');

const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const templates = fs.readdirSync('./src/').filter(file => {
    return file.match(/.html$/);
});

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    devtool: 'inline-source-map',
    entry: [
        './src/script.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.min.js'
    },
    devServer: {
        contentBase: './dist',
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    }, 
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader'
                    },
                ]
            }
        ]
    },
    plugins: [
        new CopyPlugin([{
            from: 'src/**/*.!(js|html|css)',
            transformPath: targetPath => {
                return targetPath.slice(4);
            },
        }]),
        new MiniCssExtractPlugin({
            filename: 'style.min.css'
        }),
        new CleanWebpackPlugin(),
        ...templates.map(file => new HtmlWebpackPlugin({
            filename: file,
            template: './src/' + file,
        }))
    ]
}