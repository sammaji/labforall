import React from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";

import MENU_DATA from "../data/menu.data";

import "../assets/css/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  // function toggle_menu() {
  //   document.querySelector(".app").classList.toggle("collapse-menu");
  // }

  return (
    <nav className="navbar hello">
      {/* <header>
        <button onClick={toggle_menu}>{"  <  "}</button>
      </header> */}
      <ul>
        {MENU_DATA.map((item, index) => {
          return (
            <li key={index}>
              <IoIosHelpCircleOutline />
              <Link to={item.to}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
