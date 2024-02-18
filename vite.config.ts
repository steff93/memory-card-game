import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import pluginChecker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginChecker({ typescript: true })],
  base: "/memory-card-game/",
});
