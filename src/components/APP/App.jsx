import React, { useState } from "react";
import Nav from "../Nav";
import About from "../About";
import ContactForm from "../Contact";
import Work from "../Work";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  

  return (
    <section>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      />
      <main>
        {contactSelected ? (<ContactForm />) :
        portfolioSelected ? (<Work />) :
        (<About />)}
      </main>
    </section>
  );
}

export default App;
