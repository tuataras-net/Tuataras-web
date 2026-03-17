import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="en" title="UX / UI Design">
      <p>
        We design intuitive, accessible, user‑centered experiences that turn
        complexity into clarity.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Research & insights",
          desc: "Interviews, journey maps, and pain‑point definition.",
        }, {
          title: "Rapid prototyping",
          desc: "Early validation with interactive prototypes.",
        }, {
          title: "UI systems",
          desc: "Consistent, scalable design systems.",
        }, {
          title: "Accessibility",
          desc: "WCAG compliance and inclusive design.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Ready to start?</h3>
        <p className="mt-2 text-muted">
          Let’s design an experience your users will love.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">
          Let’s talk
        </a>
      </section>
    </PageShell>
  );
}
