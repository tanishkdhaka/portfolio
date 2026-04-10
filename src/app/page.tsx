
import HeroClient from "@/components/HeroClient";
import Projects from "@/components/ui/Project";
import TechStack from "@/components/TechStack";
import ShrinkingText from "@/components/ui/Shrinkingtext";

export default function Home() {
  return (
    <div className="bg-[#fff5ee] w-[100vw]">
      
      {/* Hero Section — client only for interactivity */}
      <HeroClient />

      {/* Projects Section */}
      <div id="projects" className="text-black relative w-[100vw]">
        <div className="h-10"></div>
        <ShrinkingText text={"Projects"} textColor={"text-[#F4A261]"} />
        <div className="h-20"></div>
        <Projects />
      </div>

      {/* Tech Stack Section */}
      <div className="text-black min-h-screen w-[100vw]">
        <ShrinkingText text={"Tech Stack"} textColor={"text-[#f13a3b]"} />
        <div className="h-20"></div>
        <TechStack />
      </div>

    </div>
  );
}