// Props of the components in window.MarcoMachado, taken from src/components/*.tsx.
import type * as React from "react";

export interface PageHeaderProps {
  title: string;
  description?: React.ReactNode;
  /** Shell command printed above the title. */
  command?: string;
  /** What the command printed, shown under it. */
  output?: string;
  /** Extra header content after the description. */
  children?: React.ReactNode;
}
export declare function PageHeader(props: PageHeaderProps): React.JSX.Element;

export interface SectionHeadProps {
  /** Id of the h2, for the section's aria-labelledby. */
  id: string;
  title: React.ReactNode;
  /** A link at the end of the row. An http(s) href renders an ExternalLink, any other an internal link with an arrow. */
  more?: { label: string; href: string };
  className?: string;
}
export declare function SectionHead(props: SectionHeadProps): React.JSX.Element;

export interface Article {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  /** Kebab-case slugs; shown through formatTag() ("ai-and-engineering" → "AI and engineering"). */
  tags: string[];
  /** Markdown source. ArticleRow uses it only for the reading time (220 words a minute). */
  body: string;
  /** Path of the Cover Image. ArticleRow shows it only when set. */
  coverImage?: string;
  coverImageAlt?: string;
}
export interface ArticleRowProps {
  article: Article;
  /** Default "h2". Use "h3" under a SectionHead. */
  headingLevel?: "h2" | "h3";
}
export declare function ArticleRow(props: ArticleRowProps): React.JSX.Element;

export interface KvItem { name: string; href: string }
export interface KvRow { key: string; items: KvItem[]; note?: string }
export interface KvSectionData { id: string; title: string; rows: KvRow[] }
export interface KvSectionProps { section: KvSectionData }
export declare function KvSection(props: KvSectionProps): React.JSX.Element;

export interface ArticleContentProps {
  /** HTML from renderMarkdown() (unified + remark-gfm + Shiki, github-dark). */
  html: string;
  className?: string;
}
export declare function ArticleContent(props: ArticleContentProps): React.JSX.Element;

export interface ExternalLinkProps {
  href: string;
  /** Fragment id, for deep links to the entry (Uses, AI Tools). */
  id?: string;
  className?: string;
  children: React.ReactNode;
}
/** Opens in a new tab, adds the ↗ marker and a screen-reader "(opens in a new tab)". */
export declare function ExternalLink(props: ExternalLinkProps): React.JSX.Element;

export interface SubscribeProps {
  className?: string;
}
/** "$ subscribe via RSS", linking /rss.xml. */
export declare function Subscribe(props: SubscribeProps): React.JSX.Element;

/** No props: items come from navItems; the current page from usePathname() (window.__mmPathname in previews). */
export declare function MainNav(): React.JSX.Element;

export interface ContactLinksProps {
  className?: string;
}
export declare function ContactLinks(props: ContactLinksProps): React.JSX.Element;

/** No props. */
export declare function SiteHeader(): React.JSX.Element;

/** No props. */
export declare function SiteFooter(): React.JSX.Element;
