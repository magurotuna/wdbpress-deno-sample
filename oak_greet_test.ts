import { createApp } from "./create_greet_app.ts";
import { superoak } from "https://deno.land/x/superoak@4.4.0/mod.ts";

const app = createApp();

Deno.test(
  `GET /greet に対して、ステータスコード200で "Hello anonymous!" が返ってくること`,
  async () => {
    const request = await superoak(app);
    await request.get("/greet").expect(200).expect("Hello anonymous!");
  }
);

Deno.test(
  `GET /greet?name=webdb に対して、ステータスコード200で "Hello webdb!" が返ってくること`,
  async () => {
    const request = await superoak(app);
    await request.get("/greet?name=webdb").expect(200).expect("Hello webdb!");
  }
);

Deno.test(
  `GET /greet?name=webdb&foo=bar に対して、ステータスコード200で "Hello webdb!" が返ってくること`,
  async () => {
    const request = await superoak(app);
    await request.get("/greet?name=webdb").expect(200).expect("Hello webdb!");
  }
);

Deno.test(`GET / に対して、ステータスコード404が返ってくること`, async () => {
  const request = await superoak(app);
  await request.get("/").expect(404);
});

Deno.test(
  `GET /greet/foo に対して、ステータスコード404が返ってくること`,
  async () => {
    const request = await superoak(app);
    await request.get("/greet/foo").expect(404);
  }
);

Deno.test(
  `POST /greet に対して、ステータスコード404が返ってくること`,
  async () => {
    const request = await superoak(app);
    await request.post("/greet").expect(404);
  }
);
