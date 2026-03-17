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

export function Nav({ lang }: { lang: "es" | "en" }) {
  return (
    <nav className="flex items-center gap-6 text-sm text-muted">
      {nav[lang].map((item) => (
        <a key={item.href} href={item.href} className="hover:text-corp">
          {item.label}
        </a>
      ))}
    </nav>
  );
}
