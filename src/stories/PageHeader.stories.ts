import PageHeaderStory from "./PageHeaderStory.astro";

export default {
  title: "Website/PageHeader",
  component: PageHeaderStory,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Standardized header used by Posts, About, Stack, and AI pages.",
      },
    },
  },
  args: {
    eyebrow: "/ section label",
    title: "Page title",
    description: "Short supporting copy that explains what this page is about.",
  },
};

export const Default = {};

export const Posts = {
  args: {
    eyebrow: "/ posts log",
    title: "Posts",
    description: "Notes on engineering, tools, and the craft of building software with intelligent systems in the loop.",
  },
};
