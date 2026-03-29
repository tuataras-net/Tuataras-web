import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageShell } from "@/components/PageShell";
import { getPost, getPostSlugs } from "@/lib/blog";
import { BlogPostAnimation } from "@/components/BlogPostAnimation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPostSlugs("es").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("es", slug);
  if (!post) return {};
  return { title: `${post.title}`, description: post.excerpt };
}

const categoryColors: Record<string, string> = {
  Estrategia: "bg-emerald-100 text-emerald-700",
  "UX / UI": "bg-blue-100 text-blue-700",
  DevOps: "bg-orange-100 text-orange-700",
  "E-learning": "bg-purple-100 text-purple-700",
  Default: "bg-gray-100 text-gray-600",
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = getPost("es", slug);
  if (!post) notFound();

  const dateFormatted = new Date(post.date).toLocaleDateString("es-PA", {
    year: "numeric", month: "long", day: "numeric",
  });
  const colorClass = categoryColors[post.category] ?? categoryColors.Default;

  return (
    <PageShell lang="es" title="" hideTitle>
      <article className="mx-auto max-w-3xl">
        {/* Back */}
        <a href="/es/blog" className="inline-flex items-center gap-1 text-sm text-muted hover:text-corp transition-colors mb-8">
          ← Volver al Blog
        </a>

        {/* Header */}
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-12 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${colorClass}`}>
              {post.category}
            </span>
            <span className="text-xs text-muted">{post.readTime} min de lectura</span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-corp lg:text-4xl leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
          <div className="mt-6 flex items-center gap-3 pt-4 border-t border-corp/30">
            <div className="h-8 w-8 rounded-full bg-[#1a6b3a] flex items-center justify-center text-xs font-bold text-[#3ecf8e]">T</div>
            <div>
              <p className="text-sm font-semibold text-corp">{post.author}</p>
              <p className="text-xs text-muted">{dateFormatted}</p>
            </div>
          </div>
        </div>

        {/* Animación del post */}
        <div className="mb-10">
          <BlogPostAnimation slug={post.slug} />
        </div>

        {/* Content */}
        <div className="prose prose-green max-w-none prose-headings:text-corp prose-headings:font-semibold prose-p:text-muted prose-a:text-corp prose-a:underline prose-strong:text-corp prose-li:text-muted prose-h2:text-2xl prose-h3:text-xl prose-h2:mt-10 prose-h3:mt-6">
          <MDXRemote source={post.content} />
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8 text-center">
          <h2 className="text-xl font-semibold text-corp">¿Te resultó útil este artículo?</h2>
          <p className="mt-2 text-sm text-muted">Conversemos sobre cómo aplicar estas ideas en tu proyecto.</p>
          <a href="/es/contacto" className="btn-primary mt-5 inline-block rounded-full px-7 py-3 text-sm font-semibold">
            Contáctanos
          </a>
        </div>
      </article>
    </PageShell>
  );
}
