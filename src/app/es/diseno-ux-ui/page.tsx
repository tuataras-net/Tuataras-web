import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="Diseño UX / UI">
      <p>
        Creamos prototipos de alta fidelidad y productos digitales efectivos,
        centrados en la experiencia del usuario y los objetivos de negocio.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Ahorra tiempo y dinero",
          desc: "Reducimos el costo en la creación de funcionalidades correctas y eliminamos errores de patrones de forma temprana.",
        }, {
          title: "Planificación precisa",
          desc: "Creamos flujos de usuario que permiten estimar tiempos de desarrollo y reducir incertidumbre en el proyecto.",
        }, {
          title: "Prototipos de alta fidelidad",
          desc: "Diseñamos prototipos interactivos detallados antes de escribir código, validando conceptos con usuarios reales.",
        }, {
          title: "Mejora continua",
          desc: "Aplicamos metodologías iterativas de diseño centrado en el usuario para mejorar la experiencia constantemente.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">¿Empezamos a diseñar?</h3>
        <p className="mt-2 text-muted">Cuéntanos tu proyecto y creamos la experiencia perfecta.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">Hablemos</a>
      </section>
    </PageShell>
  );
}
