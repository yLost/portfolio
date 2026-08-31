import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = {
    "pt-BR": "https://ylost.github.io/portfolio/br/",
    en: "https://ylost.github.io/portfolio/en/",
  };
  return [
    {
      url: "https://ylost.github.io/portfolio/br/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
    {
      url: "https://ylost.github.io/portfolio/en/",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
  ];
}
