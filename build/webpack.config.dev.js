const merge = require('webpack-merge');
const common = require('./webpack.config.base.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    host: '0.0.0.0'
  }
});
