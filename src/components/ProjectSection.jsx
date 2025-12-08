import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Brainwave website",
    description:
      "This is a Gaming paltform landing page built with ReactJs, Tailwindcss and GSAP. The website is built with animations that conveys the feel of gaming",
    image: "/projects/Brainwave.png",
    tags: ["React", "Tailwind"],
    demoUrl: "https://brainwave-pi-self.vercel.app/",
    githubUrl: "https://github.com/Snofts/Brainwave.git",
  },
  {
    id: 2,
    title: "Zentry Landing Page",
    description:
      "This is a Gaming paltform landing page built with ReactJs, Tailwindcss and GSAP. The website is built with animations that conveys the feel of gaming",
    image: "/projects/Zentry.png",
    tags: ["React", "Tailwind", "GSAP"],
    demoUrl: "https://zentry-awwward-website.vercel.app/",
    githubUrl: "https://github.com/Snofts/zentry-awward-website.git",
  },
  {
    id: 3,
    title: "Phenz Ecommerce Website",
    description:
      "This is a Fullstack Ecommerce website built with ReactJs, Tailwindcss, Express, MongoDB and Nodejs. The website is fully functional and mobile responsive with filters for products, user login, payment integration etc.",
    image: "/projects/Phenz.png",
    tags: ["React", "Tailwind", "GSAP"],
    demoUrl: "https://phenz-ecommerce-frontend.vercel.app/",
    githubUrl: "https://github.com/Snofts/Phenz-Ecommerce.git",
  },
  {
    id: 4,
    title: "Spylt Clone Landing Page",
    description:
      "This is a Spylt website landing page built with ReactJs, Tailwindcss and GSAP. The website is built with animations that are catchy and inviting customers to buy.",
    image: "/projects/Spylt.png",
    tags: ["React", "Tailwind", "GSAP"],
    demoUrl: "https://spylt-beta-beryl.vercel.app/",
    githubUrl: "https://github.com/Snofts/Spylt-.git",
  },
  {
    id: 5,
    title: "CodeX – AI Chat Assistant",
    description:
      "CodeX is a simple AI-powered chatbot web app built with Node.js and plain JavaScript, using the Groq API for fast and intelligent responses. Users can chat with an AI assistant in real-time through a clean and responsive frontend.",
    image: "/projects/Codex.png",
    tags: ["React", "Tailwind", "GSAP"],
    demoUrl: "https://code-x-self.vercel.app/",
    githubUrl: "https://github.com/Snofts/codeX.git",
  },
  {
    id: 6,
    title: "Promptopia",
    description:
      "Promptopia is a modern, full-stack web application built with Next.js 13, MongoDB, and Tailwind CSS. It allows users to create, share, and discover AI prompts.",
    image: "/projects/promptopia.png",
    tags: ["React", "Tailwind", "GSAP"],
    demoUrl: "https://promptopia-rho-three-48.vercel.app/",
    githubUrl: "https://github.com/Snofts/promptopia.git",
  },
  // {
  //   id: 4,
  //   title: "Forkify",
  //   description:
  //     "Forkify is a reciepe app where you can search for the recepie of different   ",
  //   image: "/projects/Promptopia.png",
  //   tags: ["React", "Tailwind", "GSAP"],
  //   demoUrl: "https://forkify-snofts.netlify.app/",
  //   githubUrl: "https://github.com/Snofts/forkify-App-portfolio-.git",
  // },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/Snofts" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">Check My Github <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
