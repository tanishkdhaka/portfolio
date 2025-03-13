"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CustomCursor = ({ hoverText1, hoverText2 }: { hoverText1: boolean; hoverText2: boolean }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const isVisible = hoverText1 || hoverText2; // Show cursor only if either is true

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const startTime = performance.now(); // Store start time

    const rotateCursor = (time: number) => {
      const elapsed = time - startTime; // Time elapsed since start
      setRotation((elapsed / 7000) * 360); // 1 full rotation in 7 sec

      requestAnimationFrame(rotateCursor);
    };

    if (isVisible) {
      document.addEventListener("mousemove", handleMouseMove);
      requestAnimationFrame(rotateCursor);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible]);

  if (!isVisible) return null; // Hide cursor when not hovering

  return (
    <div
      className=" hidden md:flex fixed pointer-events-none z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    >
      <div className="relative w-[80px] rounded-full h-[80px] flex items-center justify-center">
        <Image
        
          src="/cursor.png"
          alt="Cursor"
          width={90}
          height={90}
          className="rounded-full scale-250 object-cover"
        />
      </div>
    </div>
  );
};

export default CustomCursor;

