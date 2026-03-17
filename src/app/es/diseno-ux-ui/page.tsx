import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="Diseño UX / UI">
      <p>
        Diseñamos productos intuitivos, accesibles y centrados en usuario.
        Convertimos la complejidad en experiencias claras.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Research & insights",
          desc: "Entrevistas, mapas de experiencia y definición de pain points.",
        }, {
          title: "Prototipado rápido",
          desc: "Validación temprana con prototipos interactivos.",
        }, {
          title: "UI Systems",
          desc: "Sistemas de diseño consistentes y escalables.",
        }, {
          title: "Accesibilidad",
          desc: "Cumplimiento WCAG y foco en inclusión.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">¿Empezamos?</h3>
        <p className="mt-2 text-muted">
          Diseñemos una experiencia que tus usuarios amen.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">
          Hablemos
        </a>
      </section>
    </PageShell>
  );
}
