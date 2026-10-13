import { site } from "@/lib/site";
import { Brand } from "@/components/brand";
import { MainNav } from "@/components/main-nav";
import { ThemeOnly } from "@/components/theme-only";
import { ThemePicker } from "@/components/theme-picker";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="site-header classic:border-b">
      <div className="site-header__inner mx-auto flex w-full flex-wrap items-center classic:max-w-2xl classic:gap-x-4 classic:gap-y-1 classic:px-6 classic:py-3">
        <Brand className="mr-auto inline-flex min-h-11 items-center classic:font-serif classic:text-lg classic:font-semibold classic:tracking-tight" />
        <MainNav />
        <ThemeOnly except={["classic"]}>
          <a href={`mailto:${site.email}`} className="header-cta">
            <ThemeOnly as="span" themes={["orbital"]}>
              Let&apos;s talk
            </ThemeOnly>
            <ThemeOnly as="span" except={["orbital"]}>
              Contact
            </ThemeOnly>
          </a>
        </ThemeOnly>
        <div className="site-header__tools flex items-center">
          <ThemeOnly themes={["classic"]}>
            <ThemeToggle />
          </ThemeOnly>
          <ThemePicker />
        </div>
      </div>
    </header>
  );
}
