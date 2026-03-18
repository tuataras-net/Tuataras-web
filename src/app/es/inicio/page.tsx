import type { Metadata } from "next";
import { StepsSection } from "@/components/StepsSection";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Tuataras | Desarrollo Web, UX/UI y Consultoría Digital",
  description:
    "Creamos aplicaciones web escalables, diseño UX/UI y plataformas e-learning. Soluciones tecnológicas para empresas que buscan crecer.",
  keywords: "desarrollo web, UX/UI, DevOps, e-learning, consultoría TIC",
};

const services = [
  { title: "Desarrollo Web", desc: "Plataformas rápidas, seguras y escalables.", href: "/es/desarrollo-web", img: "/illustrations/web-dev.svg" },
  { title: "UX / UI", desc: "Diseño centrado en usuario que convierte.", href: "/es/diseno-ux-ui", img: "/illustrations/ux-ui.svg" },
  { title: "DevOps & Cloud", desc: "Infraestructura automatizada y resiliente.", href: "/es/devops-y-servicios-en-la-nube", img: "/illustrations/devops.svg" },
  { title: "E-learning", desc: "Campus virtuales y plataformas LMS.", href: "/es/plataformas-e-learning", img: "/illustrations/elearning.svg" },
  { title: "Consultoría TIC", desc: "Estrategia tecnológica para tu empresa.", href: "/es/soluciones-tecnologicas-tic", img: "/illustrations/ict.svg" },
  { title: "Procesos", desc: "Metodología ágil con resultados medibles.", href: "/es/procesos", img: "/illustrations/processes.svg" },
];

const clients = [
  { src: "/clients/seguros-universitas.jpg", alt: "Seguros Universitas" },
  { src: "/clients/wave-house.jpg", alt: "Wave House Cleaning" },
  { src: "/clients/flick-food.jpg", alt: "Flick Food" },
  { src: "/clients/fondo-global.jpg", alt: "Fondo Global de Construcción" },
  { src: "/clients/grupo-3ag.jpg", alt: "Grupo 3AG" },
  { src: "/clients/gudari-caribe.jpg", alt: "Gudari Caribe" },
  { src: "/clients/humanitas.jpg", alt: "Humanitas" },
  { src: "/clients/lamprey-solutions.jpg", alt: "Lamprey Solutions" },
  { src: "/clients/nashoot.jpg", alt: "Nashoot" },
  { src: "/clients/palt.jpg", alt: "Palt" },
  { src: "/clients/panama-container.jpg", alt: "Panama Container Solutions" },
  { src: "/clients/grupo-seei.jpg", alt: "Grupo SEEI" },
];

const steps = [
  { title: "Diagnóstico", desc: "Entendemos tu negocio y definimos el alcance.", img: "/illustrations/discovery.svg" },
  { title: "Diseño", desc: "Prototipamos y validamos antes de desarrollar.", img: "/illustrations/design.svg" },
  { title: "Desarrollo", desc: "Construimos con sprints y entregas iterativas.", img: "/illustrations/build.svg" },
  { title: "Lanzamiento", desc: "Desplegamos, medimos y optimizamos.", img: "/illustrations/launch.svg" },
];

export default function Page() {
  return (
    <PageShell lang="es" title="" hideTitle>
      {/* Hero */}
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Consultoría y desarrollo digital
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">
              Soluciones digitales que impulsan tu negocio
            </h1>
            <p className="mt-4 text-lg text-muted max-w-lg">
              Desarrollamos aplicaciones web, diseño UX/UI y plataformas e-learning
              para organizaciones que quieren escalar con velocidad y confianza.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary rounded-full px-6 py-3 text-sm font-semibold" href="/es/servicios">
                Ver servicios
              </a>
              <a className="btn-secondary rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">
                Contáctanos
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-corp pt-8">
              <div><p className="text-2xl font-semibold text-corp">+10</p><p className="text-sm text-muted">Años de experiencia</p></div>
              <div><p className="text-2xl font-semibold text-corp">120+</p><p className="text-sm text-muted">Proyectos entregados</p></div>
              <div><p className="text-2xl font-semibold text-corp">12+</p><p className="text-sm text-muted">Clientes activos</p></div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <img
              src="/illustrations/hero.svg"
              alt="Plataformas digitales Tuataras"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section aria-label="Clientes" className="mt-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted text-center">
          Empresas que confían en Tuataras
        </p>
        <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {clients.map((c) => (
            <div key={c.alt} className="flex h-44 items-center justify-center bg-white p-2">
              <img src={c.src} alt={c.alt} className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section aria-label="Servicios" className="mt-16">
        <h2 className="text-2xl font-semibold text-corp">Nuestros servicios</h2>
        <p className="mt-2 text-muted">Todo lo que necesitas para tu transformación digital en un solo equipo.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
                                                            <a key={s.title} href={s.href} className="flex flex-col overflow-hidden rounded-2xl border border-corp bg-corp-soft transition hover:shadow-md">
              <div className="h-36 w-full overflow-hidden bg-white">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-corp">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Proceso */}
      <section aria-label="Proceso" className="mt-16">
        <h2 className="text-2xl font-semibold text-corp">Cómo trabajamos</h2>
        <p className="mt-2 text-muted">Un proceso claro, ágil y orientado a resultados.</p>
        <StepsSection steps={steps} label="process" />
      </section>

      {/* CTA */}
      <section aria-label="CTA" className="mt-16 rounded-3xl border border-corp bg-corp-soft p-10 text-center">
        <h2 className="text-2xl font-semibold text-corp">¿Listo para dar el siguiente paso?</h2>
        <p className="mt-2 text-muted">Conversemos sobre tu proyecto. Sin compromiso.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold" href="/es/contacto">
          Agendar una llamada
        </a>
      </section>
    </PageShell>
  );
}
