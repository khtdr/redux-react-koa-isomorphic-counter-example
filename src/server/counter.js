import React from 'react';
import ReactDOMServer from 'react-dom/server';
import nunjucks from 'nunjucks';
import { Provider } from 'react-redux';

import create from '../shared/store';
import reducers from '../shared/reducers';
import { loadCounter } from '../shared/actions';
import CounterApp from '../shared/apps';

nunjucks.configure('views', { autoescape: true });

export default function counter() {
  return async function (ctx, next) {
    if (ctx.url != '/') return next()
    const store = create(reducers);
    await store.dispatch(loadCounter());
    var state = store.getState();

    const appString = ReactDOMServer.renderToString(
      <Provider store={store}>
        <CounterApp {...state} />
      </Provider>
    );

    ctx.body = nunjucks.render('index.html', {
      appString,
      initialState:JSON.stringify(state),
      env:process.env
    });
  };
}

