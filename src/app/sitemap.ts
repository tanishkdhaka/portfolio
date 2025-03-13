import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://tanishkdhaka.com", lastModified: new Date() },
    { url: "https://tanishkdhaka.com/projects", lastModified: new Date() },
    { url: "https://tanishkdhaka.com/blogs", lastModified: new Date() },
    { url: "https://tanishkdhaka.com/contact", lastModified: new Date() },
  ];
}
