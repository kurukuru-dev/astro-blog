// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  output: "static",
  integrations: [tailwind(), react()],
  site: "https://kurukuru-dev.github.io",
  base: process.env.GITHUB_PAGES ? "/astro-ec-site/" : "/",
});
