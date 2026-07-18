import type { Metadata } from "next";
import { serif, sans, mono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marco Machado",
  description: "Software engineer, writer, and builder. Personal site and blog.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
