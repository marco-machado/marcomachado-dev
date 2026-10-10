"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="site-nav">
      <ul className="site-nav__list flex flex-wrap items-center classic:gap-x-1 classic:gap-y-1">
        {navItems.map((item) => {
          const current = pathname.endsWith("/") ? pathname : `${pathname}/`;
          const href = item.href.endsWith("/") ? item.href : `${item.href}/`;
          const isCurrent = current === href || current.startsWith(href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={cn(
                  "site-nav__link inline-flex min-h-11 items-center classic:px-2.5 classic:text-sm classic:transition-colors classic:hover:text-foreground",
                  isCurrent
                    ? "classic:text-foreground classic:underline classic:decoration-1 classic:underline-offset-4"
                    : "classic:text-muted-foreground",
                )}
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
