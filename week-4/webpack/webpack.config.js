const path = require('path');
const fs = require('fs');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const templates = fs.readdirSync('./src/').filter(file => {
    return file.match(/.html$/);
});

module.exports = {
    entry: [
        './src/script.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.min.js'
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
        new MiniCssExtractPlugin({
            filename: 'style.min.css'
        }),
        ...templates.map(file => new HtmlWebpackPlugin({
            filename: file,
            template: './src/' + file,
        }))
    ]
}