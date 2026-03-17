import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="en" title="About Us">
      <p>
        We are a multidisciplinary team focused on digital consulting and
        development. We blend strategy, design, and technology.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Mission",
          desc: "Accelerate client growth with effective digital solutions.",
        }, {
          title: "Vision",
          desc: "Become the region’s trusted technology partner.",
        }, {
          title: "Values",
          desc: "Transparency, excellence, continuous learning, and outcomes.",
        }, {
          title: "Team",
          desc: "Consultants, designers, and engineers with global experience.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Join us</h3>
        <p className="mt-2 text-muted">
          We’re always looking for great talent.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">
          Contact
        </a>
      </section>
    </PageShell>
  );
}
