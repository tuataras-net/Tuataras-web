import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="en" title="E-learning Platforms, LMS or Virtual Campus">
      <p>
        We help businesses and educational centers implement, enhance, or update
        online training strategies effectively through e-learning consulting and
        platform development.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "E-learning strategy",
          desc: "We design your learning platform architecture aligned with business objectives and learner needs.",
        }, {
          title: "Custom development",
          desc: "We build custom LMS and virtual campuses with features tailored to your educational model.",
        }, {
          title: "Gamification & engagement",
          desc: "We incorporate gamification, learning paths, and micro-learning to maximize retention.",
        }, {
          title: "Analytics & reporting",
          desc: "We integrate dashboards and progress reports to measure the impact of training programs.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Accelerate your digital academy</h3>
        <p className="mt-2 text-muted">Let's design the learning platform you need together.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">Let's talk</a>
      </section>
    </PageShell>
  );
}
