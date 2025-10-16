import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

export default defineConfig({
    base: "/",
    plugins: [
        UnoCSS(),
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler"]],
            },
        }),
    ],
    build: {
        cssMinify: "lightningcss",
    },
    css: {
        transformer: "lightningcss",
    },
    server: {
        port: 3000,
    },
});
