var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&minify&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader')
            }
        ]
    },
    
    postcss: [
        require('autoprefixer')
    ],

    resolve: {
        modulesDirectories: ['node_modules']
    },
    
    devtool: 'cheap-module-source-map',

    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};