

What is this?
=============

Versioning follows the version redux.

Bundled with [Redux](https://github.com/rackt/redux) is an example
application called
[counter](https://github.com/rackt/redux/tree/master/examples/counter).

This is an isomorphic port of the counter app using [Koa](http://koajs.com/).  It uses [isomorphic-fectch](https://github.com/matthew-andrews/isomorphic-fetch) to load the initial state on the server, and update the state from the client. Data retrieved and set via `POST`s and `GET`s to and from the API  (`src/server/api.js`).


Installing
==========

```bash
git clone git@github.com:khtdr/redux-react-koa-isomorphic-counter-example.git
cd redux-react-koa-isomorphic-counter-example.git
npm install
```


Running
=======

  - _prod_: `npm start`
  - _dev_: `npm run dev`


Using
=====

  - Open `http://localhost:3000`
  - Press the buttons a few times
  - Reload page and inspect source to see the value in the HTML source


Credits
======

Based off the following ideas, code, examples:
  - [Redux](https://github.com/rackt/redux)
  - [Redux - Counter Example](https://github.com/rackt/redux/tree/master/examples/counter)
  - [Flummox Docs App](https://github.com/acdlite/flummox/tree/master/docs)
  - [isomorphic500](https://github.com/gpbl/isomorphic500/)
  - [redux-universal-example](https://github.com/erikras/react-redux-universal-hot-example/)
