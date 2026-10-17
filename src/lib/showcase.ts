/** Homepage showcase content. */

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

/**
 * Selected work on the home page. Empty until there are real projects to
 * show: the section and the hero's "view work" prompt appear once it has
 * entries.
 */
export const projects: Project[] = [];

export const heroLead =
  "Software engineer shipping web apps since 2014. I write for AI builders and operators: small demos, agents in real shipping, and takes while the work is still in progress.";

export const heroMeta = [
  { label: "Location", value: "Remote, Brazil" },
  { label: "Focus", value: "Web apps · Dev tools · AI" },
];

/** A short pick from Uses and AI Tools; each links to its entry on that page. */
export const toolPicks = [
  { name: "Claude Code", page: "/ai-tools/" },
  { name: "Codex", page: "/ai-tools/" },
  { name: "PhpStorm", page: "/uses/" },
  { name: "Warp", page: "/uses/" },
  { name: "Notion", page: "/uses/" },
  { name: "Raycast", page: "/uses/" },
];
