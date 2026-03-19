import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/en/bye", "/es/adios", "/es/blog_es", "/en/blog_us"],
      },
    ],
    sitemap: "https://tuataras.io/sitemap.xml",
  };
}
