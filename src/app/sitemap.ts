import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tanishkdhaka.com",
      lastModified: new Date("2025-04-01"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://tanishkdhaka.com/projects",
      lastModified: new Date("2025-04-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://tanishkdhaka.com/blogs",
      lastModified: new Date("2025-04-01"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://tanishkdhaka.com/contact",
      lastModified: new Date("2025-01-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    { url: "https://tanishkdhaka.com/hire", lastModified: new Date("2025-04-01"), changeFrequency: "monthly", priority: 0.9 }
  ];
}
