import { defineConfig } from "astro/config";

import preact from '@astrojs/preact';

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import shield from '@kindspells/astro-shield';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), icon(), shield({
    sri: true,

    headers: {
      'content-security-policy':
        "default-src 'self'; frame-ancestors 'self';"
    }
  }),],


  site: "https://michaelquick.ca",

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  redirects: {
    "/blog": {
      status: 301,
      destination: "/blog/1"
    },
    "/home": {
      status: 301,
      destination: "/"
    }
  }
});