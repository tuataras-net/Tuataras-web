import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="Procesos">
      <p>
        Nuestro proceso combina estrategia, diseño y entrega continua para
        minimizar riesgos y acelerar resultados.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[{
          title: "Descubrimiento",
          desc: "Entendemos el negocio, audiencias y objetivos clave.",
        }, {
          title: "Diseño & prototipo",
          desc: "Definimos UX/UI y validamos hipótesis temprano.",
        }, {
          title: "Construcción",
          desc: "Desarrollo ágil con entregas iterativas.",
        }, {
          title: "Medición",
          desc: "Analítica y KPIs para optimizar resultados.",
        }, {
          title: "Escalado",
          desc: "Evolución del producto con nuevas capacidades.",
        }, {
          title: "Soporte",
          desc: "Mantenimiento, seguridad y mejoras continuas.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Trabajemos juntos</h3>
        <p className="mt-2 text-muted">
          Construyamos un roadmap con foco en impacto.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">
          Empezar
        </a>
      </section>
    </PageShell>
  );
}
