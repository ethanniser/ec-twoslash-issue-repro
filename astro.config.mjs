// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import expressiveCode from "astro-expressive-code";
import ecTwoSlash from "expressive-code-twoslash";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [
		sitemap(),
		expressiveCode({
			plugins: [ecTwoSlash()],
		}),
	],
});

