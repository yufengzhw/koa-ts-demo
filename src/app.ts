import Koa, {Context, Next} from 'koa';
import path from 'path';
import bodyParser from 'koa-bodyparser';
import views from 'koa-views';
import json from 'koa-json';
import onerror from 'koa-onerror';
import logger from 'koa-logger';
import koaStatic from 'koa-static';
import AppRouter from './router';

// create koa app
const app = new Koa();
// error handler
onerror(app);

app.use(bodyParser({
    enableTypes: ['json', 'form', 'text'],
}));
app.use(json());
app.use(logger());
app.use(koaStatic(path.join(__dirname, '../public')));

app.use(views(path.resolve(__dirname, '../public/views'), {
    extension: 'ejs',
}));

app.use(async (ctx: Context, next: Next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})

app.use(AppRouter.routes())
    .use(AppRouter.allowedMethods());

app.on('error', (err: Error, ctx: Context) => {
    console.error('server error', err, ctx);
});

export default app;
