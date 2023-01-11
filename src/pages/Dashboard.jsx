import React from "react";

import NavBar from "../components/NavBar";
import Content from "../components/Content";
import Recom from "../components/Recom";

import "../assets/css/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Content />
      <Recom />
    </>
  );
};

export default Dashboard;
