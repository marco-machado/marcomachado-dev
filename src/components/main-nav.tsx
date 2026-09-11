"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main">
      <ul className="flex flex-wrap items-center gap-x-1 gap-y-1">
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
                  "inline-flex min-h-11 items-center px-2.5 text-sm transition-colors hover:text-foreground",
                  isCurrent
                    ? "text-foreground underline decoration-1 underline-offset-4"
                    : "text-muted-foreground",
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
