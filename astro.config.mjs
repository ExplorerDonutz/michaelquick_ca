import { defineConfig } from "astro/config";
import { resolve } from 'node:path'
import preact from '@astrojs/preact';

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import shield from '@kindspells/astro-shield';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), icon(), shield({
    sri: {
      enableStatic: true
    },
    cspDirectives: {
      'default-src': "'none'",
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