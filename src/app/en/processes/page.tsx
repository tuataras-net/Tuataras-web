import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AnimatedProcesses } from "@/components/AnimatedProcesses";

export const metadata: Metadata = {
  title: "Process Consulting | Tuataras",
  description: "Agile methodology, transparent communication and iterative delivery. This is how we work at Tuataras.",
};

const items = [
  { title: "Discovery", desc: "We evaluate your proposal, understand your goals, and design the right work plan.", img: "/illustrations/discovery-proc.svg" },
  { title: "Planning", desc: "We define scope, timelines, and resources with agile methodologies to minimize risk.", img: "/illustrations/planning-proc.svg" },
  { title: "Execution", desc: "We develop with iterative releases and constant communication to adapt quickly.", img: "/illustrations/execution.svg" },
  { title: "Validation", desc: "We review each delivery with you before moving forward, ensuring quality and alignment.", img: "/illustrations/validation.svg" },
  { title: "Launch", desc: "We deploy carefully, run final tests, and ensure a smooth transition.", img: "/illustrations/launch.svg" },
  { title: "Support", desc: "We stay with you after launch with maintenance, improvements, and technical support.", img: "/illustrations/support.svg" },
];

export default function Page() {
  return (
    <PageShell lang="en" title="" hideTitle>
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Work methodology</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">Process Consulting</h1>
            <p className="mt-4 text-lg text-muted max-w-lg">The foundation for everything to work is communication. Our team will be aligned with you every step of the way.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">Get started</a>
              <a className="btn-secondary rounded-full px-6 py-3 text-sm font-semibold" href="/en/services">Our services</a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <AnimatedProcesses />
          </div>
        </div>
      </section>
      <section aria-label="Items" className="mt-12">
        <h2 className="text-2xl font-semibold text-corp">Our process</h2>
        <p className="mt-2 text-muted">Six stages to deliver projects with quality and confidence.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((s) => (
            <div key={s.title} className="flex flex-col overflow-hidden rounded-2xl border border-corp bg-corp-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-52 w-full overflow-hidden bg-white">
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
        <h2 className="text-2xl font-semibold text-corp">Let's work together</h2>
        <p className="mt-2 text-muted">Build a roadmap focused on real outcomes.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold" href="/en/contact">Get started</a>
      </section>
    </PageShell>
  );
}
