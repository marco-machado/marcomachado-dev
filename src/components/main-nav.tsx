"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="site-nav">
      <ul className="site-nav__list flex flex-wrap items-center">
        {navItems.map((item) => {
          const current = pathname.endsWith("/") ? pathname : `${pathname}/`;
          const href = item.href.endsWith("/") ? item.href : `${item.href}/`;
          const isCurrent = current === href || current.startsWith(href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className="site-nav__link inline-flex min-h-11 items-center"
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
