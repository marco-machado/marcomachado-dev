import PageSectionStory from "./PageSectionStory.astro";

export default {
  title: "Website/PageSection",
  component: PageSectionStory,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Standardized section wrapper with optional SectionLabel and consistent vertical rhythm.",
      },
    },
  },
  args: {
    title: "Latest Posts",
    num: "01",
  },
};

export const Default = {};
