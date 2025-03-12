"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const caseStudies = [
  { title: "United Way" },
  { title: "L.A. Black Worker Center" },
  { title: "Pond" },
];

export default function CaseStudies() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const IMAGE_SIZE = 200;

  return (
    <div className="relative min-h-screen flex flex-col items-start space-y-6 p-10 bg-black text-white">
      {caseStudies.map((study, index) => (
        <div
          key={index}
          className="text-4xl font-bold relative w-full py-4 flex "
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {study.title}

          {/* Image Overlay (Hidden by Default, Shown on Hover) */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-[200px] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Image
              src="/some.jpg"
              alt="Preview"
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}
