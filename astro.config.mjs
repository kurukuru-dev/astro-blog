// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://kurukuru-dev.github.io/astro-ec-site/",
  base: isGitHubPages ? "/astro-ec-site/" : "/",
});
