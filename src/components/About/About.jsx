import React from "react";
import coverImage from "../../assets/cover/Me.jpg";

function About() {
  return (
    <section>
      <h1 className="Second">About Me:</h1>
      <img src={coverImage} alt="Me at the park" className="Items CoverImg" />
      <div className="Items">
        <p className="First">
        Full-Stack web developer who is always looking to increase my knowledge base. I have recently earned my certificate in Full-Stack web development from U of U Coding Bootcamp. I have learned skills in JavaScript, jQuery, CSS, SQL, NoSQL, and React. Have developed applications with my fellow cohorts. Have always been a quick learner, very hands on, and not afraid to tackle hard problems.
        </p>
      </div>
    </section>
  );
}

export default About;