import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.test.ts?(x)"],
    setupFiles: ["vitest.setup.ts"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.ts?(x)"],
    },
  },
});
