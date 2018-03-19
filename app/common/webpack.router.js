const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const webpackConfig = require('./webpack.config.js');
webpackConfig.output.path = '/';
const compiler = webpack(webpackConfig);
// eslint-disable-next-line
const router = express.Router();
router.use('/wpk/', webpackDevMiddleware(compiler, {}));
module.exports = router;
