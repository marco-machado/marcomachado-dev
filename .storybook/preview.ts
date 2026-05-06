import type { Preview } from "@storybook-astro/framework";
import "../src/styles/global.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    docs: {
      toc: true,
    },
    backgrounds: {
      default: "site-dark",
      values: [
        { name: "site-dark", value: "#000000" },
        { name: "panel", value: "#050505" },
      ],
    },
  },
};

export default preview;
