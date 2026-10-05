// Preview stand-in for next/link: a plain <a> that does not navigate the preview frame.
import * as React from "react";

const Link = React.forwardRef(function Link(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { href, prefetch, replace, scroll, onClick, ...props },
  ref,
) {
  return React.createElement("a", {
    ref,
    href,
    ...props,
    onClick: (event) => {
      onClick?.(event);
      if (!event.defaultPrevented) event.preventDefault();
    },
  });
});

export default Link;
