import 'babel/polyfill';
import koa from 'koa';

const app = koa();
export default app;

import serve from 'koa-static';
app.use(serve('public'));

import api from './api';
app.use(api());

import render from './render';
app.use(render());

app.listen(3000);
console.log('ready');
