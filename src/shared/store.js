import { createStore, combineReducers, applyMiddleware } from 'redux';

export default function create(reducers, initialState) {
  return createStore(
    combineReducers(reducers),
    initialState,
    applyMiddleware(thunk)
  );
}

function thunk ({ dispatch, getState }) {
  return next => ({ promise, ...rest }) => {
    if (!promise) {
      return next({ ...rest });
    } else {
      return promise.then(
        res => next({ ...rest, count:res }),
        err => console.log(err)
      );
    }
  }
}
