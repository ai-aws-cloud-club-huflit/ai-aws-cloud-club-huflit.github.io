import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  plugins: [react(), UnoCSS()],
  server: {
    port: 3000,
  },
  css: {
    transformer: "lightningcss",
  },
});
