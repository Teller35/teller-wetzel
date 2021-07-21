import React from "react";

function Nav() {
  return (
    <header className="flex-row My-1">
      <h1>
        <a href="/">
          Teller Wetzel
        </a>
      </h1>
      <nav className="Right">
        <ul className="flex-row">
          <li className="Items">
            <span>
            <a href="#about">About Me</a>
            </span>
          </li>
          <li className="Items">
            <span>
            Contact
            </span>
          </li>
          <li className="Items">
            <span>
            Portfolio
            </span>
          </li>
          <li className="Items">
            <span>
            <a href="https://drive.google.com/file/d/1sLOzMYVGHmOkXx02M3dSgDK-iptViXs3/view?usp=sharing" target="_blank">Resume</a>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;