import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hire Tanishk Dhaka — Freelance Next.js & React Developer Delhi",
  description:
    "Hire Tanishk Dhaka, a freelance Next.js and React developer in Delhi, India. Fast websites, SEO-optimised, available now. Response within 48 hours.",
  alternates: { canonical: "https://tanishkdhaka.com/hire" },
  keywords: [
    "hire Next.js developer Delhi",
    "hire React developer India",
    "freelance web developer Delhi",
    "hire frontend developer India",
    "Next.js developer for hire",
    "freelance Next.js developer India",
    "hire full stack developer Delhi",
    "web developer available now India",
  ],
  openGraph: {
    title: "Hire Tanishk Dhaka — Freelance Next.js & React Developer",
    description:
      "Fast websites, SEO-optimised, available now. Based in Delhi, working remotely worldwide.",
    url: "https://tanishkdhaka.com/hire",
    type: "website",
    images: [{ url: "/heroImage.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Tanishk Dhaka — Freelance Next.js & React Developer",
    description: "Fast websites, SEO-optimised, available now.",
    images: ["/heroImage.png"],
  },
};

export default function HireLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="hire-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://tanishkdhaka.com" },
                { "@type": "ListItem", position: 2, name: "Hire", item: "https://tanishkdhaka.com/hire" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Are you available for freelance projects?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, I currently have 2 spots open this month for freelance web development projects. I respond within 48 hours.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does a project take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Landing pages and portfolios take 1–2 weeks. Full web applications take 4–8 weeks depending on scope.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you work with international clients?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. I am based in Delhi, India and work remotely with clients worldwide.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Freelance Next.js & React Development",
              provider: {
                "@type": "Person",
                name: "Tanishk Dhaka",
                url: "https://tanishkdhaka.com",
              },
              areaServed: ["Delhi", "India", "Remote"],
              serviceType: [
                "Web Development",
                "Next.js Development",
                "React Development",
                "Frontend Development",
                "Landing Page Development",
              ],
              description:
                "Freelance Next.js and React web development. Fast, SEO-optimised websites and web apps built by Tanishk Dhaka, based in Delhi, India.",
            },
          ]),
        }}
      />
      {children}
    </>
  );
}