import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Site wordmark. Renders every form (name, domain, monogram); each theme
 * shows the one its design uses.
 */
export function Brand({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("brand", className)}>
      <span className="brand__name">{site.title}</span>
      <span className="brand__domain classic:hidden">marcomachado.dev</span>
      <span className="brand__mark classic:hidden">
        <span aria-hidden="true">
          <span className="brand__mark-1">M</span>
          <span className="brand__mark-2">M</span>
        </span>
        <span className="sr-only">{site.title}</span>
      </span>
      <span className="brand__path classic:hidden" aria-hidden="true">
        ~/
      </span>
    </Link>
  );
}
