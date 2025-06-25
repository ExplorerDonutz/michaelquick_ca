import { defineConfig } from "astro/config";

import preact from '@astrojs/preact';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(),],
  site: "https://michaelquick.ca",

  vite: {
    plugins: [tailwindcss()],
  },
});