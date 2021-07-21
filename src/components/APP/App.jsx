import React, { useState } from "react";
import Nav from "../Nav";
import About from "../About";
import ContactForm from "../Contact";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <section>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
          <>
            <About />
          </>
        ) : (
          <ContactForm />
        )}
      </main>
    </section>
  );
}

export default App;
