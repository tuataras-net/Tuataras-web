import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="en" title="Technological Solutions for Digital Transformation">
      <p>
        Tuataras offers high-value services to improve your productivity and
        increase your sales through new technologies. We fully manage your
        organization's ICT infrastructure.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "ICT infrastructure management",
          desc: "We provide IT services to companies, supporting thousands of end users and driving positive business results.",
        }, {
          title: "Digital transformation",
          desc: "We guide your organization through technology adoption to modernize operations and boost competitiveness.",
        }, {
          title: "Strategic consulting",
          desc: "We define technology roadmaps aligned with business goals, prioritizing impact and return on investment.",
        }, {
          title: "Cybersecurity",
          desc: "We assess vulnerabilities, implement security controls, and ensure regulatory compliance.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Boost your digital transformation</h3>
        <p className="mt-2 text-muted">Let's review your tech stack and define the next step.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">Request an assessment</a>
      </section>
    </PageShell>
  );
}
