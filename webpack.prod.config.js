// Extra things in this config is 
var webpack = require('webpack'),
devConfig = require('./webpack.config'),
OfflinePlugin = require('offline-plugin');

devConfig.entry.app.splice(1,1);
devConfig.entry.vendor.splice(1,1);
devConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false, drop_console: true}}));
devConfig.plugins.push(new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}));
devConfig.plugins.push(new OfflinePlugin());
devConfig.plugins.splice(1,1);

module.exports = devConfig;