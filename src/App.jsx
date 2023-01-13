import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Analytics from "./components/Analytics";
import Content from "./components/Content";
import DashContent from "./components/DashContent";
import ExperimentList from "./components/ExperimentList";
import Dashboard from "./pages/Dashboard";
import Data from "./pages/Data";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import "./assets/css/App.css";
import "./assets/css/Animation.css";
import Simulation from "./pages/Simulation";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "/analytics/", element: <Analytics /> },
      { path: "/dashboard/", element: <DashContent /> },
      { path: "/dashboard/:classId/:subject", element: <ExperimentList /> },
      { path: "/dashboard/:classId/:subject/:exp", element: <Content /> },
      { path: "/simulation/", element: <Simulation /> },
    ],
  },
  // { path: "/dashboard/:classId", element: <Dashboard /> },

  // { path: "/data/:classId", element: <Data /> },
  // { path: "/data/:classId/:subject", element: <Data /> },
  // { path: "/data/:classId/:subject/:exp", element: <Data /> },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
