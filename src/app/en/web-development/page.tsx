import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="en" title="Web Development">
      <p>
        We build modern, fast, and secure web platforms designed to scale and
        convert.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Modern architecture",
          desc: "Next.js, robust APIs, and cloud deployments.",
        }, {
          title: "User‑centered experience",
          desc: "Clear UI, accessibility, and conversion focus.",
        }, {
          title: "Performance & SEO",
          desc: "Core Web Vitals and technical best practices.",
        }, {
          title: "Continuous improvement",
          desc: "Observability, iterative enhancements, and support.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Want a demo?</h3>
        <p className="mt-2 text-muted">
          Let’s talk about your platform and goals.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">
          Request a meeting
        </a>
      </section>
    </PageShell>
  );
}
