"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const MotionImage = motion(Image);

export default function FloatingImage({ className }: { className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 100, damping: 10 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 10 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set((e.clientX - window.innerWidth / 2) * 0.03);
      y.set((e.clientY - window.innerHeight / 2) * 0.01);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <MotionImage
      src="/heroImage.png"
    alt="Tanishk Dhaka - Software Engineer and Full Stack Web Developer"  // ← also improved alt text for SEO
  className={`absolute bottom-0 max-w-[80%] ${className}`}
  priority={true} 
  
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
