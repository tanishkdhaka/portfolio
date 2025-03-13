"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectData } from "@/data/projects";
import StaticCustomCursor from "../CursorImg";
import Link from "next/link";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative min-h-screen gap-0   flex flex-col items-start space-y-6 p-10"
     
    >
      <StaticCustomCursor isHovering={hover} />

      {ProjectData.map((project, index) => (
        <Link
          href={project.live}
          style={{ fontFamily: "Serif" }}
          key={index}
          className={`text-2xl cursor-none md:text-4xl p-0 m-0  flex flex-col md:flex-row justify-between px-4 font-bold relative w-full py-6 transition-colors duration-100 ${
              hoveredIndex === null ? "text-black" : hoveredIndex === index ? "text-black" : "text-gray-500"
            }`}
          onMouseEnter={() =>{ setHoveredIndex(index); setHover(true)}}
          onMouseLeave={() => {setHoveredIndex(null);setHover(false)}}
          
       
          target="_blank"
        >
          {/* Project Name with Conditional Coloring */}
          <div
            className={`transition-colors duration-300 `}
          >
            {project.name}
          </div>

          {/* Image Overlay (Hidden by Default, Shown on Hover) */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] pointer-events-none z-[10]"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Image
              src={project.img}
              alt="Preview"
              width={400}
              height={400}
              className="object-cover rounded-lg border-2 border-black"
            />
          </motion.div>

          {/* Tags Section */}
          <div className="md:text-sm text-xs grid grid-cols-3 gap-3">
            {project.tags.map((tag, id) => (
              <div
                key={id}
                className={`border-2  overflow-hidden  py-2 px-4 rounded-2xl 
                  ${
              hoveredIndex === null ? "text-black border-black" : hoveredIndex === index ? "text-black border-black" : "text-gray-500 border-gray-500"
            }
                  `}
              >
                {tag}
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 h-[1px] w-full bg-black z-1"></div>
        </Link>
      ))}
    </div>
  );
}
