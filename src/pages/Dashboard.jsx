import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";
import Content from "../components/Content";
import Recom from "../components/Recom";
import DashContent from "../components/DashContent";

import "../assets/css/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Recom />
    </>
  );
};

export default Dashboard;
