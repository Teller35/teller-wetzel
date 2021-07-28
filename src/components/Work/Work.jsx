import React, { useState } from "react";

function Work() {
  const [projects] = useState([
    {
      name: "Med Planner",
      description:
        "An app that help patients schedule appointments with doctors and help keep track of them that a team and I built.",
      url: "https://med-planner.herokuapp.com/",
      github: "https://github.com/Teller35/med-planner",
      image: "med-planner.png",
    },
    {
      name: "Tree of Knowledge",
      description:
        "A book search app that a team and I build to look up books and save them for later.",
      url: "https://teller35.github.io/tree-of-knowledge/",
      github: "https://github.com/Teller35/tree-of-knowledge",
      image: "pile-of-books.jpg",
    },
    {
      name: "World Wide Tech Blog",
      description:
        "A app to keep track on the newest news in the world of tech around the world.",
      url: "https://world-wide-tech-blog.herokuapp.com/",
      github: "https://world-wide-tech-blog.herokuapp.com/",
      image: "wwt.png",
    },
    {
      name: "Budget Tracker",
      description: "An app to keep track of your budget online and offline.",
      url: "https://budget-made-easy.herokuapp.com/",
      github: "https://budget-made-easy.herokuapp.com/",
      image: "budget.png",
    },
    {
      name: "Password Generator",
      description: "A simple password generator.",
      url: "https://teller35.github.io/password-generator/",
      github: "https://github.com/Teller35/password-generator",
      image: "password.png",
    },
    {
      name: "Notes Oh My",
      description: "An app to take and keep track of notes",
      url: "https://still-depths-65459.herokuapp.com/",
      github: "https://github.com/Teller35/notes-oh-my",
      image: "notes.png",
    },
  ]);
  return (
    <section className="flex-row">
      {projects.map((project) => (
        <div className="Card">
          <div className="ImgContain">
            <img
              src={require(`../../assets/large/${project.image}`).default}
              alt={project.name}
              className="ProjectImg"
            />
          </div>
          <div className="Project">
            <ul>
              <li className="ProjectLi">
                <strong>Name:</strong> {project.name}
              </li>
              <li className="ProjectLi">
              <strong>Description:</strong> {project.description}
              </li>
              <li className="ProjectLi">
                <a className="Links" href={project.url} target="_blank">Live Link</a>
                ||
                <a className="Links" href={project.github} target="_blank">GitHub Link</a>
              </li>
              <li className="ProjectLi">
              </li>
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Work;
