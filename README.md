#### changelog

- Remove deprecated services and update dependencies - _August 10 2022_
- Upgraded to the latest versions. - _May 30 2019_
- Upgraded _everything_ to the latest versions. - _April 20 2019_
- Updated to the latest **React 16** and **Redux 4** - _June 23 2018_
- Added Cypress.io tests with Travis CI - _June 23 2018_

# What is this?

Bundled with [Redux](https://redux.js.org/) is an example
application called
[counter](https://github.com/reduxjs/redux/tree/master/examples/counter).

This is an isomorphic port of the counter app using [Koa](http://koajs.com/). It uses [isomorphic-fectch](https://github.com/matthew-andrews/isomorphic-fetch) to load the initial state on the server, and update the state from the client. Data retrieved and set via `POST`s and `GET`s to and from the API <code>[src/server/api.js](https://github.com/khtdr/redux-react-koa-isomorphic-counter-example/blob/master/src/server/api.js)</code>.

# Installing

```bash
git clone git@github.com:khtdr/redux-react-koa-isomorphic-counter-example.git
cd redux-react-koa-isomorphic-counter-example.git
yarn install
```

# Running

To run a compiled production version:

```bash
yarn start
```

_If you have errors, make sure you are using an **LTS node version** and try again._

# Using

- Open <code>[http://localhost:3000](http://localhost:3000)</code>
- Press the buttons a few times
- Reload page and inspect source to see the value in the HTML source

# Development

To run a development version with hot reloading:

```bash
yarn run dev
```

To run dev + Cypress tests:

```bash
yarn run dev &
yarn run cypress:open
```
