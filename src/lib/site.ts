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

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
