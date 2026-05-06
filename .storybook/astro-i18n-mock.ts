export function getRelativeLocaleUrl(locale: string, path = "") {
  const normalizedPath = path.replace(/^\/+|\/+$/g, "");

  if (locale === "en") {
    return normalizedPath ? `/${normalizedPath}/` : "/";
  }

  return normalizedPath ? `/${locale}/${normalizedPath}/` : `/${locale}/`;
}
