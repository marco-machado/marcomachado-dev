import { site } from "@/lib/site";

/**
 * Homepage showcase content for the design themes. The site has no project
 * pages yet, so the projects and the quote are sample data; Classic hides them.
 */

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

/** Sample data. */
export const projects: Project[] = [
  {
    title: "SaaS Platform",
    description:
      "A multi-tenant platform that helps teams run their operations. Built for performance, scale and a great developer experience.",
    tags: ["Laravel", "Vue", "Stripe"],
    href: site.github,
  },
  {
    title: "Internal Tools",
    description:
      "Custom tools that help companies move faster, from idea to production, with a focus on simplicity.",
    tags: ["Laravel", "Inertia", "Tailwind"],
    href: site.github,
  },
];

/** Sample data. */
export const quote = "Better tools. Calmer days. A more intentional web.";

export const heroLead =
  "Software engineer shipping web apps since 2014. I write for AI builders and operators: small demos, agents in real shipping, and takes while the work is still in progress.";

export const heroMeta = [
  { label: "Location", value: "Remote, Brazil" },
  { label: "Focus", value: "Web apps · Dev tools · AI" },
  /** Sample data. */
  { label: "Status", value: "Open to new projects", live: true },
  { label: "Since", value: "2014" },
];

/** A short pick from Uses and AI Tools. */
export const toolPicks = [
  { name: "Claude Code", href: "/ai-tools/" },
  { name: "Codex", href: "/ai-tools/" },
  { name: "PhpStorm", href: "/uses/" },
  { name: "Warp", href: "/uses/" },
  { name: "Notion", href: "/uses/" },
  { name: "Raycast", href: "/uses/" },
];
