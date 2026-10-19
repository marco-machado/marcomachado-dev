import Link from "next/link";
import { navItems, site } from "@/lib/site";
import { ContactLinks } from "@/components/contact-links";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner mx-auto flex w-full flex-wrap items-center justify-between">
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
        <p className="footer-copy">
          ©&nbsp;{new Date().getFullYear()}&nbsp;{site.author}
        </p>
        <div className="footer-links flex flex-wrap items-center">
          <ContactLinks className="footer-social" />
          <a href="/rss.xml" className="footer-rss inline-flex min-h-11 items-center">
            RSS
          </a>
        </div>
      </div>
    </footer>
  );
}
