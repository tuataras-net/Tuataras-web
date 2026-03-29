import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AnimatedUXUI } from "@/components/AnimatedUXUI";

export const metadata: Metadata = {
  title: "UX / UI Design" ,
  description: "High fidelity prototypes, user research and design focused on business outcomes.",
};

const items = [
  { title: "Save time and money", desc: "We reduce cost by creating the right features from the start and eliminating pattern errors at an early stage.", img: "/illustrations/ux-save.svg" },
  { title: "Accurate project planning", desc: "We create user flows for project planning, enabling reliable time estimates and reducing uncertainty.", img: "/illustrations/ux-planning.svg" },
  { title: "High fidelity prototypes", desc: "We design interactive prototypes before writing code, validating concepts with real users.", img: "/illustrations/ux-prototype.svg" },
  { title: "Continuous improvement", desc: "We apply iterative, user-centered design methodologies to constantly improve the experience.", img: "/illustrations/ux-iteration.svg" },
];

export default function Page() {
  return (
    <PageShell lang="en" title="" hideTitle>
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">User experience</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">UX / UI Design</h1>
            <p className="mt-4 text-lg text-muted max-w-lg">We create high fidelity prototypes and effective digital products focused on user experience and business outcomes.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">Start designing</a>
              <a className="btn-secondary rounded-full px-6 py-3 text-sm font-semibold" href="/en/processes">Our process</a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <AnimatedUXUI />
          </div>
        </div>
      </section>
      <section aria-label="Items" className="mt-12">
        <h2 className="text-2xl font-semibold text-corp">What our service includes</h2>
        <p className="mt-2 text-muted">Design that reduces risk and accelerates development.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((s) => (
            <div key={s.title} className="flex flex-col overflow-hidden rounded-2xl border border-corp bg-corp-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-72 w-full overflow-hidden bg-white">
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
        <h2 className="text-2xl font-semibold text-corp">Ready to design?</h2>
        <p className="mt-2 text-muted">Tell us about your project and we'll create the perfect experience.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold" href="/en/contact">Let's talk</a>
      </section>
    </PageShell>
  );
}
