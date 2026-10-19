import Link from "next/link";
import { cn } from "@/lib/utils";

/** Site wordmark: the domain. */
export function Brand({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("brand", className)}>
      marcomachado.dev
    </Link>
  );
}
