import Link from "next/link";
import { Cross, Menu } from "lucide-react";
import { navigation } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Web Prophecy - Accueil">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-white">
            <Cross aria-hidden="true" size={20} />
          </span>
          <span>
            <span className="block text-base font-semibold text-ink">Web Prophecy</span>
            <span className="block text-xs text-stone-500">Agence digitale catholique</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-md bg-gold px-4 py-2 text-sm font-semibold text-ink shadow-sm transition hover:bg-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:inline-flex"
        >
          Demander un audit
        </Link>

        <details className="relative lg:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-stone-300 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
            <Menu aria-hidden="true" size={20} />
            <span className="sr-only">Ouvrir le menu</span>
          </summary>
          <div className="absolute right-0 mt-3 w-72 rounded-md border border-stone-200 bg-white p-3 shadow-xl">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-3 text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
