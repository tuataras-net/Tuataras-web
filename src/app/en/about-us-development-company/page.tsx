import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About Us | Tuataras",
  description: "We are a web development and digital consulting firm with over 10 years of experience. Developers, designers and consultants passionate about technology.",
  openGraph: {
    title: "About Us | Tuataras",
    description: "10+ years building digital solutions for companies in Panama and worldwide.",
    url: "https://tuataras.io/en/about-us-development-company",
  },
};

export default function Page() {
  return (
    <PageShell lang="en" title="About Us">
      <p>
        We are a web development company composed of passionate developers,
        designers, and project management specialists in information technology.
        We create and integrate tools that facilitate the daily processes of our
        clients.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Mission",
          desc: "Accelerate client growth with effective digital solutions, adaptable to the constantly evolving tech world.",
        }, {
          title: "Vision",
          desc: "Become the region's reference technology partner, recognized for quality, innovation, and business results.",
        }, {
          title: "Values",
          desc: "Transparency, technical excellence, continuous learning, and absolute focus on client outcomes.",
        }, {
          title: "Team",
          desc: "Developers, designers, and consultants with experience in international, multi-sector projects.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Work with us?</h3>
        <p className="mt-2 text-muted">Reach out and let's build something great together.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">Contact us</a>
      </section>
    </PageShell>
  );
}
