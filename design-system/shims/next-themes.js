// Preview stand-in for next-themes: reads and writes <html data-theme>, the attribute the
// design system's preview frame uses for its themes.
import * as React from "react";

const getTheme = () =>
  document.documentElement.getAttribute("data-theme") || "light";

const subscribe = (callback) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme", "class"],
  });
  return () => observer.disconnect();
};

export function useTheme() {
  const theme = React.useSyncExternalStore(subscribe, getTheme, () => "dark");
  return {
    theme,
    resolvedTheme: theme,
    themes: ["light", "dark"],
    setTheme: (next) => {
      document.documentElement.setAttribute("data-theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
    },
  };
}

export function ThemeProvider({ children }) {
  return children;
}
