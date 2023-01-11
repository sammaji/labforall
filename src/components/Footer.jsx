import React from "react";

import "../assets/css/Footer.css";

const Footer = () => {
  const COMPANY = {
    heading: "Socials",
    list: ["Twitter", "LinkedIn", "Instagram", "E-mail"],
  };
  const LEGAL = {
    heading: "Socials",
    list: ["Twitter", "LinkedIn", "Instagram", "E-mail"],
  };
  const SOCIALS = {
    heading: "Socials",
    list: ["Twitter", "LinkedIn", "Instagram", "E-mail"],
  };

  return (
    <div>
      <footer>
        <ul>
          <li>{SOCIALS.heading}</li>
          {SOCIALS.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <ul>
          <li>{COMPANY.heading}</li>
          {SOCIALS.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <ul>
          <li>{LEGAL.heading}</li>
          {SOCIALS.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
