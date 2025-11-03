import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // Must match your repo name on GitHub Pages
  base: "/saikrishna-portfolio.io/",
  server: { host: "::", port: 8080 },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // ✅ So production build has readable stack traces
  build: {
    sourcemap: true,
  },
});
