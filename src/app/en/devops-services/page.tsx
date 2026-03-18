import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="en" title="DevOps & Cloud Automation">
      <p>
        We propel the maximum value for your organization by automating and
        streamlining work through the integration of development and operations
        teams with cloud technologies.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Cloud infrastructure",
          desc: "We configure on-premises or cloud-based environments using AWS, Google Cloud Platform, and Digital Ocean.",
        }, {
          title: "Automatic deployment",
          desc: "With Terraform, Docker, or Ansible we automate deployments to reduce errors and accelerate delivery.",
        }, {
          title: "Continuous integration (CI/CD)",
          desc: "We implement CI/CD pipelines for fast, secure, and uninterrupted releases.",
        }, {
          title: "Observability & monitoring",
          desc: "We set up real-time logs, metrics, and alerts to keep your systems stable and secure.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Optimize your infrastructure</h3>
        <p className="mt-2 text-muted">We design secure, efficient, and scalable architectures.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">Book a session</a>
      </section>
    </PageShell>
  );
}
