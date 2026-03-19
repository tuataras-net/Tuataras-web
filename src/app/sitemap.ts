import { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/blog";

const BASE_URL = "https://tuataras.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const esSlugs = getPostSlugs("es");
  const enSlugs = getPostSlugs("en");

  const staticPages = [
    { url: `${BASE_URL}/es/inicio`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/en/home`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/es/servicios`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/en/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/es/desarrollo-web`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/en/web-development`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/es/diseno-ux-ui`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/en/ux-ui-design`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/es/devops-y-servicios-en-la-nube`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/en/devops-services`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/es/plataformas-e-learning`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/en/development-platforms-e-learning-lms`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/es/soluciones-tecnologicas-tic`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/en/tchnological-solutions-ict`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/es/procesos`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/en/processes`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/es/somos-una-empresa-de-desarollo-web`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/en/about-us-development-company`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/es/blog`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/en/blog`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/es/contacto`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/en/contact`, priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const esBlogPages = esSlugs.map((slug) => ({
    url: `${BASE_URL}/es/blog/${slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  const enBlogPages = enSlugs.map((slug) => ({
    url: `${BASE_URL}/en/blog/${slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...esBlogPages, ...enBlogPages].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
