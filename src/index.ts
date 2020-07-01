import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import 'dotenv/config';

import database from './database';
import User from './controller/User';

const app:Koa = new Koa();
const router:Router = new Router();

app.use(json());
app.use(bodyParser());
app.use(User.routes());

app.use(async (ctx: Koa.DefaultContext) => {
  // Just so we don't 404 on the homepage
  ctx.body = { msg: 'Hello Koa' };
});

const PORT:number = Number(process.env.PORT) || 9000;

// eslint-disable-next-line no-console
console.log('App started on:', `http://localhost:${PORT}`);

// app.listen(PORT);
database
  .then(() => app.listen(PORT))
  .catch(console.error);
