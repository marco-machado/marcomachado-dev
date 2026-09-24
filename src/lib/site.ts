import type { Metadata } from "next";

export const site = {
  url: "https://marcomachado.dev",
  title: "Marco Machado",
  description:
    "Engineer, operator, builder. Writing for AI builders and operators — demos, workflows, and takes.",
  author: "Marco Machado",
  email: "marco.machado@gmail.com",
  github: "https://github.com/marco-machado",
  x: "https://x.com/marco_machado",
  xHandle: "@marco_machado",
  linkedin: "https://www.linkedin.com/in/marcomachadodev/",
  instagram: "https://www.instagram.com/marcomachado.dev/",
};

export const navItems = [
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
  { label: "Uses", href: "/uses/" },
  { label: "AI Tools", href: "/ai-tools/" },
];

/** Outbound contact paths shown as quiet text links (no icon soup). */
export const contactLinks = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "GitHub", href: site.github },
  { label: "X", href: site.x },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Instagram", href: site.instagram },
] as const;

/** Turn kebab-case tag slugs into human words for display. */
export function formatTag(tag: string): string {
  return tag
    .split("-")
    .map((word, index) => {
      if (word === "ai") return "AI";
      if (index === 0) return word.charAt(0).toUpperCase() + word.slice(1);
      return word;
    })
    .join(" ");
}

// Pages must rebuild the full alternates object: Next.js replaces it wholesale
// on shallow merge, dropping the layout's RSS autodiscovery entry.
export function pageAlternates(canonical: string): Metadata["alternates"] {
  return {
    canonical,
    types: {
      "application/rss+xml": "/rss.xml",
    },
  };
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
