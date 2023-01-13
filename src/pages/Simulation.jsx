import React from "react";
import "../assets/css/Simulation.css";
import img_solar_sys from "../assets/img/pic-sim-solar.png";

const Card = () => {
  return (
    <>
      <div
        className="card"
        onClick={() => {
          console.log();
          window.open(
            `${window.location
              .toString()
              .replace(/\/simulation/g, "")}?run_sim=true`
          );
        }}
      >
        <div className="card-image">
          <img src={img_solar_sys} />
        </div>
        <div className="category"> SOLAR SYSTEM </div>
        <div className="heading">
          A fully interactive realtime simulation of the solar system containing
          all planets in their orbit.
        </div>
      </div>
    </>
  );
};

const Simulation = () => {
  return (
    <div className="simulation">
      <h2>Interactive Simulations</h2>
      <Card />
    </div>
  );
};

export default Simulation;
