import { afterAll, afterEach, beforeAll } from "vitest";
import "@testing-library/jest-dom/vitest";

import { mockServer } from "./src/mocks/node";

beforeAll(() => {
  mockServer.listen({ onUnhandledRequest: "bypass" });
});

afterEach(() => {
  mockServer.events.removeAllListeners();
  mockServer.resetHandlers();
});

afterAll(() => {
  mockServer.close();
});
