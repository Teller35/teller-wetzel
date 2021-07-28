import React from "react";

function Nav(props) {
  const { contactSelected, setContactSelected } = props;
  const { portfolioSelected, setPortfolioSelected } = props;
  const { resumeSelected, setResumeSelected } = props;

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
          <li className={`Items Pointer ${portfolioSelected && "Active"}`}>
            <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
          </li>
          <li className={`Items Pointer ${resumeSelected && "Active"}`}>
            <span onClick={() => setResumeSelected(true)}>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
