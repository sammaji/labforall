import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import logo_with_text from "../assets/svg/logo-and-text.svg";
import dasboard_preview from "../assets/img/dashboard.png";
import "../assets/css/Hero.css";

const Hero = () => {
  const [navbarState, setNavbarState] = useState(false);

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
      <nav className="hero-desktop">
        <div>
          <img className="hero-logo" src={logo_with_text} />
        </div>
        <ul>
          <li onClick={navigateToHome}>Home</li>
          <li onClick={navigateToAbout}>About Us</li>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li onClick={navigateToContact}>Contacts</li>
          <li>
            <Link to={"/login"}>Join Us</Link>
          </li>
        </ul>
      </nav>

      <nav className="hero-mobile">
        <span
          className="hero-mobile-cover"
          onClick={() => setNavbarState((prev) => !prev)}
        >
          <RxHamburgerMenu
            color="white"
            className={"z-infinite" + (navbarState ? " display-none" : "")}
          />
          <span>
            <AiOutlineClose
              color="white"
              className={"z-infinite" + (!navbarState ? " display-none" : "")}
              style={{
                position: navbarState ? "fixed" : "relative",
              }}
            />
          </span>
        </span>

        <div className={"hero-mobile-list" + (navbarState ? " active" : "")}>
          <div className="hero-mobile-backdrop" />
          <ul className="hero-mobile-list-ul">
            <li className="hero-mobile-links" onClick={navigateToHome}>
              Home
            </li>
            <li className="hero-mobile-links" onClick={navigateToAbout}>
              About Us
            </li>
            <li className="hero-mobile-links">
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li className="hero-mobile-links" onClick={navigateToContact}>
              Contacts
            </li>
          </ul>
        </div>
      </nav>

      <div className={"hero-grid" + (navbarState ? " hero-fade" : "")}>
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
