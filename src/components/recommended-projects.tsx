import { projects } from "@/lib/constants";
import React from "react";
import ProjectTypeCard from "./project-type-card";
import FadeUp from "./animations/fade-up";

const RecommendedProjects = ({ category }: { category: string }) => {
  const updatedProjectsList = projects.filter(
    (project) => project.url !== category
  );

  return (
    <div className="bg-[#645577] text-[#F9F6EF] py-16 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* LEFT TEXT SECTION */}
        <FadeUp delay={0.1} className="lg:w-1/3 text-left">
          <h1 className="text-2xl font-bold leading-[42px]">
            Check out some of the{" "}
            <span className="text-[#FF667D]">projects</span> I&apos;ve worked on
          </h1>
        </FadeUp>

        {/* RIGHT PROJECTS GRID */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {updatedProjectsList.map((project, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <ProjectTypeCard
                image={project.image}
                url={project.url}
                desc={project.desc}
                title={project.title}
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedProjects;
