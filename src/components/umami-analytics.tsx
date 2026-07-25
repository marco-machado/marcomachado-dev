import Script from "next/script";

const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_URL;
const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

export function UmamiAnalytics() {
  if (
    process.env.NODE_ENV !== "production" ||
    !umamiUrl ||
    !websiteId
  ) {
    return null;
  }

  const scriptSrc = `${umamiUrl.replace(/\/$/, "")}/script.js`;

  return (
    <Script
      defer
      src={scriptSrc}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
}
