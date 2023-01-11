import React from "react";
import "../assets/css/Team.css";
import rect_deco from "../assets/svg/deco-tilted-rect.svg";

export default function Team() {
  const TEAM_DATA = [
    {
      name: "Samyabrata Maji",
      about: "Frontend Engineer",
      twitter: "sammaji15",
      linkedin: "samyabrata-maji",
      instagram: "sammaji15",
      avatar: "https://avatars.githubusercontent.com/u/116789799?v=4"
    },
    {
      name: "Samyabrata Maji",
      twitter: "sammaji15",
      about: "Frontend Engineer",
      linkedin: "samyabrata-maji",
      instagram: "sammaji15",
    },
    {
      name: "Samyabrata Maji",
      twitter: "sammaji15",
      about: "Frontend Engineer",
      linkedin: "samyabrata-maji",
      instagram: "sammaji15",
    },
    {
      name: "Samyabrata Maji",
      twitter: "sammaji15",
      about: "Frontend Engineer",
      linkedin: "samyabrata-maji",
      instagram: "sammaji15",
    },
  ];

  return (
    <div className="team">


      <div className="team-content">
        <header>
          <h2>Our Team</h2>
          <p>We believe a great team can do miracles</p>
        </header>

        <div className="team-card">
          {TEAM_DATA.map((item, index) => {
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
