import { defineConfig } from "astro/config";

import preact from '@astrojs/preact';

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sri from 'vite-plugin-sri';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), icon(),],

  experimental: {
    csp: {
      directives: [
        "default-src 'self'",
      ],
      styleDirective: {
        hashes: [
          "sha384-styleHash",
          "sha512-styleHash",
          "sha256-styleHash"
        ]
      },
      scriptDirective: {
        hashes: [
          "sha384-scriptHash",
          "sha512-scriptHash",
          "sha256-scriptHash"
        ]
      }


    }
  },

  site: "https://michaelquick.ca",

  vite: {
    plugins: [
      tailwindcss(),
      sri()
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