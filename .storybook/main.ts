import type { StorybookConfig } from "@storybook-astro/framework";
import tailwindcss from "@tailwindcss/vite";
import { mergeConfig } from "vite";
import { fileURLToPath } from "node:url";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook-astro/framework",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    const nextConfig = mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("../src", import.meta.url)),
          "astro:i18n": fileURLToPath(new URL("./astro-i18n-mock.ts", import.meta.url)),
        },
      },
    });

    // @storybook-astro/framework sets both Vite <=7 esbuildOptions and Vite 8
    // rolldownOptions for compatibility. This project uses Vite 8, so remove the
    // deprecated key to avoid noisy dev-server warnings.
    if (nextConfig.optimizeDeps) {
      delete nextConfig.optimizeDeps.esbuildOptions;
    }

    return nextConfig;
  },
};

export default config;
