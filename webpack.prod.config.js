// Extra things in this config is 
var webpack = require('webpack'),
path = require('path'),
devConfig = require('./webpack.config'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
CleanWebpackPlugin = require('clean-webpack-plugin'),
OfflinePlugin = require('offline-plugin');

devConfig.entry.app.splice(1,1);
devConfig.entry.vendor.splice(1,1);
devConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false, drop_console: true}}));
devConfig.plugins.push(new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}));
devConfig.plugins.push(new OfflinePlugin());
devConfig.plugins.splice(1,1);


// gh-pages hosting changes start here 
devConfig.output.path = path.join(__dirname, 'docs');
//devConfig.plugins[0] = CleanWebpackPlugin(['docs']);
devConfig.plugins[3] = new HtmlWebpackPlugin({
    filename: 'index.html',
    path: path.resolve(__dirname, 'docs'),
    title: 'Graph JSON',
    template: 'index.ejs'
});
// gh-pages hosting changes ends here 

module.exports = devConfig;