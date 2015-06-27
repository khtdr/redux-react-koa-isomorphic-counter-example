import { createRedux, createDispatcher, composeStores } from 'redux';

export default function create(stores, initialState) {
  const store = composeStores(stores);
  const dispatcher = createDispatcher(store, () => [middleware()]);
  return createRedux(dispatcher, initialState);
}

// promise middleware
function middleware() {
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

