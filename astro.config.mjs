// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site:'https://manikandan-kalyanasundaram.github.io',
    integrations: [mdx(), sitemap({

    }), tailwind()],
    experimental: {
        responsiveImages: true,
    },
    markdown: {
        shikiConfig: {
            themes: {
                light: "vitesse-light",
                dark: "vitesse-dark",
            },
        },
    },
});
