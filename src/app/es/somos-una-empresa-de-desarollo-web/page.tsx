import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Tuataras",
  description: "Somos una empresa de desarrollo web y consultoría digital con más de 10 años de experiencia. Desarrolladores, diseñadores y consultores apasionados por la tecnología.",
  openGraph: {
    title: "Sobre Nosotros | Tuataras",
    description: "Más de 10 años creando soluciones digitales para empresas en Panamá y el mundo.",
    url: "https://tuataras.io/es/somos-una-empresa-de-desarollo-web",
  },
};

export default function Page() {
  return (
    <PageShell lang="es" title="Sobre Nosotros">
      <p>
        Somos una empresa de desarrollo web integrada por apasionados
        desarrolladores, diseñadores y especialistas en gestión de proyectos
        tecnológicos. Creamos e integramos herramientas que facilitan los
        procesos cotidianos de nuestros clientes.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Misión",
          desc: "Acelerar el crecimiento de nuestros clientes con soluciones digitales efectivas, adaptables al mundo tecnológico en constante evolución.",
        }, {
          title: "Visión",
          desc: "Ser el partner tecnológico de referencia en la región, reconocido por la calidad, innovación y resultados de negocio.",
        }, {
          title: "Valores",
          desc: "Transparencia, excelencia técnica, aprendizaje continuo y foco absoluto en los resultados del cliente.",
        }, {
          title: "Equipo",
          desc: "Desarrolladores, diseñadores y consultores con experiencia en proyectos internacionales y multisectoriales.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">¿Trabajamos juntos?</h3>
        <p className="mt-2 text-muted">Escríbenos y empecemos a construir algo grande.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">Contactar</a>
      </section>
    </PageShell>
  );
}
