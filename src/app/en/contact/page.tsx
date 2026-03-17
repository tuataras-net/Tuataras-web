import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="en" title="Contact Us">
      <p>
        Tell us about your project and we’ll reply within 48 hours.
      </p>

      <form className="mt-8 grid gap-4 rounded-2xl border border-corp bg-corp-soft p-6" name="contact">
        <div>
          <label className="text-sm font-semibold text-corp">Name</label>
          <input className="mt-2 w-full rounded-lg border border-corp bg-white p-3" type="text" name="name" />
        </div>
        <div>
          <label className="text-sm font-semibold text-corp">Email</label>
          <input className="mt-2 w-full rounded-lg border border-corp bg-white p-3" type="email" name="email" />
        </div>
        <div>
          <label className="text-sm font-semibold text-corp">Message</label>
          <textarea className="mt-2 w-full rounded-lg border border-corp bg-white p-3" rows={5} name="message" />
        </div>
        <button className="btn-primary w-fit rounded-full px-6 py-3 text-sm font-semibold" type="submit">
          Send
        </button>
      </form>
    </PageShell>
  );
}
