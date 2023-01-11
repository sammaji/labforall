import React from "react";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

import team_json from "../data/team.json";

import rect_deco from "../assets/svg/deco-tilted-rect.svg";
import "../assets/css/Team.css";

const Team = () => {
  return (
    <div className="team">
      <div className="team-content">
        <header>
          <h2>Our Team</h2>
          <p>We believe a great team can do miracles</p>
        </header>

        <div className="team-card">
          {team_json.data.map((item, index) => {
            return (
              <div className={"card"} key={index}>
                <img src={item.avatar}></img>
                <h3>{item.name}</h3>
                <p>{item.about}</p>
                <span>
                  <AiOutlineTwitter color="#1d9bf0" />
                  <AiFillLinkedin color="#0a66c2" />
                  <AiOutlineInstagram color="#f70165" />
                </span>
              </div>
            );
          })}
        </div>

        <div className="deco-rect">
          <img src={rect_deco}></img>
        </div>
      </div>
    </div>
  );
};

export default Team;
