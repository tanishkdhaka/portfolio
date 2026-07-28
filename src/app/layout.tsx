import type { Metadata } from "next";
import "./globals.css";

import { Bebas_Neue } from "next/font/google";

import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

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
    site: "@tanishkdhaka", // ✅ Your Twitter handle
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
        {/* End Google Tag Manager */}

        {/* ✅ Combined Person + WebSite Schema for richer Google results */}
        <Script
          id="schema-markup"
          type="application/ld+json"
          strategy="beforeInteractive" // ✅ Load before page paint for crawlers
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["Person", "LocalBusiness"],
                name: "Tanishk Dhaka",
                url: "https://tanishkdhaka.com",
                image: "https://tanishkdhaka.com/heroImage.png",
                jobTitle: "Software Engineer & Full-Stack Web Developer",
                description:
                  "Full-stack developer specializing in Next.js, React, and TypeScript.",
                // ✅ NEW — LocalBusiness fields
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Delhi",
                  addressRegion: "Delhi",
                  addressCountry: "IN",
                },
                areaServed: ["Delhi", "India", "Remote"],
                priceRange: "$$",
                openingHours: "Mo-Fr 09:00-18:00",
                sameAs: [
                  "https://www.linkedin.com/in/tanishkdhaka",
                  "https://github.com/tanishkdhaka",
                  "https://twitter.com/tanishkdhaka",
                ],

                knowsAbout: [
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Full-Stack Development",
                  "Web Performance",
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
              // ✅ NEW — BreadcrumbList (home page)
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://tanishkdhaka.com",
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "ItemList",
                name: "Projects by Tanishk Dhaka",
                description: "Web development projects built by Tanishk Dhaka",
                itemListElement: [
                  // Replace these with your actual projects from ProjectData
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Your Project 1 Name",
                    url: "https://yourproject1.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Your Project 2 Name",
                    url: "https://yourproject2.com",
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body className={`${bebasNeue.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KLR2SHW4"
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <GoogleTagManager gtmId="GTM-KLR2SHW4" />
        {children}
      </body>
    </html>
  );
}
