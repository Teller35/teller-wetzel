import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiMailDotRu } from "react-icons/si";

function Footer() {
  return (
    <footer className="container">
      <div className="row justify-content-center">
        <a className="Links Items col-auto" href="https://github.com/Teller35" target="_blank" rel="noreferrer"><SiGithub size={20}/></a>
        <a className="Links Items col-auto" href="https://www.linkedin.com/in/tellerwetzel/" target="_blank" rel="noreferrer"><SiLinkedin size={20}/></a>
        <a className="Links Items col-auto" href="https://twitter.com/TellerWetzel" target="_blank" rel="noreferrer"><SiTwitter size={20}/></a>
        <a className="Links Items col-auto" href="mailto:tellerwetzel@yahoo.com"><SiMailDotRu size={20}/></a>
      </div>
    </footer>
  );
}

export default Footer;