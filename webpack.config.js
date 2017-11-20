const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.(jpg|png|gif)$/,
      use: ['file-loader']
    }, {
      test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
      use: ['file-loader']
    }]
  }
};
