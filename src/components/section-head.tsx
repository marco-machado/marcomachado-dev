import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeadProps {
  id: string;
  title: React.ReactNode;
  /** Section number shown by numbered themes ("01"). */
  index?: string;
  more?: { label: string; href: string };
  className?: string;
  children?: React.ReactNode;
}

export function SectionHead({
  id,
  title,
  index,
  more,
  className,
  children,
}: SectionHeadProps) {
  return (
    <div className={cn("section-head", className)}>
      {index ? (
        <span className="section-head__index classic:hidden" aria-hidden="true">
          {index}
        </span>
      ) : null}
      <h2
        id={id}
        className="section-head__title classic:mb-4 classic:border-b classic:pb-3 classic:font-mono classic:text-xs classic:tracking-widest classic:text-muted-foreground classic:uppercase"
      >
        {title}
      </h2>
      <span className="section-head__rule classic:hidden" aria-hidden="true" />
      {children}
      {more ? (
        <Link
          href={more.href}
          className="section-head__more inline-flex min-h-11 items-center classic:hidden"
        >
          {more.label}
          <ArrowRightIcon className="arrow" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}
