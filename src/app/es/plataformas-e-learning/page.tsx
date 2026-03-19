import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AnimatedElearning } from "@/components/AnimatedElearning";

export const metadata: Metadata = {
  title: "Plataformas e-learning, LMS o Campus Virtual | Tuataras",
  description: "Estrategia, desarrollo y analítica para plataformas e-learning y campus virtuales a medida.",
};

const items = [
  { title: "Estrategia e-learning", desc: "Diseñamos la arquitectura de tu plataforma formativa alineada con los objetivos del negocio y las necesidades del aprendiz.", img: "/illustrations/elearning-strategy.svg" },
  { title: "Desarrollo a medida", desc: "Construimos LMS y campus virtuales personalizados con funcionalidades adaptadas a tu modelo educativo.", img: "/illustrations/lms-custom.svg" },
  { title: "Gamificación y engagement", desc: "Incorporamos elementos de gamificación, rutas de aprendizaje y micro-learning para maximizar la retención.", img: "/illustrations/gamification.svg" },
  { title: "Analítica e informes", desc: "Integramos dashboards y reportes de progreso para medir el impacto de los programas formativos.", img: "/illustrations/analytics.svg" },
];

export default function Page() {
  return (
    <PageShell lang="es" title="" hideTitle>
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Educación digital</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">Plataformas e-learning, LMS o Campus Virtual</h1>
            <p className="mt-4 text-lg text-muted max-w-lg">Ayudamos a empresas y centros educativos a implantar, potenciar o actualizar estrategias de formación online de forma eficaz.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">Construir mi plataforma</a>
              <a className="btn-secondary rounded-full px-6 py-3 text-sm font-semibold" href="/es/procesos">Ver proceso</a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <AnimatedElearning />
          </div>
        </div>
      </section>
      <section aria-label="Items" className="mt-12">
        <h2 className="text-2xl font-semibold text-corp">¿Qué ofrecemos?</h2>
        <p className="mt-2 text-muted">Soluciones formativas escalables con impacto medible.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((s) => (
            <div key={s.title} className="flex flex-col overflow-hidden rounded-2xl border border-corp bg-corp-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-64 w-full overflow-hidden bg-white">
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
      <section aria-label="CTA" className="mt-16 rounded-3xl border border-corp bg-corp-soft p-10 text-center">
        <h2 className="text-2xl font-semibold text-corp">Impulsa tu academia digital</h2>
        <p className="mt-2 text-muted">Diseñemos juntos la plataforma de aprendizaje que necesitas.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold" href="/es/contacto">Hablemos</a>
      </section>
    </PageShell>
  );
}
