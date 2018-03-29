const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const glob = require("glob");
const {
    TsConfigPathsPlugin
} = require('awesome-typescript-loader');

const cssExtractTextArray = [
    /node_modules/, 
    /app[/\\]common/, 
    path.resolve(__dirname, 'app/13-migration/01-angularjs'),
    path.resolve(__dirname, 'app/13-migration/02-angular5/style.scss'),
];

// const {
//     BundleAnalyzerPlugin
// } = require('webpack-bundle-analyzer');

const config = {
    entry: {
        polyfills: './app/common/polyfills.ts',
        vendor: './app/common/vendor.ts',
    },
    output: {
        path: path.resolve(__dirname, './app/wpk'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [
            new TsConfigPathsPlugin(),
        ],
    },
    module: {
        rules: [{
                test: /\.ts$/,
                include: path.resolve(__dirname, 'app'),
                exclude: /node_modules/,
                use: [{
                    loader: 'angular2-template-loader'
                }, {
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: path.resolve(__dirname, './tsconfig.json')
                    }
                }]
            }, {
                test: /\.js$/,
                include: path.resolve(__dirname, 'app/13-migration/01-angularjs'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            }, {
                // if the file is a css file, consider it is to be integrated in Angular styleUrls.
                test: /\.css$/,
                exclude: cssExtractTextArray,
                use: [{
                    loader: 'raw-loader'
                }],
            }, {
                // if the file is a css file, consider it is to be integrated in Angular styleUrls.
                test: /\.scss$/,
                exclude: cssExtractTextArray,
                use: [{
                    loader: 'raw-loader'
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    }
                }],
            }, {
                test: /\.css$/,
                include: cssExtractTextArray,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?minimize&sourceMap'
                })
            }, {
                test: /\.scss$/,
                include: cssExtractTextArray,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?minimize&sourceMap!sass-loader?sourceMap'
                })
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'raw-loader',
                }],
            }
        ]
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
        // new UglifyJsPlugin({
        //     cache: true,
        //     sourceMap: true,
        //     parallel: true,
        // }),
        // new BundleAnalyzerPlugin(),
        new HardSourceWebpackPlugin(),
    ]
};

const files = glob.sync('app/**/main.ts', {});
console.log('files', files);

files.forEach((file) => {
    const prefix = file.replace(/^app(.*)\/main.ts$/, '$1').replace(/\/(...)[^/]*/g, '$1');
    const bundle = prefix + 'bundle';
    config.entry[bundle] = `./${file}`;
});

// console.log('config', config);

module.exports = config;