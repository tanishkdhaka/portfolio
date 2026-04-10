import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Bebas_Neue } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tanishkdhaka.com"), // ✅ Critical for absolute OG URLs

  title: {
    default: "Tanishk Dhaka | Software Engineer & Full-Stack Developer",
    template: "%s | Tanishk Dhaka", // ✅ Page-specific titles inherit this
  },

  description:
    "Tanishk Dhaka is a software engineer and full-stack web developer specializing in Next.js, React, TypeScript, and creative web experiences. Available for freelance projects.",

  keywords: [
    "Tanishk Dhaka",
    "Tanishk Dhaka portfolio",
    "software engineer",
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "web developer India",
    "freelance web developer",
    "creative developer",
    "frontend developer",
    "UI developer",
  ],

  authors: [{ name: "Tanishk Dhaka", url: "https://tanishkdhaka.com" }],
  creator: "Tanishk Dhaka",
  publisher: "Tanishk Dhaka",

  // ✅ Canonical URL — prevents duplicate content penalties
  alternates: {
    canonical: "https://tanishkdhaka.com",
  },

  // ✅ Tells crawlers to index and follow
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [{ url: "/contact.png" }],
    shortcut: "/contact.png",
    apple: "/contact.png",
  },

  openGraph: {
    title: "Tanishk Dhaka | Software Engineer & Full-Stack Developer",
    description:
      "Explore projects and skills in full-stack development, Next.js, React, and creative coding by Tanishk Dhaka.",
    url: "https://tanishkdhaka.com",
    siteName: "Tanishk Dhaka",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/heroImage.png", // metadataBase makes this absolute automatically
        width: 1200,
        height: 630,
        alt: "Tanishk Dhaka — Software Engineer & Full-Stack Web Developer",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tanishk Dhaka | Software Engineer & Full-Stack Developer",
    description:
      "Explore projects and skills in full-stack development, Next.js, React, and creative coding.",
    site: "@tanishkdhaka",    // ✅ Your Twitter handle
    creator: "@tanishkdhaka", // ✅ Enables author attribution on Twitter cards
    images: ["/heroImage.png"],
  },

 
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Combined Person + WebSite Schema for richer Google results */}
        <Script
          id="schema-markup"
          type="application/ld+json"
          strategy="beforeInteractive" // ✅ Load before page paint for crawlers
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Tanishk Dhaka",
                url: "https://tanishkdhaka.com",
                image: "https://tanishkdhaka.com/heroImage.png",
                jobTitle: "Software Engineer & Full-Stack Web Developer",
                description:
                  "Full-stack developer specializing in Next.js, React, and TypeScript.",
                sameAs: [
                  "https://www.linkedin.com/in/tanishkdhaka",
                  "https://github.com/tanishkdhaka",
                  "https://twitter.com/tanishkdhaka",
                ],
                knowsAbout: [
                  "Next.js", "React", "TypeScript",
                  "Node.js", "Full-Stack Development", "Web Performance",
                ],
                worksFor: {
                  "@type": "Organization",
                  name: "Freelance",
                },
              },
              {
                // ✅ Enables Google Sitelinks Searchbox (bonus SEO)
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Tanishk Dhaka Portfolio",
                url: "https://tanishkdhaka.com",
              },
            ]),
          }}
        />
      </head>
      <body className={`${bebasNeue.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}