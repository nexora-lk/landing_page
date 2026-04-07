import type { MetadataRoute } from "next";

const siteUrl = "https://nextora.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/cloud", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/ai", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/work", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/work/velocity-ledger", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/work/orbit-intelligence", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/work/pulse-cloud", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${siteUrl}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
