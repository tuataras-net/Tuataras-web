import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  coverImage: string;
  readTime: number;
};

export type Post = PostMeta & {
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export function getPostSlugs(lang: "es" | "en"): string[] {
  const dir = path.join(CONTENT_DIR, lang);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPost(lang: "es" | "en", slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, lang, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "",
    excerpt: data.excerpt ?? "",
    date: data.date ?? "",
    author: data.author ?? "",
    category: data.category ?? "",
    coverImage: data.coverImage ?? "",
    readTime: data.readTime ?? 5,
    content,
  };
}

export function getAllPosts(lang: "es" | "en"): PostMeta[] {
  return getPostSlugs(lang)
    .map((slug) => getPost(lang, slug))
    .filter((p): p is Post => p !== null)
    .map(({ content: _, ...meta }) => meta as PostMeta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
