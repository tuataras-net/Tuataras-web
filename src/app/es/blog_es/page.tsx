import { PageShell } from "@/components/PageShell";

const posts = [
  {
    title: "Tendencias digitales 2026",
    excerpt: "Cómo preparar tu organización para el próximo ciclo tecnológico.",
    href: "#",
  },
  {
    title: "UX que convierte",
    excerpt: "Principios para mejorar la experiencia y los resultados.",
    href: "#",
  },
  {
    title: "Escalando con DevOps",
    excerpt: "Automatización y cultura para crecer de forma segura.",
    href: "#",
  },
];

export default function Page() {
  return (
    <PageShell lang="es" title="Nuestro Blog">
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
