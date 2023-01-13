import React from "react";
import "../assets/css/Simulation.css"
import img_solar_sys from "../assets/img/pic-sim-solar.png"

const Card = () => {
  return (
    <>
      <div class="card">
        <div class="card-image">
            <img src={img_solar_sys}/>
        </div>
        <div class="category"> SOLAR SYSTEM </div>
        <div class="heading">
          {" "}
          A fully interactive realtime simulation of the solar system containing all planets in their orbit.
          <div class="author">
            {" "}
            By <span class="name">Karthik</span>
          </div>
        </div>
      </div>
    </>
  );
};

const Simulation = () => {
  return (
    <div className="simulation">
        
        <Card/>
    </div>
  );
};

export default Simulation;
