import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";
import { add42 } from "./add42.ts";

Deno.test("add42(0) is 42", () => {
  const result = add42(0);
  assertEquals(result, 42);
});
