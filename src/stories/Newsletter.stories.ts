import NewsletterStory from "./NewsletterStory.astro";

export default {
  title: "Website/Newsletter",
  component: NewsletterStory,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Newsletter signup block used on the blog index and article pages.",
      },
    },
  },
  argTypes: {
    lang: {
      control: "select",
      options: ["en", "pt"],
    },
  },
  args: {
    lang: "en",
  },
};

export const English = {};
export const Portuguese = { args: { lang: "pt" } };
