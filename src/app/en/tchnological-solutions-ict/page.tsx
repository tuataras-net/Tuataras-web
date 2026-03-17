import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="en" title="ICT Consulting">
      <p>
        We align technology and business to accelerate digital transformation.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Digital strategy",
          desc: "Roadmaps, prioritization, and operating model.",
        }, {
          title: "Enterprise architecture",
          desc: "Governance, standards, and tech evolution.",
        }, {
          title: "Modernization",
          desc: "Migration from legacy to modern platforms.",
        }, {
          title: "Cybersecurity",
          desc: "Assessments, hardening, and compliance.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Boost your strategy</h3>
        <p className="mt-2 text-muted">
          Let’s review your stack and define the next step.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">
          Request an assessment
        </a>
      </section>
    </PageShell>
  );
}
