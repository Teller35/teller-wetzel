import React, { useState } from "react";

function Work() {
  const [projects] = useState([
    {
      name: "Med Planner",
      description:
        "An app that help patients schedule appointments with doctors and help keep track of them.",
      url: "https://med-planner.herokuapp.com/",
      github: "https://github.com/Teller35/med-planner",
      image: "med-planner.png",
    },
    {},
    {},
    {},
    {},
    {},
  ]);
  return (
    <section>
      {projects.map((project) => (
        <div>
          <span>{project.name}</span>
          <img
            src={require(`../../assets/large/${project.image}`).default}
            alt={project.name}
          />
          <div>
            <p>{project.description}</p>
            <a href={project.url}>Live {project.name}</a>
            <a href={project.github}>GitHub {project.name}</a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Work;
