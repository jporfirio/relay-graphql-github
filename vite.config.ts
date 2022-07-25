/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import relay from "vite-plugin-relay";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      graph: path.resolve(__dirname, "./src/__generated__"),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [["relay", { eagerESModules: true }]],
      },
    }),
    // relay,
  ],
  test: {
    globals: true,
    setupFiles: "./src/test-utils/setup.ts",
    environment: "jsdom",
  },
});
