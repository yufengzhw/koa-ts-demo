// import * as Router from 'koa-router';
import Router from 'koa-router'

import {Context, Next} from "koa";

const router = new Router();

router.prefix('/user')

router.get('/', async (ctx: Context, next: Next) => {
    ctx.body = 'hello user';
    return await next();
})

export default router;
