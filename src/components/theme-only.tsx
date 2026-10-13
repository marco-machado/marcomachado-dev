import { designThemeIds, type ThemeKey } from "@/lib/themes";

const allKeys: ThemeKey[] = ["classic", ...designThemeIds];

interface ThemeOnlyProps {
  /** Themes that render this markup. */
  themes?: ThemeKey[];
  /** Or: every theme except these. */
  except?: ThemeKey[];
  /** Use "span" inside inline content. */
  as?: "div" | "span" | "li";
  children: React.ReactNode;
}

/**
 * Markup shown only under some themes. Hidden with display: none elsewhere,
 * display: contents where active (see the [data-only] rules in globals.css).
 */
export function ThemeOnly({
  themes,
  except,
  as: Tag = "div",
  children,
}: ThemeOnlyProps) {
  const keys = themes ?? allKeys.filter((key) => !except?.includes(key));
  return <Tag data-only={keys.join(" ")}>{children}</Tag>;
}
