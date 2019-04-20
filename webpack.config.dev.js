'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './src/client/app'
  ],
  output: {
    path: path.join(__dirname, '/public/js/'),
    filename: 'app.js',
    publicPath: 'http://localhost:3001/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loaders: ['react-hot-loader/webpack', 'babel-loader?plugins[]=@babel/proposal-class-properties&presets[]=@babel/react&presets[]=@babel/env'],
      exclude: /node_modules/
    }]
  }
};
