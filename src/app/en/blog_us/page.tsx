import { PageShell } from "@/components/PageShell";

const posts = [
  {
    title: "Digital trends 2026",
    excerpt: "How to prepare your organization for the next tech cycle.",
    href: "#",
  },
  {
    title: "UX that converts",
    excerpt: "Principles to improve experience and outcomes.",
    href: "#",
  },
  {
    title: "Scaling with DevOps",
    excerpt: "Automation and culture for secure growth.",
    href: "#",
  },
];

export default function Page() {
  return (
    <PageShell lang="en" title="Our Blog">
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <a key={post.title} href={post.href} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{post.title}</h3>
            <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
