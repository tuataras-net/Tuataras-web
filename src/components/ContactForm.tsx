"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

type Lang = "es" | "en";

const t = {
  es: {
    title: "Envíanos un mensaje",
    subtitle: "Completa el formulario y te contactamos a la brevedad.",
    name: "Nombre *", namePh: "Tu nombre",
    company: "Empresa", companyPh: "Tu empresa",
    email: "Email *", emailPh: "correo@empresa.com",
    service: "Servicio de interés",
    servicePh: "Selecciona un servicio",
    services: ["Desarrollo Web", "UX / UI", "DevOps & Cloud", "E-learning / LMS", "Consultoría TIC", "Procesos", "Otro"],
    message: "Mensaje *", messagePh: "Cuéntanos sobre tu proyecto...",
    send: "Enviar mensaje", sending: "Enviando...",
    successTitle: "¡Mensaje enviado!", successDesc: "Te responderemos en menos de 24 horas.",
    successReset: "Enviar otro mensaje",
    error: "Ocurrió un error. Por favor intenta nuevamente.",
  },
  en: {
    title: "Send us a message",
    subtitle: "Fill out the form and we'll get back to you shortly.",
    name: "Name *", namePh: "Your name",
    company: "Company", companyPh: "Your company",
    email: "Email *", emailPh: "you@company.com",
    service: "Service of interest",
    servicePh: "Select a service",
    services: ["Web Development", "UX / UI", "DevOps & Cloud", "E-learning / LMS", "ICT Consulting", "Processes", "Other"],
    message: "Message *", messagePh: "Tell us about your project...",
    send: "Send message", sending: "Sending...",
    successTitle: "Message sent!", successDesc: "We'll reply within 24 hours.",
    successReset: "Send another message",
    error: "Something went wrong. Please try again.",
  },
};

export function ContactForm({ lang }: { lang: Lang }) {
  const tx = t[lang];
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-2xl border border-corp bg-corp-soft p-8">
      <h2 className="text-xl font-semibold text-corp">{tx.title}</h2>
      <p className="mt-1 text-sm text-muted">{tx.subtitle}</p>

      {status === "success" ? (
        <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-xl border border-[#1a6b3a] bg-white py-12 text-center">
          <span className="text-4xl">✅</span>
          <p className="font-semibold text-corp">{tx.successTitle}</p>
          <p className="text-sm text-muted">{tx.successDesc}</p>
          <button onClick={() => setStatus("idle")} className="mt-2 text-sm text-corp underline underline-offset-2 hover:opacity-70">
            {tx.successReset}
          </button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted">{tx.name}</label>
              <input required type="text" name="from_name" placeholder={tx.namePh}
                className="mt-2 w-full rounded-xl border border-corp bg-white px-4 py-3 text-sm text-corp placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e]" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted">{tx.company}</label>
              <input type="text" name="company" placeholder={tx.companyPh}
                className="mt-2 w-full rounded-xl border border-corp bg-white px-4 py-3 text-sm text-corp placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e]" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">{tx.email}</label>
            <input required type="email" name="reply_to" placeholder={tx.emailPh}
              className="mt-2 w-full rounded-xl border border-corp bg-white px-4 py-3 text-sm text-corp placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e]" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">{tx.service}</label>
            <select name="service" className="mt-2 w-full rounded-xl border border-corp bg-white px-4 py-3 text-sm text-corp focus:outline-none focus:ring-2 focus:ring-[#3ecf8e]">
              <option value="">{tx.servicePh}</option>
              {tx.services.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">{tx.message}</label>
            <textarea required name="message" rows={5} placeholder={tx.messagePh}
              className="mt-2 w-full rounded-xl border border-corp bg-white px-4 py-3 text-sm text-corp placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] resize-none" />
          </div>
          {status === "error" && <p className="text-sm text-red-500">{tx.error}</p>}
          <button type="submit" disabled={status === "sending"}
            className="btn-primary w-full rounded-full py-3 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed">
            {status === "sending" ? tx.sending : tx.send}
          </button>
        </form>
      )}
    </div>
  );
}
