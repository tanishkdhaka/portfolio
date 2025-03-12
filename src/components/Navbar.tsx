"use client"
import Link from "next/link";
import React, {  useState } from "react";
import StretchText from "./Scrolltext";
import { BsEnvelopeAtFill, BsStars } from "react-icons/bs";
import { usePathname } from "next/navigation";

function Navbar() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const email = "er.tanishkdhaka@gmail.com";
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCopied(true);
    setTimeout(() => setCopied(false), 800);
  };
  const pathname = usePathname();

  const textColor =
    pathname === "/blogs"
      ? "text-[#F4A261]"
      : "text-[#8082F8]"; // Default color
  return (
    <nav className={`grid grid-cols-2 w-full ${textColor} fixed top-0 z-[10] text-[1.5rem] font-extrabold bg-transparent p-5  uppercase `}>
      <div className="flex gap-4 items-center">
        {/* Name */}
        <StretchText textColor={textColor} />
        {/* Email + Availability (Desktop Only) */}
        <div className="lg:flex hidden gap-1 items-center bg-blend-difference">
          <div className="underline underline-offset-4 flex items-center gap-2  ">
          <button onClick={copyToClipboard} className="group relative cursor-pointer">
      <BsEnvelopeAtFill className="text-lg" />
      <span
        className={`group-hover:opacity-100 ease-in-out duration-400 transition-all rounded-sm -left-2 top-5 text-white bg-[#8082F8] px-2 py-1 absolute z-3 text-sm ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        {copied ? "Copied!" : "Copy!"}
      </span>
    </button>
            <Link href="mailto:er.tanishkdhaka@gmail.com">
              info@tanishkdhaka.com
            </Link>
          </div>
          <h1 className="flex items-center gap-2">
            <BsStars className="text-lg" />
            Available March 2025
          </h1>
        </div>
      </div>

      {/* Navbar Links */}
      <div className="lg:flex hidden gap-10 justify-end items-center ">
        {["About", "Archive", "Blogs", "Contact"].map((link, index) => (
          <Link
            key={index}
            href={`/${link.toLowerCase()}`}
            className="hover:underline underline-offset-4 transition-all duration-300"
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
