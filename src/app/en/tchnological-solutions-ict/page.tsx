import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AnimatedTIC } from "@/components/AnimatedTIC";

export const metadata: Metadata = {
  title: "Technological Solutions for Digital Transformation | Tuataras",
  description: "ICT infrastructure management, digital transformation, strategic consulting and cybersecurity.",
};

const items = [
  { title: "ICT infrastructure management", desc: "We provide IT services to companies, supporting thousands of end users and driving positive business results.", img: "/illustrations/tic-infra.svg" },
  { title: "Digital transformation", desc: "We guide your organization through technology adoption to modernize operations and boost competitiveness.", img: "/illustrations/digital-transform.svg" },
  { title: "Strategic consulting", desc: "We define technology roadmaps aligned with business goals, prioritizing impact and return on investment.", img: "/illustrations/consulting.svg" },
  { title: "Cybersecurity", desc: "We assess vulnerabilities, implement security controls, and ensure regulatory compliance.", img: "/illustrations/cybersecurity.svg" },
];

export default function Page() {
  return (
    <PageShell lang="en" title="" hideTitle>
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Technology consulting</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">Technological Solutions for Digital Transformation</h1>
            <p className="mt-4 text-lg text-muted max-w-lg">High-value services to improve your productivity and increase your sales through new technologies. We fully manage your organization's ICT infrastructure.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">Request an assessment</a>
              <a className="btn-secondary rounded-full px-6 py-3 text-sm font-semibold" href="/en/processes">Our process</a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <AnimatedTIC />
          </div>
        </div>
      </section>
      <section aria-label="Items" className="mt-12">
        <h2 className="text-2xl font-semibold text-corp">What we cover</h2>
        <p className="mt-2 text-muted">Technology at the service of your business strategy.</p>
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
        <h2 className="text-2xl font-semibold text-corp">Boost your digital transformation</h2>
        <p className="mt-2 text-muted">Let's review your tech stack and define the next step.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold" href="/en/contact">Request an assessment</a>
      </section>
    </PageShell>
  );
}
