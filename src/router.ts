import Router from 'koa-router';
import IndexRouter from "./routes/index";
import UserRouter from "./routes/user";

const router = new Router();
router.use(IndexRouter.routes())
    .use(IndexRouter.allowedMethods());
router.use(UserRouter.routes())
    .use(UserRouter.allowedMethods());

export default router;
