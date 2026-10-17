import { contactLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ContactLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("contact-links flex flex-wrap items-center", className)}>
      {contactLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="contact-links__link inline-flex min-h-11 items-center"
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
