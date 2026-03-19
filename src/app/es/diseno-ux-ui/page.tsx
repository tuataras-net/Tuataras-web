import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AnimatedUXUI } from "@/components/AnimatedUXUI";

export const metadata: Metadata = {
  title: "Diseño UX / UI | Tuataras",
  description: "Prototipos de alta fidelidad, investigación de usuario y diseño centrado en resultados de negocio.",
};

const items = [
  { title: "Ahorra tiempo y dinero", desc: "Reducimos el costo en la creación de funcionalidades correctas y eliminamos errores de patrones de forma temprana.", img: "/illustrations/ux-save.svg" },
  { title: "Planificación precisa", desc: "Creamos flujos de usuario que permiten estimar tiempos de desarrollo y reducir incertidumbre en el proyecto.", img: "/illustrations/ux-planning.svg" },
  { title: "Prototipos de alta fidelidad", desc: "Diseñamos prototipos interactivos detallados antes de escribir código, validando conceptos con usuarios reales.", img: "/illustrations/ux-prototype.svg" },
  { title: "Mejora continua", desc: "Aplicamos metodologías iterativas de diseño centrado en el usuario para mejorar la experiencia constantemente.", img: "/illustrations/ux-iteration.svg" },
];

export default function Page() {
  return (
    <PageShell lang="es" title="" hideTitle>
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Experiencia de usuario</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">Diseño UX / UI</h1>
            <p className="mt-4 text-lg text-muted max-w-lg">Creamos prototipos de alta fidelidad y productos digitales efectivos, centrados en la experiencia del usuario y los objetivos de negocio.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">Iniciar diseño</a>
              <a className="btn-secondary rounded-full px-6 py-3 text-sm font-semibold" href="/es/procesos">Ver proceso</a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <AnimatedUXUI />
          </div>
        </div>
      </section>
      <section aria-label="Items" className="mt-12">
        <h2 className="text-2xl font-semibold text-corp">¿Qué incluye nuestro servicio?</h2>
        <p className="mt-2 text-muted">Diseño que reduce riesgos y acelera el desarrollo.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((s) => (
            <div key={s.title} className="flex flex-col overflow-hidden rounded-2xl border border-corp bg-corp-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-72 w-full overflow-hidden bg-white">
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
        <h2 className="text-2xl font-semibold text-corp">¿Empezamos a diseñar?</h2>
        <p className="mt-2 text-muted">Cuéntanos tu proyecto y creamos la experiencia perfecta.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold" href="/es/contacto">Hablemos</a>
      </section>
    </PageShell>
  );
}
