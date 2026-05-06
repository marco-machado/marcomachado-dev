import TopBarStory from "./TopBarStory.astro";

export default {
  title: "Website/TopBar",
  component: TopBarStory,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Merged brand, primary navigation, language switcher, version, and status indicator.",
      },
    },
  },
  argTypes: {
    current: {
      control: "select",
      options: ["home", "blog", "about", "uses", "ai"],
    },
    lang: {
      control: "select",
      options: ["en", "pt"],
    },
  },
  args: {
    lang: "en",
    current: "home",
    currentPath: "",
  },
};

export const Home = {};
export const Posts = { args: { current: "blog", currentPath: "blog" } };
export const Portuguese = { args: { lang: "pt", current: "uses", currentPath: "stack" } };
