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
        "contact-links flex flex-wrap items-center classic:gap-x-5",
        muted
          ? "contact-links--muted classic:font-mono classic:text-xs classic:text-muted-foreground"
          : "classic:text-sm classic:text-muted-foreground",
        className,
      )}
    >
      {contactLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className={cn(
              "contact-links__link inline-flex min-h-11 items-center classic:transition-colors classic:hover:text-foreground",
              muted
                ? null
                : "classic:text-primary classic:underline classic:decoration-1 classic:underline-offset-4 classic:hover:decoration-2",
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
