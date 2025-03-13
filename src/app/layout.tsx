import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Bebas_Neue } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";


const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanishk Dhaka | Software Engineer & Creative Coder",
  description:
    "Portfolio of Tanishk Dhaka, a software engineer and creative coder. Check out my projects and skills.",
  keywords:
    "Tanishk Dhaka, software engineer, portfolio, creative coding, web developer, full-stack developer",
  authors: [{ name: "Tanishk Dhaka" }],
  openGraph: {
    title: "Tanishk Dhaka | Software Engineer",
    description:
      "Explore my projects and skills in web development and creative coding.",
    url: "https://tanishkdhaka.com",
    siteName: "Tanishk Dhaka",
    images: [
      {
        url: "/heroImage.png",
        width: 1200,
        height: 630,
        alt: "Tanishk Dhaka Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanishk Dhaka | Software Engineer",
    description:
      "Explore my projects and skills in web development and creative coding.",
    images: ["/heroImage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Schema Markup for SEO */}
        <Script id="schema-markup"
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
                "https://twitter.com/tanishkdhaka",
              ],
              "jobTitle": "Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Your Current Company (if any)",
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
