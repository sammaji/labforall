import React from "react";
import dasboard_preview from "../assets/img/dashboard.png"
import "../assets/css/Hero.css";

const Hero = () => {
  const HOME_MENU = ["Home", "About Us", "Community", "Contacts"];

  return (
    <div className="hero">
      <nav>
        <ul>
          {HOME_MENU.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </nav>

      <div className="grid-child-outer">
        <header className="grid-child-inner">
          <h2>We help you</h2>
          <h1>Learn.</h1>
        </header>
      </div>

      <div className="hero-img grid-child-outer">
        <img className="jello" src={dasboard_preview} />
      </div>
    </div>
  );
};

export default Hero;
