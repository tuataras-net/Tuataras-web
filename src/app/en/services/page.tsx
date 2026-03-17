import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="en" title="Services">
      <p>
        We design and build digital solutions focused on measurable business
        outcomes. These are our core capabilities.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Web Development",
          desc: "Modern architectures, performance, and scalability.",
          href: "/en/web-development",
        }, {
          title: "UX / UI",
          desc: "Research, prototyping, and user‑centered design.",
          href: "/en/ux-ui-design",
        }, {
          title: "DevOps & Cloud",
          desc: "Automation, observability, and continuous operations.",
          href: "/en/devops-services",
        }, {
          title: "E‑learning Platforms",
          desc: "Scalable learning experiences with built‑in analytics.",
          href: "/en/development-platforms-e-learning-lms",
        }, {
          title: "ICT Consulting",
          desc: "Technology strategy and digital transformation.",
          href: "/en/tchnological-solutions-ict",
        }].map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="rounded-2xl border border-corp p-6 transition hover:border-slate-300"
          >
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </a>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Ready to move?</h3>
        <p className="mt-2 text-muted">
          Tell us about your challenge and we’ll design the right solution.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">
          Talk to an expert
        </a>
      </section>
    </PageShell>
  );
}
