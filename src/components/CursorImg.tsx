"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const StaticCustomCursor = ({ isHovering }: { isHovering: boolean }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    if (isHovering) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering]);

  if (!isHovering) return null; // Hide cursor when not hovering

  return (
    <div
      className="hidden md:flex fixed pointer-events-none z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative w-[80px] h-[80px] flex items-center justify-center">
        <Image
          src="/cursor2.png" // Replace with your custom image
          alt="Custom Cursor"
          width={90}
          height={90}
          className="rounded-full scale-200 object-cover"
        />
      
      </div>
    </div>
  );
};

export default StaticCustomCursor;
