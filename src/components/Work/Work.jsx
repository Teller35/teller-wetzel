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
      github: "https://github.com/Teller35/world-wide-tech-blog",
      image: "wwt.png",
    },
    {
      name: "Budget Tracker",
      description: "An app to keep track of your budget online and offline.",
      url: "https://budget-made-easy.herokuapp.com/",
      github: "https://github.com/Teller35/budget-made-easy",
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
    <section className="d-flex justify-content-evenly flex-wrap">
      {projects.map((project) => (
        <div className="card text-center">
          <img
              src={require(`../../assets/large/${project.image}`).default}
              alt={project.name}
              className="card-img-top Image"
              />
              <div className="card-body">
                <h5 className="card-title fs-3 fw-bolder">{project.name}</h5>
                <p className="card-text fw-normal fst-italic">{project.description}</p>
                <a href={project.url} target="_blank" className="Links p-2 position-absolute bottom-0 start-0">Live</a>
                <a href={project.github} target="_blank" className="Links p-2 position-absolute bottom-0 end-0">GitHub</a>
              </div>
        </div>
      ))}
    </section>
  );
}

export default Work;
