// Preview stand-in for next/image: a plain <img>, as the site's static export renders it
// (images.unoptimized).
import * as React from "react";

export default function Image({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  priority, quality, placeholder, blurDataURL, unoptimized, loader, fill,
  ...props
}) {
  return React.createElement("img", {
    loading: priority ? undefined : "lazy",
    decoding: "async",
    ...props,
  });
}
