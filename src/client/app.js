window.__CLIENT__ = true;
window.__SERVER__ = false;

import 'babel/polyfill';

import React from 'react';
import { Provider } from 'redux/react';
import CounterApp from '../shared/containers/CounterApp';
import create from '../shared/redux';
import * as stores from '../shared/stores';

const state = window.__initialState;
const redux = create(stores, state);

React.render(
  <Provider redux={redux}>
    {()=><CounterApp />}
  </Provider>,
  document.getElementById('App')
);
