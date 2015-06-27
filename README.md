

What is this?
=============

Bundled with [Redux](https://github.com/gaearon/redux) is an example
application called
[counter](https://github.com/gaearon/redux/tree/master/examples/counter).

This is an isomorphic port of the counter app using [Koa](http://koajs.com/).  It uses [isomorphic-fectch](https://github.com/matthew-andrews/isomorphic-fetch) to load the initial state on the server, and update the state from the client. Data is `POST`-ed and `GET`'ed from an API within the Koa application.


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

