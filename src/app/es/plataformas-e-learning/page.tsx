import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="Plataformas e-learning, LMS o Campus Virtual">
      <p>
        Ayudamos a empresas y centros educativos a implantar, potenciar o
        actualizar estrategias de formación online de forma eficaz mediante
        consultoría y desarrollo de plataformas e-learning.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Estrategia e-learning",
          desc: "Diseñamos la arquitectura de tu plataforma formativa alineada con los objetivos del negocio y las necesidades del aprendiz.",
        }, {
          title: "Desarrollo a medida",
          desc: "Construimos LMS y campus virtuales personalizados con funcionalidades adaptadas a tu modelo educativo.",
        }, {
          title: "Gamificación y engagement",
          desc: "Incorporamos elementos de gamificación, rutas de aprendizaje y micro-learning para maximizar la retención.",
        }, {
          title: "Analítica e informes",
          desc: "Integramos dashboards y reportes de progreso para medir el impacto de los programas formativos.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Impulsa tu academia digital</h3>
        <p className="mt-2 text-muted">Diseñemos juntos la plataforma de aprendizaje que necesitas.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">Hablemos</a>
      </section>
    </PageShell>
  );
}
