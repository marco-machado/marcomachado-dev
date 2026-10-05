// Bundle entry: the site's components, exposed as window.MarcoMachado for the design system.
import * as React from "react";
import { Button } from "../src/components/ui/button";
import { PageHeader } from "../src/components/page-header";
import { ArticleRow } from "../src/components/article-row";
import { KvSection } from "../src/components/kv-section";
import { ContactLinks } from "../src/components/contact-links";
import { MainNav } from "../src/components/main-nav";
import { ThemeToggle } from "../src/components/theme-toggle";
import { SiteHeader } from "../src/components/site-header";
import { SiteFooter } from "../src/components/site-footer";

// Same markup as the Article page: Markdown HTML inside .article-content
// (src/app/blog/[slug]/page.tsx).
function ArticleContent({ html, className }) {
  return React.createElement("div", {
    className: className ? `article-content ${className}` : "article-content",
    dangerouslySetInnerHTML: { __html: html },
  });
}

window.MarcoMachado = {
  Button,
  PageHeader,
  ArticleRow,
  KvSection,
  ArticleContent,
  MainNav,
  ContactLinks,
  ThemeToggle,
  SiteHeader,
  SiteFooter,
};
