import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";

function Footer() {
  return (
    <footer>
      <div className="Footer">
        <a className="Links" href=""><SiGithub size={40}/></a>
        <a className="Links" href=""><SiLinkedin size={40}/></a>
        <a className="Links" href=""><SiTwitter size={40}/></a>
      </div>
    </footer>
  );
}

export default Footer;