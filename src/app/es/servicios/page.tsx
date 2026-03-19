import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Servicios | Tuataras",
  description: "Desarrollo web, UX/UI, DevOps, e-learning y consultoría TIC. Soluciones digitales a medida para tu empresa.",
};

const services = [
  {
    title: "Desarrollo Web",
    desc: "Arquitecturas modernas, rendimiento y escalabilidad. Construimos plataformas robustas que crecen contigo.",
    href: "/es/desarrollo-web",
    img: "/illustrations/web-dev.svg",
  },
  {
    title: "UX / UI",
    desc: "Investigación, prototipado y diseño centrado en usuario que convierte visitas en clientes.",
    href: "/es/diseno-ux-ui",
    img: "/illustrations/ux-ui.svg",
  },
  {
    title: "DevOps & Cloud",
    desc: "Automatización, observabilidad y operación continua. Infraestructura resiliente y eficiente.",
    href: "/es/devops-y-servicios-en-la-nube",
    img: "/illustrations/devops.svg",
  },
  {
    title: "Plataformas e-learning",
    desc: "Experiencias formativas escalables con analítica integrada. Campus virtuales y LMS a medida.",
    href: "/es/plataformas-e-learning",
    img: "/illustrations/elearning.svg",
  },
  {
    title: "Consultoría TIC",
    desc: "Estrategia tecnológica y transformación digital para empresas que quieren liderar su sector.",
    href: "/es/soluciones-tecnologicas-tic",
    img: "/illustrations/ict.svg",
  },
  {
    title: "Procesos",
    desc: "Metodología ágil con resultados medibles. Entregas iterativas y comunicación transparente.",
    href: "/es/procesos",
    img: "/illustrations/processes.svg",
  },
];

export default function Page() {
  return (
    <PageShell lang="es" title="" hideTitle>
      {/* Hero */}
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          Lo que hacemos
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">
          Nuestros servicios
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl">
          Diseñamos y construimos soluciones digitales con foco en resultados de negocio. Estos son nuestros pilares.
        </p>
      </section>

      {/* Servicios */}
      <section aria-label="Servicios" className="mt-12">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="flex flex-col overflow-hidden rounded-2xl border border-corp bg-corp-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-40 w-full overflow-hidden bg-white">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h2 className="font-semibold text-corp">{s.title}</h2>
                <p className="mt-1 text-sm text-muted">{s.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section aria-label="CTA" className="mt-16 rounded-3xl border border-corp bg-corp-soft p-10 text-center">
        <h2 className="text-2xl font-semibold text-corp">¿Listos para avanzar?</h2>
        <p className="mt-2 text-muted">Cuéntanos tu reto y diseñamos la mejor solución.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold" href="/es/contacto">
          Hablar con un experto
        </a>
      </section>
    </PageShell>
  );
}
