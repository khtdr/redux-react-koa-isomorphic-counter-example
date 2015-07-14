import { createRedux, createDispatcher, composeReducers } from 'redux';
//import middleware from 'redux-promise';

export default function create(reducers, initialState) {
  const store = composeReducers(reducers);
  //const dispatcher = createDispatcher(store, () => [middleware]);
  return createRedux(dispatcher, initialState);
}

// promise middleware
/*
function my_middleware() {
  return (next) => (action) => {
    if (!action) return;
    const { promise, ...rest } = action;
    if (!promise) { return next({ ...rest }); }
    return promise.then(
      res => next({...rest, count:res}),
      err => console.log(err)
    );
  };
}
*/
