import PostRowStory from "./PostRowStory.astro";

export default {
  title: "Website/PostRow",
  component: PostRowStory,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Blog list row with index, title, description, tags, and date.",
      },
    },
  },
  args: {
    idx: 0,
    slug: "the-prompt-isnt-the-bottleneck",
    title: "The Prompt Isn't the Bottleneck",
    description: "Most teams optimizing their AI prompts are solving the wrong problem.",
    date: "2026-03-04T00:00:00Z",
    tags: ["AI", "Agents"],
    lang: "en",
  },
};

export const Default = {};
export const Portuguese = {
  args: {
    title: "O Prompt Não É o Gargalo",
    description: "A maioria dos times que otimiza prompts de IA está resolvendo o problema errado.",
    tags: ["IA", "Agentes"],
    lang: "pt",
  },
};
