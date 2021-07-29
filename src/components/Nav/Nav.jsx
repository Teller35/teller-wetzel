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
            <span onClick={() => {
              setContactSelected(true);
              setResumeSelected(false);
              setPortfolioSelected(false);
            }}>Contact</span>
          </li>
          <li className={`Items Pointer ${portfolioSelected && "Active"}`}>
            <span onClick={() => {
              setPortfolioSelected(true);
              setContactSelected(false);
              setResumeSelected(false);
              }}>Portfolio</span>
          </li>
          <li className={`Items Pointer ${resumeSelected && "Active"}`}>
            <span onClick={() => {
              setResumeSelected(true);
              setContactSelected(false);
              setPortfolioSelected(false);
              }}>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
