import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__text">
        The page you are looking for does not exist or has moved.
      </p>
      <p className="not-found__action">
        <Link href="/" className="arrow-link">
          Back to the home page
        </Link>
      </p>
    </div>
  );
}
