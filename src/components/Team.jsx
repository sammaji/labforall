import React from "react";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import ic_twitter from "../assets/svg/ic-twitter.svg";
import ic_github from "../assets/svg/ic-github.svg";
import ic_linkedin from "../assets/svg/ic-linkedin.svg";
import ic_instagram from "../assets/svg/ic-instagram.svg";

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
                  <a href={item.twitter}>
                    <img className="ic-socials" src={ic_twitter} />
                  </a>
                  <a href={item.github}>
                    <img className="ic-socials" src={ic_github} />
                  </a>
                  <a href={item.linkedin}>
                    <img className="ic-socials" src={ic_linkedin} />
                  </a>
                  <a href={item.instagram}>
                    <img className="ic-socials" src={ic_instagram} />
                  </a>
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
