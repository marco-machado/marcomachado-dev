import { cn } from "@/lib/utils";

/** Points readers at the RSS feed, as a shell prompt. */
export function Subscribe({ className }: { className?: string }) {
  return (
    <p className={cn("subscribe", className)}>
      <span className="subscribe__prompt" aria-hidden="true">
        ${" "}
      </span>
      <a href="/rss.xml" className="subscribe__link">
        subscribe via RSS
      </a>
    </p>
  );
}
