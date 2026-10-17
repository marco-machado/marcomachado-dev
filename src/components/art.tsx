import { cn } from "@/lib/utils";

interface ArtProps {
  /** Picks a different motif per card. */
  seed: number;
  className?: string;
}

/**
 * Abstract placeholder imagery for cards. CSS draws one of four motifs on
 * the two layers (see the .art rules in src/styles/site.css).
 */
export function Art({ seed, className }: ArtProps) {
  return (
    <div className={cn("art", className)} data-seed={seed % 4} aria-hidden="true">
      <span className="art__a" />
      <span className="art__b" />
    </div>
  );
}
