import React from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";

import MENU_DATA from "../data/menu.data";

import "../assets/css/NavBar.css";

const NavBar = () => {
  function toggle_menu() {
    document.querySelector(".app").classList.toggle("collapse-menu");
  }

  return (
    <nav>
      <header>
        <button onClick={toggle_menu}>{"  <  "}</button>
      </header>
      <ul>
        {MENU_DATA.map((item, index) => {
          return (
            <li key={index}>
              <IoIosHelpCircleOutline />
              <a href="#">{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
