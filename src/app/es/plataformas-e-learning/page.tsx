import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="Plataformas e‑learning">
      <p>
        Creamos ecosistemas de aprendizaje con analítica y personalización para
        maximizar la adopción.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Experiencias formativas",
          desc: "Rutas de aprendizaje, micro‑learning y gamificación.",
        }, {
          title: "Integraciones",
          desc: "LMS, CRM y herramientas corporativas.",
        }, {
          title: "Analítica",
          desc: "Dashboards y seguimiento de progreso en tiempo real.",
        }, {
          title: "Escalabilidad",
          desc: "Arquitecturas preparadas para miles de usuarios.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Impulsa tu academia</h3>
        <p className="mt-2 text-muted">
          Diseñemos una plataforma de aprendizaje escalable.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">
          Hablemos
        </a>
      </section>
    </PageShell>
  );
}
