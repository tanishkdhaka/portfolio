import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" }, // Allow all search engines
    ],
    sitemap: "https://tanishkdhaka.com/sitemap.xml",
  };
}
