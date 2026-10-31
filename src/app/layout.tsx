/// <reference types="react/canary" />
import { ViewTransition } from "react";
import type { Metadata, Viewport } from "next";
import { mono, sans } from "@/lib/fonts";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { UmamiAnalytics } from "@/components/umami-analytics";
import { RouteFocus } from "@/components/route-focus";
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#080c0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body>
        <UmamiAnalytics />
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
            className="site-main mx-auto w-full flex-1"
          >
            <ViewTransition default="page">{children}</ViewTransition>
          </main>
          <SiteFooter />
        </div>
        <RouteFocus />
      </body>
    </html>
  );
}
