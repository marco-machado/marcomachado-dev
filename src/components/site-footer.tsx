import Link from "next/link";
import { navItems, site } from "@/lib/site";
import { Brand } from "@/components/brand";
import { ContactLinks } from "@/components/contact-links";
import { ThemeOnly } from "@/components/theme-only";

export function SiteFooter() {
  return (
    <footer className="site-footer classic:border-t">
      <div className="site-footer__inner mx-auto flex w-full flex-wrap items-center justify-between classic:max-w-2xl classic:gap-x-4 classic:gap-y-2 classic:px-6 classic:py-6 classic:text-sm classic:text-muted-foreground">
        <ThemeOnly except={["classic"]}>
          <div className="footer-brand">
            <Brand className="inline-flex min-h-11 items-center" />
            <p className="footer-tagline">Building for a more intentional web.</p>
          </div>
          <nav aria-label="Footer" className="footer-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="footer-nav__link inline-flex min-h-11 items-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </ThemeOnly>
        <p className="footer-copy">
          <ThemeOnly as="span" except={["classic"]}>
            ©&nbsp;
          </ThemeOnly>
          {new Date().getFullYear()}&nbsp;{site.author}
        </p>
        <div className="footer-links flex flex-wrap items-center classic:gap-x-5">
          <ContactLinks muted className="footer-social" />
          <a
            href="/rss.xml"
            className="footer-rss inline-flex min-h-11 items-center classic:font-mono classic:text-xs classic:transition-colors classic:hover:text-foreground"
          >
            RSS
          </a>
        </div>
      </div>
    </footer>
  );
}
