import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="Desarrollo Web">
      <p>
        Diseñamos plataformas web modernas, rápidas y seguras, preparadas para
        escalar y convertir.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Arquitectura moderna",
          desc: "Next.js, APIs robustas y despliegues en la nube.",
        }, {
          title: "Experiencia centrada en usuario",
          desc: "UI clara, accesible y optimizada para conversión.",
        }, {
          title: "Rendimiento y SEO",
          desc: "Core Web Vitals y buenas prácticas técnicas.",
        }, {
          title: "Mantenimiento continuo",
          desc: "Observabilidad, mejoras iterativas y soporte.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">¿Quieres un demo?</h3>
        <p className="mt-2 text-muted">
          Conversemos sobre tu plataforma y objetivos.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">
          Solicitar reunión
        </a>
      </section>
    </PageShell>
  );
}
