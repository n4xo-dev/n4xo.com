import { defineConfig } from 'astro/config';
import vercelStatic from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  adapter: vercelStatic(),
  output: "static"
});