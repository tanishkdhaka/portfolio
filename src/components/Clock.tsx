"use client"
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateISTTime = () => {
      const now = new Date();
      const istTime = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);
      setTime(istTime);
    };

    updateISTTime(); // Set initial time
    const interval = setInterval(updateISTTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="text-lg font-bold">
      <span className="text-[#8082F8]">{time} : IST</span>
    </div>
  );
}
