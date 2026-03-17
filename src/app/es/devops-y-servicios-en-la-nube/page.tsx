import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="DevOps y Consultoría de Servicios en la Nube">
      <p>
        Automatizamos tu entrega de software y optimizamos la operación en la
        nube para escalar con seguridad.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "CI/CD",
          desc: "Pipelines automáticos con despliegues seguros.",
        }, {
          title: "Infraestructura como código",
          desc: "Terraform, IaC y ambientes reproducibles.",
        }, {
          title: "Observabilidad",
          desc: "Logs, métricas y alertas en tiempo real.",
        }, {
          title: "Optimización de costos",
          desc: "FinOps y rendimiento con foco en ROI.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">¿Quieres optimizar tu nube?</h3>
        <p className="mt-2 text-muted">
          Diseñamos una arquitectura segura y eficiente.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">
          Agenda una sesión
        </a>
      </section>
    </PageShell>
  );
}
