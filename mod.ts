import { Application, httpErrors, send } from "https://deno.land/x/oak/mod.ts";

const HOSTNAME = "0.0.0.0";
const PORT = 3000;

const app = new Application();

// Send static content
app.use(async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    hidden: true,
    root: `${Deno.cwd()}/public`,
    index: "index.html",
  }).catch(async (e) => {
    // If the file is not found, redirect to the React app where a 404 page can be displayed if desired
    if (e instanceof httpErrors.NotFound) {
      // This was made manually so that I didn't have to use the send methods again
      const imageBuf = await Deno.readFile(`${Deno.cwd()}/public/index.html`);
      ctx.response.body = imageBuf;
      ctx.response.headers.set("Content-Type", "text/html; charset=utf-8");
    }
  });
});

console.log(`Server listening on http://${HOSTNAME}/:${PORT}`);
await app.listen({
  hostname: HOSTNAME,
  port: PORT,
});
