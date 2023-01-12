import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './assets/css/Animation.css'
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Data from "./pages/Data";

import "./assets/css/App.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/data/:classId", element: <Data /> },
  { path: "/data/:classId/:subject", element: <Data /> },
  { path: "/data/:classId/:subject/:exp", element: <Data /> },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
