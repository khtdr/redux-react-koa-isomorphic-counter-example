global.__CLIENT__ = false;
global.__SERVER__ = true;

import '@babel/polyfill';
import Koa from 'koa';

const app = new Koa();
export default app;

import serve from 'koa-static';
app.use(serve('public'));

import api from './api';
app.use(api());

import counter from './counter';
app.use(counter());

app.listen(3000);
console.log('http://localhost:3000');
