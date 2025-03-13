"use client";
import Link from "next/link";
import React, { useState } from "react";
import StretchText from "./Scrolltext";
import { BsEnvelopeAtFill, BsStars } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const copyToClipboard = () => {
    navigator.clipboard.writeText("er.tanishkdhaka@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 800);
  };

  const handleNavigation = (href: string) => {
    if (href === "/") {
      if (pathname === "/") {
        // If already on home, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Navigate normally
        router.push("/");
      }
    } else if (href.startsWith("#")) {
      if (pathname === "/") {
        // Scroll to section if already on home
        document.getElementById(href.substring(1))?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to home first, then scroll
        router.push(`/${href}`);
        setTimeout(() => {
          document.getElementById(href.substring(1))?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    } else {
      router.push(href);
    }
  };

  const textColor =
    pathname === "/blogs" ? "text-[#F4A261]" : "text-[#8082F8]";

  return (
    <nav className={`grid grid-cols-2 w-full ${textColor} fixed top-0 z-[1000] text-[1.5rem] font-extrabold bg-transparent p-5 uppercase`}>
      <div className="flex gap-4 items-center">
        <StretchText textColor={textColor} />
        <div className="lg:flex hidden gap-1 items-center">
          <button onClick={copyToClipboard} className="relative cursor-pointer group">
            <BsEnvelopeAtFill className="text-lg" />
            <span className={`absolute -left-2 top-5 text-white bg-[#8082F8] px-2 py-1 text-sm rounded-sm transition-opacity duration-400 ${
                copied ? "opacity-100" : "opacity-0"
              }`}>
              {copied ? "Copied!" : "Copy!"}
            </span>
          </button>
          <Link href="mailto:er.tanishkdhaka@gmail.com">info@tanishkdhaka.com</Link>
          <h1 className="flex items-center gap-2">
            <BsStars className="text-lg" />
            Available March 2025
          </h1>
        </div>
      </div>

      {/* Navbar Links */}
      <div className="lg:flex hidden gap-10 justify-end items-center">
        {[
          { name: "About", href: "/" }, // Scrolls to top if already on /
          { name: "Projects", href: "#projects" },
          { name: "Blogs", href: "/blogs" },
          { name: "Contact", href: "/contact" },
        ].map((link, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(link.href)}
            className="hover:underline underline-offset-4 transition-all duration-300"
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
