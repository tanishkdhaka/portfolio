"use client"
import Clock from "@/components/Clock";
import FloatingImage from "@/components/ImageMove";
import clsx from "clsx";

import ShrinkingText from "@/components/ui/Shrinkingtext";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import CustomCursor from "@/components/CustomCursor";
import Projects from "@/components/ui/Project";
import TechStack from "@/components/TechStack";


const saira = Bebas_Neue({ weight: "400", subsets: ["latin"] });


export default function Home() {
  const [hoverText1, setHoverText1] = useState(false)
  const [hoverText2, setHoverText2] = useState(false)
  return (
    <div
      className={`${saira.className}  pt-16 bg-[#fff5ee]  w-[100vw]  `}
    >
      <CustomCursor hoverText1={hoverText1} hoverText2={hoverText2} />
      {/* heroSection */}
      <div className="h-20"></div>
      <div className="  h-[85vh]   text-black  relative   w-[100vw]">
        <div
          className="flex items-center tracking-wide justify-center text-2xl  pb-4 md:pb-0  normal-case font-extrabold "
          style={{ fontFamily: "MediaSansBold" }}
        >
          Hey {" "}<span className=" scale-150 px-4 hover:animate-[ping_0.7s_ease-out_forwards]  rotate-12">👋</span> {" "},
          i am{" "}
        </div>
        <ShrinkingText text={"Tanishk Dhaka"} textColor={"text-[#8082F8]"} />
        {/* text/Image setup */}
       <div className=" flex flex-col md:gap-5">
       <div
      
          style={{
            fontFamily: "MediaSansBold",
            transform: " "
          ,
          }
          
        }
          className="flex h-auto  leading-loose relative items-center font-extrabold md:pt-16 pt-7 normal-case justify-center text-2xl md:text-5xl xl:text-8xl lg:leading-20 tracking-wide flex-col  "
        >
          <div className={clsx("transition-colors duration-100",hoverText2&&"outline-text")}>Software Engineer</div>
          <div
           onMouseEnter={() => setHoverText1(true)}
           onMouseLeave={() => setHoverText1(false)}
            className={clsx("absolute opacity-0 cursor-none outline-text1 z-[15] transition-opacity duration-200 delay-100",hoverText1&&"opacity-100")}>Software Engineer</div>
          
         
          
        </div>
        <div
          style={{
            fontFamily: "MediaSansBold",
            transform: " ",
          }}
          className="flex h-auto  leading-loose relative items-center font-extrabold  normal-case justify-center text-2xl md:text-5xl xl:text-8xl lg:leading-20 tracking-wide flex-col "
        >
          <div className={clsx("outline-text transition-colors duration-100",hoverText2&&"outline-text2")}>& Creative Coder</div>
         
          <div  onMouseEnter={() => setHoverText2(true)}
           onMouseLeave={() => setHoverText2(false)} className={clsx("absolute cursor-none opacity-0 transition-opacity duration-200 delay-100  outline-text1 z-[15]",hoverText2&&"opacity-100")}>& Creative Coder</div>
          
        </div>
       </div>
        <div className="grid grid-cols-2 pt-8 md:text-xl text-lg ">
          <div className="flex  items-center justify-center lowercase gap-1"> <FaLocationDot />Based in <h1 className="text-[#8082F8]"> Delhi</h1> ,India <Image src={"/flag.png"} alt={"india flag"} height={20} width={20} /> </div>
          <div className="flex items-center justify-center"><Clock/></div>
        </div>
        <div>

        </div>
        <div className="  flex items-center h-0 justify-center  overflow-hidden">
          {/* Floating Image at Bottom */}
          <FloatingImage className=" absolute grayscale bottom-0 min-w-100" />

          
        </div>
    
      </div>

      {/* project section */}

      <div id="projects" className="   text-black  relative  w-[100vw]">
      <div className="h-10"></div>
        <ShrinkingText text={"Projects"} textColor={"text-[#F4A261]"} />
        <div className="h-20"></div>
        <Projects />
      </div>

      {/* Education section */}
      {/* <div className="   text-black min-h-screen  flex items-center flex-col relative  w-[100vw]">
      
        <ShrinkingText text={"Education"} textColor={"text-[#66910e]"} />
        <div className="h-40"></div>
        
        <div className="flex flex-col text-black p-6 mx-auto max-w-screen-md  bg-[#e9e6cd] border-2 border-black rounded-2xl text-2xl ">
         <h1 className="mx-auto" >TimeLine</h1>
         <div className="h-[1px] bg-black  w-full"></div>
         <div className="relative  grid grid-cols-6 h-[300px]">
          <div className="flex justify-between pt-3 h-full items-center flex-col">
          <div className="flex items-center justify-center md:gap-3 w-full">  <h1>2020</h1> <div className="w-full bg-black h-[2px]"></div></div>
          <div className="flex items-center justify-center md:gap-3 w-full">  <h1>2024</h1> <div className="w-full bg-black h-[2px]"></div></div>
           
          

          </div>
          <div className="flex relative items-center">
            <Image src={"/unilogo.png"} alt={"unilogo"} height={70} width={70} className="absolute z-10 mx-auto md:left-6 " />
            <div className="h-full w-[2px] mx-auto bg-black"></div>
          </div>
          <div className="col-span-4 p-4  my-auto gap-3 flex flex-col items-start">
            <h1 className=" text-xl md:text-4xl text-[#66910e]">
              Bachlor's of technology
            </h1>
            <h2 className="text-sm md:text-3xl">Computer Science</h2>
            <h2 className="text-sm md:text-3xl flex flex-wrap ">Dr. A.P.J. Abdul Kalam Technical University</h2>
            
          </div>
           
         </div>
        </div>
        
      </div> */}
      
      {/* techStack Section */}
      <div className="text-black min-h-screen w-[100vw]">
            <ShrinkingText text={"Tech Stack"} textColor={"text-[#f13a3b]"} />
            <h1 className="h-20"></h1>
            {/* Frontend secton */}
           <TechStack/>

            {/* backend section */}
           
      </div>
    </div>
  );
}
