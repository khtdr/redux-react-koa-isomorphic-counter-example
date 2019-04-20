[![Greenkeeper badge](https://badges.greenkeeper.io/khtdr/redux-react-koa-isomorphic-counter-example.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/khtdr/redux-react-koa-isomorphic-counter-example.svg?branch=master)](https://travis-ci.org/khtdr/redux-react-koa-isomorphic-counter-example)
[![Dependency Status](https://david-dm.org/khtdr/redux-react-koa-isomorphic-counter-example/master.svg)](https://david-dm.org/khtdr/redux-react-koa-isomorphic-counter-example/master)
[![devDependency Status](https://david-dm.org/khtdr/redux-react-koa-isomorphic-counter-example/master/dev-status.svg)](https://david-dm.org/khtdr/redux-react-koa-isomorphic-counter-example/master#type=dev)

#### updates
  - Upgraded _everything_ to the latest versions. - _April 20 2019_
  - Updated to the latest __React 16__ and __Redux 4__ - _June 23 2018_
  - Added Cypress.io tests with Travis CI - _June 23 2018_

#### todo
  - Document directory structures and build process

What is this?
=============

Bundled with [Redux](https://redux.js.org/) is an example
application called
[counter](https://github.com/reduxjs/redux/tree/master/examples/counter).

This is an isomorphic port of the counter app using [Koa](http://koajs.com/).  It uses [isomorphic-fectch](https://github.com/matthew-andrews/isomorphic-fetch) to load the initial state on the server, and update the state from the client. Data retrieved and set via `POST`s and `GET`s to and from the API  <code>[src/server/api.js](https://github.com/khtdr/redux-react-koa-isomorphic-counter-example/blob/master/src/server/api.js)</code>.


Installing
==========

```bash
git clone git@github.com:khtdr/redux-react-koa-isomorphic-counter-example.git
cd redux-react-koa-isomorphic-counter-example.git
yarn install
```

Running
=======

To run a compiled production version:
```bash
yarn start
```

_If you have errors, make sure you are using an __LTS node version__ and try again._

Using
=====

  - Open <code>[http://localhost:3000](http://localhost:3000)</code>
  - Press the buttons a few times
  - Reload page and inspect source to see the value in the HTML source

Development
===========

To run a development version with hot reloading:
```bash
yarn run dev
```

To run dev + Cypress tests:
```bash
yarn run dev &
yarn run cypress:open
```

