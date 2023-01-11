import React from "react";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Team from "../components/Team";

import "../assets/css/Hero.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
