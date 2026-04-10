import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tanishk Dhaka for freelance web development projects, collaborations, or just to say hi.",
  alternates: { canonical: "https://tanishkdhaka.com/contact" },
  openGraph: {
    title: "Contact | Tanishk Dhaka",
    description: "Hire Tanishk Dhaka for freelance Next.js and React development projects.",
    url: "https://tanishkdhaka.com/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}