import React from "react";

function Nav(props) {
  const { contactSelected, setContactSelected } = props;
  const { portfolioSelected, setPortfolioSelected } = props;
  const { resumeSelected, setResumeSelected } = props;

  return (
    <header>
      <div className="container-fluid justify-content-center">
        <div className="row align-items-center">
      <h1 className="col-sm-6">
        <a href="https://teller35.github.io/teller-wetzel/">Teller Wetzel</a>
      </h1>
      <nav className="col-sm">
        <ul className="row align-items-center">
          <li className="col-md-auto p-1">
            <span>
              <a href="https://teller35.github.io/teller-wetzel/">About Me</a>
            </span>
          </li>
          <li className={`col-md-auto Pointer ${contactSelected && "Active"}`}>
            <span onClick={() => {
              setContactSelected(true);
              setResumeSelected(false);
              setPortfolioSelected(false);
            }}>Contact</span>
          </li>
          <li className={`col-md-auto Pointer ${portfolioSelected && "Active"}`}>
            <span onClick={() => {
              setPortfolioSelected(true);
              setContactSelected(false);
              setResumeSelected(false);
              }}>Portfolio</span>
          </li>
          <li className={`col-md-auto Pointer ${resumeSelected && "Active"}`}>
            <span onClick={() => {
              setResumeSelected(true);
              setContactSelected(false);
              setPortfolioSelected(false);
              }}>Resume</span>
          </li>
        </ul>
      </nav>
        </div>
      </div>
    </header>
  );
}

export default Nav;
