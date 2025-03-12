"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingImage({ className }: { className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 100, damping: 10 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 10 });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set((e.clientX - window.innerWidth / 2) * 0.03);
      y.set((e.clientY - window.innerHeight / 2) * 0.01);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY * 0.2); // Adjust the multiplier to tweak the parallax effect
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [x, y]);

  return (
    <motion.img
      src="/heroImage.png"
      alt="Floating Image"
      className={`absolute bottom-0 max-w-[80%] ${className}`}
      style={{
        x: smoothX,
        y: smoothY,
        maskImage: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%)",
        WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%)",
      }}
      height={400}
      width={600}
    />
  );
}
