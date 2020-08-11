import React from "react";
import "../DomCompoCss/SectionCommon.scss";
import "../DomCompoCss/Footer.scss";

const Footer = () => {
  return (
    <footer className="section">
      <div className="inner clearfix">
        <ul className="site-links float--right">
          <li>
            <a href="#">Powered by md</a>
          </li>
        </ul>

        <ul className="site-links float--left">
          <a href="#" className="logo"></a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
