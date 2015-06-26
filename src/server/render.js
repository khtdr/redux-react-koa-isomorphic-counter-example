import React from 'react';
import App from '../shared/containers/App';
import nunjucks from 'nunjucks';

nunjucks.configure('views', { autoescape: true });

export default function () {
  return function* () {
    this.body = nunjucks.render('index.html', {
      appString: React.renderToString(<App />),
      env: process.env
    });
  };
}

