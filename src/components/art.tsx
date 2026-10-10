import { cn } from "@/lib/utils";

interface ArtProps {
  /** Picks a different motif per card within a theme. */
  seed: number;
  className?: string;
}

/**
 * Abstract placeholder imagery for cards. Each theme draws its own motifs on
 * the three layers in CSS (see src/styles/themes/).
 */
export function Art({ seed, className }: ArtProps) {
  return (
    <div className={cn("art", className)} data-seed={seed % 4} aria-hidden="true">
      <span className="art__a" />
      <span className="art__b" />
      <span className="art__c" />
    </div>
  );
}
