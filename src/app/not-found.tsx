import Link from "next/link";
import type { Metadata } from "next";
import { navItems } from "@/lib/site";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="page page--not-found">
      <PageHeader
        title="Page not found"
        command="cd ./missing-page"
        output="cd: no such file or directory: ./missing-page"
        description="The page you are looking for does not exist or has moved. Try one of these:"
      />
      <ul className="prompt-list">
        <li>
          <Link href="/">home</Link>
        </li>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label.toLowerCase()}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
