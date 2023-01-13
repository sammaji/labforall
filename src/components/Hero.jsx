import React from "react";
import { Link } from "react-router-dom";

import dasboard_preview from "../assets/img/dashboard.png";
import "../assets/css/Hero.css";

const Hero = () => {
  function navigateToHome() {
    window.scrollTo(0, 0);
  }

  function navigateToAbout() {
    let rect = document.getElementById("about-us-wave").getBoundingClientRect();
    window.scrollTo(0, rect.top);
  }

  function navigateToContact() {
    let rect = document.getElementById("footer").getBoundingClientRect();
    window.scrollTo(0, rect.top);
  }

  return (
    <div className="hero">
      <nav>
        <ul>
          {/* {HOME_MENU.map((item, index) => {
            return <li key={index}>{item}</li>;
          })} */}
          <li onClick={navigateToHome}>Home</li>
          <li onClick={navigateToAbout}>About Us</li>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li onClick={navigateToContact}>Contacts</li>
        </ul>
      </nav>

      <div className="hero-grid">
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
    </div>
  );
};

export default Hero;
