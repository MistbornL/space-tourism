import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Destination } from "./pages/Destination";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </>
  );
}

export default App;
