import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="Consultorías TIC">
      <p>
        Alineamos tecnología y negocio para acelerar la transformación digital.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Estrategia digital",
          desc: "Roadmaps, priorización y modelo operativo.",
        }, {
          title: "Arquitectura empresarial",
          desc: "Gobernanza, estándares y evolución tecnológica.",
        }, {
          title: "Modernización",
          desc: "Migración desde legacy a plataformas modernas.",
        }, {
          title: "Ciberseguridad",
          desc: "Evaluaciones, hardening y cumplimiento.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Impulsa tu estrategia</h3>
        <p className="mt-2 text-muted">
          Revisemos tu stack y definamos el siguiente paso.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">
          Solicitar diagnóstico
        </a>
      </section>
    </PageShell>
  );
}
