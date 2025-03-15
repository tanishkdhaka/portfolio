import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Bebas_Neue } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanishk Dhaka Portfolio | Software Engineer & Web Developer",
  description:
    "Explore the portfolio of Tanishk Dhaka, a software engineer and full-stack web developer specializing in Next.js, React, and creative coding.",
  keywords:
    "Tanishk Dhaka, Tanishk Portfolio, software engineer, web developer, full-stack developer, Next.js developer, React developer, creative coding, freelance web developer",
  authors: [{ name: "Tanishk Dhaka" }],
  openGraph: {
    title: "Tanishk Dhaka Portfolio | Software Engineer & Web Developer",
    description:
      "Explore my projects and skills in web development, Next.js, and creative coding.",
    url: "https://tanishkdhaka.com",
    siteName: "Tanishk Dhaka Portfolio",
    images: [
      {
        url: "/heroImage.png",
        width: 1200,
        height: 630,
        alt: "Tanishk Dhaka Portfolio - Web Developer & Software Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanishk Dhaka Portfolio | Software Engineer & Web Developer",
    description:
      "Explore my projects and skills in web development, Next.js, and creative coding.",
    images: ["/heroImage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Schema Markup for SEO & Google Rich Results */}
        <Script
          id="schema-markup"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tanishk Dhaka",
              "url": "https://tanishkdhaka.com",
              "sameAs": [
                "https://www.linkedin.com/in/tanishkdhaka",
                "https://github.com/tanishkdhaka",
                "https://twitter.com/tanishkdhaka"
              ],
              "jobTitle": "Software Engineer & Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance / Open to Work"
              },
            }),
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