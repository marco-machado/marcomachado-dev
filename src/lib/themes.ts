/** The nine dark design themes, in picker order. Classic (dark/light) comes first. */
export const designThemes = [
  { id: "terminal", name: "Terminal", note: "Mono CLI workspace" },
  { id: "orbital", name: "Orbital", note: "Planet horizon, thin sans" },
  { id: "editorial", name: "Editorial", note: "Tall caps, numbered sections" },
  { id: "command", name: "Command", note: "Terminal with a numbered menu" },
  { id: "eclipse", name: "Eclipse", note: "Cinematic orbital, glass cards" },
  { id: "atelier", name: "Atelier", note: "Serif, warm and crafted" },
  { id: "core", name: "Core", note: "Developer core, dotted globe" },
  { id: "cinematic", name: "Cinematic", note: "Bold serif over a portrait" },
  { id: "abstract", name: "Abstract", note: "Wide caps, glowing arcs" },
] as const;

export type DesignThemeId = (typeof designThemes)[number]["id"];

/** "classic" covers both the dark and light values of the original design. */
export type ThemeKey = "classic" | DesignThemeId;

export const designThemeIds: DesignThemeId[] = designThemes.map((t) => t.id);

/** Every value next-themes may write to <html data-theme>. */
export const themeValues = ["dark", "light", ...designThemeIds];

export const terminalThemes: DesignThemeId[] = ["terminal", "command", "core"];
