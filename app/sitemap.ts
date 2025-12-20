import { MetadataRoute } from "next";
import { getAllContentSlugs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://esportsproduction.quest";

  // Get all content slugs dynamically
  const contentSlugs = getAllContentSlugs();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Content pages with appropriate priorities
  const pillarPages = ["esports-production-guide"];
  const highPriorityPages = [
    "tournament-production-cost",
    "esports-broadcast-services",
    "esports-streaming-setup",
  ];

  const contentPages: MetadataRoute.Sitemap = contentSlugs.map((slug) => {
    let priority = 0.7;
    if (pillarPages.includes(slug)) {
      priority = 0.95;
    } else if (highPriorityPages.includes(slug)) {
      priority = 0.85;
    }

    return {
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
    };
  });

  return [...staticPages, ...contentPages];
}
