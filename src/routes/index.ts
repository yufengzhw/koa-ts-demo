import Router from 'koa-router';

import {Context, Next} from "koa";

const router = new Router();

router.get('/', async (ctx: Context, next: Next) => {
    await ctx.render('index', {
        title: 'Hello Koa!'
    })
    return await next();
})

router.get('/string', async (ctx: Context, next: Next) => {
    ctx.body = 'koa string';
    return await next();
})

router.get('/json', async (ctx: Context, next: Next) => {
    ctx.body = {
        title: 'koa json',
    }
    return await next();
})

export default router;
