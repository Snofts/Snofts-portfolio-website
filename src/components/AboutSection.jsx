import React from "react";
import { clsx } from "clsx";
import { ArrowBigRight, ArrowRight, Briefcase, Code, Paintbrush, User } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About
          <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1_gEIeqzIE4-3McgzTAnSA4-VooM8cikX/view?usp=sharing"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <h2 className="text-xl md:text-2xl font-bold mb-1 text-left">
              Other
              <span className="text-primary"> Skill</span>
            </h2>
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Paintbrush className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Graphic Design</h4>
                  <p className="text-muted-foreground">
                    Creating visually compelling designs that communicate ideas, strengthen brands, and engage audiences.
                  </p>
                  <div className="w-42 text-sm">
                  <a className="flex mt-3 cosmic-button" href="https://www.behance.net/gallery/254498393/Graphic-Design-Porjects" >Go to portfolio <ArrowRight className="ml-2 h-4 w-4 mt-1"/></a> 
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Mangement</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Virtual Assistance</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Providing reliable administrative, customer support, scheduling, and operational assistance to help businesses stay organized and productive.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
