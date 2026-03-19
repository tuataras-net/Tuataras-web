import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AnimatedElearning } from "@/components/AnimatedElearning";

export const metadata: Metadata = {
  title: "E-learning Platforms, LMS or Virtual Campus | Tuataras",
  description: "Strategy, development and analytics for custom e-learning platforms and virtual campuses.",
};

const items = [
  { title: "E-learning strategy", desc: "We design your learning platform architecture aligned with business objectives and learner needs.", img: "/illustrations/elearning-strategy.svg" },
  { title: "Custom development", desc: "We build custom LMS and virtual campuses with features tailored to your educational model.", img: "/illustrations/lms-custom.svg" },
  { title: "Gamification & engagement", desc: "We incorporate gamification, learning paths, and micro-learning to maximize retention.", img: "/illustrations/gamification.svg" },
  { title: "Analytics & reporting", desc: "We integrate dashboards and progress reports to measure the impact of training programs.", img: "/illustrations/analytics.svg" },
];

export default function Page() {
  return (
    <PageShell lang="en" title="" hideTitle>
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Digital education</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">E-learning Platforms, LMS or Virtual Campus</h1>
            <p className="mt-4 text-lg text-muted max-w-lg">We help businesses and educational centers implement, enhance, or update online training strategies effectively through e-learning consulting and platform development.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">Build my platform</a>
              <a className="btn-secondary rounded-full px-6 py-3 text-sm font-semibold" href="/en/processes">Our process</a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <AnimatedElearning />
          </div>
        </div>
      </section>
      <section aria-label="Items" className="mt-12">
        <h2 className="text-2xl font-semibold text-corp">What we offer</h2>
        <p className="mt-2 text-muted">Scalable learning solutions with measurable impact.</p>
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
        <h2 className="text-2xl font-semibold text-corp">Accelerate your digital academy</h2>
        <p className="mt-2 text-muted">Let's design the learning platform you need together.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold" href="/en/contact">Let's talk</a>
      </section>
    </PageShell>
  );
}
