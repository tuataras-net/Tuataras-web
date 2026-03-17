import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="Sobre Nosotros">
      <p>
        Somos un equipo multidisciplinar especializado en consultoría y
        desarrollo digital. Unimos estrategia, diseño y tecnología.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Misión",
          desc: "Acelerar el crecimiento de nuestros clientes con soluciones digitales efectivas.",
        }, {
          title: "Visión",
          desc: "Ser el partner tecnológico de referencia en la región.",
        }, {
          title: "Valores",
          desc: "Transparencia, excelencia, aprendizaje continuo y foco en resultados.",
        }, {
          title: "Equipo",
          desc: "Consultores, diseñadores y desarrolladores con experiencia global.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">¿Te unes?</h3>
        <p className="mt-2 text-muted">
          Buscamos talento con visión y compromiso.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">
          Contactar
        </a>
      </section>
    </PageShell>
  );
}
