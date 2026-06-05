import React, { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Signalist Stock tracker App",
    description:
      "Signalist is a full-stack stock companion built with Next.js (App Router). It lets users: Sign up and sign in (email + password), Build a personal watchlist, Search and browse stocks (via Finnhub), View stock details and watchlist status and Receive email automation (welcome email + daily market news summaries)",
    image: "/projects/signalist.png",
    tags: ["Nextjs", "Tailwind", "MongoDb", "Nodejs"],
    demoUrl: "https://signalist-stock-tracker-app-self.vercel.app/",
    githubUrl: "https://github.com/Snofts/Signalist_stock-tracker-app.git",
  },
  {
    id: 2,
    title: "Crevos Website",
    description:
      "A modern, responsive website built with React, Tailwind CSS and GSAP, showcasing crevos services, portfolio, and appointment booking.",
    image: "/projects/crevos.png",
    tags: ["React", "Tailwind", "GSAP"],
    demoUrl: "https://crevosltd.com.ng",
    githubUrl: "https://github.com/crevosltd/Crevos.git",
  },
  {
    id: 3,
    title: "Adediran Nathaniel Portfolio Website",
    description:
      "A modern, responsive portfolio built with React and Tailwind CSS, showcasing Adediran Nathaniel's work, skills, and experience as a Blockchain Data Analyst and Researcher.",
    image: "/projects/angelnath.png",
    tags: ["React", "Tailwind"],
    demoUrl: "https://angelnath-portfolio.vercel.app",
    githubUrl: "https://github.com/only1angelnath/angelnath-portfolio.git",
  },
  {
    id: 4,
    title: "Police Radio Code App landing page",
    description:
      "This is a landing page for a app that is used to Decode Police, Fire, and Emergency Codes used by First Responders across the Globe. The app is only available in US, Australia, Canada and Uk",
    image: "/projects/policeradiocodeapp.png",
    tags: ["React", "Tailwind"],
    demoUrl: "https://policeradiocode.com/",
    githubUrl: "https://github.com/Snofts/PoliceRadioCodeApp.git",
  },
  {
    id: 5,
    title: "Brainwave website",
    description:
      "This is a Gaming paltform landing page built with ReactJs, Tailwindcss and GSAP. The website is built with animations that conveys the feel of gaming",
    image: "/projects/Brainwave.png",
    tags: ["React", "Tailwind"],
    demoUrl: "https://brainwave-pi-self.vercel.app/",
    githubUrl: "https://github.com/Snofts/Brainwave.git",
  },
  {
    id: 6,
    title: "Zentry Landing Page",
    description:
      "This is a Gaming paltform landing page built with ReactJs, Tailwindcss and GSAP. The website is built with animations that conveys the feel of gaming",
    image: "/projects/Zentry.png",
    tags: ["React", "Tailwind", "GSAP"],
    demoUrl: "https://zentry-awwward-website.vercel.app/",
    githubUrl: "https://github.com/Snofts/zentry-awward-website.git",
  },
  {
    id: 7,
    title: "Phenz Ecommerce Wordpress Website",
    description:
      "This is an Ecommerce website built with Wordpress, Html, CSS, JS, and woocommerce. The website is fully functional and mobile responsive with filters for products, user login, payment integration etc.",
    image: "/projects/Phenz.png",
    tags: ["Wordpress", "Html", "CSS", "JS"],
    demoUrl: "https://phenz.shop",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Phenz Fullstack Ecommerce",
    description:
      "This is a replicated Fullstack Ecommerce of Phenz website built with ReactJs, Tailwindcss, Express, MongoDB and Nodejs. The website is fully functional and mobile responsive with filters for products, user login, payment integration etc. NT: The backend will take time to load because it is hosted on Netlify.",
    image: "/projects/Phenz.png",
    tags: ["ReactJs", "Tailwindcss", "Express", "MongoDB", "Nodejs"],
    demoUrl: "https://phenz-ecommerce-frontend.vercel.app/",
    githubUrl: "https://github.com/Snofts/Phenz-Ecommerce.git",
  },
  {
    id: 9,
    title: "Contract Safety Agreement Form",
    description:
      "This is a contract safety agreement form built with Wordpress, HTML, CSS and JS. The form is used to collect information from users and store it in a database. The form is also used to generate a PDF document that is sent to the user via email.",
    image: "/projects/poshsafety.png",
    tags: ["Wordpress", "HTML", "CSS", "JS"],
    demoUrl: "https://app.poshsafety.com/dominium/",
    githubUrl: "#",
  },
  {
    id: 10,
    title: "Spylt Clone Landing Page",
    description:
      "This is a Spylt website landing page built with ReactJs, Tailwindcss and GSAP. The website is built with animations that are catchy and inviting customers to buy.",
    image: "/projects/Spylt.png",
    tags: ["React", "Tailwind", "GSAP"],
    demoUrl: "https://spylt-beta-beryl.vercel.app/",
    githubUrl: "https://github.com/Snofts/Spylt-.git",
  },
  {
    id: 11,
    title: "CodeX – AI Chat Assistant",
    description:
      "CodeX is a simple AI-powered chatbot web app built with Node.js and plain JavaScript, using the Groq API for fast and intelligent responses. Users can chat with an AI assistant in real-time through a clean and responsive frontend.",
    image: "/projects/Codex.png",
    tags: ["React", "Tailwind", "GSAP"],
    demoUrl: "https://code-x-self.vercel.app/",
    githubUrl: "https://github.com/Snofts/codeX.git",
  },
  {
    id: 12,
    title: "Promptopia",
    description:
      "Promptopia is a modern, full-stack web application built with Next.js 13, MongoDB, and Tailwind CSS. It allows users to create, share, and discover AI prompts.",
    image: "/projects/promptopia.png",
    tags: ["Next.js", "Tailwind", "GSAP"],
    demoUrl: "https://promptopia-rho-three-48.vercel.app/",
    githubUrl: "https://github.com/Snofts/promptopia.git",
  },
];

const ProjectSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

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
          {displayedProjects.map((project, key) => (
            <div
              key={key}
              className="flex flex-col justify-between group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-[50%] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-3">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 mx-4">
                  {project.description}
                </p>
              </div>
              <div className="flex justify-between items-center p-4">
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
        <div className="flex justify-center mt-10">
          {projects.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              {showAll ? "Show Less" : "View More Projects"}
            </button>
          )}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/Snofts"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
