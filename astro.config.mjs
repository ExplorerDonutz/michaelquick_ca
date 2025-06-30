import { defineConfig } from "astro/config";

import preact from '@astrojs/preact';

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";


// https://astro.build/config
export default defineConfig({
  integrations: [preact(), icon(),],
  site: "https://michaelquick.ca",

  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/blog": "/blog/1"
  }
});