import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";


import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});