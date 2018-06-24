window.__CLIENT__ = true;
window.__SERVER__ = false;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import create from '../shared/store';
import * as reducers from '../shared/reducers';
import CounterApp from '../shared/apps';

const state = window.__initialState;
const store = create(reducers, state);

ReactDOM.hydrate(
  <Provider store={store}>
    <CounterApp />
  </Provider>,
  document.getElementById('App')
);
