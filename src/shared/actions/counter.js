import { get, post } from '../fetch';
import { UPDATE_COUNTER } from '../constants/ActionTypes';

export function increment() {
  return {
    type: UPDATE_COUNTER,
    promise: post('/api/count/inc')
  };
}

export function decrement() {
  return {
    type: UPDATE_COUNTER,
    promise: post('/api/count/dec')
  };
}

export function loadCounter() {
  return {
    type: UPDATE_COUNTER,
    promise: get('/api/count')
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    if (getState().counter % 2 === 0) { return; }
    else dispatch(increment());
  };
}
