import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";

function Footer() {
  return (
    <footer className="Items">
      <div className="Center">
        <a className="Links Items" href="https://github.com/Teller35" target="_blank"><SiGithub size={20}/></a>
        <a className="Links Items" href="https://www.linkedin.com/in/tellerwetzel/" target="_blank"><SiLinkedin size={20}/></a>
        <a className="Links Items" href="https://twitter.com/TellerWetzel" target="_blank"><SiTwitter size={20}/></a>
      </div>
    </footer>
  );
}

export default Footer;