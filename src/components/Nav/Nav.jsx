import React from "react";

function Nav(props) {
  const { contactSelected, setContactSelected } = props;

  return (
    <header className="flex-row My-1">
      <h1>
        <a href="/">Teller Wetzel</a>
      </h1>
      <nav className="Right">
        <ul className="flex-row">
          <li className="Items">
            <span>
              <a href="/">About Me</a>
            </span>
          </li>
          <li className={`Items Pointer ${contactSelected && "Active"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className="Items">
            <span>Portfolio</span>
          </li>
          <li className="Items">
            <span>
              <a
                href="https://drive.google.com/file/d/1sLOzMYVGHmOkXx02M3dSgDK-iptViXs3/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
