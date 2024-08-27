import { expect, test } from "vitest";
import { calcValue } from "./calc-value";

test("calc value correctly", () => {
  expect(calcValue(0.02, 64567.23)).toBe(1291.3446000000001);
});
