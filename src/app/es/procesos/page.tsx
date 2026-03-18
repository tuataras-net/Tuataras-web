import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="Consultoría de Procesos">
      <p>
        Sabemos que la confianza y el buen resultado son clave cuando llevas a
        cabo un proyecto. La base para que todo funcione es la comunicación.
        Nuestro equipo estará alineado contigo en cada paso.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[{
          title: "Descubrimiento",
          desc: "Evaluamos tu propuesta, entendemos tus objetivos y diseñamos el plan de trabajo adecuado.",
        }, {
          title: "Planificación",
          desc: "Definimos alcance, tiempos y recursos con metodologías ágiles para minimizar riesgos.",
        }, {
          title: "Ejecución",
          desc: "Desarrollamos con entregas iterativas y comunicación constante para adaptarnos rápido.",
        }, {
          title: "Validación",
          desc: "Revisamos cada entrega contigo antes de avanzar, asegurando calidad y alineación.",
        }, {
          title: "Lanzamiento",
          desc: "Desplegamos con cuidado, realizamos pruebas finales y aseguramos una transición sin fricciones.",
        }, {
          title: "Soporte",
          desc: "Continuamos contigo después del lanzamiento con mantenimiento, mejoras y soporte técnico.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Trabajemos juntos</h3>
        <p className="mt-2 text-muted">Construyamos un roadmap con foco en resultados reales.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">Empezar</a>
      </section>
    </PageShell>
  );
}
