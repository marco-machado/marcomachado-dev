import { ArrowUpRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

/** A link to another site: opens in a new tab and carries the ↗ marker. */
export function ExternalLink({ href, id, className, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      id={id}
      className={cn("external-link", className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRightIcon className="external-link__icon" aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
