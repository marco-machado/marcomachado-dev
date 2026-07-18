import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 text-muted-foreground">
        The page you are looking for does not exist or has moved.
      </p>
      <p className="mt-8">
        <Link
          href="/"
          className="text-primary underline decoration-1 underline-offset-4 hover:decoration-2"
        >
          Back to the home page
        </Link>
      </p>
    </div>
  );
}
