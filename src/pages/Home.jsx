import React from "react";
import "../assets/css/Hero.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Team from "../components/Team";
export default function Home() {
  return (
    <div>
      <Hero />
      <Team />
      <Footer/>
    </div>
  );
}
