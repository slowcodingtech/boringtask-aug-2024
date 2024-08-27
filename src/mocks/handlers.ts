import { http, HttpResponse, type RequestHandler } from "msw";

export const DEFAULT_HANDLERS: RequestHandler[] = [
  http.get("/api/v1/markets", () => {
    return HttpResponse.json([
      {
        name: "BTC-USD",
        syntheticName: "BTC",
        syntheticPrecision: 5,
        collateralName: "USD",
        collateralPrecision: 1,
      },
      {
        name: "ETH-USD",
        syntheticName: "ETH",
        syntheticPrecision: 4,
        collateralName: "USD",
        collateralPrecision: 2,
      },
    ]);
  }),
];
