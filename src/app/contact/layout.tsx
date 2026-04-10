// src/app/contact/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tanishk Dhaka for freelance web development projects.",
  alternates: { canonical: "https://tanishkdhaka.com/contact" },
  openGraph: {
    title: "Contact | Tanishk Dhaka",
    description: "Hire Tanishk Dhaka for freelance Next.js and React development projects.",
    url: "https://tanishkdhaka.com/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What services does Tanishk Dhaka offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tanishk Dhaka offers full-stack web development services specializing in Next.js, React, and TypeScript. Services include building portfolios, SaaS applications, landing pages, and custom web experiences.",
                },
              },
              {
                "@type": "Question",
                name: "Is Tanishk Dhaka available for freelance projects?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Tanishk Dhaka is available for freelance web development projects remotely and in Delhi, India. You can reach out via the contact form or at info@tanishkdhaka.com.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a typical web development project take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Project timelines vary depending on complexity. A typical portfolio or landing page takes 1–2 weeks. A full web application can take 4–8 weeks. Timelines are discussed and agreed upon before starting.",
                },
              },
              {
                "@type": "Question",
                name: "Does Tanishk Dhaka work with clients outside India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Tanishk works with clients globally on a remote basis, with a primary base in Delhi, India.",
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}