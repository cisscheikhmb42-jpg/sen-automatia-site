"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { navigation } from "@/config/site";

export function HeaderNav({ logo }: { logo: ReactNode }) {
  const pathname = usePathname();
  const [ouvert, setOuvert] = useState(false);

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => setOuvert(false), [pathname]);

  // Empêche le défilement de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = ouvert ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ouvert]);

  const actif = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const liens = navigation.filter((l) => l.href !== "/contact");

  return (
    <header className="sticky top-0 z-40 border-b border-encre/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6">
        <Link href="/" aria-label="Sen AutomatIA – Accueil" className="flex-none">
          {logo}
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {liens.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={actif(l.href) ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                    actif(l.href) ? "text-bleu" : "text-encre/75 hover:text-encre"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="bg-degrade hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 sm:inline-flex"
          >
            Audit gratuit
          </Link>
          <button
            type="button"
            onClick={() => setOuvert((v) => !v)}
            aria-expanded={ouvert}
            aria-controls="menu-mobile"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-encre hover:bg-encre/5 lg:hidden"
          >
            <span className="sr-only">{ouvert ? "Fermer le menu" : "Ouvrir le menu"}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
              {ouvert ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {ouvert && (
        <nav
          id="menu-mobile"
          aria-label="Navigation mobile"
          className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-white px-4 pb-10 pt-4 lg:hidden"
        >
          <ul className="space-y-1">
            {navigation.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={actif(l.href) ? "page" : undefined}
                  className={`block rounded-2xl px-4 py-3.5 text-lg font-medium ${
                    actif(l.href) ? "bg-brume text-bleu" : "text-encre"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="bg-degrade mt-6 flex min-h-12 items-center justify-center rounded-full px-6 py-3 font-semibold text-white"
          >
            Demander mon audit gratuit
          </Link>
        </nav>
      )}
    </header>
  );
}
