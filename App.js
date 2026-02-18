
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Palette from "./component/Palette";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/palette" element={<Palette />} />
    </Routes>
  );
}
export default App;