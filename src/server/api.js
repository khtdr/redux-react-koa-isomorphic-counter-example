import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import route from 'koa-route';
import compose from 'koa-compose';

let server_count = 0;

const app = new Koa()
app
  .use(bodyparser())
  .use(route.get('/api/count', ctx => {
    ctx.body = server_count;
  }))
  .use(route.post('/api/count/inc', ctx => {
    ctx.body = ++server_count;
  }))
  .use(route.post('/api/count/dec', ctx => {
    ctx.body = --server_count;
  }))
  .use(route.post('/api/count/reset', ctx => {
    server_count = 0;
    ctx.body = server_count;
  }))
  .use(route.get('/favicon.ico', () => {
    // ignore this request
  }))
;

export default function () {
  return compose(app.middleware);
}

