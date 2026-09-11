import { contactLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

interface ContactLinksProps {
  className?: string;
  /** Quieter mono style for footer / About facts. */
  muted?: boolean;
}

export function ContactLinks({ className, muted = false }: ContactLinksProps) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-5",
        muted
          ? "font-mono text-xs text-muted-foreground"
          : "text-sm text-muted-foreground",
        className,
      )}
    >
      {contactLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className={cn(
              "inline-flex min-h-11 items-center transition-colors hover:text-foreground",
              muted ? null : "text-primary underline decoration-1 underline-offset-4 hover:decoration-2",
            )}
            {...(link.href.startsWith("http")
              ? { rel: "noopener noreferrer", target: "_blank" }
              : {})}
          >
            {link.label}
            {link.href.startsWith("http") ? (
              <span className="sr-only"> (opens in a new tab)</span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
