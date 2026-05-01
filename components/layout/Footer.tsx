import Link from "next/link";
import Image from "next/image";
import { footerLinks, navigation, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="brand-glass flex h-24 w-64 items-center justify-center rounded-md border border-white/20 p-3">
            <Image
              src="/images/logo-web-prophecy-transparent.png"
              alt={siteConfig.name}
              width={500}
              height={500}
              className="h-full w-full object-contain"
            />
          </div>
          <p className="mt-3 max-w-md text-sm leading-7 text-stone-300">
            Sites web, applications et systèmes de communication numérique pour paroisses,
            diocèses et communautés catholiques.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gold">Navigation</p>
          <div className="mt-4 grid gap-2">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-stone-300 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-gold">Contact</p>
          <div className="mt-4 grid gap-2 text-sm text-stone-300">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
            <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`} className="hover:text-white">{siteConfig.phone}</a>
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} Web Prophecy. Tous droits réservés.
      </div>
    </footer>
  );
}
