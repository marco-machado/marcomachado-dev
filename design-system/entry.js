// Bundle entry: the site's components, exposed as window.MarcoMachado for the design system.
import * as React from "react";
import { PageHeader } from "../src/components/page-header";
import { SectionHead } from "../src/components/section-head";
import { ArticleRow } from "../src/components/article-row";
import { KvSection } from "../src/components/kv-section";
import { ExternalLink } from "../src/components/external-link";
import { Subscribe } from "../src/components/subscribe";
import { ContactLinks } from "../src/components/contact-links";
import { MainNav } from "../src/components/main-nav";
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
  PageHeader,
  SectionHead,
  ArticleRow,
  KvSection,
  ArticleContent,
  ExternalLink,
  Subscribe,
  MainNav,
  ContactLinks,
  SiteHeader,
  SiteFooter,
};
