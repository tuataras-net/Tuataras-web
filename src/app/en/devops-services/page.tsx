import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="en" title="DevOps & Cloud">
      <p>
        We automate delivery and optimize cloud operations to scale securely.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "CI/CD",
          desc: "Automated pipelines with safe deployments.",
        }, {
          title: "Infrastructure as code",
          desc: "Terraform, IaC, and reproducible environments.",
        }, {
          title: "Observability",
          desc: "Logs, metrics, and real‑time alerts.",
        }, {
          title: "Cost optimization",
          desc: "FinOps and performance with ROI focus.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Optimize your cloud</h3>
        <p className="mt-2 text-muted">
          We design a secure and efficient architecture.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">
          Book a session
        </a>
      </section>
    </PageShell>
  );
}
