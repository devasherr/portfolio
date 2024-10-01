import React from "react";
import Image from "next/image";
import { Lora } from "next/font/google";
import { IoLogoGithub } from "react-icons/io";
import { FaLink } from "react-icons/fa";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const NewProjectCard = ({ project }) => {
  return (
    <div className="card overflow-hidden">
      <figure>
        <img src={`/image/${project.image}`} alt="project image" />
      </figure>
      <div className="card-body">
        <h2 className={`${lora.className} card-title text-[25px]`}>
          {project.name}
        </h2>
        <h2 className={`${lora.className} text-sm`}>{project.description}</h2>
        <div className="card-actions flex justify-between items-center mt-2">
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <div key={index} className="badge badge-outline px-4 py-2">
                {tool}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-5 mt-1">
            {project.code != "" && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <IoLogoGithub size={25} />
              </a>
            )}
            {project.demo != "" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <FaLink size={23} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjectCard;
