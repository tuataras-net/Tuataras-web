import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="DevOps y Consultoría en la Nube">
      <p>
        Impulsamos el máximo valor para tu organización automatizando y agilizando
        el trabajo mediante la integración de equipos de desarrollo y operaciones
        en la nube.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Infraestructura en la nube",
          desc: "Configuramos entornos de servidor locales o en la nube usando AWS, Google Cloud Platform y Digital Ocean.",
        }, {
          title: "Despliegue automático",
          desc: "Con Terraform, Docker o Ansible automatizamos despliegues para reducir errores y acelerar la entrega.",
        }, {
          title: "Integración continua (CI/CD)",
          desc: "Implementamos pipelines de CI/CD para entregas seguras, rápidas y sin interrupciones.",
        }, {
          title: "Observabilidad y monitoreo",
          desc: "Configuramos logs, métricas y alertas en tiempo real para mantener tus sistemas estables y seguros.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Optimiza tu infraestructura</h3>
        <p className="mt-2 text-muted">Diseñamos arquitecturas seguras, eficientes y escalables.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">Agenda una sesión</a>
      </section>
    </PageShell>
  );
}
