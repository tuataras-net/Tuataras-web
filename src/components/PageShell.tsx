import { Nav } from "./Nav";

export function PageShell({
  lang,
  title,
  hideTitle,
  children,
}: {
  lang: "es" | "en";
  title: string;
  hideTitle?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-corp">
      <header className="border-b border-corp bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Tuataras" className="h-10 w-auto rounded" />
          </div>
          <Nav lang={lang} />
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-12">
        {!hideTitle && <h1 className="text-3xl font-semibold text-corp">{title}</h1>}
        <div className="mt-6 text-muted">{children}</div>
      </main>
      <footer className="border-t border-corp mt-16">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Tuataras" className="h-8 w-auto rounded" />
            <span className="text-sm text-muted">© {new Date().getFullYear()} Tuataras</span>
          </div>
          <div className="flex gap-6 text-sm text-muted">
            <a href="/es/politica-privacidad" className="hover:text-corp">Privacidad</a>
            <a href="/es/aviso-legal" className="hover:text-corp">Aviso Legal</a>
            <a href="/es/contacto" className="hover:text-corp">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
