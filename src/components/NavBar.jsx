import React from "react";
import MENU_DATA from "../data/menu.data";
import "./NavBar.css";

export default function NavBar() {
  function toggle_menu() {
    document.querySelector(".app").classList.toggle("collapse-menu");
  }

  return (
    <nav>
      <header>
        <button onClick={toggle_menu}>
          {"  <  "}
        </button>
      </header>
      <ul>
        {MENU_DATA.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
    </nav>
  );
}
