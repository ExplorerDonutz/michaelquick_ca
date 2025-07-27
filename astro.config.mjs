import { defineConfig } from "astro/config";

import preact from '@astrojs/preact';

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import shield from '@kindspells/astro-shield';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), icon(), shield({
    sri: {
      enableStatic: true
    }
  })],

  experimental: {
    csp: {
      directives: [
        "default-src 'self'",
        "script-src  'self' https://www.googletagmanager.com;",
        "connect-src 'self' https://www.googletagmanager.com;",
        "img-src 'self' data:;",
        "font-src 'self' data:;",
        "style-src 'self' 'sha256-STYLE_HASH' 'sha384-STYLE_HASH' 'sha512-STYLE_HASH';",
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