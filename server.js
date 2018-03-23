const express = require('express');
const serveIndex = require('serve-index');

const webpackRouter = require('./server/webpack-router.js');
const wsRouter = require('./server/ws-router.js');

const app = express();

app.use(function (req, res, next) {
    console.log('req.url', req.url);
    next();
});

app.use('/app/wpk/', webpackRouter);
app.use('/ws', wsRouter);

const htdocs = '.';
app.use(express.static(htdocs));
app.use(serveIndex(htdocs, {
    icons: true
}));

// Specific to ex 07: URL Rewriting.
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