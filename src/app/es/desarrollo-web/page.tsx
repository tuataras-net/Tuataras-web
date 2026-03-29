import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AnimatedTerminal } from "@/components/AnimatedTerminal";

export const metadata: Metadata = {
  title: "Desarrollo Web" ,
  description: "Aplicaciones web escalables, SaaS, e-commerce y más. Construimos con tecnologías modernas y metodología ágil.",
};

const items = [
  {
    title: "Aplicaciones empresariales",
    desc: "Ayudamos a las empresas a tomar decisiones más informadas con sistemas inteligentes basados en datos, plataformas sincronizadas y herramientas de gestión de procesos.",
    img: "/illustrations/business-apps.svg",
  },
  {
    title: "Productos SaaS",
    desc: "Nos integramos a tu equipo para llevar tu producto al mercado, aportando experiencia en estrategia, implementación y operaciones desde startups hasta empresas establecidas.",
    img: "/illustrations/saas.svg",
  },
  {
    title: "Aplicaciones de investigación",
    desc: "Diseñamos plataformas seguras e intuitivas para recopilar y analizar datos a escala global, habilitando investigación de alto valor en industrias como la médica y más.",
    img: "/illustrations/research.svg",
  },
  {
    title: "E-commerce y portales web",
    desc: "Construimos marketplaces y portales con paneles de administración robustos, análisis de rendimiento y experiencias personalizadas para impulsar las transacciones.",
    img: "/illustrations/ecommerce.svg",
  },
  {
    title: "Micro Websites",
    desc: "Creamos micrositios multiplataforma para lanzar productos, capturar leads y reforzar la identidad de marca con diseño a medida.",
    img: "/illustrations/microsite.svg",
  },
  {
    title: "Código de alta calidad",
    desc: "Producimos aplicaciones responsivas, rápidas, escalables y seguras, siguiendo estándares de la industria y las mejores prácticas de desarrollo.",
    img: "/illustrations/quality-code.svg",
  },
];

export default function Page() {
  return (
    <PageShell lang="es" title="" hideTitle>
      {/* Hero */}
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Desarrollo de software
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">
              Desarrollo de Aplicaciones Web
            </h1>
            <p className="mt-4 text-lg text-muted max-w-lg">
              Creamos aplicaciones web potentes y escalables hechas a medida, utilizando procesos ágiles y las últimas tecnologías.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">
                Iniciar proyecto
              </a>
              <a className="btn-secondary rounded-full px-6 py-3 text-sm font-semibold" href="/es/procesos">
                Ver proceso
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <AnimatedTerminal />
          </div>
        </div>
      </section>

      {/* Items */}
      <section aria-label="Servicios de desarrollo" className="mt-12">
        <h2 className="text-2xl font-semibold text-corp">¿Qué construimos?</h2>
        <p className="mt-2 text-muted">Soluciones a medida para cada etapa de tu negocio digital.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((s) => (
            <div
              key={s.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-corp bg-corp-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-52 w-full overflow-hidden bg-white">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-corp">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section aria-label="CTA" className="mt-16 rounded-3xl border border-corp bg-corp-soft p-10 text-center">
        <h2 className="text-2xl font-semibold text-corp">¿Tienes un proyecto en mente?</h2>
        <p className="mt-2 text-muted">Hablemos sobre cómo construir la solución perfecta para tu negocio.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold" href="/es/contacto">
          Hablar con un experto
        </a>
      </section>
    </PageShell>
  );
}
