"use client";

import Image from "next/image";
import React from "react";


function page() {
  return (
    <div className="w-full">
      <div className="text-2xl flex gap-2 flex-col items-center min-h-[70vh] justify-center h-full">
        <Image src={"/comingsoon.svg"} alt={"coming soon"} height={400} width={400} />
        
        <div className="flex items-center">
          <span>Coming soon .....</span>
          
        </div>
      </div>
    </div>
  );
}

export default page;
