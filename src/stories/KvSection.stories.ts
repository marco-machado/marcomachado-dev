import KvSectionStory from "./KvSectionStory.astro";

export default {
  title: "Website/KvSection",
  component: KvSectionStory,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Key/value content block used by the Stack page.",
      },
    },
  },
  args: {
    num: "01",
    title: "Development",
    rows: [
      { key: "Editor", val: "PhpStorm" },
      { key: "Terminal", val: "Warp" },
      { key: "Prompt", val: "Starship" },
      { key: "Containers", val: "Docker Desktop" },
    ],
  },
};

export const Default = {};
