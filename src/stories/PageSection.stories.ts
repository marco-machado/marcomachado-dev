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
  argTypes: {
    spacing: {
      control: "select",
      options: ["default", "large"],
    },
  },
  args: {
    title: "Latest Posts",
    num: "01",
    spacing: "default",
  },
};

export const Default = {};
export const LargeSpacing = { args: { spacing: "large" } };
