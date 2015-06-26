import fetch from 'isomorphic-fetch';
import { UPDATE_COUNTER } from '../constants/ActionTypes';

export function increment() {
  return dispatch => {
    fetch('/api/count/inc', { method: 'POST' }).then(res => {
      res.json().then(count => dispatch({
        type: UPDATE_COUNTER, count
      }));
    });
  }
}

export function decrement() {
  return dispatch => {
    fetch('/api/count/dec', { method: 'POST' }).then(res => {
      res.json().then(count => dispatch({
        type: UPDATE_COUNTER, count
      }));
    });
  }
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    if (getState().counter % 2 === 0) { return; }
    else dispatch(increment());
  };
}
