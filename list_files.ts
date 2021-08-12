import { walk } from "https://deno.land/std@0.102.0/fs/mod.ts";

for await (const entry of walk(".", { includeDirs: false })) {
  console.log(entry.path);
}
