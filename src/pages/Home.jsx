import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Team from "../components/Team";
import "../assets/css/Hero.css";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
