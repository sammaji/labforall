import React from "react";
import "../assets/css/Team.css";
import rect_deco from "../assets/svg/deco-tilted-rect.svg";
import team_json from "../data/team.json";

export default function Team() {
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
                <img src="https://avatars.githubusercontent.com/u/116789799?v=4"></img>
                <h3>{item.name}</h3>
                <p>{item.about}</p>
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
}
