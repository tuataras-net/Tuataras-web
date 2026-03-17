import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="Servicios">
      <p>
        Diseñamos y construimos soluciones digitales con foco en resultados de
        negocio. Estos son nuestros pilares.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Desarrollo Web",
          desc: "Arquitecturas modernas, rendimiento y escalabilidad.",
          href: "/es/desarrollo-web",
        }, {
          title: "UX / UI",
          desc: "Investigación, prototipado y diseño centrado en usuario.",
          href: "/es/diseno-ux-ui",
        }, {
          title: "DevOps & Cloud",
          desc: "Automatización, observabilidad y operación continua.",
          href: "/es/devops-y-servicios-en-la-nube",
        }, {
          title: "Plataformas e‑learning",
          desc: "Experiencias formativas escalables con analítica integrada.",
          href: "/es/plataformas-e-learning",
        }, {
          title: "Consultorías TIC",
          desc: "Estrategia tecnológica y transformación digital.",
          href: "/es/soluciones-tecnologicas-tic",
        }].map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="rounded-2xl border border-corp p-6 transition hover:border-slate-300"
          >
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </a>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">¿Listos para avanzar?</h3>
        <p className="mt-2 text-muted">
          Cuéntanos tu reto y diseñamos la mejor solución.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">
          Hablar con un experto
        </a>
      </section>
    </PageShell>
  );
}
