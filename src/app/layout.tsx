import type { Metadata } from "next";
import { serif, sans, mono } from "@/lib/fonts";
import { site } from "@/lib/site";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.title}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.title,
    locale: "en_US",
    type: "website",
    images: ["/images/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <div className="flex min-h-dvh flex-col">
            <SiteHeader />
            <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-12">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
