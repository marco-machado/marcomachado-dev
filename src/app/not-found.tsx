import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found classic:py-16 classic:text-center">
      <p className="not-found__code classic:font-mono classic:text-xs classic:tracking-widest classic:text-muted-foreground classic:uppercase">
        404
      </p>
      <h1 className="not-found__title classic:mt-3 classic:font-serif classic:text-4xl classic:font-semibold classic:tracking-tight">
        Page not found
      </h1>
      <p className="not-found__text classic:mt-4 classic:text-muted-foreground">
        The page you are looking for does not exist or has moved.
      </p>
      <p className="not-found__action classic:mt-8">
        <Link
          href="/"
          className="arrow-link classic:text-primary classic:underline classic:decoration-1 classic:underline-offset-4 classic:hover:decoration-2"
        >
          Back to the home page
        </Link>
      </p>
    </div>
  );
}
