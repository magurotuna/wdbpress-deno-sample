import {
  Application,
  helpers,
  HttpServerStd, // Deno v1.13.0 以降で動かす場合、これが必要
  Router,
} from "https://deno.land/x/oak@v7.7.0/mod.ts";

export function createApp(): Application {
  const app = new Application({
    serverConstructor: HttpServerStd, // Deno v1.13.0 以降で動かす場合、これが必要
  });
  // Deno v1.12.2 以前では
  // const app = new Application();
  // で OK

  const router = new Router();

  router.get("/greet", (ctx) => {
    const { name = "anonymous" } = helpers.getQuery(ctx);
    ctx.response.body = `Hello ${name}!`;
  });

  app.use(router.routes());

  return app;
}
