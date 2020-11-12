import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { MathService } from "./mathService.ts";

Deno.test("MathService", () => {
  const sut = new MathService();
  const result = sut.sum([1, 3, 5]);
  assertEquals(result, 9);
});
