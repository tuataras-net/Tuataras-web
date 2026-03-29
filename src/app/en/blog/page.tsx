import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog" ,
  description: "Articles on web development, UX/UI, DevOps, e-learning and digital consulting.",
};

const categoryColors: Record<string, string> = {
  Strategy: "bg-emerald-100 text-emerald-700",
  "UX / UI": "bg-blue-100 text-blue-700",
  DevOps: "bg-orange-100 text-orange-700",
  "E-learning": "bg-purple-100 text-purple-700",
  Default: "bg-gray-100 text-gray-600",
};

export default function Page() {
  const posts = getAllPosts("en");

  return (
    <PageShell lang="en" title="" hideTitle>
      {/* Header */}
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Resources & knowledge</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">Blog</h1>
        <p className="mt-4 text-lg text-muted max-w-xl">
          Ideas, trends and practical guides on technology, design and digital transformation.
        </p>
      </section>

      {/* Posts grid */}
      <section aria-label="Posts" className="mt-12">
        {posts.length === 0 ? (
          <p className="text-muted">No articles published yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const colorClass = categoryColors[post.category] ?? categoryColors.Default;
              const dateFormatted = new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric", month: "long", day: "numeric",
              });

              return (
                <a
                  key={post.slug}
                  href={`/en/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-corp bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="h-40 w-full overflow-hidden bg-corp-soft flex items-center justify-center">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="h-full w-full object-contain p-6 opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex flex-col flex-1 p-5 gap-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${colorClass}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-muted">{post.readTime} min</span>
                    </div>

                    <h2 className="font-semibold text-corp leading-snug group-hover:underline underline-offset-2">
                      {post.title}
                    </h2>

                    <p className="text-sm text-muted line-clamp-2 flex-1">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-2 border-t border-corp/30">
                      <span className="text-xs text-muted">{dateFormatted}</span>
                      <span className="text-xs font-semibold text-corp">Read →</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </section>
    </PageShell>
  );
}
