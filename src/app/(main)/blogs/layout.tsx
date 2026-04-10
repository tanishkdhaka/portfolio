import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Read articles by Tanishk Dhaka on web development, Next.js, React, TypeScript, and creative coding.",
  alternates: { canonical: "https://tanishkdhaka.com/blogs" },
  openGraph: {
    title: "Blogs | Tanishk Dhaka",
    description: "Articles on Next.js, React, TypeScript and creative web development.",
    url: "https://tanishkdhaka.com/blogs",
    type: "website",
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}