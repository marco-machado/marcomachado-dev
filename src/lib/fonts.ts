import localFont from "next/font/local";

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
});
