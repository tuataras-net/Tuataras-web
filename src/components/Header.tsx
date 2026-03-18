"use client";

import { useEffect, useState } from "react";

const nav = {
  es: [
    { label: "Inicio", href: "/es/inicio" },
    { label: "Servicios", href: "/es/servicios" },
    { label: "Blog", href: "/es/blog_es" },
    { label: "Contacto", href: "/es/contacto" },
  ],
  en: [
    { label: "Home", href: "/en/home" },
    { label: "Services", href: "/en/services" },
    { label: "Blog", href: "/en/blog_us" },
    { label: "Contact", href: "/en/contact" },
  ],
};

export function Header({ lang }: { lang: "es" | "en" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-corp bg-white transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href={lang === "es" ? "/es/inicio" : "/en/home"}>
          <img
            src="/logo.jpg"
            alt="Tuataras"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-[67px]" : "h-[90px]"}`}
          />
        </a>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center gap-6 text-lg text-muted">
          {nav[lang].map((item) => (
            <a key={item.href} href={item.href} className="hover:text-corp">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botón hamburguesa mobile */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className={`block h-0.5 w-6 bg-corp transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-corp transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-corp transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Menú desplegable mobile */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-64" : "max-h-0"}`}>
        <nav className="flex flex-col border-t border-corp bg-white px-6 py-4 gap-4 text-lg text-muted">
          {nav[lang].map((item) => (
            <a key={item.href} href={item.href} className="hover:text-corp" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
