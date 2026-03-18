import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="Desarrollo de Aplicaciones Web">
      <p>
        Creamos aplicaciones web potentes y escalables hechas a medida,
        utilizando procesos de desarrollo ágiles y aprovechando las últimas
        tecnologías web.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Aplicaciones empresariales",
          desc: "Ayudamos a las empresas a tomar decisiones más informadas con sistemas inteligentes basados en datos, plataformas sincronizadas y herramientas de gestión de procesos.",
        }, {
          title: "Productos SaaS",
          desc: "Nos integramos a tu equipo para llevar tu producto al mercado, aportando experiencia en estrategia, implementación y operaciones desde startups hasta empresas establecidas.",
        }, {
          title: "Aplicaciones de investigación",
          desc: "Diseñamos plataformas seguras e intuitivas para recopilar y analizar datos a escala global, habilitando investigación de alto valor en industrias como la médica y más.",
        }, {
          title: "E-commerce y portales web",
          desc: "Construimos marketplaces y portales con paneles de administración robustos, análisis de rendimiento y experiencias personalizadas para impulsar las transacciones.",
        }, {
          title: "Micro Websites",
          desc: "Creamos micrositios multiplataforma para lanzar productos, capturar leads y reforzar la identidad de marca con diseño a medida.",
        }, {
          title: "Código de alta calidad",
          desc: "Producimos aplicaciones responsivas, rápidas, escalables y seguras, siguiendo estándares de la industria y las mejores prácticas de desarrollo.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">¿Tienes un proyecto en mente?</h3>
        <p className="mt-2 text-muted">
          Hablemos sobre cómo construir la solución perfecta para tu negocio.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">
          Hablar con un experto
        </a>
      </section>
    </PageShell>
  );
}
