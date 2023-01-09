import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
