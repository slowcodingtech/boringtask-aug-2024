import { expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import { Markets } from "./markets";

test("loads and displays markets", async () => {
  // given
  render(<Markets />);

  // then
  await waitFor(() => {
    expect(screen.getByText("BTC-USD")).toBeInTheDocument();
    expect(screen.getByText("ETH-USD")).toBeInTheDocument();
  });
});
