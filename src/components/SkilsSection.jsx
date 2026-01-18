import React, { useState } from "react";
import { cn } from "../lib/utils";
import { FaHtml5 } from "react-icons/fa"; // Font Awesome HTML5
import { IoLogoJavascript } from "react-icons/io5"; // Ionicons JS
import { FaReact } from "react-icons/fa"; // React logo
import { SiTailwindcss } from "react-icons/si"; // Simple Icons Tailwind
import { SiNextdotjs } from "react-icons/si"; // Next.js
import { FaNodeJs } from "react-icons/fa"; // Node.js
import { SiExpress } from "react-icons/si"; // Express (if available, or use a close alternative)
import { SiMongodb } from "react-icons/si"; // MongoDB
import { SiMysql } from "react-icons/si"; // MySQL
import { FaGithub } from "react-icons/fa"; // GitHub (better than SiGithub for square style)
import { SiDocker } from "react-icons/si"; // Docker
import { SiFigma } from "react-icons/si"; // Figma
import { DiVisualstudio } from "react-icons/di"; // VS Code

const iconMap = {
  FaHtml5: FaHtml5,
  IoLogoJavascript: IoLogoJavascript,
  FaReact: FaReact,
  SiTailwindcss: SiTailwindcss,
  SiNextdotjs: SiNextdotjs,
  FaNodeJs: FaNodeJs,
  SiExpress: SiExpress,
  SiMongodb: SiMongodb,
  SiMysql: SiMysql,
  FaGithub: FaGithub,
  SiDocker: SiDocker,
  SiFigma: SiFigma,
  DiVisualstudio: DiVisualstudio,
};

const skills = [
  { name: "HTML/CSS", icon: "FaHtml5", level: 95, category: "frontend" },
  {
    name: "JavaScript",
    icon: "IoLogoJavascript",
    level: 90,
    category: "frontend",
  },
  { name: "React", icon: "FaReact", level: 90, category: "frontend" },
  {
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    level: 90,
    category: "frontend",
  },
  { name: "Next.js", icon: "SiNextdotjs", level: 80, category: "frontend" },
  { name: "Node.js", icon: "FaNodeJs", level: 90, category: "backend" },
  { name: "Express", icon: "SiExpress", level: 85, category: "backend" },
  { name: "MongoDB", icon: "SiMongodb", level: 90, category: "backend" },
  { name: "MySQL", icon: "SiMysql", level: 65, category: "backend" },
  { name: "Git/GitHub", icon: "FaGithub", level: 90, category: "tools" },
  { name: "Docker", icon: "SiDocker", level: 70, category: "tools" },
  { name: "Figma", icon: "SiFigma", level: 85, category: "tools" },
  { name: "VS Code", icon: "DiVisualstudio", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkilsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon ? iconMap[skill.icon] : null;

            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  {IconComponent ? (
                    <IconComponent className="h-8 w-8 text-primary" />
                  ) : (
                    <div className="h-8 w-8 bg-secondary rounded-lg" /> // Fallback placeholder
                  )}
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                {/* Your progress bar here */}
              </div>
            );
          })}
          {/* {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <div>
                  {skill.icon ? <skill.icon className="h-8 w-8 mb-2 text-primary" /> : <FaHtml5 className="h-8 w-8 mb-2 text-primary" />}
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 origin-left animate-[grow_i.5s_ease-out]"
                  style={{
                    width: skill.level + "%",
                  }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default SkilsSection;
