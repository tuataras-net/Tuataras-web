import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AnimatedTIC } from "@/components/AnimatedTIC";

export const metadata: Metadata = {
  title: "Soluciones Tecnológicas TIC" ,
  description: "Gestión de infraestructura TIC, transformación digital, consultoría estratégica y ciberseguridad.",
};

const items = [
  { title: "Gestión de infraestructura TIC", desc: "Brindamos servicios informáticos a empresas, dando soporte a miles de usuarios finales e impulsando resultados positivos.", img: "/illustrations/tic-infra.svg" },
  { title: "Transformación digital", desc: "Acompañamos a tu organización en el proceso de adopción tecnológica para modernizar operaciones y aumentar la competitividad.", img: "/illustrations/digital-transform.svg" },
  { title: "Consultoría estratégica", desc: "Definimos hojas de ruta tecnológicas alineadas con los objetivos del negocio, priorizando impacto y retorno de inversión.", img: "/illustrations/consulting.svg" },
  { title: "Ciberseguridad", desc: "Evaluamos vulnerabilidades, implementamos controles de seguridad y garantizamos el cumplimiento normativo.", img: "/illustrations/cybersecurity.svg" },
];

export default function Page() {
  return (
    <PageShell lang="es" title="" hideTitle>
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Consultoría tecnológica</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">Soluciones Tecnológicas para la Transformación Digital</h1>
            <p className="mt-4 text-lg text-muted max-w-lg">Servicios de alto valor para mejorar tu productividad y aumentar tus ventas gracias a las nuevas tecnologías. Gestionamos completamente la infraestructura TIC de tu empresa.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">Solicitar diagnóstico</a>
              <a className="btn-secondary rounded-full px-6 py-3 text-sm font-semibold" href="/es/procesos">Ver proceso</a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <AnimatedTIC />
          </div>
        </div>
      </section>
      <section aria-label="Items" className="mt-12">
        <h2 className="text-2xl font-semibold text-corp">¿Qué cubrimos?</h2>
        <p className="mt-2 text-muted">Tecnología al servicio de tu estrategia de negocio.</p>
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
        <h2 className="text-2xl font-semibold text-corp">Impulsa tu transformación digital</h2>
        <p className="mt-2 text-muted">Revisemos tu stack tecnológico y definamos el siguiente paso.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold" href="/es/contacto">Solicitar diagnóstico</a>
      </section>
    </PageShell>
  );
}
