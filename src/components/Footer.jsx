import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="footer-left">
          <span>Developer's Studio © 2022</span>
        </div>
        <div className="footer-right">
          🇮🇳
          <a
            href="https://twitter.com/sambit_dev"
            className="footer-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/SAMBIT20/Devlopers-studio"
            className="footer-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nandasambit/"
            className="footer-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:nandasambit1999@gmail.com"
            className="footer-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
