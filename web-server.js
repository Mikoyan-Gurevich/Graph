var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(require('./webpack.config'));

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/'
}));
app.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr'
}));
app.get('/*', function (req, res) {
    res.redirect('/');
});
app.use(express.static(path.join(__dirname, 'build')));
app.set('port', 3000);
var server = app.listen(app.get('port'), function () {
    console.log('Running express server at localhost:' + server.address().port);
});