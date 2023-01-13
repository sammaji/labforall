import React from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";

import MENU_DATA from "../data/menu.data";

import "../assets/css/nav_bar_style.css";
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
            <Link to={item.to} key={index}>
              <li>
                <IoIosHelpCircleOutline />
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
