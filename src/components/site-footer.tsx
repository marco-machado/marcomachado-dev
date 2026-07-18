import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-2xl flex-wrap items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground">
        <p>
          {new Date().getFullYear()} {site.author}
        </p>
        <a
          href="/rss.xml"
          className="transition-colors hover:text-foreground"
        >
          RSS
        </a>
      </div>
    </footer>
  );
}
