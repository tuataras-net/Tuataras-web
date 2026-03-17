import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="en" title="E‑learning Platforms">
      <p>
        We build learning ecosystems with analytics and personalization to
        maximize adoption.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Learning experiences",
          desc: "Learning paths, micro‑learning, and gamification.",
        }, {
          title: "Integrations",
          desc: "LMS, CRM, and corporate tools.",
        }, {
          title: "Analytics",
          desc: "Dashboards and real‑time progress tracking.",
        }, {
          title: "Scalability",
          desc: "Architectures built for thousands of users.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Accelerate your academy</h3>
        <p className="mt-2 text-muted">
          Let’s design a scalable learning platform.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">
          Let’s talk
        </a>
      </section>
    </PageShell>
  );
}
