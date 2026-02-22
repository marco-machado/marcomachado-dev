import { ui, defaultLang, type Lang } from "./ui";
import { getRelativeLocaleUrl } from "astro:i18n";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(lang: Lang, path: string = ""): string {
  return getRelativeLocaleUrl(lang, path);
}

export function getOtherLang(lang: Lang): Lang {
  return lang === "en" ? "pt" : "en";
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
