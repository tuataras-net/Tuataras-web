import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="en" title="Processes">
      <p>
        Our process blends strategy, design, and continuous delivery to reduce
        risk and accelerate outcomes.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[{
          title: "Discovery",
          desc: "We align on business goals, audiences, and priorities.",
        }, {
          title: "Design & prototype",
          desc: "Define UX/UI and validate hypotheses early.",
        }, {
          title: "Build",
          desc: "Agile delivery with iterative releases.",
        }, {
          title: "Measure",
          desc: "Analytics and KPIs to optimize results.",
        }, {
          title: "Scale",
          desc: "Product evolution with new capabilities.",
        }, {
          title: "Support",
          desc: "Maintenance, security, and continuous improvement.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Let’s work together</h3>
        <p className="mt-2 text-muted">
          Build a roadmap focused on impact.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">
          Get started
        </a>
      </section>
    </PageShell>
  );
}
