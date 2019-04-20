'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/client/app',
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'app.min.js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    })
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader?plugins[]=@babel/proposal-class-properties&presets[]=@babel/react&presets[]=@babel/env'],
      exclude: /node_modules/
    }]
  }
};
