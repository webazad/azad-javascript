const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ['css-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]

}