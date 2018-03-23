const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.js');

// eslint-disable-next-line
const router = express.Router();

webpackConfig.output.path = '/';
const compiler = webpack(webpackConfig);

router.use(webpackDevMiddleware(compiler, {}));

module.exports = router;
