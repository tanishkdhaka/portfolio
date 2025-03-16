"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import StretchText from "./Scrolltext";
import { CgMenuGridR } from "react-icons/cg";
import { usePathname } from "next/navigation";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Background color logic
  const bgColor =
    pathname === "/blogs"
      ? "#F4A261"
      : pathname === "/contact"
      ? "#e62161"
      : "#8082F8";

  const textColor = isOpen
    ? "text-white"
    : bgColor === "#F4A261"
    ? "text-[#F4A261]"
    : bgColor === "#e62161"
    ? "text-[#e62161]"
    : "text-[#8082F8]";

  // LOCK BODY SCROLL when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden p-0 m-0 overflow-hidden">
      {/* Logo */}
      <div
        className={`fixed top-5 left-5 z-[1101] transition-colors duration-300 ${textColor}`}
      >
        <StretchText textColor={textColor} />
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-5 scale-110 right-5 z-[1101] transition-colors duration-300 ${textColor}`}
      >
        {isOpen ? (
          <Menu size={32} className="text-white" />
        ) : (
          <CgMenuGridR size={32} />
        )}
      </button>

      {/* Fullscreen Menu */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={isOpen ? { y: 0 } : { y: "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ backgroundColor: bgColor }}
        className="fixed top-0 left-0 w-full h-screen text-white px-5 flex justify-center font-extrabold flex-col z-[1000]"
      >
        <div className="flex flex-col tracking-wider text-6xl space-y-6">
          <Link href="/" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/#projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="/blogs" onClick={() => setIsOpen(false)}>
            Blogs
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>

        <div className="bg-white h-[2px] my-3 w-full"></div>

        <div>
          <h1 className="text-xl font-normal">Socials</h1>
          <ul
            style={{ font: "revert-layer" }}
            className="flex flex-col text-2xl tracking-wide gap-0.5"
          >
            <li>
              <Link href={"https://github.com/TanniTemp"} target="_blank">
                Github
              </Link>
            </li>
            <li>
              <Link
                href={
                  "https://www.linkedin.com/in/tanishk-dhaka-82aab0217/"
                }
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-white h-[2px] my-3 w-full"></div>

        <div className="flex text-xl justify-between font-normal flex-wrap">
          <div>Available March 2025</div>
          <Link href="mailto:er.tanishkdhaka@gmail.com">
            info@tanishkdhaka.com
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default BurgerMenu;
