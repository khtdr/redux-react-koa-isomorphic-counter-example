'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/client/app',
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'app.min.js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader?experimental'],
      exclude: /node_modules/
    }]
  }
};
