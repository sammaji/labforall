import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import "./assets/css/App.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
