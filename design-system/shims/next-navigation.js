// Preview stand-in for next/navigation: the path comes from window.__mmPathname (default "/blog/").
export function usePathname() {
  return (typeof window !== "undefined" && window.__mmPathname) || "/blog/";
}
