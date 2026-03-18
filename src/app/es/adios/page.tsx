import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="Adios">
      <p className="mt-4 text-muted">Lamentamos verte marchar</p>
      <p className="mt-4 text-muted">No quisieramos que te vayas sin haberte agradecido por tu corta presencia.</p>
      <p className="mt-4 text-muted">Gracias por haber estado suscrito.</p>
    </PageShell>
  );
}
