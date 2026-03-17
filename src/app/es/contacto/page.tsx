import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="Contáctanos">
      <p>
        Cuéntanos sobre tu proyecto y te responderemos en menos de 48 horas.
      </p>

      <form className="mt-8 grid gap-4 rounded-2xl border border-corp bg-corp-soft p-6" name="contacto">
        <div>
          <label className="text-sm font-semibold text-corp">Nombre</label>
          <input className="mt-2 w-full rounded-lg border border-corp bg-white p-3" type="text" name="nombre" />
        </div>
        <div>
          <label className="text-sm font-semibold text-corp">Email</label>
          <input className="mt-2 w-full rounded-lg border border-corp bg-white p-3" type="email" name="email" />
        </div>
        <div>
          <label className="text-sm font-semibold text-corp">Mensaje</label>
          <textarea className="mt-2 w-full rounded-lg border border-corp bg-white p-3" rows={5} name="mensaje" />
        </div>
        <button className="btn-primary w-fit rounded-full px-6 py-3 text-sm font-semibold" type="submit">
          Enviar
        </button>
      </form>
    </PageShell>
  );
}
