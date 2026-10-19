import { Brand } from "@/components/brand";
import { MainNav } from "@/components/main-nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner mx-auto flex w-full flex-wrap items-center">
        <Brand className="mr-auto inline-flex min-h-11 items-center" />
        <MainNav />
      </div>
    </header>
  );
}
