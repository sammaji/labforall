import { useState } from "react";
import "./assets/css/App.css";

import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <NavBar/>
      <Dashboard/>
    </div>
  );
}

export default App;
