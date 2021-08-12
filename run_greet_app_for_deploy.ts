import { createApp } from "./create_greet_app.ts";

const app = createApp();
addEventListener("fetch", app.fetchEventHandler());
