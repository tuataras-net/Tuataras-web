"use client";

import { AnimatedBlogTrends } from "./AnimatedBlogTrends";
import { AnimatedBlogUX } from "./AnimatedBlogUX";
import { AnimatedBlogDevOps } from "./AnimatedBlogDevOps";

const animations: Record<string, React.ComponentType> = {
  // ES
  "tendencias-digitales-2026": AnimatedBlogTrends,
  "ux-que-convierte": AnimatedBlogUX,
  "escalando-con-devops": AnimatedBlogDevOps,
  // EN
  "digital-trends-2026": AnimatedBlogTrends,
  "ux-that-converts": AnimatedBlogUX,
  "scaling-with-devops": AnimatedBlogDevOps,
};

export function BlogPostAnimation({ slug }: { slug: string }) {
  const Animation = animations[slug];
  if (!Animation) return null;
  return <Animation />;
}
