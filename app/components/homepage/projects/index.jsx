import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
import NewProjectCard from "./newProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      <div className="top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-${index + 1}`}
              key={index}
              className="w-full mx-auto max-w-xl"
            >
              <div className="box-border flex items-center justify-center rounded-lg shadow-[0_0_30px_0_rgba(0,0,0,0.8)] transition-all duration-[0.5s]">
                {<NewProjectCard project={project} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
