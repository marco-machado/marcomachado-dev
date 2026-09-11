import { site } from "@/lib/site";
import { ContactLinks } from "@/components/contact-links";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-2xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-6 text-sm text-muted-foreground">
        <p>
          {new Date().getFullYear()}&nbsp;{site.author}
        </p>
        <div className="flex flex-wrap items-center gap-x-5">
          <ContactLinks muted />
          <a
            href="/rss.xml"
            className="inline-flex min-h-11 items-center font-mono text-xs transition-colors hover:text-foreground"
          >
            RSS
          </a>
        </div>
      </div>
    </footer>
  );
}
