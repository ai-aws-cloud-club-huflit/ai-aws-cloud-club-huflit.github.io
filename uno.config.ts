import {
    defineConfig,
    presetIcons,
    presetWebFonts,
    presetWind4,
    transformerVariantGroup,
} from "unocss";

export default defineConfig({
    presets: [
        presetWind4({
            preflights: {
                reset: true,
            },
        }),
        presetIcons({
            extraProperties: {
                display: "inline-block",
                "vertical-align": "middle",
                height: "1.2em",
                width: "1.2em",
            },
        }),
        presetWebFonts({
            themeKey: "font",
            provider: "coollabs",
            fonts: { sans: "Geist", mono: "IBM Plex Mono" },
        }),
    ],
    transformers: [transformerVariantGroup()],
    theme: {
        colors: {
            "bg-100": "hsla(0,0%,100%,1)",
            "bg-200": "hsla(0,0%,98%,1)",
            "gray-100": "hsla(0,0%,95%,1)",
            "gray-200": "hsla(0,0%,92%,1)",
            "gray-300": "hsla(0,0%,90%,1)",
            "gray-400": "hsla(0,0%,92%,1)",
            "gray-500": "hsla(0,0%,79%,1)",
            "gray-600": "hsla(0,0%,66%,1)",
            "gray-700": "hsla(0,0%,56%,1)",
            "gray-800": "hsla(0,0%,49%,1)",
            "gray-900": "hsla(0,0%,40%,1)",
            "gray-1000": "hsla(0,0%,9%,1)",
        },
    },
});
