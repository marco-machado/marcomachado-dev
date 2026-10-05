// Props of the components in window.MarcoMachado, taken from src/components/*.tsx.
import type * as React from "react";

export type ButtonVariant = "default" | "outline" | "secondary" | "ghost" | "destructive" | "link";
export type ButtonSize = "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
export interface ButtonProps extends React.ComponentProps<"button"> {
  /** Default "default" (filled primary). */
  variant?: ButtonVariant;
  /** Default "default" (32px). */
  size?: ButtonSize;
  /** Render the single child element with button styling (Radix Slot). */
  asChild?: boolean;
}
export declare function Button(props: ButtonProps): React.JSX.Element;

export interface PageHeaderProps {
  title: string;
  description?: string;
}
export declare function PageHeader(props: PageHeaderProps): React.JSX.Element;

export interface Article {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  /** Kebab-case slugs; shown through formatTag() ("ai-and-engineering" → "AI and engineering"). */
  tags: string[];
}
export interface ArticleRowProps {
  article: Article;
  /** Default "h2". Use "h3" under a section label. */
  headingLevel?: "h2" | "h3";
}
export declare function ArticleRow(props: ArticleRowProps): React.JSX.Element;

export interface KvRow { key: string; val: string; note?: string }
export interface KvSectionData { id: string; title: string; rows: KvRow[] }
export interface KvSectionProps { section: KvSectionData }
export declare function KvSection(props: KvSectionProps): React.JSX.Element;

export interface ArticleContentProps {
  /** HTML from renderMarkdown() (unified + remark-gfm + Shiki dual themes). */
  html: string;
  className?: string;
}
export declare function ArticleContent(props: ArticleContentProps): React.JSX.Element;

/** No props: items come from navItems; the current page from usePathname() (window.__mmPathname in previews). */
export declare function MainNav(): React.JSX.Element;

export interface ContactLinksProps {
  className?: string;
  /** Quieter mono style for footer / About facts. */
  muted?: boolean;
}
export declare function ContactLinks(props: ContactLinksProps): React.JSX.Element;

/** No props: toggles light/dark through next-themes. */
export declare function ThemeToggle(): React.JSX.Element;

/** No props. */
export declare function SiteHeader(): React.JSX.Element;

/** No props. */
export declare function SiteFooter(): React.JSX.Element;
