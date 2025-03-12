"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ShrinkingText({ text,textColor }: { text: string ,
  textColor:string,
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [initialLoad, setInitialLoad] = useState(true); // Track initial render

  useEffect(() => {
    setInitialLoad(false); // Once loaded, stop treating it as the first load
  }, []);

  // Get text's position relative to viewport
  const startShrinking = useTransform(scrollY, (y) => {
    if (!ref.current) return 0;
    const rect = ref.current.getBoundingClientRect();
    return rect.top + 10; // Shrinking starts when text reaches -10px from the top
  });

  // Shrink from large to small size
  const fontSize = useTransform(startShrinking, [-10, 100], [
   initialLoad? "clamp(2rem, 5vw, 4rem)" : "clamp(1.125rem, 3vw, 1rem)", // Starts at 4rem on large screens, 2xl (1.5rem) on small screens
    "clamp(2rem, 5vw, 4rem)", // Shrinks to md (1.125rem) on small screens, 1.25rem on large screens
  ]);

  return (
    <div ref={ref} className={`sticky z-[10] top-6 flex flex-col text-4xl justify-start items-center ${textColor}`}>
      <motion.h1
        style={{ fontSize }}
        className="font-bold text-[4rem] sm:text-2xl"
      >
        {text}
      </motion.h1>
    </div>
  );
}
