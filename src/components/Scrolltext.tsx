"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const ReverseStretchText = ({textColor}:{textColor:string}) => {
  const { scrollYProgress } = useScroll();

  // Reverse scaling from 2 to 1
  const scaleY = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
  
      <motion.span
        style={{ scaleY,transformOrigin: "top"  }}
        className={`text-4xl font-extrabold uppercase mr-3   ${textColor}`}
      >
        <Link href={"/"}>Tanni</Link>
      </motion.span>

  );
};

export default ReverseStretchText;
