'use strict';

//import 'babel/polyfill';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../../webpack.config.dev';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  }
}).listen(3001, '0.0.0.0', function (err) {
  if (err) { console.log(err); }
  console.log('Listening at localhost:3001');
});
