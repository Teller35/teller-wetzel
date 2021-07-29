import React, { useState } from "react";
import Nav from "../Nav";
import About from "../About";
import ContactForm from "../Contact";
import Work from "../Work";
import Resume from "../Resume"
import Footer from "../Footer";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  

  return (
    <section>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      />
      <main>
        {resumeSelected ? (<Resume />) :
        portfolioSelected ? (<Work />) :
        contactSelected ? (<ContactForm />) :
        (<About />)}
      </main>
      <Footer />
    </section>
  );
}

export default App;
