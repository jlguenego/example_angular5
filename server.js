const express = require('express');
const serveIndex = require('serve-index');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');

const app = express();

app.use(function (req, res, next) {
    console.log('req.url', req.url);
    next();
});

webpackConfig.output.path = '/';
const compiler = webpack(webpackConfig);
// eslint-disable-next-line
app.use('/app/wpk/', webpackDevMiddleware(compiler, {}));

const htdocs = '.';
app.use(express.static(htdocs));
app.use(serveIndex(htdocs, {
    icons: true
}));

// app.use('/app/07-router', (req, res, next) => {
//     res.sendFile('./app/07-router/index.html', {
//         root: __dirname,
//     });
// });

app.use(function (req, res, next) {
    console.log('404: Page not Found', req.url);
    next();
});

const port = 8000;
app.listen(port, function () {
    console.log('server started on port ' + port);
});