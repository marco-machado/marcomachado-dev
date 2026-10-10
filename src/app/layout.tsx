import type { Metadata } from "next";
import { serif, sans, mono } from "@/lib/fonts";
import { site } from "@/lib/site";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { UmamiAnalytics } from "@/components/umami-analytics";
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
    creator: site.xHandle,
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
      data-theme="dark"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <UmamiAnalytics />
        <ThemeProvider>
          <div className="site flex min-h-dvh flex-col">
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:border focus:bg-background focus:px-4 focus:py-3 focus:text-sm focus:text-foreground focus:shadow-sm"
            >
              Skip to content
            </a>
            <SiteHeader />
            <main
              id="main"
              className="site-main mx-auto w-full flex-1 classic:max-w-2xl classic:px-6 classic:py-12"
            >
              {children}
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
