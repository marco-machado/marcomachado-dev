"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * After client-side navigation, moves keyboard focus to the new page's
 * heading so focus doesn't stay on the link that was used (often in the
 * footer). Skips the first load and links to an in-page anchor.
 */
export function RouteFocus() {
  const pathname = usePathname();
  const previous = useRef(pathname);

  useEffect(() => {
    if (previous.current === pathname) return;
    previous.current = pathname;
    if (window.location.hash) return;

    const frame = requestAnimationFrame(() => {
      const heading = document.querySelector<HTMLElement>("#main h1");
      if (!heading) return;
      if (!heading.hasAttribute("tabindex")) heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
