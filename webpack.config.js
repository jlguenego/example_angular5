const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// const {
//     BundleAnalyzerPlugin
// } = require('webpack-bundle-analyzer');

const config = {
    entry: {
        polyfills: './app/common/polyfills.ts',
        vendor: './app/common/vendor.ts',
    },
    output: {
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            include: path.resolve(__dirname, 'app'),
            exclude: /node_modules/,
            use: [{
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: path.resolve(__dirname, './tsconfig.json')
                }
            }]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?minimize&sourceMap'
            })
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?minimize&sourceMap!sass-loader?sourceMap'
            })
        }]
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve(__dirname, '../app')
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'polyfills']
        }),
        new UglifyJsPlugin({
            cache: true,
            sourceMap: true,
            parallel: true,
        }),
        // new BundleAnalyzerPlugin(),
    ]
};

const array = fs.readdirSync('./app')
    .filter(file => file.match(/^\d\d-/) &&
        fs.lstatSync('./app/' + file).isDirectory());

console.log('array', array);

array.forEach((dir) => {
    const bundle = dir.substring(0, 3) + 'bundle';
    config.entry[bundle] = `./app/${dir}/main.ts`;
});

console.log('config', config);

module.exports = config;