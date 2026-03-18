import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="en" title="Process Consulting">
      <p>
        We know that confidence and good outcomes are key when running a project.
        The foundation for everything to work is communication. Our team will be
        aligned with you every step of the way.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[{
          title: "Discovery",
          desc: "We evaluate your proposal, understand your goals, and design the right work plan.",
        }, {
          title: "Planning",
          desc: "We define scope, timelines, and resources with agile methodologies to minimize risk.",
        }, {
          title: "Execution",
          desc: "We develop with iterative releases and constant communication to adapt quickly.",
        }, {
          title: "Validation",
          desc: "We review each delivery with you before moving forward, ensuring quality and alignment.",
        }, {
          title: "Launch",
          desc: "We deploy carefully, run final tests, and ensure a smooth transition.",
        }, {
          title: "Support",
          desc: "We stay with you after launch with maintenance, improvements, and technical support.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Let's work together</h3>
        <p className="mt-2 text-muted">Build a roadmap focused on real outcomes.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">Get started</a>
      </section>
    </PageShell>
  );
}
