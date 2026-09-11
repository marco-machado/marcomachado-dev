import Link from "next/link";
import { site } from "@/lib/site";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex w-full max-w-2xl flex-wrap items-center gap-x-4 gap-y-1 px-6 py-3">
        <Link
          href="/"
          className="mr-auto inline-flex min-h-11 items-center font-serif text-lg font-semibold tracking-tight"
        >
          {site.title}
        </Link>
        <MainNav />
        <ThemeToggle />
      </div>
    </header>
  );
}
