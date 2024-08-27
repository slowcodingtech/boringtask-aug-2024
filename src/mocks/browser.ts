import { setupWorker } from "msw/browser";
import { DEFAULT_HANDLERS } from "./handlers";

export const mockWorker = setupWorker(...DEFAULT_HANDLERS);
