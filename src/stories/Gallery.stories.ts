import ComponentGallery from "./ComponentGallery.astro";

export default {
  title: "Website/Component Gallery",
  component: ComponentGallery,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Single-page visual overview of the website component system.",
      },
    },
  },
};

export const Gallery = {};
