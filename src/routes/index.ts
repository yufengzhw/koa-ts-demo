import Router from 'koa-router';

import {Context, Next} from "koa";

const router = new Router();

router.get('/', async (ctx: Context, next: Next) => {
    ctx.body = 'hello koa';
    return await next();
})

export default router;
