import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AnimatedProcesses } from "@/components/AnimatedProcesses";

export const metadata: Metadata = {
  title: "Consultoría de Procesos" ,
  description: "Metodología ágil, comunicación transparente y entregas iterativas. Así trabajamos en Tuataras.",
};

const items = [
  { title: "Descubrimiento", desc: "Evaluamos tu propuesta, entendemos tus objetivos y diseñamos el plan de trabajo adecuado.", img: "/illustrations/discovery-proc.svg" },
  { title: "Planificación", desc: "Definimos alcance, tiempos y recursos con metodologías ágiles para minimizar riesgos.", img: "/illustrations/planning-proc.svg" },
  { title: "Ejecución", desc: "Desarrollamos con entregas iterativas y comunicación constante para adaptarnos rápido.", img: "/illustrations/execution.svg" },
  { title: "Validación", desc: "Revisamos cada entrega contigo antes de avanzar, asegurando calidad y alineación.", img: "/illustrations/validation.svg" },
  { title: "Lanzamiento", desc: "Desplegamos con cuidado, realizamos pruebas finales y aseguramos una transición sin fricciones.", img: "/illustrations/launch.svg" },
  { title: "Soporte", desc: "Continuamos contigo después del lanzamiento con mantenimiento, mejoras y soporte técnico.", img: "/illustrations/support.svg" },
];

export default function Page() {
  return (
    <PageShell lang="es" title="" hideTitle>
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Metodología de trabajo</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">Consultoría de Procesos</h1>
            <p className="mt-4 text-lg text-muted max-w-lg">La base para que todo funcione es la comunicación. Nuestro equipo estará alineado contigo en cada paso del proyecto.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">Empezar</a>
              <a className="btn-secondary rounded-full px-6 py-3 text-sm font-semibold" href="/es/servicios">Ver servicios</a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <AnimatedProcesses />
          </div>
        </div>
      </section>
      <section aria-label="Items" className="mt-12">
        <h2 className="text-2xl font-semibold text-corp">Nuestro proceso</h2>
        <p className="mt-2 text-muted">Seis etapas para entregar proyectos con calidad y confianza.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((s) => (
            <div key={s.title} className="flex flex-col overflow-hidden rounded-2xl border border-corp bg-corp-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
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
      <section aria-label="CTA" className="mt-16 rounded-3xl border border-corp bg-corp-soft p-10 text-center">
        <h2 className="text-2xl font-semibold text-corp">Trabajemos juntos</h2>
        <p className="mt-2 text-muted">Construyamos un roadmap con foco en resultados reales.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold" href="/es/contacto">Empezar</a>
      </section>
    </PageShell>
  );
}
