import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeadProps {
  id: string;
  title: React.ReactNode;
  more?: { label: string; href: string };
  className?: string;
}

export function SectionHead({ id, title, more, className }: SectionHeadProps) {
  return (
    <div className={cn("section-head", className)}>
      <h2 id={id} className="section-head__title">
        {title}
      </h2>
      {more ? (
        <Link
          href={more.href}
          className="section-head__more inline-flex min-h-11 items-center"
        >
          {more.label}
          <ArrowRightIcon className="arrow" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}
