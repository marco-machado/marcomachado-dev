import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marco Machado",
  description: "Software engineer, writer, and builder. Personal site and blog.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
