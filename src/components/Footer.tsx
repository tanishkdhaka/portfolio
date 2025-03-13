"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa6";


function Footer() {
  const pathname = usePathname();

  const textColor = pathname === "/blogs" ? "#F4A261" : "#8082F8"; // Default color
  return (
    <footer className="w-100vw md:px-10 p-3 md:text-2xl font-semibold uppercase  gap-4 flex flex-col">
      {/* name/available */}
      <div className="flex flex-col w-full gap-4  tracking-wider justify-between md:items-end md:flex-row">
        <div
        style={{color:textColor}}
          className={`md:text-[7rem] font-semibold text-5xl `}
        >
          Tanishk Dhaka
        </div>
        <div>Available March 2025</div>
      </div>
      {/* working days/ project in mind */}
      <div className="flex flex-col md:flex-row gap-3 w-full md:p-3 justify-between">
        <div className="gap-2">
          <h1 className="font-semibold tracking-wider">Working days</h1>
          <h2 style={{ font: "status-bar" }} className="font-thin opacity-70 ">
            Monday-Friday
          </h2>
        </div>
        <div className="flex flex-col md:items-end">
          <div className="font-semibold tracking-wider">
            have a projcet in mind?
          </div>
          <Link
            style={{ font: "status-bar" }}
            className=
                "gap-2 flex items-center !text-xs md:!text-lg opacity-80 underline md:justify-center"
                
              
                onMouseEnter={(e) => (e.currentTarget.style.color = textColor)} // Change this to any hover color
                onMouseLeave={(e) => (e.currentTarget.style.color = "black" )}
            
            href="mailto:er.tanishkdhaka@gmail.com"
          >
            <BsArrowRight /> info@tanishkdhaka.com
          </Link>
        </div>
      </div>
      {/* socials link */}
      <div className="md:flex md:p-3 gap-3 justify-between">
        <div className="flex items-end gap-4">
            <h1>Social</h1>
            <ul style={{font:"revert-layer",textDecorationColor:textColor}} className="flex font-thin  !text-xs md:!text-[1rem] gap-3 underline pb-1 ">
                <li><Link href={"https://github.com/TanniTemp"} target="_blank">Github</Link></li>
                <li><Link href={"https://www.linkedin.com/in/tanishk-dhaka-82aab0217/"} target="_blank">LinkedIn</Link></li>
            </ul>
        </div>
        <div className="flex items-center md:justify-center !text-xs">
        <FaRegCopyright /> 2025 Tanishk Dhaka
        </div>
      </div>
    </footer>
  );
}

export default Footer;
