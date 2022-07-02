import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import AppRouter from './router';

// create koa app
const app = new Koa();

app.use(bodyParser());
app.use(AppRouter.routes())
    .use(AppRouter.allowedMethods());

app.listen(3000);

console.log("Koa application is up and running on port 3000");
