import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="Soluciones Tecnológicas para la Transformación Digital">
      <p>
        Tuataras ofrece servicios de alto valor para mejorar tu productividad y
        aumentar tus ventas gracias a las nuevas tecnologías. Gestionamos
        completamente la infraestructura TIC de tu empresa.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Gestión de infraestructura TIC",
          desc: "Brindamos servicios informáticos a empresas, dando soporte a miles de usuarios finales e impulsando resultados positivos.",
        }, {
          title: "Transformación digital",
          desc: "Acompañamos a tu organización en el proceso de adopción tecnológica para modernizar operaciones y aumentar la competitividad.",
        }, {
          title: "Consultoría estratégica",
          desc: "Definimos hojas de ruta tecnológicas alineadas con los objetivos del negocio, priorizando impacto y retorno de inversión.",
        }, {
          title: "Ciberseguridad",
          desc: "Evaluamos vulnerabilidades, implementamos controles de seguridad y garantizamos el cumplimiento normativo.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Impulsa tu transformación digital</h3>
        <p className="mt-2 text-muted">Revisemos tu stack tecnológico y definamos el siguiente paso.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">Solicitar diagnóstico</a>
      </section>
    </PageShell>
  );
}
