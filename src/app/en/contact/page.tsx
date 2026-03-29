import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AnimatedContact } from "@/components/AnimatedContact";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us" ,
  description: "Tell us about your project. We reply within 24 hours. Email, WhatsApp or book a call directly.",
  openGraph: {
    title: "Contact Us" ,
    description: "Tell us about your project. We reply within 24 hours.",
    url: "https://tuataras.io/en/contact",
  },
};

const contactInfo = [
  { icon: "✉️", label: "Email", value: "angeldominguezg@gmail.com", href: "mailto:angeldominguezg@gmail.com" },
  { icon: "💬", label: "WhatsApp", value: "+58 424-1399078", href: "https://wa.me/584241399078" },
  { icon: "📍", label: "Location", value: "Montalbán 1, 3ra Avenida. Quinta Gladys. Caracas DC, Venezuela.", href: null },
];

export default function Page() {
  return (
    <PageShell lang="en" title="" hideTitle>
      {/* Hero */}
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Let's talk</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">
              Tell us about your project
            </h1>
            <p className="mt-4 text-lg text-muted max-w-lg">
              We reply within 24 hours. No strings attached — just a conversation to understand how we can help.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span className="text-xl">{c.icon}</span>
                  <div>
                    <p className="text-xs text-muted">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-semibold text-corp hover:underline" target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-corp">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <AnimatedContact />
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section aria-label="Form and map" className="mt-12 grid gap-8 lg:grid-cols-2">
        <ContactForm lang="en" />

        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-2xl border border-corp flex-1 min-h-[380px]">
            <iframe
              title="Tuataras — Caracas, Venezuela"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.7!2d-66.9236!3d10.4806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58adcd824807%3A0x4a8a7f3b2b2b2b2b!2sMontalbán%2C%20Caracas%2C%20Venezuela!5e0!3m2!1sen!2sve!4v1700000000000"
              width="100%" height="100%"
              className="w-full h-full min-h-[380px] grayscale hover:grayscale-0 transition-all duration-500"
              style={{ border: 0 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://wa.me/584241399078" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-corp bg-corp-soft p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
              <span className="text-2xl">💬</span>
              <div>
                <p className="text-xs font-semibold text-corp">WhatsApp</p>
                <p className="text-xs text-muted">Immediate response</p>
              </div>
            </a>
            <a href="https://wa.me/584241399078?text=Hi%2C%20I%27d%20like%20to%20schedule%20a%20call%20with%20the%20Tuataras%20team." target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-corp bg-corp-soft p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
              <span className="text-2xl">📅</span>
              <div>
                <p className="text-xs font-semibold text-corp">Book a call</p>
                <p className="text-xs text-muted">WhatsApp</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
