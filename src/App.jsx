import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/css/Animation.css";
import Content from "./components/Content";
import DashContent from "./components/DashContent";
import ExperimentList from "./components/ExperimentList";
import Dashboard from "./pages/Dashboard";
import Data from "./pages/Data";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import "./assets/css/App.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "/dashboard/", element: <DashContent /> },
      { path: "/dashboard/:classId/:subject", element: <ExperimentList /> },
      { path: "/dashboard/:classId/:subject/:exp", element: <Content /> },
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
