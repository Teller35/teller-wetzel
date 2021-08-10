import React from "react";

function Resume() {
  return (
    <section className="First">
      <h2>Resume</h2>
      <div>
        <h3>Technical Skills</h3>
        <ul>
          <li>Mongoose/MongoDB</li>
          <li>Express</li>
          <li>React</li>
          <li>NodeJS</li>
          <li>Javascript</li>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </div>
      <div>
        <h3>Education</h3>
        <ul>
          <li>Bootcamp Certificate from University of Utah</li>
          <li>IT Support Certificate from Coresera</li>
        </ul>
      </div>
      <h3>
        Download a copy
        <a
          className="Links"
          href="https://drive.google.com/file/d/1sLOzMYVGHmOkXx02M3dSgDK-iptViXs3/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <span> Here</span>
        </a>
      </h3>
    </section>
  );
}

export default Resume;
