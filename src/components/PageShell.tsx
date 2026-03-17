import { Nav } from "./Nav";

export function PageShell({
  lang,
  title,
  children,
}: {
  lang: "es" | "en";
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-corp">
      <header className="border-b border-corp bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="text-lg font-semibold">Tuataras</div>
          <Nav lang={lang} />
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold text-corp">{title}</h1>
        <div className="mt-6 text-muted">{children}</div>
      </main>
    </div>
  );
}
