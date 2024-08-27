import { setupServer } from "msw/node";

import { DEFAULT_HANDLERS } from "./handlers";

export const mockServer = setupServer(...DEFAULT_HANDLERS);
