import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AnimatedDevOps } from "@/components/AnimatedDevOps";

export const metadata: Metadata = {
  title: "DevOps & Cloud Services | Tuataras",
  description: "Cloud infrastructure, CI/CD, automation and monitoring. AWS, GCP and Digital Ocean.",
};

const items = [
  { title: "Cloud infrastructure", desc: "We configure on-premises or cloud-based environments using AWS, Google Cloud Platform, and Digital Ocean.", img: "/illustrations/cloud-infra.svg" },
  { title: "Automatic deployment", desc: "With Terraform, Docker, or Ansible we automate deployments to reduce errors and accelerate delivery.", img: "/illustrations/automation.svg" },
  { title: "Continuous integration (CI/CD)", desc: "We implement CI/CD pipelines for fast, secure, and uninterrupted releases.", img: "/illustrations/cicd.svg" },
  { title: "Observability & monitoring", desc: "We set up real-time logs, metrics, and alerts to keep your systems stable and secure.", img: "/illustrations/monitoring.svg" },
];

export default function Page() {
  return (
    <PageShell lang="en" title="" hideTitle>
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Infrastructure & operations</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">DevOps & Cloud Automation</h1>
            <p className="mt-4 text-lg text-muted max-w-lg">We propel the maximum value for your organization by automating and streamlining work through the integration of development and operations teams with cloud technologies.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">Book a session</a>
              <a className="btn-secondary rounded-full px-6 py-3 text-sm font-semibold" href="/en/processes">Our process</a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <AnimatedDevOps />
          </div>
        </div>
      </section>
      <section aria-label="Items" className="mt-12">
        <h2 className="text-2xl font-semibold text-corp">What we do</h2>
        <p className="mt-2 text-muted">Resilient, automated, and observable infrastructure.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((s) => (
            <div key={s.title} className="flex flex-col overflow-hidden rounded-2xl border border-corp bg-corp-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-64 w-full overflow-hidden bg-white">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-corp">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section aria-label="CTA" className="mt-16 rounded-3xl border border-corp bg-corp-soft p-10 text-center">
        <h2 className="text-2xl font-semibold text-corp">Optimize your infrastructure</h2>
        <p className="mt-2 text-muted">We design secure, efficient, and scalable architectures.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold" href="/en/contact">Book a session</a>
      </section>
    </PageShell>
  );
}
