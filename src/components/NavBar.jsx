import React from "react";
import MENU_DATA from "../data/menu.data";
import logo_with_text from "../assets/svg/logo-and-text.svg";
import "../assets/css/nav_bar_style.css";
import { Link } from "react-router-dom";

const getImg = (type) => {
  switch (type) {
    case "earth":
      return ic_earth;
    case "graph":
      return ic_graph;
    case "chat":
      return ic_chat;
    case "book":
      return ic_book;
    default:
      return ic_earth;
  }
};

const NavBar = () => {
  // function toggle_menu() {
  //   document.querySelector(".app").classList.toggle("collapse-menu");
  // }

  return (
    <nav className="navbar hello">
      <a href="https://lab4all.vercel.app"><img src={logo_with_text} /></a>
      <ul>
        {MENU_DATA.map((item, index) => {
          return (
            <Link to={item.to} key={index}>
              <li>{item.title}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
