Currently bundling is being done with help of the builtin Deno bundling, so this
is not a perfect solution or one that is meant to work on every browser out
there

To start the server with all the correct permissions you need to run

```bash
deno run --allow-read=public --allow-net=0.0.0.0:3000 mod.ts
```

To bundle your project (the webserver expects an `app.js` file to exist at all
times in the `public` folder) you need to run the following command

```bash
deno bundle client/App.tsx public/app.js
```
