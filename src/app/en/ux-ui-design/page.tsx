import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="en" title="UX / UI Design">
      <p>
        We create high fidelity prototypes and effective digital products focused
        on user experience and business outcomes.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Save time and money",
          desc: "We reduce cost by creating the right features from the start and eliminating pattern errors at an early stage.",
        }, {
          title: "Accurate project planning",
          desc: "We create user flows for project planning, enabling reliable time estimates and reducing uncertainty.",
        }, {
          title: "High fidelity prototypes",
          desc: "We design interactive prototypes before writing code, validating concepts with real users.",
        }, {
          title: "Continuous improvement",
          desc: "We apply iterative, user-centered design methodologies to constantly improve the experience.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Ready to design?</h3>
        <p className="mt-2 text-muted">Tell us about your project and we'll create the perfect experience.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">Let's talk</a>
      </section>
    </PageShell>
  );
}
