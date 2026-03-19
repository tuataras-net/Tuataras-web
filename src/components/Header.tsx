"use client";

import { useEffect, useRef, useState } from "react";

const nav = {
  es: {
    items: [
      { label: "Inicio", href: "/es/inicio" },
      {
        label: "Servicios",
        href: "/es/servicios",
        children: [
          { label: "Desarrollo Web", href: "/es/desarrollo-web" },
          { label: "UX / UI", href: "/es/diseno-ux-ui" },
          { label: "DevOps & Cloud", href: "/es/devops-y-servicios-en-la-nube" },
          { label: "Plataformas e-learning", href: "/es/plataformas-e-learning" },
          { label: "Consultoría TIC", href: "/es/soluciones-tecnologicas-tic" },
          { label: "Procesos", href: "/es/procesos" },
        ],
      },
      { label: "Blog", href: "/es/blog" },
      { label: "Contacto", href: "/es/contacto" },
    ],
  },
  en: {
    items: [
      { label: "Home", href: "/en/home" },
      {
        label: "Services",
        href: "/en/services",
        children: [
          { label: "Web Development", href: "/en/web-development" },
          { label: "UX / UI", href: "/en/ux-ui-design" },
          { label: "DevOps & Cloud", href: "/en/devops-services" },
          { label: "E-learning Platforms", href: "/en/development-platforms-e-learning-lms" },
          { label: "ICT Consulting", href: "/en/tchnological-solutions-ict" },
          { label: "Processes", href: "/en/processes" },
        ],
      },
      { label: "Blog", href: "/en/blog" },
      { label: "Contact", href: "/en/contact" },
    ],
  },
};

type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

function DropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!item.children) {
    return (
      <a href={item.href} className="hover:text-corp">
        {item.label}
      </a>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 hover:text-corp"
      >
        {item.label}
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`absolute left-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-corp bg-white shadow-xl transition-all duration-200 ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
        <a href={item.href} className="block border-b border-corp px-4 py-3 text-sm font-semibold text-corp hover:bg-corp-soft">
          {item.label}
        </a>
        {item.children.map((child) => (
          <a
            key={child.href}
            href={child.href}
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 text-sm text-muted hover:bg-corp-soft hover:text-corp"
          >
            {child.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export function Header({ lang }: { lang: "es" | "en" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const items = nav[lang].items;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${scrolled ? "border-transparent bg-transparent" : "border-corp bg-white"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href={lang === "es" ? "/es/inicio" : "/en/home"}>
          <img
            src="/Logo.png"
            alt="Tuataras"
            className={`w-auto transition-all duration-500 ${scrolled ? "h-[67px]" : "h-[90px]"}`}
          />
        </a>

        {/* Menú desktop */}
        <nav className={`hidden md:flex items-center gap-6 text-lg text-muted transition-all duration-500 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          {items.map((item) => (
            <DropdownItem key={item.href} item={item} />
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
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-screen" : "max-h-0"}`}>
        <nav className="flex flex-col border-t border-corp bg-white px-6 py-4 gap-1 text-lg text-muted">
          {items.map((item) =>
            item.children ? (
              <div key={item.href}>
                <button
                  className="flex w-full items-center justify-between py-2 hover:text-corp"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  {item.label}
                  <svg className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-96" : "max-h-0"}`}>
                  <a href={item.href} className="block py-2 pl-4 text-base font-semibold text-corp hover:text-corp" onClick={() => setOpen(false)}>
                    {item.label} →
                  </a>
                  {item.children.map((child) => (
                    <a key={child.href} href={child.href} className="block py-2 pl-4 text-base hover:text-corp" onClick={() => setOpen(false)}>
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={item.href} href={item.href} className="py-2 hover:text-corp" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
