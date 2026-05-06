import ButtonStory from "./ButtonStory.astro";

export default {
  title: "Website/OutlinedButton",
  component: ButtonStory,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Large outlined CTA used on the home page.",
      },
    },
  },
  args: {
    label: "Read",
    sub: "Latest posts",
    href: "#",
  },
};

export const Default = {};
export const WithoutSubtitle = { args: { label: "About", sub: undefined } };
