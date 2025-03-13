import { 
    SiNextdotjs, SiReact, SiTailwindcss, SiRadixui, 
    SiNodedotjs, SiExpress, SiMysql, SiSupabase, 
    SiPostman, SiGithub, SiVercel, 
    SiThreedotjs,
    SiFramer,
    SiGreensock
  } from "react-icons/si";
  
  export const techStack = [
    {
      category: "Frontend",
      skills: [
        { name: "Next.js", icon: SiNextdotjs, desc: "SSR & static site generation." },
        { name: "React.js", icon: SiReact, desc: "Component-based UI library." },
        { name: "Tailwind CSS", icon: SiTailwindcss, desc: "Utility-first CSS framework." },
        { name: "ShadCN / Radix UI", icon: SiRadixui, desc: "Prebuilt accessible UI components." },
      ],
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, desc: "JavaScript runtime for servers." },
        { name: "Express.js", icon: SiExpress, desc: "Minimalist Node.js framework." },
        { name: "MySQL", icon: SiMysql, desc: "Relational database management." },
        { name: "Supabase", icon: SiSupabase, desc: "Firebase alternative with SQL." },
      ],
    },
   
    {
      category: "Tools & Deployment",
      skills: [
        { name: "Vercel", icon: SiVercel, desc: "Frontend deployment & hosting." },
        { name: "Postman", icon: SiPostman, desc: "API testing & development." },
        { name: "GitHub Actions", icon: SiGithub, desc: "CI/CD automation workflows." },
      ],
    },
    {
      category: "3D & Animations",
      skills: [
        { name: "Three.js", icon: SiThreedotjs, desc: "3D graphics for the web." },
        { name: "Framer Motion", icon: SiFramer, desc: "Smooth animations in React." },
        { name: "GSAP", icon: SiGreensock, desc: "Advanced animations & interactions." },
      ],
    },
  ];
  