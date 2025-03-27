import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  server: {
    host: true,
    port: 3000,
  },
  build: {
    outDir: "dist",
  },

  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
