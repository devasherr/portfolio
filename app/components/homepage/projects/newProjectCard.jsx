import React from "react";

const NewProjectCard = ({ project }) => {
  return (
    <div>
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <h2>{project.description}</h2>
        <div className="card-actions flex justify-between items-center mt-2">
          <div className="flex wrap gap-2">
            {project.tools.map((tool, index) => (
              <div key={index} className="badge badge-outline px-4 py-2">
                {tool}
              </div>
            ))}
          </div>
          <button className="btn btn-primary px-10">View Site</button>
        </div>
      </div>
    </div>
  );
};

export default NewProjectCard;
