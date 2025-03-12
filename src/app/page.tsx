import Clock from "@/components/Clock";
import FloatingImage from "@/components/ImageMove";

import CaseStudies from "@/components/ui/Imagereveal";
import ShrinkingText from "@/components/ui/Shrinkingtext";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const saira = Bebas_Neue({ weight: "400" });

export default function Home() {
  return (
    <div
      className={`${saira.className}  pt-16 bg-[#fff5ee]  w-[100vw]  uppercase`}
    >
      <div className="h-20"></div>
      <div className="  h-[85vh]   text-black  relative   w-[100vw]">
        <div
          className="flex items-center justify-center text-2xl  pb-4 md:pb-0  lowercase font-extrabold "
          style={{ fontFamily: "MediaSansBold" }}
        >
          I am{" "}
        </div>
        <ShrinkingText text={"Tanishk Dhaka"} textColor={"text-[#8082F8]"} />
        {/* text/Image setup */}
        <div
          style={{
            fontFamily: "MediaSansBold",
            transform: " ",
          }}
          className="flex h-auto leading-loose relative items-center font-extrabold pt-16 normal-case justify-center text-2xl md:text-5xl lg:text-8xl lg:leading-20 tracking-wide flex-col md:gap-5 "
        >
          <div className="">Software Engineer</div>
          <div className="outline-text">& Creative Coder</div>
         
          
        </div>
        <div className="grid grid-cols-2 pt-8 text-xl normal-case">
          <div className="flex  items-center justify-center normal-case gap-1"> <FaLocationDot />Based in <h1 className="text-[#8082F8]"> Delhi</h1> ,India <Image src={"/flag.png"} alt={"india flag"} height={20} width={20} /> </div>
          <div className="flex items-center justify-center"><Clock/></div>
        </div>
        <div>

        </div>
        <div className="  flex items-center h-0 justify-center  overflow-hidden">
          {/* Floating Image at Bottom */}
          <FloatingImage className=" absolute grayscale bottom-0 min-w-100" />

          
        </div>
    
      </div>

      <div className="   text-black h-[100vh] relative  w-[100vw]">
       
        <ShrinkingText text={"we did it"} textColor={""} />
        <div className="flex items-center justify-center">tanishkd dhaka</div>
      </div>
      <div className="h">tanishk</div>
      <CaseStudies />
    </div>
  );
}
