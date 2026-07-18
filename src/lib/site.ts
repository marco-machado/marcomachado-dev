import type { Metadata } from "next";

export const site = {
  url: "https://marcomachado.dev",
  title: "Marco Machado",
  description:
    "Software engineer, writer, and builder. Personal site and blog.",
  author: "Marco Machado",
};

export const navItems = [
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
  { label: "Uses", href: "/uses/" },
  { label: "AI Tools", href: "/ai-tools/" },
];

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
