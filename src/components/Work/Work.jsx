import React, { useState } from "react";


function Work() {
  const [projects] = useState([
    {
      name: "Med Planner",
      description:
        "An app that help patients schedule appointments with doctors and help keep track of them that a team and I built. Responsible for the handlebars, css, and javascript logic.",
      url: "https://med-planner.herokuapp.com/",
      github: "https://github.com/Teller35/med-planner",
      image: "med-planner.png",
      tech: "HTML, CSS, JavaScript, Bootstrap, Handlebars, Sequelize, Express"
    },
    {
      name: "Tree of Knowledge",
      description:
        "A book search app that a team and I build to look up books and save them for later. Responsible for the css using foundation, and basic html.",
      url: "https://teller35.github.io/tree-of-knowledge/",
      github: "https://github.com/Teller35/tree-of-knowledge",
      image: "pile-of-books.jpg",
      tech: "HTML, CSS, JavaScript, Foundation"
    },
    {
      name: "World Wide Tech Blog",
      description:
        "A app to keep track on the newest news in the world of tech around the world. Used handlebars, bootstrap, javascript and sql.",
      url: "https://world-wide-tech-blog.herokuapp.com/",
      github: "https://github.com/Teller35/world-wide-tech-blog",
      image: "wwt.png",
      tech: "HTML, CSS, JavaScript, Sequelize, Handlebars, Express"
    },
    {
      name: "Budget Tracker",
      description: "An app to keep track of your budget online and offline. Did the backend logic with javascript, and NoSql.",
      url: "https://budget-made-easy.herokuapp.com/",
      github: "https://github.com/Teller35/budget-made-easy",
      image: "budget.png",
      tech: "HTML, CSS, JavaScript, Sequelize, Express"
    },
    {
      name: "Password Generator",
      description: "A simple password generator. Built with javascript and html.",
      url: "https://teller35.github.io/password-generator/",
      github: "https://github.com/Teller35/password-generator",
      image: "password.png",
      tech: "HTML, CSS, JavaScript"
    },
    {
      name: "Notes Oh My",
      description: "An app to take and keep track of notes. Did the backend logic with javascript.",
      url: "https://still-depths-65459.herokuapp.com/",
      github: "https://github.com/Teller35/notes-oh-my",
      image: "notes.png",
      tech: "HTML, CSS, JavaScript, Sequelize"
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
                <p className="card-text fw-bold fst-italic color">{project.description}</p>
                <p className="card-title fs-3 fw-bolder">Technologies used:</p>
                <p className="card-text fw-bold fst-italic color">{project.tech}</p>
                <a href={project.url} target="_blank" rel="noreferrer" className="p-2 position-absolute bottom-0 start-0 color">Live</a>
                <a href={project.github} target="_blank" rel="noreferrer" className="p-2 position-absolute bottom-0 end-0 color">GitHub</a>
              </div>
        </div>
      ))}
    </section>
  );
}

export default Work;
