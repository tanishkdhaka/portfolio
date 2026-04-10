
"use client";
import Clock from "@/components/Clock";
import FloatingImage from "@/components/ImageMove";
import clsx from "clsx";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import CustomCursor from "@/components/CustomCursor";
import ShrinkingText from "@/components/ui/Shrinkingtext";

const saira = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function HeroClient() {
  const [hoverText1, setHoverText1] = useState(false);
  const [hoverText2, setHoverText2] = useState(false);

  return (
    <div className={`${saira.className} pt-16 bg-[#fff5ee] w-[100vw]`}>
      <CustomCursor hoverText1={hoverText1} hoverText2={hoverText2} />
      <div className="h-20"></div>
      <div className="h-[85vh] text-black relative w-[100vw]">
        <div
          className="flex items-center tracking-wide justify-center text-2xl pb-4 md:pb-0 normal-case font-extrabold"
          style={{ fontFamily: "MediaSansBold" }}
        >
          Hey{" "}
          <span className="scale-150 px-4 hover:animate-[ping_0.7s_ease-out_forwards] rotate-12">
            👋
          </span>{" "}
          , i am{" "}
        </div>
        <h1>
          <ShrinkingText text={"Tanishk Dhaka"} textColor={"text-[#8082F8]"} />
        </h1>

        <div className="flex flex-col md:gap-5">
          <div
            style={{ fontFamily: "MediaSansBold" }}
            className="flex h-auto leading-loose relative items-center font-extrabold md:pt-16 pt-7 normal-case justify-center text-2xl md:text-5xl xl:text-8xl lg:leading-20 tracking-wide flex-col"
          >
            <div className={clsx("transition-colors duration-100", hoverText2 && "outline-text")}>
              Software Engineer
            </div>
            <div
              onMouseEnter={() => setHoverText1(true)}
              onMouseLeave={() => setHoverText1(false)}
              className={clsx(
                "absolute opacity-0 cursor-none outline-text1 z-[15] transition-opacity duration-200 delay-100",
                hoverText1 && "opacity-100"
              )}
            >
              Software Engineer
            </div>
          </div>

          <div
            style={{ fontFamily: "MediaSansBold" }}
            className="flex h-auto leading-loose relative items-center font-extrabold normal-case justify-center text-2xl md:text-5xl xl:text-8xl lg:leading-20 tracking-wide flex-col"
          >
            <div className={clsx("outline-text transition-colors duration-100", hoverText2 && "outline-text2")}>
              & Creative Coder
            </div>
            <div
              onMouseEnter={() => setHoverText2(true)}
              onMouseLeave={() => setHoverText2(false)}
              className={clsx(
                "absolute cursor-none opacity-0 transition-opacity duration-200 delay-100 outline-text1 z-[15]",
                hoverText2 && "opacity-100"
              )}
            >
              & Creative Coder
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 pt-8 md:text-xl text-lg">
          <div className="flex items-center justify-center lowercase gap-1">
            <FaLocationDot />
            Based in <span className="text-[#8082F8]">Delhi</span>, India
            <Image src={"/flag.png"} alt={"india flag"} height={20} width={20} />
          </div>
          <div className="flex items-center justify-center">
            <Clock />
          </div>
        </div>

        <div className="flex items-center h-0 justify-center overflow-hidden">
          <FloatingImage className="absolute grayscale bottom-0 min-w-100" />
        </div>
      </div>
    </div>
  );
}