import localFont from "next/font/local";

export const serif = localFont({
  src: [
    {
      path: "../fonts/newsreader-latin-wght-normal.woff2",
      style: "normal",
    },
    {
      path: "../fonts/newsreader-latin-wght-italic.woff2",
      style: "italic",
    },
  ],
  weight: "200 800",
  variable: "--font-serif-var",
  display: "swap",
});

export const sans = localFont({
  src: "../fonts/ibm-plex-sans-latin-wght-normal.woff2",
  weight: "100 700",
  variable: "--font-sans-var",
  display: "swap",
});

export const mono = localFont({
  src: [
    {
      path: "../fonts/ibm-plex-mono-latin-400-normal.woff2",
      weight: "400",
    },
    {
      path: "../fonts/ibm-plex-mono-latin-600-normal.woff2",
      weight: "600",
    },
  ],
  variable: "--font-mono-var",
  display: "swap",
  preload: false,
});
