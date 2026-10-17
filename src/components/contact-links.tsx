import { contactLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ExternalLink } from "@/components/external-link";

const linkClass = "contact-links__link inline-flex min-h-11 items-center";

export function ContactLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("contact-links flex flex-wrap items-center", className)}>
      {contactLinks.map((link) => (
        <li key={link.href}>
          {link.href.startsWith("http") ? (
            <ExternalLink href={link.href} className={linkClass}>
              {link.label}
            </ExternalLink>
          ) : (
            <a href={link.href} className={linkClass}>
              {link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
