import { createApp } from "./create_greet_app.ts";

const app = createApp();
await app.listen({ port: 8888 });
