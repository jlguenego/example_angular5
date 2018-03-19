const express = require('express');
const serveIndex = require('serve-index');
const webpackRouter = require('./webpack.router.js');
const webpackCommon = require('./app/common/webpack.router.js');

const app = express();

app.use(function (req, res, next) {
    console.log('req.url', req.url);
    next();
});

app.use(webpackRouter);
app.use('/app/common', webpackCommon);

const htdocs = '.';
app.use(express.static(htdocs));
app.use(serveIndex(htdocs, {
    icons: true
}));

app.use(function (req, res, next) {
    console.log('404: Page not Found', req.url);
    next();
});

const port = 8000;
app.listen(port, function () {
    console.log('server started on port ' + port);
});