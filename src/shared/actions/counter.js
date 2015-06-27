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

export function incrementIfOdd(counter) {
  if (counter % 2 === 1) {
    return increment();
  }
}
