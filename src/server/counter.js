import React from 'react';
import nunjucks from 'nunjucks';
import CounterApp from '../shared/containers/CounterApp';
import create from '../shared/redux';
import { Provider } from 'react-redux';
import { loadCounter } from '../shared/actions/counter';
import * as stores from '../shared/stores';

nunjucks.configure('views', { autoescape: true });

export default function counter() {
  return function* () {
    const redux = create(stores);
    yield redux.dispatch(loadCounter());
    var state = redux.getState();

    const appString = React.renderToString(
      <Provider redux={redux}>
        {()=><CounterApp {...state} />}
      </Provider>
    );

    this.body = nunjucks.render('index.html', {
      appString,
      initialState:JSON.stringify(state),
      env:process.env
    });
  };
}

